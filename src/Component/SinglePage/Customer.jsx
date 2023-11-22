import { useEffect, useState } from "react";
import CusReview from "./CusReview";

const Customer = () => {
    
    const [review,setReview] =  useState([])
    useEffect(()=>{
        fetch('customer.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    
    return (
        <div className=" container mx-auto">
            <div>
                <h2 className=" text-center text-4xl mt-8 mb-6 font-bold">What Our Customers Say</h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 p-4">
                    {
                        review.map(userReviwe=> <CusReview key={userReviwe.id} userReviwe={userReviwe}></CusReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Customer;