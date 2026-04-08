import { removeFromCart } from "@/store/slices/cartItemsSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import CartLoader from "./CartLoader";
import Link from "next/link";
import { setClose } from "@/store/slices/cartSidebar";

export default function CartProduct() {
    const dispatch = useDispatch();
    const { items, loading } = useSelector((state) => state.cart);
    const isUser = useSelector((state) => state.user);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart({ id }));
    };

    if (!isUser.user && !isUser.loading) return <h1 className="text-center text-gray-500">Please <Link className="text-blue-500 hover:underline" href={"/login"} onClick={() => dispatch(setClose())}>Login</Link> to view your cart items.</h1>
    if (loading || !items) return <CartLoader />;
    if (items && items.length === 0) return <h1>items list is empty</h1>;

    return (
        <>
            {items &&
                items.map((val) => (
                    <div key={val._id} className="flex items-center gap-4">
                        <Image
                            width={100}
                            height={100}
                            src={val.image}
                            alt="Product"
                            className="w-16 h-16 object-contain rounded"
                        />
                        <div className="flex-1">
                            <h3 className="font-medium text-sm">{val.title}</h3>
                            <p className="text-xs text-gray-500">Qty: {val.qty}</p>
                            <p className="text-sm font-semibold">${val.price}</p>
                        </div>
                        <button
                            className="text-red-500 hover:text-red-700 text-2xl cursor-pointer"
                            onClick={() => handleRemoveFromCart(val._id)}
                        >
                            &times;
                        </button>
                    </div>
                ))}
        </>
    );
}
