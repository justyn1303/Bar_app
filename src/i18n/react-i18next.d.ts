import "react-i18next";
import pl from "./translations/plPL";
import en from "./translations/enEN";
import { defaultNS, resources } from "i18next";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: typeof enEN;
  }
}
