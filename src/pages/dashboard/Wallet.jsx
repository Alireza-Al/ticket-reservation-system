import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

function Wallet() {
	const [walletNumber, setWalletNumber] = useState(0);

	let walletId = null;
	const [credit, setCredit] = useState(0);

	useEffect(() => {

		const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

		const config = {
			headers: {
				Authorization: token,
			},
		};

		axios
			.get("/user/wallet/", config)
			.then((response) => {
				walletId = response.data.id;
				setCredit(response.data.amount);
			}, [])
			.catch((err) => {
				console.error(err);
			});

	})

	const charge = () => {
		const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

		const config = {
			headers: {
				Authorization: token,
			},
		};
		axios
			.get("/user/wallet/", config)
			.then((response) => {
				walletId = response.data.id;
				axios
					.patch(
						`/wallet/${walletId}`,
						{ amount: walletNumber },
						config
					)
					.then((response) => {
						console.log(response.data);
						window.location.reload();
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div>
			<h3>
				برای شارژ کردن کیف پول، ابتدا مبلغ را وارد کنید، سپس دکمه ”شارژ”
				را بزنید.
			</h3>
			<div className="price-input">
				<p>موجودی کیف پول:</p>
				{
					credit !==0 ?
					(
						 <p>{credit}</p>
					):(
						<h3>Loading...</h3>
					)
				}
			</div>
			<div className="price-input">
				<label htmlFor="">
					مبلغ :
					<input
						type="number"
						value={walletNumber}
						onChange={(e) => {
							let value = walletNumber;
							value = e.target.value;
							setWalletNumber(value);
						}}
					/>
				</label>
				<button
					className="submit-wallet-change"
					onClick={() => charge()}
				>
					شارژ
				</button>
			</div>
		</div>
	);
}

export default Wallet;
