import { ILogin } from "../interfaces/loginInterface";

interface HttpClient {
  post(url: string, data: ILogin): Promise<Response>;
}
export class LoginService<T extends HttpClient> {
  private httpClient: T;

  constructor(httpClient: T) {
    this.httpClient = httpClient;
  }

  checkLogin = async (data: ILogin) => {
    try {
      const res: Response = await this.httpClient.post(
        "http://127.0.0.1:5000/api/v1/check-user-exist",
        data
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };
}
