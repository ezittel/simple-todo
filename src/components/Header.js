import React from "react"

function Header(){
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    }
    return(
        <header style={headerStyle}>
            <h1>Simple dodo App</h1>
            <p>Please add items through the 'Add DODO' input field below.</p>
        </header>
    )
}

export default Header