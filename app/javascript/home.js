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
          </head>
          <body>
              <h1>This is a popup window!</h1>
              <p>Here is some content for the popup.</p>
          </body>
          </html>
      `);
      popup.document.close();
  });
});