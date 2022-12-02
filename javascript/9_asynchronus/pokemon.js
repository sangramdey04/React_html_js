const poke_container = document.getElementById('poke_container');

const poke_num=150;


const fetchPoke= async()=>{
    for(let i =1;i<poke_num;i++){
        await getPoke(i);
    }
}
const getPoke= async id=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(url);
    const pokemon = await result.json();
 
    createPokeCard(pokemon);

}
fetchPoke();

function  createPokeCard(pokemon) {
    const poke_ele = document.createElement('div');
    poke_ele.classList.add('pokemon');
    const weight=pokemon.weight;
     const poke_ability=pokemon.abilities.map(ele=>ele.ability.name);
    //  console.log(poke_ability);
    const poke_type= pokemon.types.map(ele=>ele.type.name);
    const name = pokemon.name[0].toUpperCase()+pokemon.name.slice(1); 
    const pokeInnerHtml = `
        
    <div class="img_container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png">

     </div>
     <div class="info">
     <span class="number">${pokemon.id}</span>
    <h3 class="name">${name}</h3>
     <small class="type">Type: <span>${poke_type}</span></small>
    <br> <small class="weight"> Weight: <span>${weight}</span></small>
    <br> <small class="ability"> Ability: <span>${poke_ability}</span></small>
 </div>
`;

    poke_ele.innerHTML=pokeInnerHtml;
    poke_container.appendChild(poke_ele);
}
 