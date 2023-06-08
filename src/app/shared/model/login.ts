export interface LoginRequest {
  userName: string;
  password: string;
}

export interface UserInfo {
  token: string,
  userId: string,
  userRole: string,
  userName: string
}