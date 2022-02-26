import React from "react";
import { Marker } from "react-map-gl";
import PropTypes from "prop-types";
import redMarker from '../../../../assets/images/marker-red.png'
import blueMarker from '../../../../assets/images/marker-blue.png'

const Properties = ({ properties, revenueValue }) =>
  properties.map(( property,index ) => {
    const marker = 
      revenueValue && 
      property.revenue < revenueValue;
    
    return (
      <Marker
        key={index}
        longitude={property.longitude}
        latitude={property.latitude}
      >
        <img src={ marker ? redMarker : blueMarker} height={15} alt=""/>
      </Marker>
    )
  });

Properties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      longitude: PropTypes.number,
      latitude: PropTypes.number,
      revenue: PropTypes.number
    })
  ).isRequired
};

export default Properties;
