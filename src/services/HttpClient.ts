import axios from "axios";
import { URL_SERVICE_A } from "../config";
import { IHttpClient } from "./HttpClient.interface";

const defaultUrl = URL_SERVICE_A;

export const HttpClient = async (httpOptions: IHttpClient) => {
  const { url, path } = httpOptions;

  const options = {
    ...httpOptions,
    url: urlBuilder(url || defaultUrl, path),
    headers: {
      'X-auth-key': 'panda',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  const response = await axios(options);

  if (response.status === 200) {
    return response.data;
  }

  return {};
};

const urlBuilder = (url: string, path: string) => {
  return url + path;
};
