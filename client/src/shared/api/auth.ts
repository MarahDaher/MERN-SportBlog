import { axiosInstance } from ".";
import { ApiResponse } from "../models/api.model";
import { UserModel } from "../models/user.model";

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
