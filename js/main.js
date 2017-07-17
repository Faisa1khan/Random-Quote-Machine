
$(document).ready(function() {
	$("#newquote").on("click", function(){

    var randomQuote = {

    	"quote": {
    		1: "Don't cry because it's over, smile because it happened",
    		2: "Be yourself; everyone else is already taken",
    		3: "A room without books is like a body without a soul",
    		4: "Be the change that you wish to see in the world",
    		5: "If you tell the truth, you don't have to remember anything",
    		6: "Assume nobody else has any idea what they're doing, either",
    		7: "",
    		8: "",
    		9: ""
    	},

    	"author": {

    		1: "Dr. Seuss",
    		2: "Oscar Wilde",
    		3: "Marcus Tullius Cicero",
    		4: "Mahatma Gandhi",
    		5: "Mark Twain",
    		6: "Aaron Swartz",
    		7: "",
    		8: "",
    		9: ""
    	}

    }

     var ranNum = Math.floor(Math.random() * 7);

       $("#quote").html(randomQuote.quote[ranNum]);
       $("#author").html(randomQuote.author[ranNum]);


       $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + randomQuote.quote[ranNum] + '" ' + randomQuote.author[ranNum]));


	});



});

/*
“Don't cry because it's over, smile because it happened.” 
― Dr. Seuss

“Be yourself; everyone else is already taken.” 
― Oscar Wilde

“A room without books is like a body without a soul.” 
― Marcus Tullius Cicero

“Be the change that you wish to see in the world.” 
― Mahatma Gandhi

“If you tell the truth, you don't have to remember anything.” 
― Mark Twain

I first met Jimbo Wales, the face of Wikipedia, when he came to speak at Stanford. Aaron Swartz
Read more at: https://www.brainyquote.com/quotes/authors/a/aaron_swartz.html
Assume nobody else has any idea what they're doing, either. Aaron Swartz
Read more at: https://www.brainyquote.com/quotes/authors/a/aaron_swartz.html

*/