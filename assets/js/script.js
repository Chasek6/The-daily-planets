// changed to jQuery

// var imagesEl = document.getElementById('images');
// var image1El = document.getElementById('image1');
// var image2El = document.getElementById('image2');
// var image3El = document.getElementById('image3');
// var image4El = document.getElementById('image4');
// var newsEl = document.getElementById('news');
var searchCardEl = $('<class = search-card/>')
var searchHeadEl = $('<class = search-head/>')
var inputCardEl = $('<class = input-card/>')
var bottomEl = $('<class = bottom/>')
var resultsEl = $('<class = results/>')
var imagesEl = $('images');
var image1El = $('image1');
var image2El = $('image2');
var image3El = $('image3');
var image4El = $('image4');
var newsEl = $('news');



























































































// Brian Start
var newsApiKey = '7in8TwtqzrrthvlHglN5nTxws1VNhYaztWPyp3ih';
// var newsQueryString = 'https://api.thenewsapi.com/v1/news/top?api_token=' + newsApiKey;


var marsApiKey = 'psz2c1wYY3t9M2AONzlvkrwmbzmet6Gyv2NrfVQX';
// var marsQueryString = 'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?api_key=' + marsApiKey;

function marsQueryString(userDate, api) {
    var camera = "fhaz";
    var rover = "curiosity"
    var marsQuery = "https://api.nasa.gov/mars-photos/api/v1/rovers/"
    + rover
    + "/photos?"
    //begin query
    + "camera=" 
    + camera
    + "&earth_date=" 
    + userDate 
    + "&api_key="       
    + api
    ;
    console.log(marsQuery)
    return marsQuery;
}

console.log(marsQueryString("2022-05-10", marsApiKey));

function newsQueryString(userDate) {
    var categories = "general,sports";
    var newsQuery = "https://api.thenewsapi.com/v1/news/top?api_token=" 
    + newsApiKey 
    + "&categories"
    + categories
    + "&published_on=" // Y-M-D format
    + userDate; 
    console.log(newsQuery)
    return newsQuery;
}



// "https://api.thenewsapi.com/v1/news/top?api_token=" + newsApiKey + "&published_on=" userDate + "&locale=us";

































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
var dateInput = $("#date-input");

$( document ).ready(function() {
    dateInput.datepicker({ 
        format: 'yyyy-mm-dd'
    });
    dateInput.on("change", function () {
        var fromdate = $(this).val();
        alert(fromdate);
    });
}); 

// $("#date-input").datepicker( "option", "dateFormat", 'yy-mm-dd' );


image1El.html(rover1);
image2El.html(rover2);
image3El.html(rover3);
image4El.html(rover4);
newsEl.html(addTopStory);














































































































































































































































































































//YO
