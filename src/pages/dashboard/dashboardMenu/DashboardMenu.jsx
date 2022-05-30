import React, { useEffect, useState } from 'react'

function DashboardMenu(props) {

    const [state, setState] = useState({
        userData: true
    })

    useEffect(() => {
        props.active(state)
    }, [state])

    return (
        <div className="dashboard-menu"> {/*The menu with orange color on the right of dashboard*/}
            <div
                className="dashboard-item"
                onClick={() => {
                    setState({
                        userData: true,
                        wallet: false,
                        history: false
                    })
                }}
                style={{ backgroundColor: state.userData ? '#FF4E00' : 'initial', borderRadius: '0px 36px 0px 0px' }}>
                {/* whenever each state is true the color will change by the click */}
                <span>
                    اطلاعات کاربری
                </span>
            </div>
            <div
                className="dashboard-item"
                onClick={() => {
                    setState({
                        dahsboard: false,
                        userData: false,
                        wallet: true,
                        history: false
                    })
                }}
                style={{ backgroundColor: state.wallet ? '#FF4E00' : 'initial' }}>
                {/* whenever each state is true the color will change by the click */}
                <span>
                    کیف پول
                </span>
            </div>
            <div
                className="dashboard-item"
                onClick={() => {
                    setState({
                        userData: false,
                        wallet: false,
                        history: true
                    })
                }}
                style={{ backgroundColor: state.history ? '#FF4E00' : 'initial' }}>
                {/* whenever each state is true the color will change by the click */}
                <span>
                    تاریخچه خرید
                </span>
            </div>
        </div>
    )
}

export default DashboardMenu