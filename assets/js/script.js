// changed to jQuery

// var imagesEl = document.getElementById('images');
// var image1El = document.getElementById('image1');
// var image2El = document.getElementById('image2');
// var image3El = document.getElementById('image3');
// var image4El = document.getElementById('image4');
// var newsEl = document.getElementById('news');
var searchCardEl = document.querySelectorAll('#search-card');
var searchHeadEl = document.querySelectorAll('#search-head');
var inputCardEl = document.querySelectorAll('#input-card');
var bottomEl = document.querySelectorAll('#bottom');
var resultsEl = document.querySelectorAll('#results');
var imagesEl = $('images');
var image1El = $('image1');
var image2El = $('image2');
var image3El = $('image3');
var image4El = $('image4');
var newsEl = $('news');
$( document ).ready(function() {
    $("#date-input").datepicker({ 
        format: 'yyyy-mm-dd'
    });
    $("#date-input").on("change", function () {
        var fromdate = $(this).val();
        alert(fromdate);
    });
})








































































// Brian Start
var newsApiKey = '7in8TwtqzrrthvlHglN5nTxws1VNhYaztWPyp3ih';
var newsQueryString = 'https://api.thenewsapi.com/v1/news/top?api_token=' + newsApiKey;
var marsApiKey = 'psz2c1wYY3t9M2AONzlvkrwmbzmet6Gyv2NrfVQX';
var marsQueryString = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key=' + marsApiKey;
var marsDateString = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key='+ marsApiKey + '&earth_date=' + userDate; // 

// console.log(newsQueryString);
console.log(marsQueryString);
console.log(marsDateString);

// builds search query from date provided
// currently just curiosity
// date needs to be a string, with format "yyyy-m-d" (no 0 before single digits)
function marsQuery(date) {
    marsQueryString
}












































//these variables and lines are to be used in functions for the appropriate ajax requests. This is all fired with the submit button event listener
var rover1 = $('<img id="rover1"/>')
//add rover1.atr('src', response.the imageurl path)
var rover2 = $('<img id="rover2"/>')
//add rover2.atr('src', response.the imageurl path)
var rover3 = $('<img id="rover3"/>')
//add rover3.atr('src', response.the imageurl path)
var rover4 = $('<img id="rover4"/>')
//add rover4.atr('src', response.the imageurl path)


var addTopStory = $('<a id="top-story">')
//addTopStory.attr('href', response.the storyurl path)

image1El.html(rover1);
image2El.html(rover2);
image3El.html(rover3);
image4El.html(rover4);
newsEl.html(addTopStory);














































































































































































































































































































//YO
