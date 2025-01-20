import { useAppSelector } from "./redux";

export function useAuth(app?: unknown) {
  const { id, email, token } = useAppSelector((state) => state.user);
  
  return {
    isAuth: !!email,
    email,
    id,
    token
  }
}