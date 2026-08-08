
import { useEffect, useRef } from "react";
import "../styles/mouseglow.css";

export default function MouseGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);


  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const dot = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const ring = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;

    const animate = () => {
      /* -------------------------
         SMALL DOT
      ------------------------- */

      dot.current.x +=
        (mouse.current.x - dot.current.x) * 0.8;

      dot.current.y +=
        (mouse.current.y - dot.current.y) * 0.8;


      /* -------------------------
         LARGE MAGNETIC RING
      ------------------------- */

      ring.current.x +=
        (mouse.current.x - ring.current.x) * 0.18;

      ring.current.y +=
        (mouse.current.y - ring.current.y) * 0.18;


      /* -------------------------
         DOT POSITION
      ------------------------- */

      if (dotRef.current) {
        dotRef.current.style.transform = `
          translate3d(
            ${dot.current.x}px,
            ${dot.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }


      /* -------------------------
         RING POSITION
      ------------------------- */

      if (ringRef.current) {
        ringRef.current.style.transform = `
          translate3d(
            ${ring.current.x}px,
            ${ring.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }


      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Small cursor */}
      <div
        ref={dotRef}
        className="cursor-dot"
      />

      {/* Magnetic glow */}
      <div
        ref={ringRef}
        className="cursor-ring"
      />
    </>
  );
}