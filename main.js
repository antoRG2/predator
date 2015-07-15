

window.onload = function () {

    var content = document.getElementById('center');
    content.innerHTML = 'Content';

}


//Personal Info Object
var personalInformation = new Object();

personalInformation.name = "";
personalInformation.photo = "";
personalInformation.country = "";
personalInformation.mail = "";
personalInformation.linkedin = "";
personalInformation.skype = "";

personalInformation.display = function () {

    var name = $('<div id="name">' + personalInformation.name + '</div>');
    var photo = $('<div id="photo">' + personalInformation.photo + '</div>');
    var country = $('<div id="country">' + personalInformation.country + '</div>');
    var mail = $('<div id="mail">' + personalInformation.mail + '</div>');
    var linkedin = $('<div id="linkedin">' + personalInformation.linkedin + '</div>');
    var skype = $('<div id="skype">' + personalInformation.skype + '</div>');

    $('#PersonalInfo').append(name, photo, country, mail, linkedin, skype);
}

personalInformation.name = "test";
personalInformation.photo = "photo";
personalInformation.country = "country";
personalInformation.mail = "mail";
personalInformation.linkedin = "linkedin";
personalInformation.skype = "skype";

personalInformation.display();



//Knowledge Object
var knowledge = {};

knowledge["description"] = "";
knowledge["yearsExperience"] = "";

knowledge.display = function () {

    var knowDescription = $('<div id="description">' + knowledge.description + '</div>');
    var yearsExperience = $('<div id="yearsExperience">' + knowledge.yearsExperience + '</div>');

    $('#know').append(knowDescription, yearsExperience);
}
knowledge.description = "description";
knowledge.yearsExperience = "yearsExperience";
knowledge.display();


//cover letter Object
var coverLetter = Object.create(null);

Object.defineProperty(coverLetter, "text", {
    value: "",
    writable: true,
    enumerable: true,
    configurable:true
 });
Object.defineProperty(coverLetter, "signature", {
    value: "",
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(coverLetter, "date", {
    value: "",
    writable: true,
    enumerable: true,
    configurable:true
});

coverLetter.showCoverLetter = function () {

    var text = $('<div id="text">' + coverLetter.text + '</div>');
    var signature = $('<div id="signature">' + coverLetter.signature + '</div>');
    var date = $('<div id="date">' + coverLetter.date + '</div>');

    $('#coverLet').append(text);
    $('#coverLet').append(signature);
    $('#coverLet').append(date);
}

coverLetter.text = "text";
coverLetter.signature = "signature";
coverLetter.date = "date";

coverLetter.showCoverLetter();


//experience Object
var experience = {
        companyName: "",
        positionName: "",
        yearStart: "",
        yearEnd: ""
}

experience.display = function () {

    var companyName = $('<div id="companyName">' + experience.companyName + '</div>');
    var positionName = $('<div id="photo">' + experience.positionName + '</div>');
    var yearStart = $('<div id="country">' + experience.yearStart + '</div>');
    var yearEnd = $('<div id="mail">' + experience.yearEnd + '</div>');

    var expArray = [companyName, positionName, yearStart, yearEnd];

    $('#exper').append(expArray);
}
experience.companyName = "company";
experience.positionName = "position";
experience.yearStart = "start";
experience.yearEnd = "end";

experience.display();

//projects Object
function Projects() {

    this.name= "";
    this.description= "";
    this.previewImage= "";
}

var project = new Projects();

project.display = function () {

    var projectName = $('<div id="projectName">' + project.name + '</div>');
    var projectDescription = $('<div id="projectDescription">' + project.description + '</div>');
    var previewImage = $('<div id="previewImage">' + project.previewImage + '</div>');

    $('#project').append(projectName , projectDescription , previewImage);
}


//hobbies Object
var hobbies = new Object();

hobbies["description"] = "";

hobbies.display = function () {

    var hobbiesDescription = $('<div id="hobbiesDescription">' + hobbies.name + '</div>');

    $('#hobbies').append(hobbiesDescription);
}

