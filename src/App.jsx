import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/home/RootLayout";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import { action as loginAction } from "./components/SignupForm";
import { action as logoutAction } from "./pages/Logout";
import DiscoverPage from "./pages/Discover";
import "leaflet/dist/leaflet.css";
import Collector from "./pages/Collector";
import Collector2 from "./pages/Collector2";
import Collector3 from "./pages/Collector3";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{ index: true, element: <HomePage /> },
				{
					path: "login",
					element: <LoginPage />,
					action: loginAction,
				},
				{
					path: "signup",
					element: <SignUpPage />,
					action: loginAction,
				},
				{ path: "discover", element: <DiscoverPage /> },
				{
					path: "collector",
					children: [
						{ index: true, element: <Collector /> },
						{
							path: "2",
							element: <Collector2 />,
						},
						{
							path: "3",
							element: <Collector3 />,
						},
					],
				},
			],
		},
		{ path: "logout", action: logoutAction },
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
