async function atraparPokemon(num) {
    // Obtener un Pokemon de manera aleatoria (fetch)
    const id = Math.trunc((Math.random() + 0.05) * 20)
    const datoPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await datoPokemon.json()
    // Obten su imágen correspondiente
    const imagen = pokemon.sprites.front_default
    const imagen2 = pokemon.sprites.back_default
    // Obtener nombre del Pokémon
    const nombre = pokemon.name
    // Dibujar nombre e imágen del Pokémon en el DOM
    const div = document.getElementById("pokemon" + num)
    if (num === 1) {
        const pintarNombre = document.createElement("h1")
        div.appendChild(pintarNombre)
        pintarNombre.innerHTML = `Nombre del pokemon : ${nombre}`
    }
    if (num === 1) {
        const pintarImagen2 = document.createElement("img")
        div.appendChild(pintarImagen2)
        pintarImagen2.src = "./styles/pokeball.png"
        pintarImagen2.setAttribute("class","pokeball")
        const pintarImagen = document.createElement("img")
        div.appendChild(pintarImagen)
        pintarImagen.src = imagen
    }
    if (num === 2) {
        const pintarImagen = document.createElement("img")
        div.appendChild(pintarImagen)
        pintarImagen.src = imagen2
    }
    if (num === 1) {
        const pokemonVsPerrito = document.createElement("h1")
        div.appendChild(pokemonVsPerrito)
        pokemonVsPerrito.innerHTML = "Batalla pokemon vs Perrito"
    }
}
atraparPokemon(1)
atraparPokemon(2)
async function adoptarPerrito(num) {
    const datoPerro = await fetch('https://dog.ceo/api/breeds/image/random');
    const perro = await datoPerro.json()
    const imagenPerro = perro.message
    //pintar la imagen del perro
    const div = document.getElementById("pokemon" + num)
    const pintarImagenPerro = document.createElement("img")
    div.appendChild(pintarImagenPerro)
    pintarImagenPerro.src = imagenPerro
}
adoptarPerrito(2)