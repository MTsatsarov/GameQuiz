using GameQuiz.Web.Data;
using GameQuiz.Web.Data.Models;
using GameQuiz.Web.InputModels;
using GameQuiz.Web.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Services.QuizService
{
    public class QuizService : IQuizService
    {
        private const int itemsPerPage = 10;
        private readonly ApplicationDbContext db;

        public QuizService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public void Create(QuizInputModel quiz)
        {
            var quizToInsert = new Quiz()
            {
                Name = quiz.Name,
                CreatorId = quiz.Creator

            };
            foreach (var currQuestion in quiz.Questions)
            {
                var question = new Question()
                {
                    Title = currQuestion.Title,
                };
                foreach (var currAnswer in currQuestion.AnswerArray)
                {
                    var answer = new Answer()
                    {
                        Title = currAnswer,

                    };
                    bool isCorrect = currQuestion.Correct == currAnswer ? true : false;
                    answer.IsCorrect = isCorrect;
                    this.db.Answers.Add(answer);
                    question.Answers.Add(answer);
                }
                this.db.Questions.Add(question);
                quizToInsert.Questions.Add(question);
            }
            this.db.Quizzes.Add(quizToInsert);
            this.db.SaveChanges();
        }

        [HttpGet]
        public QuizListViewModel GetAll(int page)
        {
            var quizzes = new QuizListViewModel();
            quizzes.Quizzes = this.db.Quizzes.OrderByDescending(x => x.CreatedOn).Select(x => new QuizViewModel
            {
                Id = x.Id,
                Name = x.Name,
                VotesCount = x.Votes.Count(),
                Grade = x.Votes.Count() == 0 ? 0 : Math.Round(x.Votes.Average(x => x.Grade), 2),
                Taken = x.Taken,
                CreatorName = this.db.Users.Where(u => u.Id == x.CreatorId).Select(x => x.UserName).FirstOrDefault()
            }).Skip(itemsPerPage * (page - 1)).Take(itemsPerPage).ToList();
            quizzes.QuizzesCount = GetCount();
            quizzes.ItemsPerPage = 10;
            quizzes.CurrentPage = page;

            return quizzes;
        }

        public PlayQuizViewModel GetQuiz(string id)
        {
            var quiz = this.db.Quizzes.FirstOrDefault(x => x.Id == id);
            var quizToReturn = new PlayQuizViewModel()
            {
                Id = quiz.Id,
                Name = quiz.Name,
                Questions = quiz.Questions.Select(x => new QuestionViewModel
                {
                    Id = x.Id,
                    Title = x.Title,
                    Answers = x.Answers.Select(y => new AnswerPlayModel
                    {
                        Id = y.Id,
                        Title = y.Title
                    }).ToList(),
                    CorrectAnswer = x.Answers.Where(i => i.IsCorrect == true).Select(i => id).FirstOrDefault()
                }).ToList()

            };
            return quizToReturn;
        }


        public int GetCount() => this.db.Quizzes.Count();

        public async Task<List<QuizViewModel>> GetAllByUser(string id)
        {

            return this.db.Quizzes.Where(x => x.CreatorId == id).OrderByDescending(x => x.CreatedOn).Select(x => new QuizViewModel
            {
                Id = x.Id,
                Name = x.Name,
                VotesCount = x.Votes.Count(),
                Grade = x.Votes.Count() == 0 ? 0 : Math.Round(x.Votes.Average(x => x.Grade), 2),
                Taken = x.Taken,
                CreatorName = this.db.Users.Where(u => u.Id == x.CreatorId).Select(x => x.UserName).FirstOrDefault()
            }).ToList();
        }

        public async Task<QuizResultViewModel> GetResultAsync(QuizResultInputModel model)
        {
            var viewModel = new QuizResultViewModel();
            var quiz = this.db.Quizzes.Where(x => x.Id == model.Id).FirstOrDefault();

            var points = 0;
            foreach (var question in quiz.Questions)
            {
                var currQuestion = model.QuestionsArray.Where(x => x.Name == question.Title).FirstOrDefault();
                var correctAnswer = question.Answers.First(x => x.IsCorrect == true);
                if (correctAnswer.Id == currQuestion.Answer)
                {
                    points++;
                }
            }
            var currentResult = this.db.Results.Where(x => x.QuizId == model.Id && model.User == x.UserId).FirstOrDefault();
            if (currentResult != null)
            {
                currentResult.Percentage = ((double)(points) / (double)(model.QuestionsArray.Count())) * 100;
                currentResult.Points = points;
                db.Results.Update(currentResult);
            }
            else
            {
                currentResult = new Result()
                {
                    Points = points,
                    Percentage = ((double)(points) / (double)(model.QuestionsArray.Count())) * 100,
                    TotalPoints = model.QuestionsArray.Count(),
                    UserId = model.User,
                    QuizId = model.Id
                };
                await db.Results.AddAsync(currentResult);

            }

            quiz.Taken++;
            db.Quizzes.Update(quiz);
            await db.SaveChangesAsync();
            viewModel.Score = points;
            viewModel.MaxScore = quiz.Questions.Count();

            return viewModel;
        }
    }
}
