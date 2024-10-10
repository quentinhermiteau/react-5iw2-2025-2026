export default function List() {
  const friends = [
    { id: 893, name: "Lynn" },
    { id: 871, name: "Alex" },
    { id: 982, name: "Ben" },
    { id: 61, name: "Mikenzi" }
  ];

  const friendsNoKey = ["Ben", "Lynn", "Alex"];

  return (
    <>
      <div>
        Friends:
        <ul></ul>
      </div>
      <div>
        Friends no key:
        <ul></ul>
      </div>
    </>
);
}
