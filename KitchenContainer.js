import React from 'react'
import Kitchen from './Kitchen'
import "../css/KitchenContainer.css"

const kitchens = [
    {
      id:1,
      name: "LetsEat",
      opname: "Geetha Anjali",
      address: "Bhimavarm",
      rating: "4.5",
      cuisines: ["Veg", "Non-Veg", "Sambar"]
    },
    {
      id:2,
      name: "Satya",
      opname: "Lakxmi",
      address: "Vendra",
      rating: "3.8",
      cuisines: ["Non-Veg"]
    },
    {
      id:3,
      name: "Pavan",
      opname: "Vara",
      address: "Palakol",
      rating: "4.0",
      cuisines: ["Veg"]
    },
    {
      id:4,
      name: "Gnana",
      opname: "Priya",
      address: "Narasayya Aggram",
      rating: "4.5",
      cuisines: ["Non-Veg", "Veg"]
    },
    {
      id:5,
      name: "Mani",
      opname: "Deepika",
      address: "Palakol",
      rating: "4.0",
      cuisines: ["Bakery Items"]
    },
    {
      id:6,
      name: "karthik",
      opname: "venkata laxmi",
      address: "Bv Raju",
      rating: "4.5",
      cuisines: ["Non-Veg pickels"]
    },
    {
        id:7,
        name:"srkr",
        opname:"hello",
        address:"Tanuku",
        rating:"3.8",
        cuisines:["veg","Non-Veg"]
    }
  ];
  
const KitchenContainer = () => {
    return (
        <div className="kitchen-container">
           { kitchens.map((kitchen)=>
                <Kitchen key={kitchen.id} kitchen={kitchen}/>
           ) }
        </div>
    )
}

export default KitchenContainer