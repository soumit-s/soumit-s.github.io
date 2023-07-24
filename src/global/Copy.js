import React, { forwardRef, useImperativeHandle, useState } from "react";

import SvgCopy1Component from "@/svgs/SvgCopy1Component";

const Copy = forwardRef(({ width, height, color, show }, ref) => {
	let [isActive, setActive] = useState(false);

	let copy = (value) => {
		navigator.clipboard.writeText(value)
		activate()
	}

	let activate = () => {
		if (!isActive) {
			setActive(true)
			setTimeout(() => setActive(false), 1000)
		}
	}

	useImperativeHandle(ref, () => {
		return {
			copy(value) { copy(value) },
			activate() { activate() }
		}
	})

	
	return (
		<div style={{position: 'relative'}}>
			<div style={{opacity: show ? '1': '0', transition: 'all 400ms'}}>
				<SvgCopy1Component 
					width={width} 
					height={height} 
					color={color}
					fill={isActive ? color : 'none'} 
				/>
			</div>
			<div style={{
				position: 'absolute',
				top: '-1em',
				left: 'calc(100% + 0.5cm)',

				background: '#222',
				color: '#ddd',

				borderRadius: '0.4em',
				boxShadow: '0 0 10px 1px #212121',

				fontFamily: "'Victor Mono', monospace",
				fontStyle: 'italic',
				padding: '0.7em',

				opacity: isActive ? '1' : '0',

				transition: 'all 200ms ease-out' 
			}}>
				Copied
			</div>
		</div>
	)
})

export default Copy;