(function($) {
	$.fn.google_map_it = function( options ) {

		var object = $(this);

		var settings = $.extend({
			address: "'1330 Pine Street, Philadelphia, PA 19107'",
			coordinates: '39.945259, -75.164128',
			zoom: 10,
			directions: 'no'
		}, options );

		object.each(function() {
			/*
			var directionsDisplay;
			var directionsService = new google.maps.DirectionsService();
			*/
			var map;

			function initialize() {
				directionsDisplay = new google.maps.DirectionsRenderer();
				var geoLocation = "'"+settings.coordinates+"'";
				console.log(geoLocation);
				var coordinates = new google.maps.LatLng(geoLocation);
				var mapOptions = {
					zoom: 10,
					disableDefaultUI: true,
					mapTypeControlOptions: {
						style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
					},
					center: coordinates,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
				var marker = new google.maps.Marker({
					position: coordinates,
					map: map,
					title: 'Testing Company'
				});
				directionsDisplay.setPanel(document.getElementById('g-directions'));
			}

			/*
			function calcRoute() {
				var start = document.getElementById('start_address').value;
				var end = end_address;
				var request = {
					origin: start,
					destination: end,
					travelMode: google.maps.DirectionsTravelMode.DRIVING
				};
				directionsService.route(request, function(response, status) {
					if (status == google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(response);
					}
				});
			}
			*/
			google.maps.event.addDomListener(window, 'load', initialize);
		});

		return this;

	}; //  END GOOGLE_MAP_IT FUNCTION
}(jQuery));