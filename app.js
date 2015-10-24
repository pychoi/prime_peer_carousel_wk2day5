/**
 * Created by scottbromander on 10/23/15.
 */
var peopleArray = ["Dana", "Pui", "Kelly", "Sam"];

var indexTracker = 0;

$(document).ready(function(){
    createCarousel(peopleArray);

    updateIndexPoints();

    $("#next").on('click', nextSlide);
    $("#prev").on('click', prevSlide);

    $(".index-point").on('click', function(event){
        console.log(event.target.id.slice(5));
        var id = event.target.id.slice(5);
        indexTracker = parseInt(id);
        updateIndexPoints();
    });

});

function createCarousel(array){
    $("#lecture").append("<div class='main'></div>");
    var $el = $("#lecture").children().last();

    createIndexPoints(array, $el);
    createNavButtons($el);
}

function nextSlide(){
    indexTracker++;
    if(indexTracker >= peopleArray.length){
        indexTracker = 0;
    }

    updateIndexPoints();

}

function prevSlide(){
    indexTracker--;
    if(indexTracker < 0){
        indexTracker = peopleArray.length - 1;
    }

    updateIndexPoints();

}

function createNavButtons($el){
    $el.prepend("<div id='prev' class='nav-button'> < Prev</div>");
    $el.append("<div id='next' class='nav-button'>Next > </div>");
}

function createIndexPoints(array, $el){
    //create something visual, Divs will work
    for(var i = 0; i < array.length; i++){
        //we need i, 1 for each element
        $el.append("<div class='index-point' id='index" + i + "'></div>")
    }
}

function updateIndexPoints(){
    for(var i = 0; i < peopleArray.length; i++){
        $("#index" + i).removeClass("index-point-active");

        if(i == indexTracker){
            $("#index" + i).addClass("index-point-active");
        }
    }

    updateDom();
}

function updateDom() {
    $("#mainContent").empty();
    $("#mainContent").append("<p>" + peopleArray[indexTracker] + "</p>");
}