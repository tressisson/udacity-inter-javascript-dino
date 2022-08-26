    // Get initial dataset
    function getData() {

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

    // Create Dino Objects


/*
    let dinoInfo;
    
  fetch("dino.json").then((response) => {
    return response.json();
  }).then((data) => {
    data.Dinos.forEach((dino) => {
      let newDino = new Dinosaur(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact);
      dinoInfo.push(newDino);
    });
  });

  (function() {
    console.log(dinoInfo[0].diet);
  })();
  */
  //console.log(dinoInfo[0].species);
  
    /*()
   (function() {
    fetch("dino.json").then(response => { 
      return response.json(); 
    }).then(function(data){
      for(let i=0; i<data.Dinos.length; i++) {
      d[i] = new Dinosaur(data.Dinos[i].species, data.Dinos[i].weight, data.Dinos[i].height, data.Dinos[i].diet, data.Dinos[i].where, data.Dinos[i].when, data.Dinos[i].fact)
    dinoInfo.push(d[i]);
    }  
    console.log(dinoInfo[0].species); 
      })
      
      })(); 
      //console.log(Dinosaur1);
      //console.log(dinoInfo);
      //console.log(dinoInfo.length);
      console.log(dinoInfo);
*/

    // Create Human Object
    let human = {};

    // Use IIFE to get human data from form
    (function getHuman() {
      human.name = document.getElementById('name').value;
      human.feet = document.getElementById('feet').value;
      human.inches = document.getElementById('inches').value;
      human.weight = document.getElementById('weight').value;
      human.diet = document.getElementById('diet').value;
      console.log(human);
    })();

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
 
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
