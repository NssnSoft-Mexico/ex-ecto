/*global google*/
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './App.css';

import {
  GoogleMap,
  StandaloneSearchBox,
  LoadScript
} from '@react-google-maps/api';

const lib = ['places'];

export default function DGeo() {
	
	let cordenadas = {
		latO: '',
		lngO: '',
	};
	
	const [searchBox, setSearchBox] = useState(null);

	const onPlacesChangedO = () => {
		cordenadas.latO = searchBox.getPlaces()[0].geometry.location.lat();
		cordenadas.lngO = searchBox.getPlaces()[0].geometry.location.lng();
		
		console.log("LatitudOrigen: ", cordenadas.latO);
		console.log("LongitudOrigen: ", cordenadas.lngO);
	}
	const onSBLoad = ref => {
	  setSearchBox(ref);
	};
	return (<LoadScript
		googleMapsApiKey="AIzaSyAJf2dFo6JBXahwKdm-sLd_3TWg5xaKD7Y"
		libraries={lib}
	  >
		  <>
		  	<div className="float">
				<label>Ciudad y Estado:</label>
				<StandaloneSearchBox
				onPlacesChanged={onPlacesChangedO}
				onLoad={onSBLoad}
				>
				<input
					type="text"
					placeholder="Ciudad y Estado"
				/>
				</StandaloneSearchBox>
			</div>
		  </>
		
	  </LoadScript>
	);
}

export { DGeo }; 