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
  let modal = document.querySelector("#signup-window .modal-body");
  var email = document.querySelector("#nemail").value;
  var password = document.querySelector("#npassword").value;
  var fname = document.querySelector("#fname").value;
  var lname = document.querySelector("#lname").value;
  // Clear modal content on click
  modal.innerHTML = "";

  modal.classList.add("p-4");

  let heading = document.createElement("h2");
  heading.classList.add("text-light");
  heading.textContent = "Just a few more questions...";
  modal.appendChild(heading);

  // Add question prompt 1
  let generalquestion = document.createElement("label");
  generalquestion.textContent = "Do you have any programming experience?";
  generalquestion.classList.add("text-light", "h5", "mt-3");
  modal.appendChild(generalquestion);

  // add divs for options 1
  let option1 = document.createElement("div");
  option1.classList.add("form-check");

  let option2 = document.createElement("div");
  option2.classList.add("form-check");

  let option3 = document.createElement("div");
  option3.classList.add("form-check");

  // add input options for divs 1
  let geninput1 = document.createElement("INPUT");
  geninput1.classList.add("form-check-input");
  geninput1.id = "genexample1";
  geninput1.name = "options1";
  geninput1.value = "fundamental";
  geninput1.type = "radio";

  let geninput2 = document.createElement("INPUT");
  geninput2.classList.add("form-check-input");
  geninput2.id = "genexample2";
  geninput2.name = "options1";
  geninput2.value = "intermediate";
  geninput2.type = "radio";

  let geninput3 = document.createElement("INPUT");
  geninput3.classList.add("form-check-input");
  geninput3.id = "genexample3";
  geninput3.name = "options1";
  geninput3.value = "advanced";
  geninput3.type = "radio";

  // add role labels 1
  let genlabel1 = document.createElement("label");
  genlabel1.classList.add("form-check-label", "text-light");
  genlabel1.for = "genexample1";
  genlabel1.textContent = "I've never written a line of code.";

  let genlabel2 = document.createElement("label");
  genlabel2.classList.add("form-check-label", "text-light");
  genlabel2.for = "genexample2";
  genlabel2.textContent = "I have some experience.";

  let genlabel3 = document.createElement("label");
  genlabel3.classList.add("form-check-label", "text-light");
  genlabel3.for = "genexample3";
  genlabel3.textContent = "I'm an experienced developer.";

  // pull together all elements 1
  option1.appendChild(geninput1);
  option1.appendChild(genlabel1);
  modal.appendChild(option1);

  option2.appendChild(geninput2);
  option2.appendChild(genlabel2);
  modal.appendChild(option2);

  option3.appendChild(geninput3);
  option3.appendChild(genlabel3);
  modal.appendChild(option3);

  // Add question prompt 2
  let roleTitle = document.createElement("label");
  roleTitle.textContent = "What role are you interested in?";
  roleTitle.classList.add("text-light", "mt-3", "h5");
  modal.appendChild(roleTitle);

  // add divs for options 2
  let div1 = document.createElement("div");
  div1.classList.add("form-check");

  let div2 = document.createElement("div");
  div2.classList.add("form-check");

  let div3 = document.createElement("div");
  div3.classList.add("form-check");

  let div4 = document.createElement("div");
  div4.classList.add("form-check");

  let div5 = document.createElement("div");
  div5.classList.add("form-check");

  // add input options for divs 2
  let input1 = document.createElement("INPUT");
  input1.classList.add("form-check-input");
  input1.type = "radio";
  input1.value = "Data Science";
  input1.id = "example1";
  input1.name = "options";

  let input2 = document.createElement("INPUT");
  input2.classList.add("form-check-input");
  input2.type = "radio";
  input2.value = "Software Developer";
  input2.id = "example2";
  input2.name = "options";

  let input3 = document.createElement("INPUT");
  input3.classList.add("form-check-input");
  input3.type = "radio";
  input3.value = "Cybersecurity";
  input3.id = "example3";
  input3.name = "options";

  let input4 = document.createElement("INPUT");
  input4.classList.add("form-check-input");
  input4.type = "radio";
  input4.value = "Product/Project Manager";
  input4.id = "example4";
  input4.name = "options";

  let input5 = document.createElement("INPUT");
  input5.classList.add("form-check-input");
  input5.type = "radio";
  input5.value = "Non-technical";
  input5.id = "example5";
  input5.name = "options";

  // add role labels 2
  let label1 = document.createElement("label");
  label1.classList.add("form-check-label", "text-light");
  label1.for = "example1";
  label1.textContent = "Data Science";

  let label2 = document.createElement("label");
  label2.classList.add("form-check-label", "text-light");
  label2.for = "example2";
  label2.textContent = "Software Developer";

  let label3 = document.createElement("label");
  label3.classList.add("form-check-label", "text-light");
  label3.for = "example3";
  label3.textContent = "Cybersecurity";

  let label4 = document.createElement("label");
  label4.classList.add("form-check-label", "text-light");
  label4.for = "example4";
  label4.textContent = "Product/Project Manager";

  let label5 = document.createElement("label");
  label5.classList.add("form-check-label", "text-light");
  label5.for = "example5";
  label5.textContent = "Other";

  // pull together all elements 2
  div1.appendChild(input1);
  div1.appendChild(label1);
  modal.appendChild(div1);

  div2.appendChild(input2);
  div2.appendChild(label2);
  modal.appendChild(div2);

  div3.appendChild(input3);
  div3.appendChild(label3);
  modal.appendChild(div3);

  div4.appendChild(input4);
  div4.appendChild(label4);
  modal.appendChild(div4);

  div5.appendChild(input5);
  div5.appendChild(label5);
  modal.appendChild(div5);

  let submitBtn = document.querySelector("#next");
  submitBtn.textContent = "Submit";
  submitBtn.id = "signup";

  let signUp = document.querySelector("#signup");
  signUp.addEventListener("click", () => {
    var r = document.getElementsByName("options");
    var value;
    for (var i = 0; i < r.length; i++) {
      if (r[i].checked) {
        // insert code to use the checked value
        value = r[i].value;
        break;
      }
    }
    var r2 = document.getElementsByName("options1");
    var level;
    for (var i = 0; i < r2.length; i++) {
      if (r2[i].checked) {
        // insert code to use the checked value
        level = r2[i].value;
        break;
      }
    }
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
            role: value,
            email: email,
            exp: level,
            saved: {},
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
                userLevel = userInfo.exp;
                if (userRole == "Data Science") {
                  window.location = "./ds_home.html";
                } else if (userRole == "Cybersecurity") {
                  window.location = "./cyber_home.html";
                } else if (userLevel == "fundamental") {
                  window.location = "./home.html";
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

$(".carousel.carousel-multi-item.v-2 .carousel-item").each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < 4; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));
  }
});
