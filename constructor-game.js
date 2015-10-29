



function Character(options) {
  var options = options || {};
  this.name = options.name || "A. Trainer";
  this.health = options.health || 1000;
  this.pokemon = new Pokemon({name: "pikachu", damage: 50});
  this.equip = function (pokemon) {
    this.pokemon = pokemon;
  };
  this.attack = function (enemy) {
    var random = Math.floor(Math.random() * 10);
    if(random < 6) {
      enemy.health = enemy.health - this.pokemon.damage;
      console.log("keep going  " + enemy.name + ", your pokemons health is at " + enemy.health);
      if(enemy.health <= 0) {
        enemy.health = 0;
        console.log("your pokemon has fainted" + enemy.name);
      }

  } else {
    console.log(pokemon +"has evaded the attack! " + enemy.name);
  }
  };


}

function Pokemon(options) {
  this.name = options.name || "Pokemon";
  this.damage = options.damage;

}

function Battle() {

}
var juan = new Character({name: "juan"});
var maxy = new Character({name: "maxy"});
var joshua = new Character({name: "joshua"});
var sally = new Character({name: "sally"});
var sarah = new Character({name: "sarah"});





var pikachu = new Pokemon({damage: 50, name: "pikachu", health: 150});
var ditto = new Pokemon({damage: 26, name: "ditto", health: 150});
var squirtle = new Pokemon({damage: 30, name: "squirtle", health: 150});
var zubat = new Pokemon({damage: 28, name: "zubat", health: 150});
var mewtwo = new Pokemon({damage: 101, name: "mewtwo", health: 150});
var mew = new Pokemon({damage: 101, name: "mew", health: 150});
var evee = new Pokemon({damage: 26, name: "evee", health: 150});
var unknown = new Pokemon({damage: 34, name: "unknown", health: 150});
