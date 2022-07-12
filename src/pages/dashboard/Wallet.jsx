/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

function Wallet() {
	const [walletNumber, setWalletNumber] = useState(0);

	let walletId = null;
	const [credit, setCredit] = useState(null);

	const [err, setErr] = useState('')

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
		<div className="walllet-container">
			<h3>
				برای شارژ کردن کیف پول، ابتدا مبلغ را وارد کنید، سپس دکمه ”شارژ”
				را بزنید.
			</h3>
			<div className="price-input">
				<p>موجودی کیف پول:</p>
				{
					credit !== null ?
						(
							<p>{credit}</p>
						) : (
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
					<p>{err}</p>
				</label>
				<button
					className="submit-wallet-change"
					onClick={() => {
						if (!walletNumber) {
							setErr('لطفا مبلغ را وارد کنید')
							return
						}
						setErr('')
						charge()
					}}
				>
					شارژ
				</button>
			</div>
		</div>
	);
}

export default Wallet;
