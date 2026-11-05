import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Find your next bite.</h1>
      {/* Step 4: Replace the manual grid mapping with RecipeGrid */}
      <RecipeGrid recipes={recipes} />
    </main>
  );
}