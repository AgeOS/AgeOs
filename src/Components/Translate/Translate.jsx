import { useState, useEffect } from "react";
// import React from "react";

const PageTranslateComponent = () => {
  // const API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

  const [isEnglish, setIsEnglish] = useState(false);

  const translateContent = async (targetLanguage) => {
    const elements = document.querySelectorAll("body *");

    for (let element of elements) {
      if (
        element.childNodes.length === 1 &&
        element.childNodes[0].nodeType === Node.TEXT_NODE
      ) {
        try {
          const originalText = element.innerText;

          const response = await fetch(
            `https://translation.googleapis.com/language/translate/v2?key=AIzaSyCSYeZFMAPQmuS5dTz6PdECBulXaOsjG6U`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                q: originalText,
                target: targetLanguage,
              }),
            }
          );

          const data = await response.json();
          element.innerText = data.data.translations[0].translatedText;
        } catch (error) {
          console.error("Translation error:", error);
        }
      }
    }
  };

  const toggleTranslation = () => {
    const targetLanguage = isEnglish ? "pt" : "en";
    translateContent(targetLanguage);
    setIsEnglish(!isEnglish);
    localStorage.setItem("siteLanguage", targetLanguage);
    if (targetLanguage === "pt") {
      window.location.reload();
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("siteLanguage");
    if (savedLanguage === "en") {
      translateContent("en");
      setIsEnglish(true);
    }
  }, []);

  return (
    <button
      style={{
        backgroundColor: "transparent",
        border: "none",
        position: "relative",
        right: "50%",
      }}
    >
      <img
        src="https://img.icons8.com/carbon-copy/100/google-translate--v2.png"
        alt="Translate"
        onClick={toggleTranslation}
      />
      {/*{isEnglish ? 'Voltar para Português' : 'Translate to English'}*/}
    </button>
  );
};

export default PageTranslateComponent;
