import { useState } from "react";

function Register() {
	//Create array for  titles
	const titles = [
		"خوش آمدید",
		"اطلاعات خود را وارد نمایید",
		"ثبت نام",
		"حساب کاربری دارید؟",
	];

	//Create this state to control inputs and use them to send API requests
	const [user, setUser] = useState({
		fullName: "",
		username: "",
		password: "",
		phoneNumber: "",
		email: "",
		nationalCode: "",
		birthDate: "",
	});

	//Create this function to register and send API requests
	const register = () => {};

	//Create Register component
	return (
		<form className="sign-in" onSubmit={register}>
			<div className="sign-header">
				<h1>{titles[0]}</h1>
				<h4>{titles[1]}</h4>
			</div>
			<input
				type="text"
				placeholder="نام و نام خانوادگی"
				onChange={(e) =>
					setUser({ ...user, fullNameu: e.target.value })
				}
			/>
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
			<input type="password" placeholder="تکرار رمز ورود" />
			<input
				type="tell"
				placeholder="شماره همراه"
				onChange={(e) =>
					setUser({ ...user, phoneNumber: e.target.value })
				}
			/>
			<input
				type="email"
				placeholder="ایمیل"
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<input
				type="number"
				placeholder="کد ملی"
				onChange={(e) =>
					setUser({ ...user, nationalCode: e.target.value })
				}
			/>
			<input
				type="date"
				placeholder="تاریخ تولد"
				onChange={(e) =>
					setUser({ ...user, birthDate: e.target.value })
				}
			/>
			<button type="button">{titles[2]}</button>
			<div className="sign-footer">
				<p>{titles[3]}</p>
			</div>
		</form>
	);
}

export default Register;
