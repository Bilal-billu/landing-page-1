import React from "react";
import { Icon } from '@iconify/react';
import Target from "./Target";


export default function SideRight(){
    const styleModule = {
        flex: "0 0 40%"
    }
    

    var icons = {
        heart: "ph:heart-fill",
        document: "fluent-mdl2:page-solid",
        star: "material-symbols:star",
        page: "icon-park-outline:page",
        clock: "mdi:clock",
        ribbon: "fluent:ribbon-32-filled"
    };
    var headingText = ["168", "Title 1", "425+", "Title 2", "316", "Title 3"];
    var pText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    var iconBG = ["#3088FF", //1
        "#F8B3B8", //2
        "#F2C94C", //3
        "#6FCF97", //4
        "#9B51E0", //5
        "#62DBE2"]; //6

    function Targets() {
        var interactions = [];
        var iconsArray = Object.values(icons);
        const bootstrapIcon = "rounded-3 ratio-1x1"
        for (let i = 0; i < 6; i++) {
            interactions.push(<Target bootstapClassesForIcon={bootstrapIcon}
                styleContent={styleModule}
                icon={iconsArray[i]}
                h5Text={headingText[i]}
                pText={pText}
                iconBackground={iconBG[i]}
            />)

        }
        return interactions;
    }

    return (
        <div className="d-flex flex-wrap justify-content-center p-1 pt-3 col-md-6 px-md-5 px-5 " >
            {Targets()}
        </div>
    )
}
