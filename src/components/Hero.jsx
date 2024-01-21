import PropTypes from "prop-types";

const Hero = ({ scrollToMain }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(hero-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content backdrop-blur-lg rounded-lg">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Index AI
          </h1>
          <p className="mb-5">
            
          </p>
          <button className="btn btn-primary" onClick={scrollToMain}>
            Check it out!
          </button>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  scrollToMain: PropTypes.func.isRequired,
};

export default Hero;
