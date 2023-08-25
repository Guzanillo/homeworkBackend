const var1 = Promise.resolve("Aprendiendo nuevos metodos");
const var2 = 321;
const var3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Vamos bien");
});

const varAll = [var1, var2, var3];

Promise.all(varAll).then( result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
});