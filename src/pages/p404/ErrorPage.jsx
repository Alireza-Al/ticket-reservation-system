import React from "react";

function ErrorPage() {
	return (
		<div className="error-page">
			<div className="palne">
				<img
					alt="plane"
					src="https://pngimg.com/uploads/plane/plane_PNG101251.png"
				/>
				<h1>404</h1>
			</div>
			<div className="train">
				<img
					src="https://pngimg.com/uploads/trian/trian_PNG16644.png"
					alt="train"
				/>
				<p>صفحه مورد نظر یافت نشد</p>
			</div>
			<div className="bus">
				<img
					src="https://pngimg.com/uploads/bus/bus_PNG101202.png"
					alt="bus"
				/>
				<a href="/">صفحه اصلی</a>
				<div className="line"></div>
			</div>
		</div>
	);
}

export default ErrorPage;

		// <div
		// 	// style={{
		// 	// 	display: "flex",
		// 	// 	alignItems: "center",
		// 	// 	justifyContent: "center",
		// 	// 	flexDirection: "column",
		// 	// 	height: "70vh",
		// 	// }}
		// >
		// 	{/* <h1>404</h1>
		// 	<p>صفحه مورد نظر یافت نشد</p>
		// 	<a href="/">صفحه اصلی</a> */}
		// </div>