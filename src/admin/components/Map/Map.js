import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  //   Marker,
  //   Popup,
  Polyline,
  FeatureGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Card from "@material-ui/core/Card";
import "./Map.scss";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ style, zoom, position }) => {
  const [positionData, setPositionData] = useState(
    position || [
      [56.6758328268945, -4.03601769647726],
      [56.6753865835736, -4.03583038137853],
      [56.6735618299578, -4.03614000315429],
      [56.6726922276694, -4.03711323311608],
      [56.6708156570976, -4.03921535478461],
      [56.668930361342, -4.04184722532733],
      [56.668213511889, -4.04446052766014],
      [56.6682858833434, -4.04552528394144],
      [56.6678413316366, -4.04660281552745],
      [56.6661616045966, -4.04765411258453],
      [56.6661461800892, -4.04859165516911],
      [56.6661682564118, -4.04998002402942],
      [56.6652399416136, -4.05041918562081],
      [56.6647376925656, -4.05226859370801],
      [56.6650414290397, -4.0542842076448],
      [56.6654239126298, -4.05561057219045],
      [56.6655323240078, -4.05720761852072],
      [56.6647987798379, -4.05945231429954],
      [56.6648404813131, -4.06100490639477],
      [56.6639578590415, -4.06275177865564],
      [56.6639178489245, -4.06381031031149],
      [56.6640682068479, -4.0642265010295],
      [56.6636317367161, -4.0661608680014],
      [56.6635678988414, -4.06729967594798],
      [56.6645325456174, -4.07008594317652],
      [56.6646271433996, -4.07115187088159],
      [56.6648863100754, -4.07177806089648],
      [56.6653774369754, -4.07331456263909],
      [56.6656332229853, -4.07549094973673],
      [56.6654706790411, -4.07715475708222],
      [56.6658433607951, -4.0803983938441],
      [56.6657085935658, -4.08308369800892],
      [56.6656913596524, -4.08679545454817],
      [56.6656592305536, -4.08871123027875],
      [56.6654891203157, -4.08947699433228],
      [56.6655907727544, -4.09278733564568],
      [56.6654648415451, -4.09359632994024],
      [56.6657530084886, -4.09516268121721],
      [56.6661261281559, -4.09701937330206],
      [56.666583500041, -4.09920718895852],
      [56.6668895070955, -4.10013813805868],
      [56.6665747421354, -4.09919364584093],
      [56.6661293622529, -4.09704076876584],
      [56.665744414777, -4.09513935667372],
      [56.6654684327018, -4.09359652912738],
      [56.6655899846037, -4.09278076411384],
      [56.6654874068318, -4.08947200362192],
      [56.6656509315738, -4.08872382671289],
      [56.6656839627926, -4.0867542466085],
      [56.6657100915772, -4.08304787757306],
      [56.6658488306812, -4.08033994461078],
      [56.6654564502891, -4.07714581434348],
      [56.6656362146319, -4.07541930829843],
      [56.66539109407, -4.07330388920503],
      [56.66488500289, -4.07174861460556],
      [56.6646431682058, -4.07116090969098],
      [56.6645318918242, -4.0700712201935],
      [56.6635714359081, -4.0673031333756],
      [56.6636194380499, -4.0661438762168],
      [56.6640754433675, -4.0642236329916],
      [56.6639243498078, -4.06379761073934],
      [56.6639699420457, -4.06278181269763],
      [56.6648409671923, -4.06097555849278],
      [56.6648155145236, -4.05947281026543],
      [56.6655432055018, -4.05720168380928],
      [56.6654471749405, -4.05561673483686],
      [56.6650316507914, -4.05422329450664],
      [56.6647481060832, -4.05223652177122],
      [56.6652459193012, -4.05038360795913],
      [56.6661662610513, -4.04993748455135],
      [56.6661524647914, -4.04859199626553],
      [56.6661683452242, -4.04762673485601],
      [56.6678603197906, -4.04659568496954],
      [56.6682959867437, -4.04545728516469],
      [56.6682195414525, -4.04442168501949],
      [56.6689449136366, -4.0418365880427],
      [56.670828333406, -4.0392095110979],
      [56.6735601676694, -4.03613175205858],
      [56.6753837567767, -4.03583839065357],
      [56.675826302125, -4.03603203579921],
    ]
  );
  const [center, setCenter] = useState(
    positionData[Math.round((positionData.length - 1) / 2)]
  );

  const [zoomLevel, setZoomLevel] = useState(zoom || 13);
  return (
    <Card className="map" style={style} id="mapContainer">
      <MapContainer
        style={{ height: "100%", minHeight: "100%" }}
        center={center}
        zoom={zoomLevel}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={center}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <FeatureGroup>
          {positionData && positionData.length && (
            <Polyline positions={positionData} color="#4F7ECB" weight={5} />
          )}
        </FeatureGroup>
      </MapContainer>
    </Card>
  );
};

export default Map;
