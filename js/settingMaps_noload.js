/**
 * settingMaps 2013.05.14
 * リファレンス参照（https://developers.google.com/maps/documentation/javascript/reference?hl=ja）
 */
// マップを挿入するタグのID
var dispId = "map";

// 中央座標
var pCenter = new google.maps.LatLng(35.67557808757867,139.73664408467312);

// 地図タイプ
var mapType  = google.maps.MapTypeId.ROADMAP;

// ズームレベル
var zoomLv = 18;

// ズームレベルコントロール表示(true/false)
var isZoomControl = true;

// ストリートビューコントロール表示(true/false)
var isStreetViewControl = true;

// 移動コントロール表示(true/false)
var isPanControl = true;

// マウスホイール有効無効(true/false)
var isScrollWheel = false;

// マップタイプ切り替えボタン表示(true/false)
var isMapTypeControl = true;

// 各コントロール表示位置
var ctrlDispPosition = google.maps.ControlPosition.LEFT_TOP;

// 吹き出し表示(true/false)
var isOpenFuki = true;

// 初期吹き出し表示(true/false)
var isDispFuki = false;

// 初期吹き出しアイコン
var intDispFuki = 0;

// ポリライン表示(true/false)
var isPolyline = false;

// 地図スタイル使用(true/false)
var isStyle = true;

// 実行
maps = new googlemap();
maps.setMap();