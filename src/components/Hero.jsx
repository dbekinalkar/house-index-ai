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
            Our website is committed to examining the challenges of housing
            affordability with reliable data from the Federal Reserve Economic
            Data (FRED). As home prices rise significantly faster than incomes,
            owning a home is becoming increasingly difficult for many people. We
            employ time series forecasting to analyze and predict future trends
            in the housing market. Our approach involves comparing real estate
            prices with GDP per capita. From this analysis, we calculate the
            number of months required to purchase a house—if one could save
            their entire income for this purpose. Our platform clearly shows the
            growing gap between incomes and housing prices, offering a clear
            view of the economic challenges potential homeowners face. Our goal
            is to present this important issue through clear, data-driven
            insights, helping to build awareness of the realities of owning a
            home in today's economic environment.
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
