// thx https://www.codingscenes.com/posts/66/Cannot-find-module-assets-images-icon-png-or-its-corresponding-type-declarations
declare module "*.png" {
  const value: string;
  export default value;
}

type Credentials = {
  email: string;
  password: string;
};

type MyElement = {
  id: number;
  text: string;
};

type User = {
  id: number;
  email: string;
};

type UserWithPassword = User & {
  password: string;
};
