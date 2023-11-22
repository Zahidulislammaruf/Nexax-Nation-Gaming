const Banner = () => {
    return (
        <div className=" container mx-auto mt-10">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/kKkwPqs/banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Nexus Nation</h1>
      <p className="mb-5 text-2xl">Your hub for diverse gaming events. Join us for competitive eSports, casual meetups, and more. Unite, compete, and connect with gamers worldwide.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;