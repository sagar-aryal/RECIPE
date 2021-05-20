import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";

const Singlerecipe = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://nameless-brushlands-31685.herokuapp.com/recipes/${id}`)
      .then((response) => {
        let result = response.data;
        debugger;
        if (typeof result.ingredients === "string") {
          result.ingredients = result.ingredients.split(",");
        }
        setRecipe(result);
      });
  }, []);

  return (
    <div className="recipe-container">
      {recipe && recipe.ingredients.length && (
        <>
          <div className="recipe">
            <div className="details">
              <h3 className="name">{recipe.name}</h3>
              <h4>
                Have you ever heard of {recipe.name}{" "}
                <i className="far fa-hand-point-down"></i>
              </h4>
              <p>{recipe.description}</p>
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <div className="ingredients">
              <h4>
                List of Ingredients <i className="far fa-hand-point-down"></i>
              </h4>
              <ul>
                {recipe.ingredients.map((items) => (
                  <li>{items}</li>
                ))}
              </ul>
            </div>
            <div className="instructions">
              <h4>
                Instructions <i className="far fa-hand-point-down"></i>
              </h4>
              <ReactPlayer className="video" url={recipe.video} width="100%" />
            </div>
          </div>
          <button type="button" onClick={() => history.goBack()}>
            Get Back
          </button>
        </>
      )}
    </div>
  );
};

export default Singlerecipe;
