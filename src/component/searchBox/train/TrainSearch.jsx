import { useState } from 'react'

function TrainSearch() {

    const [states, setStates] = useState({
        source: '',
        destination: '',
        depatureDate: '',
        returnDate: '',
        numOfPassengers: 0
    })


    return (
        <div className='slot-container'>
            <div className="source-and-destination">
                <input
                    type="text"
                    placeholder='مبدا(شهر)'
                    value={states.source}
                    onChange={(e) => {
                        setStates({
                            ...states,
                            source: e.target.value
                        })
                    }}
                />
                <input
                    type="text"
                    placeholder='مقصد(شهر)'
                    value={states.destination}
                    onChange={(e) => {
                        setStates({
                            ...states,
                            destination: e.target.value
                        })
                    }}
                />
            </div>
            <div className="round-trip-time">
                <input
                    type="date"
                    placeholder='تاریخ رفت'
                    value={states.depatureDate}
                    onChange={(e) => {
                        setStates({
                            ...states,
                            depatureDate: e.target.value
                        })
                    }}
                />
                <input
                    type="date"
                    placeholder='تاریخ برگشت'
                    value={states.returnDate}
                    onChange={(e) => {
                        setStates({
                            ...states,
                            returnDate: e.target.value
                        })
                    }}
                    disabled />
            </div>
            <div className="num-of-passengers">
                <input
                    type="number"
                    placeholder='مسافران'
                    value={states.numOfPassengers}
                    onChange={(e) => {
                        setStates({
                            ...states,
                            numOfPassengers: e.target.value
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

export default TrainSearch