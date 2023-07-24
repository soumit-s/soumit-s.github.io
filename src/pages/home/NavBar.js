import styles from '@/styles/home/NavBar.module.css'
import { useEffect, useRef, useState } from 'react'


export default function NavBar({ items, goto }) {
    return (
        <nav className={styles.bar}>
            <ul className={styles.list}>
                {
                    items.map((item, i) => [
                        (
                            i ?
                                <li key={i+items.length}>
                                    <svg display='block' width='0.5em' viewBox='0 0 16 16'>
                                        <circle
                                            cx='8' cy='8' r='7'
                                            fill='none'
                                            stroke='#666'
                                        ></circle>
                                    </svg>
                                </li> : null
                        ),
                        (
                            <li key={i}  
                                onClick={() => {
                                    goto ? goto(item) : null
                                }} 
                            >
                                <Item item={item} />
                            </li>
                        )])
                }
            </ul>
        </nav>
    )
}

function Item({ item }) {
    const itemRef = useRef()
    const upperRef = useRef()

    const [height, setHeight] = useState(0)

    let updateHeight = () => {
        setHeight(upperRef.current.getBoundingClientRect().height + 'px')
    }

    useEffect(() => { updateHeight() }, [])

    return (
        <div className={styles.item} ref={itemRef} style={{height}} onMouseOver={updateHeight}>
            <div className={styles.upper} ref={upperRef}>{item.name}</div>
            <div className={styles.lower}>{item.name}</div>
        </div>
    )
}