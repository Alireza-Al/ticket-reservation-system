import React from 'react';
import Icon from "../../tracketIcon/Icon";
import SearchBox from "../../component/searchBox/SearchBox";
import Slider from "./slider/Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faCircleDollarToSlot, faComment, faEarthAsia, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';

function Home() {
	
	return (
		<div className="home">
			<SearchBox />
			<div className="services">
				<div className="col">
					<FontAwesomeIcon className='icon' icon={faEarthAsia} />
					<div className="text-cont">
						<p className="topic">
							رزرو کاملا آنلاین
						</p>
						<p className="desc">
							رزرو هتل و خربد بلیط سریع و راحت
						</p>
					</div>
				</div>
				<div className="col">
					<FontAwesomeIcon className='icon' icon={faCircleDollarToSlot} />
					<div className="text-cont">
						<p className="topic">
							تضمین بهترین قیمت
						</p>
						<p className="desc">
							بیشترین تخفیف ها برای رزرو هتل و خرید بلیط
						</p>
					</div>
				</div>
				<div className="col">
					<FontAwesomeIcon className='icon' icon={faComment} />
					<div className="text-cont">
						<p className="topic">
							امکان بررسی نظرات کاربران
						</p>
						<p className="desc">
							بررسی کیفیت هتل ها از نظر کاربران
						</p>
					</div>
				</div>
				<div className="col">
					<FontAwesomeIcon className='icon' icon={faHeadphonesSimple} />
					<div className="text-cont">
						<p className="topic">
							پشتیبانی 24 ساعته
						</p>
						<p className="desc">
							7روز هفته و حتی روز های تعطیل
						</p>
					</div>
				</div>
			</div>
			<div className="slider-container">
				<Slider />
			</div>
			<div className="about-us">
				<div className="paragragh">
					<h2>
						خرید آنلاین بلیط هواپیما
					</h2>
					<p>
						خرید بلیط هواپیما به‌عنوان نخستین گام سفر لازم است که بهترین تجربه‌ی خرید
						آنلاین خدمات سفر باشد تا با خیالی راحت به مراحل بعدی سفر قدم بگذارید. با خرید آنلاین بلیط هواپیما از تراکت،
						راحت و ارزان تنها با چند کلیک بلیط سفرتان با بهترین قیمت، در کمترین زمان و به مطمئن‌ترین روش خریداری کنید.
					</p>
				</div>
				<div className="paragragh">
					<h2>
						مزایای خرید اینترنتی بلیط هواپیما از تراکت
					</h2>
					<p>
						تراکت به شما این امکان را می‌دهد که با هر بودجه‌ای در هر زمانی بتوانید دقیق‌ترین جست‌وجو و انتخاب بلیط هواپیما را داشته باشید.
						مراحل کوتاه و آسان خرید اینترنتی بلیط هواپیما
						از تراکت با وارد کردن مبدا و مقصد و تاریخ سفر آغاز می‌شود و با چند کلیک به مرحله پرداخت و دریافت بلیط هواپیما ختم می‌شود
						تا بدون صرف وقت و هزینه برای خرید حضوری بلیط هواپیما در دنیای پرمشغله‌ی امروز، خدمتی در جهت سفر آسان و ارزان باشد.
						در سیستم خرید آنلاین بلیط هواپیما از تراکت می‌توانید در تاریخ دلخواهتان تنها با یک جست‌وجوی ساده،
						تعداد پروازها، ظرفیت و قیمت را ببینید و سپس با استفاده از فیلترها،
						ایرلاین مورد نظرتان را انتخاب کنید، بلیط چارتری را سیستمی را برگزینید،
						نوع و امکانات پرواز را بسنجید و از میان گزینه‌های متنوع موجود، مناسب‌ترین،
						ارزان‌ترین و معتبرترین بلیط هواپیما را برای سفرتان انتخاب کنید.
						تیم پشتیبانی تراکت در تمام روزهای هفته و 24 ساعت شبانه روز
						پاسخگوی تماس‌های شماست تا در هر مرحله اگر مشکل یا سوالی داشتید همراهیتان کند.
					</p>
				</div>
				<div className="paragragh">
					<h2>
						استرداد آنلاین بلیط هواپیما در تراکت
					</h2>
					<p>
						اگر به دلایل شخصی یا مشکلات ایرلاین یا تاخیر و تعجیل هواپیما خواستید بلیطتان را کنسل کنید
						می‌توانید مطمئن باشید که با چند کلیک و وارد کردن کد و ارائه شماره کارت،
						خیلی زود از پشتیبانی تراکت بابت تایید و پرداخت مبلغ با شما تماس گرفته خواهد شد.
						پس از خرید بلیط هواپیما از تراکت پیامکی دریافت می‌کنید
						که با لینک موجود در آن به راحتی و با چند کلیک می‌توانید درخواست کنسلی آنلاین برای پشتیبانی تراکت ارسال کنید.
						بسته به اینکه برای دلیل درخواست کنسلی خود چه گزینه‌ای را انتخاب کنید،
						میزان جریمه کنسلی طبق قوانین کنسلی پرواز داخلی محاسبه و به شما نمایش داده می‌شود.
						پس از آن شماره کارت خود را ثبت می‌کنید
						تا پشتیبانی تراکت مراحل مالی محاسبه و واریز پول بلیط شما را به اتمام برساند.
					</p>
				</div>
				<div className="paragragh">
					<h2>
						خرید آنلاین بلیط هواپیمای تمامی ایرلاین‌ها در تراکت
					</h2>
					<p>
						اگر به دلایل شخصی یا مشکلات ایرلاین یا تاخیر و تعجیل هواپیما خواستید بلیطتان
						را کنسل کنید می‌توانید مطمئن باشید که با چند کلیک و وارد کردن کد و ارائه شماره کارت،
						خیلی زود از پشتیبانی تراکت بابت تایید و پرداخت مبلغ با شما تماس گرفته خواهد شد.
						پس از خرید بلیط هواپیما از تراکت پیامکی دریافت می‌کنید که با لینک موجود در آن
						به راحتی و با چند کلیک می‌توانید درخواست کنسلی آنلاین برای پشتیبانی تراکت ارسال کنید.
						بسته به اینکه برای دلیل درخواست کنسلی خود چه گزینه‌ای را انتخاب کنید،
						میزان جریمه کنسلی طبق قوانین کنسلی پرواز داخلی محاسبه
						و به شما نمایش داده می‌شود. پس از آن شماره کارت خود را ثبت می‌کنید
						تا پشتیبانی تراکت مراحل مالی محاسبه و واریز پول بلیط شما را به اتمام برساند.
					</p>
				</div>
			</div>
			<footer className="footer">
				<div className="right-side">
					<p>تماس با ما</p>
					<div className="link-to-social-media">
						<FontAwesomeIcon icon={faTwitter} />
						<FontAwesomeIcon icon={faInstagram} />
						<FontAwesomeIcon icon={faLinkedin} />
						<FontAwesomeIcon icon={faTelegram} />
					</div>
					<p className="address">
						آدرس : دانشگاه تبریز، دانشکده مهندسی برق و کامپیوتر
					</p>
				</div>
				<div className="left-side">
					<div className="icon-container">
						<Icon />
					</div>
					<div className="part-under-icon"></div>
					{/*the red part under the icon*/}
				</div>
			</footer>
		</div>
	);
}

export default Home;
