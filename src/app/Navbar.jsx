import { readdirSync } from "fs";

function Link({ exercice }) {
  return (
    <li style={{ padding: "5px 0" }}>
      <a href={`/exercices/${exercice}`}>Exercice {exercice}</a>
    </li>
  );
}

export default function Navbar() {
  const exercices = readdirSync("./src/app/exercices").map((folder) => folder);

  exercices.sort((a, b) => a - b);

  return (
    <div id="navbar">
      <h1>Exercices</h1>
      <ul>
        {exercices.map((exercice) => (
          <Link key={exercice} exercice={exercice} />
        ))}
      </ul>
    </div>
  );
}
