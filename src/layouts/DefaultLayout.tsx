import { FC, ReactNode } from "react";
import { DefaultFooter } from "../components/DefaultFooter";
import { DefaultHeader } from "../components/DefaultHeader";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			<DefaultHeader />
			{children}
			<DefaultFooter />
		</div>
	);
};
