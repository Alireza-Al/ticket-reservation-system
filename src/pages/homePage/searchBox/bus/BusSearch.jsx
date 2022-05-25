import React from 'react'

function BusSearch() {
    return (
        <div className='slot-container'>
            <div className="source-and-destination">
                <input type="text" placeholder='مبدا(شهر،پایانه)' />
                <input type="text" placeholder='مقصد(شهر،پایانه)' />
            </div>
            <div className="round-trip-time">
                <input type="text" placeholder='تاریخ حرکت'/>
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