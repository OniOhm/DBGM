export default class card {
    constructor(name, cost, description, lore, authorsNote, type, id, user, background, cardPic) {
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
    }
}