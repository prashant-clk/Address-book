var model ={
    user : "prashant",
    details : [
        {name : "prashant",phno : "578587",email : "ffuiw.gmail.com",address : "venkatapuram"},
        {name : "prashant",phno : "103212",email : "savclk.gmail.com",address : "addanki"},
        {name : "rajesh",phno : "43905",email : "435894.gmail.com",address : "repalle"}
    ]
}

export class Model{
    user;
    details;
    constructor(){
        this.user = "prashant";
        this.details = [
            new person("prashant","23894","28u438.gmail.com","something"),
            new person("rajesh","23894","28u438.prop.com","something"),
            new person("prashant","23894","46bcgj.gmail.com","eww"),
        ]
    }
}
export class person{
    name;
    phno;
    email;
    address;
    constructor(name:string,phno:string,email:string,address:string){
        this.phno  = phno;
        this.name = name;
        this.address  =address;
        this.email= email;
    }
}