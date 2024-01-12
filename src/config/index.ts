// it seems that the middleware cannot use exports from api/auth/[...nextauth] atm so we'll define pages here
export const nextAuthPages = {
  signIn: "/signin",
  error: "/error",
};
