import React, { useState } from "react";
import { productList } from "./data/productList";
import ProductListItem from "./components/ProductListItem";

const App = () => {
  const [products, setProducts] = useState(
    productList.map((item) => {
      return {
        ...item,
        quantity: 0,
        total: 0,
      };
    })
  );

  const incrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (id === product.id && product.stock > product.quantity) {
          product.quantity++;
          product.total = product.price * product.quantity;
        }
        return product;
      })
    );
  };

  const decrementQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (id === product.id && product.stock > 0) {
          product.quantity--;
          product.total = product.price * product.quantity;
        }
        return product;
      })
    );
  };

  const totalQuantity = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const totalTaka = products.reduce((acc, product) => acc + product.total, 0);

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductListItem
              key={product.id}
              {...product}
              increment={incrementQuantity}
              decrement={decrementQuantity}
            />
          ))}
        </tbody>
      </table>
      <h2>Total Quantity: {totalQuantity}</h2>
      <h2>Total Taka: {totalTaka}</h2>
    </div>
  );
};

export default App;

// import ProductListItem from "./components/ProductListItem";
// import { productList } from "./data/productList";

// const App = () => {
//   return (
//     <div>
//       {productList.map((product) => (
//         <ProductListItem
//           key={product.id}
//           productName={product.productName}
//           stock={product.stock}
//           price={product.price}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const ProductListItem = ({ productName, stock }) => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     if (count < stock) {
//       setCount(count + 1);
//     }
//   };

//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div>
//       <h1>{productName}</h1>
//       <h1>
//         Count: {count}/{stock}
//       </h1>
//       <div>
//         <button onClick={increment} disabled={count === 10}>
//           Increment
//         </button>
//         <button onClick={decrement} disabled={count === 0}>
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <ProductListItem productName="Keyboard" stock={10} />
//       <ProductListItem productName="Mouse" stock={5} />
//     </div>
//   );
// };

// export default App;
