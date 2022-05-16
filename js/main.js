// Firebase import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";

// Alle
// Import CRUD + database
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

// Alle
// Import auth + login
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVoadKWObjeSokbsPBt0l7cIta6tAvFDs",
  authDomain: "km-festudlejning.firebaseapp.com",
  projectId: "km-festudlejning",
  databaseURL: "km-festudlejning.firebaseio.com",
  storageBucket: "km-festudlejning.appspot.com",
  messagingSenderId: "500346358771",
  appId: "1:500346358771:web:9d8d89bab2354e12dea086",
  measurementId: "G-DXQ30604P2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const _db = getFirestore();

// Reference til arrays i firebase database
let _produkter = collection(_db, "produkter");

onSnapshot(_produkter, (snapshot) => {
  // Snapshot data fra firebase til objects
  _produkter = snapshot.docs.map((doc) => {
    const produkt = doc.data();
    produkt.id = doc.id;
    return produkt;
  });
  // Sorterer array af objects alfabetisk
  _produkter.sort((a, b) => a.name.localeCompare(b.name));
  // Append produkter ind i global variabel
  // appendProdukter(_produkter);
  console.log(_produkter);
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("menuActive");
    current[0].className = current[0].className.replace(" menuActive", "");
    this.className += " menuActive";
  });
}

function contactSuccess(event) {
  const name = document.getElementById("fname");
  const email = document.getElementById("email");
  const message = document.getElementById("subject");
  if (name.value !== "" && email.value !== "" && subject.value !== "") {
    alert(
      "Thank you for getting in touch. I will get back to you as soon as possible!"
    );
    /*
    document.getElementById("submitButton").innerHTML =
      "Success! Thank you for contacting me!"; */
  }
}
