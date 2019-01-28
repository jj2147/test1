import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Raid from "./Raid";

// const AnyReactComponent = ({ text }) => <div><img style={{width:'40px'}} src={text}/></div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 29.73,
            lng: -95.32
        },
        zoom: 12
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBdwQv-pTAALJXxShEhd3UwS2zQ_UmBBHs" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Raid
                        lat={29.75}
                        lng={-95.38}
                    />
                    <Raid
                        lat={29.7}
                        lng={-95.3}
                    />

                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;