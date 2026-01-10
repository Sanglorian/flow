(() => {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  const status = document.getElementById("search-status");
  const config = window.flowSearchConfig || {};
  const indexUrl = config.indexUrl || "/search.json";
  const baseUrl = config.baseUrl || "/";

  if (!input || !results || !status) {
    return;
  }

  let data = [];

  const normalize = (value) => (value || "").toString().toLowerCase();

  const matchesQuery = (item, queryTokens) => {
    const haystack = [
      item.title,
      item.description,
      item.short_description,
      item.main_description,
      item.connections,
      item.content,
      item.collection
    ]
      .map(normalize)
      .join(" ");

    return queryTokens.every((token) => haystack.includes(token));
  };

  const renderResults = (items, query) => {
    results.innerHTML = "";

    if (!query) {
      status.textContent = "Start typing to search.";
      return;
    }

    if (!items.length) {
      status.textContent = `No results for "${query}".`;
      return;
    }

    status.textContent = `${items.length} result${items.length === 1 ? "" : "s"} for "${query}".`;

    items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "search-result";

      const link = document.createElement("a");
      link.href = item.url || baseUrl;
      link.textContent = item.title || item.url || "Untitled";

      const meta = document.createElement("p");
      meta.className = "search-result-meta";
      meta.textContent = item.collection ? `Collection: ${item.collection}` : "";

      const description = document.createElement("p");
      description.className = "search-result-description";
      description.textContent = item.description || "";

      li.appendChild(link);
      if (meta.textContent) {
        li.appendChild(meta);
      }
      if (description.textContent) {
        li.appendChild(description);
      }
      results.appendChild(li);
    });
  };

  const handleSearch = () => {
    const query = normalize(input.value.trim());
    const queryTokens = query.split(/\s+/).filter(Boolean);

    if (!queryTokens.length) {
      renderResults([], "");
      return;
    }

    const filtered = data.filter((item) => matchesQuery(item, queryTokens));
    renderResults(filtered, input.value.trim());
  };

  fetch(indexUrl)
    .then((response) => response.json())
    .then((json) => {
      data = Array.isArray(json) ? json : [];
      renderResults([], "");
      input.addEventListener("input", handleSearch);
    })
    .catch(() => {
      status.textContent = "Search index could not be loaded.";
    });
})();
