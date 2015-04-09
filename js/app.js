
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
		console.log(numGuess)
	});

//evaluate user guess for closeness and give message
	var numGuess;
	var evalGuess = false;

	while(!evalGuess){
		if (numGuess==numRand){
	   		console.log("You Win");
		}
	   	else if (numGuess<numRand){
	   		console.log("Lower");
		}
		else if (numGuess>numRand){
	   		console.log("Higher");
		}
	}  

//add guesses to list

//congrats message

//new game on button press

});

/*var max;
	var maxNumber = false;
	console.log(Number(max))
	
	while(!maxNumber)
	{
		var max = prompt("How high should I FizzBuzz? Please supply a number");
		
		//check if number
		if (isNaN(max)==true){
			console.log("not a number");
			alert("Sorry, I need a real number. Please try again.");
			maxNumber= false;
		}

		//test for decimal
		else if (max % 1 != 0){
			console.log("decimal");
			alert("Sorry, I need a whole number. Please try again.");
			maxNumber=false;
		}

		else if (max==0){
			console.log("Zero!");
			alert("Counting to zero is no fun. Please try again.");
			maxNumber=false;
		}

		else if (max<0){
			console.log("It's negative");
			alert("Let's count UP. Please try again.");
			maxNumber=false;
		}
	
	// then run fizzbuzz
		else maxNumber=true;

	}*/