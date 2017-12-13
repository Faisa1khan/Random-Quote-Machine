
$(document).ready(function() {
	$("#newquote").on("click", function(){

    

    var quotes = [


    	 {
            quote:"Don't cry because it's over, smile because it happened",
    		author: "Dr. Seuss"
    	},

    	 {

    		quote:"Be yourself; everyone else is already taken",
            author:"Oscar Wilde"
        },

    	 {

    	    quote:"A room without books is like a body without a soul",
            author:"Marcus Tullius Cicero"
        },

    	 {

    	    quote:"Be the change that you wish to see in the world",
            author:"Mahatma Gandhi"
        },

    	 {

    		 quote:"If you tell the truth, you don't have to remember anything",
             author:"Mark Twain"
        },

    	 {

    	    quote:"Assume nobody else has any idea what they're doing, either",
            author:"Aaron Swartz"
        }


    
] 

     var ranNum = Math.floor(Math.random() * quotes.length);

       $("#quote").html(quotes[ranNum].quote);
       $("#author").html(quotes[ranNum].author);


     $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quotes[ranNum].quote + '" ' + quotes[ranNum].author)); 


	});



});