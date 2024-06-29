/**
         * Função assíncrona para buscar e exibir informações de um Pokémon com base no ID fornecido.
         */
let pokemonId = document.getElementById("pokemon_id").value;

async function buscarPokemon() {
    try {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (APIResponse.status === 200) {
            const data = await APIResponse.json();
            exibirPokemon(data);
        } else {
            throw new Error("Pokemon not found");
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};


// -- Obter o ID do pokemon pelo Usuario -->

function exibirPokemon(pokemon) {
    // -- Exibe as informações do Pokémon na página -->
    const pokemonImagem = document.getElementById('pokemon_image');
    pokemonImagem.src = ${pokemon.sprites.front_default};
    
    document.getElementById('pokemon_nome').innerText = `Nome: ${pokemon.name}`;
    document.getElementById('pokemon_tipos').innerText = `Tipos: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
    document.getElementById('pokemon_peso').innerText = `Peso: ${pokemon.weight} kg`;
    document.getElementById('pokemon_altura').innerText = `Altura: ${pokemon.height} m`;

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



// -- Ação para verificar o ID, se é ou não compativel -->


// -- Procurando na API -->



// -- Exibe as informações do Pokémon na página -->


// -- Reproduz o som do Pokémon, se não for encotrado será avisado. -->





// -- Musica de fundo. -->
let musicaFundo = true;


