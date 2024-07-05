/**
         * Função assíncrona para buscar e exibir informações de um Pokémon com base no ID fornecido.
         */
let pokemonId = 1;
const pokemonImagem = document.getElementById('pokemon_image');
const pokemonInput = document.getElementById('pokemon_id');
const btnPesquisar = document.getElementById('bsearch');
const btnNext = document.getElementById('bnext');
const ball = document.getElementById('pokemon_image');
let tipo = document.getElementById('pokemon_tipos');
let peso = document.getElementById('pokemon_pesos');
let altura = document.getElementById('pokemon_altura');
let name = document.getElementById('pokemon_nome');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://ex.traction.one/pokedex/pokemon${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
};


// -- Obter o ID do pokemon pelo Usuario -->
async function exibirPokemon(pokemon) {

    const data = await fetchPokemon(pokemon)
    if (data) {
        pokemonImagem.style.display = "block";
        pokemonImagem.src = data.sprites.front_default;
        pokemonId = data.id;
         // -- Exibe as informações do Pokémon na página -->
    name = `Nome: ${data.forms.url}`;
    tipo = `Tipos: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
    peso = `Peso: ${pokemon.weight} kg`;
    altura = `Altura: ${pokemon.height} m`;
    console.log("Teste: " + name);

    if (pokemon.cries && pokemon.cries.latest) {
        const pokemonSom = document.getElementById('pokemon_som');
        pokemonSom.src = pokemon.cries.latest;
        pokemonSom.play();
    } else if (pokemon.cries && pokemon.cries.legacy) {
        const pokemonSom = document.getElementById('pokemon_som');
        pokemonSom.src = pokemon.cries.legacy;
        pokemonSom.play();
    } else {
        console.log('Não encontrado.');
    }

    }
    else {
        pokemonImagem.style.display = "none";
    }
   

    
}



// -- Ação para verificar o ID, se é ou não compativel -->


// -- Procurando na API -->



// -- Exibe as informações do Pokémon na página -->


// -- Reproduz o som do Pokémon, se não for encotrado será avisado. -->





// -- Musica de fundo. -->
let musicaFundo = true;


btnPesquisar.addEventListener('click', (event) => {
    event.preventDefault();
    if (pokemonInput.value === "") {
        ball;
        return 
    }
    exibirPokemon(pokemonInput.value.toLowerCase());
});



btnNext.addEventListener('click', (event) => {
    event.preventDefault();
    if (pokemonId < 1025) {
        pokemonId += 1;
        exibirPokemon(pokemonId);
    }
});

exibirPokemon(pokemonId)