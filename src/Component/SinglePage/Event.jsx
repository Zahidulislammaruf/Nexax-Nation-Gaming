import { useEffect, useState } from "react";
import EventShow from "./EventShow";


const Event = () => {
    const [eventData,setEventData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setEventData(data))
    },[])
    
    return (
        <div className=" container mx-auto">
         <h2 className="text-center mt-10 mb-10 text-5xl">Our Upcomming Events Events </h2>  
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 " >
            {
                eventData.map(eventInfo=><EventShow key={eventInfo.id} eventInfo={eventInfo}></EventShow>)
            }
            </div> 
        </div>
    );
};

export default Event;