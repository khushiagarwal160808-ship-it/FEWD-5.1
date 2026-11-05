import { notFound } from "next/navigation";
import Link from "next/link";
import { getRecipe } from "../../data/recipes";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main style={{ padding: "2rem" }}>
      <Link href="/">← Back to recipes</Link>
      
      <h1>
        {recipe.emoji} {recipe.title}
      </h1>
      
      <p>
        ⏱ {recipe.minutes} min • {recipe.difficulty} • {recipe.cuisine}
      </p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Method</h2>
      <ol>
        {recipe.steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </main>
  );
}