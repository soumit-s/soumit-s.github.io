import styles from '@/styles/home/Projects.module.css'
import { SvgGithubModernComponent } from '@/svgs/SvgGithubModernComponent';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react'
import TypeIt from 'typeit';

export default function () {
    const headRef = useRef()

    return (
        <div className={styles.holder}>
            <div className={styles.showcase}>
                <div className={styles.head} ref={headRef}>
                    <div>Things</div>
                    <div>I have worked on</div>
                </div>
                <div className={styles.content}>
                    <ProjectList>
                        <Project
                            name='IEI Student Chapter CSE Website' tags={['web-app', 'next']}
                            github='https://github.com/soumit-s/SC-CSE_Official_website/tree/main'
                        >
                            The website of the IEI Student Chapter of my college.
                        </Project>
                        <Project tags={['language']} name='Fritz' github='https://github.com/soumit-s/fritz'>
                            An experimental weakly typed, implicity reactive language, I am working on.
                        </Project>
                        <Project tags={['html-parser']} name='Pre Parser' github='https://github.com/soumit-s/pre-parser'>
                            Simple library for parsing html. Used in a front end framework(similar to React) that I developed for learning puposes.
                        </Project>
                        <Project tags={['iot', 'xbox-controller', 'arduino']} name='Mission Control' github='https://github.com/soumit-s/bot_ctrl_terminal'>
                            An application to control a box lifter robot
                        </Project>
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
                children.map((v, k) => (
                    <li
                        key={k}
                        className={styles.projectHolder}
                    >
                        {v}
                    </li>
                ))
            }
        </ul>
    )
}

function Project({ tags = [], name, children, onClick, github }) {
    return (
        <div className={styles.project} pname={name}
            onClick={() => onClick ? onClick() : null}
        >
            <div className={styles.projectContent}>
                <div className={styles.projectName}>
                    {name}
                </div>
                <div className={styles.projectBody}>
                    <div className={styles.projectDesc}>
                        {children}
                    </div>
                    <div className={styles.projectDetails}>
                        <div>
                            <Link href={github} style={{ display: 'block' }}>
                                <SvgGithubModernComponent width='1.2em' height='1.2em' />
                            </Link>
                        </div>
                        <div className={styles.vertDivider}></div>
                        <TagList tags={tags} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function TagList({ tags, ...props }) {
    return (
        <div className={styles.tagList} {...props}>
            {
                tags.map((v, i) => (
                    <div key={i} className={styles.tag}>
                        {v}
                    </div>
                ))
            }
        </div>
    )
}