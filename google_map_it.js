(function($) {
	$.fn.google_map_it = function( options ) {
		var settings = $.extend({
			locations:  [
				{ lat: '41.6706', lng: '-71.2783', title: 'Title' }
			]
		}, options );
		var marker_title;
		var latlng;
		var image = '/images/map_marker.png';
		var markers;
		var marker;
		var i;
		var locations_count;
		var styles = [{'featureType':'landscape','stylers':[{'saturation':-100},{'lightness':65},{'visibility':'on'}]},{'featureType':'poi','stylers':[{'saturation':-100},{'lightness':51},{'visibility':'simplified'}]},{'featureType':'road.highway','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'road.arterial','stylers':[{'saturation':-100},{'lightness':30},{'visibility':'on'}]},{'featureType':'road.local','stylers':[{'saturation':-100},{'lightness':40},{'visibility':'on'}]},{'featureType':'transit','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'administrative.province','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':-25},{'saturation':-100}]},{'featureType':'water','elementType':'geometry','stylers':[{'hue':'#ffff00'},{'lightness':-25},{'saturation':-97}]}];
		$(this).each(function() {
			var map;
			var bounds = new google.maps.LatLngBounds();
			var mapOptions = {
				zoom: 4,
				styles: styles,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			locations_count = settings.locations.length;
			console.log(locations_count);
			map = new google.maps.Map( document.getElementById('google-map'), mapOptions );
			var infowindow = new google.maps.InfoWindow();
			for( i = 0; i < locations_count; i++ ) {
				marker = new google.maps.Marker({
					position: new google.maps.LatLng( settings.locations[i]['lat'], settings.locations[i]['lng'] ),
					map: map
				});
				bounds.extend(marker.position);
				google.maps.event.addListener(marker, 'click', (function(marker, i) {
					var info = '<h3>'+settings.locations[i]['title']+'</h3>';
					return function() {
						infowindow.setContent( info );
						infowindow.open(map, marker);
					};
				})(marker, i));
			}
			map.fitBounds(bounds);
		});
		return this;
	}; //  END GOOGLE MAP IT FUNCTION
}(jQuery));