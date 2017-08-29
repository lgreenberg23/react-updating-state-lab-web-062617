// Code YouTubeDebugger Component Here

import React from 'react'

class YouTubeDebugger extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			errors: [], 
			user: null, 
			settings: { 
				bitrate: 8, 
				video: { 
					resolution: '1080p' }
			} 
		}
	}

	// const newRes = { resolution: '720p' }
	// const newBitrate = { bitrate: 12 }

	changeBitrate = (event) => {
		this.setState({
		settings: {
			...this.state.settings, bitrate: 12
			},
		});
	}
		

	changeRes = (event) => {
		this.setState({
		settings: {
			...this.state.settings, 
			video: {
		 	...this.state.settings.video, resolution: '720p' },
			},
		})
	}


	render(){
		return (
			<div>
				<button className='bitrate' onClick={this.changeBitrate}>Change bits</button>
				<button className='resolution' onClick={this.changeRes}>Change res</button>
			</div>
		)
	}
}



export default YouTubeDebugger

// this.setState({
//   addressInfo: {
//     ...this.state.addressInfo,
//     city: 'New York City',
//   },
// });

// This component has several state properties. The initial state shape looks 
// like this: 
// js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
// Create a button with the class 'bitrate'. Clicking this button changes the 
// settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the 
// settings.video.resolution state property to '720p'.