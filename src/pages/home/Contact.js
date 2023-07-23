import Copy from '@/global/Copy'
import styles from '@/styles/home/Contact.module.css'
import SvgCopy1Component from '@/svgs/SvgCopy1Component'

import SvgDiscordComponent from '@/svgs/SvgDiscordComponent'
import SvgGithubComponent from '@/svgs/SvgGithubComponent'
import SvgTwitterComponent from '@/svgs/SvgTwitterComponent'

import React, { useRef, useState } from 'react'

export default function Contact() {
	return (
		<div className={styles.holder}>
			<div className={styles.content}>
				<div className={styles.head}>
					<div>Reach Me</div>
					<div></div>
				</div>
				<div className={styles.body}>
					<div className={'pc-only'}><LetsTalk /></div>
					<div><ContactForm /></div>
				</div>
			</div>
		</div>
	)
}

function ContactForm() {
	return (
		<div>
			<div style={{ margin: "1em 0" }}>
				<label className={styles.label}>
					Email
				</label>
				<div>
					<input type='text' className={styles.text} placeholder='yourmail@example.com' />
				</div>
			</div>
			<div style={{ marginBottom: "1em" }}>
				<textarea 
					className={styles.text}
					style={{
						minHeight: '8rem',
						resize: 'none'
					}}

					placeholder='Your Message'
				>
					
				</textarea>
			</div>
			<div style={{
				display: 'flex', justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: '4em',
			}}>
				<div><button className={styles.button1}>Send</button></div>
				<div>
					<SocialList />
				</div>
			</div>
		</div>
	)
}

function LetsTalk() {
	return (
		<div className={styles.letsTalkSection}>
			<div className={styles.info}>
				<div style={{
					fontFamily: "'Victor Mono', monospace",
					fontSize: '2em',
				}}>
					<div><i><b>Soumit</b></i></div>
					<div style={{fontSize: '1.5em', fontWeight: 'lighter', color: '#bbb'}}>Srimany</div>
				</div>
				<InfoField name='email' value='soumit.srim@gamil.com'>
					<p style={{color: 'var(--highlight-color)'}}>
						<i>soumit.srim@gmail.com</i>
					</p>
					</InfoField>
			</div>			
			<div>
				<div style={{
					fontFamily: "'Space Grotesk', monospace",
					fontWeight: "normal",
					fontSize: '1.5em',
					padding: '1em 0',
				}}>Have an idea ?</div>
				<div style={{
					fontFamily: "'Space Grotesk', monospace",
					fontWeight: 'bold',
					fontSize: '4em',
					lineHeight: '1em',
				}}>Let's Talk</div>
			</div>
		</div>
	)
}

function InfoField({ name, value, children }) {
	const [isHover, setHover] = useState(false)
	const copyRef = useRef();

	return (
		<div className={styles.info}

			style={{display: 'flex', alignItems: 'center', position: 'relative'}}

			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}

			onClick={() => {
				if (value) 
					copyRef.current.copy(value);
			}}


		>
			<div style={{marginRight: '1em', textTransform: 'uppercase', fontWeight: 'bold', color: '#888' }}>{name}:</div>
			<div style={{marginRight: '1em'}}>{children}</div>
			<div>
				<Copy width='1.8em' height='1.8em' color='white' show={isHover} ref={copyRef}/>
			</div>
		</div>
	)
}


function Social({ name, color, logo, href }) {

	const [isHover, setHover] = useState(false)

	return (
		<a href={href} className={styles.social} 
			onMouseOver={() => setHover(true)} 
			onMouseLeave={() => setHover(false)}
		>
			{React.createElement(logo, {
				width: '1.2em', height: '1.2em',
				color: 'white', //isHover ? color : 'white'
			})}
		</a>
	)
}


function SocialList() {
	const socials = [
		{ name: 'Github', color: 'white', logo: SvgGithubComponent, href: 'https://github.com/soumit-s' },
		{ name: 'Discord', color: 'blue', logo: SvgDiscordComponent, href: '' },
		{ name: 'Twitter', color: 'skyblue', logo: SvgTwitterComponent, href: '' }
	]

	return (
		<div className={styles.socialList}>
			{
				socials.map((e, i) => {
					return (
						<div key={i}>
							<Social {...e} />
						</div>
					)
				})
			}
		</div>
	)
}
