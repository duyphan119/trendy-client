import { FC, ReactNode } from "react";
import { DefaultHeader } from "../components/DefaultHeader";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			<DefaultHeader />
			{children}
		</div>
	);
};
