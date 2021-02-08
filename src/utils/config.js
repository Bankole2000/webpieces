const isLocal = true;
const remote = {
  apiUrl: "",
  appUrl: "",
  loginPath: "",
  newTokenPath: ""
};

const config = {
  serverURL: isLocal ? `http://localhost:5000` : remote.apiUrl,
  appURL: isLocal ? `http://localhost:8080` : remote.appUrl,
  loginPath: isLocal ? "/two" : remote.loginPath,
  newTokenPath: isLocal ? "/two" : remote.newTokenPath,
  appName: "Bunkee"
};

const emailRegex = /^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;
const alphaNumRegex = /^[a-z0-9]+$/i;
const nameRegex = /^([a-z]){3,}$/i;
const userNameRegex = /^([a-z0-9_]){3,}$/i;
const anyWithSpaces = /^([a-z0-9._-])+( [a-z0-9._-]+)*$/i;
// const wordsWithSpacesRegex = /^\w+( \w+)*$/i;
const allRegexes = { emailRegex, nameRegex, userNameRegex, anyWithSpaces };

const validators = {};

validators.isEmail = (emailLike) => {
  return emailLike ? emailRegex.test(emailLike) : false;
};

validators.isAlphaNumeric = (alphaNumLike) => {
  return alphaNumLike ? alphaNumRegex.test(alphaNumLike) : false;
};

validators.isValidUsername = (usernameLike) => {
  return usernameLike ? userNameRegex.test(usernameLike) : false;
};

validators.isValidName = (nameLike) => {
  return nameLike ? nameRegex.test(nameLike) : false;
};

validators.isOfAge = (dateLike) => {
  if (Date.parse(dateLike)) {
    const dob = new Date(dateLike);
    let ageDiff = Date.now() - dob.getTime();
    ageDiff = new Date(ageDiff);
    return Math.abs(ageDiff.getUTCFullYear() - 1970);
  }
  return false;
};

module.exports = { config, validators, allRegexes };
