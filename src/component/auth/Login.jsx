function Login() {
	//Create array for  titles
	const titles = [
		"به تراکت خوش آمدید",
		"وارد حساب کاربری خود شوید",
		"رمز عبور خود را فراموش کرده‌اید؟",
		"ورود",
		"حساب کاربری ندارید؟",
	];

	//Create Login component
	return (
		<form className="sign-up">
			<div className="sign-header">
				<h1>{titles[0]}</h1>
				<h4>{titles[1]}</h4>
			</div>
			<input type="text" placeholder="نام کاربری" />
			<input type="password" placeholder="رمز ورود" />
			<button type="button">{titles[3]}</button>
			<div class="sign-footer">
				<p>{titles[2]}</p>
				<p>{titles[4]}</p>
			</div>
		</form>
	);
}

export default Login;
