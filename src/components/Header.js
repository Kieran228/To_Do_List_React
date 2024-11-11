import React from "react";

function Header(props) {

console.log(props)

function switchView() {
    props.viewFunc(prevView => !prevView)
}

    return(
        <div className="row">
            <h1>Kieran's React To do List</h1>
            <button onClick={switchView}>Switch</button>
        </div>

    )
}

export default Header;