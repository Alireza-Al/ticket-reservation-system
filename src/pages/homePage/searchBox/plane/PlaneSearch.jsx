import React from 'react'

function PlaneSearch() {
    return (
        <div className='slot-container'>
            <div className="source-and-destination">
                <input type="text" placeholder='مبدا(شهر)' />
                <input type="text" placeholder='مقصد(شهر)' />
            </div>
            <div className="round-trip-time">
                <input type="text" placeholder='تاریخ رفت'/>
                <input type="text" placeholder='تاریخ برگشت' disabled/>
            </div>
            <div className="num-of-passengers">
                <input type="text" placeholder='مسافران'/>
            </div>
            <div className="search-button">
                <button>
                    جستجو
                </button>
            </div>
        </div>
    )
}

export default PlaneSearch