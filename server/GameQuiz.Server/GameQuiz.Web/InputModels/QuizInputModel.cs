﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.InputModels
{
    public class QuizInputModel
    {
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
