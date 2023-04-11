import axios from "axios";
type Props = {};
const FETCH_URL = async () => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=39701eab320b46789b954847230904&q=${ci}&aqi=no`
  );
  return response.data;
};

export default FETCH_URL;
