export class Item {
    title: string;
    link: string;
    image: string;
    price: number;

    constructor (title, link, image, price){
        this.title = title;
        this.link = link;
        this.image = image;
        this.price = price;
    }
}