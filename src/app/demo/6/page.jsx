"use client";

import { useState } from "react";
import Wave from "./Wave";

function Greeting({ name }) {
  const [index, setIndex] = useState(0);

  const greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Привет"];

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  };

  return (
    <main>
      <h1>
        {greetings[index]}, {name}
      </h1>
      <button onClick={handleClick}>Next Greeting</button>
      <Wave />
    </main>
  );
}

export default function Page() {
  return <Greeting name="Tyler" />;
}

/**
 * Instructions:
 * Ajouter memo sur Wave
 * options={{ tone: index }} => Modifier Wave pour prendre ces props
 * Problème?
 * Solution (référence)
 * Ajout un compteur
 * Problème?
 * Solution (useMemo)
 *
 * + useCallback (useCallback = useMemo)
 */
