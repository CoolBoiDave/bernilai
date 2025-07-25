"use client";
import React, { useState } from "react";
import styles from "../pages/Login.module.css";
import { Link, redirect, useSubmit } from "react-router";

function SignupForm({ mode }) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		mode: mode,
	});

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const submit = useSubmit();

	const handleSubmit = (e) => {
		e.preventDefault();

		const userData = new FormData();
		userData.append("name", formData["name"]);
		userData.append("email", formData["email"]);
		userData.append("password", formData["password"]);
		userData.append("mode", formData["mode"]);

		submit(userData, {
			method: "post",
			action: "", // or leave blank to use current route's action
		});
	};

	return (
		<section className={styles.signupFormContainer}>
			<h1 className={styles.pageTitle}>
				{mode == "login" ? "Login" : "Make Your Account."}
			</h1>

			<form onSubmit={handleSubmit} className={styles.signupForm}>
				<div className={styles.formSection}>
					<div className={styles.inputFields}>
						<div className={styles.inputGroup}>
							<label htmlFor='name' className={styles.inputLabel}>
								Your Name
							</label>
							<div className={styles.inputWrapper}>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleInputChange}
									placeholder='Name'
									className={styles.textInput}
								/>
							</div>
						</div>
						<div className={styles.inputGroup}>
							<label
								htmlFor='email'
								className={styles.inputLabel}
							>
								Email
							</label>
							<div className={styles.inputWrapper}>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleInputChange}
									placeholder='mail@abc.com'
									className={styles.textInput}
								/>
							</div>
						</div>

						<div className={styles.passwordSection}>
							<div className={styles.inputGroup}>
								<label
									htmlFor='password'
									className={styles.inputLabel}
								>
									Password
								</label>
								<div className={styles.inputWrapper}>
									<input
										type='password'
										id='password'
										name='password'
										value={formData.password}
										onChange={handleInputChange}
										placeholder='Password'
										className={styles.textInput}
									/>
								</div>
							</div>
						</div>
					</div>

					<p style={{ margin: 0 }}>
						{mode == "login"
							? "Don't have an account yet? Make one "
							: "Have an account already? Log in "}{" "}
						<Link to={mode == "login" ? "/signup" : "/login"}>
							HERE
						</Link>
						!
					</p>
					<button type='submit' className={styles.submitButton}>
						Login
					</button>
				</div>
			</form>
		</section>
	);
}

export default SignupForm;

export async function action({ request }) {
	const data = await request.formData();
	const loginData = {
		username: data.get("name"),
		password: data.get("password"),
		email: data.get("email"),
	};

	const url =
		data.get("mode") == "login"
			? "http://localhost:5000/login/"
			: "http://localhost:5000/signup";

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginData),
	});

	if (response.status === 401 || response.status === 400) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: "Could not log in user." }, { status: 500 });
	}

	const resData = await response.json();
	const token = resData.token;
	const currentUser = resData.current_user;
	localStorage.setItem("token", token);
	localStorage.setItem("currentUser", JSON.stringify(currentUser));

	return redirect("/");
}
