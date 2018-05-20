export class Artist  {
    id: number;
    user_id: number;
    grouping_id: number;
    fav_district_id: number;
    major: string;
    career: string;

    constructor (id,  user_id,  grouping_id,  fav_district_id ,  major,  career) {

    this.id = id;
    this.user_id = user_id;
    this.grouping_id = grouping_id;
    this.fav_district_id = fav_district_id;
    this.major = major;
    this.career = career;
    }
}