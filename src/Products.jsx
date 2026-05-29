import{useState,useEffect} from 'react'

import Card from './Card.jsx'

function Products() {
  const [products, setProducts] = useState([]);
  //async await

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   async function fetchProducts() {
//     let data = await fetch('https://fakestoreapi.com/products');
//     let result = await data.json();
//     setProducts(result);
//   }

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data));
  }, []);

  return (

    <>
    {
    products.map((e) => (
      <Card image={e.image} title={e.title} price={e.price} />
    ))}
    </>
  )
}

export default Products