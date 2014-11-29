"use strict";

var Xbone = {
    xbonify: function(str) {
        return str
            .replace(/xbox\s*one/gi, "Xbone")
            .replace(/xb\s+one/gi, "Xbone");
    },
    xbonifyRaw: function(content, callback) {
        callback(null, content ? Xbone.xbonify(content) : content);
    },
    xbonifyPost: function(data, callback) {
        if (data && data.postData && data.postData.content) {
            data.postData.content = Xbone.xbonify(data.postData.content);
        }
        callback(null, data);
    },
    xbonifySignature: function(data, callback) {
        if (data && data.userData && data.userData.signature) {
            data.userData.signature = Xbone.xbonify(data.userData.signature);
        }
        callback(null, data);
    }
}

module.exports = Xbone;