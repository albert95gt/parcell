import Notiflix from 'notiflix';


const succes =  Math.random() > 0.3;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         if(succes){
//             resolve("succes! value passed to resolve function");
//         }
//         reject("error! error passed to reject function")
//     }, 2000);
// })
// console.log("Before promise.then()");

// promise
// .then(value => console.log(value))
// .catch(error => console.log(error))
// .finally(()=> console.log("promise settled"))
// ================================================= //

// const promise =  new Promise((resolve, reject) => {
//     setTimeout(function() {
//         if (succes) {
            
//             resolve(5);
//         }
//         reject("Szeretlek Mazsolam :P")
//     }, 3000);
// }); 
// promise
// .then(value => {
//     console.log(value);
//     return value * 5
// })
// .then(x => {
//     console.log(x);
//     return x - 5;
// })
// .then(y => {
//     console.log(y);
// })
// .catch(error => {
//     console.error(error);
// })
// .finally(() => {
//     console.log("Final task");
// })

const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
        
        console.log(`Fetching data for ${username}`)

        setTimeout(function() {
            const isSucess = Math.random() > 0.5;

            if (isSucess) {
                resolve('success value')
            } else {
                reject('error')
            }
        }, 2000);
    });
}

fetchUserFromServer('Albert')
.then(user => {
    console.log(user)
    Notiflix.Notify.success(user);
})
.catch(error => {
    console.log(error, `This user not defined`)
    Notiflix.Notify.failure(`This user not defined`);
})

