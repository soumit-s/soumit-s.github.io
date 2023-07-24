
import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'


function Comet({ x, y, angle, length, cid, speed, distance, onOver }) {

    let rad = Math.PI * angle / 180

    const mX = useMotionValue(x)
    const mY = useMotionValue(y)

    const toPerc = (v) => `${v}%`

    const x1 = useTransform(mX, toPerc)
    const y1 = useTransform(mY, toPerc)

    const x2 = useTransform(mX, (v) => toPerc(v - length * Math.cos(rad)))
    const y2 = useTransform(mY, (v) => toPerc(v + length * Math.sin(Math.abs(rad))))

    const distanceTravelled = useMotionValue(0)
    const gradientWhiteStop = useTransform(
        useTransform(distanceTravelled, [0, distance/5, distance], [0, 50, 0]), toPerc)
    const gradientBlackStop = useTransform(
        useTransform(distanceTravelled, [0, distance/5, distance], [0, 100, 0]), toPerc)

    const update = (() => {
        if (distanceTravelled.get() >= distance) {
            onOver(this)
            return;
        }
        
        distanceTravelled.set(distanceTravelled.get() + speed)

        mX.set(mX.get() - speed * Math.cos(rad))
        mY.set(mY.get() + speed * Math.sin(Math.abs(rad)))
        requestAnimationFrame(update)
    }).bind(this)

    useEffect(() => {
        update()
    }, [])


    return (
        <g>
            <linearGradient id={'gid' + cid}>
                <motion.stop offset={gradientWhiteStop} stopColor="white" />
                <motion.stop offset={gradientBlackStop} stopColor="black" />
            </linearGradient>
            <motion.line 
                stroke={`url(#gid${cid})`} strokeWidth='1px' strokeLinecap='round'
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
            />
        </g>
    )
}

function CometHolder({i}) {
    const genNewComet = () => ({ cid: i, ...createCometData({key: null})})

    let comet = genNewComet()
    const [renew, setRenew] = useState(false)

    return ( <Comet key={renew} cid={i} x={comet.x} y={comet.y} length={comet.length} angle={comet.angle} distance={comet.distance} speed={comet.speed} onOver={(() => {
        comet = genNewComet()
        setTimeout(() => setRenew(!renew), randrange(1000, 4000))
    }).bind(this)}/>)    
}


function Star({x, y, blinking = false}) {
    const isWinking = useMotionValue(false)
    const color = useTransform(isWinking, (v) => v ? 'gray': 'white')

    let wink = () => {
        const initial = isWinking.get()
        isWinking.set(!isWinking.get())

        setTimeout(wink, (() => {
            if (initial)
                return randrange(100, 500)
            else
                return randrange(1000, 2000)
        })())
    }
    useEffect(() => {
        // Start winking.
        if (blinking)
            setTimeout(wink, 1000)
    }, [])

    return (
        <motion.circle cx={x + '%'} cy={y + '%'} fill={color} r='1' />
    )
}


const randrange = (min, max) => min + Math.random() * (max - min)



function createCometData({ key }) {
    return {

        key,

        // Starting location
        x: randrange(10, 100),
        y: randrange(0, 20),

        angle: 55,
        length: randrange(5, 30),

        speed: randrange(0.05, 0.2),

        // Distance to be travelled before disappearing
        distance: randrange(50, 110)
    }
}


export default function NightSkyBg() {
    const svgRef = useRef()

    const [stars, setStars] = useState([]);
    const [comets, setComets] = useState([]);

    // Generate the stars.
    useEffect(() => {
        let arr = []
        let numStars = randrange(13, 15)
        let numBlink = randrange(5, 8)

        for (let i = 0, countBlink = 0; i < numStars; ++i) {
            const shouldBlink = numBlink > countBlink && Math.round(Math.random()) == 1;
            if (shouldBlink) countBlink++;

            let star = {
                x: randrange(0, 100),
                y: randrange(0, 90),
                blinking: shouldBlink
            }

            arr.push(star)
        }

        setStars(arr)
    }, [])

    // Create the comets
    useEffect(() => {
        let arr = []
        let numComets = 4;
        for (let i = 0; i < numComets; ++i) {
            let comet = createCometData({key: i})
            arr.push(comet)
        }

        setComets(arr)
    }, [])


    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <svg width='100%' height='100%' ref={svgRef} display='block'
                preserveAspectRatio='xMinYMid'
                
            >
                {
                    stars.map((star, i) => (
                        <Star key={i} {...star}/>
                    ))
                }

                {
                    comets.map((comet, i) => (
                        <CometHolder key={i} i={i} />
                    ))
                }
            </svg>
        </div>
    )
}
