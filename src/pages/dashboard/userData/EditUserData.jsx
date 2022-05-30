import React, { useState } from 'react'

function EditUserData(props) {

    const [info, setInfo] = useState({})

    const HandleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="edit-cont">
            <form action="submit" onSubmit={e => HandleSubmit(e)}>
                <label htmlFor="">
                    {props.containerNames[0]} {/* container names like name */}
                    <input
                        type="text"
                        // value={props.initValue.name} 
                        onChange={(e) => {
                            setInfo({
                                ...info,
                                name: e.target.value
                            })
                        }} />
                </label>
                <label htmlFor="">
                    {props.containerNames[1]}
                    <input
                        type="text"
                        // value={props.initValue.lastName}
                        onChange={(e) => {
                            setInfo({
                                ...info,
                                lastName: e.target.value
                            })
                        }} />
                </label>
                <label htmlFor="">
                    {props.containerNames[2]}
                    <input
                        type="number"
                        // value={props.initValue.idNum}
                        onChange={(e) => {
                            setInfo({
                                ...info,
                                idNum: e.target.value
                            })
                        }} />
                </label>
                <button>
                    ذخیره
                </button>
            </form>
        </div>
    )
}

export default EditUserData