import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
      };

return (
    <section className="skill" id="skills">
    <div className="Container">
    <div className="row">
    <div className="col-12">
    <div className="skill-bx wow zoomIn">
    <h2>
    Skills
    </h2>
    <p>Hello,Iam Hagar Ahmed sultan , I have 6 months of experience in web development , and I also have experience in the field of software.
    </p>
    <Carousel responsive={responsive} infinite={true} className=" owl-carousel owl-theme skill-slider">
        <div className="item">
            <img src={meter1} alt="image" />
            <h5>Front-End Development</h5>
        </div>

        <div className="item">
            <img src={meter2} alt="image" />
            <h5>problem solving</h5>
        </div>

        <div className="item">
            <img src={meter3} alt="image" />
            <h5>Datastructure and algorithms</h5>
        </div>

        <div className="item">
            <img src={meter1} alt="image" />
            <h5>c++ and oop</h5>
        </div>
    </Carousel>
</div>
</div>
</div>
</div>
<img className="background-image-left" src={colorSharp} alt="Image" />
</section>
);

};