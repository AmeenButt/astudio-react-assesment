import React, { useContext, useEffect, useState } from "react";
import CustomTable from "components/table";
import Layout from "components/layout";
import { api } from "config/api";
import appContext from "state/context";
import { ProductContext } from "state/productState";
import { UsersContext } from "state/usersState";

const columnFilter = [
  "id",
  "firstName",
  "lastName",
  "maidenName",
  "age",
  "gender",
  "email",
  "phone",
  "username",
  "password",
  "birthDate",
  "bloodGroup",
  "height",
  "weight",
  "eyeColor",
  "domain",
  "ip",
  "university",
];

export default function Default() {
  const { page, setPage, setRowsPerPage, rowsPerPage, setdataCount } =
    useContext(appContext);
  const { users, addUsers, search } = useContext(UsersContext);
  const [columns, setcolumns] = useState([
    {
      id: "id",
      label: "ID",
      minWidth: 170,
    },
    {
      id: "firstName",
      label: "First Name",
      minWidth: 100,
    },
    {
      id: "lastName",
      label: "Last Name",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "maidenName",
      label: "Maiden Name",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "age",
      label: "Age",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "gender",
      label: "Gender",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "phone",
      label: "Phone",
      minWidth: 170,
      align: "left",
      // format: (value) => value.toFixed(2),
    },
  ]);
  const getProducts = async () => {
    let filter = columns.map((obj) => obj.id).join(",");
    await api
      .get(
        `/users?limit=${rowsPerPage}&skip=${
          page * rowsPerPage
        }&select=${filter}`
      )
      .then((response) => {
        if (response.status == 200) {
          addUsers(response.data?.users);
          setdataCount(response.data?.total);
        } else {
        }
      });
  };
  useEffect(() => {
    getProducts();
  }, [page, rowsPerPage, columns]);
  useEffect(() => {
    return () => {
      setPage(0);
      setRowsPerPage(5);
      setdataCount(0);
    };
  }, []);

  return (
    <Layout parent="Dashboard" child="Users">
      <CustomTable
        rows={users}
        columns={columns}
        setcolumns={setcolumns}
        search={search}
        getData={getProducts}
        columnFilter={columnFilter}
      />
    </Layout>
  );
}
