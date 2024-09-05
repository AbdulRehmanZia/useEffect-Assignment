import { useEffect, useState } from "react";
import "./App.css";
import getProducts from "./context/getProducts";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
    console.log(products);
  };

  return (
    <>
      <h1 className="text-center mxa-auto text-red-300 bg-black text-3xl">Shopping Card</h1>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {products.map((data, ind) => {
                return <ProductCard key={data.id} item = {data}/>;
              })}
    </div>
  </div>
</section>

            
             
            
        
    </>
  );
}

export default App;
