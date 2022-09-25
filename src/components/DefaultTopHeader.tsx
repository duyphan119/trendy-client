import { Avatar, Grid } from "antd";
import { Fragment, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu, AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { HiOutlinePhone, HiMinus } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
import styles from "../styles/components/DefaultTopHeader.module.scss";
const { useBreakpoint } = Grid;
export const DefaultTopHeader = () => {
	const screens = useBreakpoint();
	const [openDrawer, setOpenDrawer] = useState<boolean>(false);

	const showDrawer = () => {
		setOpenDrawer(true);
	};

	const closeDrawer = () => {
		setOpenDrawer(false);
	};

	return (
		<Fragment>
			<div
				className={styles["top-header"]}
				style={{
					padding: screens.xl ? "0 160px" : "0 16px",
				}}
			>
				{screens.xl && (
					<div className={styles.top}>
						<div className={styles.left}>
							<div>
								<HiOutlinePhone />
								0385981196
							</div>
							<div>
								<AiOutlineMail />
								duychomap123@gmail.com
							</div>
						</div>
						<div className={styles.right}>
							<Link to="/login">
								<FiLogIn />
								Đăng nhập
							</Link>
							<Link to="/register">
								<AiOutlineUserAdd />
								Đăng ký
							</Link>
						</div>
					</div>
				)}
				<div
					className={styles.bottom}
					style={{
						flexDirection: screens.xl ? "row" : "column",
						height: screens.xl ? 64 : "auto",
						padding: screens.xl ? 0 : "16px 0",
					}}
				>
					<Link
						to="/"
						className={styles.logo}
						style={{
							marginBottom: screens.xl ? 0 : 8,
							width: screens.xl ? "auto" : "100%",
							textAlign: screens.xl ? "left" : "center",
						}}
					>
						{!screens.xl && (
							<div className={styles.menu} onClick={showDrawer}>
								<AiOutlineMenu />
							</div>
						)}
						<img src="https://trendy.w2.exdomain.net/image/catalog/logo/logo.png" alt="" />
					</Link>
					<div
						className={styles["search-container"]}
						style={{
							flex: screens.xl ? 2 : 1,
							padding: screens.xl ? "8px 16px" : "6px 12px",
							width: screens.xl ? "80%" : "100%",
						}}
					>
						<input type="text" placeholder="Tìm kiếm" />
						<IoIosSearch />
					</div>
					{screens.xl && (
						<div className={styles["support-contact"]}>
							<img src="https://trendy.w2.exdomain.net/image/catalog/icon/hotline.svg" alt="" />
							<div className={styles.info}>
								<div>0385981196</div>
								<div>Hỗ trợ khách hàng</div>
							</div>
						</div>
					)}
				</div>
			</div>
			{!screens.xl && (
				<div className={`${styles.drawer} ${openDrawer ? styles.open : ""}`}>
					<div className={styles.close} onClick={closeDrawer}>
						<AiOutlineClose />
					</div>
					<div className={styles.account}>
						<div>
							<Avatar style={{ marginBottom: 8 }} size={40} icon={<AiOutlineUser />} />
						</div>
						<div className={styles.hello}>Xin chào ...</div>
						<div className={styles.authentication}>
							<Link to="/login">Đăng nhập</Link>
							<Link to="/register">Đăng ký</Link>
						</div>
					</div>
					<div style={{ height: "calc(100vh - 160px)", overflowY: "auto" }}>
						<div style={{ color: "gray", margin: 8, fontSize: 12 }}>Tất cả danh mục</div>
						<ul className={styles.items}>
							<li className={styles.item}>
								<div className={styles["item-wrapper"]}>
									<Link to="/">Trang chủ</Link>
								</div>
							</li>
							<li className={styles.item}>
								<div className={styles["item-wrapper"]}>
									<Link to="/gioi-thieu">Giới thiệu</Link>
								</div>
							</li>
							<li className={styles.item} style={{ position: "static" }}>
								<div className={styles["item-wrapper"]}>
									<Link to="/product/category/tour-trong-nuoc">Tour tong nước</Link>
									<label htmlFor="1">
										<GrAdd />
									</label>
								</div>
								<input type="checkbox" className={styles.check} id="1" />
								<ul className={styles.dropdown}>
									<li className={styles["dropdown-item"]}>
										<div className={styles["dropdown-item-wrapper"]}>
											<Link to="/product/category/du-lich-mien-bac">Miền Bắc</Link>
											<label htmlFor="2">
												<GrAdd />
											</label>
										</div>
										<input type="checkbox" className={styles.check} id="2" />
										<ul className={styles.dropdown}>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-ha-noi">Du lịch Hà Nội</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-ha-long">Du lịch Hạ Long</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-sa-pa">Du lịch Sa Pa</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-ninh-binh">Du lịch Ninh Bình</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-hai-phong">Du lịch Hải Phòng</Link>
												</div>
											</li>
										</ul>
									</li>
									<li className={styles["dropdown-item"]}>
										<div className={styles["dropdown-item-wrapper"]}>
											<Link to="/product/category/du-lich-mien-trung">Miền Trung</Link>
											<label htmlFor="3">
												<GrAdd />
											</label>
										</div>
										<input type="checkbox" className={styles.check} id="3" />
										<ul className={styles.dropdown}>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-quang-binh">Du lịch Quảng Bình</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-hue">Du lịch Huế</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-da-nang">Du lịch Đà Nẵng</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-hoi-an">Du lịch Hội An</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-nha-trang">Du lịch Nha Trang</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-phan-thiet">Du lịch Phan Thiết</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-da-lat">Du lịch Đà Lạt</Link>
												</div>
											</li>
										</ul>
									</li>
									<li className={styles["dropdown-item"]}>
										<div className={styles["dropdown-item-wrapper"]}>
											<Link to="/product/category/du-lich-mien-nam">Miền Nam</Link>
											<label htmlFor="4">
												<GrAdd />
											</label>
										</div>
										<input type="checkbox" className={styles.check} id="4" />
										<ul className={styles.dropdown}>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-phu-quoc">Du lịch Phú Quốc</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-con-dao">Du lịch Côn Đảo</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-vung-tau">Du lịch Vũng Tàu</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-can-tho">Du lịch Cần Thơ</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-ben-tre">Du lịch Bến Tre</Link>
												</div>
											</li>
											<li className={styles["dropdown-item"]}>
												<div className={styles["dropdown-item-wrapper"]}>
													<Link to="/product/category/du-lich-dao-nam-du">Du lịch Đảo Nam Du</Link>
												</div>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className={styles.item}>
								<div className={styles["item-wrapper"]}>
									<Link to="/product/category/tour-nuoc-ngoai">Tour nước ngoài</Link>
									<label htmlFor="5">
										<GrAdd />
									</label>
								</div>
								<input type="checkbox" className={styles.check} id="5" />
								<ul className={styles.dropdown}>
									<li className={styles["dropdown-item"]}>
										<div className={styles["dropdown-item-wrapper"]}>
											<Link to="/product/category/du-lich-chau-a">Du lịch châu Á</Link>
										</div>
									</li>
									<li className={styles["dropdown-item"]}>
										<div className={styles["dropdown-item-wrapper"]}>
											<Link to="/product/category/du-lich-chau-au">Du lịch châu Âu</Link>
										</div>
									</li>
									<li className={styles["dropdown-item"]}>
										<div className={styles["dropdown-item-wrapper"]}>
											<Link to="/product/category/du-lich-chau-uc">Du lịch châu Úc</Link>
										</div>
									</li>
									<li className={styles["dropdown-item"]}>
										<div className={styles["dropdown-item-wrapper"]}>
											<Link to="/product/category/du-lich-chau-my">Du lịch châu Mỹ</Link>
										</div>
									</li>
								</ul>
							</li>
							<li className={styles.item}>
								<div className={styles["item-wrapper"]}>
									<Link to="/product/category/tour-khuyen mai">Tour khuyến mãi</Link>
								</div>
							</li>
							<li className={styles.item}>
								<div className={styles["item-wrapper"]}>
									<Link to="/dich-vu-tour">Dịch vụ tour</Link>
								</div>
							</li>
							<li className={styles.item}>
								<div className={styles["item-wrapper"]}>
									<Link to="/cam-nang-du-lich">Cẩm nang du lịch</Link>
								</div>
							</li>
							<li className={styles.item}>
								<div className={styles["item-wrapper"]}>
									<Link to="/lien-he">Liên hệ</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			)}
		</Fragment>
	);
};
