import "./homePage.scss";
import SearchBar from "../../components/searchbar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Welcome to Find Real Estate, your premier destination for
              discovering and securing your dream home. Whether you are searching
              for a cozy apartment, a spacious family house, or a luxurious
              estate, we provide a comprehensive listing of properties tailored
              to your needs. Our user-friendly platform and expert guidance make
              the process of finding your perfect place seamless and enjoyable.
              Start your journey with us today and turn your dream into reality.
            </p>
            <SearchBar />

            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
