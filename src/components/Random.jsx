import { useEffect } from "react";
import { useState } from "react";

export default function Random() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function random(length) {
    return Math.floor(Math.random() * length);
  }

  function createHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[random(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function createRgbColor() {
    const r = random(256);
    const g = random(256);
    const b = random(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (type === "rgb") createRgbColor();
    else createHexColor();
  }, [type]);

  return (
    <>
      <div
        style={{
          height: "40vw",
          width: "40vw",
          background: color,
          textAlign : "center"
        }}
      >
        <button onClick={type === "hex" ? createHexColor : createRgbColor}>
          Create random Colour{" "}
        </button>
        <button
          onClick={() => {
            setType("rgb");
          }}
        >
          Create RGB Colour
        </button>
        <button
          onClick={() => {
            setType("hex");
          }}
        >
          Create HEX Colour
        </button>
      </div>
      <p><h3>{`The type is ${type} and color is ${color}`}</h3></p>
    </>
  );
}
