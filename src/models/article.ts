export class Artlcle {
    id: number;
    boardId: number;
    title: string;
    content: string;
    hits: number;
    date: string;
    file_id: number;

    constructor (id, boardId, title, content, hits, date, file_id){
        this.id = id;
        this.boardId = boardId;
        this.title= title;
        this.content= content;
        this.hits = hits;
        this.date = date;
        this.file_id = file_id;
    }
}