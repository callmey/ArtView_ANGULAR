export class User {
    id: number;
    fav_district_id: number;
    login_id: string;
    pwd: string;
    name: string;
    phone: string;
    email: string;
    age: number;
    userType: userType;

    constructor (id, fav_artfield_id, login_id, pwd, name, phone, email,
        int age){
            
            this.id = id;
            this.fav_artfield_id = fav_artfield_id;
            this.login_id = login_id;
            this.pwd = pwd;
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.age = age;
            this.userType =UserType.NORMAL;;
    }
}