import React, { Component } from 'react'
import { LatLng } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import MapMarker from './MapMarker';

export default class HauntedMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: this.props.hauntedPlaces[0].city_latitude,
            lon: this.props.hauntedPlaces[0].city_longitude,
            markers: [],
            notNull: this.props.hauntedPlaces.filter(place => place.latitude != null)
        }
    }

    componentDidMount() {
        let positions = this.props.hauntedPlaces.map(place => {
            if (place.latitude != null && place.longitude != null) {
                return new LatLng(place.latitude, place.longitude)
            }
        }).filter(coor => coor != undefined);
        console.log(positions);
        this.setState({ markers: positions });
    }

    render() {
        return (
            <MapContainer center={[this.state.lat, this.state.lon]} zoom={10} scrollWheelZoom={false} style={{ width: '80%', height: '600px' }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.state.notNull.map((place) => <MapMarker place={place}/>)}
            </MapContainer>
        )
    }
}