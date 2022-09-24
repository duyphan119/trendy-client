import { DefaultNavbar } from "./DefaultNavbar";
import { DefaultTopHeader } from "./DefaultTopHeader";
import styles from "../styles/components/DefaultHeader.module.scss";

export const DefaultHeader = () => {
	return (
		<header className={styles.header}>
			<DefaultTopHeader />
			<DefaultNavbar />
		</header>
	);
};
