import * as bcrypt from "bcryptjs";
import { ResolverMap } from "./types/graphql-utils";
import { User } from "./entity/User";

export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => {
      return `Hello ${name}`;
    }
  },
  Mutation: {
    register: async (
      _,
      { fullname, username, email, password }: GQL.IRegisterOnMutationArguments
    ) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = User.create({
          fullname,
          username,
          email,
          password: hashedPassword
        });
        await user.save();
        return true;
      } catch (e) {
        return false;
      }
    }
  }
};
