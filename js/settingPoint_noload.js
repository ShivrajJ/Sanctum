/**
 * settingPoint 2013.05.14
 */
var points = new Array();
var htmls = new Array();
var icons = new Array();
var lines = new Array();
var style = new Array();

// アイコン01
points[0] = new google.maps.LatLng(35.67557808757867,139.73664408467312);
htmls[0] = 'リズベリオ赤坂';
icons[0] = './images/common/ic_pin.png';

// // アイコン02
// points[1] = new google.maps.LatLng(35.163696,136.908904);
// htmls[1] = '矢場町駅';
// icons[1] = 'images/icon/train.png';

// // アイコン03
// points[2] = new google.maps.LatLng(35.163685,136.90741);
// htmls[2] = 'パルコ';
// icons[2] = 'images/icon/club.png';

/***********
 * start 開始位置
 * end 終了位置
 * color 色
 * ways 中間地点
 */
// // ポリライン01
// lines[0] = new Array();
// lines[0]['start'] = new google.maps.LatLng(35.163696,136.908904);
// lines[0]['end'] = new google.maps.LatLng(35.162453,136.910212);
// lines[0]['color'] = '#ff0000';
// lines[0]['ways'] = new Array();
// lines[0]['ways'] = [new google.maps.LatLng(35.163696,136.908904), new google.maps.LatLng(35.161968,136.912897)];

// // ポリライン02
// lines[1] = new Array();
// lines[1]['start'] = new google.maps.LatLng(35.163696,136.908904);
// lines[1]['end'] = new google.maps.LatLng(35.163685,136.90741);
// lines[1]['color'] = '#000000';
// lines[1]['ways'] = new Array();

/***********
 * 地図スタイル
 * 参照：http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
 */
// style = [ { "featureType": "water", "stylers": [ { "color": "#808080" } ] },{ "featureType": "administrative.country", "stylers": [ { "visibility": "off" } ] },{ } ];
style = [ { "featureType": "all", "stylers": [ { "weight": 0.1 }, { "invert_lightness": true }, { "saturation": -100 } ] } ];