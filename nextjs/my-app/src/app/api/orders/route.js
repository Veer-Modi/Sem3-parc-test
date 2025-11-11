import { NextResponse } from "next/server";

let orders = [
  { id: 1, item: "Pizza" },
  { id: 2, item: "Burger" },
];
export function GET() {
  return NextResponse.json(orders);
}
export function POST(request) {
  const newOrder = request.json();
  orders.push(newOrder);
  return NextResponse.json(newOrder, { status: 201 });
}
