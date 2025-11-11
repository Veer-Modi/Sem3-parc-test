export default async function ItemPage({ params }) {
  const { itemId } = await params;
  const items = [
    {
      id: 1,
      name: "Magherita Pizza",
      desc: "cheese pizza",
      price: 250,
    },
    {
      id: 2,
      name: "Veg Burger",
      desc: "patties vegies",
      price: 180,
    },
  ];

  const item = items.find((item) => item.id.toString() == itemId);

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.desc}</p>
      <p>{item.price}</p>
    </div>
  );
}
