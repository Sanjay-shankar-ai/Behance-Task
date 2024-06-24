import React from 'react';
/* import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'
import image9 from './images/image9.jpg'
import image10 from './images/image10.jpg'
import image11 from './images/image11.jpg' */

const HeroSection = () => {
    /* const leftImages = [
        image1, image2, image3, image4, image5, image6,
    ];
    const rightImages = [
        image7,image8, image9, image10, image11,
    ]; */



    return (
        <section className="hero-section">
            <br/>
            <br/>
            <br/>
            <h1>
                The World's  
            </h1>
            <h1 className="highlight">
                Best Creators
            </h1>
            <h1>
                 Are On Behance
            </h1>
            <p>A comprehensive platform to help hirers and creators navigate the creative<br />
               world from discovering inspiration, to connecting with one another
            </p>
            <br/>
            <br/>
            <div className="buttons">
                <a href="#" className="btn btn-primary">Hire a Freelancer</a>
                <a href="#" className="btn btn-secondary">Try Behance Pro</a>
            </div>

           {/*  <div className="image-gallery">
                <div className="left-images">
                    {leftImages.map((image, index) => (
                        <img key={index} src={image} alt={`gallery-img-${index}`} />
                    ))}
                </div>
                <div className="right-images">
                    {rightImages.map((image, index) => (
                        <img key={index} src={image} alt={`gallery-img-${index}`} />
                    ))}
                </div>
            </div> */}
            
        </section>
    );
};

export default HeroSection;
