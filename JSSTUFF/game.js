


const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
const songs = ["01. one of a kind.mp3", "14. two of a kind.mp3","17. Way to Fly - 蒼の彼方へ.mp3"];
const randomSong = songs[Math.floor(Math.random() * songs.length)];
var checkBox = document.getElementById("myCheck");
var checkBox1 = document.getElementById("myCheck1");
var checkBox2 = document.getElementById("myCheck2");
const cb = document.querySelector('#myCheck');
//const audior = document.getElementById("songSelector");
//audior.src= randomSong;






let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];
let fetcher = "songs.json";
let fetcher2 = "questions.json";


/*fetch(fetcher)
.then( res => {
    return res.json(); 
}).then( loadedQuestions => {
    
        questions = loadedQuestions;
       startGame();
    
  
})
.catch( err =>{
    console.log(err);
});
*/

      fetch(fetcher)
        .then( res => {
            return res.json(); 
        }).then( loadedQuestions => {
            if(localStorage.getItem("myCheck") == "true"){
                questions = loadedQuestions;
               /// startGame();
            }
            
          
        })
        .catch( err =>{
            console.log(err);
        });
      ////////////////////////////////////////////////////////////////////////
        fetch(fetcher2)
        .then( res => {
            return res.json(); 
        }).then( loadedQuestions => {
            if(localStorage.getItem("myCheck1") == "true"){
                questions = questions.concat(loadedQuestions);
                console.log("1 equals 1"); 
            }          
            
            startGame();
        })
        .catch( err =>{
            console.log(err);
        });
        
    
      
      
        
        






const CORRECT_BONUS = 10;
const MAX_QUESTIONS =     localStorage.getItem("count");




startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    fullAvailableQuestions = [...questions];
    totalQuestions = availableQuestions.length;
    console.log("my int thing");
  console.log(availableQuestions.map(a=>a.answer));
    getNewQuestion();
    game.classList.remove('hidden');
   loader.classList.add('hidden');
   
};


getNewQuestion = () => {






 const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [ "apple","potatoe"];
console.log(fruit)
console.log(fullAvailableQuestions.map(a=>a.answer));
function search(str) {
	let results = [];
	const val = str.toLowerCase();

	for (i = 0; i < fullAvailableQuestions.map(a=>a.answer).length; i++) {
		if (fullAvailableQuestions.map(a=>a.answer)[i].toLowerCase().indexOf(val) > -1) {
			results.push(fullAvailableQuestions.map(a=>a.answer)[i]);
		}
	}

	return results;
}

function searchHandler(e) {
	const inputVal = e.currentTarget.value;
	let results = [];
	if (inputVal.length > 0) {
		results = search(inputVal);
	}
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
    
    suggestions.innerHTML = '';

	if (results.length > 0) {
		for (i = 0; i < results.length; i++) {
			let item = results[i];
			// Highlights only the first match
			// TODO: highlight all matches
			const match = item.match(new RegExp(inputVal, 'i'));
			//item = item.replace(match[0], `<strong>${match[0]}</strong>`);
			suggestions.innerHTML += `<li>${item}</li>`;
		}
		suggestions.classList.add('has-suggestions');
	} else {
		results = [];
		suggestions.innerHTML = '';
		suggestions.classList.remove('has-suggestions');
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	input.focus();
	suggestions.innerHTML = '';
	suggestions.classList.remove('has-suggestions');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);












    
        if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
            localStorage.setItem('mostRecentScore', score);
            return window.location.assign("/end.html");
        }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`; 
        
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS )* 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    //console.log(currentQuestion);
   // console.log("HELLO THERE ASHODUIDSAHUIOHUIDSA");

    //question.innerText = currentQuestion.question;
    //audior.src= songs[questionIndex];
    const arisaka = "/MEDIA/";
    document.getElementById("songSelector").setAttribute('src', arisaka + currentQuestion.question);

    document.getElementById("mashiro").load();

    choices.forEach( choice => {

        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    })
    

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;


    var timeLeft = 10;
    
    var theTimer = setInterval(() => {
       if(timeLeft <=0){
        clearInterval(theTimer);
       } 
       document.getElementById("timer").innerHTML = timeLeft--;
       console.log(document.getElementById("timer").innerHTML);
       
    }, 1000);

    


    setTimeout(() => {
        const selectedAnswer = document.getElementById('fruit').value;
    console.log("U DID THE GAY!!");
   
        const classToApply = selectedAnswer == currentQuestion.answer ? 
    "correct" : "incorrect";
    
    if(classToApply == 'correct'){
        incrementScore(CORRECT_BONUS);
    }
        
    document.getElementById('fruit').value = '';
            setTimeout(() => {
                getNewQuestion();
            }, 3000);
           

    }, 11000);
};




//document.getElementById("songSelector").src= songs[questionIndex];
// 


    
        
//document.getElementById('fruit').onkeypress = function(e){
  //  if (!e) e = window.event;
  //  var keyCode = e.code || e.key;
  //  if (keyCode == 'Enter'){
   //     const picked = document.getElementById('fruit');
        
//
       
  //  }
  //}
       
         
         
         

        
 




incrementScore = num =>{
    score += num;
    scoreText.innerText = score;  
    
}