/** 
 * Crea 3 promesas diferentes que tomen al azar un número
 * del 1 al 100.
 * Cuando las 3 promesas tienen el número al azar mayor a 50
 * muestras un mensaje de éxito, de lo contrario muestra 
 * un mensaje que indique que al menos 1 promesa no superó
 * el número 50
 */


//PRIMERA FORMA ***********************
const MAX_NUMBER = 100;

const getRandomNumer = () => {
    const randomNumber = Math.floor(Math.random() * MAX_NUMBER);

    return randomNumber;
}

let promiseMaker = (id) => {
    return new Promise((resolve, reject) => {
        let randomNumber = getRandomNumer();

        if(randomNumber > 50){
            resolve(`Finalizada con éxito la promesa ${id}. El número random fue: ${randomNumber}`);
        }else {
            reject(`En la promesa número ${id}. El número random no superó el valor de 50,su valor fue: ${randomNumber}`);
        }
    });
}

let promise1 = promiseMaker(1);
let promise2 = promiseMaker(2);
let promise3 = promiseMaker(3);

let arrayPromises = [promise1,promise2, promise3]
Promise.all([promise1, promise2, promise3])
    .then(result => console.log('Éxito, todas las promesas se resolvieron',result))
    .catch(error => console.log('Al menos una promesa fue rechazada',error));



//SEGUNDA FORMA *********************
// let promise1 = new Promise((resolve,reject) => {
//     let randomNumber = getRandomNumber();

//     if(randomNumber > 50){
//         resolve(`Finalizada con éxito la promesa el número random fue: ${randomNumber}`);
//     }else {
//         reject(`En la promesa número el número random no superó el valor de 50,su valor fue: ${randomNumber}`);
//     }
// });

// let promise2 = new Promise((resolve,reject) => {
//     let randomNumber = getRandomNumber();

//     if(randomNumber > 50){
//         resolve(`Finalizada con éxito la promesa el número random fue: ${randomNumber}`);
//     }else {
//         reject(`En la promesa número el número random no superó el valor de 50,su valor fue: ${randomNumber}`);
//     }
// });

// let promise3 = new Promise((resolve,reject) => {
//     let randomNumber = getRandomNumber();

//     if(randomNumber > 50){
//         resolve(`Finalizada con éxito la promesa el número random fue: ${randomNumber}`);
//     }else {
//         reject(`En la promesa número el número random no superó el valor de 50,su valor fue: ${randomNumber}`);
//     }
// });

// let arrayPromises = [promise1,promise2, promise3]
// Promise.all(arrayPromises)
//     .then(result => console.log('Éxito, todas las promesas se resolvieron'))
//     .catch(error => console.log('Al menos una promesa fue rechazada'));


