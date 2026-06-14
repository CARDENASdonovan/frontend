import { ReactElement } from "react";

import { useFetch } from "@/hooks/fetchEndpoint";
import { FreeDictionaryApiEntry } from "@/types/api/FreeDictonaryApi";

export interface FreeDictionaryApiComponentProps {
  word: string;
}

export const FreeDictionaryApiComponent = ({
  word,
}: FreeDictionaryApiComponentProps): ReactElement => {
  const {
    data: results,
    loading,
    error,
  } = useFetch<FreeDictionaryApiEntry[]>(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const entry = results && results.length > 0 ? results[0] : null;

  if (!entry) return <div>No data available</div>;

  return (
    <div className="dictionary-entry">
      <h1>{entry.word}</h1>

      <section className="phonetics">
        {entry.phonetics?.map((phonetic, index) => (
          <div key={`phonetic-${index}`} className="phonetic-item">
            {phonetic.text && <span>{phonetic.text}</span>}
            {phonetic.audio && <audio controls src={phonetic.audio} />}
          </div>
        ))}
      </section>

      <section className="meanings">
        {entry.meanings?.map((meaning, index) => (
          <div key={`meaning-${index}`} className="meaning-group">
            <h3>{meaning.partOfSpeech}</h3>
            <ul className="definitions">
              {meaning.definitions.map((def, defIndex) => (
                <li key={`def-${defIndex}`}>
                  <p>{def.definition}</p>
                  {def.example && <blockquote>"{def.example}"</blockquote>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <footer className="metadata">
        <a href={entry.license.url} target="_blank" rel="noreferrer">
          {entry.license.name}
        </a>
        <div className="sources">
          {entry.sourceUrls.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noreferrer">
              Source {index + 1}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};
