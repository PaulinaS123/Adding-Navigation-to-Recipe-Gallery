// app/routes/home.tsx (or _index.jsx)
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Recipe Gallery - Home" }];
}

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome to the Recipe Gallery</h1>
      <p>Click on the Gallery link in the nav to see our recipes.</p>
    </div>
  );
}
