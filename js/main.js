
$(document).ready(function() {
	$("#newquote").on("click", function(){

    var randomQuote = {

    	"quote": {
    		1: "Don't cry because it's over, smile because it happened",
    		2: "Be yourself; everyone else is already taken",
    		3: "A room without books is like a body without a soul",
    		4: "Be the change that you wish to see in the world",
    		5: "If you tell the truth, you don't have to remember anything"
    	},

    	"author": {

    		1: "Dr. Seuss",
    		2: "Oscar Wilde",
    		3: "Marcus Tullius Cicero",
    		4: "Mahatma Gandhi",
    		5: "Mark Twain"
    	}

    }

     var ranNum = Math.floor(Math.random() * 5);

       $("#quote").html(randomQuote.quote[ranNum]);
       $("#author").html(randomQuote.author[ranNum]);

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
*/