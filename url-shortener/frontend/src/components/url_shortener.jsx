import { useState } from "react";

function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setOriginalUrl(event.target.value);
  };

  const handleSubmit = async () => {
    setError("");
    setShortUrl("");

    if (!originalUrl.trim()) {
      setError("Por favor, ingresa una URL válida.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: originalUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortUrl(data.short_url);
      } else {
        setError(data.error || "Ocurrió un error.");
      }
    } catch (error) {
      setError("Error al conectar con la API.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Acortador de URLs</h2>
      <input
        type="text"
        placeholder="Ingresa la URL aquí..."
        value={originalUrl}
        onChange={handleChange}
        className="border p-2 w-full rounded-md"
      />
      <button
        onClick={handleSubmit}
        className="mt-2 bg-blue-500 text-white p-2 rounded-md w-full"
      >
        Acortar URL
      </button>

      {shortUrl && (
        <p className="mt-4 text-green-600">
          URL corta:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="underline">
            {shortUrl}
          </a>
        </p>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}

export default UrlShortener;
