import React, { useContext } from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { EditContext } from "./EditContext";
import { Button } from "@material-ui/core";

export default function ViewPost(props) {
  const handleLike = () => {
    console.log("liked");
  };

  const { edit, setEdit } = useContext(EditContext);

  const handleEdit = () => {
    setEdit(true);
  };

  if (edit) {
    return null;
  } else {
    return (
      <div style={{ backgroundColor: "#F7F1F0" }}>
        <div style={{ height: "3vh" }}></div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={handleEdit}
            style={{
              marginRight: "10vw",
              backgroundColor: "#C7D8C6",
              fontFamily: "'Martel', serif",
            }}
          >
            EDIT
          </Button>
        </div>
        <div
          style={{
            fontFamily: "'Martel', serif",
            marginLeft: "25vw",
            marginRight: "25vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
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
}
