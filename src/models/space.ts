import { City } from '../models/city';
import { Provider } from '../models/provider';

export class Space{

    id : number;
    name : string;
    city_id : number;
    provider_id : number;
    cost : number;
    unavailable : Date;
    equipment :string;
    address :string;
    city : City;
    provider : Provider;
}