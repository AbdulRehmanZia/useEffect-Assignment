import { useEffect, useState } from "react";
import "./App.css";
import getProducts from "./context/getProducts";
import EcommerceCard from "./components/EcommerceCard";

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

      <section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto bg-slate-500 mt-4">
    <div className="flex flex-wrap -m-4 gap-5 justify-center">
    {products.map((data, ind) => {
                return <EcommerceCard key={data.id} item = {data}/>;
              })}
    </div>
  </div>
</section>

            
             
            
        
    </>
  );
}

export default App;
