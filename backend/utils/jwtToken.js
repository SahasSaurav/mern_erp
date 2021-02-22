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
      expiresIn: "30m",
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

const decodeAccessToken = (accessToken) => {
  return new Promise((resolve, reject) => {
    const secret = process.env.ACCESS_TOKEN_SECRET;
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

export { createAccessToken, decodeAccessToken };
