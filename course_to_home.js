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
        });
      let settings = document.querySelector('#settings');
      settings.addEventListener('click', () => {
        window.location = '../settings.html';
      })
  
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
              window.location = "../ds_home.html";
            } else if (userRole == "Cybersecurity") {
              window.location = "../cyber_home.html";
            } else if (userLevel == "fundamental") {
              window.location = "../home.html";
            } else if (userRole == "Software Developer") {
              window.location = "../swe_home.html";
            } else if (userRole == "Product/Project Manager") {
              window.location = "../pm_home.html";
            } else {
              window.location = "../non_tech_home.html";
            }
          });
      });
    } else {
      window.location = "../index.html";
    }
  });
  
  let logOutBtn = document.querySelector("#log-out");
  logOutBtn.addEventListener("click", () => {
    firebase
      .auth()
      .signOut()
      .catch((err) => console.log(err));
  });
  