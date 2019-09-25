const crypto = require('crypto');

class Password {
    static hashPasword(password,secret) {
        const hash = crypto.createHmac('sha256', secret)
        .update(password)
        .digest('hex');
        return hash;
    }
}

module.exports=Password;