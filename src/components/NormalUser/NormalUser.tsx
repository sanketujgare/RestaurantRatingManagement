import styles from "./NormalUser.module.scss";
import { NormalUserProps } from "./NormalUser.types.ts";
import { restaurantsData } from "../../Data/Restaurant.Data.ts";
import { UsersData } from "../../Data/Users.Data.ts";
import { useState } from "react";

import { Usertype } from "./NormalUser.types.ts";
import RestaurantList from "../RestaurantList/RestaurantList.tsx";

const NormalUser = ({}: NormalUserProps) => {
  const [profileTabSelected, setProfileTabSeleted] = useState(false);

  const [usersData, setUsersData] = useState<Usertype[]>(UsersData[0]);
  const [restaurantSelectedData, setRestaurentSeletedData] = useState({
    Name: "Sanket",
    email: "sank@11@gmail.com",
    Restaurant: [],
  });

  const [resstaurentisSelected, setresstaurentisSelected] = useState(false);

  const [SelectedRestaurant, setSelectedRestaurant] = useState(0);

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSelectedRestaurant = (item = {}, index: number) => {
    setSelectedRestaurant(index);
    setresstaurentisSelected(!resstaurentisSelected);
  };

  const handleUsersRatingAndFeedback = (index) => {
    // setUsersData(UsersData[index]);
    console.log("working");
    const updatedUser = {
      ...restaurantSelectedData,
      Restaurant: [{ rating, feedback }],
    };
    // setUsersData((prevdata) => [sanketprevdata, updatedUser]);
    setRestaurentSeletedData(updatedUser);

    // setUsersData((prevdata) => [...prevdata]);
    console.log("Users profile updated:", updatedUser);

    setresstaurentisSelected(!resstaurentisSelected);
  };
  console.log(restaurantSelectedData);
  const handleRating = (e) => {
    console.log(e);
    setRating(e.target.value);
  };

  const handleFeedback = (e) => {
    console.log(e);
    setFeedback(e.target.value);
  };
  // console.log(restaurantSelectedData);
  return (
    <div className={styles.NormalUser}>
      <nav className={styles.Navbar}>
        <div onClick={() => setProfileTabSeleted(!profileTabSelected)}>
          <span>Profile</span>
        </div>
      </nav>
      <div className={styles.Main}>
        {profileTabSelected && (
          <div className={styles.Profile}>
            <div>
              {/* <span>{restaurantSelectedData.name}</span>
              <span>{restaurantSelectedData.email}</span> */}
              {/* <span>{restaurantSelectedData.Restaurant.rating}</span>
              <span>{restaurantSelectedData.Restaurant.feedback}</span> */}
              {/* <span>{usersData.name}</span>
              <span>{usersData.email}</span>
              <span>{restaurantSelectedData.Restaurant.rating}</span>
              <span>{restaurantSelectedData.Restaurant.feedback}</span> */}

              {/* {restaurantSelectedData.Restaurant} */}

              {/* {usersData ? (
                <>
                  <span>{usersData.Restaurant.rating}</span>
                  <span>{usersData.Restaurant.feedback}</span>
                </>
              ) : null} */}
            </div>
          </div>
        )}
        {/* <div className={styles.RestaurantListCOntainer}> */}
        <div className={styles.RestaurantList}>
          {!resstaurentisSelected &&
            restaurantsData.map((item, index) => (
              <div className={styles.Restaurant}>
                <img
                  className={styles.RestaurantImage}
                  src={item.image}
                  alt="Image"
                  onClick={() => handleSelectedRestaurant(item, index)}
                />
                <div className={styles.RestaurantInfo}>
                  <span>{item.name}</span>
                  <span>{item.rating}</span>
                  <span>{item.address}</span>
                </div>
              </div>
            ))}
          {resstaurentisSelected && (
            <div className={styles.SelectedRestaurant}>
              <img
                className={styles.RestaurantImage}
                src={restaurantsData[SelectedRestaurant].image}
                alt="Image"
                onClick={() =>
                  handleSelectedRestaurant(
                    restaurantsData[SelectedRestaurant],
                    SelectedRestaurant
                  )
                }
              />
              <div className={styles.RestaurantInfo}>
                <span>{restaurantsData[SelectedRestaurant].name}</span>

                <label htmlFor="rating">Rating</label>
                <input
                  type="text"
                  id="rating"
                  onChange={handleRating}
                  value={rating}
                />
                <label htmlFor="feedback">Feedback</label>
                <input
                  type="text"
                  id="feedback"
                  onChange={handleFeedback}
                  value={feedback}
                />
                <span>{restaurantsData[SelectedRestaurant].address}</span>
                <button
                  onClick={() =>
                    handleUsersRatingAndFeedback(SelectedRestaurant)
                  }
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default NormalUser;
