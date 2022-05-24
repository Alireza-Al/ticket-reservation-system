import { useState } from "react";

function Login() {
	//Create array for  titles
	const titles = [
		"به تراکت خوش آمدید",
		"وارد حساب کاربری خود شوید",
		"رمز عبور خود را فراموش کرده‌اید؟",
		"ورود",
		"حساب کاربری ندارید؟",
	];

	//Create this state to control inputs and use them to send API requests
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	//Create this function to register and send API requests
	const login = () => {};

	//Create Login component
	return (
		<form className="sign-up" onSubmit={login}>
			<div className="sign-header">
				<h1>{titles[0]}</h1>
				<h4>{titles[1]}</h4>
			</div>
			<input
				type="text"
				placeholder="نام کاربری"
				onChange={(e) => setUser({ ...user, username: e.target.value })}
			/>
			<input
				type="password"
				placeholder="رمز ورود"
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<button type="button">{titles[3]}</button>
			<div class="sign-footer">
				<p>{titles[2]}</p>
				<p>{titles[4]}</p>
			</div>
		</form>
	);
}

export default Login;
