import Navbar from "../components/User/Navbar";
import Popular from "../components/home/Popular";
import SearchPlace from "../components/home/SearchPlace";



const Home = () => {
  return (
    <div className="bg">
      <Navbar />
       <SearchPlace/>
       <Popular/>
    
    </div>
  );
};

export default Home;
