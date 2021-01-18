function showPokemon() {
    var pokemon = document.getElementById("pokemon");
    var pokemonName = pokemon.value;
    
    var img = document.getElementById("pokemonImg");

    if(pokemonName === "Charmeleon") {
        img.src = "./../pictures/charmeleon.jpg";
    }
    
    if(pokemonName === "Charizard") {
        img.src = "./../pictures/charizad.jpg";
    }
    
   if(pokemonName === "Charmander") {
       img.src = "./../pictures/charmander.jpg";
   }
}