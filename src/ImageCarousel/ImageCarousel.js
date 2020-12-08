import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = (props) => {
    const {images, style} = props; 
    return (
        <div style={style}>
            <Carousel >
                {images.map(image => {
                    return(<img src={image.src} alt = {image.alt}></img>)
                })}    
            </Carousel>
        </div>
    );
}
export default ImageCarousel;