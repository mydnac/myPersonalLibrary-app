export class User {

  constructor(
    public login: string,
    public password: string,
    public id?: string,
    public lastname?: string,
    public firstname?: string,
    public picture?: string,
  ) { }
}
