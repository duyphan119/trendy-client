import { FC } from "react";
import { AiOutlineFieldTime, AiOutlineSchedule } from "react-icons/ai";
import { BiBus, BiTrain } from "react-icons/bi";
import { GiCommercialAirplane, GiSailboat } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "../styles/components/ProductCard.module.scss";
interface Props {
	product?: any;
}
export const ProductCard: FC<Props> = ({ product }) => {
	if (!product) return <></>;
	return (
		<div className={styles.product}>
			<Link to={`/product/${product.alias}`} className={styles.image}>
				<img src={product.thumbnail} alt="" />
			</Link>
			<Link to={`/product/${product.alias}`} className={styles.name}>
				{product.name}
			</Link>
			<div className={styles.price}>
				<div className={styles["new-price"]}>
					{product.newPrice}đ/khách
					{product.newPrice !== product.price ? <div className={styles["old-price"]}>{product.price}đ</div> : ""}
				</div>
				<div className={styles["move-by"]}>
					{product.moveBy?.map((item: any) => {
						return (
							<span key={item.id}>
								{item.name === "Ô tô" && <BiBus />}
								{item.name === "Tàu thủy" && <GiSailboat />}
								{item.name === "Tàu hỏa" && <BiTrain />}
								{item.name === "Máy bay" && <GiCommercialAirplane />}
							</span>
						);
					})}
				</div>
			</div>
			<div className={styles.start}>
				<AiOutlineSchedule />
				Khởi hàng: {product.start}
			</div>
			<div className={styles["total-time"]}>
				<AiOutlineFieldTime />
				Thời gian: {product.totalTime}
			</div>
		</div>
	);
};
