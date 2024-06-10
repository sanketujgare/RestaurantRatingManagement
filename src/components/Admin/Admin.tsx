import styles from "./Admin.module.scss";
import { AdminProps } from "./Admin.types.ts";
import { useState } from "react";

import { restaurantsData } from "../../Data/Restaurant.Data.ts";
import { UsersData } from "../../Data/Users.Data.ts";
const Admin = ({}: AdminProps) => {
  const [profileTabSelected, setProfileTabSeleted] = useState(false);

  const [restaurantSelectedData, setRestaurentSeletedData] = useState([]);

  const [resstaurentisSelected, setresstaurentisSelected] = useState(false);

  const [SelectedRestaurant, setSelectedRestaurant] = useState(0);

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSelectedRestaurant = (item = {}, index) => {
    setSelectedRestaurant(index);
    setresstaurentisSelected(!resstaurentisSelected);
  };

  const handleUsersRatingAndFeedback = (SelectedRestaurant) => {
    console.log("working");

    setresstaurentisSelected(!resstaurentisSelected);

    console.log(restaurantSelectedData);
  };

  const handleRating = (e) => {
    console.log(e);
    setRating(e.target.value);
  };

  const handleFeedback = (e) => {
    console.log(e);
    setFeedback(e.target.value);
  };

  return (
    <div className={styles.AdminContainer}>
      <nav className={styles.Navbar}>
        <div onClick={() => setProfileTabSeleted(!profileTabSelected)}>
          <span className={styles.Navbarheading}>Profile</span>
        </div>
      </nav>

      <div className={styles.Main}>
        {profileTabSelected && (
          <div className={styles.Profile}>
            <div>
              <span>user:Sanket</span>
              <span>chilling</span>
            </div>
          </div>
        )}
        <div className={styles.UsersList}>
          {UsersData.map((item) => (
            <div className={styles.User}>
              <div className={styles.UserInfo}>
                <span>{item.name}</span>
                <span>{item.email}</span>
                <span>{item.Restaurant.rating}</span>
                <span>{item.Restaurant.feedback}</span>
              </div>
            </div>
          ))}
        </div>
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
  );
};

export default Admin;
