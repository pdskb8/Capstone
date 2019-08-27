import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import * from './components/comicInterface.js';
import Login from './components/Login.js';

import Navigo from 'navigo';

const router = new Navigo(location.origin);


// console.log(Navigation, Header, Main, Footer);


//  store Object
const store = {

    'collection': {
        'links': {
            'primary': [ 'Collection', 'Pull List', 'Comic Shops', 'Comic News' ],
        },
        'title': 'Profile',
        'page': `

      `
    },

    'pull list': {
        'links': {
            'primary': [ 'Collection', 'Pull List', 'Comic Shops', 'Comic News' ],
        },
        'title': 'Pull List',
        'page': `

      `
    },

    'comic shops': {
        'links': {
            'primary': [ 'Collection', 'Pull List', 'Comic Shops', 'Comic News' ],
        },
        'title': 'Comic Shop List',
        'page': `

      `
    },

    'comic news': {
        'links': {
            'primary': [ 'Collection', 'Pull List', 'Comic Shops', 'Comic News' ],
        },
        'title': 'Comic News',
        'page': `

      `
    },

};

const isLoggedIn = false;

let collection = [];

class ComicBook  {
  constructor(title, issue, variant, printing) {
    this.title = title,
    this.issue = issue,
    this.variant = variant,
    this.printing = printing
  }
}

class newUser  {
  constructor(username, email, password) {
    
    this.username = "Nobody",
    this.email =  "imaginethis25@yahoo.com",
    this.password = "nothing2019"
  }
}

const users = [
  {
    "username": "Nobody",
    "email": "imaginethis25@yahoo.com",
    "password": "nothing2019"
  },
];

function showCollection() {
  let collectionHTML = `<ul class="item">`;

  collection.forEach( (item) => {
    
    collectionHTML +=`<li>${item[property].value}</li>`;

  });
  collectionHTML += `</ul`;
}


// Add New User to Account List
const newUserEntry = document.querySelector('#newCollector form');

newUserEntry.addEventListener('submit', event => {

  event.preventDefault();
  

  const data = event.target.elements;
  const collector = newUser(data[0],data[1],data[2]);



})

function showCollectionBy(collection, usrQuery){
  const result = collection.filter(comic => comic[item].value == usrQuery);
  let listHTML = `<ul class="item">`;
  result.forEach(item => {
    listHTML += `<li>${item}</li>`;
  });
  listHTML += `</ul>`;
  return listHTML;

}


const render = (store) => {
  // We use function invocation that actually runs the fxns. and then 'returns' the markup ao that
  //
  document.querySelector('#root').innerHTML = `
${Navigation(store)}
${Header(store)}
${Main(store)}
${Footer(store)}`;


  router.updatePageLinks();
};

render(store.home);


router
  .on(':view', (params) => {
      console.log(params);
      render(store[params.view]);
  })
  .resolve();
