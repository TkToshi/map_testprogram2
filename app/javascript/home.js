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
                  var mapOptions = {
                      center: { lat: 35.6895, lng: 139.6917 },
                      zoom: 8
                  };
                  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
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

