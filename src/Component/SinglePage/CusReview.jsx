
const CusReview = ({userReviwe}) => {
    const {img,title,date,name,review} = userReviwe
    return (
        <div >
           <div data-aos="fade-down-right" className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={img} alt="Shoes" className=" w-32 rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title badge badge-primary p-4">{name}</h2>
    <p className=" italic hover:not-italic">  “ {review}”</p>
    <div className=" flex justify-end">
        <p>{date}</p>
    </div>
    <div className="card-actions">
    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CusReview;