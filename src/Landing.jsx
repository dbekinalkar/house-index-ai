import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";

const Landing = () => {
  const scrollToMain = (e) => {
    e.preventDefault();
    const element = document.getElementById("main");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero scrollToMain={scrollToMain}/>
      <Main id="main" />
      <Footer />
    </>
  );
};

export default Landing;
