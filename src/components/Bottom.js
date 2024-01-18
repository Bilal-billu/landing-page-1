import React from "react";
import BottomElement from './BottomElement'
import "../index.css";

export default function Bottom() {
    function footerElement()
    {
        const cornersArray=["0 0 0 0","10px 0 0 10px", "0 10px 10px 0"];
        const elements=[];
        var elementText="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        var imageArray=[
            "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg",
            "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg",
            "https://images.immediate.co.uk/production/volatile/sites/10/2018/02/5a6f0055-8882-43cc-8eee-9c8aa13e23af-085da29.jpg",
            "https://www.epicgardening.com/wp-content/uploads/2023/09/Orange-Flower-in-Garden.jpg"
        ]
        for(let i=0;i<4;i++)
        {
            let corner;
            if(i==0)
            {
                corner=cornersArray[1];
            }
            else if(i==3)
            {
                corner=cornersArray[2];
            }
            else
            {
                corner=cornersArray[0];
            }
            elements.push(<BottomElement
                image={imageArray[i]}
                text={elementText}
                style={corner}
                />);
        }
        return elements;
    }
    
    return (
        <div className="border-2 border-dark bg-black d-flex flex-wrap flex-row position-relative m-4" id="divStyle">
            {footerElement()}
        </div>
    );
}