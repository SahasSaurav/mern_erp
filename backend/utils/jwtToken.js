import jwt from "jsonwebtoken";

const createAccessToken = (userId, userEmail, userRole) => {
  return new Promise((resolve, reject) => {
    const payload = {
      sub: userId,
      email: userEmail,
      role: userRole,
    };
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const options = {
      expiresIn: "9m",
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.error(err.message);
        reject(new Error("InternalServerError"));
        return;
      }
      resolve(token);
    });
  });
};

const createRefreshToken = (userId) => {
  return new Promise((reslove, reject) => {
    const payload = {
      sub: userId,
    };
    const secret = process.env.REFRESH_TOKEN_SECRET;
    const options = {
      expiresIn: "45m",
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.error(err);
        reject(new Error("InternalServerError"));
      }
      reslove(token);
      });
  });
};

const createSignInToken = (user) => {
  return new Promise((resolve, reject) => {
    const payload = {
      sub: user._id,
      name: user.name,
      email: user.email,
    };
    const secret = process.env.SIGNIN_TOKEN_SECRET + user.password;
    const options = {
      expiresIn: "24h",
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.error(err.message);
        reject(new Error("InternalServerError"));
        return;
      }
      resolve(token);
    });
  });
};

const createForgotPasswordToken = (user) => {
  return new Promise((resolve, reject) => {
    const payload = {
      sub: user._id,
      name: user.name,
      email: user.email,
    };
    const secret = process.env.FORGOT_PASSWORD_TOKEN_SECRET + user.password;
    const options = {
      expiresIn: "15m",
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.error(err.message);
        reject(new Error("InternalServerError"));
        return;
      }
      resolve(token);
    });
  });
};

const decodeToken = (accessToken, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(accessToken, secret, (err, payload) => {
      if (err) {
        console.error(err.message);
        reject(new Error("Unauthorized"));
        return;
      }
      resolve(payload);
    });
  });
};

const verifyToken = (token, secret, password) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret + password, (err, payload) => {
      if (err) {
        console.error(err.message);
        reject(new Error("Unauthorized"));
        return;
      }
      resolve(payload);
    });
  });
};

export {
  createAccessToken,
  createRefreshToken,
  createSignInToken,
  createForgotPasswordToken,
  decodeToken,
  verifyToken,
};
