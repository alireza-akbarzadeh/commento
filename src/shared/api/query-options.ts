import { queryOptions } from "@tanstack/react-query";

import APIClinet from "./api-client";

export const pokemonOptions = queryOptions({
  queryKey: ["pokemon"],
  queryFn: async () => {
    const clinet = new APIClinet("test");
    const response = clinet.getAll({});
    return response;
  },
});
