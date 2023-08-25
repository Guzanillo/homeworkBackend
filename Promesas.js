//*******************************PROMESA****************************
const dataBase = [{
    id:1,
    phone: "motorola",
    price: 2000
},{
    id:2,
    phone: "samsung",
    price: 2500
},{
    id:3,
    phone: "apple",
    price: 3000
}];

let datePhone;

const myPromise = () =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            datePhone = dataBase;
            if(!datePhone) reject("ops we have a error.");
            else resolve(datePhone)
        },1500)
    });
}

myPromise()
    .then( (datePhone) => {
        console.log(datePhone);
        let identification = datePhone[2];
        return {identification}
    })
// Vamos a mandar solo cosas especificas de dataBase 
    .then( (obj) => {
        console.log(obj);
    } )
    .catch( err => {console.log(err)})


//Gustavo Aurelio
