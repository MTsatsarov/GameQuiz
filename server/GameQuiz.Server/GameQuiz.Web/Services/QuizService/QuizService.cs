using GameQuiz.Web.Data;
using GameQuiz.Web.Data.Models;
using GameQuiz.Web.InputModels;
using GameQuiz.Web.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

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
                CreatorId= quiz.Creator

            };
            foreach (var currQuestion in quiz.Questions)
            {
                var question = new Question()
                {
                    Title = currQuestion.Title,
                };
                var firstAnswer = new Answer()
                {
                    Title = currQuestion.FirstAnswer,
                    IsCorrect = currQuestion.CorrectIndex == 1 ? true : false,
                };
                var secondAnswer = new Answer()
                {
                    Title = currQuestion.SecondAnswer,
                    IsCorrect = currQuestion.CorrectIndex == 2 ? true : false,
                };
                var thirdAnswer = new Answer()
                {
                    Title = currQuestion.ThirdAnswer,
                    IsCorrect = currQuestion.CorrectIndex == 3 ? true : false,
                };
                var fourthAnswer = new Answer()
                {
                    Title = currQuestion.FourthAnswer,
                    IsCorrect = currQuestion.CorrectIndex == 4 ? true : false,
                };
                question.Answers.Add(firstAnswer);
                question.Answers.Add(secondAnswer);
                question.Answers.Add(thirdAnswer);
                question.Answers.Add(fourthAnswer);
                question.Quiz = quizToInsert;
                quizToInsert.Questions.Add(question);
                this.db.Questions.Add(question);

            }
            this.db.Quizzes.Add(quizToInsert);
            this.db.SaveChanges();
        }

        [HttpGet]
        public QuizListViewModel GetAll(int page)
        {
            var quizzes = new QuizListViewModel();
            quizzes.Quizzes = this.db.Quizzes.Select(x => new QuizViewModel
            {
                Id = x.Id,
                Name = x.Name,
                VotesCount = x.Votes.Count(),
                Grade = x.Votes.Count() == 0 ? 0 : Math.Round(x.Votes.Average(x => x.Grade), 2),
                Taken = x.Taken,
                CreatorName= this.db.Users.Where(u=>u.Id==x.CreatorId).Select(x=>x.UserName).FirstOrDefault()
            }).Skip(itemsPerPage * (page-1)).Take(itemsPerPage).ToList();
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
                    Title = x.Title,
                    FirstAnswer = x.Answers.OrderBy(x => x.Id).First().Title,
                    SecondAnswer = x.Answers.OrderBy(x => x.Id).Skip(1).First().Title,
                    ThirdAnswer = x.Answers.OrderBy(x => x.Id).Skip(2).First().Title,
                    FourthAnswer = x.Answers.OrderBy(x => x.Id).Skip(3).First().Title,
                }).ToList()
            };
            return quizToReturn;
        }

        public int GetCount() => this.db.Quizzes.Count();

    }
}
