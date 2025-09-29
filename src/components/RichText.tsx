import React from 'react';
import SmartEmbed from './SmartEmbed';

interface RichTextProps {
  text: string;
  className?: string;
}

const RichText: React.FC<RichTextProps> = ({ text, className = '' }) => {
  // Regex para detectar URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const processText = (text: string) => {
    const parts = text.split(urlRegex);
    const result: (string | JSX.Element)[] = [];

    parts.forEach((part, index) => {
      // Crear un nuevo regex para cada test para evitar problemas con el flag global
      const isUrl = /^https?:\/\/[^\s]+$/.test(part.trim());
      if (isUrl) {
        // Es una URL - crear embed
        result.push(
          <div key={`embed-${index}`} className="my-2">
            <SmartEmbed
              url={part.trim()}
              className="block"
            />
          </div>
        );
      } else if (part.trim()) {
        // Es texto normal
        result.push(part);
      }
    });

    return result;
  };

  const processedContent = processText(text);

  return (
    <div className={`rich-text ${className}`}>
      {processedContent.map((item, index) => {
        if (typeof item === 'string') {
          // Texto normal - mantener saltos de línea
          return (
            <span key={`text-${index}`}>
              {item.split('\n').map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < item.split('\n').length - 1 && <br />}
                </span>
              ))}
            </span>
          );
        }
        return item; // JSX Element (embed)
      })}
    </div>
  );
};

export default RichText;