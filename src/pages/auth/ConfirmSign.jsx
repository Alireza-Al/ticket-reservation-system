import { useState } from "react";
function ConfirmSign() {
	//Create array for  titles
	const titles = [
		"به تراکت خوش آمدید",
		".لطفا برای ادامه کد تایید را واردکنید",
		"ثبت نام / ورود",
	];

	//Create this state to control inputs and use them to send API requests
	const [confirmCode, setConfirmCode] = useState({
		confirmCode: "",
	});

	//Create this function to confirm sign in or sign up and send API requests
	const confirmation = () => {};

	//Create confirmation page
	return (
		<div className="sign-up">
			<div className="sign-header">
				<h1>{titles[0]}</h1>
				<h4>{titles[1]}</h4>
			</div>
			<form className="sign-footer" onSubmit={confirmation}>
				<input
					type="number"
					placeholder="کد تایید"
					onChange={(e) =>
						setConfirmCode({ ...confirmCode, confirmCode: e.target.value })
					}
				/>
				<button type="button">{titles[2]}</button>
			</form>
		</div>
	);
}

export default ConfirmSign;
