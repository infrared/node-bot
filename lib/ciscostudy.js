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

exports.countCert = function(args,callback) {
    request.get('http://quiz.pickie.org/count/' + args[1],function(err,res,body){
        if (err) {
            callback(err,false);
        } else {
            if (res.statusCode === 200) {
                var result = JSON.parse(body);
                if (result.success) {
                    callback(false,result.success);
                } else {
                    callback(false,"error");
                }
            } else {
                callback(false,res.statusCode);
            }
        }
    });
}
exports.countCertType = function(args,callback) {
    request.get('http://quiz.pickie.org/count/' + args[1] + '/' + args[2], function(err,res,body){
        if (err) {
            callback(err,false);
        } else {
            if (res.statusCode === 200) {
                var result = JSON.parse(body);
                if (result.success) {
                    callback(false,result.success);
                } else {
                    callback(false,"error");
                }
            
            } else {
                callback(false,res.statusCode);
            }
        }
    });
}
