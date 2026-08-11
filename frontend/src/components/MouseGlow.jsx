
// import { useEffect, useRef } from "react";
// import "../styles/mouseglow.css";

// export default function MouseGlow() {
//   const dotRef = useRef(null);
//   const ringRef = useRef(null);


//   const mouse = useRef({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });

//   const dot = useRef({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });

//   const ring = useRef({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     let animationFrame;

//     const animate = () => {
//       /* -------------------------
//          SMALL DOT
//       ------------------------- */

//       dot.current.x +=
//         (mouse.current.x - dot.current.x) * 0.8;

//       dot.current.y +=
//         (mouse.current.y - dot.current.y) * 0.8;


//       /* -------------------------
//          LARGE MAGNETIC RING
//       ------------------------- */

//       ring.current.x +=
//         (mouse.current.x - ring.current.x) * 0.18;

//       ring.current.y +=
//         (mouse.current.y - ring.current.y) * 0.18;


//       /* -------------------------
//          DOT POSITION
//       ------------------------- */

//       if (dotRef.current) {
//         dotRef.current.style.transform = `
//           translate3d(
//             ${dot.current.x}px,
//             ${dot.current.y}px,
//             0
//           )
//           translate(-50%, -50%)
//         `;
//       }


//       /* -------------------------
//          RING POSITION
//       ------------------------- */

//       if (ringRef.current) {
//         ringRef.current.style.transform = `
//           translate3d(
//             ${ring.current.x}px,
//             ${ring.current.y}px,
//             0
//           )
//           translate(-50%, -50%)
//         `;
//       }


//       animationFrame = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener(
//         "mousemove",
//         handleMouseMove
//       );

//       cancelAnimationFrame(animationFrame);
//     };
//   }, []);

//   return (
//     <>
//       {/* Small cursor */}
//       <div
//         ref={dotRef}
//         className="cursor-dot"
//       />

//       {/* Magnetic glow */}
//       <div
//         ref={ringRef}
//         className="cursor-ring"
//       />
//     </>
//   );
// }


import { useEffect, useRef } from "react";
import "../styles/mouseglow.css";

const STAR_COUNT = 25;

export default function MouseGlow() {
  const dotRef = useRef(null);
  const starsRef = useRef([]);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const dot = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const stars = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // -----------------------------------
    // CREATE STARS
    // -----------------------------------

    const starElements = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement("span");

      star.className = "cursor-star";

      // Random star size
      const size = Math.random() * 3 + 1;

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random animation
      star.style.animationDuration = `${
        Math.random() * 1.5 + 1
      }s`;

      star.style.animationDelay = `${
        Math.random() * 1.5
      }s`;

      document.body.appendChild(star);

      starElements.push(star);

      stars.current.push({
        element: star,

        x: mouse.current.x,
        y: mouse.current.y,

        targetX: mouse.current.x,
        targetY: mouse.current.y,

        // Random distance from cursor
        distance: Math.random() * 50 + 15,

        angle: Math.random() * Math.PI * 2,

        // Different follow speeds
        speed: Math.random() * 0.08 + 0.04,

        // Different orbital speeds
        rotationSpeed:
          (Math.random() - 0.5) * 0.03,
      });
    }

    starsRef.current = starElements;

    // -----------------------------------
    // ANIMATION
    // -----------------------------------

    let animationFrame;

    const animate = () => {
      // -----------------------------------
      // MAIN CURSOR DOT
      // -----------------------------------

      dot.current.x +=
        (mouse.current.x - dot.current.x) * 0.8;

      dot.current.y +=
        (mouse.current.y - dot.current.y) * 0.8;

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

      // -----------------------------------
      // STAR TRAIL
      // -----------------------------------

      stars.current.forEach((star) => {
        star.angle += star.rotationSpeed;

        // Position around cursor
        star.targetX =
          mouse.current.x +
          Math.cos(star.angle) *
            star.distance;

        star.targetY =
          mouse.current.y +
          Math.sin(star.angle) *
            star.distance;

        // Smooth following
        star.x +=
          (star.targetX - star.x) *
          star.speed;

        star.y +=
          (star.targetY - star.y) *
          star.speed;

        star.element.style.transform = `
          translate3d(
            ${star.x}px,
            ${star.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      });

      animationFrame =
        requestAnimationFrame(animate);
    };

    animate();

    // -----------------------------------
    // CLEANUP
    // -----------------------------------

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);

      starElements.forEach((star) => {
        star.remove();
      });

      stars.current = [];
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
    />
  );
}