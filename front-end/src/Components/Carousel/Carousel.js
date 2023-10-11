import { useEffect } from "react";
import { useState } from "react";
import "../Carousel/Carousel.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  const backColors = new Map([
    [0, "grey"],
    [1, "#8a2be2"],
    [2, "#cd5c5c"],
  ]);

  useEffect(() => {
    timeOut =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 1000000);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div className="rupam-css" id="about">
      <div className="carousel_arrow_left " onClick={slideLeft}>
        <BiChevronLeft />
        {/* <p>left</p> */}
      </div>
      <div className="carousel_arrow_right" onClick={slideRight}>
        <BiChevronRight />
        {/* <p>right</p> */}
      </div>
      <div
        className="carousel"
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className="carousel_wrapper">
          {images.map((image, index) => {
            return (
              /* (condition) ? true : false */

              <div
                key={index}
                className={
                  index === current
                    ? "carousel_card carousel_card-active"
                    : "carousel_card"
                }
                style={{ backgroundColor: backColors.get(index) }}
              >
                <div className="carousel-div">
                  <div className="carousel-content">
                    <div className="carousel-image">
                      <img src={image.image} alt="" />
                    </div>
                    <h1 className="carousel-title">{image.heading}</h1>
                    <div className="carousel-text">
                      <p>
                        {image.text}
                        <span>
                          {image.id === 3 ? (
                            <iframe
                              width="450"
                              height="345"
                              src="https://www.youtube.com/embed/8171ynPfDjM"
                              id="after-movie"
                            ></iframe>
                          ) : (
                            ""
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div>
                <div >
                   style={{backgroundColor:image.bgcolor}} 
                  <div className="image"><img className="card_image" src={image.image} alt=""/></div>
                  <div className="text"><p className="card_text">{image.text}</p></div>
                </div>
              </div> */}
              </div>
            );
          })}

          <div className="carousel_pagination">
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === current
                      ? "pagination_dot pagination_dot-active"
                      : "pagination_dot"
                  }
                  onClick={() => setCurrent(index)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
