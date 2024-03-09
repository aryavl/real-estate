import Navbar from "../components/User/Navbar";
import ParellexSearch from "../components/User/ParellexSearch";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* <h1 className="text-5xl  text-orange-600 heading">Hellooo Daddy</h1> */}
        <ParellexSearch/>
      </div>
    </>
  );
};

export default Home;
