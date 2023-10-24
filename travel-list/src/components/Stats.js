export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list!</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked * 100) / numItems);

  return (
    <footer className="stats">
      <em>
        {numPercent === 100
          ? "You got everything, ready to go!"
          : ` You have ${numItems} items left on your list, and you already packed ${" "}
        ${numPacked} ${numItems <= 0 ? "" : `(${numPercent}%)`}`}
      </em>
    </footer>
  );
}
