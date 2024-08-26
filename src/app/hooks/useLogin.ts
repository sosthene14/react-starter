/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { LoginService } from "../services/LoginService";
import { FetchClient } from "../fetchClient/FetchClient";
import { ILogin } from "../interfaces/loginInterface";
import { IResponse } from "../interfaces/resInterface";
import { useVerifyToken } from "./useVerifyToken";
import { message } from "antd";

const loginService = new LoginService(FetchClient);
export const useLogin = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [haveSubmited, setHaveSubmited] = useState(false);
  const { decodeToken } = useVerifyToken();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const fetchData = async (data: ILogin) => {
    setIsLoading(true);
    const res = (await loginService.checkLogin(data)) as unknown as IResponse;
    setIsLoading(false);
    if (res?.status === 200) {
      setToken(res?.token);
    } else {
      message.error(res?.message);
    }
  };

  useEffect(() => {
    if (token?.length > 0 && haveSubmited) {
      decodeToken(token);
      setHaveSubmited(false);
    }
  }, [token, haveSubmited]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHaveSubmited(true);
  
    fetchData(data);
  };
  return { data, handleChange, handleSubmit, isLoading };
};
