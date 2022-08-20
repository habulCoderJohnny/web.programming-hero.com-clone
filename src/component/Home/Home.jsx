import Banner from "./Banner";
import Footer from "./Footer";
import Services from "./Services";


function Home() {
    return (
        <div className="bg-[#5e13e5]">
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;