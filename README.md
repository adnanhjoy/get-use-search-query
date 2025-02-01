# get-use-search-query

A React hook for filtering table data based on a search query.

## Installation
```bash
npm install get-use-search-query
```

## Import Package
```js
import { useState } from 'react'
import './App.css'
import getUseSearchQuery from 'get-use-search-query';
```

## Usage
```js
function App() {
    const data = [
        { id: 1, name: 'Adnan Hossain' },
        { id: 2, name: 'Joy Sikder' },
        { id: 3, name: 'Sara Rahman' },
    ];
  const [query, setQuery] = useState();

  const result = getUseSearchQuery(data, `?search=${query}`);

  return (
    <div className='container mx-auto my-10'>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className='border rounded outline-0 p-3 w-full placeholder:text-sm placeholder:font-light'
        placeholder='Search Here'
      />

      <div className='mt-10 space-y-2.5'>
        {
          result?.map(person =>
            <h1
              className='bg-amber-50 p-2 rounded'
              key={person?.id}
            >
              {person?.name}
            </h1>
          )
        }
      </div>
    </div>
  )
}

export default App

```