"use client";
import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Search } from "./components/search";

export default function Home() {
  const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch api");

        const data = await response.json();
        setProducts(data.products);
        setFiltered(data.products);
      } catch (error) {
        if (error instanceof Error) {
          setErrors(`Fail to fetch products because: ${error.message}`);
        } else {
          setErrors("Fail to fetch products unable to display errors ");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center font-bold p-5 mt-5 text-blue-400 text-4xl">
        loading....
      </div>
    );
  if (errors)
    return (
      <div className="text-2xl text-center text-red-700 p-4 bg-red-300 mx-auto">
        {errors}
      </div>
    );
  return (
    <div className="">
          <Navigation products={products}/>
      <Search products={products} setFiltered={setFiltered} />
      <ul className="flex-wrap flex justify-center gap-4 p-4 ">
        {filtered.length==0 ? (<p>No products found</p>): filtered.map((p) => (
          <section
            key={p.id}
            className="flex-column justify-center w-60 rounded-xl gap-3  text-justify shadow-lg  p-4"
          >
            <img
              src={p.images[0]}
              alt={p.title}
              className="w-50 h-auto object-cover mt-2"
            />
            <div className="flex justify-items-start w-15">
              {p.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${p.title} - ${idx}`}
                  className="w-14 h-auto "
                />
              ))}
            </div>
            <li className="text-xl font-bold">{p.title}</li>
            <p className="py-2 ">{p.description}</p>
            <span className="font-bold capitalize">{p.category}</span>
          </section>
        ))}
      </ul>
    </div>
  );
}
