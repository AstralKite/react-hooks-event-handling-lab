import React from "react";

function Focus(){
    console.log("Good!");
}

function Blur(){
    console.log("Hey! Eyes on me!");
}

function EyesOnMe(){
    return(
        <div>
            <button  onFocus={ ()=> console.log("Good!")} onBlur={ ()=> console.log("Hey! Eyes on me!")}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;