import { useState, useEffect } from "react";

export function HooksAdvanced(test) {
  const [width, setWidth] = useState(window.innerWidth);
  const [clicks, setClicks] = useState(0);
  const [keyPressed, setKeyPressed] = useState(null);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    const screenClicked = () => setClicks(clicks + 1);
    const whatKeyPressed = e => setKeyPressed(e.key);

    window.addEventListener("resize", handleResize);
    window.addEventListener("click", screenClicked);
    window.addEventListener("keydown", whatKeyPressed);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", screenClicked);
      window.removeEventListener("keydown", whatKeyPressed);
    };
  });

  useEffect(() => {
    const status = () => {
      console.log(
        "Heroes are made by the path they choose, not the powers they are graced with. -Iron Man"
      );
      setIsOnline(true);
    };
    status();
  }, []);

  return [width, clicks, keyPressed, isOnline, test];
}
