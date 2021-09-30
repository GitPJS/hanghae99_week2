import React from "react";
import dictionary from "./dictionary.jpg"

const Spinner = (props) => {
    return (
        <div style={{
            background : "#e2432e",
            width : "100vh",
            heght : "100vh",
            position : "fixed",

        }}>
            <img src = {dictionary}/>
        </div>
    )

}

export default Spinner;