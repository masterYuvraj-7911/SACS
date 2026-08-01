import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen  bg-primary  px-2 pt-10">
      <Navbar/>
      <Hero/>
    </div>
  );
};

export default Home;
