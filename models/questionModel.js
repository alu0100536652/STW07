(function(exports){
    
    var quizCollection = [
            {id: 1, type:"Ciencia", question:"¿Cuantos planetas tiene el sistema solar?",response1: "6",response2: "7",response3: "8",response4: "5", result: "8"},
            {id: 2, type:"Deporte", question:"¿En que año España gano el mundial de futbol?",response1: "2011",response2: "2010",response3: "2009",response4: "2012", result: "2010"},
            {id: 3, type:"Entretenimiento", question:"¿Cuantas peliculas hay de la saga Stars Wars?",response1: "8",response2: "9",response3: "7",response4: "6", result: "7"},
           ];
    
    function Quiz() {
        this.question = function() {
            return quizCollection[Math.floor((Math.random() * 3))];
        }
        this.check = function(questionId) {
            console.log("Comprobar" + questionId)
            for (var i = 0; i < quizCollection.length; i++) 
                if (quizCollection[i].id == questionId)
                    return quizCollection[i].result;
        };
    }
    
    exports.Quiz = Quiz;
    
})(this);