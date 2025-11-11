import { NextResponse } from "next/server";

let orders = [
  { id: 1, item: "pizza" },
  { id: 2, item: "burger" },
];

export function GET(request, { params }) {
  const { orderId } = params;
  const order = orders.find((order) => order.id.toString() === orderId);
  if (order) {
    return NextResponse.json(order);
  } else {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }
}
export function PATCH(request, { params }) {
  const { orderId } = params;
  const updatedData = request.json();
  let order = orders.find((order) => order.id.toString() === orderId);
  if (order) {
    order = { ...order, ...updatedData };
    orders = orders.map((o) => (o.id.toString() === orderId ? order : o));
    return NextResponse.json(order);
  } else {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }
}
