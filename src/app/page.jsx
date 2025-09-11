export default function Home() {
  const isTrue = true;
  const isFalse = false;

  if (isTrue && !isFalse) {
  }

  return (
    <>
      {isTrue ? <p>C'est vrai</p> : <p>C'est pas vrai</p>}
      {isTrue && <p>Ça fonctionne</p>}
      <img className="toto" src="" />
    </>
  );
}
