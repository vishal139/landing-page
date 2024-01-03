import "./App.css";
import Logo from "../src/assets/provoke_logo.webp";
import Icon from "../src/assets/desktop.6a735a94.svg";
import Chrome from "../src/assets/chrome.png";
import Mobile from "../src/assets/mobile.png";

import { useEffect, useState } from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 102%;
    background: radial-gradient(
      circle at 50% 10%,
      ${({ gradientColor }) => gradientColor} 0%,
      ${({ gradientColorOne }) => gradientColorOne} 20%,
      rgba(0, 0, 0, 0.9) 80%,
      rgba(0, 0, 0, 1) 100%
    );
    pointer-events: none;
  }
`;

function App() {
  const [gradientColor, setGradientColor] = useState("rgba(241, 196, 15, 0.2)");
  const [gradientColorOne, setGradientColorOne] = useState(
    "rgba(241, 196, 15, 0.1)"
  );

  const [counter, setCounter] = useState(1);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetDate = new Date("January 31, 2024 00:00:00").getTime();

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      // clearInterval(intervalId);
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter === 1) {
        setGradientColor("rgba(190, 46, 221, 0.2)");
        setGradientColorOne("rgba(190, 46, 221, 0.1)");
      } else if (counter === 2) {
        setGradientColor("rgba(113, 128, 147, 0.2)");
        setGradientColorOne("rgba(113, 128, 147, 0.1)");
      } else if (counter === 3) {
        setGradientColor("rgba(241, 196, 15, 0.2)");
        setGradientColorOne("rgba(241, 196, 15, 0.1)");
      }
      setCounter((prevCounter) => (prevCounter % 3) + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [counter]);

  useEffect(() => {
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AppContainer
      gradientColor={gradientColor}
      gradientColorOne={gradientColorOne}
      className="App"
    >
      <p className="title">
        for{" "}
        <span>
          <img
            className="Icon"
            src={counter === 1 ? Chrome : counter === 2 ? Mobile : Icon}
            alt="icon"
          />
        </span>{" "}
        & cloud
      </p>
      <p className="subTitle">gaming</p>
      <div className="textContainer">
        <p className="textTitle">Join us on the launch of gartcod by </p>
        <img src={Logo} alt="a" />
      </div>

      <div className="timeCounter">
        <div className="timerBox">
          <div className="counterItem">{countdown.days}</div>
          <p
            className="itemText"
            style={{
              color:
                counter === 1
                  ? `rgb(241, 196, 15)`
                  : counter === 2
                  ? `rgb(190, 46, 221)`
                  : `rgb(113, 128, 147)`,
            }}
          >
            Days
          </p>
        </div>
        <div className="timerBox">
          <div className="counterItem">{countdown.hours}</div>
          <p
            className="itemText"
            style={{
              color:
                counter === 1
                  ? `rgb(241, 196, 15)`
                  : counter === 2
                  ? `rgb(190, 46, 221)`
                  : `rgb(113, 128, 147)`,
            }}
          >
            Hours
          </p>
        </div>
        <div className="timerBox">
          <div className="counterItem">{countdown.minutes}</div>
          <p
            className="itemText"
            style={{
              color:
                counter === 1
                  ? `rgb(241, 196, 15)`
                  : counter === 2
                  ? `rgb(190, 46, 221)`
                  : `rgb(113, 128, 147)`,
            }}
          >
            Minutes
          </p>
        </div>
        <div className="timerBox">
          <div className="counterItem">{countdown.seconds}</div>
          <p
            className="itemText"
            style={{
              color:
                counter === 1
                  ? `rgb(241, 196, 15)`
                  : counter === 2
                  ? `rgb(190, 46, 221)`
                  : `rgb(113, 128, 147)`,
            }}
          >
            Seconds
          </p>
        </div>
      </div>

      <div className="btnContainer">
        <button
          className="btn"
          style={{
            backgroundColor:
              counter === 1
                ? `rgb(241, 196, 15)`
                : counter === 2
                ? `rgb(190, 46, 221)`
                : `rgb(113, 128, 147)`,
          }}
        >
          Claim Ticket
        </button>
      </div>
    </AppContainer>
  );
}

export default App;
