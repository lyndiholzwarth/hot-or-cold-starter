
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//new game function
	function newGame(){
		numRand=Math.floor((Math.random() * 100)+1);
		console.log("Answer " + numRand);
		$('#guessList').empty();
	   	var counter = document.getElementById('count');
    	counter.innerHTML = 0;
    	$('#userGuess').attr("placeholder", "Enter your Guess").val("");
	};

//new game on initial load
	newGame();

//new game on button press
	$('.new').click(function(){
		newGame()
	});

//accept user guess
	$( "form" ).on( 'click', '#guessButton', function( event ) {
		event.preventDefault();
		var numGuess = $('#userGuess').val();	
		console.log(numGuess);

//add guesses to list
		var addGuess = document.getElementById('guessList');
		addGuess.innerHTML = addGuess.innerHTML + numGuess + ", ";

//guess tally
		var counter = document.getElementById('count');
    	counter.innerHTML++;

// add items into an array
		var yourGuess = [numRand];
			yourGuess.push(numGuess);

//evaluate user guess for closeness and give message
		var evalGuess = false;
		while(!evalGuess){
// run this every guess
			//test for real number
			if (isNaN(numGuess)==true){
				alert("Sorry, I need a real number. Please try again.");
				$('#userGuess').attr("placeholder", "Enter your Guess").val("");	
				break;
			}

			//test for decimal
			else if (numGuess % 1 != 0){
				alert("Sorry, I need a whole number. Please try again.");
				$('#userGuess').attr("placeholder", "Enter your Guess").val("");	
				break;
			}
			//test for enmpy field
			else if (numGuess === ""){
				alert("Sorry, I didn't catch that. Please try again.");
				$('#userGuess').attr("placeholder", "Enter your Guess").val("");	
				break;
			}

//continue if real number 
// run this for first guess only
			else if (numGuess==numRand){
		   		console.log("You Win");
		   		evalGuess=true;
		   		alert("You win!");
		   		$('#userGuess').val("You Win!");	
		   		break;
			}
		   	else if (Math.abs(numGuess-numRand)>=50){
		   		evalGuess=false;
			   $('#userGuess').attr("placeholder", "Freezing!").val("");	
			   break;
			}
			else if (Math.abs(numGuess-numRand)>=30){
		   		evalGuess=false;
			   $('#userGuess').attr("placeholder", "Cold").val("");	
			   break;
			}
			else if (Math.abs(numGuess-numRand)>=15){
		   		evalGuess=false;
			   $('#userGuess').attr("placeholder", "Warm").val("");	
			   break;
			}
			else if (Math.abs(numGuess-numRand)>5){
		   		evalGuess=false;
			   $('#userGuess').attr("placeholder", "Hot").val("");	
			   break
			  }
			else if (Math.abs(numGuess-numRand)<=5){
		   		evalGuess=false;
			   $('#userGuess').attr("placeholder", "Burning!").val("");	
			   break;
			}
		}
			console.log("array:" + yourGuess);

	});
	
// run this for all subsequent guesses
//	if Math.abs(numGuessA-numRand) < Math.abs(numGuessB-numRand){
//		$('#userGuess').attr("placeholder", "Warmer").val("");	
//		break;
//	}

//	else if Math.abs(numGuessA-numRand) > Math.abs(numGuessB-numRand){
//		$('#userGuess').attr("placeholder", "Cooler").val("");	
//		break;
//	}


// compare items in the array

// how to run different options for different guesses

});

