// Login

export function Login(){
    const loginForm = document.querySelector('#login');

    loginForm.addEventListener('submit', (event) => {
        const data = event.target.elements;

        if(data[0].target in users[username] && data[1].target in users[email]){
            return isLoggedIn = true;
        }
    });
}

// export function loggedIn(){
//     if(isLoggedIn){

//     }
// }
