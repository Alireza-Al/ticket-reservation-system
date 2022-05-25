import { useState } from "react";

function Sign() {
	//Create array for  titles
	const titles = [
		"به تراکت خوش آمدید",
		".لطفا برای ادامه ایمیل خود را وارد کنید",
		"ثبت نام / ورود",
	];

	//Create this state to control inputs and use them to send API requests
	const [email, setEmail] = useState({
		email: "",
	});

	//Create this function to register and send API requests
	const loginOrRegister = () => {};

	//Create Login component
	return (
		<div className="sign-up">
			<div className="sign-header">
				<h1>{titles[0]}</h1>
				<h4>{titles[1]}</h4>
			</div>
			<form className="sign-footer" onSubmit={loginOrRegister}>
				<input
					type="email"
					placeholder="ایمیل"
					onChange={(e) =>
						setEmail({ ...email, email: e.target.value })
					}
				/>
				<button type="button">{titles[2]}</button>
			</form>
		</div>
	);
}

export default Sign;
