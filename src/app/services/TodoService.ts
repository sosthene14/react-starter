import { TTodo } from "../types/TodoTypes";

interface HttpClient {
  get(url: string): Promise<TTodo[]>;
  post(url: string, data: TTodo): Promise<Response>;
}
export class TodoService<T extends HttpClient> {
  private httpClient: T;

  constructor(httpClient: T) {
    this.httpClient = httpClient;
  }

  fetchTodos = async () => {
    try {
      const res: TTodo[] = await this.httpClient.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return res
    } catch (error) {
      console.log(error);
    }
  };

  addTodos = async (todo: TTodo) => {
    try {
      const res: Response = await this.httpClient.post(
        "https://jsonplaceholder.typicode.com/todos/",
        todo
      );
      return res
    } catch (error) {
      console.log(error);
    }
  };
}
