export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  // Step 1: Added fields
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "125g fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil and salt",
    ],
    steps: [
      "Heat the oven to its highest temperature setting.",
      "Stretch out the dough into a thin round circle.",
      "Spread tomato sauce and tear fresh mozzarella over the top.",
      "Bake for 7 to 9 minutes until the crust is charred and cheese is bubbly.",
      "Top with fresh basil leaves before serving.",
    ],
  },
  {
    id: "paneer-tikka",
    title: "Paneer Tikka",
    emoji: "🧆",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Indian",
    ingredients: [
      "200g paneer cubes",
      "1/2 cup thick yogurt",
      "1 tbsp tikka masala spices",
      "1 diced bell pepper",
      "1 diced red onion",
    ],
    steps: [
      "Mix yogurt and tikka spices together in a bowl.",
      "Add paneer, bell pepper, and onion; coat well and marinate for 15 minutes.",
      "Thread the paneer and vegetables onto skewers.",
      "Grill or pan-fry until lightly charred on all edges.",
    ],
  },
  {
    id: "cold-brew",
    title: "Cold Brew Coffee",
    emoji: "☕",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Beverage",
    ingredients: [
      "1 cup coarsely ground coffee beans",
      "4 cups cold filtered water",
      "Ice cubes",
      "Milk or sweetener (optional)",
    ],
    steps: [
      "Combine coarsely ground coffee and water in a jar.",
      "Stir gently, cover, and let steep in the fridge for 12 to 24 hours.",
      "Strain through a fine mesh sieve lined with a coffee filter.",
      "Serve over ice with milk or sweetener to taste.",
    ],
  },
  {
    id: "ramen-bowl",
    title: "Shoyu Ramen",
    emoji: "🍜",
    minutes: 45,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: [
      "2 packs ramen noodles",
      "4 cups dashi or chicken broth",
      "2 tbsp soy sauce",
      "2 soft-boiled eggs",
      "Sliced chashu pork or tofu",
      "Green onions",
    ],
    steps: [
      "Simmer the broth with soy sauce for 15 minutes.",
      "Boil ramen noodles according to package directions and drain.",
      "Divide noodles into two bowls and ladle hot broth over top.",
      "Garnish with sliced soft-boiled eggs, pork or tofu, and chopped green onions.",
    ],
  },
];

// Step 1: Helper function to look up a recipe by ID
export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}