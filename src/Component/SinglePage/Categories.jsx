import { useEffect, useState } from "react";
import CardCategori from "./CardCategori";

const Categories = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div className=" container mx-auto">
            <div>
              <h2 className=" text-center text-4xl font-bold mt-10 mb-10">Our Category </h2>
              <div className="flex flex-wrap justify-center gap-8 p-6">
                {
                    category.map(cardData=><CardCategori key={cardData.id} cardData={cardData}></CardCategori>)
                }
              </div>
            </div>
            
        </div>
    );
};

export default Categories;