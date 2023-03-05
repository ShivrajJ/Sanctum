/**
 * Googlemap 2013.05.14
 */

// クラス
var googlemap = function() {

	// プロパティ
	this.map = null;
	this.gmarker = new Array();
	this.infoWin = null;
	this.dispId = dispId;
	this.pCenter = pCenter;
	this.zoomLv = zoomLv;
	this.isOpenFuki = isOpenFuki;
	this.isDispFuki = isDispFuki;
	this.intDispFuki = intDispFuki;
	this.isPolyline = isPolyline;
	this.isScrollWheel = isScrollWheel;
	this.isMapTypeControl = isMapTypeControl;
	this.points = points;
	this.htmls = htmls;
	this.icons = icons;
	this.lines = lines;
	this.mapType = mapType;
	this.isZoomControl = isZoomControl;
	this.isStreetViewControl = isStreetViewControl;
	this.isPanControl = isPanControl;
	this.ctrlDispPosition = ctrlDispPosition;
	this.isStyle = isStyle;
	this.style = style;

	// マップ表示
	this.setMap = function() {
		// ボタン表示位置
		ctrlPosition = {position:this.ctrlDispPosition};
		// スタイル
		mapStyles = [];
		if( this.isStyle ) {
			mapStyles = this.style;
			var myOptions = {
				zoom: this.zoomLv,
				center: this.pCenter,
				mapTypeId: this.mapType,
				scrollwheel: this.isScrollWheel,
				mapTypeControl: this.isMapTypeControl,
				zoomControl: this.isZoomControl,
				zoomControlOptions: ctrlPosition,
				streetViewControl: this.isStreetViewControl,
				streetViewControlOptions: ctrlPosition,
				panControl: this.isPanControl,
				panControlOptions: ctrlPosition,
				styles: mapStyles
			};
		}
		else {
			var myOptions = {
				zoom: this.zoomLv,
				center: this.pCenter,
				mapTypeId: this.mapType,
				scrollwheel: this.isScrollWheel,
				mapTypeControl: this.isMapTypeControl,
				zoomControl: this.isZoomControl,
				zoomControlOptions: ctrlPosition,
				streetViewControl: this.isStreetViewControl,
				streetViewControlOptions: ctrlPosition,
				panControl: this.isPanControl,
				panControlOptions: ctrlPosition
			};
		}

		this.map = new google.maps.Map(document.getElementById(this.dispId), myOptions);

		// マーカー表示
		for(i = 0; i < this.points.length; i++) {
			this.gmarker[i] = new google.maps.Marker({
				position: this.points[i],
				map: this.map,
				icon: this.icons[i]
			});

			// イベント設定
			if(this.isOpenFuki) {
				this.setFukiClick(this.gmarker[i], this.htmls[i], this.points[i]);
			}
		}

		// 初期吹き出し表示
		if(this.isDispFuki) {
			setFukiMsg(this.gmarker[this.intDispFuki], this.htmls[this.intDispFuki]);
		}

		// ポリライン表示
		if(this.isPolyline) {
			for(i = 0; i < this.lines.length; i++) {
				this.setPolyline(this.lines[i]);
			}
		}
	}

	// 吹き出しメッセージ設定
	var setFukiMsg = function(marker, html) {
		if(this.infoWin) {
			// 吹き出し閉じる
			this.infoWin.close();
			this.infoWin = null;
		}

		this.infoWin = new google.maps.InfoWindow({
			content: html
		});

		// 吹き出し表示
		this.infoWin.open(marker.getMap(), marker);
	}

	// クリックイベント設定
	this.setFukiClick = function(marker, html, point) {
		google.maps.event.addListener(marker, 'click', function(event){
			setFukiMsg(marker, html);
			this.map.panTo(point);
		});
	}

	// アイコンクリック
	this.myclick = function(i) {
		setFukiMsg(this.gmarker[i], this.htmls[i]);
		this.map.panTo(this.points[i]);
	}

	// ポリライン表示
	this.setPolyline = function(line) {
		var rendererOptions = {
			draggable: false,
			preserveViewport:true
		};
		// ラインのオプション
		var polyLineOptions = {
			strokeColor: line['color']
		};
		var directionsDisplay = new google.maps.DirectionsRenderer({
			polylineOptions: {
				strokeColor: line['color'],
				strokeWeight: 4,
				strokeOpacity: 0.6
			}
		});
		directionsDisplay.setOptions({
			suppressMarkers :true,
			suppressInfoWindows: true
		});
		var directionsService = new google.maps.DirectionsService();

		// 中間地点
		arrWays = new Array();

		for(y = 0; y < line['ways'].length; y++) {
			arrWays[y] = {location: line['ways'][y]};
		}

		var request = {
			origin: line['start'],
			destination: line['end'],
			waypoints: arrWays,
			travelMode: google.maps.DirectionsTravelMode.DRIVING,				//ドライビングモード指定（車）
			unitSystem: google.maps.DirectionsUnitSystem.METRIC,					//単位km表示
			optimizeWaypoints: true,																	//最適化された最短距離にする。
			avoidHighways: false,																			//trueで高速道路を使用しない
			avoidTolls: false																					//trueで有料道路を使用しない
		};

		directionsService.route(request, function(response, status){
			if (status == google.maps.DirectionsStatus.OK){
				directionsDisplay.setDirections(response);
			}
		});

		directionsDisplay.setMap(this.map);
	}

	// ズームイン
	this.setZoomIn = function(){
		this.map.setZoom( this.map.getZoom()+1 );
	}

	// ズームアウト
	this.setZoomOut = function(){
		this.map.setZoom( this.map.getZoom()-1 );
	}
}