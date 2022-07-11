import React, { useState } from 'react'
import DashboardMenu from './dashboardMenu/DashboardMenu'
import PurchaseHistory from './purchaseHistory/PurchaseHistory'
import UserData from './userData/UserData'
import Wallet from './Wallet'

function Dashboard() {

    const [active, setActive] = useState({})

    // this function will change each dashboard menu items state when they are clicked and show their content
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
                <DashboardMenu active={changeActivation} /> {/* dashboard menu on the right */}
                <div className="item-data"> {/* dashboard content container */}
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