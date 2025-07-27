({
    getWords : function(count) {

        if(count>100) return;

        let wordsArray=[
           "expansion",
            "grandfather",
            "nappy",
            "oranges",
            "beds",
            "quack",
            "achiever",
            "yell",
            "hospital",
            "winter",
            "understood",
            "squalid",
            "merciful",
            "reaction",
            "wipe",
            "fearless",
            "tiresome",
            "introduce",
            "planes",
            "drum",
            "muddle",
            "capable",
            "canvas",
            "route",
            "enchanted",
            "quirky",
            "switch",
            "apparatus",
            "loss",
            "agreement",
            "substance",
            "back",
            "oafish",
            "expand",
            "aromatic",
            "quarrelsome",
            "free",
            "useful",
            "raspy",
            "drown",
            "ring",
            "lush",
            "numberless",
            "embarrass",
            "shrill",
            "rice",
            "ice",
            "crow",
            "pumped",
            "sparkle",
            "instruct",
            "girl",
            "glass",
            "frog",
            "murky",
            "impolite",
            "crabby",
            "pin",
            "grade",
            "upbeat",
            "linen",
            "flaky",
            "side",
            "unknown",
            "cactus",
            "round",
            "busy",
            "grab",
            "crush",
            "faithful",
            "mother",
            "clean",
            "unhealthy",
            "event",
            "absent",
            "thoughtless",
            "icy",
            "prefer",
            "charge",
            "confuse",
            "clam",
            "dress",
            "snake",
            "evasive",
            "unit",
            "flow",
            "annoying",
            "gusty",
            "possessive",
            "rhetorical",
            "rule",
            "frantic",
            "farm",
            "poor",
            "possess",
            "men",
            "pleasant",
            "zoom",
            "sidewalk",
            "reply"


        ];
  //randomize the words array
wordsArray=this.randomizeArray(wordsArray);

//open=false property
const wordObjArray = wordsArray.map((element) => {
    return {word : element, open: false};
});

        //return only requested words 
        return wordObjArray.slice(0, count);

    },

    randomizeArray : function(array) {
        const randomArray=array;
        for(let i=randomArray.length-1; i>0; i--) {
            const j=Math.floor(Math.random()*i);
            const temp=randomArray[i];
            randomArray[i]=randomArray[j];
            randomArray[j]=temp;
}
return randomArray;
    },

    getWinWord: function(arr){
        const randomIndex=Math.floor(Math.random()*arr.length);
        return arr[randomIndex].word;
    },

    disableBoard: function(component) {
        component.set("v.boardDisabled", true);
    },

     enableBoard: function(component) {
        component.set("v.boardDisabled", false);
    },

    resetBoard: function(component) {
        this.enableBoard(component);
        component.set("v.clickCount", 0);
        component.set("v.result", "");
    },

    fireResultEvent: function(resultValue) {
        const appevent = $A.get("e.c:ResultApplicationEvent");
        appevent.setParams({ result: resultValue});
        appevent.fire();
    } 

});