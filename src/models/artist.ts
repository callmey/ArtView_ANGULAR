export class Artist extends User {
    id: number;
    user_id: number;
    grouping_id: number;
    fav_district_id: number;
    major: string;
    career: string;

    constructor (id, fav_artfield_id, login_id,  pwd,  name,  phone,  email,
     age) {
        super(id, fav_artfield_id, login_id, pwd, name, phone, email, age);
     }

    public (id, fav_artfield_id, login_id,  pwd,  name,  phone,  email,
        age,  id2,  user_id,  grouping_id,  fav_district_id ,  major,  caree) {
    super(id, fav_artfield_id, login_id, pwd, name, phone, email, age);

    id = id2;
    this.user_id = user_id;
    this.grouping_id = grouping_id;
    this.fav_district_id = fav_district_id;
    this.major = major;
    this.career = career;
    }
}// 미완성