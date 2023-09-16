import { useState, useEffect } from "react";

export default function Backgroound() {
//   const matches = useMediaQuery("(max-width: 768px)");

  const [scale, setScale] = useState(13);
  const [rotate, setRotate] = useState(300);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Calculate the scale factor based on the scroll position
      const newScale = 13 - scrollPosition * 0.004; // Adjust the factor as needed
      const newRotate = 300 - scrollPosition * 0.1;
      // Limit the scale to a minimum and maximum value if desired
      const minScale = 2;
      const maxScale = 18; // Adjust the maximum scale as needed

      if (newScale >= minScale && newScale <= maxScale) {
        setScale(newScale);
      }
      setRotate(newRotate);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div
        className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-[-2] bg-white"
        style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
      >
        <div className="md:h-5/6 h-3/6 aspect-square grid grid-cols-3 grid-rows-3">
          <div className="h-full w-full">
            <div className="blob blob-1"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-2"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-3"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-4"></div>
          </div>
          <div className="h-full w-full bg-white grid grid-cols-3 grid-rows-3">
            <div className="h-full w-full">
              <div className="blob blob-1"></div>
            </div>
            <div className="h-full w-full">
              <div className="blob blob-2"></div>
            </div>
            <div className="h-full w-full">
              <div className="blob blob-3"></div>
            </div>
            <div className="h-full w-full">
              <div className="blob blob-4"></div>
            </div>
            <div className="h-full w-full"></div>
            <div className="h-full w-full">
              <div className="blob blob-1"></div>
            </div>
            <div className="h-full w-full">
              <div className="blob blob-2"></div>
            </div>
            <div className="h-full w-full">
              <div className="blob blob-3"></div>
            </div>
            <div className="h-full w-full">
              <div className="blob blob-4"></div>
            </div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-1"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-2"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-3"></div>
          </div>
          <div className="h-full w-full">
            <div className="blob blob-4"></div>
          </div>
        </div>
      </div>
  );
}
