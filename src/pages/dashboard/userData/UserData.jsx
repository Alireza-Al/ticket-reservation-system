/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import EditUserData from "./EditUserData";
import { connect } from "react-redux";
import getUserInfo from "../../../data/actions/user/getUserInfo";
import { useNavigate } from "react-router-dom";

function UserData(props) {

	//Create this parameter to redirect pages
	const history = useNavigate();

	const containerNames = [
		"نام :",
		"نام خانوادگی :",
		"کد ملی :",
		"ایمیل :",
		"تاریخ تولد :",
	];

	const [editUserDataState, seteditUserDataState] = useState(false);

	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		props.getUserInfo();
	}, []);

	useEffect(() => {
		if (props.user.length === 0) return;
		setUserInfo(props.user[0]);
	}, [props.user]);

	const EditUserDataToggler = (state) => {
		seteditUserDataState(state)
	}

	return (
		<div>
			{
				props.user.length === 0 ? <span>...loading</span>
					:
					editUserDataState ?
						<EditUserData
							containerNames={containerNames}
							id={userInfo.id}
							editState={EditUserDataToggler}
						/>
						:
						<div className="container-user">
							{/* cont means container */}
							<div className="item-cont">
								<span className="cont-name">{containerNames[0]}</span>
								<span className="cont-value">{userInfo.firstName}</span>
							</div>
							<div className="item-cont">
								<span className="cont-name">{containerNames[1]}</span>
								<span className="cont-value">{userInfo.lastName}</span>
							</div>
							<div className="item-cont">
								<span className="cont-name">{containerNames[2]}</span>
								<span className="cont-value">{userInfo.nationalCode}</span>
							</div>
							<div className="item-cont">
								<span className="cont-name">{containerNames[3]}</span>
								<span className="cont-value">{userInfo.email}</span>
							</div>
							<div className="item-cont">
								<span className="cont-name">{containerNames[4]}</span>
								<span className="cont-value">{userInfo.birthDate}</span>
							</div>
							<div className="item-cont">
								<button
									className="change-info"
									onClick={() => {
										seteditUserDataState(true);
									}}
								>
									تغییر اطلاعات کاربری
								</button>
								<button
									className="logout-btn"
									onClick={() => {
										localStorage.removeItem("token");
										history("/");
										window.location.reload();
									}}
								>
									خروج
								</button>
							</div>
						</div>
			}
		</div>
	);
}

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUserInfo })(UserData);
