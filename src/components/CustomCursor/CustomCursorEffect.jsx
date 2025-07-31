import React, { useEffect, useState } from "react";

const arrowPath = "M2 0 L14 12 L10 12 L10 20 L6 20 L6 12 L2 12 Z";
const handPath =
  "M6 0 C4 0 3 2 3 4 L3 14 C3 16 5 18 7 18 C9 18 11 16 11 14 L11 6 C11 4 9 2 7 2 C6 2 6 0 6 0 Z";

const CustomCursorEffect = ({ type = "arrow" }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    pointerEvents: "none",
    width: "24px",
    height: "24px",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    userSelect: "none",
  };

  const commonPathProps = {
    fill: "#a0522d", // sienna brown base color
    stroke: "#5c2e0c", // dark brown stroke
    strokeWidth: 1.5,
    filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.3))",
  };

  return (
    <>
      <style>{`
        body, * {
          cursor: none !important;
        }
      `}</style>
      <svg
        style={cursorStyle}
        viewBox="0 0 16 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {type === "arrow" && <path d={arrowPath} {...commonPathProps} />}
        {type === "hand" && <path d={handPath} {...commonPathProps} />}
      </svg>
    </>
  );
};

export default CustomCursorEffect;
