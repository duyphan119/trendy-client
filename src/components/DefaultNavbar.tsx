import { Affix, Grid } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import styles from "../styles/components/DefaultNavbar.module.scss";
import { useId } from "react";

const { useBreakpoint } = Grid;
export const DefaultNavbar = () => {
	const screens = useBreakpoint();
	const id = useId();
	if (!screens.lg) return <></>;
	return (
		<Affix
			offsetTop={0}
			onChange={(affixed?: boolean) => {
				const el = document.getElementById(id);
				if (el !== null) {
					if (affixed) {
						el.style.backgroundColor = "rgba(26, 26, 26, 0.82)";
					} else {
						el.style.backgroundColor = "rgba(51, 51, 51, 0.62)";
					}
				}
			}}
		>
			<nav
				className={styles.navbar}
				id={id}
				style={{
					padding: screens.xl ? "0 160px" : "0 16px",
				}}
			>
				<ul className={styles.items}>
					<li className={styles.item}>
						<Link to="/">Trang chủ</Link>
					</li>
					<li className={styles.item}>
						<Link to="/gioi-thieu">Giới thiệu</Link>
					</li>
					<li className={styles.item} style={{ position: "static" }}>
						<Link to="/product/category/tour-trong-nuoc">
							Tour tong nước
							<AiOutlineRight />
						</Link>
						<ul className={styles["dropdown"]}>
							<li>
								<Link className={styles["parent"]} to="/product/category/du-lich-mien-bac">
									Miền Bắc
								</Link>
								<ul className={styles["children"]}>
									<li>
										<Link to="/product/category/du-lich-ha-noi">Du lịch Hà Nội</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-ha-long">Du lịch Hạ Long</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-sa-pa">Du lịch Sa Pa</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-ninh-binh">Du lịch Ninh Bình</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-hai-phong">Du lịch Hải Phòng</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link className={styles["parent"]} to="/product/category/du-lich-mien-trung">
									Miền Trung
								</Link>
								<ul className={styles["children"]}>
									<li>
										<Link to="/product/category/du-lich-quang-binh">Du lịch Quảng Bình</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-hue">Du lịch Huế</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-da-nang">Du lịch Đà Nẵng</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-hoi-an">Du lịch Hội An</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-nha-trang">Du lịch Nha Trang</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-phan-thiet">Du lịch Phan Thiết</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-da-lat">Du lịch Đà Lạt</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link className={styles["parent"]} to="/product/category/du-lich-mien-nam">
									Miền Nam
								</Link>
								<ul className={styles["children"]}>
									<li>
										<Link to="/product/category/du-lich-phu-quoc">Du lịch Phú Quốc</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-con-dao">Du lịch Côn Đảo</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-vung-tau">Du lịch Vũng Tàu</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-can-tho">Du lịch Cần Thơ</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-ben-tre">Du lịch Bến Tre</Link>
									</li>
									<li>
										<Link to="/product/category/du-lich-dao-nam-du">Du lịch Đảo Nam Du</Link>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className={styles.item}>
						<Link to="/product/category/tour-nuoc-ngoai">
							Tour nước ngoài
							<AiOutlineRight />
						</Link>
						<ul className={styles["dropdown-here"]}>
							<li>
								<Link to="/product/category/du-lich-chau-a">Du lịch châu Á</Link>
							</li>
							<li>
								<Link to="/product/category/du-lich-chau-au">Du lịch châu Âu</Link>
							</li>
							<li>
								<Link to="/product/category/du-lich-chau-uc">Du lịch châu Úc</Link>
							</li>
							<li>
								<Link to="/product/category/du-lich-chau-my">Du lịch châu Mỹ</Link>
							</li>
						</ul>
					</li>
					<li className={styles.item}>
						<Link to="/product/category/tour-khuyen mai">Tour khuyến mãi</Link>
					</li>
					<li className={styles.item}>
						<Link to="/dich-vu-tour">Dịch vụ tour</Link>
					</li>
					<li className={styles.item}>
						<Link to="/cam-nang-du-lich">Cẩm nang du lịch</Link>
					</li>
					<li className={styles.item}>
						<Link to="/lien-he">Liên hệ</Link>
					</li>
				</ul>
			</nav>
		</Affix>
	);
};
