"use client";
import C2S from "canvas2svg";
import { useEffect, useRef } from "react";

const SinCurve = (props: { className?: string, lineWidth?: number, length?: number, amplitude?: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = caluclateSVG({
      canvasSize: { width: 1000, height: 20 },
      amplitude: props.amplitude ?? 10,
      length: props.length ?? 12,
      phase: 0,

      lineWidth: props.lineWidth ?? 4
    });
    if (props.className) {
      svg.classList.add(...(props.className ?? "").split(' '));
    }
    if (ref.current) ref.current.appendChild(svg);
    return () => svg.remove();
  }, []);

  return <div ref={ref}></div>;
};

function caluclateSVG(options: {
  canvasSize: { width: number; height: number };
  amplitude: number;
  length: number;
  phase: number;

  lineWidth: number;
}): SVGElement {
  let context = new C2S(options.canvasSize.width, options.canvasSize.height);

  const width = options.canvasSize.width - 20;
  const height = options.canvasSize.height;

  context.beginPath();
  context.lineWidth = options.lineWidth;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = "#0002";

  var x = options.phase;
  var y = 0;
  var amplitude = options.amplitude;
  var frequency = options.length;

  while (x < width) {
    y = height / 2 + amplitude * Math.sin(x / frequency);
    context.lineTo(x, y);
    x = x + 1;
  }
  context.stroke();

  // var mySerializedSVG = context.getSerializedSvg();

  var svg = context.getSvg() as SVGElement;
  svg.setAttribute(
    "viewBox",
    `0 0 ${options.canvasSize.width} ${options.canvasSize.height}`
  );
  return svg;
}

export default SinCurve;
