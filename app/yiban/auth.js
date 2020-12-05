'use strict';

const crypto = require('crypto');

/**
 * @param client_id  应用appkey
 * @param client_secret 应用appsecret
 * @param redirect_uri 应用回调地址
 * @param state 防跨站伪造参数，重定向回应用端时会带上此参数。也可用于记录应用端自定义的功能标示（避免使用“? = &”等特殊字符）
 *
 * @class YiBanOauth
 */
class Auth {
  constructor(vq, yibanConfig, callback, state) {
    const { client_id, client_secret, redirect_uri } = yibanConfig;
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.redirect_uri = redirect_uri;
    this.state = state;
    this.authorize_url = `https://openapi.yiban.cn/oauth/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&state=${this.state}`;
    this.access_token = '';
    this.vq_info = null;
    this.callback = callback;
    this.decryptoVerifyRequest(vq);
  }

  /**
   * 解密verify_request
   *
   * @param {string} vq verify_request
   * @param {function(arg0: error,arg1: vq_info)} callback
   * @returns {string} decoded
   * @memberof YiBanSdk
   */
  decryptoVerifyRequest(vq) {
    const cryptkey = this.client_secret;
    const iv = this.client_id;
    let encryptdata = vq;
    let vq_info = null;

    encryptdata = Buffer.from(encryptdata, 'hex').toString('binary');
    const decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv);
    decipher.setAutoPadding(false);
    let decoded = decipher.update(encryptdata, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    decoded = decoded.split('\u0000')[0];
    vq_info = JSON.parse(decoded);
    this.vq_info = vq_info;
    if (!vq_info.visit_oauth) {
      return this.callback(this.authorize_url);
    }
    this.access_token = vq_info.visit_oauth.access_token
    return vq_info;
  }
}

module.exports = Auth;
