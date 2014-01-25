var request = require('request');


exports.distinctCerts = function(args,callback) {

    request.get('http://quiz.pickie.org/distinct-certs', function(err,res,body) {
        if (err) {
            callback(err,false);
        } else {
            var result = JSON.parse(body);
            if (result.success) {
                callback(false,result.success);
            } else {
                callback(false,"error");
            }
        }
    });
};
