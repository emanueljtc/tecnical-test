/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse, AxiosRequestConfig } from "axios";

export interface BaseArgs {
  config?: AxiosRequestConfig;
}

export interface RequestWithBodyArgs extends BaseArgs {
  payload?: any;
  config?: AxiosRequestConfig;
}

interface DataResp<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface BaseRequest<T extends BaseArgs, R> {
  (args: T): Promise<AxiosResponse<DataResp<R>>>;
}

export interface RequestWithBody<T extends RequestWithBodyArgs, R> {
  (args: T): Promise<AxiosResponse<DataResp<R>>>;
}

// without message structure
export interface BaseReqNoMsg<T extends BaseArgs, R> {
  (args: T): Promise<AxiosResponse<R>>;
}
