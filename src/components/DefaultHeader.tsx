import { DefaultNavbar } from "./DefaultNavbar";
import { DefaultTopHeader } from "./DefaultTopHeader";
import styles from "../styles/components/DefaultHeader.module.scss";
import { Grid } from "antd";

const { useBreakpoint } = Grid;
export const DefaultHeader = () => {
	const screens = useBreakpoint();
	return (
		<header
			className={styles.header}
			style={{
				height: screens.xl ? 100 : "auto",
			}}
		>
			<DefaultTopHeader />
			<DefaultNavbar />
		</header>
	);
};
