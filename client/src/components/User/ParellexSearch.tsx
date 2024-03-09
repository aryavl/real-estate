import {gsap} from "gsap";
import React from "react";

const ParellexSearch = () => {
    

gsap.to('#layer-1', {
    y:-100,
    zIndex:0,
    scrollTrigger:{
      trigger:".extra-content",
      scrub:0.3
    }
  })
  gsap.to('#layer-2', {
    y:-180,
    zIndex:0,
    scrollTrigger:{
      trigger:".extra-content",
      scrub:0.3
    }
  })
  
  gsap.to('#layer-3', {
    y:-250,
    zIndex:0,
    scrollTrigger:{
      trigger:".extra-content",
      scrub:0.3
    }
  })
  
  gsap.to('#layer-4', {
    y:-350,
    zIndex:0,
    scrollTrigger:{
      trigger:".extra-content",
      scrub:0.3
    }
  })
  return (
    <>
      <div className="parallax-imgs">
  
  <img src="https://raw.githubusercontent.com/Ooblek/parallax/master/svgs/Layer%203.png" className="layer" id="layer-1" />
<img 
className="layer"       src="https://raw.githubusercontent.com/Ooblek/parallax/master/svgs/Layer%20.png" id="layer-2" />



<img src="https://raw.githubusercontent.com/Ooblek/parallax/master/svgs/Layer%202.png" id="layer-3" className="layer"/>
<img 
className="layer"  src="https://raw.githubusercontent.com/Ooblek/parallax/master/svgs/Layer%201.png" id="layer-4" />

<img 
className="layer"  src="https://raw.githubusercontent.com/Ooblek/parallax/master/svgs/Layer%205.png" id="layer-5" />
</div>

<div className="scroll-indicator">
<h1>Scroll ! (Looks best in Full Page View)</h1>
</div>

<div className="extra-content">
<h1>Of course, you should be using better images :P </h1>
<br/>
<p>Leave a  if this helped ^_^ </p>

</div>
    </>
  );
};

export default ParellexSearch;
