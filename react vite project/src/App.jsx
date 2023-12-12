import Nav from "./Nav";
import Container from "./Container";
import React from "react";
import FeaturesData from "./Features";

const cardData = [
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "500" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
  { name: "Karachi", rating: "5.00", date: "12-12-2023", charges: "100" },
]

function App() {
  return (
    <>
      <Nav />
      <FeaturesData />

      <div className="grid grid-cols-3 justify-items-center mt-4">
        {cardData?.map((cardItem, index) => (
          <div className="flex justify-center" >

            <Container cardItem={cardItem} />

          </div>
        ))}
       

      </div>




    </>
  )
}

export default App