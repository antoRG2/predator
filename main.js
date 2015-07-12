// JavaScript source c

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

//Knowledge Object
var knowledge = {};

knowledge["description"] = "";
knowledge["yearsExperience"] = "";

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


//experience Object
var experience = {
        companyName: "",
        positionName: "",
        yearStart: "",
        yearEnd: ""
    }


//projects Object
function Projects() {

    this.name= "";
    this.description= "";
    this.previewImage= "";
}

var project = new Projects();


//hobbies Object
var hobbies = new Object();

hobbies["description"] = "";
