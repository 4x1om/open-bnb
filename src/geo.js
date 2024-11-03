import axios from 'axios';

const getCoordinatesFromAddress = async (address) => {
  try {
    const apiKey = 'AIzaSyDIAO7EIOS6t0iiVU52hpLxYpIU8Uem5n8'; // Replace with your API key
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
    );

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return [ location.lat, location.lng ];
    } else {
      console.error('Geocoding error:', response.data.status);
      return [0, 0];
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    return [0, 0];
  }
};

export default getCoordinatesFromAddress;
