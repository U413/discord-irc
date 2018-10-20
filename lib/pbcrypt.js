const crypto = require('crypto');

export const pwtokey = (pass, salt = '', iter = 100) =>
  crypto.pbkdf2Sync(pass, salt, iter, 16, 'sha256');

export const encrypt = (key, msg) => {
  const iv = crypto.randomBytes(16);
  const ctx = crypto.createCipheriv('aes-128-gcm', key, iv);
  return Buffer.concat([iv, ctx.update(msg, 'utf8'), ctx.final(), ctx.getAuthTag()]).toString('base64');
};

export const decrypt = (key, msg) => {
  const buf = Buffer.from(msg, 'base64');
  const ctx = crypto.createDecipheriv('aes-128-gcm', key, buf.slice(0, 16));
  ctx.setAuthTag(buf.slice(-16));
  return ctx.update(buf.slice(16, -16), null, 'utf8') + ctx.final('utf8');
};
