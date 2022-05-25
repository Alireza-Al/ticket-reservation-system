import { useState } from "react";

function CompleteInfo() {
	//Create array for  titles
	const titles = ["خوش آمدید", "اطلاعات خود را تکمیل نمایید", "تکمیل اطلاعات"];

	//Create this state to control inputs and use them to send API requests
	const [user, setUser] = useState({
		fullName: "",
		email: "",
		nationalCode: "",
		birthDate: "",
	});

	//Create this function to complete user information and send API requests
	const completeInfo = () => {};

	//Create complete user information page
	return (
		<div className="sign-in">
			<div className="sign-header">
				<h1>{titles[0]}</h1>
				<h4>{titles[1]}</h4>
			</div>
			<form className="sign-in-footer" onSubmit={completeInfo}>
				<input
					type="text"
					placeholder="نام و نام خانوادگی"
					onChange={(e) =>
						setUser({ ...user, fullNameu: e.target.value })
					}
				/>
				<input
					type="email"
					placeholder="ایمیل"
					onChange={(e) =>
						setUser({ ...user, email: e.target.value })
					}
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
			</form>
		</div>
	);
}

export default CompleteInfo;
