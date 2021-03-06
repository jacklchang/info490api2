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

firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    let uid = user.uid;
    firebase
      .database()
      .ref("users")
      .once("value")
      .then((snapshot) => {
        var users = snapshot.val();
        name_val = users[uid].fname;
        $("#profile-id").append("Welcome back " + name_val + "!");
        $("#profile-name").append(name_val);
      });
    let settings = document.querySelector('#settings');
    settings.addEventListener('click', () => {
      window.location = './settings.html';
    })
    let buttons = document.querySelectorAll(".card button.save");
      console.log(buttons)
    firebase
      .database()
      .ref("users/" + uid + "/saved")
      .once("value")
      .then((snapshot) => {
        // console.log(snapshot.val())
        let courses = snapshot.val();
        let courseRef = Object.keys(courses);
        titles = courseRef.map((d) => {
          return courses[d].courseTitle;
        });
        console.log(titles);
        for (let i = 0; i < buttons.length; i++) {
          let cardContent = buttons[i].parentElement.parentElement.children;
          let cardHeader = cardContent[0].children;
          let cardTitle = cardHeader[0].textContent;
          console.log(cardTitle)
          if (titles.includes(cardTitle)) {
            buttons[i].classList.remove("save");
            buttons[i].textContent = "Saved";
          }
        }
        buttons = document.querySelectorAll(".card button.save");
        console.log(buttons)
      })
      .then(() => {
        // console.log(buttons)
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("click", () => {
            let cardContent = buttons[i].parentElement.parentElement.children;
            let cardHeader = cardContent[0].children;
            // console.log(cardHeader)
            let cardTitle = cardHeader[0].textContent;
            console.log(cardTitle);
            let cardImg = cardContent[1].src;
            console.log(cardImg);
            let cardBody = cardContent[2].children;
            // console.log(cardBody)
            let cardDesc = cardBody[0].textContent;
            console.log(cardDesc);
            let cardFooter = cardContent[3].children;
            // console.log(cardFooter[0])
            let courseLink = cardFooter[0].href;
            console.log(courseLink);
            firebase
              .database()
              .ref("users/" + uid)
              .once("value")
              .then((snapshot) => {
                console.log(snapshot.val());
                var curUser = snapshot.val();

                var saved = snapshot.val().saved;
                if (saved.key == 0) {
                  var newCourseKey = firebase
                    .database()
                    .ref("users/" + uid)
                    .child("saved")
                    .push().key;
                  console.log(newCourseKey);
                  let newSave = {
                    [newCourseKey]: {
                      courseTitle: cardTitle,
                      img: cardImg,
                      desc: cardDesc,
                      link: courseLink,
                    },
                  };
                  // var userInfo = { saved: newSave };
                  // console.log(userInfo);
                  return firebase
                    .database()
                    .ref("users/" + uid + "/saved")
                    .set(newSave);
                }
                var newCourseKey = firebase
                  .database()
                  .ref("users/" + uid)
                  .child("saved")
                  .push().key;
                console.log(newCourseKey);
                saved[newCourseKey] = {
                  courseTitle: cardTitle,
                  img: cardImg,
                  desc: cardDesc,
                  link: courseLink,
                };
                var userInfo = { saved: saved };
                console.log(userInfo);
                return firebase
                  .database()
                  .ref("users/" + uid)
                  .update(userInfo);
              })
              .then(() => {
                buttons[i].textContent = "Saved";
              });
          });
        }
      });

    let home = document.querySelector(".navbar-brand");
    home.addEventListener("click", () => {
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
          } else if (userRole == "Product/Project Manager") {
            window.location = "./pm_home.html";
          } else {
            window.location = "./non_tech_home.html";
          }
        });
    });
  } else {
    window.location = "./index.html";
  }
});

let logOutBtn = document.querySelector("#log-out");
logOutBtn.addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .catch((err) => console.log(err));
});
