export class District {
    id: number;
    city_id: string;
    city_name: string;
    name: string;

    constructor (id, name){
        this.id = id;
        this.name = name;
    }
}