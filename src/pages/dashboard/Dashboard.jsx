import React, { useState } from 'react'

function Dashboard() {
  return (
    <div className='dashboard-container'>
        <div className="dashboard-self">
            <div className="dashboard-menu"> {/*The menu with orange color on the right of dashboard*/}
                <div className="dashboard-item">
                    <span>
                        داشبورد
                    </span>
                </div>
                <div className="dashboard-item">
                    <span>
                        اطلاعات کاربری
                    </span>
                </div>
                <div className="dashboard-item">
                    <span>
                        کیف پول
                    </span>
                </div>
                <div className="dashboard-item">
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