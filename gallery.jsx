import { Link } from "react-router";
import { recipes } from "../recipes"; // THIS IS THE CRUCIAL LINE

export default function Gallery() {
  return (
    <div>
      <h1>Recipe Gallery</h1>

      <div className="gallery">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} width="200" />

              <h3>{recipe.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
