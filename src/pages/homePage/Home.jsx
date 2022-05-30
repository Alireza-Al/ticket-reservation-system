import React from 'react';
import Icon from "../../tracketIcon/Icon";
import SearchBox from "../../component/searchBox/SearchBox";
import Slider from "./slider/Slider";

function Home() {
	return (
		<div className="home">
			<SearchBox />
			<div className="slider-container">
				<Slider />
			</div>
			<footer className="footer">
				<div className="right-side">
					<p>درباره ما</p>
					<p>تماس با ما</p>
					<p className="address">
						آدرس : دانشگاه تبریز، دانشکده مهندسی برق و کامپیوتر
					</p>
				</div>
				<div className="left-side">
					<div className="icon-container">
						<Icon />
					</div>
					<div className="part-under-icon"></div>{" "}
					{/*the red part under the icon*/}
				</div>
			</footer>
		</div>
	);
}

export default Home;
