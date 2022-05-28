import { useState } from "react";
import ConfirmSign from "./ConfirmSign";

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

	//Create this state to change page without router
	const [submitPage, setSubmitPage] = useState(false);

	//Create this function to register or login and send API requests
	const loginOrRegister = () => {
		setSubmitPage(true);
	};

	//Create sign(Register or Login) page
	return (
		<div className="container">
			{submitPage ? (
				<ConfirmSign />
			) : (
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
			)}
		</div>
	);
}

export default Sign;
