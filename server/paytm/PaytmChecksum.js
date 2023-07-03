"use strict";

var crypto = require('crypto');

class PaytmChecksum {

	static encrypt(input, key) {
		try {
			var cipher = crypto.createCipheriv('AES-128-CBC', key, PaytmChecksum.iv);
			var encrypted = cipher.update(input, 'binary', 'base64');
			encrypted += cipher.final('base64');
			return encrypted;
		} catch (error) {
			console.log("Encryption error:");
			console.log(error);
			throw error;
		}
	}

	static decrypt(encrypted, key) {
		try {
			var decipher = crypto.createDecipheriv('AES-128-CBC', key, PaytmChecksum.iv);
			var decrypted = decipher.update(encrypted, 'base64', 'binary');
			decrypted += decipher.final('binary');
			return decrypted;
		} catch (error) {
			console.log("Decryption error:");
			console.log(error);
			throw error;
		}
	}

	static generateSignature(params, key) {
		try {
			if (typeof params !== "object" && typeof params !== "string") {
				var error = "string or object expected, " + (typeof params) + " given.";
				throw new Error(error);
			}
			if (typeof params !== "string") {
				params = PaytmChecksum.getStringByParams(params);
			}
			return PaytmChecksum.generateSignatureByString(params, key);
		} catch (error) {
			console.log("Signature generation error:");
			console.log(error);
			throw error;
		}
	}

	static verifySignature(params, key, checksum) {
		try {
			if (typeof params !== "object" && typeof params !== "string") {
				var error = "string or object expected, " + (typeof params) + " given.";
				throw new Error(error);
			}
			if (params.hasOwnProperty("CHECKSUMHASH")) {
				delete params.CHECKSUMHASH;
			}
			if (typeof params !== "string") {
				params = PaytmChecksum.getStringByParams(params);
			}
			return PaytmChecksum.verifySignatureByString(params, key, checksum);
		} catch (error) {
			console.log("Signature verification error:");
			console.log(error);
			throw error;
		}
	}

	static async generateSignatureByString(params, key) {
		try {
			var salt = await PaytmChecksum.generateRandomString(4);
			return PaytmChecksum.calculateChecksum(params, key, salt);
		} catch (error) {
			console.log("Signature generation error:");
			console.log(error);
			throw error;
		}
	}

	static verifySignatureByString(params, key, checksum) {
		try {
			var paytm_hash = PaytmChecksum.decrypt(checksum, key);
			var salt = paytm_hash.substr(paytm_hash.length - 4);
			return (paytm_hash === PaytmChecksum.calculateHash(params, salt));
		} catch (error) {
			console.log("Signature verification error:");
			console.log(error);
			throw error;
		}
	}

	static generateRandomString(length) {
		return new Promise(function (resolve, reject) {
			crypto.randomBytes((length * 3.0) / 4.0, function (err, buf) {
				if (!err) {
					var salt = buf.toString("base64");
					resolve(salt);
				} else {
					console.log("Error occurred in generateRandomString: " + err);
					reject(err);
				}
			});
		});
	}

	static getStringByParams(params) {
		var data = "";
		try {
			Object.keys(params).sort().forEach(function (key, value) {
				data[key] = (params[key] !== null && params[key].toLowerCase() !== "null") ? params[key] : "";
			});
			return Object.values(data).join('|');
		} catch (error) {
			console.log("Get string by params error:");
			console.log(error);
			throw error;
		}
	}

	static calculateHash(params, salt) {
		try {
			var finalString = params + "|" + salt;
			return crypto.createHash('sha256').update(finalString).digest('hex') + salt;
		} catch (error) {
			console.log("Hash calculation error:");
			console.log(error);
			throw error;
		}
	}

	static calculateChecksum(params, key, salt) {
		try {
			var hashString = PaytmChecksum.calculateHash(params, salt);
			return PaytmChecksum.encrypt(hashString, key);
		} catch (error) {
			console.log("Checksum calculation error:");
			console.log(error);
			throw error;
		}
	}
}

PaytmChecksum.iv = '@@@@&&&&####$$$$';
module.exports = PaytmChecksum;
