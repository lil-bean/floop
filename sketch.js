function setup() {
    createCanvas(1100, 800);
    background(16, 25, 84);
    frameRate(1);
}


function draw() {

    textSize(14);
    
//randomly chosen prepositon word   
    var prep = ['behind', 'beyond', 'outside', 'past', 'around', 'toward', 'above', 'within'];
    var choosePrep = random(prep); 
    fill(random(140, 219), 187, 211);
    text(choosePrep, 100, random(50, 750));
    textSize(14);
    
//randomly chosen place/location word
    var place = ['the apple tree,', 'the server farms,', 'the river edge,', 'the outlet mall,', 'the high school parking lot,', 'the gas station,', 'the lovers leap,', 'the pharmacy,', 'the amusement park,'];
    var choosePlace = random(place); 
    fill(random(140, 219), 187, 211);
    text(choosePlace, 400, random(50, 750)); 
    textSize(14);
    
//randomly chosen noun
    var noun = ['circuits', 'willows', 'fingers', 'empty cans', 'wires', 'monitors', 'cicadas', 'alarm clocks'];
    var chooseNoun = random(noun); 
    fill(random(140, 219), 187, 211);
    text(chooseNoun, 700, random(50, 750)); 
    textSize(14);

//randomly chosen verb
    var verb = ['hum', 'scream', 'mutter', 'buzz', 'beep', 'holler', 'flutter', 'whisper'];
    var chooseVerb = random(verb); 
    fill(random(140, 219), 187, 211);
    text(chooseVerb, 1000, random(50, 750)); 
    textSize(14);
   
//resets after 30 seconds
if(frameCount == 15) {
    createCanvas(1100, 800);
    background(16, 25, 84);
    frameRate(1);
}   
    
}

