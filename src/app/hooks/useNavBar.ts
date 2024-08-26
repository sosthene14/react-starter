import { useState } from "react";
import { useUserAuthDetails } from "../../store/authStore";
import { message } from "antd";
import { IResponse } from "../interfaces/resInterface";
import { VerifyTokenService } from "../services/VerifyTokenService";
import { FetchClient } from "../fetchClient/FetchClient";
const verifyToken = new VerifyTokenService(FetchClient);
export const useNavBar = () => {
  const { user_id, token, setModificationToken } = useUserAuthDetails();
  const [isLoading, setIsLoading] = useState(false);
  const [modificationToken, _setModificationToken] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = (await verifyToken.verifyLogin({
      token,
      user_id,
      modification_token: modificationToken,
    })) as unknown as IResponse;

    if (res.status === 200) {
      setModificationToken(modificationToken);
      message.success(res.message);
    } else {
      setModificationToken("");
      message.error(res.message);
    }
    setIsLoading(false);
  };

  return {
    modificationToken,
    _setModificationToken,
    handleSubmit,
    isLoading
  };
};
