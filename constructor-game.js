function Character(options) {
    var options = options || {};
    this.name = options.name || "Trainer";
    this.health = options.health || 1000;
    this.pokemon = new Pokemon({
        name: "pikachu",
        damage: 50
    });
    this.equip = function(pokemon) {
        this.pokemon = pokemon;
    };
    this.attack = function(enemy) {
        var random = Math.floor(Math.random() * 2);
        if (random < 6) {
            enemy.health = enemy.health - this.pokemon.damage;
            $("h1")
                .html("keep going!!  " + enemy.name +
                    ", your pokemons health is at " + enemy.health);
            if (enemy.health <= 0) {
                enemy.health = 0;
                //document.html("<h1>'your pokemon has fainted' + enemy.name</h1>");
                $("h1")
                    .html(
                        "<h1>'your pokemon has fainted' + enemy.name</h1>"
                    );
            }
        }
        else {
            //  document.html("<h1>'has evaded the attack! ' + enemy.name</h1>");
            $("h1")
                .html("<h1>'has evaded the attack! ' + enemy.name</h1>");
        }
    };
}

function Pokemon(options) {
    this.name = options.name || "Pokemon";
    this.damage = options.damage;
}

function Potion() {
    this.potion = enemy.health + 25;
}
var juan = new Character({
    name: "juan"
});
var maxy = new Character({
    name: "maxy"
});
var joshua = new Character({
    name: "joshua"
});
var sally = new Character({
    name: "sally"
});
var lauren = new Character({
    name: "lauren"
});
var blake = new Character({
    name: 'Boss'
});
var aerodactyle = new Pokemon({
    damage: 50,
    name: "aerodactyle",
    health: 150
});
var aerodactyle2 = new Pokemon({
    damage: 26,
    name: "aerodactyle2",
    health: 150
});
var charzard = new Pokemon({
    damage: 30,
    name: "charzard",
    health: 150
});
var zubat = new Pokemon({
    damage: 28,
    name: "zubat",
    health: 150
});
var mewtwo = new Pokemon({
    damage: 101,
    name: "mewtwo",
    health: 150
});
var mew = new Pokemon({
    damage: 101,
    name: "mew",
    health: 150
});
var evee = new Pokemon({
    damage: 26,
    name: "evee",
    health: 150
});
var unknown = new Pokemon({
    damage: 34,
    name: "unknown",
    health: 150
});
////////////////// attack on click /////////////////////////////////////
$('.attack2')
    .on('click', 'this.attack')
    /////////////////// on click pick pokemon //////////////////////////////
$('body').on('click', '.lugia-b', function() {
$('.player1').html('<img src = "lugia.gif">');
    });
$('body').on('click', '.aerodactyle-b', function() {
$('.player1').html('<img src = "aerodactyle-b.gif">');
    });
$('body').on('click', '.charzard-b', function() {
$('.player1').html('<img src = "charzard-b.gif">');
    });
$('body').on('click', '.giratina-b', function() {
$('.player1').html('<img src = "giratina-b.gif">');
    });
$('body').on('click', '.megamewtwo-b', function() {
$('.player1').html('<img src = "megamewtwo-b.gif">');
    });
$('body').on('click', '.mew22-b', function() {
$('.player1').html('<img src = "mew22-b.gif">');
    });
///////////////////////  player2 left side ///////////////////////////////////////////////
$('body').on('click', '.aerodactyle-f', function() {
$('.player2').html('<img src = "aerodactyle-f.gif">');
    });
$('body').on('click', '.aggron-f', function() {
$('.player2').html('<img src = "aggron-f.gif">');
    });
$('body').on('click', '.alakazam-f', function() {
$('.player2').html('<img src = "alakazam-f.gif">');
    });
$('body').on('click', '.monkey-f', function() {
$('.player2').html('<img src = "monkey-f.gif">');
    });
$('body').on('click', '.gyardos-f', function() {
$('.player2').html('<img src = "gyardos-f.gif">');
    });
$('body').on('click', '.mew2-f', function() {
$('.player2').html('<img src = "mew2-f.gif">');
    });

$(".attack1").click(function() {
$(".player1").animate({'margin-left': '50%', 'margin-top' : ' 3%', 'margin-top': '-3%',
            });

setTimeout(function () {
  $(".player1").animate({'margin-left': '20%'
                          });
}, 1500);
    });
   $(".attack2").click(function(){
     $(".player2").animate({'margin-right': '50%'});
 });
