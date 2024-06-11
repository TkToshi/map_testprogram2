//= require posts

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('showPopupButton').addEventListener('click', function() {
      // ポップアップウィンドウのサイズを設定
      var width = 400;
      var height = 300;
      var left = (screen.width - width) / 2;
      var top = (screen.height - height) / 2;

      // ポップアップウィンドウを開く
      var popup = window.open('', 'popupWindow', 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top);

      // ポップアップウィンドウにコンテンツを追加
      popup.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Popup Window</title>
          <style>
              #map {
                  height: 100%;
                  width: 100%;
              }
              html, body {
                  height: 100%;
                  margin: 0;
                  padding: 0;
              }
          </style>
          <script>

          function initMap() {
            if (typeof window.MyApp === 'undefined' || typeof window.MyApp.postLatitude === 'undefined' || typeof window.MyApp.postLongitude === 'undefined') {
                console.error("Latitude or longitude not defined in global scope.");
                return;
            }

            // グローバル変数として定義されたpostLatitudeとpostLongitudeを使用
            var latitude = parseFloat(window.MyApp.postLatitude);
            var longitude = parseFloat(window.MyApp.postLongitude);
        
            console.log("Latitude in JS:", latitude);
            console.log("Longitude in JS:", longitude);

            if (isNaN(latitude) || isNaN(longitude)) {
                console.error("Invalid latitude or longitude values.");
                return;
            }
        
            var mapOptions = {
                center: { lat: latitude, lng: longitude },
                zoom: 12 // 適切なズームレベルを設定
            };
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);

            // マーカーを追加する
            var marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map
            });
        }
          </script>
          <script src="https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap" async defer></script>
      </head>
      <body>
          <h2>Location Preview</h2>
          <div id="map" style="height: 500px; width: 100%;"></div>
      </body>
      </html>
  `);
      popup.document.close();
  });
});

