# gasToZoomSample
gasからzoom APIを呼び出すサンプル

※以下はJWTを使用してAPIアクセスする方法
（他のアクセス方法としてはOAuthがある)

①zoom MarketPlaceからJWTアプリ作成
  https://marketplace.zoom.us/

    「Develop」→「Build App」
    「Choose your app type」で「JWT」を選択→「Create」
    基本情報を入力
    作成したアプリから「App Credentials」にアクセスし以下の情報を取得
      「API Key」　
      「API Secret」
      「JWT Token」

②ユーザーIDを取得
   curl -H 'Authorization: Bearer {{JWT Token}}' https://api.zoom.us/v2/users
    
  ※Windowsならダブルコート（Macならシングルコートらしい）
  
  正常に終了した場合以下のようなレスポンスが返却されるので、「users.id」を取得（これがユーザーID）
  
    {
    "page_count":1,
    "page_number":1,
    "page_size":30,
    "total_records":1,
    "next_page_token":"",
    "users":[
        {
            "id":"",
            "first_name":"",
            "last_name":"",
            "email":"",
            "type":1,
            "pmi":,
            "timezone":"Asia/Tokyo",
            "verified":1,
            "dept":"",
            "created_at":"",
            "last_login_time":"",
            "last_client_version":"5.4.59784.1220(win)",
            "language":"jp-JP",
            "phone_number":"",
            "status":"active",
            "role_id":"0"
          }
    ]}

③実装
  コードからスクリプトプロパティに①②で取得した「API KEY」、「API SECRET」、「USER ID」を登録
  （GAS旧エディタを開いてGUIで登録しても良い）
