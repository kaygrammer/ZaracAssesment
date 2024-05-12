import { errorResMsg } from "../../utils/lib/response.js";

export const handleCustomError = (res, error) => {
  if (error.message === "User not found") {
    return errorResMsg(res, 404, error.message);
  } else if (error.message === "user with this email already exist") {
    return errorResMsg(res, 400, error.message);
  } else return errorResMsg(res, 412, error.message);
};

export function handleGenericError(res, error) {
  return errorResMsg(res, 500, error.message);
}
