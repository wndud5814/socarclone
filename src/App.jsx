import { useEffect, useState } from "react";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

import Header from "./components/Header";

const App = () => {
  const [isHidden, setIsHidden] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY > 2000) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);

    watchScroll();

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <>
      <Header isHidden={isHidden} />
      <A />
      <B />  
      <C />
    </>
  );
};

export default App;
