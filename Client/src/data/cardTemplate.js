export class Card {
    constructor(name, cost, description, lore, authorsNote, type, id, user, background, cardPic,oriantation,backgroundColor,textColor,boxColor,borderColor) {
        this.name = name;
        this.cost = cost;
        this.type = type;
        this.description = description;
        this.id = id;
        this.lore = lore;
        this.authorsNote = authorsNote;
        this.user = user;
        this.background = background;
        this.cardPic = cardPic;
        this.oriantation = oriantation;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.boxColor = boxColor;
        this.borderColor =borderColor;
    }
}
export let defaultCard = new Card("New Effect",
"New Card",
"new Cost",
"New Type",
"New Lore",
"card-portrait",
"grey",
"white",
"black");