import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try scrolling the window first
    window.scrollTo(0, 0);

    // Then also scroll a known scroll container if you have one
    const scrollable = document.querySelector(".main-content"); // <-- update this selector
    if (scrollable) {
      scrollable.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
