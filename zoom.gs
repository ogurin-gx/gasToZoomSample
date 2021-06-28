
function getToken(apiKey, apiSecret) {

  const header = Utilities.base64Encode(JSON.stringify({
    'alg':'HS256',
    'typ':'JWT'
  }));

  const claimSet = JSON.stringify({
    "iss": apiKey,
    "exp": Date.now() + 3600
  });
  
  const encodeText = header + "." + Utilities.base64Encode(claimSet);
  const signature = Utilities.computeHmacSha256Signature(encodeText, apiSecret);
  const jwtToken = encodeText + "." + Utilities.base64Encode(signature);

  return jwtToken;
}

function getMeeting(token, userId, data) {

  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'headers': {'Authorization' : 'Bearer ' + token},
    // Convert the JavaScript object to a JSON string.
    'payload' : JSON.stringify(data)
  };
  
  try {

    const response = UrlFetchApp.fetch('https://api.zoom.us/v2/users/' + userId + '/meetings', options);
    var content = JSON.parse(response.getContentText('UTF-8'));
    console.log(content['start_time']);
    console.log(content['join_url']);

    return content;

  } catch(e) {
    console.log(e);
  }
}