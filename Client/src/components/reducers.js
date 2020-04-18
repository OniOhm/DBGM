
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

        default:
            return state;

    }
}
export function canvasReducer(state, action) {
    let newCanvas = { ...state };
    switch (action.type) {
        case "TO_PORTRAIT":
            newCanvas.width = 275;
            newCanvas.height = 375;
            newCanvas.paddingWidth = 5;
            newCanvas.paddingHieght = 6;

            return newCanvas;
        case "TO_LANDSCAPE":
            newCanvas.height = 275;
            newCanvas.width = 400;
            newCanvas.paddingWidth = 5;
            newCanvas.paddingHieght = 6;
            return newCanvas;

        case "COMMIT_COLOR":
            console.log(action);
            // action type recieves color and focus attributes from the action object
            if (action.focus == "CARD") {
                newCanvas.canvasColor = action.color;
                return newCanvas;
            } else if (action.focus == "TEXTBOX") {
                newCanvas.canvasTextBox = action.color;
                return newCanvas;
            } else if (action.focus == "TEXT") {
                newCanvas.canvasTextColor = action.color;
                return newCanvas;
            }
        default:
            return newCanvas;
    }
}