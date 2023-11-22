
const CardCategori = ({cardData}) => {
    const {title,genre,description,platform,games,img} = cardData
    return (
        <div>
           <div data-aos="zoom-in" className="card max-w-xl lg:card-side bg-green-300 shadow-xl text-black p-6">
  <figure><img className=" w-[] h-[230px]" src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title bg-white rounded-lg  ">Category: {title}</h2>
    <span className=" bg-white"> Genre: {genre}</span>
    <p className=" bg-white">Platform : {platform}</p>
    <p className=" bg-white">Game : {games}</p>
    
  </div>
</div>
            
        </div>
    );
};

export default CardCategori;