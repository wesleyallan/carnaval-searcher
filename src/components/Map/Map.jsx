import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useCarnaval } from '../../context/CarnavalContext';

import * as S from './Map.styles';

const Map = () => {
  const blocks = useCarnaval();
  const position = [-23.5505, -46.6333];

  return (
    <S.Container>
      <MapContainer id="map" center={position} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {blocks.map(({ id, img, name, coordinates }) => {
          return (
            <Marker key={id} position={coordinates}>
              <Popup>
                <S.Image src={img} alt="Banner do bloco" />
                <S.Title>🎉{name}</S.Title>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </S.Container>
  );
};

export default Map;
