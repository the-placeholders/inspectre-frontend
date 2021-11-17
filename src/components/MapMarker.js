import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

export default class MapMarker extends Component {

    render() {
        return (
            <Marker position={[this.props.place.latitude, this.props.place.longitude]}>
                <Popup>
                    {/* <img src="https://images.unsplash.com/photo-1610144591825-d5e31490f7c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80" />  */}
                    {/* <br /> */}
                    {this.props.place.location}
                    <br />
                    Latitude: {this.props.place.latitude}
                    <br />
                    Longitude: {this.props.place.longitude}
                </Popup>
            </Marker>
        )
    }
}