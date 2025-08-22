import Header from "@/components/layout/header/Header";
import About from "@/sections/Home/About/About";
import Hero from "@/sections/Home/Hero/Hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
    </Fragment>
  );
}
