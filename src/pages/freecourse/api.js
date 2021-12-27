import HttpRequest from "../../utils/api";

export default {
  ReqTest(params) {
    return HttpRequest.post(
      { url: "/base/app/loctext/get", params },
      { isResolvify: true }
    );
  },
  // 获取模板数据
  ReqTemData(params) {
    return HttpRequest.post(
      { url: "/aicourse/sale/launch/get", params },
      { isResolvify: true }
    );
  },
};
