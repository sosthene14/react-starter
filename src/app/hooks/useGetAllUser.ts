/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FetchClient } from "../fetchClient/FetchClient";
import { GetDataService } from "../services/GetDataService";
import { message } from "antd";
import { useUserAuthDetails } from "../../store/authStore";
import { IResponse } from "../interfaces/resInterface";
import { IuserDataInterface } from "../interfaces/userDataInterface";
import { useUserData } from "../../store/dataStore";
const getDatasService = new GetDataService(FetchClient);

export const useGetAllUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user_id, token, modification_token } = useUserAuthDetails();
  const { setDataUser } = useUserData();
  const [haveReloaded, setHaveReloaded] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false)

  const fetchData = async () => {
    setIsLoading(true);
    const res = (await getDatasService.getDatas(
      "http://127.0.0.1:5000/api/v1/get-all-users",
      {
        token: token,
        user_id: user_id,
        modification_token: modification_token,
      }
    )) as unknown as IResponse;
    setIsLoading(false);
    if (res?.status === 200 && Array.isArray(res.data)) {
        console.log(res.data)
      setDataUser(res.data as IuserDataInterface[]);
    } else {
      message.error(res?.message || "Failed to fetch data");
    }
  };

  useEffect(() => {
    if (haveReloaded && token?.length > 0) {
      fetchData();
      setHaveReloaded(false);
    }
  }, [haveReloaded]);
  return {
    isLoading,
    setHaveReloaded,
    setIsModalOpened,
    isModalOpened
  };
};
