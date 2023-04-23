import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

export class UpdateUserDTO {
  name;
  phoneNumber;
  email;
  password;
  description;

  constructor(user) {
    this.name = user.name ?? undefined;
    this.phoneNumber = user.phoneNumber ?? undefined;
    this.email = user.email ?? undefined;
    this.password = user.password ?? undefined;
    this.description = user.description;
  }

  // 비밀번호를 수정시 다시 암호화는 과정을 추가
  async updatePassword() {
    this.password = await bcrypt.hash(password, process.env.PASSWORD_SALT);
  }
}
