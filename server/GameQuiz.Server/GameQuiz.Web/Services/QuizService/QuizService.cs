﻿using GameQuiz.Web.Data;
using GameQuiz.Web.Data.Models;
using GameQuiz.Web.InputModels;
using GameQuiz.Web.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Services.QuizService
{
    public class QuizService : IQuizService
    {
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
                    IsCorrect = currQuestion.CorrectIndex == 3? true : false,
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

        public IEnumerable<QuizViewModel> GetAll()
        {
            var quizzesToReturn = new List<QuizViewModel>();
            var dbQuizzes = this.db.Quizzes.ToList();

            foreach (var quiz in dbQuizzes)
            {
                var currQuiz = new QuizViewModel()
                {
                    Name=quiz.Name,
                   
                };
                quizzesToReturn.Add(currQuiz);
            }
            return quizzesToReturn;
        }

        public PlayQuizViewModel GetQuiz(string id)
        {
            var quiz = this.db.Quizzes.FirstOrDefault(x => x.Id == id);
            var quizToReturn = new PlayQuizViewModel();


            return quizToReturn;
        }
    }
}
