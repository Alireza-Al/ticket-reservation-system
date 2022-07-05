import { useState } from "react";
import axios from "../../api/axios";
import { useParams, useNavigate } from "react-router-dom";

function CompleteInfo() {
	//Create array for  titles
	const titles = [
		"خوش آمدید",
		"اطلاعات خود را تکمیل نمایید",
		"تکمیل اطلاعات",
	];

	//Create this state to control inputs and use them to send API requests
	const [user, setUser] = useState({
		first_name: "",
		last_name: "",
		national_code: "",
		birth_date: "",
	});

	const { id } = useParams();
	const history = useNavigate();

	//Create this function to complete user information and send API requests
	const completeInfo = (e) => {
		e.preventDefault();
		const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

		const config = {
			headers: {
				Authorization: token,
			},
		};
		axios
			.put(`/customer/${id}/`, user, config)
			.then(() => {
				history("/");
				window.location.reload();
			})
			.catch((err) => console.error(err));
	};

	//Create complete user information page
	return (
		<div className="container">
			<div className="sign-in">
				<div className="sign-header">
					<h1>{titles[0]}</h1>
					<h4>{titles[1]}</h4>
				</div>
				<form className="sign-in-footer" onSubmit={completeInfo}>
					<input
						type="text"
						placeholder="نام"
						onChange={(e) =>
							setUser({ ...user, first_name: e.target.value })
						}
					/>
					<input
						type="text"
						placeholder="نام خانوادگی"
						onChange={(e) =>
							setUser({ ...user, last_name: e.target.value })
						}
					/>
					<input
						type="number"
						placeholder="کد ملی"
						onChange={(e) =>
							setUser({ ...user, national_code: e.target.value })
						}
					/>
					<input
						type="text"
						placeholder="تاریخ تولد"
						value={user.birth_date}
						onChange={(e) =>
							setUser({ ...user, birth_date: e.target.value })
						}
						onFocus={(e) => (e.target.type = "date")}
						onBlur={(e) => (e.target.type = "text")}
					/>
					<button type="submit">{titles[2]}</button>
				</form>
			</div>
		</div>
	);
}

export default CompleteInfo;
