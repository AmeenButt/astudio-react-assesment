const { createContext, useState } = require("react");

export const ProductContext = createContext();
export const ProductState = (props) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  const addProducts = (data) => {
    setProducts(data);
  };
  const updateProducts = (data) => {
    setProducts([...products, ...data]);
  };
  const deleteProducts = () => {
    setProducts([]);
  };
  function search(searchString) {
    const filteredArray = products.filter((item) => {
      const title = item.title.toLowerCase();
      const search = searchString.toLowerCase();
      return title.includes(search);
    });
    setProducts(filteredArray);
  }
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        addProducts,
        updateProducts,
        deleteProducts,
        search,
        category,
        setCategory,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
