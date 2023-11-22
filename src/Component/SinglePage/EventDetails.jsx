import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const details = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const card = details.find(card => card.id === idInt)
    return (
        <div className=" container mx-auto mt-10">
            <div className="flex justify-center  ">
                <img className="max-w-sm md:max-w-xl lg:max-w-2xl" src={card.img} alt="" />
            </div>
            <div>
                <h2 className="text-center text-3xl mt-4">{card.title}</h2>
                <div className="flex flex-col gap-3 font-mono text-[18px]">
                    <div >
                    Price : {card.price_pool}

                    </div>
                    <div >
                    Event Period : {card.time_period}

                    </div>
                </div>
                <p className="text-2xl font-normal mt-10"><span className=" font-bold">Event Description :</span> {card.description}</p>
            </div>
            
            
        </div>
    );
};

export default EventDetails;