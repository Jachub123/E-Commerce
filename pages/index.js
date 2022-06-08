import Head from "next/head";
import styled from "styled-components";
import Products from "../products.json";
import Link from "next/link";
import Header from "./header";
import { cart } from "./Cart";
import React, { useState } from "react";

const Container = styled.div`
  background-color: gray;
  box-shadow: 4px 4px #123;
  width: 300px;
  height: 300px;
`;

export default function products(props) {
  const [cartItems, setCartItems] = useState([]);
  const [cartState, setcartState] = useState(false);
  const toggleCartState = () => setcartState((value) => !value);
  const isClothing = props.isClothing;
  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  function RenderShop() {
    return Products.map((product) => {
      function Sizes(props) {
        return (
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-1 flex text-sm font-medium">
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xs"
                  defaultChecked
                />
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                  XS
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="s"
                />
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                  S
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="m"
                />
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                  M
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="l"
                />
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                  L
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                  XL
                </div>
              </label>
            </div>
          </div>
        );
      }
      if (props.id) {
        if (props.id == product.id) {
          return (
            <div className="font-serif">
              <div className="w-full ">
                <img
                  src={product.img}
                  alt=""
                  className="w-full lg:w-1/2 max-h-75vh inset-0 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <form className="flex-auto p-6">
                <div className="flex flex-wrap items-baseline">
                  <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                    <Link href={"/product/" + product.id} key={product.id}>
                      <a> {product.name}</a>
                    </Link>
                  </h1>
                  <div className="flex-auto text-lg font-medium text-slate-500">
                    {product.price}
                  </div>
                  <div className="text-xs leading-6 font-medium uppercase text-slate-500">
                    In stock
                  </div>
                </div>
                <Sizes isClothing={product.clothing}></Sizes>
                <div className="flex space-x-4 mb-5 text-sm font-medium">
                  <div className="flex-auto flex space-x-4 pr-4">
                    <Link href={"/product/" + product.id} key={product.id}>
                      <button
                        className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
                        type="submit"
                      >
                        <a data-test-id={product.id}>Buy now</a>
                      </button>
                    </Link>
                    <button
                      className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button
                    className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200"
                    type="button"
                    aria-label="Like"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-slate-500">
                  Free shipping on all continental US orders.
                </p>
              </form>
            </div>
          );
        }
      } else {
        return (
          <div className=" flex justify-center">
            <div className="sm:flex   font-serif lg:w-1/2">
              <div className="flex-none w-1/2 sm:w-52 sm:relative">
                <img
                  src={product.img}
                  alt=""
                  className="sm:absolute inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <form className="flex-auto p-6">
                <div className="flex flex-wrap items-baseline">
                  <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                    <Link href={"/product/" + product.id} key={product.id}>
                      <a> {product.name}</a>
                    </Link>
                  </h1>
                  <div className="flex-auto text-lg font-medium text-slate-500">
                    {product.price}
                  </div>
                  <div className="text-xs leading-6 font-medium uppercase text-slate-500">
                    In stock
                  </div>
                </div>
                <Sizes isClothing={product.clothing}></Sizes>
                <div className="flex space-x-4 mb-5 text-sm font-medium">
                  <div className="flex-auto flex space-x-4 pr-4">
                    <Link href={"/product/" + product.id} key={product.id}>
                      <button
                        className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
                        type="submit"
                      >
                        <a data-test-id={product.id}>Buy now</a>
                      </button>
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button
                    className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200"
                    type="button"
                    aria-label="Like"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-slate-500">
                  Free shipping on all continental US orders.
                </p>
              </form>
            </div>
          </div>
        );
      }
    });
  }

  function renderProducts() {
    if (cartState) {
      return cartItems.map((product) => {
        return (
          <div className=" flex justify-center">
            <div className="sm:flex   font-serif lg:w-1/2">
              <div className="flex-none w-1/2 sm:w-52 sm:relative">
                <img
                  src={product.img}
                  alt=""
                  className="sm:absolute inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <form className="flex-auto p-6">
                <div className="flex flex-wrap items-baseline">
                  <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                    <Link href={"/product/" + product.id} key={product.id}>
                      <a> {product.name}</a>
                    </Link>
                  </h1>
                  <div className="flex-auto text-lg font-medium text-slate-500">
                    {product.price}
                  </div>
                  <div className="text-xs leading-6 font-medium uppercase text-slate-500">
                    In stock
                  </div>
                </div>
                <div className="flex space-x-4 mb-5 text-sm font-medium">
                  <div className="flex-auto flex space-x-4 pr-4">
                    <Link href={"/product/" + product.id} key={product.id}>
                      <button
                        className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white"
                        type="submit"
                      >
                        <a data-test-id={product.id}>Buy now</a>
                      </button>
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button
                    className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200"
                    type="button"
                    aria-label="Like"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-slate-500">
                  Free shipping on all continental US orders.
                </p>
              </form>
            </div>
          </div>
        );
      });
    }
    return <RenderShop></RenderShop>;
  }
  return (
    <div>
      <Head>
        <title>All Products</title>
      </Head>
      <Header
        cartItems={cartItems}
        cartState={cartState}
        openCart={toggleCartState}
      ></Header>
      {renderProducts()}
    </div>
  );
}
