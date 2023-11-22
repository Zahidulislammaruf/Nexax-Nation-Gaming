import { Link } from "react-router-dom";

const EventShow = ({eventInfo}) => {
    const {title,id,description,time_period,img,free_or_paid,price_pool,participant_age_range} = eventInfo
    return (
        <div data-aos="flip-left">
            <div >
            <div className="card   bg-base-100 shadow-xl">
  <figure><img className=" h-[216px] w-fit " src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{free_or_paid}</div>
    </h2>
    <div className="flex flex-col md:flex-row justify-between text-[20px]">
        <div>
            <p className="text-red-500">Price : {price_pool}</p>
            
            
        </div>
         <div>
            <p>Age : <span className=" text-pink-600">{participant_age_range} Years</span></p>
        </div>
    </div>
    <p className="text-[18px] mt-3 ">Event Date : <span className=" text-red-800">{time_period}</span></p>


    <div className="card-actions justify-center mt-3">
        <Link to={`/event/${id}`}><div className="btn badge-outline">Details</div></Link>
       
      
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default EventShow;