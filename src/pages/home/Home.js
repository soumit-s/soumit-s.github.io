import styles from '@/styles/home/Home.module.css'
import ContentPanel from './ContentPanel'

export default function Home() { 
    return (
        <div>
            <div className={styles.content}>
                <ContentPanel />
            </div>
        </div>
    )
}