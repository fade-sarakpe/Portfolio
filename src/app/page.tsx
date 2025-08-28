
import Header from "@/components/layout/header/Header";
import { Hero, About, Skills } from '@/sections/Home/index';
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Skills />
    </Fragment>
  );
}
