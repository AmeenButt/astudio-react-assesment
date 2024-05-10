import React, { useContext, useEffect, useState } from "react";
import CustomTable from "components/table";
import Layout from "components/layout";
import { api } from "config/api";
import appContext from "state/context";
import { ProductContext } from "state/productState";

const columnFilter = [
  "id",
  "title",
  "price",
  "discountPercentage",
  "rating",
  "stock",
  "brand",
  "category",
];

export default function Default() {
  const { page, setPage, setRowsPerPage, rowsPerPage, setdataCount } =
    useContext(appContext);
  const { products, addProducts, search, category } =
    useContext(ProductContext);
  const [columns, setcolumns] = useState([
    {
      id: "id",
      label: "ID",
      minWidth: 170,
    },
    {
      id: "title",
      label: "Title",
      minWidth: 100,
    },
    {
      id: "price",
      label: "Price",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "discountPercentage",
      label: "Discount Percentage",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "rating",
      label: "Rating",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "stock",
      label: "Stock",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "brand",
      label: "Brand",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "category",
      label: "Category",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toFixed(2),
    },
  ]);
  const getProducts = async () => {
    let filter = columns.map((obj) => obj.id).join(",");
    await api
      .get(
        `/products?limit=${rowsPerPage}&skip=${
          page * rowsPerPage
        }&select=${filter}`
      )
      .then((response) => {
        if (response.status == 200) {
          addProducts(response.data?.products);
          setdataCount(response.data?.total);
        } else {
        }
      });
  };
  const getProductsByCategory = async () => {
    let filter = columns.map((obj) => obj.id).join(",");
    await api
      .get(
        `/products/category/${category}?limit=${rowsPerPage}&skip=${
          page * rowsPerPage
        }&select=${filter}`
      )
      .then((response) => {
        if (response.status == 200) {
          addProducts(response.data?.products);
          setdataCount(response.data?.total);
        } else {
        }
      });
  };
  useEffect(() => {
    if (category == "all") {
      getProducts();
    } else {
      getProductsByCategory();
    }
  }, [page, rowsPerPage, columns, category]);
  useEffect(() => {
    return () => {
      setPage(0);
      setRowsPerPage(5);
      setdataCount(0);
    };
  }, []);

  return (
    <Layout parent="Dashboard" child="Products">
      <CustomTable
        rows={products}
        columns={columns}
        setcolumns={setcolumns}
        search={search}
        getData={getProducts}
        columnFilter={columnFilter}
      />
    </Layout>
  );
}
