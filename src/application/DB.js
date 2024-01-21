import basePrices from "../components/data/BasePrices.js";

export const getPrice = (id) => {
  const stateId = basePrices.find((item) => item.val === id);

  const basePrice = stateId ? stateId.price : null;

  return basePrice;
};

export const getData = (state) => {
  let stateName = "";
  if (state && state.name) {
    stateName = state.name.replace(/\s/g, "").toLowerCase();
  }

  const housingIndex = (state.year - 1975) * 4;

  const gdpIndex = state.year - 1929;

  // const gdpForecast =  get the "Forecast" value of the object with "gdpIndex"
  // from the file ../components/data/json_forecasted_gdp/${stateName}_gdp.json

  // const housingIndexForecast =  get the "Forecast" value of the object with "housingIndex"
  // from the file ../components/data/json_forecasted_housing/${stateName}.json

  const basePrice = getPrice(state.id);

  return `${state.name} $${basePrice}`;
};
