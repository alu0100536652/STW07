(function(exports){
    
    var quizCollection = [
            {"type":"Ciencia", "question":"¿Cuantos planetas tiene el sistema solar?",response1: "6",response2: "7",response3: "8",response4: "5", result: "8"},            
            {"type":"Deporte", "question":"",response1: "",response2: "",response3: "",response4: ""},     
            {"type":"Entretenimiento", "question":"",response1: "",response2: "",response3: "",response4: ""},     
            {"type":"Historia", "question":"",response1: "",response2: "",response3: "",response4: ""},     
            {"type":"Geografia", "question":"",response1: "",response2: "",response3: "",response4: ""},     
            {"type":"Arte y Literatura", "question":"",response1: "",response2: "",response3: "",response4: ""}];
    
    function Quiz() {
        return quizCollection[0];
    }
    
    exports.Quiz = Quiz;
    
})(this);