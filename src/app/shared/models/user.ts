export class User {

  constructor(
    public login: string,
    public password: string,
    public lastname?: string,
    public firstname?: string,
  ) { }
}
