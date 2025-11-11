export default function MenuPage() {
  const items = [
    {
      id: 1,
      name: "Magherita Pizza",
      price: 250,
    },
    {
      id: 2,
      name: "Veg Burger",
      price: 180,
    },
  ];
  return (
    <div>
      <h1>Menu Page</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
