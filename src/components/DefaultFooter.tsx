import { Col, Grid, Row } from "antd";
import { Link } from "react-router-dom";
import styles from "../styles/components/DefaultFooter.module.scss";
const { useBreakpoint } = Grid;
export const DefaultFooter = () => {
	const screens = useBreakpoint();
	return (
		<footer>
			<div
				className={styles.footer}
				style={{
					padding: screens.lg ? "24px 160px 40px 160px" : "8px 24px 24px 24px",
				}}
			>
				<Row>
					<Col lg={9}>
						<div className={styles.heading}>Liên hệ</div>
						<div style={{ display: "flex", alignItems: "center" }}>
							<div className={styles["icon-wrapper"]}>
								<img src="https://trendy.w2.exdomain.net/image/catalog/icon/fot_hotline.svg" alt="" />
							</div>
							<div>
								<div>Hỗ trợ trực tuyến 24/7!</div>
								<div style={{ fontSize: 20 }}>Hotline 0385981196</div>
								<div>Email: duychomap123@gmail.com</div>
								<div>Địa chỉ: Tp Tân An, tỉnh Long An</div>
							</div>
						</div>
					</Col>
					<Col xs={24} lg={5}>
						<div className={styles.heading}>Thông tin</div>
						<ul>
							<li>
								<Link to="/gioi-thieu">Về chúng tôi</Link>
							</li>
							<li>
								<Link to="/chinh-sach-thanh-toan">Chính sách thanh toán</Link>
							</li>
							<li>
								<Link to="/dieu-khoan-va-dieu-kien">Điều khoản & Điều kiện</Link>
							</li>
							<li>
								<Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
							</li>
						</ul>
					</Col>
					<Col xs={24} lg={5}>
						<div className={styles.heading}>Tour trong nước</div>
						<ul>
							<li>
								<Link to="/product/category/du-lich-mien-bac">Miền Bắc</Link>
							</li>
							<li>
								<Link to="/product/category/du-lich-mien-trung">Miền Trung</Link>
							</li>
							<li>
								<Link to="/di/product/category/du-lich-mien-nam">Miền Nam</Link>
							</li>
						</ul>
					</Col>
					<Col xs={24} lg={5}>
						<div className={styles.heading}>Tour nước ngoài</div>
						<ul>
							<li>
								<Link to="/product/category/du-lich-chau-a">Du lịch Châu Á</Link>
							</li>
							<li>
								<Link to="/product/category/du-lich-chau-au">Du lịch Châu Âu</Link>
							</li>
							<li>
								<Link to="/product/category/du-lich-chau-my">Du lịch Châu Mỹ</Link>
							</li>
							<li>
								<Link to="/product/category/du-lich-chau-uc">Du lịch Châu Úc</Link>
							</li>
						</ul>
					</Col>
				</Row>
			</div>
			<div style={{ padding: screens.lg ? "16px 160px" : 16, textAlign: "center", fontSize: 12 }}>
				© 2018. Công ty cổ phần Trendy. GPDKKD: 000000000 do sở KH & ĐT Tỉnh Long An cấp ngày 02/01/2007. GPMXH: 000/GP-BTTTT do Bộ Thông Tin và Truyền
				Thông cấp ngày 04/06/2020. Địa chỉ: Tp Tân An, tỉnh Long An. Điện thoại: 0385981196. Email: duychomap123@gmail.com. Chịu trách nhiệm nội dung:
				Phan Khánh Duy
			</div>
		</footer>
	);
};
