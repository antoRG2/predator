function places(location, continent, country) {
    this.location = location;
    this.continent = continent;
    this.country = country;
}

places.prototype.toString = function () {
    return "location:" + this.location + "," + this.continent + "," + this.country;
}


var newPlace = new places("la chingada grande", "atlantis", "pleyades");

newPlace.toString = function () {
    return "me estas hinchando las pelotas";
}

var secondPlace = new places("heredia", "america", "belen");

console.log(newPlace.toString());
console.log(secondPlace.toString());

var places = (function () {

    this.location = "CR";
    var continent;
    var country;
})


var mysingleton = new function () {

    var instance;


    this.init = function () {

        if (!instance) {
            instance = new places;
        }

        return instance;

    }
}

mysingleton.init().location = "pan";

var test = (mysingleton).init();
console.log(test.location)
