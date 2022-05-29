import React, { useState } from 'react'
import DashboardMenu from './dashboardMenu/DashboardMenu'

function Dashboard() {

    const [active, setActive] = useState({
        userData: false,
        pocket: false,
        history: false
    })

    const changeActivation = (state) => {
        setActive({
            userData : state.userData,
            pocket : state.pocket,
            history : state.history,
        })
    }

    return (
        <div className='dashboard-container'> {/* the container of the dashboard page */}
            <div className="dashboard-self"> {/* the container of the dashboard box*/}
                <DashboardMenu active={changeActivation}/>
            </div>
        </div>
    )
}

export default Dashboard