import { useState } from "react";
import { Translate } from "@google-cloud/translate";

const TranslateComponent = () => {
  const [inputText, setInputText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("en");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Criar cliente do Google Translate
  const translate = new Translate();

  const handleTranslate = async () => {
    try {
      setIsLoading(true);

      // Traduzir texto
      const [translations] = await translate.translate(
        inputText,
        targetLanguage
      );

      // Atualizar estado com tradução
      setTranslatedText(
        Array.isArray(translations) ? translations[0] : translations
      );
    } catch (error) {
      console.error("Erro na tradução:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="translate-container">
      <div className="input-group">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite o texto para traduzir"
        />

        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="en">Inglês</option>
          <option value="es">Espanhol</option>
          <option value="fr">Francês</option>
          <option value="de">Alemão</option>
          {/* Adicione mais idiomas conforme necessário */}
        </select>

        <button onClick={handleTranslate} disabled={isLoading || !inputText}>
          {isLoading ? "Traduzindo..." : "Traduzir"}
        </button>
      </div>

      {translatedText && (
        <div className="output-group">
          <h3>Tradução:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslateComponent;
