import { City } from '../models/city';
import { User } from '../models/user';
export class Space{

    id : number;
    name : string;
    city_id : number;
    provider_id : number;
    cost : number;
    unavailable : Date;
    equipment :string;
    address :string;
    city_name : string;
    login_id : string;


}