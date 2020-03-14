import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import userAccounts from './components/userAccounts';
// import * from './components/comicInterface.js';
// import Login from './components/Login.js';

import Navigo from 'navigo';

const router = new Navigo(location.origin);

console.log(Navigation, Header, Main, Footer);

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
    'title': 'Teenage Mutant Ninja Turtles',
    'quantity': 2,
    
  },
  {
    'title': 'Shark Knight',
    'quantity': 1,
    
  },
  {
    'title': 'The Double Titanium Tailed Twins',
    'quantity': 1,
    
  },
  {
    'title': 'Super Snot Slingers',
    'quantity': 1,
    
  },

];

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
        'title': 'Comic Stash: Your Profile',
        'page': `
        
      <div class='cmodules'>
      <h2>Your Profile</h2>
      <img src="Image/avatar.png" alt="profile avatar" id="avatar">
      <ul class="usr-info">
        <li>Profile: Guest </li>
        <li>Email: pds@pdskb8.com</li>
        <li>Number of comics: ${collection.length} </li>
        
    </ul>
    </div>
    <article>
    <button class="form-toggle"> add </button>
    <div  class="dropdown">
        <form action="" method="GET" >
             <h2>Enter Book</h2>
            <label for="comic-title">Title of Comic Book</label>
            <input type="text" name="comic_title" id="comic-title" >
            <label for="barcode" >Barcode</label>
            <input type="text"  name="barcode" id="barcode">
           
            <input type="submit" value="Add Comic">
            <input type="reset" value="Clear" >
          </form>
        
          
    </div>
    </article>
    
    <div class="cmodules">
      <h2>Your Collection</h2>
      <button id="display-collection" >Display Collection</button>
      <div class="listView">
      </div>
      
    </div>
    `
    },

    'pull': {
        'links': {
            'primary': [ 'Profile', 'Pull', 'Shops', 'News' ]
        },
        'title': 'Comic Stash: Your Pull List',
        'page': `
      <div class="cmodules">
      <h2>Your Pull List</h2>
      <img src="" alt="profile avatar" id="avatar">
      <ul class="usr-info">
        <li>Profile: Guest </li>
        <li>Email: pds@pdskb8.com</li>
        <li>Number of comics: ${pullList.length} </li>
        
    </ul>
    </div>
    <article>

    <button class="form-toggle"> form </button>
    <div class="dropdown">
      
      <form >
      <h2>Add to Your Pull List</h2>
      <label for="comictitle">Title of Comic Book</label>
      <input type="text" id="comictitle" required autofocus >
      <label for="pull-barcode">Barcode</label> 
      <input type="text" id="pull-barcode" required>
      <label for="quantity" >Quantity</label>
      <input type="number" id="quantity" min="1" max="5" >
      <label>Publisher</label>
             <select id = "publisherList">
               <option value = "marvel">marvel</option>
               <option value = "dc">dc comics</option>
               <option value = "afterhours">after hours press</option>
               <option value = "archie">archie comics</option>
               <option value = "aspen">aspen mlt</option>
               <option value = "valiant">valiant entertainment</option>
               <option value = "boom">boom studios</option>
               <option value = "image">image comics</option>
               <option value = "darkhorse">dark horse</option>
               <option value = "dynamite">dynamite entertainment</option>
               <option value = "fantagraphics">fantagraphics books</option>
               <option value = "idw">idw publishing</option>
               <option value = "crossgen">crossgen</option>
               <option value = "aftershock">aftershock comics</option>
               <option value = "mirage">mirage studios</option>
               <option value = "topcow">top cow productions</option>
             </select>
      <input type="submit" >
      <input type="reset" >
  </form>
  
  </div>
  </article>
 
  <div class="cmodules">
      <h2>Your Pull List</h2>
      <button id="display-pull" >Display Pull List</button>
      <div class="listPull">
      </div>
      
    </div>
  

    `
    },

    'shops': {
        'links': {
            'primary': [ 'Profile', 'Pull', 'Shops', 'News' ]
        },
        'title': 'Comic Stash: Comic Shops',
        'page': `
        
        <div class="cmodules">
          <h2>Local Comic Book Shops</h2>
          <div id="map" >
          </div>
    
        </div>

    `
   },

    'news': {
        'links': {
            'primary': [ 'Profile', 'Pull', 'Shops', 'News' ]
        },
        'title': 'Comic Stash: Comic News',
        'page': `
      <div class="cmodules">
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
  collectionHTML += `<details><summary><ul><li>${comicList[i].title}</li></summary>
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
return document.querySelector(".listView").innerHTML += collectionHTML;
}

// List Pull List

function showPull(pull) {
  let pullHTML = `<ul>`;
  for(let i = 0; i < pull.length; i++) {
    pullHTML += `<li><h3>${pull[i].title}</h3></li>
    <li>Quantity: ${pull[i].quantity}</li>
    <li>
    `;
  }
  pullHTML += `</ul>`;
  return document.querySelector(".listPull").innerHTML += pullHTML;
}

// function showCollectionBy(collection, usrQuery) {
// const result = collection.filter(comic => comic.value == usrQuery);
//   let listHTML = `<ul>`;
// result.forEach(item => {
//   listHTML += `<li>${item}</li>`;
// });
// listHTML += `</ul>`;
// document.querySelector(".listView").innerHTML = listHTML;
// }

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



// Add a book to the collection with form

const comicEntry = document.querySelector('form');
    
comicEntry.addEventListener('submit', (event) => {
    const data = event.target.elements;
    
    event.preventDefault();
    const comicbook = {
      'title' : data[0].value,

    'issue' : data[1].value.slice(0,3),
    'cover' : data[1].value.slice(3,1),
    'printing' : data[1].value.slice(4,1),
    }
    
    collection.push(comicbook);
    
    
});


    
 

// showCollection(collection);

// Uncovers form for adding comic books.
// const addComicBook = document.querySelector('#form-toggle');
// let toggleForm = document.querySelector('dropdown');

// addComicBook.addEventListener('click', (event)=> {
//   event.preventDefault();
  


// })

// Button for Collection 
const displayComics = document.querySelector('#display-collection');
displayComics.addEventListener('click', (event)=> {
  event.preventDefault();
  showCollection(collection);

})

// Button for Pull List
const displayPull = document.querySelector('#display-pull');
displayPull.addEventListener('click', (event)=> {
  event.preventDefault();
  showPull(pullList);

})