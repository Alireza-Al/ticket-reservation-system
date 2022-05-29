import React, { useState } from 'react'

function Dashboard() {

    const [active, setActive] = useState({
        dahsboard: false,
        userData: false,
        pocket: false,
        history: false
    })

    return (
        <div className='dashboard-container'>
            <div className="dashboard-self">
                <div className="dashboard-menu"> {/*The menu with orange color on the right of dashboard*/}
                    <div className="dashboard-item"
                        onClick={() => {
                            setActive({
                                dahsboard: true,
                                userData: false,
                                pocket: false,
                                history: false
                            })
                        }}
                        style={{ backgroundColor: active.dahsboard ? '#FF4E00' : 'initial', borderRadius: '0px 44px 0px 0px' }}>
                        <span>
                            داشبورد
                        </span>
                    </div>
                    <div className="dashboard-item"
                        onClick={() => {
                            setActive({
                                dahsboard: false,
                                userData: true,
                                pocket: false,
                                history: false
                            })
                        }}
                        style={{ backgroundColor: active.userData ? '#FF4E00' : 'initial' }}>
                        <span>
                            اطلاعات کاربری
                        </span>
                    </div>
                    <div className="dashboard-item" onClick={() => {
                        setActive({
                            dahsboard: false,
                            userData: false,
                            pocket: true,
                            history: false
                        })
                    }}
                        style={{ backgroundColor: active.pocket ? '#FF4E00' : 'initial' }}>

                        <span>
                            کیف پول
                        </span>
                    </div>
                    <div className="dashboard-item"
                        onClick={() => {
                            setActive({
                                dahsboard: false,
                                userData: false,
                                pocket: false,
                                history: true
                            })
                        }}
                        style={{ backgroundColor: active.history ? '#FF4E00' : 'initial' }}>

                        <span>
                            تاریخچه خرید
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard