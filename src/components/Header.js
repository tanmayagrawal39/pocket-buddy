import { Link } from "react-router-dom";

import { BiUserCircle } from 'react-icons/bi';

function Header(props) {

    function onLoginClick()
    {
        console.log("button clicked")
    }

    function onHistoryClick()
    {

    }

  return (
    <div
      style={{
        display: "flex",
        flex: "row",
        justifyContent: "center",
        backgroundColor: "lightcyan",
        height: 100,
      }}
    >
      <div style={{ marginLeft: -100 }}>
            <h1 style={{ color: "darkgreen" }}>Pocket Buddy</h1>
      </div>

      <div style={{display:'flex',flexDirection:'row'}}>
          <div style={{ paddingTop: 20,marginLeft:100}}>
            <BiUserCircle size={40} />
          </div>
          <Link to="/">
            <button
                style={{ marginTop: 30, width: 80, height: 30 ,marginLeft:100}}
                onClick={onLoginClick}
            >
                    Logout
            </button>
          </Link>

          <Link to="/history">
            <button
                style={{ marginTop: 30, width: 80, height: 30,marginLeft:100}}
                onClick={onHistoryClick}
            >
                  History
            </button>
          </Link>
      </div>


    </div>
  );
}

export default Header;
