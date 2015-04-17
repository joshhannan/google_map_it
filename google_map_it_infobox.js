(function($) {
	$.fn.google_map_it = function( options ) {
		var settings = $.extend({
			locations:  [
				{ lat: '41.6706', lng: '-71.2783', title: 'Title' }
			]
		}, options );
		var marker_title;
		var latlng;
		var image;
		var markers;
		var marker;
		var i;
		var locations_count;
		function getBaseURL() {
			var url = location.href;  // entire url including querystring - also: window.location.href;
			var baseURL = url.substring(0, url.indexOf('/', 14));

			if (baseURL.indexOf('http://localhost') != -1) {
				// Base Url for localhost
				url = location.href;  // window.location.href;
				var pathname = location.pathname;  // window.location.pathname;
				var index1 = url.indexOf(pathname);
				var index2 = url.indexOf("/", index1 + 1);
				var baseLocalUrl = url.substr(0, index2);
				return baseLocalUrl + "/";
			} else {
				// Root Url for domain name
				return baseURL + "/";
			}
		}
		$(this).each(function() {
			var base_url = getBaseURL();
			var map;
			var bounds = new google.maps.LatLngBounds();
			var mapOptions = {
				zoom: 4,
				maxZoom: 12,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			locations_count = settings.locations.length;
			map = new google.maps.Map( document.getElementById('map'), mapOptions );
			var infowindow = new google.maps.InfoWindow();
			for( i = 0; i < locations_count; i++ ) {
				if( settings.locations[i]['featured'] === "1" ) {
					image = base_url+'images/locations_featured_marker.png';
				} else {
					image = base_url+'images/locations_standard_marker.png';
				}
				marker = new google.maps.Marker({
					position: new google.maps.LatLng( settings.locations[i]['latitude'], settings.locations[i]['longitude'] ),
					icon: image,
					map: map
				});
				bounds.extend(marker.position);
				if( locations_count > 1 ) {
					google.maps.event.addListener(marker, 'click', (function(marker, i) {
						var support = '<div class="supports block">';
						if( settings.locations[i]['indoor'] === "1" ) {
							support += '<div class="'+settings.locations[i]['indoor']+' logo"><img src="/images/nav-aquarium-icon.png" /></div>';
						}
						if( settings.locations[i]['outdoor'] === "1" ) {
							support += '<div class="'+settings.locations[i]['outdoor']+' logo"><img src="/images/nav-pond-icon.png" /></div>';
						}
						if( settings.locations[i]['turtle'] === "1" ) {
							support += '<div class="'+settings.locations[i]['turtle']+' logo"><img src="/images/nav-turtle-icon.png" /></div>';
						}
						support += '</div>';
						var info = '<div class="info"><h3>'+settings.locations[i]['title']+'</h3><p>'+settings.locations[i]['address']+'<br/>'+settings.locations[i]['city']+', '+settings.locations[i]['state']+' '+settings.locations[i]['zip']+'</p><p><strong>P:</strong>'+settings.locations[i]['phone']+'</p><p><strong>H:</strong>'+settings.locations[i]['hours']+'</p><p><a target="_blank" href="'+settings.locations[i]['website']+'">'+settings.locations[i]['website']+'</a></p><div class="directions block"><a target="_blank"href="http://maps.google.com/?q='+settings.locations[i]['address']+' '+settings.locations[i]['city']+', '+settings.locations[i]['state']+' '+settings.locations[i]['zip']+'">Directions</a></div>'+support+'</div>';
						var infobox = new InfoBox({
							content: info,
							disableAutoPan: false,
							maxWidth: 300,
							pixelOffset: new google.maps.Size( 25, -47),
							zIndex: null,
							closeBoxMargin: "-10px -10px 0px 0px",
							boxStyle: {
								background: '#FFFFFF',
								width: '250px',
								maxHeight: '260px'
							},
							infoBoxClearance: new google.maps.Size(1, 1)

						});
						return function() {
							map.panTo(marker.getPosition());
							infobox.setContent( info );
							infobox.open(map, marker);
						};
					})(marker, i));
				} else {
					google.maps.event.addListener(marker, 'click', (function(marker, i) {
						var info = '<div class="small_info"><h3>'+settings.locations[i]['title']+'</h3></div>';
						var infobox = new InfoBox({
							content: info,
							disableAutoPan: false,
							maxWidth: 300,
							pixelOffset: new google.maps.Size( 35, -50),
							zIndex: null,
							boxStyle: {
								background: '#FFFFFF',
								width: '200px'
							},
							infoBoxClearance: new google.maps.Size(1, 1)

						});
						return function() {
							map.panTo(marker.getPosition());
							infobox.setContent( info );
							infobox.open(map, marker);
						};
					})(marker, i));
				}

			}
			map.fitBounds(bounds);
		});
		return this;
	}; //  END GOOGLE MAP IT FUNCTION
}(jQuery));