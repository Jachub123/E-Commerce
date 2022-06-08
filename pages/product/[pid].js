import { useRouter } from "next/router";
import index from "../index";
import React from "react";
const Product = index;

export default function SingleProduct() {
  const router = useRouter();
  const { pid } = router.query;

  return <Product id={pid}></Product>;
}
