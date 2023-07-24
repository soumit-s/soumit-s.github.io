import styles from '@/styles/home/Projects.module.css'

import { useEffect, useRef, useState } from 'react'
import TypeIt from 'typeit';

export default function () {
    const headRef = useRef()

    useEffect(() => {
        new TypeIt(headRef.current, {
            speed: 50,
            startDelay: 900,
            afterComplete: (i) => {
                i.destroy()
            }
        })
        .type('These are the')
        .break()
        .type('things I have done')
        .go()
    }, [])
    
    return (
        <div className={styles.holder}>
            <div className={styles.showcase}>
                <div className={styles.head} ref={headRef}>
                   
                </div>
                <div className={styles.content}>
                    <ProjectList>
                        <Project tags={['language']} name='Fritz'></Project>
                        <Project tags={['html-parser']} name='Pre Parser'></Project>
                        <Project tags={['iot', 'xbox-controller', 'arduino']} name='Mission Control'></Project>
                    </ProjectList>

                </div>
            </div>
        </div>
    )
}

function ProjectList({ children }) {
    const [active, setActive] = useState(null);

    useEffect(() => {

    }, [active])

    return (
        <ul className={styles.projectList}>
            { 
                children.map((v, k) => {
                    return [(
                        k ? 
                        <li key={children.length+k} style={{
                            color: 'white',
                            display: 'inline-block',
                            borderLeft: '1px solid white',
                            minHeight: 'calc(var(--fsize) + 0.5rem)',
                            margin: '0 2rem',
                            borderColor: '#333',
                        }}>
                            
                        </li> : null
                    ),(
                        <li
                            key={k}
                            className={styles.projectHolder}
                        >
                            {v}
                        </li>
                    )]
                })
            }
        </ul>
    )
}

function Project({ tags = [], name, children, onClick }) {
    return (
        <div className={styles.project} pname={name} 
            onClick={() => onClick ? onClick() : null}
        >
            <div className={styles.projectName}>
                {name}
            </div>
        </div>
    )
}