import { createAxios } from "@ipalfish/h5-axios";
import { palfish } from "activity_utils";
export default createAxios({
  baseURL: "/klian",
  requestOptions: {
    errorMessageToast(msg) {
      // eslint-disable-next-line
        Toast(msg);
    },
    isShowErrorToast: true,
  },
  commonHeaders: palfish.commonHeaders(),
  transform: {
    transformRequestHook(res, opt) {
      console.log("====didingyi=====", res, opt);
    },
    requestCatchHook(e, opt) {
      console.log("====自定义error=====", e, opt);
    },
  },
});
