async function getProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      return products;
    } catch (err) {
      console.error("Something Went Wrong", err);
      throw new Error("Something Went Wrong");
    }
  }
  
  export default getProducts