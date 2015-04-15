
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
	var numRand = Math.floor((Math.random() * 100)+1);
	console.log(numRand);

//new game on button press
	$('.new').click(function(){
		var numRand=Math.floor((Math.random() * 101)+1);
		console.log(numRand);
	//    $('#guessList').reset( );
	 //   $('#count')
//not resetting comparision commands*****************
	});


//accept user guess
	$( "form" ).on( 'click', '#guessButton', function( event ) {
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
			if (numGuess==numRand){
		   		console.log("You Win");
		   		evalGuess=true;
		   //		alert("You win!");
		   		$('#userGuess').val("You Win!");	
		   		break;
			}
		   	else if (numGuess-numRand>=50||numRand-numGuess>=50){
		   		evalGuess=false;
		   	//	alert("Too Low. Guess again");
			   $('#userGuess').val("Freezing");	
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
			   $('#userGuess').val("Warmer");	
			   break;
			}
			else if (numGuess-numRand>5||numRand-numGuess>5){
		   		evalGuess=false;
		//   		alert("Too high. Guess again");
			   $('#userGuess').val("Hot");	
			   break
			  }
			else if (numGuess-numRand<=5||numRand-numGuess<=5){
		   		evalGuess=false;
		//   		alert("Too high. Guess again");
			   $('#userGuess').val("Burning!");	
			   break;
			}
		} 
	});



//congrats message


});

