import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const IconLinkButton = ({ buttonName, onClickLink, onClickButton }) => {
  return (
    <>
      {buttonName === "Edit" ? (
        <Link to={onClickLink} style={{ textTransform: "none" }}>
          <img
            alt="edit"
            style={{
              width: "19px",
              height: "19px",
              marginRight: "40px",
              cursor: "pointer",
            }}
            src={require("../../assests/edit.png")}
          />
        </Link>
      ) : (
        <DeleteIcon onClick={onClickButton} sx={{ fontSize: "24px", color: "#DC3545" }}></DeleteIcon>
      )}
    </>
  );
};

export default IconLinkButton;
