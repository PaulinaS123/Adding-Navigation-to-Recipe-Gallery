import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // or _index.jsx
  route("gallery", "routes/gallery.jsx"), // Make sure this line exists!
  route("recipe/:id", "routes/recipe.$id.jsx"),
] satisfies RouteConfig;
