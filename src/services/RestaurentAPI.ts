import axios from "axios";
import { jwtDecode } from "jwt-decode";
const axiosInstance = axios.create({
  baseURL: "https://0b7b-103-176-134-214.ngrok-free.app/", // Your API base URL
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },
});

export const Dologin = async (username: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      username,
      password,
    });
    console.log(response.data);
    // const token = jwtDecode(String(response.data));
    const token = response.data.data;

    localStorage.setItem("token", token);

    const newtoken = localStorage.getItem("token");
    console.log(newtoken);
    return { success: true, token };
  } catch (error) {
    // Handle error
    return { success: false, error: "Invalid username or password" };
  }
};

export const DosignUp = async (userData: {
  username: string;
  password: string;
}) => {
  console.log(userData);
  // console.log(
  //   typeof userData.name,
  //   typeof userData.username,
  //   typeof userData.age,
  //   typeof userData.password
  // );
  try {
    const response = await axiosInstance.post(
      "auth/register",
      // { ...userData, age: Number(userData.age) }
      userData
      // userData
    );

    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};

export const fetchRestaurants = async () => {
  const data = await axiosInstance("/restaurant");
  console.log(data);
};
