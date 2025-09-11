"use client";

function Hello({ element, authed = false, children }) {
  return (
    <div>
      <p>toto</p>
      {authed && <p>Vous êtes authentifié</p>}
      {children}
      {element}
    </div>
  );
}

export default function List() {
  const friends = [
    { id: 893, name: "Lynn" },
    { id: 871, name: "Alex" },
    { id: 982, name: "Ben" },
    { id: 61, name: "Mikenzi" },
  ];

  const friendsNoKey = ["Ben", "Lynn", "Alex"];

  return (
    <>
      <div id="notice">
        <p>
          Modifie ce code pour qu'il affiche les listes correctement, attention
          de ne pas oublier l'attribut key!
        </p>
        <p>
          Pour le deuxième tableau, trouve un moyen de lui donner une key
          unique, utilise tes connaissances de la fonction map
        </p>
      </div>
      <div>
        Friends:
        <ul>
          {friends.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        Friends no key:
        <ul>
          {friendsNoKey.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
      </div>
      <Hello element={<p>Hello</p>} authed>
        Je suis le children du composant Hello
      </Hello>
    </>
  );
}
