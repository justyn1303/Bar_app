import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  // @ts-ignore
  const [t, i18n] = useTranslation();

  return (
    <>
      <div className="d-grid gap-1 mx-auto">
        <button
          className="btn bbtn-outline-secondary btn-sm"
          type="button"
          onClick={() => i18n.changeLanguage("pl")}
        >
          PL
        </button>
        <button
          className="btn bbtn-outline-secondary btn-sm"
          type="button"
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </button>
      </div>
    </>
  );
};

export default LanguageSwitch;
