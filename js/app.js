
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//ew game function
	function newGame(){
		numRand=Math.floor((Math.random() * 100)+1);
		console.log("Answer " + numRand);
		$('#guessList').empty();
	   	var counter = document.getElementById('count');
    	counter.innerHTML = 0;
    	$('#userGuess').attr("placeholder", "Enter your Guess").val("");
	};


newGame();

//new game on button press
	$('.new').click(function(){
		newGame()
	});


//accept user guess
	$( "form" ).on( 'click', '#guessButton', function( event ) {
//		numRand;
		var numGuess = $('#userGuess').val();	
		event.preventDefault();
		console.log(numGuess);

//add guesses to list
		var addGuess = document.getElementById('guessList');
		addGuess.innerHTML = addGuess.innerHTML + numGuess + ", ";

//guess tally
		var counter = document.getElementById('count');
    	counter.innerHTML++;

//evaluate user guess for closeness and give message
		var evalGuess = false;

		while(!evalGuess){
//test for real number
		if (isNaN(numGuess)==true){
			alert("Sorry, I need a real number. Please try again.");
			$('#userGuess').attr("placeholder", "Enter your Guess").val("");	
			break;
			//maxNumber= false;
		}

		//test for decimal
		else if (numGuess % 1 != 0){
			alert("Sorry, I need a whole number. Please try again.");
			$('#userGuess').attr("placeholder", "Enter your Guess").val("");	
			break;
		}


//continue if real number
			else if (numGuess==numRand){
		   		console.log("You Win");
		   		evalGuess=true;
		   //		alert("You win!");
		   		$('#userGuess').val("You Win!");	
		   		break;
			}
		   	else if (numGuess-numRand>=50||numRand-numGuess>=50){
		   		evalGuess=false;
		   	//	alert("Too Low. Guess again");
			   $('#userGuess').attr("placeholder", "Freezing!").val("");	
			   break;
			}
			else if (numGuess-numRand>=30||numRand-numGuess>=30){
		   		evalGuess=false;
		//   		alert("Too high. Guess again");
			   $('#userGuess').attr("placeholder", "Cold").val("");	
			   break;
			}
			else if (numGuess-numRand>=15||numRand-numGuess>=15){
		   		evalGuess=false;
		//   		alert("Too high. Guess again");
			   $('#userGuess').attr("placeholder", "Warmer").val("");	
			   break;
			}
			else if (numGuess-numRand>5||numRand-numGuess>5){
		   		evalGuess=false;
		//   		alert("Too high. Guess again");
			   $('#userGuess').attr("placeholder", "Hot").val("");	
			   break
			  }
			else if (numGuess-numRand<=5||numRand-numGuess<=5){
		   		evalGuess=false;
		//   		alert("Too high. Guess again");
			   $('#userGuess').attr("placeholder", "Burning!").val("");	
			   break;
			}
		} 
	});



//congrats message


});

