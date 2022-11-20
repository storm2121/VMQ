 
  //Misc Helpers
  function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function getKeyString(x, y) {
    return `${x}x${y}`;
  }

  authing = () =>{

    firebase.auth().onAuthStateChanged((user)=> {
      console.log(user);
      console.log("HELLO THERE IM THE USER!!!");

      if(user){
        //you're logged in!
      }else {
        // You're logged out!!
      }
    })

    firebase.auth().signInAnonymously().catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode, errorMessage);
    });

  };

  authing();
