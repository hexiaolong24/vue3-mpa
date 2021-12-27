import { reactive } from "vue";
import api from "../api";
import deepQuery from "deepquery";

export default async function (launchid) {
  let temData = reactive({});
  const getData = async () => {
    const { ret, data } = await api.ReqTemData({ launchid });
    if (ret === 1) {
      if (data.info.is_active === false) {
        temData = { offline: true };
      } else {
        const content = JSON.parse(data.info.content || "{}");
        console.log("content", content);
        temData = deepQuery(content, "data", "pagedata") || {};
      }
    }
    console.log("temData", temData);
  };
  await getData();
  return {
    temData,
  };
}
