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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    let uid = user.uid
    firebase.database().ref("users").once('value').then((snapshot) => {
      var users = snapshot.val();
      name_val = users[uid].fname;
    $("#profile-id").append(name_val);
    $("#profile-name").append(name_val);
    })

  } else {
    console.log('uh oh')
  }
});