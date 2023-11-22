import { Link } from "react-router-dom";
import imf from "../../assets/error.gif"


const ErrorPage = () => {
    return (
        <div >
            <div className="flex flex-col justify-center items-center container mx-auto mt-20">
    <img className="w-48 mt-4" src={imf} alt="" />
    <h2 className="text-[40px] text-red-500">Opps !!!</h2>
    <p className="text-[32px]">You Enter A Wrong Path</p>
    <Link to='/'><button className="btn bg-purple-500 text-white mt-4">Go To HomePage</button></Link>
     </div>

            
        </div>
    );
};

export default ErrorPage;