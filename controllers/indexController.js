exports.index = function(req, res, next) {
  res.render('partials/start');
};

exports.question = function(req, res, next) {
  res.render('partials/question',{type: 'Geografia', question: '¿Capital del España?', response1: 'Madrid',response2: 'Sevilla',response3: 'Ibiza',response4: 'Barcelona'});
};

exports.check = function(req, res, next) {
    console.log(req.body.response)
  res.render('partials/start');
};