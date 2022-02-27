import React, { useState } from "react";
import { Fade } from "react-reveal";
import Button from "./Buttons/Button";
import RightBtn from "./Buttons/RightBtn";

function Section({ car }) {
  return (
    <section
      style={{
        backgroundImage: `url(/images/${car.image})`,
      }}
      className="h-screen w-screen bg-center bg-cover bg-no-repeat"
    >
      <div className="flex flex-col justify-between items-center h-screen">
        <Fade bottom>
          <div className="flex flex-col items-center mt-20 pt-2">
            <h1 className="text-5xl font-semibold mb-2">{car.title}</h1>
            <p>{car.description}</p>
          </div>
        </Fade>
        <div>
          <div id="buttons" className="flex flex-col md:flex-row mb-8 gap-y-2">
            <Fade left>
              <Button>{car.leftBtn}</Button>
            </Fade>
            {car.rightBtn && (
              <Fade right>
                <RightBtn>{car.rightBtn}</RightBtn>
              </Fade>
            )}
          </div>
          {car.rightBtn && (
            <Fade top>
              <div className="flex items-center justify-center mb-2">
                <img
                  style={{
                    animation: "animateDown infinite 1.5s",
                  }}
                  src="/images/down-arrow.svg"
                  className="w-10"
                  alt=""
                />
              </div>
            </Fade>
          )}
        </div>
      </div>
    </section>
  );
}

export default Section;
