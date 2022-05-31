/* eslint-disable @typescript-eslint/default-param-last */
import { INIT_APP } from "../types/appType";

const INIT_STATE = {
  app: "Mercado Libre",
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case INIT_APP:
      return { ...state };
    default:
      return { ...state };
  }
};
