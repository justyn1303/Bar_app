import * as Yup from "yup";
import { RegisterValues } from "../../types/forms";
import i18n from "../../i18n/i18n";

export const inititalRegisterValues: RegisterValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const validationSchemaRegister = Yup.object().shape({
  firstName: Yup.string()
    .max(15, i18n.t("registerValidation:firstNameMax"))
    .required(i18n.t("registerValidation:firstName")),
  lastName: Yup.string()
    .max(20, i18n.t("registerValidation:lastNameMax"))
    .required(i18n.t("registerValidation:lastName")),
  email: Yup.string()
    .email(i18n.t("registerValidation:email"))
    .required(i18n.t("registerValidation:emailRequired")),
  password: Yup.string().required(i18n.t("registerValidation:password")),
  password2: Yup.string().required(i18n.t("registerValidation:password2")),
});
