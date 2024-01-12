import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export default class UserService {
  private static userRepository = prisma.user;

  static async createUser(data: Prisma.UserCreateInput) {
    return UserService.userRepository.create({ data });
  }

  static async getUserByEmail(email: string) {
    return UserService.userRepository.findUnique({ where: { email } });
  }

  static async getAllUsers() {
    return UserService.userRepository.findMany();
  }
}
