import aes256 from "aes256";
import AB from "atob";
import BA from "btoa";

export const encode = str =>
  aes256.encrypt(
    process.env.REACT_APP_ENCRYPT_KEY,
    BA(encodeURIComponent(JSON.stringify(str)))
  );

export const decode = str => {
  str = aes256.decrypt(process.env.REACT_APP_ENCRYPT_KEY, str);
  str = AB(str);
  str = decodeURIComponent(str);
  str = JSON.parse(str);

  return str;
};
