import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Aside from './components/Aside';
// import userAccounts from './components/userAccounts';
// import * from './components/comicInterface.js';
// import Login from './components/Login.js';

import Navigo from 'navigo';

const router = new Navigo(location.origin);

// console.log(Navigation, Header, Main, Footer);

let collection = [
  {
    'title': 'Defex',
    'issue': '002',
    'variant': '0',
    'printing': '1'
  },
  {
    'title': 'Mister Terrific',
    'issue': '004',
    'variant': '1',
    'printing': '1'
  },
  {
    'title': 'The Ninjettes',
    'issue': '002',
    'variant': '1',
    'printing': '1'
  },
  {
    'title': 'Batwing',
    'issue': '001',
    'variant': '1',
    'printing': '1'
  }
];
// collection = JSON.parse(comicCollection.JSON);
let pullList = [
  {
    'title': 'Avengers',
    'quantity': 1,
    
  },
  {
    'title': 'Spawn',
    'quantity': 2,
    
  },
  {
    'title': 'Bloodshot',
    'quantity': 1,
    
  },
  {
    'title': 'Ninja-K',
    'quantity': 2,
    
  },

];

class ComicBook {
  constructor(title, barcode) {
     this.title = title,
       this.issue = barcode.substring(0,3);
       this.variant = barcode.substring(3,4);
       this.printing = barcode.substring(4);
       this.id = this.title + barcode;
  }
}



    
    
// Login
const isLoggedIn = false;
  // const users = JSON.parse(userAccounts);



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


//  store Object
const store = {
    'profile': {
        'links': {
            'primary': [ 'Profile', 'Pull', 'Shops', 'News' ]
        },
        'title': 'Your Profile',
        'page': `
        
      <div id='usr-profile'>
      <h2>Your Profile</h2>
      <img src="./image/avatar.png" alt="profile avatar" id="avatar">
      <ul class="usr-info">
        <li>Profile: Guest </li>
        <li>Email: pds@pdskb8.com</li>
        <li>Number of comics: ${collection.length} </li>
        
    </ul>
    
    
    
  
    </div>
    <div  class="add-form">
        <form action="" method="GET" >
            <label for="comic-title">Title of Comic Book</label>
            <input type="text" name="comic_title" id="comic-title" >
            <label for="barcode" >Barcode</label>
            <input type="text"  name="barcode" id="barcode">
            <input type="submit" value="Add Comic">
            <input type="reset" value="Clear" >
          </form>
        
          <button id="show" onclick="showCollection(collection);" value="Show Collection">
    </div>
    
    <div class="listView">
      <h2>Your Collection</h2>
      
    </div>
    `
    },

    'pull': {
        'links': {
            'primary': [ 'Profile', 'Pull', 'Shops', 'News' ]
        },
        'title': 'Your Pull List',
        'page': `
      <div id="usr-profile">
      <h2>Your Pull List</h2>
      <img src="" alt="profile avatar" id="avatar">
      <ul class="usr-info">
        <li>Profile: Guest </li>
        <li>Email: pds@pdskb8.com</li>
        <li>Number of comics: ${collection.length} </li>
        
    </ul>
    </div>
    
    <div class="add-form">
      <h2>Add to Your Pull List</h2>
      <form >
    
      <label for="comictitle">Title of Comic Book</label>
      <input type="text" id="comictitle" required autofocus >
      <label for="pull-barcode">Barcode</label> 
      <input type="text" id="pull-barcode" required>
      <label for="quantity" >Quantity</label>
      <input type="number" id="quantity" min="1" max="5" >
      <input type="submit" >
      <input type="reset" >
  </form>
  <button id="show" onclick="showPull(pullList);" value="Show Pull List">
  </div>
 
  <div class="listView">
      <h2>Your Pull List</h2>
      
    </div>
  

    `
    },

    'shops': {
        'links': {
            'primary': [ 'Profile', 'Pull', 'Shops', 'News' ]
        },
        'title': 'Comic Shops',
        'page': `
      <div class="listView">
  <h2>Local Comic Book Shops</h2>
</div>
    `
   },

    'news': {
        'links': {
            'primary': [ 'Profile', 'Pull', 'Shops', 'News' ]
        },
        'title': 'Comic News',
        'page': `
      <div class="news">
      <h2>What's Hot: </h2>
      <article>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus pariatur aspernatur repellendus dolores delectus, beatae eveniet dolore officiis culpa ea maiores, deleniti consectetur repudiandae incidunt a quas explicabo, harum velit.</p>
      </article>
      <div id="leadBlob">
      </div>
    </div>
    `
    }
};

// List collection
function showCollection(comicList) {
  
  let collectionHTML = `<ul>`;

  for(let i = 0; i < comicList.length; i++) {
  collectionHTML += `<details><summary><li>${comicList[i].title}</li></summary>
  <div class="comicInfo">
    <h3>Title: ${comicList[i].title}</h3>
    <img src="" alt="comic cover" >
    <ul>

      <li>Issue#: ${comicList[i].issue}</li>
      <li>Variant Cover#: ${comicList[i].variant}</li>
      <li>Printing: ${comicList[i].printing}</li>

    </ul>
    
  </div>
  
  </details>`;
}

collectionHTML += `</ul>`;
return document.querySelector(".listView").innerHTML = collectionHTML;
}

// List Pull List

function showPullList(pullList) {
  let pullHTML = '<ul>';
  for(let i = 0; i < pullList.length; i++) {
    pullHTML += `<li><h3>${pullList[i].title}</h3></li>
    <li>Quantity: ${pullList[i].quantity}</li>
    `;
  }
  pullHTML += '</ul>';
  return document.querySelector(".listView").innerHTML = pullHTML;
}

function showCollectionBy(collection, usrQuery) {
const result = collection.filter(comic => comic.value == usrQuery);
  let listHTML = `<ul>`;
result.forEach(item => {
  listHTML += `<li>${item}</li>`;
});
listHTML += `</ul>`;
document.querySelector(".listView").innerHTML = listHTML;
}

const render = (state) => {
  // We use function invocation that actually runs the fxns. and then 'returns' the markup ao that
  //
  document.querySelector('#root').innerHTML = `
${Header(state)}
${Navigation(state)}
${Main(state)}
${Footer(state)}`;

  router.updatePageLinks();
};

render(store.profile);


router
  .on(':view', (params) => {
    console.log(params);
    render(store[params.view]);
  })
  .resolve();

const comicEntry = document.querySelector('form');
    
comicEntry.addEventListener('submit', (event) => {
    const formData = event.target.elements;
    
    event.preventDefault();
    const comicbook = new newComic(formData[0], formData[1]);
    
    collection.push(comicbook);
    render(store);
    
});

  // Add to Collection


    
 

showCollection(collection);
