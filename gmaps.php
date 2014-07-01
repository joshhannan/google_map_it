<script src='https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false'></script>
<script type='text/javascript'>
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	var map;
	var styles = [
		{
			featureType: 'water',
			stylers: [
				{ visibility: 'on' },
				{ color: '#b5cbe4' }
			]
		},
		{
			featureType: 'landscape',
			stylers: [
				{ color: '#efefef' }
			]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [
				{ color: '#83a5b0' }
			]
		},
		{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [
				{ color: '#bdcdd3' }
			]
		},
		{
			featureType: 'road.local',
			elementType: 'geometry',
			stylers: [
				{ color: '#ffffff' }
			]
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [
				{ color: '#e3eed3' }
			]
		},
		{
			featureType: 'administrative',
			stylers: [
				{ visibility: 'on' },
				{ lightness: '33' }
			]
		},
		{
			featureType: 'road'
		},
		{
			featureType: 'poi.park',
			elementType: 'labels',
			stylers: [
				{ visibility: 'on' },
				{ lightness: '20' }
			]
		},
		{
			featureType: 'road',
			stylers: [
				{ lightness: '20' }
			]
		}
	];

	function initialize() {
		directionsDisplay = new google.maps.DirectionsRenderer();

		var coordinates = new google.maps.LatLng();
		var mapOptions = {
			zoom: 10,
			disableDefaultUI: true,
			styles: styles,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
			},
			center: coordinates,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById('google-map-'), mapOptions);
		var marker = new google.maps.Marker({
			position: coordinates,
			map: map,
			title: 'Testing Company'
		});

		var coordinates = new google.maps.LatLng();
			var mapOptions = {
				zoom: 10,
				disableDefaultUI: true,
				styles: styles,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
				},
				center: coordinates,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
			directionsDisplay.setMap(map);
			var myLatLng = new google.maps.LatLng();
			var jewelMarker = new google.maps.Marker({
				position: myLatLng,
				map: map
				icon: image
			});
			directionsDisplay.setPanel(document.getElementById('g-directions'));
			var image = 
	};

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
	google.maps.event.addDomListener(window, 'load', initialize);
</script>