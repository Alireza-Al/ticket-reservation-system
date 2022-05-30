import React, { Fragment, useState } from 'react'
import EditUserData from './EditUserData'

function UserData() {

    const [editUserData, setEditUserData] = useState(false)

    const containerNames = [
        'نام :',
        'نام خانوادگی :',
        'کد ملی :',
        'ایمیل :',
        'تاریخ تولد :'
    ]

    return (
        <div>
            {
                editUserData ?
                    <EditUserData containerNames={containerNames} />
                    :
                    <div> {/* cont means container */}
                        {
                            containerNames.map((item, index) => {
                                return <Fragment key={index}>
                                    <div className="item-cont">
                                        <span className="cont-name">
                                            {item}
                                        </span>
                                        <span className="cont-value">
                                            علیرضا الهوردی
                                        </span>
                                    </div>
                                </Fragment>
                            })
                        }
                        <button className='change-info' onClick={() => {
                            setEditUserData(true)
                        }}>
                            تغییر اطلاعات کاربری
                        </button>
                    </div>
            }
        </div>
    )
}

export default UserData