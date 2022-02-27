import React from "react";
import Section from "./Section";
function Home() {
  const cars = [
    {
      id: 1,
      title: "Model 3",
      description: "Order Online for Touchless Delivery",
      image: "model-3.jpg",
      leftBtn: "Custom Order",
      rightBtn: "Existing inventory",
    },
    {
      id: 3,
      title: "Model Y",
      description: "Order Online for Touchless Delivery",
      image: "model-y.jpg",
      leftBtn: "Custom Order",
      rightBtn: "Existing inventory",
    },
    {
      id: 0,
      title: "Model S",
      description: "Order Online for Touchless Delivery",
      image: "model-s.jpg",
      leftBtn: "Custom Order",
      rightBtn: "Existing inventory",
    },
    {
      id: 2,
      title: "Model X",
      description: "Order Online for Touchless Delivery",
      image: "model-x.jpg",
      leftBtn: "Custom Order",
      rightBtn: "Existing inventory",
    },
    {
      id: 4,
      title: "Solar Panels",
      description: "Lowest Cost Solar Panels in America",
      image: "solar-panel.jpg",
      leftBtn: "Order Now",
      rightBtn: "Learn More",
    },
    {
      id: 5,
      title: "Solar Roof",
      description: "Produce Clean Energy From Your Roof",
      image: "solar-roof.jpg",
      leftBtn: "Order Now",
      rightBtn: "Learn More",
    },
    {
      id: 6,
      title: "Accessories",

      image: "accessories.jpg",
      leftBtn: "Shop Now",
    },
  ];
  return (
    <div>
      {cars.map((car) => (
        <Section key={car.id} car={car} />
      ))}
    </div>
  );
}

export default Home;
