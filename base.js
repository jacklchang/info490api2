var firebaseConfig = {
  apiKey: "AIzaSyBDkUqMQ_hqqhVHY-SUSkQ9c8pMu0eBE60",
  authDomain: "encounter-af85b.firebaseapp.com",
  databaseURL: "https://encounter-af85b.firebaseio.com",
  projectId: "encounter-af85b",
  storageBucket: "encounter-af85b.appspot.com",
  messagingSenderId: "723627479249",
  appId: "1:723627479249:web:5836be0ffe2dceaf4e75f0",
  measurementId: "G-HLJLQNXMCW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let quiz = document.querySelector("#next");
quiz.addEventListener("click", () => {
  let modal = document.querySelector(".signup");
  var email = document.querySelector("#nemail").value;
  var password = document.querySelector("#npassword").value;
  var fname = document.querySelector("#fname").value;
  var lname = document.querySelector("#lname").value;
  // Clear modal content on click
  modal.innerHTML = "";

  // modal.classList.add("p-4");

  let heading = document.createElement("h1");
  heading.classList.add("encountertitles", "mt-5", "mb-5");
  heading.textContent = "Just a few more questions...";
  modal.appendChild(heading);

  // Add question prompt 1
  let generalquestion = document.createElement("p");
  generalquestion.textContent =
    "Do you have any programming or software development experience?";
  generalquestion.classList.add("text-light", "lead", "mb-5");
  modal.appendChild(generalquestion);

  let row = document.createElement("div");
  row.classList.add("row", "justify-content-center");

  let wrapper = document.createElement("div");
  wrapper.classList.add("col-6", "text-center");

  let option1 = document.createElement("div");
  option1.classList.add("btn", "quiz1b", "btn-dark");
  option1.role = "button";
  option1.textContent = "I've never written a line of code";
  let arrow1 = document.createElement("i");
  arrow1.classList.add("fas", "fa-angle-right");
  option1.appendChild(arrow1);

  wrapper.appendChild(option1);

  let option2 = document.createElement("div");
  option2.classList.add("btn", "quiz1b", "btn-dark");
  option2.role = "button";
  option2.textContent = "I have some experience";
  let arrow2 = document.createElement("i");
  arrow2.classList.add("fas", "fa-angle-right");
  option2.appendChild(arrow2);

  wrapper.appendChild(option2);

  let option3 = document.createElement("div");
  option3.classList.add("btn", "quiz1b", "btn-dark");
  option3.role = "button";
  option3.textContent = "I'm an experienced developer";
  let arrow3 = document.createElement("i");
  arrow3.classList.add("fas", "fa-angle-right");
  option3.appendChild(arrow3);

  wrapper.appendChild(option3);
  row.appendChild(wrapper);
  modal.appendChild(row);

  let levels = document.querySelectorAll(".quiz1b");
  for (let i = 0; i < levels.length; i++) {
    levels[i].addEventListener("click", () => {
      let level;
      if (levels[i].textContent == "I've never written a line of code") {
        level = "fundamental";
      } else if (levels[i].textContent == "I have some experience") {
        level = "intermediate";
      } else {
        level = "advanced";
      }
      modal.innerHTML = "";
      let heading = document.createElement("h1");
      heading.classList.add("encountertitles", "mt-5", "mb-5");
      heading.textContent = "Just a few more questions...";
      modal.appendChild(heading);

      // Add question prompt 1
      let generalquestion = document.createElement("p");
      generalquestion.textContent = "What track would you like to pursue?";
      generalquestion.classList.add("text-light", "lead", "mb-5");
      modal.appendChild(generalquestion);

      let nrow = document.createElement("div");
      nrow.classList.add("row", "justify-content-center");
      let wrapper1 = document.createElement("div");
      wrapper1.classList.add("col-9");
      group = document.createElement("div");
      group.classList.add("btn-group-vertical");

      let rec = document.createElement("h3");
      rec.classList.add("text-light");
      rec.textContent = "Encounter recommends...";

      role1 = document.createElement("button");
      role1.classList.add("buttonoptions");
      role1.type = "button";
      inrow1 = document.createElement("div");
      inrow1.classList.add("row", "pl-4");
      p1 = document.createElement("p");
      p1.textContent = "First time developer";
      a1 = document.createElement("i");
      a1.classList.add("fas", "fa-angle-right");
      p1.appendChild(a1);
      inrow1.appendChild(p1);
      s1 = document.createElement("span");
      s1.textContent = `Jump-start your career, earn recognition, and validate your skills in a job-role with
      industry-recognized Microsoft certifications.`;
      inrow1.appendChild(s1);
      role1.appendChild(inrow1);
      group.appendChild(role1);

      other = document.createElement("h3");
      other.classList.add("text-light", "pt-5");
      other.textContent = "Available tracks";
      group.appendChild(other);

      role2 = document.createElement("button");
      role2.classList.add("buttonoptions");
      role2.type = "button";
      inrow2 = document.createElement("div");
      inrow2.classList.add("row", "pl-4");
      p2 = document.createElement("p");
      p2.textContent = "Software Developer";
      a2 = document.createElement("i");
      a2.classList.add("fas", "fa-angle-right");
      p2.appendChild(a2);
      inrow2.appendChild(p2);
      s2 = document.createElement("span");
      s2.textContent = `Developers design, build, test, and maintain solutions. Developers implement
      applications and services by partnering with Solution Architects and customers.`;
      inrow2.appendChild(s2);
      role2.appendChild(inrow2);
      group.appendChild(role2);

      role3 = document.createElement("button");
      role3.classList.add("buttonoptions");
      role3.type = "button";
      inrow3 = document.createElement("div");
      inrow3.classList.add("row", "pl-4");
      p3 = document.createElement("p");
      p3.textContent = "Data Science";
      a3 = document.createElement("i");
      a3.classList.add("fas", "fa-angle-right");
      p3.appendChild(a3);
      inrow3.appendChild(p3);
      s3 = document.createElement("span");
      s3.textContent = `Data Scientists apply machine learning techniques to train, evaluate, and deploy models
      that solve business problems.`;
      inrow3.appendChild(s3);
      role3.appendChild(inrow3);
      group.appendChild(role3);

      role4 = document.createElement("button");
      role4.classList.add("buttonoptions");
      role4.type = "button";
      inrow4 = document.createElement("div");
      inrow4.classList.add("row", "pl-4");
      p4 = document.createElement("p");
      p4.textContent = "Cybersecurity";
      a4 = document.createElement("i");
      a4.classList.add("fas", "fa-angle-right");
      p4.appendChild(a4);
      inrow4.appendChild(p4);
      s4 = document.createElement("span");
      s4.textContent = `Security Engineers implement security controls and threat protection, manage identity
      and access, and protect data, applications, and networks.`;
      inrow4.appendChild(s4);
      role4.appendChild(inrow4);
      group.appendChild(role4);

      wrapper1.appendChild(group);
      nrow.appendChild(wrapper1);
      modal.appendChild(nrow);

      let roles = document.querySelectorAll(".buttonoptions");
      for (let j = 0; j < roles.length; j++) {
        roles[j].addEventListener("click", () => {
          let role = roles[j].children[0].children[0].textContent;
          // console.log(role);
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
              let rootRef = firebase.database().ref("users");
              var uid = userCredentials.user.uid;
              var user = {
                [uid]: {
                  fname: fname,
                  lname: lname,
                  role: role,
                  email: email,
                  exp: level,
                  saved: { key: 0 },
                },
              };
              return rootRef.update(user);
            })
            .then(() => {
              firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                  let uid = user.uid;
                  firebase
                    .database()
                    .ref("users/" + uid)
                    .once("value")
                    .then((snapshot) => {
                      var userInfo = snapshot.val();
                      userRole = userInfo.role;
                      // console.log(userRole)
                      userLevel = userInfo.exp;
                      // console.log('here')
                      if (userRole == "Data Science") {
                        window.location = "./ds_home.html";
                      } else if (userRole == "Cybersecurity") {
                        window.location = "./cyber_home.html";
                      } else if (userLevel == "fundamental") {
                        window.location = "./home.html";
                      } else if (userRole == "Software Developer") {
                        window.location = "./swe_home.html";
                      } else if (userRole == "First time developer") {
                        window.location = "./non_tech_home.html";
                      }
                    });
                }
              });
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorMessage);
            });
        });
      }
    });
  }
});

let login = document.querySelector("#login");
login.addEventListener("click", () => {
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          let uid = user.uid;
          firebase
            .database()
            .ref("users/" + uid)
            .once("value")
            .then((snapshot) => {
              var userInfo = snapshot.val();
              userRole = userInfo.role;
              userLevel = userInfo.exp;
              if (userRole == "Data Science") {
                window.location = "./ds_home.html";
              } else if (userRole == "Cybersecurity") {
                window.location = "./cyber_home.html";
              } else if (userLevel == "fundamental") {
                window.location = "./home.html";
              } else if (userRole == "Software Developer") {
                window.location = "./swe_home.html";
              } else {
                window.location = "./non_tech_home.html";
              }
            });
        }
      });
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// $(".carousel.carousel-multi-item.v-2 .carousel-item").each(function () {
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(":first");
//   }
//   next.children(":first-child").clone().appendTo($(this));

//   for (var i = 0; i < 4; i++) {
//     next = next.next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next.children(":first-child").clone().appendTo($(this));
//   }
// });
