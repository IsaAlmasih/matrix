/* eslint-disable react/react-in-jsx-scope */
import Video from "../../assets/videos/20210209_164731.mp4";
import { forwardRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
import "./Book.scss";
import papirus from "../../assets/img/papirus.jpg";
import clsx from "clsx";

import { BOOKS_TEXT } from "../../utils";

const Page = forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      /* ref required */
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
    </div>
  );
});

function Book({ bookId, isScale, ...props }) {
  console.log("bookId: ", bookId);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [bookId]);

  return (
    <>
      {/* <video className="videobook" src={Video} loop autoPlay type="video/mp4" /> */}
      {/* <video
        controls
        className="videobook"
        src={Video}
        autoPlay
        loop
        // muted
      ></video> */}
      <div className={clsx("book", isScale && "book-scaled")}>
        <div className="FlipBookContainer">
          <HTMLFlipBook
            key={bookId}
            width={350}
            height={1}
            startPage={page}
            style={{ transition: "all 0s ease" }}
            maxShadowOpacity={0.2}
            drawShadow={false}
            showCover={false}
            showPageCorners
          >
            {BOOKS_TEXT[bookId]
              .map((page, index) => [
                <div key={`left-${index}`} className="demoPage left">
                  <div
                    className="text-container"
                    dangerouslySetInnerHTML={{ __html: page.leftPage }}
                  ></div>
                </div>,
                <div key={`right-${index}`} className="demoPage right">
                  <div
                    className="text-container"
                    dangerouslySetInnerHTML={{ __html: page.rightPage }}
                  ></div>
                </div>,
              ])
              .flat()}
          </HTMLFlipBook>
        </div>
      </div>
    </>
  );
}
export default Book;
