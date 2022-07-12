/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faPlane, faTrain } from '@fortawesome/free-solid-svg-icons'
import PlaneSearch from './plane/PlaneSearch';
import TrainSearch from './train/TrainSearch';
import BusSearch from './bus/BusSearch'
import { useLocation } from 'react-router-dom';


function SearchBox() {

    let location = useLocation()

    const params = new URLSearchParams(location.search)

    const [state, setState] = useState({
        plane: true,
        train: false,
        bus: false
    })

    useEffect(() => {
        let type = params.get('type')
        if (type === '0') {
            setState({
                plane: true,
                train: false,
                bus: false
            })
        }
        else if (type === '1') {
            setState({
                plane: false,
                train: true,
                bus: false
            })
        }
        else if (type === '2'){
            setState({
                plane: false,
                train: false,
                bus: true
            })
        }
    }, [])

    const [shakeState, setShakeState] = useState({})

    return (
        <div className="search-box-container">
			<div
				className="search-box-back"
				style={{
					backgroundColor: state.train
						? "#ff7600"
						: state.bus
						? "#ff9700"
						: "#ff4e00",
				}}
			></div>
			<div className="search-box-self">
				<div className="item-selection-container">
					<div className="plane-selector-container">
						{" "}
						{/* plane toggle btn*/}
						<a
							href="/?type=0"
							className="plane-search-box-toggle"
							onClick={() => {
								if (state.plane) {
									return;
								} else {
									setState({
										plane: true,
										train: false,
										bus: false,
									});
								}
							}}
							onMouseMove={() => {
								setShakeState({
									plane: true,
								});
							}}
							onMouseLeave={() => {
								setShakeState({
									plane: false,
								});
							}}
						>
							<span id="plane" className="plane-icon">
								<FontAwesomeIcon
									icon={faPlane}
									shake={shakeState.plane}
								/>
							</span>
							بلیط هواپیما
						</a>
					</div>
					<div className="train-selector-container">
						{" "}
						{/* train toggle btn*/}
						<a
							href="/?type=1"
							className="train-search-box-toggle"
							onClick={() => {
								if (state.train) {
									return;
								} else {
									setState({
										plane: false,
										train: true,
										bus: false,
									});
								}
							}}
							onMouseMove={() => {
								setShakeState({
									train: true,
								});
							}}
							onMouseLeave={() => {
								setShakeState({
									train: false,
								});
							}}
						>
							<span id="train" className="train-icon">
								<FontAwesomeIcon
									icon={faTrain}
									shake={shakeState.train}
								/>
							</span>
							بلیط قطار
						</a>
					</div>
					<div className="bus-selector-container">
						{" "}
						{/* bus toggle btn*/}
						<a
							href="/?type=2"
							className="bus-search-box-toggle"
							onClick={() => {
								if (state.bus) {
									return;
								} else {
									setState({
										plane: false,
										train: false,
										bus: true,
									});
								}
							}}
							onMouseMove={() => {
								setShakeState({
									bus: true,
								});
							}}
							onMouseLeave={() => {
								setShakeState({
									bus: false,
								});
							}}
						>
							<span id="bus" className="bus-icon">
								<FontAwesomeIcon
									icon={faBus}
									shake={shakeState.bus}
								/>
							</span>
							بلیط اتوبوس
						</a>
					</div>
				</div>
				<div
					className="divider"
					style={{
						backgroundColor: state.plane
							? "#ff4e00"
							: state.train
							? "#ff7600"
							: state.bus
							? "#ff9700"
							: "initial",
					}}
				></div>{" "}
				{/*divides the selection part with the search part*/}
				{/*each search box will be triggered when the related button is clicked*/}
				{state.plane ? (
					<PlaneSearch />
				) : state.train ? (
					<TrainSearch />
				) : state.bus ? (
					<BusSearch />
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default SearchBox