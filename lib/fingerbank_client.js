
function FingerbankClient(key){
  var self = this;
  self.key = key;
}

FingerbankClient.prototype.resultFromCurrentUserAgent = function(callback){
  var self = this;
  return self.resultFromUserAgent(navigator.userAgent, callback);
}

FingerbankClient.prototype.resultFromUserAgent = function(userAgent, callback){
  var self = this;
  $.get("http://127.0.0.1:3000/api/v1/combinations/interogate",
    {
      user_agent: userAgent,
      key: self.key,
    },
    function(data){
      console.log(data);
      console.log(new Endpoint(data));
    }
  );
}