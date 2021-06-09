import { injectable } from "tsyringe";
import UserRepository from "../repositories/user-repository";

@injectable()
export class UserService {

    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    getUsers() {
        return this.userRepository.getUsers();
    }
}