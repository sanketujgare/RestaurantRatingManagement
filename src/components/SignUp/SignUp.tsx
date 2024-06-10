// Signup.tsx

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DosignUp } from "../../services/RestaurentAPI";
import { ISignUpInput, SignUpProps } from "./SignUp.types";
import styles from "./SignUp.module.scss";

const SignUp = ({ isSignedIn }: SignUpProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpInput>();

  const [signupError, setSignupError] = useState("");

  const onSubmit: SubmitHandler<ISignUpInput> = async (data) => {
    try {
      // Call the signUp method with form data
      const response = await DosignUp(data);
      isSignedIn(true);
      console.log(response);
    } catch (error) {
      console.error(error);
      setSignupError("Error occurred during signup");
    }
  };

  return (
    <div className={styles.SignupForm}>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        {/* <label className={styles.label} htmlFor="name">Name</label>
        <input type="text" {...register("name")} /> */}
        <label className={styles.label} htmlFor="username">
          Username
        </label>
        <input
          className={styles.input}
          type="text"
          id="username"
          placeholder="Enter username"
          {...register("username", { required: true })}
          required
        />
        {/* <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input}
          type="email"
          id="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
          required
        /> */}

        {/* <label className={styles.label} htmlFor="age">Age</label>
        <input className={styles.input} type="number" {...register("age")} /> */}

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
          required
        />
        <input className={styles.SignupBtn} type="submit" value="Sign Up" />
        {signupError && <p className={styles.error}>{signupError}</p>}
      </form>
    </div>
  );
};

export default SignUp;
