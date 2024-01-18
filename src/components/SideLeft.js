import React from "react";


export default function SideLeft() {
    const styleButton={
        width: "10em"
    }
    
    
    return (
        <div  className="p-1 ps-5 col-md-6 "> 
            <h3 className="display-1 m-2">
                    <b>Design. Think. Solve. Develop.</b>
            </h3>
            <p className="m-2 w-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id pulvinar nibh, ac iaculis quam. Morbi ut metus at metus sollicitudin malesuada.
            </p>
            <button className="btn btn-dark rounded-5 m-2 my-3 mb-lg-5" style={styleButton}>Get started</button>
        </div>
    );
}