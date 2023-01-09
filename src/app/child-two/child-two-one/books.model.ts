export class Book {
  public name: string;
  public author: string;
  public imagePath: string;

  constructor(name: string, auth: string, imgPath: string) {
    this.name = name;
    this.author = auth;
    this.imagePath = imgPath;
  }
}
