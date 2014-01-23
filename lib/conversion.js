
exports.binary = function(args,callback) {
    var binary = args[0];
    var result = {
        dec: parseInt(binary,2),
        hex: parseInt(binary,2).toString(16)
    };
    callback(false,result);
};

exports.hex = function(args,callback) {
    var hex = args[0];
    var result = {
        dec: parseInt(hex,16),
        bin: parseInt(hex,16).toString(2)
    };
    callback(false,result);
};
