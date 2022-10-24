import * as Yup from "yup";
import { LoginValues } from "../../types/forms";
import i18n from "../../i18n/i18n";

export const inititalLoginValues: LoginValues = {
  email: "",
  password: "",
};

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t("loginValidation:email"))
    .required(i18n.t("loginValidation:emailRequired")),
  password: Yup.string().required(i18n.t("loginValidation:password")),
});
