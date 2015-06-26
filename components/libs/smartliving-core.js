(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.SmartLiving = factory(root);
    }
}(this, function(root) {
    'use strict';

    var exports = {};

function AccountService(http, apiUrl, apiClientId) {
    this.http = http;
    this.apiUrl = apiUrl;
    this.apiClientId = apiClientId;
}

AccountService.prototype.login = function(data) {

    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    var postData = 'grant_type=password&username=' + encodeURIComponent(data.username) + '&password=' + encodeURIComponent(data.password) + '&client_id=' + this.apiClientId;

    return this.http.post(this.apiUrl + 'login', postData, {
        headers: headers
    });
};

exports.AccountService = AccountService;

function UserService(http, apiUrl, apiClientId) {
    this.http = http;
    this.apiUrl = apiUrl;
    this.apiClientId = apiClientId;
}

UserService.prototype.me = function(token) {

    var headers = {
        'Authorization': 'Bearer ' + token
    };

    return this.http.get(this.apiUrl + 'me', {
        headers: headers
    });
};

exports.UserService = UserService;


    return exports;

}));
