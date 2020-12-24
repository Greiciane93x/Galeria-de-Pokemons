
// || async/await é uma das novas funcionalidades
// do ES2017. Com ela é possível 
// escrever código assíncrono como 
// se estivéssemos escrevendo código síncrono 
// o primeiro passo é 
// converter a declaração function 
// para async function. Desta forma, 
// estamos definindo que esta função será
// assíncrona. 
// O próximo passo é utilizar o 
// await para cada processamento 
// assíncrono dentro da função 
// a própria leitura/interpretação 
// do código fica mais fácil utilizando 
// async/await. Await só pode 
// ser utilizado dentro de funções com async. ||

// || Síncrono ou assíncrono diz
// respeito ao fluxo  de execução 
// de um programa. 
// Quando uma operação executa completamente antes de
// passar o controle à seguinte, a execução é síncrona. 
// Esse método é padrão de execução de código. 
// Quando uma operação é demorada, pode ser interessante 
// executá-las de maneira assíncrona, para que 
// o restante do código possa ser executado 
// sem precisar esperar que elas terminem. 
// Nesse caso, o código seguinte ao comando que 
// dispara a operação assíncrona não pode contar
// com o resultado dessa operação. ||


let poke_container = document.getElementById('poke_container'); 
const pokemons_number = 150; 


    const fetchPokemons = async ()=> {
    
        for(let i = 1; i < pokemons_number; i++){
                await getPokemon(i)
        }
    
    } 

    const getPokemon = async id => {

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`; 
    
        const res = await fetch(url); 
        const pokemon = await res.json(); 
        createPokemonCard(pokemon); 


    }
    fetchPokemons();

    function createPokemonCard(pokemon){
        const pokemonEl = document.createElement('div'); 
        pokemonEl.classList.add('pokemon'); 

        // const name = pokemon.name[0].toUpperCase() + 
        // pokemon.name.slice(1); 
        const name = pokemon.name[0].toUpperCase() + 
        pokemon.name.slice(1); 

        const pokeInnerHTML = `
            <div class="img-container"> 
                <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"
            </div>
            <div class="info"> 
                <h3 class="name">${name}</h3>
            </div> 
            
        `; 

        pokemonEl.innerHTML = pokeInnerHTML; 
        poke_container.appendChild(pokemonEl)
    }
    



// || Quando é útil programar sincronamente? 
// >>> quando uma operação é demorada 
// >>> para não bloquear a user-interface 
// **normalmente as user-interfaces processam 
// eventos. Estes mesmo eventos não devem 
// demorar muito tempo para que a user-interface possa
// continuar a processá-los 


