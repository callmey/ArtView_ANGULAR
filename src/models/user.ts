export class User {
    id: number;
    login_id: string;
    pwd: string;
    name: string;
    phone: string;
    email: string;
    age: number;
    userType: number;

    constructor (id, login_id, pwd, name, phone, email, age, userType){
            
            this.id = id;
            this.login_id = login_id;
            this.pwd = pwd;
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.age = age;
            this.userType = userType;
    }
}