import { IVerifyToken } from "../interfaces/verifyTokenInterface";

interface HttpClient {
  post(url: string, data: IVerifyToken): Promise<Response>;
}
export class GetDataService<T extends HttpClient> {
  private httpClient: T;

  constructor(httpClient: T) {
    this.httpClient = httpClient;
  }

  getDatas = async (url:string,data: IVerifyToken) => {
    try {
      const res: Response = await this.httpClient.post(
        url,
        data
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };
}
