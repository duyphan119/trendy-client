import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/HomePage";
function App() {
	return (
		<Routes>
			<Route path="/">
				<Route
					index
					element={
						<DefaultLayout>
							<HomePage />
						</DefaultLayout>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
