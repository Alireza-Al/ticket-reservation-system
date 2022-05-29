import React, { useEffect, useState } from 'react'

function Wallet() {

    const [walletNumber, setWalletNumber] = useState(0)

    return (
        <div>
            <h3>
                برای شارژ کردن کیف پول، ابتدا مبلغ را وارد کنید، سپس دکمه ”شارژ” را بزنید.
            </h3>
            <div className="price-input">
                <label htmlFor="">
                    مبلغ :
                    <input type="number" value={walletNumber} onChange={(e) => {
                        let value = walletNumber
                        value = e.target.value
                        setWalletNumber(value)
                    }} />
                </label>
                <button className="submit-wallet-change">
                    شارژ
                </button>
            </div>
        </div>
    )
}

export default Wallet