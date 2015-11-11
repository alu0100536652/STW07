var QuizModule = require('../models/questionModel'),
    question;
    
exports.index = function(req, res, next) {
  res.render('partials/start');
};

exports.question = function(req, res, next) {
  question = new QuizModule.Quiz();
  console.log(question.question());
  res.render('partials/question',question.question());
};

exports.result = function(req, res, next) {
  console.log("Respuesta: " + req.body.response);
  console.log("Tiempo: " + req.body.time);
  var puntos;
  var aciertos = 0;
  if ((req.body.time != undefined)&&(req.body.response == question.check(req.body.id)))
  {
    puntos = req.body.time;
    aciertos++;
  }
  else
    puntos = 0;
  res.render('partials/result',{result: puntos, success: aciertos});
};