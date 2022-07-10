import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'

function DashboardMenu(props) {

    const [state, setState] = useState({
        userData: true
    })

    const [small, setSmall] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", () => {
            let width = window.innerWidth
            if (width <= "700") {
                setSmall(true)
            }
            else {
                setSmall(false)
            }
        })
    }, [])

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
                {
                    small ?
                        <span className='icon'>
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        :
                        <span className='text'>
                            اطلاعات کاربری
                        </span>
                }
            </div>
            <div
                className="dashboard-item"
                onClick={() => {
                    setState({
                        userData: false,
                        wallet: true,
                        history: false
                    })
                }}
                style={{ backgroundColor: state.wallet ? '#FF4E00' : 'initial' }}>
                {/* whenever each state is true the color will change by the click */}
                {
                    small ?
                        <span className='icon'>
                            <FontAwesomeIcon icon={faWallet} />
                        </span>
                        :
                        <span className='text'>
                            کیف پول
                        </span>
                }
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
                {
                    small ?
                        <span className='icon'>
                            <FontAwesomeIcon icon={faHistory} />
                        </span>
                        :
                        <span className='text'>
                            تاریخچه خرید
                        </span>
                }
            </div>
        </div>
    )
}

export default DashboardMenu