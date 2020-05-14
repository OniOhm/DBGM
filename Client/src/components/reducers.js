

export function formReducer(state, action) {
    // Create a copy of the form state object and use a switch statement to make changes to the new form
    let newForm = { ...state };
    switch (action.type) {
        case "NAME_CHANGE":
            newForm.name = action.data;
            return newForm;
            break;
        case "NOTE_CHANGE":
            newForm.authorsNote = action.data;
            return newForm;

        case "LORE_CHANGE":
            newForm.lore = action.data;
            return newForm;

        case "DESCRIPT_CHANGE":
            // get rid of newline condition
            if(action.key == 13){
                newForm.description = action.data+'\n';
            }else{
                newForm.description = action.data;
            }
            return newForm;
        case "COST_CHANGE":
            newForm.cost = action.data;
            return newForm
        case "TYPE_CHANGE":
            newForm.type = action.data;
            return newForm;
        // Will clean up and save card preferences into a new Card
        case "PIC_CHANGE":
            newForm.cardPic = action.data;
            return newForm;
        case "ORIAN_CHANGE":
            newForm.oriantation = action.data;
            return newForm;
        case "COLOR_CHANGE":
            if(action.component == "card"){
                newForm.backgroundColor = action.data;
                return newForm;
            }else if(action.component == 'box'){
                newForm.boxColor = action.data;
                return newForm; 
            }else if(action.component == 'text'){
                newForm.textColor = action.data;
                return newForm;
            }else if(action.component == 'border'){
                newForm.borderColor = action.data;
                return newForm;
            }
            return newForm;
        case "RESET_DESIGN":
            return state;
        case "DISPLAY_CARD":
            console.log(action.data);
            newForm = action.data;
            return newForm;
        case "EMBLEM_CHANGE":
            newForm.cardEmblem = action.data;
            return newForm
        default:
            return state;
    }
}

export function dockReducer(state,action){
    let newDockState = {...state};
    switch(action.type){
        case "ADD_TO_DECKDOCK":
        //  the reducer's state variable can be passed from the carddock component as an action addon.
            newDockState.createdDeck.push(action.data);
            return newDockState;
        case "TOGGLE_FORM_VIEW":
        // changes the form tab view
            action.data ? newDockState.sideBoxView = false: newDockState.sideBoxView = true;
            return newDockState;
        case "COLOR_COMP_CHANGE":
            newDockState.colorComp = action.data;
            return newDockState;
        default:
            return state;
    }
}