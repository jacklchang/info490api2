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

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    let uid = user.uid;
    firebase
      .database()
      .ref("users/" + uid)
      .once("value")
      .then((snapshot) => {
        var userInfo = snapshot.val();
        courses = userInfo.saved;
        courseRef = Object.keys(courses);
        // select carousel
        let carousel = document.querySelector(".carousel-inner");
        // create only one set of cards for short course list
        if (courseRef.length < 3) {
          // create carousel section
          let wrapper = document.createElement("div");
          wrapper.classList.add("carousel-item", "active");
          // create card deck
          let deck = document.createElement("div");
          deck.classList.add("card-deck", "text-left", "mx-5");
          // create cards for every course
          for (let i = 0; i < courseRef.length; i++) {
            course = courses[courseRef[i]];
            // console.log(course);
            card = makecard(course);
            deck.appendChild(card);
          }
          wrapper.appendChild(deck);
          carousel.appendChild(wrapper);
        } else {
          let wrapper1 = document.createElement("div");
          wrapper1.classList.add("carousel-item", "active");
          // create card deck
          let deck1 = document.createElement("div");
          deck1.classList.add("card-deck", "text-left", "mx-5");
          // create cards for every course
          for (let i = 0; i < 3; i++) {
            course = courses[courseRef[i]];
            // console.log(course);

            card = makecard(course);

            deck1.appendChild(card);
          }
          wrapper1.appendChild(deck1);
          carousel.appendChild(wrapper1);

          // for (let i = 3; i < courseRef.length; i += 3) {
          //   let wrapper = document.createElement("div");
          //   wrapper.classList.add("carousel-item");
          //   // create card deck
          //   let deck = document.createElement("div");
          //   deck.classList.add("card-deck", "text-left", "mx-5");
          //   // create cards for every course
          // }
          i = 3;
          while (i < courseRef.length) {
            let wrapper = document.createElement("div");
            wrapper.classList.add("carousel-item");
            // create card deck
            let deck = document.createElement("div");
            deck.classList.add("card-deck", "text-left", "mx-5");

            card1 = makecard(courses[courseRef[i]])
            deck.appendChild(card1)
            i++
            if (i < courseRef.length) {
              card2 = makecard(courses[courseRef[i]])
              deck.appendChild(card2)
              i++
              if (i < courseRef.length) {
                card3 = makecard(courses[courseRef[i]])
                deck.appendChild(card3)
                i++
              }
            }
            wrapper.appendChild(deck)
            carousel.appendChild(wrapper)
          }
        }
      });
  }
});

makecard = (course) => {
  let card = document.createElement("div");
  card.classList.add("card", "mx-3", "p-2", "pt-3", "container");

  let header = document.createElement("div");
  header.classList.add("card-header");

  let heading = document.createElement("h3");
  heading.textContent = course.courseTitle;
  header.appendChild(heading);
  card.appendChild(header);

  let cardImg = document.createElement("img");
  cardImg.classList.add("card-img", "my-3", "align-self-center");
  cardImg.src = course.img;
  card.appendChild(cardImg);

  let body = document.createElement("div");
  body.classList.add("card-body");

  let desc = document.createElement("p");
  desc.classList.add("card-text", "text-white");
  desc.textContent = course.desc;
  body.appendChild(desc);
  card.appendChild(body);

  let footer = document.createElement("div");
  footer.classList.add(
    "card-footer",
    "justify-content-around",
    "row",
    "mx-1",
    "mb-2"
  );

  let courseLink = document.createElement("a");
  courseLink.classList.add("btn", "btn-light", "col-5", "mr-2", "mt-2");
  courseLink.role = "button";
  courseLink.textContent = "Get Started";
  courseLink.href = course.link;
  footer.appendChild(courseLink);

  let remove = document.createElement("button");
  remove.classList.add("btn", "btn-primary", "col-5", "ml-2", "mt-2", "remove");
  remove.role = "button";
  remove.textContent = "Remove";
  footer.appendChild(remove);
  card.appendChild(footer);

  return card;
};
