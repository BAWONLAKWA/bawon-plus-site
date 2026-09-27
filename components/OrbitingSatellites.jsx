import React from "react";

/**
 * Adapted from Magic UI's OrbitingCircles component (MIT).
 * Source commit: d7207e5692d14c00dceafa8488d6d01f197fa0e4.
 * See docs/THIRD_PARTY_NOTICES.md.
 */
export default function OrbitingSatellites({ children, radius = "145px", duration = 18, reverse = false, className = "" }) {
  const items = React.Children.toArray(children);
  return <>{items.map((child, index) => {
    const angle = (360 / items.length) * index;
    return <div key={index} className={`bawon-orbit-satellite ${reverse ? "bawon-orbit-reverse" : ""} ${className}`} style={{ "--orbit-duration": `${duration}s`, "--orbit-radius": radius, "--orbit-angle": `${angle}deg` }}>{child}</div>;
  })}</>;
}
