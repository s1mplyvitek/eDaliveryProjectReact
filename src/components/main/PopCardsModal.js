import Modal from "react-modal"
import React from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, decreaseItemQty, increaseItemQty } from "../../store/slices/cartSlice";
import { setSidebarCart } from "../../store/slices/sidebarCartSlice";
import { useState } from "react";







Modal.setAppElement('#root');

const PopCardsModal = ({ name, image, key, id, price, cart, item }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [priceStart, setPriceStart] = useState(true);

    const dispatch = useDispatch();


    return (


        <>

            <div onClick={openModal} key={key} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                <img className="w-full h-[200px] object-cover rounded-t-lg"
                    src={image} alt={name} />
                <div className="flex justify-between px-2 py-4">
                    <p className="font-bold">{name}</p>
                    <p>
                        <span className="bg-orange-500 sm:text-base text-sm text-white p-1 px-2 rounded-full flex">
                            <span>
                                {price}
                            </span>
                            ₽
                        </span>
                    </p>
                </div>
            </div>

            <Modal
                className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2
                 bg-white p-6 rounded-2xl shadow-xl w-full  sm:w-4/5 lg:w-3/5 xl:w-2/5 h-auto"
                overlayClassName="fixed top-0 left-0 bottom-0 right-0 bg-black/50 flex justify-center items-center z-30"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal">
                <div className="grid">
                    <div className="flex justify-between">
                        <p className="font-bold text-xl sm:text-3xl">{name}</p>
                        <span className="cursor-pointer" onClick={closeModal}><AiOutlineClose /></span>
                    </div>
                    <div className="grid sm:flex my-3 sm:my-6">
                        <img className=" w-full sm:w-2/5 h-[250px] mr-5 object-cover rounded-xl"
                            src={image} alt={name} />
                        <div className="sm:w-3/5">
                            <p className="indent-5 ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam!
                            </p>
                            <Link to={`/dish/${id}`}>
                                <button type="button" class="inline-block max-w-[150px] rounded border-2 border-neutral-800 px-6 text-[12px] font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900">
                                    Подробнее
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="flex max-[380px]:flex-wrap gap-2 justify-between 2xl:text-xl items-center">
                        <div>
                            <button onClick={() => { dispatch(addToCart(item)); setPriceStart(false) }} type="button" class="focus:outline-none text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg
                              px-8  mr-2 py-2.5  md:w-[200px] 2xl:w-[280px] dark:focus:ring-yellow-900">
                                Добавить
                            </button>
                        </div>

                        <div className="max-[450px]:hidden">
                            {cart.map((item) => item.food.id == id ?
                                <>
                                    <span className="cursor-pointer" onClick={() => { dispatch(decreaseItemQty(item.food.id)) }}>﹤</span>
                                    {item.qty}
                                    <span className="cursor-pointer" onClick={() => { dispatch(increaseItemQty(item.food.id)) }}>﹥</span>
                                </> : "")}
                        </div>

                        <div >

                            {cart.map((item) => item.food.id == id ?
                                <span>
                                    {item.food.price * item.qty} ₽
                                </span> : "")} {priceStart ? <span className="text-base md:text-lg">{price} ₽</span> : ""}
                        </div>

                        {!priceStart ? <div onClick={() => { dispatch(setSidebarCart()); closeModal(); }} className="flex cursor-pointer hover:scale-105 duration-200 hover:text-orange-600">
                            <span>
                                К покупке!
                            </span>
                            <AiOutlineShoppingCart size={30} />
                        </div> : ""}
                    </div>
                </div>

            </Modal>
        </>
    );
};

export default PopCardsModal;