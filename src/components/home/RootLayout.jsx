import {
	Await,
	Outlet,
	useActionData,
	useLoaderData,
	useSubmit,
} from "react-router";
import Navigation from "./Navigation";

function RootLayout() {
	return (
		<div className=''>
			<Navigation />
			<Outlet />
		</div>
	);
}

export default RootLayout;
