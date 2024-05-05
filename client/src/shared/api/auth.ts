import { AxiosError } from "axios";
import { axiosInstance } from ".";
import { ApiResponse } from "../models/api.model";
import { LoginUserModel, UserModel } from "../models/user.model";

export const signUp = async (user: UserModel): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.post<ApiResponse>(
      "/auth/signup",
      user
    );
    return response.data;
  } catch (error: any) {
    throw error.message;
  }
};

export const signIn = async (user: LoginUserModel): Promise<ApiResponse> => {
  try {
    const response = await axiosInstance.post<ApiResponse>(
      "/auth/signin",
      user
    );
    return response.data;
  } catch (error: any) {
    const axiosError = error as AxiosError;

    // Check if this error has a response object
    if (axiosError.response) {
      console.error("API error with response:", axiosError.response.data);
      // Ensure returned object matches the ApiResponse type
      return {
        success: false,
        message:
          (axiosError.response.data as any).message || "Unknown server error.",
      };
    } else {
      console.error("API error without response:", axiosError.message);
      // Return a consistent ApiResponse type even for network errors
      return {
        success: false,
        message:
          "No response from server. Please check your network connection.",
      };
    }
  }
};
