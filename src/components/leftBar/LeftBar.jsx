import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/14.png";
import Watch from "../../assets/15.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>BookMark</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Answer</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>INSTITUTES</span>
          <div className="item">
            <img src={Groups} alt="" />
            <span>CSPIT</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>DEPSTAR</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>PDPIAS</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>RPCP</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>CMPCIA</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>I2IM</span>
          </div>
        </div>
        </div>
      </div>
  );
};

export default LeftBar;
