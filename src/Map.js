import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow, Polyline } from '@react-google-maps/api';
import "./Map.css"; 

const center = {
  lat: 51.515682,
  lng: -0.070532,
};

const markers = [
  {
    id: 1,
    name: "1",
    image: require("./assets/ZS_Photo1.jpeg"),
    contexts: [
        {
          context:
            "This was training. [Test Image]",
          createdAt: Date.now().toString(),
        },
    ],
    type: "gem",
    position: { lat: 51.517070, lng: -0.071350 },
  },
  {
    id: 2,
    name: "2",
    image: require("./assets/ZS_Photo2.jpeg"),
    contexts: [
      {
        context:
          "Yeah, in this place, because people- they are using drugs, smoking, like drinking cans..like cans and stuff. It’s, like, not good.",
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.517237, lng: -0.071472 },
  },
  {
    id: 3,
    name: "3",
    image: require("./assets/ZS_Photo3.jpeg"),
    contexts: [
      {
        context:
          "Because in this place, the drug dealers [are] coming, they [are] selling drugs. We need to do something about that.",
        createdAt: Date.now().toString(),
      },
    ],
    type: "concern",
    position: { lat: 51.517687, lng: -0.071511 },
  },
  {
    id: 4,
    name: "4",
    image: require("./assets/ZS_Photo4.jpeg"),
    contexts: [
      {
        context:
          `[This is] the day center, and after like three o'clock I'm leaving, this area, basically.
          It's good here, when you're coming. You can, like, do your skills and stuff, training.
          That's why I'm coming here all the time. I want to be a person, not to do nothing,
          basically. Yeah. Dellow is a good place as well.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.517612, lng: -0.071642 },
  },
  {
    id: 5,
    name: "5",
    image: require("./assets/ZS_Photo5.jpeg"),
    contexts: [
      {
        context:
          `This is, like, Founder’s House. I was living, like, in this place in cold weather like
          for homeless people and basically displaced from Salvation Army. Yeah. So they
          provide housing and benefits as well to get, some, they [are] doing like training as
          well.`,
        createdAt: Date.now().toString(),
      },
    ],
    type: "gem",
    position: { lat: 51.517588, lng: -0.068986 },
  },
];

function Map() {
    const [map, setMap] = useState(null);
    const [activeMarker, setActiveMarker] = useState(null);

    useEffect(() => {
        if (map) {
            
        markers.forEach(marker => {
            const googleMarker = new window.google.maps.Marker({
                position: marker.position,
                map: map,
                title: marker.name,
                label: marker.name,
                icon: marker.type === "gem"
                  ? {
                    url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                    scaledSize: new window.google.maps.Size(50, 50),
                  }
                  : {
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    scaledSize: new window.google.maps.Size(50, 50),
                  },
              });
      
              googleMarker.addListener("click", () => {
                setActiveMarker(marker);
              });
            });
        }
    }, [map]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyD18lLqmsJDoSuhoLIhCE03-S1zymtj2eM">
        <GoogleMap
        mapContainerClassName="mapContainer"
        center={center}
        zoom={16}
        onLoad={map => setMap(map)}
        >
        <Polyline path={markers.map((marker) => marker.position)} options={{ strokeColor: "blue", strokeOpacity: 1.0, strokeWeight: 4 }} />

        {activeMarker && (
            <InfoWindow
            position={activeMarker.position}
            onCloseClick={() => {
                setActiveMarker(null);
            }}
            >
            <div>
                <h3>Walk Photo {activeMarker.name}</h3>
                <img className="imageWindow" src={activeMarker.image} alt={activeMarker.name} />
                <p>Transcription: {activeMarker.contexts[0].context}</p>
            </div>
            </InfoWindow>
        )}
        </GoogleMap>
    </LoadScript>
    );
}

export default Map;

