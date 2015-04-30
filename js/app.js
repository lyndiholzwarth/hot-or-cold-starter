
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
	});
//evaluate guess function
function judgeGuess() {
	 var evalGuess = false;

	//test for real number
	if (isNaN(numGuess)==true){
		alert("Sorry, I need a real number. Please try again.");
		$('#userGuess').attr("placeholder", "Enter your Guess").val("");
		evalGuess=true;	
	}

	//test for decimal
	else if (numGuess % 1 != 0){
		alert("Sorry, I need a whole number. Please try again.");
		$('#userGuess').attr("placeholder", "Enter your Guess").val("");
		evalGuess=true;
	}
	//test for enmpy field
	else if (numGuess === ""){
		alert("Sorry, I didn't catch that. Please try again.");
		$('#userGuess').attr("placeholder", "Enter your Guess").val("");
		evalGuess=true;
	}

	//continue if real number 
	if (numGuess==numRand){
   		console.log("You Win");
   		alert("You win!");
   		$('#userGuess').val("You Win!");
   		yourGuess.length = 0;	
   		evalGuess=true;
	}

	if ( guessEnters == 1 ) {
		while(!evalGuess){	
			// run this for first guess only
		   	if (Math.abs(numGuess-numRand)>=50){
			   $('#userGuess').attr("placeholder", "Freezing!").val("");	
   				evalGuess=true;
			}
			else if (Math.abs(numGuess-numRand)>=30){
			   $('#userGuess').attr("placeholder", "Cold").val("");	
			   evalGuess=true;
			}
			else if (Math.abs(numGuess-numRand)>=15){
			   $('#userGuess').attr("placeholder", "Warm").val("");	
			   evalGuess=true;
			}
			else if (Math.abs(numGuess-numRand)>5){
			   $('#userGuess').attr("placeholder", "Hot").val("");	
			   evalGuess=true
			  }
			else if (Math.abs(numGuess-numRand)<=5){
			   $('#userGuess').attr("placeholder", "Burning!").val("");	
			   evalGuess=true;
			}
		};
		// add items into an array
		yourGuess1 = Math.abs(numGuess-numRand);
		yourGuess = [yourGuess1];
        console.log("First guess");
        guessEnters++;
    }

	//additional guess
   else {
		while(!evalGuess){	
			yourGuess.splice(0,0,(Math.abs(numGuess-numRand)));
	 		console.log("array:" + yourGuess);
	 		guessCompare();
	        guessEnters++;
	       	evalGuess=true;
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

