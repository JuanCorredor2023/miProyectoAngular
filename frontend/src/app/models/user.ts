export class User {
    //constructor
    constructor(_id = "", name = "", lastName = "", username = "", email = "", phone = "", password = "", file = ""){
        //inicializa los valores del atributo
        this._id = _id;
        this.name = name;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.file = file;
        
    }

    //atributos -  definicion
    _id:string
    name:string
    lastName:string
    username:string
    email:string
    phone:string
    password:string
    file:string
}