const arrayNumerico = [10, 30, 40, 25, 50, 4, 6, 9,2,1];

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

getRandomNumber();

let pokemon1 = fetch(`https://pokeapi.co/api/v2/pokemon/${arrayNumerico[getRandomNumber()]}`);
let pokemon2 = fetch(`https://pokeapi.co/api/v2/pokemon/${arrayNumerico[getRandomNumber()]}`);
let pokemon3 = fetch(`https://pokeapi.co/api/v2/pokemon/${arrayNumerico[getRandomNumber()]}`);

Promise.race([pokemon1, pokemon2,pokemon3])
    .then(result => {
        console.log(result);
        result.json()
        .then(json => {
            console.log(json.name);
        })
    })


    Promise.all([pokemon1,pokemon2,pokemon3])
    .then(result => {
        for(let i=0; i<result.length; i++){
            const response = result[i];
            response.json()
                .then(pokemon => {
                    console.log(pokemon.name);
                })
        }
    })
    .catch(error => console.log(error));