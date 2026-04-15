import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCart } from "../../redux functionality/cartSlice";
import { ToastContainer, toast } from "react-toastify";

function Home() {
  const [product, setProduct] = useState([]);

  async function getProcuct() {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      setProduct(res.data.products);
    } catch (error) {
      console.log("Failed To Fetch Data", error);
    }
  }

  useEffect(() => {
    getProcuct();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <div className="flex justify-center text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Products
        </h1>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {product.map((obj, idx) => {
          return <ProductCard data={obj} key={idx} />;
        })}
      </div>
      <ToastContainer />
    </section>
  );
}

export default Home;

export function ProductCard({ data }) {
  let { title, price, thumbnail, description, id, discountPercentage } = data;

  let dispatch = useDispatch();
  let cartItems = useSelector((store) => store.cartStore.cartCount);

  let checkItemInCart = cartItems.find((item) => item.id === id);

  function addToCartItem() {
    let cart = {
      title,
      price,
      image: thumbnail,
      qty: 1,
      description,
      id,
      discountPercentage,
    };
    dispatch(addToCart({ cartObj: cart }));
    toast.success("Item Added in the cart");
  }

  function removeFromCart() {
    dispatch(deleteCart({ id }));
    toast.info("Item Removed from cart");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold line-clamp-1 text-slate-900">
          {title}
        </h2>

        <p className="text-sm text-slate-500 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-emerald-600">₹ {price}</span>

          {checkItemInCart ? (
            <button
              className="rounded-xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-700 active:scale-95"
              onClick={removeFromCart}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700 active:scale-95"
              onClick={addToCartItem}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
