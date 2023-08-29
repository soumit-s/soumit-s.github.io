import styles from '@/styles/home/Stack.module.css'
import SvgCppComponent from '@/svgs/SvgCppComponent'

import SvgCssComponent from '@/svgs/SvgCssComponent'
import SvgExpressComponent from '@/svgs/SvgExpressComponent'
import SvgHtmlComponent from '@/svgs/SvgHtmlComponent'
import SvgJavaComponent from '@/svgs/SvgJavaComponent'
import SvgJsComponent from '@/svgs/SvgJsComponent'
import SvgMongoComponent from '@/svgs/SvgMongoComponent'
import SvgNextjsComponent from '@/svgs/SvgNextjsComponent'
import SvgNodeJsComponent from '@/svgs/SvgNodeJsComponent'
import SvgPythonComponent from '@/svgs/SvgPythonComponent'
import SvgReactComponent from '@/svgs/SvgReactComponent'
import SvgRustComponent from '@/svgs/SvgRustComponent'
import SvgVueComponent from '@/svgs/SvgVueComponent'

import SvgGinGonicComponent from '@/svgs/SvgGinGonicComponent'

import React from 'react'

import { forwardRef } from 'react'
import SvgGoComponent from '@/svgs/SvgGoComponent'

export default function Stack() {
	return (
		<div className={styles.holder}>
			<div className={styles.content}>
				<p className={styles.head}>These are the things I use</p>
				<div className={styles.topics}>
					<WebStackTopic />
					<LanguagesIUseTopic/>
				</div>
			</div>
		</div>
	)
}


function WebStackTopic() {
	return (
		<Topic name={'Web Stack'}>
			<span> 
				Most of my projects are built using the <u>MERN</u> or the <u>MEVN</u> stack. 
				However, depending upon the performance requirements and the scale of the project, I replace
				NodeJS with either <i>Rust</i> or <i>Golang</i>
			</span>
			<CollapsableList>
				<FrontendStack svl='1.3em' />
				<BackendStack svl='1.3em' />
			</CollapsableList>
		</Topic>)	
}

function LanguagesIUseTopic() {
	let [iconWidth, iconHeight] = ['2em', '2em']

	return (
		<Topic name='Programming Languages that I use'>
			<div className={styles.langList} style={{paddingTop: '0.5em'}}>
				<Language name='Golang'>
					<SvgGoComponent width={iconWidth} height={iconHeight} />
				</Language>
				<Language name='JavaScript'>
					<SvgJsComponent width={iconWidth} height={iconHeight} />
				</Language>
				<Language name='Python'>
					<SvgPythonComponent width={iconWidth} height={iconHeight}/>
				</Language>
				<Language name='Java'>
					<SvgJavaComponent width={iconWidth} height={iconHeight}/>
				</Language>
				<Language name='Rust'>
					<SvgRustComponent width={iconWidth} height={iconHeight} color='white' />
				</Language>
				<Language name='Cpp'>
					<SvgCppComponent width={iconWidth} height={iconHeight}/>
				</Language>
			</div>
		</Topic>
	)
}



const FrontendStack = forwardRef(({ svl }, ref) => {
	return (
		<Category name='Frontend' ref={ref}>
			<Fw name='HTML5'>
				<SvgHtmlComponent width={svl} height={svl} />
			</Fw>
			<Fw name='CSS3'>
				<SvgCssComponent width={svl} height={svl} />
			</Fw>
			<Fw name='JavaScript'>
				<SvgJsComponent width={svl} height={svl} />
			</Fw>
			<Fw name='React'>
				<SvgReactComponent width={svl} height={svl} color='white' />
			</Fw>
			<Fw name='Vue'>
				<SvgVueComponent width={svl} height={svl} />
			</Fw>
			<Fw name='NextJS'>
				<SvgNextjsComponent width={svl} height={svl} color='white' />
			</Fw>
		</Category>
	)
})

const BackendStack = forwardRef(({ svl }, ref) => {
	return (
		<Category name='Backend' ref={ref}>
			<Fw name='Gin'>
				<SvgGinGonicComponent width={svl} height={svl} />
			</Fw>
			<Fw name='NodeJS'>
				<SvgNodeJsComponent width={svl} height={svl} />
			</Fw>
			<Fw name='Express'>
				<SvgExpressComponent width={svl} height={svl} color='white' />
			</Fw>
			<Fw name='MongoDB'>
				<SvgMongoComponent width={svl} height={svl} />
			</Fw>
		</Category>
	)
})




function Fw({ name, children }) {
	return (
		<div className={styles.fw}>
			<div>{children}</div>
			<div>{name}</div>
		</div>
	)
}

function FwList({ frameworks }) {
	return (
		<div className={styles.fwList}>
			{
				frameworks.map((fw, i) => (
					<div key={i}>{fw}</div>
				))
			}
		</div>
	)
}

function Category({ name, children }) {
	return (
		<div className={styles.category}>
			<p className={styles.categoryName}>{name}</p>
			<div>
				<FwList frameworks={children} />
			</div>
		</div>
	)
}

function VertWire({ height, color, img }) {
	const style = {
		borderLeft: '1px solid',
		height
	};

	if (color) {
		style.borderColor = color;
	} else if (img) {
		style.borderImage = img;
	}

	return (
		<div style={style}></div>
	)
}

function HoriWire({ width, color }) {
	return (
		<div style={{
			borderTop: '1px dashed',
			borderColor: color,
			width,
		}}></div>
	)
}

const NodePointSvg = forwardRef(function NodePointSvg({ width, height, color }, ref) {
	return (
		<svg width={width} height={height} viewBox="0 0 32 32" display='block' ref={ref}>
			<circle
				fill='transparent'
				stroke={color} strokeWidth='2'
				cx='16' cy='16' r='14.5' />
			<circle
				fill='none'
				stroke={color}
				cx='16' cy='16' r='8' />
		</svg>
	)
})

function CollapsableList({ children, wcolor = '#eee' }) {
	return (
		<div>
			{
				children.map((v, i) => (
					<div key={i} className={styles.clistEl} data-last-el={i + 1 == children.length}>
						<div className={styles.clistEl_Joint}>
							<NodePointSvg width='1em' height='1em' color='white' />
							<HoriWire width='1cm' color='white' />
						</div>
						<div className={styles.clistEl_Content}>{v}</div>
					</div>
				))
			}
		</div>
	)
} 

function Topic({ name, children }) {
	if (children instanceof Array) {
		var desc = children[0]
		var body = children.length > 1 ? children.slice(1) : null
	} else {
		var desc = children
		var body = null
	}

	return (
		<div className={styles.topic}>
			<div className={styles.topicHead}>
				<div className={styles.topicFolder}> - </div>
				<div>
					<div className={styles.topicName}>{name}</div>
					<div className={styles.topicDesc}>{desc}</div>
				</div>
			</div>
			<div className={styles.topicBody}>
				{body}
			</div>
		</div>
	)
}

function Language({ name, children }) {
	return (
		<div className={styles.lang} data-tooltip={name}>
			{children}
		</div>
	)
}