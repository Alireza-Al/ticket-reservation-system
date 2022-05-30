import React, { useState } from 'react'
import axios from '../../../api/axios';

function EditUserData(props) {

    const [info, setInfo] = useState({})

    const HandleSubmit = (e) => {
        e.preventDefault();
        const token = `Token ${JSON.parse(localStorage.getItem("token"))}`;

		const config = {
			headers: {
				Authorization: token,
			},
		};
        axios
            .put(`/customer/${props.id}/`, {
                first_name: info.name,
                last_name: info.lastName,
                national_code: info.idNum,
                birth_date: info.birthDate
            },config)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.error(err))
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
                <label htmlFor="">
                    {props.containerNames[3]}
                    <input
                        type="email"
                        // value={props.initValue.idNum}
                        onChange={(e) => {
                            setInfo({
                                ...info,
                                email: e.target.value
                            })
                        }} />
                </label>
                <label htmlFor="">
                    {props.containerNames[4]}
                    <input
                        type="date"
                        // value={props.initValue.idNum}
                        onChange={(e) => {
                            setInfo({
                                ...info,
                                birthDate: e.target.value
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