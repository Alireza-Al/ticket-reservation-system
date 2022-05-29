import React, { useState } from 'react'
import DashboardMenu from './dashboardMenu/DashboardMenu'
import PurchaseHistory from './PurchaseHistory'
import UserData from './UserData'
import Wallet from './Wallet'

function Dashboard() {

    const [active, setActive] = useState({})

    const changeActivation = (state) => {
        setActive({
            userData: state.userData,
            wallet: state.wallet,
            history: state.history,
        })
    }

    return (
        <div className='dashboard-container'> {/* the container of the dashboard page */}
            <div className="dashboard-self"> {/* the container of the dashboard box*/}
                <DashboardMenu active={changeActivation} />
                <div className="item-data">
                    {
                        active.userData ?
                            <UserData />
                            : active.wallet ?
                                <Wallet />
                                : active.history ?
                                    <PurchaseHistory />
                                    : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard