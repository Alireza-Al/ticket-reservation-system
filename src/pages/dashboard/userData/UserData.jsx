import React, { Fragment, useState, useEffect } from 'react'
import EditUserData from './EditUserData'
import { connect } from 'react-redux'
import getUserInfo from '../../../data/actions/user/getUserInfo'

function UserData(props) {

    const containerNames = [
        'نام :',
        'نام خانوادگی :',
        'کد ملی :',
        'ایمیل :',
        'تاریخ تولد :'
    ]

    const [editUserData, setEditUserData] = useState(false)

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        props.getUserInfo()
        console.log(props.user);
    }, [])

    useEffect(() => {
        if (props.user.length === 0) return
        setUserInfo(props.user[0])

    }, [props.user])

    return (
        <div>
            {
                editUserData ?
                    <EditUserData containerNames={containerNames} id={userInfo.id} />
                    :
                    <div> {/* cont means container */}
                        <div className="item-cont">
                            <span className="cont-name">
                                {containerNames[0]}
                            </span>
                            <span className="cont-value">
                                {userInfo.firstName}
                            </span>
                        </div>
                        <div className="item-cont">
                            <span className="cont-name">
                                {containerNames[1]}
                            </span>
                            <span className="cont-value">
                                {userInfo.lastName}
                            </span>
                        </div>
                        <div className="item-cont">
                            <span className="cont-name">
                                {containerNames[2]}
                            </span>
                            <span className="cont-value">
                                {userInfo.nationalCode}
                            </span>
                        </div>
                        <div className="item-cont">
                            <span className="cont-name">
                                {containerNames[3]}
                            </span>
                            <span className="cont-value">
                                {userInfo.email}
                            </span>
                        </div>
                        <div className="item-cont">
                            <span className="cont-name">
                                {containerNames[4]}
                            </span>
                            <span className="cont-value">
                                {userInfo.birthDate}
                            </span>
                        </div>
                        <button className='change-info' onClick={() => {
                            setEditUserData(true)
                        }}>
                            تغییر اطلاعات کاربری
                        </button>
                        <button className="logout-btn" onClick={() => {
                            localStorage.removeItem('token')
                        }}>
                            خروج
                        </button>

                    </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, { getUserInfo })(UserData)