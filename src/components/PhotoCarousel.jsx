import Carousel from "react-material-ui-carousel";
import * as React from "react";

export function PhotoCarousel(props) {

    const items = [
        {src: "./assets/1.jpg"},
        {src: "./assets/2.jpg"},
        {src: "./assets/3.jpg"},
        {src: "./assets/4.jpg"},
        {src: "./assets/5.jpg"},
        {src: "./assets/6.jpg"},
        {src: "./assets/7.jpg"},
        {src: "./assets/8.jpg"},
        {src: "./assets/9.jpg"}
    ]

    return (
        <div style={{margin: 10}}>
            <Carousel navButtonsAlwaysVisible>
                {items.map(i => {
                    return (
                        <div style={{height: "700px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <img height={"700px"} src={i.src} key={i} />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}