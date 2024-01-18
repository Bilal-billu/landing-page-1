import React from "react";

export default function BottomElement(props) {
    const style = {
        backgroundImage: `url(${props.image})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: props.style
    }
    return (
        <div style={style} className="text text-center d-flex flex-column justify-content-end  px-5 col-lg-3 col-md-6 col-12 py-2 p-md-3 p-lg-5">
            <p className="text-white-50">{props.text}</p>
        </div>
    )
}