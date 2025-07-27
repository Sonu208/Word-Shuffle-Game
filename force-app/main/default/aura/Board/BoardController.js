({
    doInit : function(component, event, helper) {
    console.log("The Board component is initialized");

    const gameMode=component.get("v.mode");
    let column=0;

    //get number of columns based on game mode
    if(gameMode && gameMode==="hard") {
        column=6;
    } else if(gameMode==="medium") {
        column=4;
    } else {
        column=3;
    }

    //get the block width/size
    let blockSize=12/column;
    component.set("v.blockSize", blockSize);

//built a list of words
    const words=helper.getWords(column*column);
    component.set("v.words", words);

    console.log("Words:" + words);
//get win word
 const winWord = helper.getWinWord(words);
        component.set("v.winWord", winWord);

        //reset the board
        helper.resetBoard(component);
    },

     doRender : function(component, event, helper) {
    console.log("The Render component is initialized");
    },

    blockClickHandler : function(component, event, helper) {

        let clickCount = component.get("v.clickCount") +1;
        //get event value
        const value = event.getParam("value");
 if(value === component.get("v.winWord")) {
    component.set("v.result", "YOU WIN!");
    component.set("v.resultClass", "win");
    helper.disableBoard(component);
    helper.fireResultEvent( "win");
 }
 else if(clickCount === 3){
    component.set("v.result", " YOU LOSE! ");
     component.set("v.resultClass", "lose");
        helper.disableBoard(component);
            helper.fireResultEvent( "lose");

 }
//set click count
component.set("v.clickCount", clickCount);
        
},

    reshuffleBoard : function(component, event, helper) {
        const words = component.get("v.words");
        const randomizedWords = helper.randomizeArray(words);
        component.set("v.words", randomizedWords);
        helper.resetBoard(component);
    }

});