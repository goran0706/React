import React, { Suspense, useDeferredValue, useState } from "react";

const UseDeferredValue = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  );
};

export default UseDeferredValue;
