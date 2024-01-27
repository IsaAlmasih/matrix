import { CarouselItem } from "react-round-carousel";
import image1 from "../assets/img/kniga_zhizni_Verdikt.jpg";
import image2 from "../assets/img/Book_life.jpg";
import image3 from "../assets/img/Verdikt1.jpg";
import image4 from "../assets/img/Verdikt2.jpg";
import image5 from "../assets/img/Verdikt3.jpg";
import image6 from "../assets/img/Verdikt4.jpg";
import image7 from "../assets/img/Verdikt5.jpg";
import image8 from "../assets/img/Verdikt6.jpg";
import image9 from "../assets/img/Verdikt7.jpg";
import image10 from "../assets/img/Verdikt8.jpg";
import image11 from "../assets/img/Verdikt9.jpg";
import image12 from "../assets/img/zavet.jpg";
const handleClick = (id) => {
  // const baseUrl = window.location.protocol + "//" + window.location.host;
  localStorage.setItem("bookId", id);
  // window.open(baseUrl + "/book", "_blank");
};
export const items = [
  {
    alt: "A random photo",
    image: image1,
    content: (
      <div
        className="test"
        onClick={() => handleClick(1)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image2,
    content: (
      <div
        className="test"
        onClick={() => handleClick(2)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image3,
    content: (
      <div
        className="test"
        onClick={() => handleClick(3)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image4,
    content: (
      <div
        onClick={() => handleClick(4)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image5,
    content: (
      <div
        onClick={() => handleClick(5)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image6,
    content: (
      <div
        onClick={() => handleClick(6)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image7,
    content: (
      <div
        onClick={() => handleClick(7)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image8,
    content: (
      <div
        onClick={() => handleClick(8)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image9,
    content: (
      <div
        onClick={() => handleClick(9)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image10,
    content: (
      <div
        onClick={() => handleClick(10)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image11,
    content: (
      <div
        onClick={() => handleClick(11)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
  {
    alt: "A random photo",
    image: image12,
    content: (
      <div
        onClick={() => handleClick(12)}
        style={{ width: "250px", height: "250px" }}
      >
        {/* <strong>Round Carousel</strong>
        <span>Slide number </span> */}
      </div>
    ),
  },
];
// Как вариан, поменять свойства.
