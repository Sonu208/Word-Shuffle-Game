({
    startGame : function(component, event, helper) {

        //access combobox
        let gameModeCombobox=component.find("gameMode");

        //access combobox value
        let gameModeValue=gameModeCombobox.get("v.value");

        const selectedGameMode = component.get("v.SelectedGameMode");

        //Set
        component.set("v.SelectedGameMode", gameModeValue);

    console.log("The Start Game button is clicked. the game mode is: " + gameModeValue);

    console.log("The Selected Game Mode is: " + component.get("v.SelectedGameMode"));

    if(selectedGameMode){
        const boardComp= component.find("boardComp");
        //call aura method
        boardComp.startGame();
    }
    },

    reshuffleBoard : function(component, event, helper) {
    const boardComp= component.find("boardComp");
    boardComp.reshuffleBoard();
    component.set("v.reshuffleDisabled", true);
    },

    onResultHandler : function(component, event, helper) {
        const result= event.getParam("result");
        if(result==='win'){
            component.set("v.reshuffleDisabled", true);
            helper.showToast("WINNER WINNER CHICKEN DINNER", "Hooray!!", "success");
           
        }
        else{
            component.set("v.reshuffleDisabled", false);
            helper.showToast("OHH! YOU LOSE", "Reshuffle the board to continue", "error");
        }
         helper.addResultRecord(component, result);

    }


});