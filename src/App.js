import React, {useState} from "react"
import Header from "./components/Header";
import Body from "./components/Body";
import './style.css'



function App() {
    const [view, setView] = useState(true)

    return (
        <div className="container conBackground">
            <div className="row justify-content-center align-items-center d-flex">
                <div className="col-7 appColBackground">
                    <Header viewFunc={setView} />
                    <Body viewBool={view} />
                </div>
            </div>
        </div>
    )
}

export default App;