import { useEffect, useState } from "react";
import Icon from "../../tracketIcon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBus,
	faPlane,
	faTrain,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import getUserInfo from "../../data/actions/user/getUserInfo";

function NavBar(props) {

	useEffect(() => {
		props.getUserInfo();
	}, []);

	return (
		<nav className="navbar">
			<ul className="nav-menu">
				<li className="tracket-icon">
					<i>
						<Icon />
					</i>
				</li>
				<li className="nav-item">
					<a href="/#plane" className="plane-text">
						پرواز
					</a>
					<span className="plane-icon">
						<FontAwesomeIcon icon={faPlane} />
					</span>
				</li>
				<li className="nav-item">
					<a href="/#train" className="train-text">
						قطار
					</a>
					<span className="train-icon">
						<FontAwesomeIcon icon={faTrain} />
					</span>
				</li>
				<li className="nav-item">
					<a href="/#bus" className="bus-text">
						اتوبوس
					</a>
					<span className="bus-icon">
						<FontAwesomeIcon icon={faBus} />
					</span>
				</li>
				<li className="login-register">
					{props.user.length !== 0 ? (
						<>
							<span className="user-icon">
								<FontAwesomeIcon icon={faUser} />
							</span>
							<a href="/dashboard">{`${props.user[0].firstName} عزیز خوش آمدید`}</a>
						</>
					) : (
						<>
							<span className="user-icon">
								<FontAwesomeIcon icon={faUser} />
							</span>
							<a href="/users/login" className="">
								ورود/ثبت نام
							</a>
						</>
					)}
				</li>
			</ul>
		</nav>
	);
}

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUserInfo })(NavBar);
