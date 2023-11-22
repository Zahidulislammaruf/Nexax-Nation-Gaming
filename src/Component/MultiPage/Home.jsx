
import Footer from "../Shared/Footer";
import Banner from "../SinglePage/Banner";
import Categories from "../SinglePage/Categories";
import Customer from "../SinglePage/Customer";
import Event from "../SinglePage/Event";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Event></Event>
           <Categories></Categories>
           <Customer></Customer>
           <Footer></Footer>
        </div>
    );
};

export default Home;