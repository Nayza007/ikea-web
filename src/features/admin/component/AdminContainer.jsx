import React from "react";
import AdminHeader from "./AdminHeader";
import AdminForm from ".//AdminForm";
import Loader from "../../../component/Loader";
import { useSelector } from "react-redux";

export default function AdminContainer() {
  const { loading } = useSelector((state) => state.admin);
  return (
    <>
      {loading && <Loader />}
      <AdminHeader />
      <AdminForm />
    </>
  );
}
