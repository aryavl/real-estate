import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GeoLocation = () => {
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();
    const [error, setError] = useState<string>('');
    const [address, setAddress] = useState('');

    useEffect(() => {
      const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
            },
            (error) => {
              setError(error.message);
            }
          );
        } else {
          setError('Geolocation is not supported by this browser.');
        }
      };
  
      getLocation();
    }, []);
  
    useEffect(() => {
      const getAddress = async () => {
        if (latitude && longitude) {
          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
            );
  console.log(response.data);
  
            const formattedAddress =
              response.data.results[0].formatted_address;
            setAddress(formattedAddress);
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        }
      };
  
      getAddress();
    }, [latitude, longitude]);
  
    return (
      <div>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            {latitude && longitude ? (
              <p>
                Latitude: {latitude}, Longitude: {longitude}
              </p>
            ) : null}
            {address && <p>Address: {address}</p>}
          </div>
        )}
      </div>
    );
}

export default GeoLocation