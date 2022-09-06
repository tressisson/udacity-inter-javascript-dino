    
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
            "fact0": "1-First discovered in 1889 by Othniel Charles Marsh",
            "fact1": "2-Dinosaurs liked the shade and jungles",
            "fact2": "3-Dinosaurs also lived in the ocean"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact0": "1-The largest known skull measures in at 5 feet long",
            "fact1": "2-Dinosaurs liked the shade and jungles",
            "fact2": "3-Dinosaurs also lived in the ocean"
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact0": "1-Anklyosaurus survived for approximately 135 million years",
            "fact1": "2-Dinosaurs liked the shade and jungles",
            "fact2": "3-Dinosaurs also lived in the ocean"
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact0": "1-An asteroid was named 9954 Brachiosaurus in 1991",
            "fact1": "2-Dinosaurs liked the shade and jungles",
            "fact2": "3-Dinosaurs also lived in the ocean"
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact0": "1-The Stegosaurus had between 17 and 22 seperate places and flat spines",
            "fact1": "2-Dinosaurs liked the shade and jungles",
            "fact2": "3-Dinosaurs also lived in the ocean"
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact0": "1-Elasmosaurus was a marine reptile first discovered in Kansas",
            "fact1": "2-Dinosaurs liked the shade and jungles",
            "fact2": "3-Dinosaurs also lived in the ocean"
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact0": "1-Actually a flying reptile, the Pteranodon is not a dinosaur",
            "fact1": "2-Dinosaurs liked the shade and jungles",
            "fact2": "3-Dinosaurs also lived in the ocean"
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
      constructor(species, weight, height, diet, where, when, fact0, fact1, fact2) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact0 = fact0;
        this.fact1 = fact1;
        this.fact2= fact2;
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

    // Create human from Human Class
    let newPerson;
    let human = function() {
      const name = document.getElementById('name').value;
      const feet = document.getElementById('feet').value;
      const inches = document.getElementById('inches').value;
      const weight = document.getElementById('weight').value;
      const diet = document.getElementById('diet').value.toLowerCase();
      newPerson =  new Human(name, feet, inches, weight, diet);
      return newPerson;
    }

    // Create Dino Objects using Dino Class
    let dinos;
    function makeDinos() {
        dinos = getData();
        dinos.forEach (function() {
            new Dinosaur(dinos.species, dinos.weight, dinos.height, dinos.diet, dinos.where, dinos.when, dinos.fact0, dinos.fact1, dinos.fact2)
        });
    
    // Put the person in the middle of the grid no instead of as the tiles are being generated
        dinos.splice(4, 0, newPerson);
    }


    // create the big comparison function which compares weight, height, and diet
    function comp(dinoWeight, dinoHeight, dinoDiet, humanWeight, humanFeet, humanInches, humanDiet) {
      let message;
      let message1, message2, message3;
      let height = (parseInt(humanFeet) * 12) + parseInt(humanInches);
 
      // Create Dino Compare Method 1 - Weight
      if(dinoWeight > humanWeight) {
        message1 = 'The dino weighs ' + dinoWeight + ' which is more than the human.<br/>';
      } else if(dinoWeight < humanWeight) {
        message1 = 'The dino weighs ' + dinoWeight + ' which is less than the human.<br/>';
      } else {
        message1 = 'The dino weighs ' + dinoWeight + ' which is equal to human.<br/>';
      }

      // Create Dino Compare Method 2 - Height
      if(dinoHeight > height) {
        message2 = 'The dino is ' + dinoHeight + ' inches which is taller than the human.<br/>';
      } else if (dinoHeight < height) {
        message2 = 'The dino is ' + dinoHeight + ' inches which is shorter than the human.<br/>';
      } else {
        message2 = 'The dino is ' + dinoHeight + ' inches which is equal to human.<br/>';
      }

      // Create Dino Compare Method 3 - Diet
      if(dinoDiet === humanDiet) {
        message3 = 'The dino and you are both a(n) ' + dinoDiet + '.<br/>';
      } else {
        message3 = 'The dino is an ' + dinoDiet + ' and you are an ' + humanDiet + '.<br/>';
      }

      message = message1 + '<br/>' + message2 + '<br/>' + message3;
      return message;
    }

    // Random function for choosing the "facts" for dinosaurs
    let randomFact = function() {
       return Math.floor(Math.random() * 3);
    };


    // Generate Tiles for each Dino in Array
    function grid() {
      dinos.forEach((dino, i) => {
        //get existing grid element
          const grid = document.getElementById('grid');
          const div = document.createElement('div');
          div.classList.add('grid-item');
          
          //create variables for items in the tile
          const name = document.createElement('h4');
          const image = document.createElement('img');
          const fact = document.createElement('p');
          const compare = document.createElement('p');
          const personWeight = "";
          const personHeight = "";
          const personDiet = "";

          // handle name vs species for human on name and image items
          if(i === 4){
            name.innerHTML = dino.name;
            image.setAttribute('src', `/images/human.png`); fact.innerHTML = " ";
            fact.innerHTML = " ";

          // handle image, name and fact for the bird
          } else if(i === 8) { 
            name.innerHTML = dino.species;
            image.setAttribute('src', `/images/pigeon.png`); fact.innerHTML = "All birds are Dinosaurs.";
            fact.innerHTML = 'All birds are Dinosaurs.' + '<br/>' + comp(dino.weight, dino.height, dino.diet, newPerson.weight, newPerson.feet, newPerson.inches, newPerson.diet);

          // keep going for regular dinosaurs and choose RANDOM FACT
          } else {
            name.innerHTML = dino.species;
            image.setAttribute('src', `/images/${dino.species.toLowerCase()}.png`);
            switch (randomFact()) {
              case 0:
                fact.innerHTML = dino.fact0 + '<br/>' + comp(dino.weight, dino.height, dino.diet, newPerson.weight, newPerson.feet, newPerson.inches, newPerson.diet);
                break;
              case 1:
                fact.innerHTML = dino.fact1 + '<br/>' + comp(dino.weight, dino.height, dino.diet, newPerson.weight, newPerson.feet, newPerson.inches, newPerson.diet);
                break;
                case 2:
                fact.innerHTML = dino.fact2 + '<br/>' + comp(dino.weight, dino.height, dino.diet, newPerson.weight, newPerson.feet, newPerson.inches, newPerson.diet);
                break;
            }
          }
           
          // Add tile to DOM
          div.appendChild(name);
          div.appendChild(image);
          div.appendChild(fact);
          grid.appendChild(div);
      });
  }
        

    // Remove form from screen, create the dinos, the human, do comparison, and append tiles to grid
    function changeIt() {
      human();
      makeDinos();
      grid();

      document.getElementById('dino-compare').remove();
    }

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', changeIt);