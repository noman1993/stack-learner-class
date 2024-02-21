// const data = [
//   {
//     id: 1,
//     title: "checkbox 1",
//     checked: false,
//   },
//   {
//     id: 2,
//     title: "checkbox 2",
//     checked: false,
//   },
//   {
//     id: 3,
//     title: "checkbox 3",
//     checked: false,
//   },
//   {
//     id: 4,
//     title: "checkbox 4",
//     checked: false,
//   },
//   {
//     id: 5,
//     title: "checkbox 5",
//     checked: true,
//   },
//   {
//     id: 6,
//     title: "checkbox 6",
//     checked: false,
//   },
// ];

// const ListItems = (props) => {
//   return (
//     <li style={{ listStyle: "none", display: "flex", alignItems: "center" }}>
//       <input type="checkbox" checked={props.checked} />
//       <p>
//         {props.title} <span>{props.children}</span>
//       </p>
//       <button style={{ marginLeft: "auto" }}>Delete</button>
//     </li>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <ul>
//         {data.map((item) => (
//           <ListItems key={item.id} title={item.title} checked={item.checked}>
//             <button>Edit</button>
//           </ListItems>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";

// const productList = [
//   {
//     id: 1,
//     title: "KeyBoard",
//     stock: 10,
//     price: 2000,
//   },
//   {
//     id: 2,
//     title: "Mouse",
//     stock: 15,
//     price: 1500,
//   },
//   {
//     id: 3,
//     title: "HeadPhone",
//     stock: 17,
//     price: 1000,
//   },
// ];

// const ProductItems = ({ id, price, title, stock }) => {
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
//       <h1>{title}</h1>
//       <h1>
//         {count} / {stock}
//       </h1>
//       <div>
//         <button onClick={increment} disabled={count === stock}>
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
//       {productList.map((item) => (
//         <ProductItems key={item.id}  />
//       ))}
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const productList = [
  {
    id: 1,
    title: "KeyBoard",
    stock: 10,
    price: 2000,
  },
  {
    id: 2,
    title: "Mouse",
    stock: 15,
    price: 1500,
  },
  {
    id: 3,
    title: "HeadPhone",
    stock: 17,
    price: 1000,
  },
];

const TableRow = ({
  id,
  title,
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
      <td>{title}</td>
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
          product.total = product.quantity * product.price;
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
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

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
          {products.map((item) => (
            <TableRow
              key={item.id}
              {...item}
              increment={incrementQuantity}
              decrement={decrementQuantity}
            />
          ))}
        </tbody>
      </table>
      {total > 0 && <p>Total: {total}</p>}
    </div>
  );
};

export default App;
