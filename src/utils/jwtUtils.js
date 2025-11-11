import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
  try {
    const payload = jwtDecode(token)
    console.log(payload)
  } catch (error) {

  }
}

export default isTokenExpired;
