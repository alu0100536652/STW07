var QuizModule = require('../models/questionModel'),
    question;
    
exports.index = function(req, res, next) {
  var jsonCookie = JSON.stringify({id: 0, aciertos: 0, puntos: 0})
    res.cookie('id', jsonCookie);
  res.render('partials/start');
};

exports.question = function(req, res, next) {
  var jsonDataCookie,
      id;
      
  if(req.cookies.id != undefined)
  {
    jsonDataCookie = JSON.parse(req.cookies.id) 
    console.log(jsonDataCookie)
    id = jsonDataCookie['id'];
  }
  else
    id = 0;
    
  question = new QuizModule.Quiz(id);
  res.render('partials/question',question.question());
};

exports.result = function(req, res, next) {
  console.log("Respuesta: " + req.body.response);
  console.log("Tiempo: " + req.body.time);
  var jsonDataCookie = JSON.parse(req.cookies.id)
  console.log(jsonDataCookie)
  var puntos;
  var number = req.body.id
  var aciertos = parseInt(jsonDataCookie['aciertos'])
  if ((req.body.time != undefined)&&(req.body.response == question.check(number)))
  {
    puntos = parseInt(req.body.time) + parseInt(jsonDataCookie['puntos']);
    aciertos++;
  }
  else
    puntos = 0 + parseInt(jsonDataCookie['puntos']);
  
  if(number < 6) {
    var jsonCookie = JSON.stringify({id: number++, aciertos: aciertos, puntos: puntos})
    res.cookie('id', jsonCookie);
    res.redirect("/question");
    
  }
  else
  {
    res.clearCookie('id');
    res.render('partials/result',{result: puntos, success: aciertos});
  }
};