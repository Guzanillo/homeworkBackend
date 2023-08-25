const p1 = new Promise((resolve) => {
    setTimeout(() =>{
        resolve("Prime valor devuelto");
    }, 1500);   
});

const p2 = new Promise((resolve) =>{
    setTimeout(()=>{
        resolve("Segundo valor devuelto");
    },2000);
});

const p3 = new Promise((resolve) =>{
    setTimeout (() => {
        resolve("Tercer valor devuelto");
    },1000);
});

Promise.any([p1, p2, p3]).then((result) =>{
    console.log(result);
})

// Gustavo Aurelio 