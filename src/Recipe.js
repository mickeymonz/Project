import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className="titleMenu">{title}</h1>
            <h4>Ingredients</h4>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h4>Calories</h4>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default Recipe;