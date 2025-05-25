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
