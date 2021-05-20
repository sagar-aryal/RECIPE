import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const RecipeDetails = ({ link, name, image }) => {
  const { path } = useRouteMatch();
  return (
    <div className="card">
      <img src={image} alt={name} />
      <hr />
      <b>{name}</b>

      <hr />
      <Link to={`${path}/${link}`} className="button">
        See Details
      </Link>
    </div>
  );
};

export default RecipeDetails;
