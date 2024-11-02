import { readdirSync } from "fs";

export default function Home() {
  const exercices = readdirSync("./src/app/exercices").map((folder) => folder);
  console.log(exercices);

  return (
    <div>
      <h1>Exercices</h1>
      <ul>
        {exercices.map((exercice) => (
          <li key={exercice}>
            <a href={`/exercices/${exercice}`}>{exercice}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
