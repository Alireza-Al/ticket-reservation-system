import React, { useEffect, useState } from 'react'
import DashboardMenu from './dashboardMenu/DashboardMenu'

function Dashboard() {

    const [active, setActive] = useState({
        dahsboard: false,
        userData: false,
        pocket: false,
        history: false
    })

    const changeActivation = (detail) => {
        setActive({
            dashboard : detail.dashboard,
            userData : detail.userData,
            pocket : detail.pocket,
            history : detail.history,
        })
    }
    
    useEffect(() => {
        console.log(active);
    }, [active])

    return (
        <div className='dashboard-container'> {/* the container of the dashboard page */}
            <div className="dashboard-self"> {/* the container of the dashboard box*/}
                <DashboardMenu active={changeActivation}/>
            </div>
        </div>
    )
}

export default Dashboard