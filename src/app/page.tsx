import Hero from "../../components/section/Hero";
import HomeData from "../../components/section/HomeData";
import Footer from "../../components/section/Footer";
import Brands from "../../components/section/Brands";

export default function Home() {
  return (
    <>
      <Hero/>
      {/* <a href="./tailwindtest">Click me</a> */}
      <Brands/>
      <HomeData/>
    </>
  );
}