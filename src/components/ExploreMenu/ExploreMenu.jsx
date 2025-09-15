import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring delectable array of dishes. Our
        mission is to{" "}
      </p>
      <div className="explore-menu-list">
        {menu_list.map((elem, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === elem.menu_name ? "All" : elem.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img className={category===elem.menu_name?"active":""}src={elem.menu_image} alt="" />
              <p>{elem.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
