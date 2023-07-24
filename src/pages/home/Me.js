import styles from '@/styles/home/Me.module.css'

export default function Me({gotoPage}) {
	return (
		<div className={styles.holder}>
			<div className={styles.content}>
				<p className={styles.head}>About Me</p>

				<p>
					Multi-dimensional developer, having an expertise in <i>Web Development</i> and <i>Compiler Design</i>.<br />
					As a <Kwd>fullstack</Kwd> developer, I create <Kwd>simple</Kwd>, <Kwd>elegant</Kwd> and <Kwd>fluid</Kwd> <b> user 
						interfaces</b>, paired with <i>performant</i>, <i>scalable</i> and <i>fault-tolerant</i> backend services. 
				</p>

				<p>
					Coming to compiler design, I exercise fluency when it comes to writing <Kwd>Lexers</Kwd> and <Kwd>Parsers</Kwd> for
					programming languages.
					Having an obsession with programming languages, I have studied compilers and
					interpreters ever since I was introduced to coding as a kid.
					My obsession with programming languages culminated in the form of an experimental language, named <Kwd>Fritz</Kwd>.
				</p>

				<div>
					<span style={{borderBottom: '1px solid #444'}}>Other skills</span>
					<p><Bullet /> 3d Modeling (using <A href="https://www.blender.org/">Blender</A>)</p>
					<p><Bullet /> Art: Sketching (Cityscapes, Semi-realistic and Realistic potraits, Character Designs)</p>
				</div>

				<div className={styles.checkOut} onClick={() => gotoPage('projects')}>
					<span style={{ marginRight: '1rem' }}>Check out my work</span>
					<TopRightDiagArrow width='1.2em' height='1.2em' color='white' />
				</div>
			</div>
		</div>
	)
}

function Kwd({ children }) {
	return (<span className={styles.kwd}>{children}</span>)
}

function TopRightDiagArrow({ width, height, color = 'black', display = 'block' }) {
	return (
		<svg viewBox="0 0 24 24" display={display} width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>)
}

function A({ children, href }) {
	return <a href={href} className={styles.link}>{children}</a>
}

function Bullet() {
	//⦿ 
	return <span style={{fontFamily: 'Fira Code, monospace', fontWeight: 'normal'}}>{'->'}</span>
}