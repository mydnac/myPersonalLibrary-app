import { Writer } from './writer';

export class Book {

  constructor(
    public title: string,
    public readingDate: Date,
    public img: string,
    public summary: string,
    public personalSummary: string,
    public rating: number,
    public writer?: Writer,
    public id?: string,
  ) { }
}
