
import def from '../Pub/SVG/def.png';
import attack from '../assets/1x/Attack.png';

export function formReducer(state, action) {
    const cardDefault= {
        description : "New Effect",
        name : "New Card",
        cost : "new Cost",
        type : "New Type",
        lore : "New Lore",
        oriantation : "card-portrait",
        cardPic : def,
        backgroundColor : 'grey',
        boxColor : 'white',
        textColor : 'black',
        cardEmblem : attack,
        
    };
    // Create a copy of the form state object and use a switch statement to make changes to the new form
    let newForm = { ...state };
    switch (action.type) {
        case "NAME_CHANGE":
            newForm.name = action.data;
            console.log("NAME_CHANGE EVENT CALLED")
            return newForm;
            
            break;
        case "NOTE_CHANGE":
            newForm.authorsNote = action.data;
            return newForm;

        case "LORE_CHANGE":
            newForm.lore = action.data;
            return newForm;

        case "DESCRIPT_CHANGE":
            newForm.description = action.data;
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
        case "CARDTYPE_CHANGE":
            if(action.data =='card-portrait'){
                newForm.cardSwitch = true;
                newForm.oriantation = 'card-portrait'; 
                return newForm; 
            }else if(action.data == 'card-landscape'){
                newForm.cardSwitch = true;
                newForm.oriantation = 'card-landscape';
                return newForm;
            }else if(action.data == 'card-info-portrait'){
                newForm.cardSwitch = false;
                newForm.oriantation = 'card-portrait';
                return newForm;
            }else if(action.data == 'card-info-landscape'){
                newForm.cardSwitch = false;
                newForm.oriantation = 'card-landscape';
                return newForm;
            }
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
            newForm = cardDefault;
            return newForm;
        case "DISPLAY_CARD":
            console.log(action.data);
            newForm = action.data;
            return newForm;
        case "EMBLEM_CHANGE":
            newForm.cardEmblem = action.data;
            return newForm;
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