function Register() {
	//Create array for  titles
	const titles = [
		"خوش آمدید",
		"اطلاعات خود را وارد نمایید",
		"ثبت نام",
		"حساب کاربری دارید؟",
	];

	//Create Register component
	return (
		<form className="sign-in">
			<div className="sign-header">
				<h1>{titles[0]}</h1>
				<h4>{titles[1]}</h4>
			</div>
			<input type="text" placeholder="نام و نام خانوادگی" />
			<input type="text" placeholder="نام کاربری" />
			<input type="password" placeholder="رمز ورود" />
			<input type="password" placeholder="تکرار رمز ورود" />
			<input type="tell" placeholder="شماره همراه" />
			<input type="email" placeholder="ایمیل" />
			<input type="number" placeholder="کد ملی" />
			<input type="date" placeholder="تاریخ تولد" />
			<button type="button">{titles[2]}</button>
			<div className="sign-footer">
				<p>{titles[3]}</p>
			</div>
		</form>
	);
}

export default Register;
