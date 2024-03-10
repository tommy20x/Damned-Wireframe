import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  PlasmicHomepage,
  DefaultHomepageProps,
} from "./plasmic/the_damned_wireframe_v_1/PlasmicHomepage";
import "./Homepage.css";
import useWindowSize from "../hooks/useWindowSize";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { setActiveMenubutton } from "../redux/action";

export interface HomepageProps extends DefaultHomepageProps {}

const buttonNames = [
  'logo',
  'lore',
  'roadmap',
  'contests',
  'events',
  'void',
  'throne',
  'faq',
  'team',
  'contact',
]

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState<number>(0);
  const { height } = useWindowSize();

  const handleScrollEvent = () => {
    setScroll(Math.max(window.scrollY, 0));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    const elements = document.getElementsByClassName("section");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as any;
      element.style.zIndex = -1 - i;
    }
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    const h = height * 4;

    const elements = document.getElementsByClassName("section");
    const index = Math.floor(scroll / h);
    /*for (let i = 0; i < elements.length; i++) {
      if (i !== index) {
        const element = elements[i] as any;
        element.style.opacity = `${0}`;
      }
    }*/
    if (index >= 0 && index < elements.length) {
      const position = (scroll % h) / h;
      if (position >= 0.2) {
        if (index >= 1) {
          const prev = elements[index - 1] as any;
          prev.style.opacity = `${0}`;
        }
      }

      const element = elements[index] as any;
      const scale = (position > 0.1) ? Math.min(1 + position - 0.1, 1.85) : 1;
      element.style.transform = `scale(${scale}) translate3d(0, 0, 0)`;

      const opacity = (position >= 0.5) ? ((1 - position) / 0.5) : 1;
      element.style.opacity = `${opacity}`;
    }

    if (index >= 0 && index < buttonNames.length) {
      const buttonName = buttonNames[index];
      dispatch(setActiveMenubutton(buttonName));
    }
  }, [scroll, height, dispatch]);

  return (
    <div className="container">
      <div className="scene">
        <PlasmicHomepage root={{ ref }} {...props} />
        <div className="section">
          <img src="/images/branding/forest.png" alt="Leaves Entrance" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Lore" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Roadmap" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Limbo" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Lust" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Gluttony" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Greed" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Anger" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Heresy" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Violence" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Fraud" />
        </div>
        <div className="section">
          <img src="/images/branding/forest.png" alt="Team" />
        </div>
      </div>
    </div>
  );
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
