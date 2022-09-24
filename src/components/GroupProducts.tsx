import { Col, Row } from "antd";
import { CSSProperties, FC, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSchedule, AiOutlineFieldTime } from "react-icons/ai";
import { BiBus, BiTrain } from "react-icons/bi";
import { GiCommercialAirplane, GiSailboat } from "react-icons/gi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import styles from "../styles/components/GroupProducts.module.scss";
import { ProductCard } from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
interface Props {
	products?: any;
	title?: string;
	styleTitle?: CSSProperties;
	description?: string;
	layout?: "row-col" | "slider";
	categories?: any;
	backgroundUrl?: string;
}

export const GroupProducts: FC<Props> = ({ products, title, styleTitle, description, layout, categories, backgroundUrl }) => {
	const [active, setActive] = useState<any>();
	const handleClick = (category: any) => {
		setActive(category);
	};
	return (
		<section className={styles["group-products"]}>
			<h1 style={styleTitle}>{title}</h1>
			<div className={styles.separate}></div>
			{description && <div className={styles.description}>{description}</div>}
			<div
				style={{
					backgroundImage: `url(${backgroundUrl})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					width: "100vw",
				}}
				className={styles.products}
			>
				{categories && (
					<ul className={styles.categories}>
						{categories.map((category: any, index: number) => {
							return (
								<li
									className={`${styles.category} ${
										active ? (active.id === category.id ? styles.active : "") : index === 0 ? styles.active : ""
									}`}
									onClick={() => handleClick(category)}
								>
									{category.name}
								</li>
							);
						})}
					</ul>
				)}

				{layout === "row-col" && (
					<Row gutter={[40, 40]}>
						{products?.map((product: any) => {
							return (
								<Col lg={8} xs={12} key={product.id}>
									<ProductCard product={product} />
								</Col>
							);
						})}
					</Row>
				)}
				{layout === "slider" && (
					<Swiper
						spaceBetween={40}
						slidesPerView={3}
						modules={[Pagination, Navigation]}
						navigation={{
							prevEl: `.${styles["prev-arrow"]}`,
							nextEl: `.${styles["next-arrow"]}`,
						}}
						pagination={{
							enabled: true,
							clickable: true,
						}}
					>
						{products?.map((product: any) => {
							return (
								<SwiperSlide>
									<ProductCard product={product} />
									<br />
									<br />
								</SwiperSlide>
							);
						})}
						<div className={styles["prev-arrow"]}>
							<GrFormPrevious />
						</div>
						<div className={styles["next-arrow"]}>
							<GrFormNext />
						</div>
					</Swiper>
				)}
			</div>
		</section>
	);
};
