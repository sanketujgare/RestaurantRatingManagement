export interface NormalUserProps {}

export interface Usertype {
  id: number;
  name: string;
  email: string;
  Restaurant: {
    rating: number;
    feedback: string;
  };
}
