"use strict";
var toggleBtn = document.getElementById("toggleBtn");
var container = document.querySelector(".container");
var Name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var DOB = document.getElementById("DOB");
var bio = document.querySelector(".bio");
var cv = document.querySelector(".cv");
var form = document.querySelector(".form");
var addBtn = document.getElementById("addBtn");
var editToggle = document.getElementById("edittoggle");
var flag = true;
function toggle() {
    container === null || container === void 0 ? void 0 : container.classList.toggle("dark");
    toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.classList.toggle("dark");
    if (flag && toggleBtn && container) {
        toggleBtn.innerHTML = "<i class='fa-solid fa-toggle-on'></i>";
        flag = false;
    }
    else if (toggleBtn && flag == false) {
        toggleBtn.innerHTML = "<i class='fa-solid fa-toggle-off'></i>";
        flag = true;
    }
}
function makeCv() {
    console.log(bio);
    console.log(cv);
    if (bio) {
        bio.innerHTML = "\n                        <h1>".concat(Name.value, "</h1>\n                <p><i  class=\"fa-solid fa-square-envelope\"></i><span style=\"margin-inline: 20px;\">Email</span><span>").concat(email.value, " <i class=\"fa-solid fa-pencil\"></i></span></p>\n\n                <p><i class=\"fa-solid fa-square-phone\"></i><span style=\"margin-inline: 20px;\">Phone</span><span>").concat(phone.value, "</span></p>\n\n                <p><i class=\"fa-regular fa-address-book\"></i><span style=\"margin-inline: 20px;\">Address</span><span>").concat(address.value, "</span></p>\n\n                <p><i class=\"fa-regular fa-calendar-days\"></i><span style=\"margin-inline: 20px;\">Date of   Birth</span><span>").concat(DOB.value, "</span></p>\n\n               <p><i class=\"fa-solid fa-circle-info\"></i><span style=\"margin-inline: 20px;\">Objective</span><p style=\"margin: -5px 0px 0px 50px;\">A detail-oriented and innovative programmer.  skilled in languages such as JavaScript, TypeScript. Passionate about solving complex problems and creating efficient, scalable code for both front-end and back-end systems. Seeking an opportunity to contribute to a dynamic development team and utilize my expertise</p></p> \n    ");
    }
}
// form
var educationFeild = document.querySelector(".EducationfeildWrapper");
var Technicalfeild = document.querySelector(".TechnicalfeildWrapper");
var Projectsfeild = document.querySelector(".ProjectsfeildWrapper");
var SkillsFeild = document.querySelector(".skillsWrapper");
var educationAddBtn = document.getElementById("addMoreEducation");
var TechnicalAddBtn = document.getElementById("addMoreCources");
var ProjectsAddBtn = document.getElementById("addMoreProjects");
var SkillsAddBtn = document.getElementById("addMoreSkills");
educationAddBtn && educationAddBtn.addEventListener("click", function () {
    if (educationFeild) {
        educationFeild.innerHTML += "\n                          <div class=\"fieldWrap educationField\" id=\"educationField\">\n                        <div class=\"inp\">\n                            <label for=\"degree\">Degree : </label>\n                            <input type=\"text\" name=\"degree\" id=\"degree\">\n                        </div>\n                        <div class=\"inp\">\n                            <label for=\"institute\">Institute : </label>\n                            <input type=\"text\" name=\"institute\" id=\"institue\">\n                        </div>\n                        <div class=\"inp\">\n                            <label for=\"YearOfPassing\">Year Of Passing : </label>\n                            <input type=\"text\" name=\"YearOfPassing\" id=\"YearOfPassing\">\n                        </div>\n                    </div>\n      \n      ";
    }
});
TechnicalAddBtn && TechnicalAddBtn.addEventListener("click", function () {
    if (Technicalfeild) {
        Technicalfeild.innerHTML += "\n                   <div class=\"fieldWrap TechnicalField\" id=\"TechnicalField\">\n                        <div class=\"inp\">\n                            <label for=\"degree\">Degree : </label>\n                            <input type=\"text\" name=\"degree\" id=\"degree\">\n                        </div>\n                        <div class=\"inp\">\n                            <label for=\"institute\">Institute : </label>\n                            <input type=\"text\" name=\"institute\" id=\"institue\">\n                        </div>\n                        <div class=\"inp\">\n                            <label for=\"YearOfPassing\">Year Of Passing : </label>\n                            <input type=\"text\" name=\"YearOfPassing\" id=\"YearOfPassing\">\n                        </div>\n                    </div>\n      \n      ";
    }
});
ProjectsAddBtn && ProjectsAddBtn.addEventListener("click", function () {
    if (Projectsfeild) {
        Projectsfeild.innerHTML += "\n                    <div class=\"fieldWrap ProjectsField\" id=\"ProjectsField\">\n                        <div class=\"inp\">\n                            <label for=\"projectName\">Project Name : </label>\n                            <input type=\"text\" name=\"projectName\" id=\"projectName\">\n                        </div>\n                        <div class=\"inp\">\n                            <label for=\"project\">Description : </label>\n                            <textarea name=\"project\" id=\"project\" ></textarea>\n                        </div>\n                    </div>\n      ";
    }
});
SkillsAddBtn && SkillsAddBtn.addEventListener("click", function () {
    if (SkillsFeild) {
        SkillsFeild.innerHTML += "\n                       <div class=\"fieldWrap skillsField\" id=\"skillsField\">\n                        <div class=\"inp\">\n                            <label for=\"skills\">Skill</label>\n                            <input type=\"text\" name=\"skills\" id=\"skills\">\n                        </div>\n                    </div>\n      \n      ";
    }
});
function uploadData() {
    var user = {};
    //----------------------------Bio-------------------------------
    user.name = Name.value;
    user.phone = phone.value;
    user.address = address.value;
    user.DateOfBirth = DOB.value;
    user.email = email.value;
    //check if all the fields are filled
    var isFilled = function (user) {
        return Object.values(user).every(function (value) {
            if (Array.isArray(value)) {
                return value.length > 0 && value.every(function (val) {
                    // Recursively check if each object in the array is fully filled
                    return Object.values(val).every(function (field) { return field !== "" && field !== undefined; });
                });
            }
            return value !== "" && value !== undefined;
        });
    };
    // add image to the object
    var inputfile = document.getElementById("image");
    if (inputfile && inputfile.files) {
        var file = inputfile.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var base64Image = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            if (base64Image)
                user.image = base64Image;
            // user object is stored in session storage here, 
            if (isFilled(user)) {
                sessionStorage.setItem('user', JSON.stringify(user));
            }
            else {
                alert("Field is missing, Please fill all the fields");
            }
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        else {
            alert("Please Provide the image");
        }
    }
    //-------------------- Education Field --------------------------------- 
    // Select all input fields inside divs with class "input-group"
    var education = [];
    var educationInputGroups = document.querySelectorAll('.educationField');
    // Loop through the NodeList and retrieve values
    educationInputGroups.forEach(function (group) {
        var degreev = group.querySelector('input[name="degree"]');
        var institutev = group.querySelector('input[name="institute"]');
        var YearOfPassingv = group.querySelector('input[name="YearOfPassing"]');
        if (degreev && institutev && YearOfPassingv) {
            var degree = degreev.value;
            var institute = institutev.value;
            var YearOfPassing = YearOfPassingv.value;
            // Create the object and push it to the result array
            var obj = { degree: degree, institute: institute, YearOfPassing: YearOfPassing };
            education.push(obj);
        }
        else {
            console.error('One or more input fields are missing in the input group.');
        }
    });
    user.Education = education;
    // -------------- Cources ---------------
    var cources = [];
    var CourcesGroup = document.querySelectorAll(".TechnicalField");
    CourcesGroup.forEach(function (group) {
        var degreev = group.querySelector("input[name='degree']");
        var institutev = group.querySelector("input[name='institute']");
        var YearOfPassingv = group.querySelector("input[name='YearOfPassing']");
        if (degreev && institutev && YearOfPassingv) {
            var obj = {
                degree: degreev.value,
                institute: institutev.value,
                YearOfPassing: YearOfPassingv.value
            };
            cources.push(obj);
        }
    });
    user.Cources = cources;
    // ------------ Projects -------------------
    var projects = [];
    var ProjectsGroup = document.querySelectorAll(".ProjectsField");
    ProjectsGroup.forEach(function (group) {
        var projectNamev = group.querySelector('input[name="projectName"]');
        var projectv = group.querySelector('textarea[name="project"]');
        if (projectNamev && projectv) {
            var obj = {
                projectName: projectNamev.value,
                description: projectv.value
            };
            projects.push(obj);
        }
        else {
            console.error('One or more input fields are missing in the projects group.');
        }
    });
    user.Projects = projects;
    //  -----------skills-----------------
    var skills = [];
    var skillsGroup = document.querySelectorAll(".skillsField");
    skillsGroup.forEach(function (group) {
        var skillv = group.querySelector("input");
        if (skillv) {
            var obj = {
                skill: skillv.value,
            };
            skills.push(obj);
        }
        else {
            console.error("skill input field is missing");
        }
    });
    user.skill = skills;
    console.log(user);
}
addBtn.addEventListener("click", function () {
    uploadData();
    location.reload();
});
function getData() {
    var cvName = document.getElementById("cvName");
    var cvEmail = document.getElementById("cvEmail");
    var cvPhone = document.getElementById("cvPhone");
    var cvDP = document.getElementById("cvDP");
    var cvAddress = document.getElementById("cvAddress");
    var cvDOB = document.getElementById("cvDOB");
    var cvSkills = document.querySelector(".skills");
    var cvEducation = document.querySelector(".education");
    var cvCources = document.querySelector(".cvCources");
    var cvProjects = document.querySelector(".cvProjects");
    var userdata = sessionStorage.getItem("user");
    if (userdata && cvName && cvEmail && cvPhone && cvDP && cvAddress && cvDOB && cvSkills && cvEducation && cvCources && cvProjects) {
        var data = JSON.parse(userdata);
        console.log("session storage--->", data);
        cvName.innerHTML = data.name + "<span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span>";
        cvEmail.innerHTML = data.email + "<span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span>";
        cvPhone.innerHTML = data.phone + "<span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span>";
        cvDP.src = data.image;
        cvAddress.innerHTML = data.address + "<span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span>";
        cvDOB.innerHTML = data.DateOfBirth + "<span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\"></i></span>";
        // Skill
        data.skill.forEach(function (val) {
            cvSkills.innerHTML +=
                "<div>".concat(val.skill, " <span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span></div>");
        });
        // Education
        data.Education.forEach(function (val) {
            cvEducation.innerHTML +=
                "\n             <h3>".concat(val.degree, " <span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span></h3>\n             <i>").concat(val.institute, " <span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span></i>\n             <p>Year of Completion:").concat(val.YearOfPassing, " <i class=\"fa-regular fa-pen-to-square edit hide\"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></p>\n            ");
        });
        //Cources
        data.Cources
            .forEach(function (val) {
            cvCources.innerHTML +=
                "\n             <h3>".concat(val.degree, " <span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span></h3>\n             <i>").concat(val.institute, " <span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span></i>\n             <p>Year of Completion:").concat(val.YearOfPassing, " <span><i class=\"fa-regular fa-pen-to-square edit hide\"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span></p>\n            ");
        });
        //Projects
        data.Projects
            .forEach(function (val) {
            cvProjects.innerHTML +=
                "\n             <li class=\"activities\"><span>".concat(val.projectName, " <span><i class=\"fa-regular fa-pen-to-square edit hide\"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span> -- </span><span>").concat(val.description, " <span><i class=\"fa-regular fa-pen-to-square edit hide \"  style=\"font-size: 20px;\" onClick=\"edit(this)\"></i></span></span></li>\n            ");
        });
        editToggle && editToggle.classList.toggle("hide");
    }
    else {
        cv.innerHTML = "\n            <div class=\"firstInnerCont\"> \n            <div class=\"img\">\n                <img src=\"./img.jpg\" id=\"cvDP\" alt=\"image\">\n            </div>\n            <div class=\"bio\">\n                <h1 id=\"cvName\">Tariq Syed</h1>\n                <p><i  class=\"fa-solid fa-square-envelope\"></i><span style=\"margin-inline: 20px;\">Email</span><span id=\"cvEmail\">tariqsyed6610gmail.com</span></p>\n\n                <p><i class=\"fa-solid fa-square-phone\"></i><span style=\"margin-inline: 20px;\">Phone</span><span id=\"cvPhone\">123-456789</span></p>\n\n                <p><i class=\"fa-regular fa-address-book\"></i><span style=\"margin-inline: 20px;\">Address</span><span id=\"cvAddress\">Landhi, Karachi</span></p>\n\n                <p><i class=\"fa-regular fa-calendar-days\"></i><span style=\"margin-inline: 20px;\">Date of   Birth</span><span id=\"cvDOB\">27-march-1999</span></p>\n\n               <p><i class=\"fa-solid fa-circle-info\"></i><span style=\"margin-inline: 20px;\">Objective</span><p style=\"margin: -5px 0px 0px 50px;\">A detail-oriented and innovative programmer.  skilled in languages such as JavaScript, TypeScript. Passionate about solving complex problems and creating efficient, scalable code for both front-end and back-end systems. Seeking an opportunity to contribute to a dynamic development team and utilize my expertise</p></p> \n            </div>\n        </div>\n        <h1 class=\"skillH\">Skills</h1>\n        <div class=\"skills\">\n            <div>HTML</div>\n            <div>CSS</div>\n            <div>JavaScript</div>\n            <div>TypeScript</div>\n            <div>React</div>\n            <div>Next Js</div>\n            <div>Fiebase</div>\n            <div>Bootstrap</div>\n            <div>Tailwind</div>\n        </div>\n\n\n        <div class=\"secondInnerCont\">\n            <div class=\"col1\">\n                <div class=\"eduWraper\">\n                    <div>\n                        <h1>Education</h1>\n                        <div class=\"education\">\n                            <h3>Bachelor of Commerce (B.Com)</h3>\n                            <i>University of Karachi</i>\n                            <p>Year of Completion: 2021</p>\n                            <h3>Intermediate (FSC) in Engineering</h3>\n                            <i>Aisha Bawani college</i>\n                            <p>Year of Completion: 2018</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"techWraper\">\n\n                    <div>\n                        <h1>Technical & Professional Courses</h1>\n                        <div class=\"cvCources\">\n                            <h3>CS50: Introduction to Computer Science</h3>\n                            <i>Harvard University (Online Course)</i>\n                            <p>Year : 2021</p>\n                            <h3>MERN Stack Development (Ongoing)</h3>\n                            <i>SMIT (Saylani Mass IT Training)</i>\n                            <p>Year of Admission: 2023</p>\n                            <h3>Cloud Applied and Generative AI (Ongoing)</h3>\n                            <i>Governor\u2019s Initiative</i>\n                            <p>Year of Admission: 2024</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col2\">\n                <div class=\"projWraper\">\n                    <div class=\"proj\">\n                        <h1>Projects and Activies</h1>\n                        <ul class=\"cvProjects\">\n                            <li class=\"activities\"><span>Todo App -- </span>Developed multiple task management apps with full CRUD functionality.</li>\n                            <li class=\"activities\"><span>Weather App -- </span>Built a weather forecast app that fetches real-time data from an API and displays current weather conditions.</li>\n                            <li class=\"activities\"><span>Quiz App -- </span>DCreated an interactive quiz application with dynamic question generation and result tracking.</li>\n                            <li class=\"activities\"><span>News App -- </span> Designed a news aggregation app that pulls in the latest news from various sources using APIs.</li>\n                            <li class=\"activities\"><span>Digital Clock -- </span>Developed a real-time digital clock using React and JavaScript.</li>\n                            <li class=\"activities\"><span>Foodpanda Clone  -- </span> Created a fully functional clone of the Foodpanda app with features such as menu display, cart system, and user authentication.</li>\n                        \n                            <li class=\"activities\"><span>CLI ATM -- </span>Built a command-line interface ATM system with basic banking functions like balance check, deposit, and withdrawal.</li>\n                            <li class=\"activities\"><span>CLI Guess Game -- </span>Developed a command-line number guessing game with a simple algorithm for feedback.</li>\n                            <li class=\"activities\"><span>CLI Calculator -- </span>Created a basic calculator in a command-line interface to perform simple arithmetic operations.</li>\n                            <li class=\"activities\">Achieved 99th Percentile in the first quarter of the course, demonstrating high proficiency and dedication.</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <hr>\n        <div class=\"socials\">\n            <h3 style=\"text-align: center;\">Connect with me :  </h3>\n            <div>\n                <span><a href=\"https://www.linkedin.com/in/tariq-syed-788940289/\"><i style=\"font-size: 30px;\" class=\"fa-brands fa-linkedin\"></i></a></span>\n\n                <span><a href=\"https://github.com/Tariq6610\"><i  style=\"font-size: 30px;\"  class=\"fa-brands fa-github\"></i></a></span>\n\n                <span><a href=\"https://www.facebook.com/tariq.syed.393/\"><i style=\"font-size: 30px;\" class=\"fa-brands fa-facebook\"></i></a></span>\n            </div>\n           \n        </div> \n        ";
    }
}
getData();
//clear session storage
var clear = document.getElementById("clear");
clear && clear.addEventListener("click", function () {
    sessionStorage.clear();
    location.reload();
});
//edit Cv
function edit(e) {
    var newval = prompt("Edit value", e.parentNode.parentNode.firstChild.textContent);
    if (newval !== null && newval !== "") {
        e.parentNode.parentNode.firstChild.textContent = newval.trim();
    }
}
var editFlag = true;
editToggle && editToggle.addEventListener("click", function () {
    toggleEdit();
    if (editFlag) {
        editToggle.innerText = "Finish Editing";
        editFlag = false;
    }
    else {
        editToggle.innerText = "Edit";
        editFlag = true;
    }
});
function toggleEdit() {
    var editBtn = document.querySelectorAll(".edit");
    editBtn && editBtn.forEach(function (btn) {
        btn.classList.toggle("hide");
    });
}
