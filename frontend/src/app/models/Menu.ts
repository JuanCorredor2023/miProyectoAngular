export class Menu {
    //constructor
    constructor(_id = "", name = "", price = "", description = "", place = "", image=""){
        //inicializa los valores del atributo
        this._id = _id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.place = place;
        this.image = image;
    }

    //atributos -  definicion
    _id:string
    name:string
    price:string
    description:string
    place:string
    image:string
}