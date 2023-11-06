import React from 'react';
import useAsync from './useAsync';

function client(endpoint, customConfig) {
  const config = {
    method: 'GET',
    ...customConfig,
  };

  return window.fetch(endpoint, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export default function SearchImages() {
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = React.useState();
  const [queried, setQueried] = React.useState(false);

  React.useEffect(() => {
    if (!queried) {
      return;
    }
    run(client('https://jsonplaceholder.typicode.com/photos'));
  }, [query, queried, run]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    setQueried(true);
    setQuery(event.target.elements.search.value);
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <div>
          <label htmlFor='search'>Search Images</label>
          <input id='search' type='text' />
        </div>
        <div>
          <button>Search</button>
        </div>
      </form>

      {isLoading && <div>Loading...</div>}
      {isSuccess &&
        data.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      {isError && <div>{error}</div>}
    </div>
  );
}
