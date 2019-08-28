import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import * from './components/comicInterface.js';
// import Login from './components/Login.js';

import Navigo from "navigo";

const router = new Navigo(location.origin);

// console.log(Navigation, Header, Main, Footer);

let collection = [];
let pullList = [];

class ComicBook {
  constructor(title, barcode) {
    (this.title = barcode.sub),
      (this.issue = issue),
      (this.variant = variant),
      (this.printing = printing),
      (this.id = this.title + barcode);
  }
}

function showCollection() {
  let collectionHTML = `<ul>`;

  collection.forEach(item => {
    collectionHTML += `<li>${item[property].value}</li>`;
  });
  collectionHTML += `</ul`;
  document.querySelector("listView").innerHTML = collectionHTML;
}

function showCollectionBy(collection, usrQuery) {
  const result = collection.filter(comic => comic[item].value == usrQuery);
  let listHTML = `<ul>`;
  result.forEach(item => {
    listHTML += `<li>${item}</li>`;
  });
  listHTML += `</ul>`;
  document.querySelector("listView").innerHTML = listHTML;
}

// Login
const isLoggedIn = false;
//   const users = JSON.parse(userAccounts);

// function Login(){
//   const loginForm = document.querySelector('#login');

//   loginForm.addEventListener('submit', (event) => {
//       const data = event.target.elements;

//       if(data[0].target in users[username] && data[1].target in users[email]){
//           return isLoggedIn = true;
//       }
//   });
// }

// Login();

// // Add New User to Account List
// const newUserEntry = document.querySelector('#newCollector form');

// newUserEntry.addEventListener('submit', event => {

//   event.preventDefault();

//   const data = event.target.elements;
//   const collector = newUser(data[0],data[1],data[2]);

// });

// // New Users Sign Up

// class newUser  {
//   constructor(username, email, password) {

//     this.username = "Nobody",
//     this.email =  "imaginethis25@yahoo.com",
//     this.password = "nothing2019"
//   }
// }

// Render Function
const render = state => {
  // We use function invocation that actually runs the fxns. and then 'returns' the markup ao that
  //
  document.querySelector("#root").innerHTML = `
${Navigation(state)}
${Header(state)}
${Main(state)}
${Footer(state)}`;

  router.updatePageLinks();
};


//  store Object
const store = {
  "profile": {
    "links": {
      "primary": ["Collection", "Pull List", "Comic Shops", "Comic News"]
    },
    "title": `Profile of Guest`,
    "page": `
      <div id="usr-profile">
      <h2>Your Profile</h2>
      <img src="" alt="profile avatar" id="avatar">
      <ul class="usr-info">
        <li>Profile: Guest </li>
        <li>Email: pds@pdskb8.com</li>
        <li>Number of comics: ${collection.length} </li>
        
    </ul>
    <input type="search" name="comic_lookup" class="comic_lookup">
    <input type="button" name="lookup-btn" class="lookup-btn">
    <input type="button" class="display-collection" >
    <input type="button" class="clear-view">
    <div class="comic-btn-operators">
        <input type="button" class="addComic">
        <input type="button" class="editComic">
        <input type="button" class="deleteComic">
    </div>
    
  
    </div>
    <div id="form" id="collection-form">
        <form action="" method="GET" >
      
            <input type="text" name="comic_title" id="comic_title" >
            <input type="text"  name="printing" id="printing">
            <input type="text"  name="issue"  id="issue">
            <input type="text"  name="variant" id="variant">
            <input type="hidden"  name="item_num" id="item_num">
            <input type="submit" >
            <input type="reset" >
          </form>
    </div>
    <div class="view-list">
      <h2>Your Collection</h2>
    </div>
    `
  },

  "pull list": {
    "links": {
      "primary": ["Collection", "Pull List", "Comic Shops", "Comic News"]
    },
    "title": `Pull List of Guest`,
    "page": `
      <div id="usr-profile">
      <h2>Your Profile</h2>
      <img src="" alt="profile avatar" id="avatar">
      <ul class="usr-info">
        <li>Profile: Guest </li>
        <li>Email: pds@pdskb8.com</li>
        <li>Number of comics: ${collection.length} </li>
        
    </ul>
    <input type="search" name="comic_lookup" class="comic_lookup">
    <input type="button" name="lookup-btn" class="lookup-btn">
    <input type="button" class="display-collection" >
    <input type="button" class="clear-view">
    <div class="comic-btn-operators">
        <input type="button" class="addComic">
        <input type="button" class="editComic">
        <input type="button" class="deleteComic">
    </div>
      <form >
      <input type="search" class="lookUp">
      <input type="text" id="title"> 
      <input type="number" id="barcode">
      <input type="number" id="quantity">
      <input type="button" class="add">
      <input type="button" class="edit">
      <input type="button" class="delete">
      <!-- <button class="delete"></button>
      <button class="edit"></button>
      <button class="add"></button>
  -->
  </form>
  <div class="view-list">
  <h2>Your Your Pull List</h2>
</div>

    `
  },

  "comic shops": {
    "links": {
      "primary": ["Collection", "Pull List", "Comic Shops", "Comic News"]
    },
    "title": `Comic Shops near Guest`,
    "page": `
      <div class="view-list">
  <h2>Your Your Pull List</h2>
</div>
    `
  },

  "comic news": {
    "links": {
      "primary": ["Collection", "Pull List", "Comic Shops", "Comic News"]
    },
    "title": "Comic News",
    "page": `
      <div class="comicbook-news">
      <h2>What's Hot: </h2>
    </div>
    `
  }
};


router
  .on(":view", params => {
    console.log(params);
    render(store[params.view]);
  })
  .resolve();

render(store.profile);
