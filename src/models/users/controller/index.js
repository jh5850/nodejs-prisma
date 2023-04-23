import { Router } from "express";
import { CreateUserDTO, UserDTO, UpdateUserDTO, UsersDTO } from "../dto";
import { UserService } from "../service";
import { pagination } from "../../../middleware/pagination";

// Router
class UserController {
  router; // 컨트롤러에 이점을 사용하기위해서 라우터를쓴다...
  path = "/users";
  userService;

  //class를 사용하려면 생성자함수(constructor)를 실행해줘야한다.
  constructor() {
    this.router = Router();
    this.userService = new UserService();
    this.init();
  }

  init() {
    // 생성자를 실행할때 가장먼저 사용되는 함수.
    this.router.get("/", pagination, this.getUsers.bind(this));
    this.router.get("/detail/:id", this.getUser.bind(this));
    this.router.post("/", this.createUser.bind(this));
    this.router.post("/:id", this.updateUser.bind(this));
    this.router.post("/:id", this.deleteUser.bind(this));
  }

  // request -> application middleware ( app.use ) -> Router Middleware -> API
  async getUsers(req, res, next) {
    try {
      const { users, count } = await this.userService.findUsers({
        skip: req.skip,
        take: req.take,
      });

      res
        .status(200)
        .json({ users: users.map((user) => new UsersDTO(user)), count });
    } catch (err) {
      next(err);
    }
  }

  async getUser(req, res, next) {
    try {
      const { id } = req.params;
      const user = this.userService.findUserBYId(id);

      res.status(200).json({ user: new UsersDTO(user) });
    } catch (err) {
      next(err);
    }
  }

  async createUser(req, res, next) {
    try {
      const createUserDto = new CreateUserDTO(req.body);

      const newUserId = await this.userService.createUser(createUserDto);

      res.status(201).json({ id: newUserId });
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const updateUserDto = new UpdateUserDTO(req.body);

      await this.userService.updateUser(id, updateUserDto);

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;

      await this.userService.deleteUser(id);

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }
}

const userController = new UserController();
export default userController; //왜 여기는 소문자인데 import는 대문자일까??
