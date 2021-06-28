function createMeeting() {

  const ZM_API_KEY = PropertiesService.getScriptProperties().getProperty('ZM_API_KEY');
  const ZM_API_SECRET = PropertiesService.getScriptProperties().getProperty('ZM_API_SECRET');
  const ZM_USER_ID = PropertiesService.getScriptProperties().getProperty('ZM_USER_ID');

  const apiKey = ZM_API_KEY;
  const apiSecret = ZM_API_SECRET;
  const userId = ZM_USER_ID;

  // トークン取得
  const token = getToken(apiKey, apiSecret);

  const startTime = '2021-06-27T11:00:00'; // 末尾Zはつけない（UTCになってしまう！）

  var data = {
    'topic': "リーダー会",　// トピック
    'type': 2, // 
    'start_time': startTime, // 開始日時
    'duration': 60, // 時間
    'timezone': 'Asia/Tokyo', // タイムゾーン
    'settings':{
       'host_video':'true', // ホストビデオ(boolean)
       'participant_video': 'true',　// 参加者ビデオ(boolean)
       'join_before_host': 'false', // ホストより前に参加者がミーティングに参加(boolean)
       'waiting_room':'true' // 待機室(boolean)
     }
  };  
  
  // 新規ミーティング作成
  var content = getMeeting(token, userId, data);

  console.log(content);

}

// プロパティファイルへの設定メソッド
// 新エディタ（デフォルト）ではGUI操作できないため、コードから実行（以前のエディタを使用→GUI操作も可能）
function setScriptProperty() {
  PropertiesService.getScriptProperties().setProperty('ZM_API_KEY', '*********'); // zoom　API管理画面から取得
  PropertiesService.getScriptProperties().setProperty('ZM_USER_ID', '*********'); // curlコマンド等でトークンを元にユーザー情報を取得
  PropertiesService.getScriptProperties().setProperty('ZM_API_SECRET', '**********'); //  // zoom　API管理画面から取得
}     
