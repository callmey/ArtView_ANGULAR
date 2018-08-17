export class Artist  {
    id: number;
    user_id: number;
    grouping_id: number;
    fav_city_id: number;
    fav_district_id: number;
    major: number;

    constructor (id,  user_id,  grouping_id,  fav_city_id, fav_district_id ,  major) {

    this.id = id;
    this.user_id = user_id;
    this.grouping_id = grouping_id;
    this.fav_city_id = fav_city_id;
    this.fav_district_id = fav_district_id;
    this.major = major;
    }
}