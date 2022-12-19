import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const slideImages = [
  {
    url: 'https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/SC_HPBanner_Desktop.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/SC_TopBannerdesktop.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://logan.nnnow.com/content/dam/nnnow-project/13-dec-2022/1125X500_HPBanner_Web35LM.jpg',
    caption: 'Slide 3'
  },
];

export const Slideshow = () => {
    return (
      <div className="slide-container" style={{height:"400px"}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index} style={{height:"400px"}}>
              <div style={{'backgroundImage': `url(${slideImage.url})`,height:"400px"}} >
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}