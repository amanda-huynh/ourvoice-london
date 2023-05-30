import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 51.5074,
  lng: -0.1278,
};

const markers = [
  {
    id: 1,
    name: "Walk Data 1",
    image: "./ZS_Photo1.jpeg",
    contexts: [
        {
          context:
            "This was training. [Test Image]",
          createdAt: Date.now().toString(),
        },
    ],
    type: "",
    position: { lat: 51.517070, lng: -0.071350 },
  },
  {
    id: 2,
    name: "Walk Data 2",
    image: "./ZS_Photo2.jpeg",
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
    name: "Walk Data 3",
    image: "./ZS_Photo3.jpeg",
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
    name: "Walk Data 4",
    image: "./ZS_Photo4.jpeg",
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
    name: "Walk Data 5",
    image: "./ZS_Photo5.jpeg",
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

    useEffect(() => {
        if (map) {
        markers.forEach(marker => {
            new window.google.maps.Marker({
            position: marker.position,
            map: map,
            title: marker.name,
            });
        });
        }
    }, [map]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyD18lLqmsJDoSuhoLIhCE03-S1zymtj2eM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={map => setMap(map)}
      >
        {markers.map(({ id, name, position }) => (
          <Marker key={id} position={position} label={name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;

