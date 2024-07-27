import "./homePage.scss";
import SearchBar from "../../components/searchbar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              officia aut illum non iure molestias suscipit, dolore temporibus
              at ab mollitia in ducimus porro, dolor, aspernatur commodi
              blanditiis ad fuga!
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
