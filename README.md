# Adding-Navigation-to-Recipe-Gallery

# Recipe Router App

A modern multi-page Recipe Gallery application built with React Router v7 (Remix Framework style routing). This project demonstrates file-based routing, dynamic routes, navigation layouts, and responsive UI design using React.

---

# Project Overview

This application allows users to:

- Navigate between pages using React Router
- Browse a gallery of recipes
- View individual recipe details using dynamic routes
- Use a persistent navigation bar across all pages
- Handle invalid recipe routes gracefully

The application was built as part of a React Router assignment focused on client-side navigation and dynamic routing.

---

# Features

## File-Based Routing
Routes are created using the `app/routes` directory structure.

### Included Routes

| Route | File |
|---|---|
| `/` | `app/routes/_index.jsx` |
| `/gallery` | `app/routes/gallery.jsx` |
| `/recipe/:id` | `app/routes/recipe.$id.jsx` |

---

# Dynamic Routing

The application uses dynamic URL parameters with:

```jsx
useParams()
```

Example route:

```txt
/recipe/1
```

The route parameter is used to locate the correct recipe from the recipes data array.

---

# Navigation

A persistent navigation bar is displayed on every page using the global layout in:

```txt
app/root.jsx
```

Navigation Links:
- Home
- Gallery

---

# Recipe Gallery

The Gallery page:
- Displays all recipe thumbnails
- Uses CSS Grid layout
- Includes hover effects
- Uses React Router `<Link>` components for navigation

Each recipe card links to:

```txt
/recipe/[id]
```

---

# Recipe Detail Page

Each recipe detail page includes:
- Recipe title
- Recipe image
- Placeholder cooking instructions
- Back to Gallery button

The page also handles invalid routes by displaying:

```txt
Recipe not found!
```

---

# Technologies Used

- React
- React Router v7
- JavaScript (ES6)
- CSS3
- Vite / React Router Framework

---

# Project Structure

```txt
recipe-router-app/
│
├── app/
│   ├── routes/
│   │   ├── _index.jsx
│   │   ├── gallery.jsx
│   │   └── recipe.$id.jsx
│   │
│   ├── root.jsx
│   ├── app.css
│   └── recipes.js
│
├── public/
│   └── images/
│
├── package.json
└── README.md
```

---

# Installation Instructions

## Clone the Repository

```bash
git clone https://github.com/PaulinaS123/Adding-Navigation-to-Recipe-Gallery.git
```

---

## Navigate Into the Project

```bash
cd recipe-router-app
```

---

## Install Dependencies

```bash
npm install
```

---

## Run the Development Server

```bash
npm run dev
```

---

# Example Test Cases

## Normal Test Cases

### Test Case 1
Navigate from Home → Gallery successfully.

### Test Case 2
Clicking a recipe thumbnail opens the correct recipe detail page.

### Test Case 3
Back to Gallery button returns the user to the gallery page.

---

## Edge Test Cases

### Edge Case 1
Entering an invalid route such as:

```txt
/recipe/999
```

Displays:

```txt
Recipe not found!
```

---

### Edge Case 2
Refreshing the browser while on a dynamic recipe route still loads correctly.

---

### Edge Case 3
Handling missing or invalid recipe data gracefully.

---

# Author

Paulina Salomon

---

# License

This project was created for educational purposes.
