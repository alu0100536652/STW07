exports.index = function(req, res, next) {
  res.render('partials/start');
};

exports.question = function(req, res, next) {
  res.render('partials/question',{type: 'Geografia', question: '¿Capital del España?', response1: 'Madrid',response2: 'Sevilla',response3: 'Ibiza',response4: 'Barcelona'});
};

exports.check = function(req, res, next) {
  console.log(req.body.response)
  res.redirect('/result');
};

exports.result = function(req, res, next) {
  console.log("Respuesta: " + req.body.response);
  console.log("Tiempo: " + req.body.time);
  var puntos;
  if ((req.body.time != undefined)&&(req.body.response == 'Madrid'))
    puntos = req.body.time;
  else
    puntos = 0;
  res.render('partials/result',{result: puntos});
};