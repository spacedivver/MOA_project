import axios from 'axios';

const pathsToRoles = [
  { path: "/main", roles: ["users"] },
  { path: "/home", roles: ["users"] },
  { path: "/history", roles: ["users"] },
  { path: "/product", roles: ["users"] },
  { path: "/culture", roles: ["users"] },
  { path: "/meeting-account", roles: ["users"] },
  { path: "/signup", roles: ["everybody"] },
  { path: "/", roles: ["everybody"] },
  { path: "/addlog", roles: ["users"] },
  { path: "/setting", roles: ["users"] }
];

const setUserInfo = (userInfo) => {
  if (userInfo && userInfo.authenticated) {
    window.localStorage.setItem("userInfo", btoa(JSON.stringify(userInfo)));
  } else {
    window.localStorage.removeItem("userInfo");
  }
};

const getUserInfo = () => {
  let strUserInfo = window.localStorage.getItem("userInfo");
  if (!strUserInfo) {
    return { authenticated: false };
  } else {
    return JSON.parse(window.atob(strUserInfo));
  }
};

const loginProcess = async (userId, password, successCallback, failCallback) => {
  try {
    const response = await axios.get(`http://localhost:3000/users?userId=${userId}`);
    const user = response.data[0];

    if (user && user.password === password) {
      let userInfo = { authenticated: true, userId: user.userId, roles: ["users"] };
      setUserInfo(userInfo);
      successCallback();
    } else {
      if (failCallback) failCallback();
    }
  } catch (error) {
    if (failCallback) failCallback();
  }
};

const logoutProcess = (callback) => {
  setUserInfo(null);
  callback();
};

const isMatchToRoles = (reqPath) => {
  const path = pathsToRoles.find((pr) => pr.path === reqPath);
  if (!path) return false;

  const userInfo = getUserInfo();
  if (userInfo.authenticated === false) {
    return path.roles.includes("everybody");
  } else {
    return path.roles.some(role => userInfo.roles.includes(role));
  }
};

export { isMatchToRoles, loginProcess, logoutProcess, getUserInfo };
