import { useState , useEffect } from "react";
import { Container, Row , Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {

    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const toRotate = [" frontend Web Developer"];
    const [text , setText] = useState('');
    const [delta , setDelta] = useState(300 - Math.random() * 100);
    const [index , setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta);

        return () => { clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0 , text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(10);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {( { isVisible }) => (
                        <div className={
                            isVisible ? "animate__animated animate__fadeIn" : ""
                        }>

                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1 className="me">{`Hi! I'm Hagar`}
                    <br/>
                    <span className="txt-rotate" dataPeriod="2000" data-rotate='["Frontend Web Developer "]'>
                    <span className="wrap">{text}</span>
                    </span>
                    </h1>
                    <p>Hello Everyone. I have 6 months in web Development.I'm a Frontend developer and able to build frontend portion of websites using HTML , CSS , JS , Boot Strap , React .Js and OOP .
I’m seeking new role as a frontend developer in a reputed organization where I can face new challenges  to learn new skills , expand my knowledge and leverage my learnings.</p>
                    <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/>
                    </button>
                    </div>
                    )}
                    </TrackVisibility>
                </Col>

                <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                    {({ isVisible }) => (
                        <div className={
                            isVisible ? "animate__animated animate__zoomIn" : ""
                        }>
                    <img src={headerImg} className="header-img" alt="Header Img"/>
                    </div>
                    )}
                    </TrackVisibility>
                </Col>
                </Row>
            </Container>
            
        </section>
    );
                    };                                 






















