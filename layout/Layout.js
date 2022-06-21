import React, { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container, Progressbar, ScrollPath } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onScroll = () =>
      setHeight((window.pageYOffset / window.innerHeight) * 19);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Container>
      <Header />
      <Progressbar id="progress" style={{ height: `${height}%` }} />
      <ScrollPath />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
