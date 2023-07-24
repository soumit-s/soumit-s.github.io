import styles from '@/styles/home/Landing.module.css'

import { useRef, useEffect } from 'react'
import TypeIt from 'typeit'
import NavBar from './NavBar'

import NightSkyBg from '@/global/NightSkyBg'

export default function Landing({ goto }) {
    return (
        <div className={styles.holder}>
            <div className={styles.content}>
                <div style={{position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100vw', height: '100vh'}}>
                    <NightSkyBg />
                </div>
                <div className={styles.head}>I am Soumit</div>
                <div className={styles.head2}>Welcome to my portfolio</div>

                <div style={{ margin: '1em 0' }}><A /></div>

                {/*<div><SineDivider /></div>*/}
                <div>
                    <PcNavBar goto={goto} />
                </div>
            </div>
        </div>
    )
}




function A() {
    const descRef = useRef()

    useEffect(() => {
        let lower = new TypeIt(descRef.current.children[1], {
            speed: 100,
            startDelay: 900,
            lifeLike: true,
            loop: true,
            //cursorChar: '▊',
        })
            .type('Software Developer')
            .move(-' Developer'.length)
            .delete('Software'.length, { delay: 1000 })
            .pause(1000)
            .type('Frontend')
            .pause(1000)
            .delete('Frontend'.length)
            .pause(1000)
            .type('Backend')
            .pause(1000)
            .delete('Backend'.length, { delay: 1000 })
            .type('Fullstack')
            .move(null, { to: 'END' })
            .delete(null, { to: 'START', delay: 100 })

        lower.go()
    }, [])

    const cursorStyle = {
        '--ti-cursor-color': '#888',
        '--ti-cursor-font-weight': '300',
        //'--ti-cursor-transform': 'translateX(0.5rem)'
    }

    return (
        <div>
            <div 
                ref={descRef}
                style={{
                    color: 'var(--normal-text-color)',
                    fontFamily: 'Victor Mono',
                    fontSize: '1rem',
                    fontWeight: 'lighter',

                    padding: '1rem 0',
                    background: 'transparent',

                    display: 'flex',
                    alignItems: 'center',

                    borderRadius: '0.1cm',

                    '--ti-cursor-font-family': 'Victor Mono',

                    ...cursorStyle
                }}
            >
                <b style={{
                    marginRight: '1rem',
                    fontFamily: 'Ubuntu Mono',
                    fontWeight: 'bolder',
                }}>$</b>
                <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden' }}></div>
            </div>
        </div>
    )
}


function PcNavBar({ goto }) {
    let items = [
        { name: 'Me', href: '#me', id: 'me' },
        { name: 'Stack', href: '#stack', id: 'stack' },
        { name: 'Showcase', href: '#showcase', id: 'projects' },
        { name: 'Contact', href: '', id: 'contact' },
    ]

    return (
        <NavBar items={items} goto={goto} />
    )
}


