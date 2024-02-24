import React from "react";

const ProductListItem = ({
  id,
  name,
  stock,
  price,
  quantity,
  total,
  increment,
  decrement,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled={quantity === stock} onClick={() => increment(id)}>
          +
        </button>
        <button disabled={quantity === 0} onClick={() => decrement(id)}>
          -
        </button>
      </td>
    </tr>
  );
};

export default ProductListItem;

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
//       <h1>Count: {count}</h1>
//       <div>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//       {count >= stock && <h1 style={{ color: "red" }}>Stock is out!</h1>}
//     </div>
//   );
// };

// export default ProductListItem;
