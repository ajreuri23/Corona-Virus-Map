import axios from 'axios'

const getCountries = () => {
  return axios.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations").then(
    res => {
       return res.data.locations;
    }
  );
};

const getCoordinates = async() => {
    let result = await getCountries()
    return result.map(data => data.coordinates);
}

export { getCountries, getCoordinates };
