


saveHighScore = (e) =>{
    count = document.getElementById('count').value;
    quizType = document.getElementById('myCheck').checked;
    quizType1 = document.getElementById('myCheck1').checked;

    console.log("storage success");
    e.preventDefault();

    localStorage.setItem("count", count);
    localStorage.setItem("myCheck", quizType);
    localStorage.setItem("myCheck1", quizType1);

    
    


     
    window.location.assign('/game.html');
}