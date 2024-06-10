export interface IFormInput {
  username: string;
  password: string;
}

export interface LoginProps {
  isNewUser: (arg1: boolean) => void;
  setRole: (arg1: string) => void;
  isLoggedIn: (arg1: boolean) => void;
}
