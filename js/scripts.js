// Front-End Logic

$(document).ready(function() {
    var newDatabase = new Database();
    $("form#placeForm").submit(function() {
        event.preventDefault() 
        var userLocation = $("input#userLocation").val();
        var userSeason = $("input#userSeason").val();
        var userActivities = $("input#userActivities").val();
        var newPlace = new Place(userLocation, userSeason, userActivities);
        newDatabase.addPlace(newPlace);
        $("#checkboxForm").prepend('<input type="checkbox" name="locName"/> <label for="locName">' + newPlace.location + '</label><br>');
        $("form#placeForm")[0].reset();
    });
});


// Back-End Logic

function Place(location, season, activities) {
    this.location = location;
    this.season = season;
    this.activities = activities;
}

function Database() {
    this.places = [];
    this.currentId = 0;
    this.addPlace = function(place) {
        place.id = this.assignId();
        this.places.push(place);
    }
    this.assignId = function() {
        this.currentId++;
        return this.currentId;
    }
}

