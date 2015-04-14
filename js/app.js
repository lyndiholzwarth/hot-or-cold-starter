
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//randomly select number
	var numRand = Math.floor(Math.random() * 101);
	console.log(numRand);

//accept user guess
	$( "form" ).on( 'click', '#guessButton', function( event ) {
		var numGuess = $('#userGuess').val();	
		event.preventDefault();
		console.log(numGuess);



//evaluate user guess for closeness and give message
//compare numGuess within 10 of numRand; numRand plus minus 10 = numGuess
//compare numGuess within 30 of numRand; numRand plus minus 30 = numGuess
//compare numGuess more than 50 of numRand; numRand plus 50 = numGuess
	var evalGuess = false;

	while(!evalGuess){
		if (numGuess==numRand){
	   		console.log("You Win");
	   		evalGuess=true;
	   		alert("You win!");
	   		$('#userGuess').val("");	
	   		break;
		}
	   	else if (numGuess-numRand>=50||numRand-numGuess>=50){
	   		evalGuess=false;
	   	//	alert("Too Low. Guess again");
		   $('#userGuess').val("Very Cold");	
		   break;
		}
		else if (numGuess-numRand>=30||numRand-numGuess>=30){
	   		evalGuess=false;
	//   		alert("Too high. Guess again");
		   $('#userGuess').val("Cold");	
		   break;
		}
		else if (numGuess-numRand>=15||numRand-numGuess>=15){
	   		evalGuess=false;
	//   		alert("Too high. Guess again");
		   $('#userGuess').val("Hot");	
		   break;
		}
		else if (numGuess-numRand>5||numRand-numGuess>5){
	   		evalGuess=false;
	//   		alert("Too high. Guess again");
		   $('#userGuess').val("kinda Hot");	
		   break
		  }
		else if (numGuess-numRand<=5||numRand-numGuess<=5){
	   		evalGuess=false;
	//   		alert("Too high. Guess again");
		   $('#userGuess').val("very Hot");	
		   break;
		}

//		else
	}  
});

//add guesses to list

//congrats message

//new game on button press*/

});

