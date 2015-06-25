var Smartliving = {
    Authorization: Authorization
};

function Authorization(http, apiUrl, apiClientId) {
    this.http = http;
    this.apiUrl = apiUrl;
    this.apiClientId = apiClientId;
}

Authorization.prototype.login = function(data) {

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    var postData = 'grant_type=password&username=' + encodeURIComponent(data.username) + '&password=' + encodeURIComponent(data.password) + '&client_id=' + this.apiClientId;

    return this.http.post(this.apiUrl + 'login', postData, {
        headers: headers
    });
};

if (typeof exports === 'object') {
    module.exports = Smartliving;
}
