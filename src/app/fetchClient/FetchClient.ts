export const FetchClient = {
  get: async (url: string) => fetch(url).then((res) => res.json()),

  post: async (url: string, data: unknown) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),
};
