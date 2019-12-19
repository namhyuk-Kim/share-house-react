import axios from "axios";
//---------------------axios기본 설정-----------------------------//
export default axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_CONTEXT_PATH}`
});
