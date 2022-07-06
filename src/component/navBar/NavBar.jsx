import { useEffect, useState } from "react";
import Icon from "../../tracketIcon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBus,
	faPlane,
	faTrain,
	faUser,
	faBars,
	faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import getUserInfo from "../../data/actions/user/getUserInfo";

function NavBar(props) {
	const [type, setType] = useState(0);

	useEffect(() => {
		props.getUserInfo();
	}, []);

	//Create this state to open or close menu
	const [isOpen, setIsOpen] = useState(false);

	//Create this function to handle open/close menu
	const handleOpen = () => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};

	return (
		<>
			{props.user.length !== 0 ? (
				<div
					className={`message ${
						props.user[0].isRegistered ? "active" : ""
					}`}
				>
					<h3>
						.برای ادامه و خرید اطلاعات کاربری خود را تکمیل نمایید
					</h3>
					<a href={`/completeInfo/${props.user[0].id}`}>
						تکمیل اطلاعات
					</a>
				</div>
			) : (
				""
			)}
			<nav className="navbar">
				<ul className="nav-menu">
					<FontAwesomeIcon
						icon={faBars}
						className="bar"
						size="2x"
						onClick={() => handleOpen()}
					/>
					<li className="tracket-icon">
						<i>
							<Icon />
						</i>
					</li>
					<ul className={`nav-items ${isOpen ? "opened" : "closed"}`}>
						<li className="nav-item">
							<a
								href={`/?type=${type}`}
								className="plane-text"
								onClick={() => {
									setType(0);
								}}
							>
								پرواز
							</a>
							<span className="plane-icon">
								<FontAwesomeIcon icon={faPlane} />
							</span>
						</li>
						<li className="nav-item">
							<a
								href={`/?type=${type}`}
								className="train-text"
								onClick={() => {
									setType(1);
								}}
							>
								قطار
							</a>
							<span className="train-icon">
								<FontAwesomeIcon icon={faTrain} />
							</span>
						</li>
						<li className="nav-item">
							<a
								href={`/?type=${type}`}
								className="bus-text"
								onClick={() => {
									setType(2);
								}}
							>
								اتوبوس
							</a>
							<span className="bus-icon">
								<FontAwesomeIcon icon={faBus} />
							</span>
						</li>
					</ul>

					<li className="login-register">
						{props.user.length !== 0 ? (
							<>
								<a href="/dashboard">
									<span className="user-icon">
										<FontAwesomeIcon icon={faUser} />
									</span>
									<span className="title">
										{`${props.user[0].firstName} عزیز خوش آمدید`}
									</span>
								</a>
							</>
						) : (
							<>
								<a href="/users/login" className="">
									<span className="user-icon">
										<FontAwesomeIcon
											icon={faArrowRightToBracket}
										/>
									</span>
									<span className="title">ورود/ثبت نام</span>
								</a>
							</>
						)}
					</li>
				</ul>
			</nav>
		</>
	);
}

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUserInfo })(NavBar);
