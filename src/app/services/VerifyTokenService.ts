import { IVerifyToken } from "../interfaces/verifyTokenInterface";

interface HttpClient {
  post(url: string, data: IVerifyToken): Promise<Response>;
}
export class VerifyTokenService<T extends HttpClient> {
  private httpClient: T;

  constructor(httpClient: T) {
    this.httpClient = httpClient;
  }

  verifyLogin = async (data: IVerifyToken) => {
    try {
      const res: Response = await this.httpClient.post(
        "http://127.0.0.1:5000/api/v1/verify-token",
        data
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };
}
