const p1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 2000, "Se cumplio")
});

const p2 = new Promise((resolve,reject) =>{
    setTimeout(reject, 1000, "No se cumplio")
});

Promise.race([p1, p2])
    .then((result) =>{
    console.log('result', result);
})
    .catch(err =>{ console.log('error', err );});

//Gustavo Aurelio 