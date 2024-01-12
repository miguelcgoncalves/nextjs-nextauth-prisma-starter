"use server";

import { hash } from "bcrypt";
import { SignUpSchema } from "@/validations/signUp";
import UserService from "@/services/UserService";

export default async function signUp(params: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  SignUpSchema.parse(params);
  return UserService.createUser({
    firstName: params.firstName.toLowerCase(),
    lastName: params.lastName.toLowerCase(),
    email: params.email.toLowerCase(),
    password: await hash(params.password, 10),
  });
}
