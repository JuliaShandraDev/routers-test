export class UserModel {
    id: number | undefined;
  name: string | undefined ;
  cardNumber: number | undefined;
  cardType: string | undefined;

  constructor(name?: string){
    this.name = name;
  }
}