export class Post {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public url: string,
    public permalink: string,
    public created: string,
    public comments: number,
    public ups: string,
    public downs: string,
  ) {
  }
}


