osm.markers.addPoint = function () {
	osm.map.on('click', osm.markers.createPoint);
	$('markerbutton').className += ' map-feature-button-pressed';
	$('map').style.cursor = 'crosshair';
}
osm.markers.createPoint = function(e) {
	var marker = new L.Marker(e.latlng);
	osm.map.addLayer(marker);
	osm.map.off('click', osm.markers.createPoint); 
	$('markerbutton').className = 'map-feature-button';
	$('map').style.cursor='';
	
	var url = osm.map.permalink._href.getAttribute('href');
	url = url.replace(/lat=\d*(.?\d*)/, 'lat='+e.latlng.lat);
	url = url.replace(/lon=\d*(.?\d*)/, 'lon='+e.latlng.lng);
	url += '&marker=1';
	//http://openstreetmap.ru/#layer=Mapnik&zoom=7&lat=48.305&lon=27.11&marker=1
	marker.bindPopup('<a href="'+url+'">Ссылка на маркер</a>');
}
