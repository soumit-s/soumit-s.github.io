import styles from '@/styles/MouseCursor.module.css'
import { useEffect, useRef, useState } from 'react'

export function MouseCursor() {
    const cursorRef = useRef()

    const createParticle = ({x, y}) => {
        let p = document.createElement('div')
        p.classList.add(styles.particle)
        p.style.left = `${x+2}px`
        p.style.top = `${y+2}px`

        cursorRef.current.parentElement.appendChild(p)

        setTimeout(() => {
            p.remove()
        }, 300)
    }

    useEffect(() => {
        const calcPos =  (e) => {
            const pos = {
                x: e.clientX,
                y: e.clientY,
            }

            createParticle(pos)

            cursorRef.current.style.transform = `translate3d(${pos.x+2}px, ${pos.y+2}px, 0)`
        }

        document.addEventListener('mousemove', calcPos)
    }, [])

    return (
        <div className={styles.cursor} ref={cursorRef}>
        </div>
    )
}