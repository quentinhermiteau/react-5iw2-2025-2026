"use client";

import { useRef } from "react";

export default function Page() {
  const btnRef = useRef(null);

  const handleClick = () => {
    btnRef.current.disabled = true;
    btnRef.current.innerText = "Clicked";
  };

  return (
    <main>
      <div>
        <button ref={btnRef} onClick={handleClick}>
          Click Me
        </button>
      </div>
    </main>
  );
}
