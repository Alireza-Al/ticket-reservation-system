import React, { useState } from 'react'

function BusSearch() {

    const [states, setStates] = useState({
        source: '',
        destination: '',
        depatureDate: '',
    })


    return (
        <div className='slot-container'>
            <div className="source-and-destination">
                <input
                    type="text"
                    placeholder='مبدا(شهر،پایانه)'
                    value={states.source}
                    onChange={(e) => {
                        setStates({
                            ...states,
                            source: e.target.value
                        })
                    }} />
                <input
                    type="text"
                    placeholder='مقصد(شهر،پایانه)'
                    value={states.destination}
                    onChange={(e) => {
                        setStates({
                            ...states,
                            destination: e.target.value
                        })
                    }} />
            </div>
            <div className="round-trip-time">
                <input
                    type="date"
                    placeholder='تاریخ حرکت'
                    value={states.depatureDate}
                    onChange={(e) => {
                        setStates({
                            ...states,
                            depatureDate: e.target.value
                        })
                    }} />
            </div>
            <div className="search-button">
                <button>
                    جستجو
                </button>
            </div>
        </div>
    )
}

export default BusSearch