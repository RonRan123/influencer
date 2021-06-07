import React from "react";
import { IconButton } from "@material-ui/core";
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteIcon from "@material-ui/icons/Favorite";

const props = {
  title: "Summer Beach Trip",
  date: "June 16, 2021",
  image:
    "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1201/https://www.studentuniverse.com/blog/wp-content/uploads/2021/05/jay-cee-gXGSp7-KUQQ-unsplash-1201x900.jpg",
  content:
    "Turks & Caicos—a chain of 40 islands in the Caribbean—are known for being some of the most beautiful islands in the Caribbean, with white-sand beaches, incredible scuba diving and snorkeling, and of course, delicious seafood. Visit the Island Fish Fry for a true local experience, or try something fancier at one of the many restaurants. Whether you want a low-key getaway on some of the most beautiful beaches in the Caribbean or are looking to pamper yourself for a weekend, Turks and Caicos has something to offer you. Croatia is the one of our favorite summer destinations in Europe. With Mediterranean beaches, historic cities, national parks and tons of opportunities for swimming and enjoying the coastal Mediterranean weather, there’s really no better time to visit Croatia. Plus, its easy entry requirements make it a great European destination to visit in 2021. Dubrovnik, with the imposing and scenic city walls, is Croatia’s most famous city. However, the nearby Split and the quieter, inland capital of Zagreb are definitely worth visiting as well.",
  likes: 169,
  comments: ["0", "1", "2"],
};

export default function BlogPost() {
  const handleLike = () => {
    console.log("liked");
  };

  return (
    <div style={{ backgroundColor: "#F7F1F0" }}>
      <div
        style={{
          fontFamily: "'Martel', serif",
          marginLeft: "25vw",
          marginRight: "25vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ height: "3vh" }}></div>
        <div style={{ textAlign: "center", fontSize: "200%" }}>
          {props.title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "80%",
            alignItems: "baseline",
          }}
        >
          <div>Published on {props.date}</div>
          <div>
            <IconButton onClick={handleLike}>
              <FavoriteIcon style={{ color: "C7D8C6" }} />
            </IconButton>
            {props.likes} likes
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1vh",
          }}
        >
          <img
            src={props.image}
            alt="image"
            width="80%"
            style={{
              borderStyle: "solid",
              borderWidth: "10px",
              borderColor: "#C7D8C6",
            }}
          />
        </div>
        <div style={{ marginBottom: "5vh" }}>{props.content}</div>
        <div style={{ fontSize: "120%" }}>Comments</div>
        <div>{props.comments}</div>
      </div>
    </div>
  );
}
