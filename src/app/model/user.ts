export class User{
    id: number | undefined;
  name: string | undefined ;
  cardNumber: number | undefined;
  cardType: string | undefined;

  constructor(name?: string){
    this.name = name;
  }
}

// export interface IUser {
//   id: number | undefined,
//   name: string | undefined,
//   cardNumber: number | undefined,
//   cardType: string | undefined,
//
//   // id: number | undefined;
//   // name: string | undefined ;
//   // cardNumber: number | undefined;
//   // cardType: string | undefined;
//
//   // constructor(name?: string){
//   //   this.name = name;
//   // }
// }
