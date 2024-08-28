import { DataContext, useData } from "../DataContext";
import { useEffect, useState } from "react";
import Slider from "./Slider";
import DropdownContainer from "./DropdownContainer";

export default function GeneralPage({ showPage, buyHandler }) {
    const data = useData();
    const [isHidden, setIsHidden] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(data.products[0]);
    const [selectedSize, setSelectedSize] = useState(null); // New state to track selected size

    function handleColorSelection(selectedName) {
        const filteredProducts = data.products.filter((product) => {
            return product.name === selectedName;
        });

        setSelectedProduct(filteredProducts[0]); // Assuming you want to set the first match
    }

    function handleSizeSelection(size) {
        setSelectedSize(size);
    }

    useEffect(() => {
        if (showPage) {
            const timer = setTimeout(() => setIsHidden(false), 500); // Delay hiding after fade-out
            const fadeTimer = setTimeout(() => setIsFading(true), 1000); // Delay hiding after fade-out
            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(timer);
            }; // Cleanup timeout if component unmounts or `showPage` changes
        } else {
            setIsHidden(true);
        }
    }, [showPage]);

    return (
        <div
            className={`hero__page flex-row container 
            ${isFading ? "fade-in" : "fade-out"}
            ${isHidden ? "hidden fade-out" : ""}`}
        >
            <div className="slider__wrapper">
                <Slider slidesToShow={selectedProduct.imgs}></Slider>
            </div>
            <div className="hero__content flex-column">
                <div className="hero__header flex-column">
                    <h2 className="hero__product-name">{data.productName}</h2>
                    <div className="hero__product-ratingbox flex-row">
                        <span className="hero__product-stars">★★★★★</span>
                        <span className="hero__product-ratings">
                            4.8 (1007)
                        </span>
                    </div>
                    <div className="hero__product-pricebox flex-row">
                        <span className="price-new">{data.priceNew}</span>
                        <span className="price-old">{data.priceOld}</span>
                    </div>
                </div>
                <div className="hero__colors">
                    <h3 className="hero__colors-title">{data.colorsText}</h3>
                </div>
                <div className="color__selection flex-row">
                    {data.products.map((product) => {
                        const isSelected =
                            product.name === selectedProduct?.name;
                        return (
                            <button
                                className={`selector__button ${
                                    isSelected
                                        ? "selector__button-selected"
                                        : ""
                                }`}
                                key={product.name}
                                onClick={() => {
                                    handleColorSelection(product.name);
                                }}
                            >
                                <span
                                    className="selector__button-display"
                                    style={{
                                        backgroundColor: `${product.color}`,
                                    }}
                                ></span>
                            </button>
                        );
                    })}
                </div>
                <div className="size__wrapper flex-column">
                    <h3 className="size__title">{data.sizeText}</h3>
                    <div className="size__selection flex-row">
                        {data.sizes.map((size, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`size__button ${
                                        selectedSize === size ? "selected" : ""
                                    }`}
                                    onClick={() => handleSizeSelection(size)}
                                >
                                    {size}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <button
                    onClick={buyHandler}
                    className={`checkout__button ${
                        selectedSize ? "fade-in" : "hidden fade-out"
                    }`}
                >
                    {data.checkoutButton}
                </button>
                <DropdownContainer></DropdownContainer>
            </div>
        </div>
    );
}
