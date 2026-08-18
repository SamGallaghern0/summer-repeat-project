const games = [ /*i asked ai to help when it came to getting game information so some of it may be wrong*/
    {
        name: "Minecraft",
        price: "$30.00",
        image: "images/minecraft.webp"
    },
    {
        name: "Fortnite",
        price: "$20.00",
        image: "images/fortnite.webp"
    },
    {
        name: "FIFA 26",
        price: "$50.00",
        image: "images/fifa.webp"
    },
    {
        name: "Grand Theft Auto V",
        price: "$40.00",
        image: "images/gta5.webp"
    },
    {
        name: "Red Dead Redemption 2",
        price: "$45.00",
        image: "images/rdr2.webp"
    },
    {
        name: "Call of Duty",
        price: "$60.00",
        image: "images/cod.webp"
    },
    {
        name: "Rocket League",
        price: "$25.00",
        image: "images/rocketleague.webp"
    },
    {
        name: "The Sims 4",
        price: "$35.00",
        image: "images/sims4.webp"
    },
    {
        name: "Forza Horizon 5",
        price: "$50.00",
        image: "images/forza.webp"
    },
    {
        name: "Cyberpunk 2077",
        price: "$45.00",
        image: "images/cyberpunk.webp"
    },
    {
        name: "The Witcher 3",
        price: "$30.00",
        image: "images/witcher3.webp"
    },
    {
        name: "Elden Ring",
        price: "$55.00",
        image: "images/eldenring.webp"
    },
    {
        name: "Hogwarts Legacy",
        price: "$50.00",
        image: "images/hogwarts.webp"
    },
    {
        name: "Spider-Man 2",
        price: "$60.00",
        image: "images/spiderman2.webp"
    },
    {
        name: "God of War",
        price: "$45.00",
        image: "images/godofwar.webp"
    },
    {
        name: "The Last of Us",
        price: "$50.00",
        image: "images/thelastofus.webp"
    },
    {
        name: "Mario Kart 8",
        price: "$40.00",
        image: "images/mariokart.webp"
    },
    {
        name: "Super Mario Odyssey",
        price: "$45.00",
        image: "images/marioodyssey.webp"
    },
    {
        name: "Animal Crossing",
        price: "$40.00",
        image: "images/animalcrossing.webp"
    },
    {
        name: "Pokémon Scarlet",
        price: "$50.00",
        image: "images/pokemon.webp"
    },
    {
        name: "Halo Infinite",
        price: "$45.00",
        image: "images/halo.jpg"
    },
    {
        name: "Overwatch",
        price: "$25.00",
        image: "images/overwatch.webp"
    },
    {
        name: "Assassin's Creed",
        price: "$40.00",
        image: "images/assassinscreed.webp"
    },
    {
        name: "Far Cry 5",
        price: "$35.00",
        image: "images/farcry.webp"
    },
    {
        name: "Resident Evil 4",
        price: "$50.00",
        image: "images/residentevil.webp"
    },
    {
        name: "Street Fighter 6",
        price: "$45.00",
        image: "images/streetfighter.jpg"
    },
    {
        name: "Tekken 8",
        price: "$55.00",
        image: "images/tekken.webp"
    },
    {
        name: "Star Wars Jedi survivor",
        price: "$45.00",
        image: "images/starwars.webp"
    },
    {
        name: "Fallout 4",
        price: "$30.00",
        image: "images/fallout.webp"
    },
    {
        name: "Terraria",
        price: "$20.00",
        image: "images/terraria.webp"
    }
];

const titles = [
    {
        text: "Popular"
    },
    {
        text: "Recommended"
    },
    {
        text: "Newest"
    },
    {
        text: "Loved by the community"
    },
    {
        text: "Our favourites"
    },
];

const offerboxes = document.getElementById("offerboxes");
const titletext = document.getElementById("titletext");

games.forEach(function(game, index) { /* the location of the offerboxes code used in html along with the titles*/

    if (index % 5 === 0) {
        const titleIndex = index / 5;

        offerboxes.innerHTML += `
            <div class="col-12">
                <h2 class="section-title">${titles[titleIndex].text}</h2>
            </div>
        `;
    }

    offerboxes.innerHTML += `
        <div class="game-card">
            <div class="offerbox">
                <div class="boxtop">
                    <img src="${game.image}">
                </div>

                <div class="boxbottom">
                    <p class="cardfont cardfont1">${game.name}</p>
                    <p class="cardfont cardfont2">${game.price}</p>

                    <button class="bg-primary">
                        <i class="fa-solid fa-basket-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

});