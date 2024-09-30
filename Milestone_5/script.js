var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const toggleBtn = document.getElementById("toggleBtn");
const container = document.querySelector(".container");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const DOB = document.getElementById("DOB");
const bio = document.querySelector(".bio");
const cv = document.querySelector(".cv");
const form = document.querySelector(".formContainer");
const addBtn = document.getElementById("addBtn");
const editToggle = document.getElementById("edittoggle");
const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");
const btnWrap = document.querySelector(".btnWrap");
const heading = document.querySelector(".TemplateHeading");
let flag = true;
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
        bio.innerHTML = `
                        <h1>${Name.value}</h1>
                <p><i  class="fa-solid fa-square-envelope"></i><span style="margin-inline: 20px;">Email</span><span>${email.value} <i class="fa-solid fa-pencil"></i></span></p>

                <p><i class="fa-solid fa-square-phone"></i><span style="margin-inline: 20px;">Phone</span><span>${phone.value}</span></p>

                <p><i class="fa-regular fa-address-book"></i><span style="margin-inline: 20px;">Address</span><span>${address.value}</span></p>

                <p><i class="fa-regular fa-calendar-days"></i><span style="margin-inline: 20px;">Date of   Birth</span><span>${DOB.value}</span></p>

               <p><i class="fa-solid fa-circle-info"></i><span style="margin-inline: 20px;">Objective</span><p style="margin: -5px 0px 0px 50px;">A detail-oriented and innovative programmer.  skilled in languages such as JavaScript, TypeScript. Passionate about solving complex problems and creating efficient, scalable code for both front-end and back-end systems. Seeking an opportunity to contribute to a dynamic development team and utilize my expertise</p></p> 
    `;
    }
}
// form
const educationFeild = document.querySelector(".EducationfeildWrapper");
const Technicalfeild = document.querySelector(".TechnicalfeildWrapper");
const Projectsfeild = document.querySelector(".ProjectsfeildWrapper");
const SkillsFeild = document.querySelector(".skillsWrapper");
const educationAddBtn = document.getElementById("addMoreEducation");
const TechnicalAddBtn = document.getElementById("addMoreCources");
const ProjectsAddBtn = document.getElementById("addMoreProjects");
const SkillsAddBtn = document.getElementById("addMoreSkills");
educationAddBtn && educationAddBtn.addEventListener("click", () => {
    if (educationFeild) {
        educationFeild.innerHTML += `
                          <div class="fieldWrap educationField" id="educationField">
                        <div class="inp">
                            <label for="degree">Degree : </label>
                            <input type="text" name="degree" id="degree">
                        </div>
                        <div class="inp">
                            <label for="institute">Institute : </label>
                            <input type="text" name="institute" id="institue">
                        </div>
                        <div class="inp">
                            <label for="YearOfPassing">Year Of Passing : </label>
                            <input type="text" name="YearOfPassing" id="YearOfPassing">
                        </div>
                    </div>
      
      `;
    }
});
TechnicalAddBtn && TechnicalAddBtn.addEventListener("click", () => {
    if (Technicalfeild) {
        Technicalfeild.innerHTML += `
                   <div class="fieldWrap TechnicalField" id="TechnicalField">
                        <div class="inp">
                            <label for="degree">Degree : </label>
                            <input type="text" name="degree" id="degree">
                        </div>
                        <div class="inp">
                            <label for="institute">Institute : </label>
                            <input type="text" name="institute" id="institue">
                        </div>
                        <div class="inp">
                            <label for="YearOfPassing">Year Of Passing : </label>
                            <input type="text" name="YearOfPassing" id="YearOfPassing">
                        </div>
                    </div>
      
      `;
    }
});
ProjectsAddBtn && ProjectsAddBtn.addEventListener("click", () => {
    if (Projectsfeild) {
        Projectsfeild.innerHTML += `
                    <div class="fieldWrap ProjectsField" id="ProjectsField">
                        <div class="inp">
                            <label for="projectName">Project Name : </label>
                            <input type="text" name="projectName" id="projectName">
                        </div>
                        <div class="inp">
                            <label for="project">Description : </label>
                            <textarea name="project" id="project" ></textarea>
                        </div>
                    </div>
      `;
    }
});
SkillsAddBtn && SkillsAddBtn.addEventListener("click", () => {
    if (SkillsFeild) {
        SkillsFeild.innerHTML += `
                       <div class="fieldWrap skillsField" id="skillsField">
                        <div class="inp">
                            <label for="skills">Skill</label>
                            <input type="text" name="skills" id="skills">
                        </div>
                    </div>
      
      `;
    }
});
function uploadData() {
    let user = {};
    //----------------------------Bio-------------------------------
    user.name = Name.value;
    user.phone = phone.value;
    user.address = address.value;
    user.DateOfBirth = DOB.value;
    user.email = email.value;
    // add image to the object
    const inputfile = document.getElementById("image");
    if (inputfile && inputfile.files) {
        const file = inputfile.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a;
            const base64Image = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            if (base64Image)
                user.image = base64Image;
            // user object is stored in session storage here, 
            sessionStorage.setItem('user', JSON.stringify(user));
        };
        reader.readAsDataURL(file);
    }
    //-------------------- Education Field --------------------------------- 
    // Select all input fields inside divs with class "input-group"
    let education = [];
    const educationInputGroups = document.querySelectorAll('.educationField');
    // Loop through the NodeList and retrieve values
    educationInputGroups.forEach(group => {
        const degreev = group.querySelector('input[name="degree"]');
        const institutev = group.querySelector('input[name="institute"]');
        const YearOfPassingv = group.querySelector('input[name="YearOfPassing"]');
        if (degreev && institutev && YearOfPassingv) {
            const degree = degreev.value;
            const institute = institutev.value;
            const YearOfPassing = YearOfPassingv.value;
            // Create the object and push it to the result array
            const obj = { degree, institute, YearOfPassing };
            education.push(obj);
        }
        else {
            console.error('One or more input fields are missing in the input group.');
        }
    });
    user.Education = education;
    // -------------- Cources ---------------
    let cources = [];
    const CourcesGroup = document.querySelectorAll(".TechnicalField");
    CourcesGroup.forEach(group => {
        const degreev = group.querySelector("input[name='degree']");
        const institutev = group.querySelector("input[name='institute']");
        const YearOfPassingv = group.querySelector("input[name='YearOfPassing']");
        if (degreev && institutev && YearOfPassingv) {
            let obj = {
                degree: degreev.value,
                institute: institutev.value,
                YearOfPassing: YearOfPassingv.value
            };
            cources.push(obj);
        }
    });
    user.Cources = cources;
    // ------------ Projects -------------------
    const projects = [];
    const ProjectsGroup = document.querySelectorAll(".ProjectsField");
    ProjectsGroup.forEach(group => {
        const projectNamev = group.querySelector('input[name="projectName"]');
        const projectv = group.querySelector('textarea[name="project"]');
        if (projectNamev && projectv) {
            let obj = {
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
    const skills = [];
    const skillsGroup = document.querySelectorAll(".skillsField");
    skillsGroup.forEach(group => {
        const skillv = group.querySelector("input");
        if (skillv) {
            let obj = {
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
addBtn.addEventListener("click", () => {
    uploadData();
    location.reload();
});
function getData() {
    const cvName = document.getElementById("cvName");
    const cvEmail = document.getElementById("cvEmail");
    const cvPhone = document.getElementById("cvPhone");
    const cvDP = document.getElementById("cvDP");
    const cvAddress = document.getElementById("cvAddress");
    const cvDOB = document.getElementById("cvDOB");
    const cvSkills = document.querySelector(".skills");
    const cvEducation = document.querySelector(".education");
    const cvCources = document.querySelector(".cvCources");
    const cvProjects = document.querySelector(".cvProjects");
    const userdata = sessionStorage.getItem("user");
    if (userdata && cvName && cvEmail && cvPhone && cvDP && cvAddress && cvDOB && cvSkills && cvEducation && cvCources && cvProjects) {
        const data = JSON.parse(userdata);
        console.log("session storage--->", data);
        cvName.innerHTML = data.name + `<span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span>`;
        cvEmail.innerHTML = data.email + `<span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span>`;
        cvPhone.innerHTML = data.phone + `<span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span>`;
        cvDP.src = data.image;
        cvAddress.innerHTML = data.address + `<span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span>`;
        cvDOB.innerHTML = data.DateOfBirth + `<span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;"></i></span>`;
        // Skill
        data.skill.forEach(val => {
            cvSkills.innerHTML +=
                `<div>${val.skill} <span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span></div>`;
        });
        // Education
        data.Education.forEach(val => {
            cvEducation.innerHTML +=
                `
             <h3>${val.degree} <span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span></h3>
             <i>${val.institute} <span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span></i>
             <p>Year of Completion:${val.YearOfPassing} <i class="fa-regular fa-pen-to-square edit hide"  style="font-size: 20px;" onClick="edit(this)"></i></p>
            `;
        });
        //Cources
        data.Cources
            .forEach(val => {
            cvCources.innerHTML +=
                `
             <h3>${val.degree} <span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span></h3>
             <i>${val.institute} <span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span></i>
             <p>Year of Completion:${val.YearOfPassing} <span><i class="fa-regular fa-pen-to-square edit hide"  style="font-size: 20px;" onClick="edit(this)"></i></span></p>
            `;
        });
        //Projects
        data.Projects
            .forEach(val => {
            cvProjects.innerHTML +=
                `
             <li class="activities"><span>${val.projectName} <span><i class="fa-regular fa-pen-to-square edit hide"  style="font-size: 20px;" onClick="edit(this)"></i></span> -- </span><span>${val.description} <span><i class="fa-regular fa-pen-to-square edit hide "  style="font-size: 20px;" onClick="edit(this)"></i></span></span></li>
            `;
        });
        editToggle && editToggle.classList.toggle("hide");
        downloadBtn && downloadBtn.classList.toggle("hide");
        shareBtn && shareBtn.classList.toggle("hide");
    }
    else {
        cv.innerHTML = `
             <div class="firstInnerCont">
            <div class="img">
                <img src="./img.jpg" id="cvDP" alt="image">
            </div>
            <div class="bio">
                <h1 id="cvName">Tariq Syed</h1>
                <p><i  class="fa-solid fa-square-envelope"></i><span style="margin-inline: 20px;">Email</span><span id="cvEmail">tariqsyed6610gmail.com</span></p>

                <p><i class="fa-solid fa-square-phone"></i><span style="margin-inline: 20px;">Phone</span><span id="cvPhone">123-456789</span></p>

                <p><i class="fa-regular fa-address-book"></i><span style="margin-inline: 20px;">Address</span><span id="cvAddress">Landhi, Karachi</span></p>

                <p><i class="fa-regular fa-calendar-days"></i><span style="margin-inline: 20px;">Date of   Birth</span><span id="cvDOB">27-march-1999</span></p>

               <p><i class="fa-solid fa-circle-info"></i><span style="margin-inline: 20px;">Objective</span><p style="margin: -5px 0px 0px 50px;">A detail-oriented and innovative programmer.  skilled in languages such as JavaScript, TypeScript. Passionate about solving complex problems and creating efficient, scalable code for both front-end and back-end systems. Seeking an opportunity to contribute to a dynamic development team and utilize my expertise</p></p> 
            </div>
        </div>
        <h1>Skills</h1>
        <div class="skills">
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>TypeScript</div>
            <div>React</div>
            <div>Next Js</div>
            <div>Fiebase</div>
            <div>Bootstrap</div>
            <div>Tailwind</div>
        </div>


        <div class="secondInnerCont">
            <div class="col1">
                <h1>Education</h1>
                <div class="education">
                    <h3>Bachelor of Commerce (B.Com)</h3>
                    <i>University of Karachi</i>
                    <p>Year of Completion: 2021</p>

                    <h3>Intermediate (FSC) in Engineering</h3>
                    <i>Aisha Bawani college</i>
                    <p>Year of Completion: 2018</p>
                </div>
                <h1>Technical & Professional Courses</h1>
                <div class="cvCources">  
                    <h3>CS50: Introduction to Computer Science</h3>
                    <i>Harvard University (Online Course)</i>
                    <p>Year : 2021</p>

                    <h3>MERN Stack Development (Ongoing)</h3>
                    <i>SMIT (Saylani Mass IT Training)</i>
                    <p>Year of Admission: 2023</p>

                    <h3>Cloud Applied and Generative AI (Ongoing)</h3>
                    <i>Governor’s Initiative</i>
                    <p>Year of Admission: 2024</p>
                </div>
            </div>
            <div class="col2">
                <h1>Projects and Activies</h1>
                <ul class="cvProjects">
                    <li class="activities"><span>Todo App -- </span>Developed multiple task management apps with full CRUD functionality.</li>

                    <li class="activities"><span>Weather App -- </span>Built a weather forecast app that fetches real-time data from an API and displays current weather conditions.</li>

                    <li class="activities"><span>Quiz App -- </span>DCreated an interactive quiz application with dynamic question generation and result tracking.</li>

                    <li class="activities"><span>News App -- </span> Designed a news aggregation app that pulls in the latest news from various sources using APIs.</li>

                    <li class="activities"><span>Digital Clock -- </span>Developed a real-time digital clock using React and JavaScript.</li>

                    <li class="activities"><span>Foodpanda Clone  -- </span> Created a fully functional clone of the Foodpanda app with features such as menu display, cart system, and user authentication.</li>
                
                    <li class="activities"><span>CLI ATM -- </span>Built a command-line interface ATM system with basic banking functions like balance check, deposit, and withdrawal.</li>

                    <li class="activities"><span>CLI Guess Game -- </span>Developed a command-line number guessing game with a simple algorithm for feedback.</li>

                    <li class="activities"><span>CLI Calculator -- </span>Created a basic calculator in a command-line interface to perform simple arithmetic operations.</li>

                    <li class="activities">Achieved 99th Percentile in the first quarter of the course, demonstrating high proficiency and dedication.</li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="socials">
            <h3 style="text-align: center;">Connect with me :  </h3>
            <div>
                <span><a href="https://www.linkedin.com/in/tariq-syed-788940289/"><i style="font-size: 30px;" class="fa-brands fa-linkedin"></i></a></span>

                <span><a href="https://github.com/Tariq6610"><i  style="font-size: 30px;"  class="fa-brands fa-github"></i></a></span>

                <span><a href="https://www.facebook.com/tariq.syed.393/"><i style="font-size: 30px;" class="fa-brands fa-facebook"></i></a></span>
            </div>
           
        </div>
        `;
    }
}
getData();
//clear session storage
const clear = document.getElementById("clear");
clear && clear.addEventListener("click", () => {
    sessionStorage.clear();
    location.reload();
});
//edit Cv
function edit(e) {
    const newval = prompt("Edit value", e.parentNode.parentNode.firstChild.textContent);
    if (newval !== null && newval !== "") {
        e.parentNode.parentNode.firstChild.textContent = newval.trim();
    }
}
let editFlag = true;
editToggle && editToggle.addEventListener("click", () => {
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
    const editBtn = document.querySelectorAll(".edit");
    editBtn && editBtn.forEach(btn => {
        btn.classList.toggle("hide");
    });
}
//dowload
const cvContent = cv.innerHTML;
const userName = document.getElementById("cvName");
downloadBtn && downloadBtn.addEventListener("click", () => {
    btnWrap && btnWrap.classList.toggle("hide");
    form && form.classList.toggle("hide");
    heading && heading.classList.toggle("hide");
    container === null || container === void 0 ? void 0 : container.classList.toggle("dark");
    window.print();
});
shareBtn && shareBtn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
    // Define the base URL
    const url = `http://127.0.0.1:5500/index.html?`;
    // Get the user data from sessionStorage
    const userdata = sessionStorage.getItem("user");
    const data = userdata ? JSON.parse(userdata) : {};
    // Create a searchParams instance
    const searchParams = new URLSearchParams();
    // Append the user object as a stringified JSON object
    searchParams.append("user", JSON.stringify(data));
    // Convert searchParams to a query string
    const querystring = searchParams.toString();
    // console.log(querystring);
    // Create the unique URL
    const uniqueURL = url + querystring;
    // Copy the URL to the clipboard
    yield navigator.clipboard.writeText(uniqueURL);
    alert("Shareable Link copied to clipboard");
    // Redirect to the unique URL
    window.location.href = uniqueURL;
    btnWrap && btnWrap.classList.toggle("hide");
    form && form.classList.toggle("hide");
    heading && heading.classList.toggle("hide");
}));
const handleParams = () => {
    // Parse the current URL's query string
    const searchParams = new URLSearchParams(window.location.search);
    // Retrieve the 'user' query parameter, which is a JSON string
    const userDataString = searchParams.get('user');
    if (userDataString) {
        btnWrap && btnWrap.classList.toggle("hide");
        form && form.classList.toggle("hide");
        heading && heading.classList.toggle("hide");
        const parsedUserData = JSON.parse(decodeURIComponent(userDataString));
        console.log("search Params data", parsedUserData);
    }
};
handleParams();
// const link = document.createElement('a');
// link.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(cvContent)
// link.download = uniquePath;  // Downloadable file name
// link.textContent = "download your resume"
// downloadBtn?.appendChild(link)
