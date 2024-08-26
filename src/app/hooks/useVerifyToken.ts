import { jwtDecode } from "jwt-decode";
import { VerifyTokenService } from "../services/VerifyTokenService";
import { FetchClient } from "../fetchClient/FetchClient";
import { IdecodedTokenInterface } from "../interfaces/decodedTokenInterface";
import { useSetToken } from "./useSetToken";
import { message } from "antd";
import { IResponse } from "../interfaces/resInterface";
import { useAuth, useUserAuthDetails } from "../../store/authStore";
import { useCallback } from "react";

const verifyToken = new VerifyTokenService(FetchClient);

export const useVerifyToken = () => {
  const { setTokenToSession } = useSetToken();
  const { setIsAuth } = useAuth();
  const {setUserId,setToken} = useUserAuthDetails()

  
  const isValidToken = useCallback(async (token: string, user_id: string) => {
    const res = (await verifyToken.verifyLogin({
      token,
      user_id,
    })) as unknown as IResponse;

    if (res?.status === 200) {
      setTokenToSession(token);
      setIsAuth(true);
    } else {
      setIsAuth(false);
      sessionStorage.clear();
      message.error(res?.message);
    }
    return res;
  },[setTokenToSession,setIsAuth]);

  const decodeToken = useCallback((async (token: string) => {
    try {
      if (token && token.length > 0) {
        const decodedToken = jwtDecode(token) as IdecodedTokenInterface;
        if (decodedToken.sub && !isTokenExpired(decodedToken.exp)) {
          setUserId(decodedToken.sub);
          setToken(token);
          await isValidToken(token, decodedToken.sub);
        } else {
          setIsAuth(false);
          sessionStorage.clear();
        }
        return decodedToken;
      }
    } catch (error) {
      setIsAuth(false);
      sessionStorage.clear();
    }
  }),[setIsAuth,isValidToken, setToken, setUserId])
  

  const isTokenExpired = (exp: number) => {
    return exp < Date.now() / 1000;
  };


  return { decodeToken };
};
