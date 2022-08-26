    
    // Get initial dataset
    function getData() {
      const dinosaurs =  [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
      return dinosaurs;
    }


    // Create Dino Constructor
    class Dinosaur {
      constructor(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
      }
    }

    // Create Human Constructor
    class Human {
      constructor(name, feet, inches, weight, diet) {
        this.name = name;
        this.feet = feet;
        this.inches = inches;
        this.weight = weight;
        this.diet = diet;
      }
    }


    // Create Dino Objects
    let dinos;
    let human;
    function makeDinos() {
        dinos = getData();
        dinos.forEach (function() {
            new Dinosaur(dinos.species, dinos.weight, dinos.height, dinos.diet, dinos.where, dinos.when, dinos.fact)
        });
    
    // Create human (required to be an IIFE)
        human = (function () {
            const name = document.getElementById('name').value;
            const feet = document.getElementById('feet').value;
            const inches = document.getElementById('inches').value;
            const weight = document.getElementById('weight').value;
            const diet = document.getElementById('diet').value.toLowerCase();
            return new Human(name, weight, diet);
        })();
    
    // Put the person in the middle of the grid no instead of as the tiles are being generated
        dinos.splice(4, 0, human);
        console.log(dinos);
    }

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
    function grid() {
      dinos.forEach((dino, i) => {
        //get existing grid element
          const grid = document.getElementById('grid');
          const div = document.createElement('div');
          div.classList.add('grid-item');
          
          //build the info for the tile and put it in div
          const name = document.createElement('h4');
          
          
          const image = document.createElement('img');
          const fact = document.createElement('p');

          // handle name vs species for human on name and image items
          if(i === 4){
            name.innerHTML = dino.name;
            image.setAttribute('src', `/images/human.png`); fact.innerHTML = " ";
            fact.innerHTML = " ";

          // handle image, name and fact for the bird
          } else if(i === 8) { 
            name.innerHTML = dino.species;
            image.setAttribute('src', `/images/pigeon.png`); fact.innerHTML = "All birds are Dinosaurs.";
            fact.innerHTML = "All birds are Dinosaurs.";

          // keep going for regular dinosaurs
          } else {
            name.innerHTML = dino.species;
            image.setAttribute('src', `/images/${dino.species.toLowerCase()}.png`);
            fact.innerHTML = dino.fact;
            //fact.innerHTML = comparison(dino.species, human.species, dino.weight, human.weight, dino.diet, human.diet);
          }
            
            //fact.innerHTML = comparison(dino.species, human.species, dino.weight, human.weight, dino.diet, human.diet);
          
          
          // change image and fact for human and bird
          //if (i === 4) { image.setAttribute('src', `/images/human.png`); fact.innerHTML = " "; }
          //if (i === 8) { image.setAttribute('src', `/images/pigeon.png`); fact.innerHTML = "All birds are Dinosaurs."; } 
          
          // Add tile to DOM
          div.appendChild(name);
          div.appendChild(image);
          div.appendChild(fact);
          grid.appendChild(div);
      });
  }
        

    // Remove form from screen, create the dinos, the human, and append tiles to grid
    function changeIt() {
      makeDinos();
      grid();
    }

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', changeIt);