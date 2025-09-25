export function GiftBox() {
  const gifts = [
    {
      id: 1,
      name: "Birthday Cake",
      price: "3000",
      image: "/image/birthday_3.jpg",
    },
    {
      id: 2,
      name: "Wine Bottle",
      price: "2000",
      image: "/image/wine_5.jpeg",
    },
    {
      id: 3,
      name: "Flower Bouquet",
      price: "1000",
      image: "/image/flower_7.jpeg",
    },
    {
      id: 4,
      name: "New Machine",
      price: "300000",
      image: "/image/laptop_3.jpeg",
    },
    {
      id: 5,
      name: "Pizza ",
      price: "2000",
      image: "/image/pizza_2.jpeg",
    },
    {
      id: 6,
      name: "Take Me Out",
      price: "20000",
      image: "/image/happy to me.jpeg",
    },
    {
      id: 7,
      name: "Card",
      price: "1000",
      image: "/image/flower_11.jpeg",
    },
    {
      id: 8,
      name: "Apple Watch",
      price: "5000",
      image: "/image/watch_3.jpeg",
    },
  ];
  return gifts;
}

export function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
}
