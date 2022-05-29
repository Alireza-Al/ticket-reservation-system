import React, { Fragment } from 'react'

function UserData() {

    const containerNames = [
        'نام :',
        'نام خانوادگی :',
        'کد ملی :',
        'ایمیل :',
        'تاریخ تولد :'
    ]


    return (
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
            <button className='change-info'>
                تغییر اطلاعات کاربری
            </button>
        </div>
    )
}

export default UserData