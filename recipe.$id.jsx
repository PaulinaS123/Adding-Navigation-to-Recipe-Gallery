import { useParams, Link } from "react-router";
import { recipes } from "../recipes"; // Importing your shared data array

export default function RecipeDetail() {
  // Use the useParams hook to get the id from the URL
  const { id } = useParams();

  // Find the corresponding recipe using the JavaScript .find() method
  const recipe = recipes.find((r) => r.id === Number(id));

  // Requirement: Handle case where recipe is not found (Edge Case)
  if (!recipe) {
    return (
      <div className="detail-view">
        <h2>Recipe not found!</h2>
        <Link to="/gallery">Back to Gallery</Link>
      </div>
    );
  }

  return (
    <div
      className="detail-view"
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      {/* Requirement: Include a "Back to Gallery" link */}
      <Link to="/gallery" className="back-button">
        ← Back to Gallery
      </Link>

      {/* Requirement: Display recipe image and title */}
      <h1>{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
      />

      {/* Requirement: Placeholder for "Cooking Instructions" */}
      <h3>Cooking Instructions</h3>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      >
        <p>
          {recipe.instructions ||
            "1. Prep your ingredients. 2. Cook according to taste. 3. Enjoy!"}
        </p>
      </div>
    </div>
  );
}
