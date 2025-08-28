import { useState } from "react";

export function Search({ products, setFiltered }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const q = query.toLowerCase();

    const results = products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );

    setFiltered(results);
  };

  return (
    <section className="flex-column py-5">
      <div className="flex justify-center gap-2 shadow-md  rounded-lg md:p-3 py-4">
        <input
          type="text"
          placeholder="  Search Products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" border-2 border-blue-200 md:w-4xl rounded mx-auto"
        />
        <div className="flex md:gap-4 gap-2">
          <button
            className="md:p-3 text-sm md:text-md p-1 bg-blue-500 rounded-lg text-white"
            onClick={handleSearch}
          >
            <i className="bx  bx-search"></i> Search
          </button>
          
        </div>
      </div>
    </section>
  );
}
