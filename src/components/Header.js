import React, { useEffect, useRef } from "react"

const Header = props => {
    const headerStyle = {
      padding: "20px 0",
      lineHeight: "2em",
    };
    const isInitialMount = useRef(true)
    //console.log(isInitialMount);
    useEffect(() => {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
      if (isInitialMount.current){
        isInitialMount.current = false;
      } else {  
        //document.getElementById("inH1").innerHTML = "clicked";
        document.getElementById("inH1").style.color = bgColor;
      }
    }, [props.headerSpan]);
    
    
    return(
        <header style={headerStyle}>
        <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
          <span id = "inH1">Dog Tracker App </span>
        </h1>
        <p style={{ fontSize: "19px" }}>
          Please add extra dog activities through the input field
        </p>
        </header>
    );
    
}

export default Header