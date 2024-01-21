import basePrices from "../components/data/BasePrices.js";
import forecastedHousing from "../components/data/forecastedHousing.js";
import forecastedGDP from "../components/data/forecastedGDP.js";

export const getPrice = (id) => {
  const stateId = basePrices.find((item) => item.val === id);

  const basePrice = stateId ? stateId.price : null;

  return basePrice;
};

export const getHousingForecast = (name, index) => {
  const housingData = forecastedHousing[name];
  return housingData && housingData[index] ? housingData[index].Forecast : null;
};

export const getGdpForecast = (name, index) => {
  const gdpData = forecastedGDP[name];
  return gdpData && gdpData[index] ? gdpData[index].Forecast : null;
};

export const getData = (state) => {
  const basePrice = getPrice(state.id);

  let stateName = "";
  if (state && state.name) {
    stateName = state.name.replace(/\s/g, "").toLowerCase();

    const housingIndex = (state.year - 1975) * 4;

    const gdpIndex = state.year - 1929;

    const housingIndexForecast = getHousingForecast(stateName, housingIndex);

    const gdpIndexForecast = getGdpForecast(stateName, gdpIndex);

    if (housingIndexForecast && gdpIndexForecast) {
      const adjustedPrice = basePrice * (housingIndexForecast / 100);

      const months = Math.ceil((adjustedPrice / gdpIndexForecast) * 12);

      return months;
    }
  }

  return undefined;
};
