import { Col, Grid, Row } from "antd";
import { CSSProperties, FC, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/components/GroupProducts.module.scss";
import { ProductCard } from "./ProductCard";
interface Props {
	products?: any;
	title?: string;
	styleTitle?: CSSProperties;
	description?: string;
	layout?: "row-col" | "slider";
	categories?: any;
	backgroundUrl?: string;
}
const { useBreakpoint } = Grid;
export const GroupProducts: FC<Props> = ({ products, title, styleTitle, description, layout, categories, backgroundUrl }) => {
	const [active, setActive] = useState<any>();
	const screens = useBreakpoint();
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
					padding: screens.lg ? "60px 160px" : "60px 40px",
				}}
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
									key={category.id}
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
								<Col lg={8} xs={24} md={12} key={product.id}>
									<ProductCard product={product} />
								</Col>
							);
						})}
					</Row>
				)}
				{layout === "slider" && (
					<Swiper
						spaceBetween={40}
						slidesPerView={screens.lg ? 3 : screens.md ? 2 : 1}
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
								<SwiperSlide key={product.id}>
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
