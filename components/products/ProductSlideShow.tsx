import React, { FC } from "react";
import { Slide } from "react-slideshow-image/dist";
import styles from "./ProductSlideshow.module.css";
import "react-slideshow-image/dist/styles.css";
interface Props {
    images: string[];


}

const ProductSlideshow: FC<Props> = ({ images }) => {
    return (
        <Slide easing="ease" duration={7000} indicators>
            {images.map((img) => {
                const url = `/products/${img}`;
                return (
                    <div className={styles["each-slide"]} key={img}>
                        <div
                            style={{
                                backgroundImage: `url(${url})`,
                                backgroundSize: "cover",
                            }}
                        ></div>
                    </div>
                );
            })}
        </Slide>
    );
};

export default ProductSlideshow;
