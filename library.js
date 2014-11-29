var Xbone = {
    xbonify: function(data, callback) {
        data.postData = data.postData.replace(/[Xx]box\s?[Oo]ne/, "xbone");
        callback(null, data);
    }
}

module.exports = Xbone;