import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail, AiOutlineUserAdd } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import styles from "../styles/components/DefaultTopHeader.module.scss";
export const DefaultTopHeader = () => {
	return (
		<div className={styles["top-header"]}>
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
			<div className={styles.bottom}>
				<Link to="/" className={styles.logo}>
					<img src="https://trendy.w2.exdomain.net/image/catalog/logo/logo.png" alt="" />
				</Link>
				<div className={styles["search-container"]}>
					<input type="text" placeholder="Tìm kiếm" />
					<IoIosSearch />
				</div>
				<div className={styles["support-contact"]}>
					<img src="https://trendy.w2.exdomain.net/image/catalog/icon/hotline.svg" alt="" />
					<div className={styles.info}>
						<div>0385981196</div>
						<div>Hỗ trợ khách hàng</div>
					</div>
				</div>
			</div>
		</div>
	);
};
