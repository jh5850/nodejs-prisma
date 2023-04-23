export class UsersDTO {
  id;
  name;
  phoneNumber;
  email;
  description;

  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
    this.description = user.description;

    // password가 필요없는 이유는 유저정보를 보내는데 비밀번호를 보내면안되니깐
  }
}
