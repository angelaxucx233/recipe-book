// recipes.js — Add your recipes here!
// Each recipe follows this structure:
// {
//   id: unique string,
//   title: "Recipe Name",
//   section: "Lunch & Dinner",   // must match a section name
//   description: "Short description",
//   ingredients: ["ingredient 1", "ingredient 2", ...],
//   steps: ["Step 1...", "Step 2...", ...],
//   time: "30 min",
//   servings: 4,
//   image: ""  // optional URL to an image
// }

const RECIPES = [
  {
    id: "lemon-garlic-pasta",
    title: "Lemon Garlic Pasta",
    section: "Lunch & Dinner",
    description: "A bright, quick weeknight pasta with a silky lemon-garlic sauce.",
    ingredients: ["spaghetti", "garlic", "lemon", "olive oil", "parmesan", "parsley", "red pepper flakes", "salt", "black pepper"],
    steps: [
      "Boil a large pot of salted water and cook spaghetti until al dente. Reserve 1 cup pasta water before draining.",
      "In a large skillet over medium heat, warm olive oil and sauté sliced garlic for 1–2 minutes until fragrant.",
      "Add lemon zest and juice, then pour in a splash of pasta water. Stir to combine.",
      "Toss in the drained pasta and mix well, adding more pasta water as needed for a silky sauce.",
      "Remove from heat, stir in grated parmesan, and top with parsley and red pepper flakes. Serve immediately."
    ],
    time: "20 min",
    servings: 2,
    image: ""
  },
  {
    id: "chicken-stir-fry",
    title: "Chicken & Vegetable Stir-Fry",
    section: "Lunch & Dinner",
    description: "A fast, colourful stir-fry with tender chicken and crisp vegetables in a savory sauce.",
    ingredients: ["chicken breast", "broccoli", "bell pepper", "carrots", "soy sauce", "sesame oil", "garlic", "ginger", "cornstarch", "rice", "green onions"],
    steps: [
      "Thinly slice chicken breast and toss with cornstarch, soy sauce, and a pinch of salt. Set aside for 10 minutes.",
      "Cook rice according to package instructions.",
      "Heat sesame oil in a wok or large skillet over high heat. Add chicken and cook until golden, about 4 minutes. Remove.",
      "In the same pan, stir-fry garlic and ginger for 30 seconds, then add vegetables and cook until just tender-crisp.",
      "Return chicken to the pan, add soy sauce, and toss everything together. Serve over rice and garnish with green onions."
    ],
    time: "30 min",
    servings: 4,
    image: ""
  },
  {
    id: "tomato-lentil-soup",
    title: "Tomato & Red Lentil Soup",
    section: "Lunch & Dinner",
    description: "A hearty, warming soup that comes together in under 40 minutes.",
    ingredients: ["red lentils", "canned tomatoes", "onion", "garlic", "vegetable broth", "cumin", "smoked paprika", "olive oil", "lemon", "salt", "black pepper", "fresh cilantro"],
    steps: [
      "Heat olive oil in a large pot over medium heat. Sauté diced onion until soft, about 5 minutes.",
      "Add minced garlic, cumin, and smoked paprika; cook for 1 minute until fragrant.",
      "Stir in red lentils, canned tomatoes, and vegetable broth. Bring to a boil.",
      "Reduce heat and simmer for 20–25 minutes until lentils are completely soft.",
      "Use an immersion blender to partially blend the soup for a creamy-chunky texture. Season with salt, pepper, and a squeeze of lemon. Top with cilantro to serve."
    ],
    time: "40 min",
    servings: 4,
    image: ""
  },
  {
    id: "caprese-sandwich",
    title: "Caprese Sandwich",
    section: "Lunch & Dinner",
    description: "Classic Italian flavours stacked on crusty bread — ready in minutes.",
    ingredients: ["ciabatta bread", "fresh mozzarella", "tomato", "fresh basil", "balsamic glaze", "olive oil", "salt", "black pepper"],
    steps: [
      "Slice ciabatta in half and brush both cut sides lightly with olive oil.",
      "Layer fresh mozzarella slices and ripe tomato slices on the bottom half.",
      "Season with salt and black pepper, then add fresh basil leaves.",
      "Drizzle with balsamic glaze and close the sandwich. Slice and serve."
    ],
    time: "10 min",
    servings: 2,
    image: ""
  },
  {
    id: "salmon-sheet-pan",
    title: "Sheet Pan Salmon & Vegetables",
    section: "Lunch & Dinner",
    description: "Flaky salmon and roasted veggies all on one pan — minimal cleanup required.",
    ingredients: ["salmon fillets", "zucchini", "cherry tomatoes", "asparagus", "olive oil", "garlic", "lemon", "dill", "salt", "black pepper"],
    steps: [
      "Preheat oven to 400°F (200°C). Line a sheet pan with parchment paper.",
      "Toss vegetables with olive oil, garlic, salt, and pepper. Spread on the pan.",
      "Nestle salmon fillets among the vegetables. Drizzle with olive oil and season with salt, pepper, and dill.",
      "Roast for 18–22 minutes until salmon is cooked through and vegetables are tender.",
      "Squeeze fresh lemon over everything and serve straight from the pan."
    ],
    time: "35 min",
    servings: 2,
    image: ""
  }
];

// Collect all unique sections from recipe data
const SECTIONS = [...new Set(RECIPES.map(r => r.section))];
