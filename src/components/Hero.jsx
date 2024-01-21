import PropTypes from "prop-types";

const Hero = ({ scrollToMain }) => {
  return (
    <div
      className="hero min-h-screen min-w-screen"
      style={{
        backgroundImage: "url(hero-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content backdrop-blur-lg rounded-lg">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Index AI</h1>
          <p className="mb-5">
            Our website is dedicated to highlighting the escalating issue of
            housing affordability. In an economy where the costs of homes are
            skyrocketing far beyond the pace of average earnings, achieving
            homeownership is becoming a distant dream for many. We use reliable
            data from the Federal Reserve Economic Data (FRED) to bring this
            critical issue into focus. Utilizing advanced time series
            forecasting, we analyze trends and project future housing market
            scenarios, offering a deeper understanding of what lies ahead.
            Through our platform, we illustrate the widening gap between income
            and home prices, providing an eye-opening perspective on the
            economic barriers faced by potential homebuyers. Our aim is to shed
            light on this growing challenge, offering clear, data-driven
            insights to foster awareness and understanding of what it truly
            takes to own a home in today's market.
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
