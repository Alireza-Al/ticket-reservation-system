import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faPlane, faTrain } from '@fortawesome/free-solid-svg-icons'
import PlaneSearch from './plane/PlaneSearch';
import TrainSearch from './train/TrainSearch';
import BusSearch from './bus/BusSearch'


function SearchBox() {

    const [state, setState] = useState({
        plane: true,
        train: false,
        bus: false
    })

    return (
        <div className="search-box-container">
            <div className="search-box-back" style={{
                backgroundColor:
                    state.train ? '#ff7600'
                        : state.bus ? '#ff9700'
                            : '#ff4e00'
            }}>
                <div className="search-box-self">
                    <div className="item-selection-container">
                        <div className="plane-selector-container">  {/* plane toggle btn*/}
                            <span className="plane-icon">
                                <FontAwesomeIcon icon={faPlane} />
                            </span>
                            <button className="plane-search-box-toggle" onClick={() => {
                                if (state.plane) {
                                    return
                                } else {
                                    setState({
                                        plane: true,
                                        train: false,
                                        bus: false
                                    })
                                }
                            }}>
                                بلیط هواپیما
                            </button>
                        </div>
                        <div className="train-selector-container">  {/* train toggle btn*/}
                            <span className="train-icon">
                                <FontAwesomeIcon icon={faTrain} />
                            </span>
                            <button className="train-search-box-toggle" onClick={() => {
                                if (state.train) {
                                    return
                                } else {
                                    setState({
                                        plane: false,
                                        train: true,
                                        bus: false
                                    })
                                }
                            }}>
                                بلیط قطار
                            </button>
                        </div>
                        <div className="bus-selector-container">  {/* bus toggle btn*/}
                            <span className="bus-icon">
                                <FontAwesomeIcon icon={faBus} />
                            </span>
                            <button className="bus-search-box-toggle" onClick={() => {
                                if (state.bus) {
                                    return
                                } else {
                                    setState({
                                        plane: false,
                                        train: false,
                                        bus: true
                                    })
                                }

                            }}>
                                بلیط اتوبوس
                            </button>
                        </div>
                    </div>
                    <div className="divider" style={{
                        backgroundColor:
                            state.plane ? "#ff4e00"
                                : state.train ? "#ff7600"
                                    : state.bus ? "#ff9700"
                                        : "initial"
                    }}></div> {/*divides the selection part with the search part*/}
                    {/*each search box will be triggered when the related button is clicked*/}
                    {
                        state.plane ?
                            <PlaneSearch />
                            : state.train ?
                                <TrainSearch />
                                : state.bus ?
                                    <BusSearch />
                                    : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchBox