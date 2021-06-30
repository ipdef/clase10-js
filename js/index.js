/**
 * Ejecuta 3 llamadas diferentes al siguiente endpoint:
 * https://pokeapi.co/api/v2/pokemon/ + (número entero)
 * 
 * Cuando todas las llamadas estén completas, muestra los resultados
 * por pantalla modificando el DOM.
 * 
 * Pasos:
 * llamar al endpoint 3 -> fetch 
 * Todas las llamadas -> Promise.all()
 * Modificar el DOM
 */

let poke1 = fetch('https://pokeapi.co/api/v2/pokemon/4');
let poke2 = fetch('https://pokeapi.co/api/v2/pokemon/74');
let poke3 = fetch('https://pokeapi.co/api/v2/pokemon/89');

let pokeCtn = document.getElementById('pokeCtn')

Promise.all([poke1, poke2, poke3])
    .then(result => {
        //console.log(result)
        for (let i = 0; i < result.length; i++) {
            const response = result[i];
            //console.log(response);
            response.json()
                .then(pokemon => {
                    console.log(pokemon);
                    renderPokemon(pokemon);
                })
        }
    })
    .catch(error => console.log(error));
/**
 * Funcion para renderizar los pokemons in el DOM
 */
function renderPokemon(pokemon){
    let ctn = document.createElement('div');
    let name = document.createElement('h2');
    name.textContent = `${pokemon.name} #${pokemon.id}`;
    let img = document.createElement('img');
    img.setAttribute('src', pokemon.sprites.front_default);
    ctn.appendChild(name);
    ctn.appendChild(img);
    pokeCtn.appendChild(ctn);
}
