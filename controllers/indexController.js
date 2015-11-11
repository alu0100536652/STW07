var QuizModule = require('../models/questionModel'),
    question = new QuizModule.Quiz();
    
exports.index = function(req, res, next) {
  res.render('partials/start');
};

exports.question = function(req, res, next) {
  console.log(question);
  res.render('partials/question',question);
};

exports.result = function(req, res, next) {
  console.log("Respuesta: " + req.body.response);
  console.log("Tiempo: " + req.body.time);
  var puntos;
  var aciertos = 0;
  if ((req.body.time != undefined)&&(req.body.response == question['result']))
  {
    puntos = req.body.time;
    aciertos++;
  }
  else
    puntos = 0;
  res.render('partials/result',{result: puntos, success: aciertos});
};