import React from "react";
import { Icon } from '@iconify/react';

export default function Target(props) {
    const iconStyle={
        width: "60px",
        height: "60px",
        padding: "16px 18px",
        backgroundColor: props.iconBackground
    }
    
    return (
        <div className="d-flex flex-row flex-wrap col-md-6 col-12 my-md-0 my-2 px-md-1  ms-0 ps-0 " >
            <div className={props.bootstapClassesForIcon} style={iconStyle}>
                <Icon className="text-white fs-4 fw-bolder" icon={props.icon}/>
            </div>
            <div className="w-75 ps-3">
                <h5>{props.h5Text}</h5>
                <small>{props.pText}</small>
            </div>
        </div>
    )
}