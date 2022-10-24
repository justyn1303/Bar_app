import { FormikValues, useFormik } from "formik";
import { useEffect, useState } from "react";
import StyledInput from "../../components/StyledInput/StyledInput";
import StyledRadios from "../../components/StyledRadios/StyledRadios";
import { useAuthContext } from "../../contexts/Authentication/Auth.provider";
import { inititalLoginValues, validationSchemaLogin } from "./Login.validation";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { login, token } = useAuthContext();
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      setIsRememberMe(isRememberMe);
    }
  });

  // @ts-ignore
  const { t } = useTranslation();

  const handleSubmit = (values: FormikValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const { handleChange, isValid, errors, touched } = useFormik({
    initialValues: inititalLoginValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchemaLogin,
  });

  return (
    <div className="card bg-white text-dark border-1 py-4">
      <div className="container d-flex justify-content-center">
        <div className="mb-3 py-5">
          <h1>{t("login:h1Login")}</h1>
          <div className="py-5">
            <StyledInput
              id="exampleEmail"
              label={t("login:email")}
              placeholder=""
              type="email"
              touched={touched.email}
              error={errors.email}
              onChange={handleChange}
            />
            <StyledInput
              id="examplePassword"
              label={t("login:password")}
              placeholder=""
              type="password"
              touched={touched.password}
              error={errors.password}
              onChange={handleChange}
            />
            <StyledRadios
              type="checkbox"
              id="rememberMe"
              checked={isRememberMe}
              label={t("login:checkRarios")}
            />
            <button
              disabled={!isValid}
              onSubmit={handleSubmit} // do poprawy   -> handleSubmit
              type="submit"
              onClick={() => login(isRememberMe)}
              className="btn btn-outline-dark"
            >
              {t("login:button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
