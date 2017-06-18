import React, { Component } from 'react';

class RecipeItem extends Component {
  render() {
    let { recipe } = this.props;

    return (
      <div className="recipe-item">
        <div className="recipe-text">
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img 
          src={recipe.thumbnail} 
          alt={recipe.title}
          className="recipe-img"
        />
      </div>
    )
  }
}

export default RecipeItem;