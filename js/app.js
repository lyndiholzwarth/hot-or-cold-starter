
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
    	var yourGuess=[];
    	guessEnters=1;
	};

	//new game on initial load
	newGame();

	//new game on button press
	$('.new').click(function(){
		newGame()
	});

	//accept user guess
	//var guessEnters = 1;
	$( "form" ).on( 'click', '#guessButton', function( event ) {
		event.preventDefault();
		numGuess = $('#userGuess').val();	
		console.log(numGuess);

		//add guesses to list
		var addGuess = document.getElementById('guessList');
		addGuess.innerHTML = addGuess.innerHTML + numGuess + ", ";

		//guess tally
		var counter = document.getElementById('count');
    	counter.innerHTML++;

    	//evaluate user guess for closeness and give message
		judgeGuess();

		// // add items into an array
		// var yourGuess = [numRand];
		// yourGuess.push(numGuess);
 	// 	console.log("array:" + yourGuess);
	});


//evaluate guess function
function judgeGuess() {
    if ( guessEnters == 1 ) {
 		var evalGuess = false;
		while(!evalGuess){

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
			else if (numGuess==numRand){
		   		console.log("You Win");
		   		evalGuess=true;
		   		alert("You win!");
		   		$('#userGuess').val("You Win!");
		   		yourGuess.length = 0;	
		   		break;
			}

			// run this for first guess only
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
		};
		// add items into an array
		yourGuess1 = Math.abs(numGuess-numRand);
		yourGuess = [yourGuess1];
        console.log("First guess");
        guessEnters=2;
    }

//second guess
   else if ( guessEnters == 2 ) {
    	while(!evalGuess){
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
			else if (numGuess==numRand){
		   		console.log("You Win");
		   		evalGuess=true;
		   		alert("You win!");
		   		$('#userGuess').val("You Win!");	
		   		yourGuess.length = 0;
		   		break;
			}

			else{
				evalGuess=false;
				yourGuess.splice(0,0,(Math.abs(numGuess-numRand)));
		 		console.log("array:" + yourGuess);
		 		guessCompare();
		        guessEnters++;
		        break;
		       }

	    }
    }

//additional guess
   else {
    	while(!evalGuess){
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
			else if (numGuess==numRand){
		   		console.log("You Win");
		   		evalGuess=true;
		   		alert("You win!");
		   		$('#userGuess').val("You Win!");	
		   		yourGuess.length = 0;
		   		break;
			}

			else{
				evalGuess=false;
				yourGuess.splice(0,0,(Math.abs(numGuess-numRand)));
		 		console.log("array:" + yourGuess);
		 		guessCompare();
		        guessEnters++;
		        break;
		       }
	    }
    }
};

	function guessCompare(){
		if (yourGuess[0]==yourGuess[1]){
			$('#userGuess').attr("placeholder", "Same guess").val("");	
		}

		else if (yourGuess[0]==1){
			$('#userGuess').attr("placeholder", "Burning!").val("");	
		}

		else if (yourGuess[0]<yourGuess[1]){
			$('#userGuess').attr("placeholder", "Warmer").val("");	
		}

		else if (yourGuess[0]>yourGuess[1]){
			$('#userGuess').attr("placeholder", "Cooler").val("");	
		}
	};
});

