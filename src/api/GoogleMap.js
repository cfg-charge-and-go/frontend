import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component
 {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter:{
          lat: 51.5072,
          lng: -0.1276
      }
    };
  
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    render() {
      return (
        <Map 
            google={this.props.google}
            zoom={14}
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            center={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng                
            }}
            >
            <Marker position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}/>               
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ("Put your API key Here")
  })(MapContainer)