import { FormikValues, useFormik } from "formik";
import { useTranslation } from "react-i18next";
import StyledInput from "../../components/StyledInput/StyledInput";
import {
  inititalRegisterValues,
  validationSchemaRegister,
} from "./Register.validation";

const Register = () => {
  // @ts-ignore
  const { t } = useTranslation();

  const handleSubmit = (values: FormikValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const { handleChange, isValid, errors, touched } = useFormik({
    initialValues: inititalRegisterValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchemaRegister,
  });

  return (
    <div className="card bg-white text-dark border-1 py-4">
      <div className="container d-flex justify-content-center">
        <div className="mb-3 py-5">
          <h1>{t("register:h1Register")}</h1>
          <div className="mb-3 py-5">
            <StyledInput
              id="exampleInputFirstName"
              label={t("register:firstName")}
              placeholder=""
              type="firstName"
              touched={touched.email}
              error={errors.email}
              onChange={handleChange}
            />
            <StyledInput
              id="exampleInputLastName"
              label={t("register:lastName")}
              placeholder=""
              type="lastName"
              touched={touched.email}
              error={errors.email}
              onChange={handleChange}
            />
            <StyledInput
              id="exampleInputEmail1"
              label={t("register:email")}
              placeholder=""
              type="email"
              touched={touched.email}
              error={errors.email}
              onChange={handleChange}
            />
            <StyledInput
              id="exampleInputPassword"
              label={t("register:password")}
              placeholder=""
              type="password"
              touched={touched.email}
              error={errors.email}
              onChange={handleChange}
            />
            <StyledInput
              id="exampleInputPassword2"
              label={t("register:passwordRepeat")}
              placeholder=""
              type="password"
              touched={touched.email}
              error={errors.email}
              onChange={handleChange}
            />
            <button
              disabled={!isValid}
              onSubmit={handleSubmit}
              type="submit"
              className="btn btn-outline-dark"
            >
              {t("register:confirmButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
