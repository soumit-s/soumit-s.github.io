import styles from '@/styles/home/ContentPanel.module.css';
import React, { useEffect, useRef, useState } from 'react';
import Projects from './Projects';

import * as THREE from 'three'
import Me from './Me';
import Stack from './Stack';
import Contact from './Contact';
import Landing from './Landing';

export default class ContentPanel extends React.Component {
    constructor(props) {
        super(props)
        this.bg = React.createRef()

        this.topBanner = React.createRef()

        this.landingRef = React.createRef()
        this.skillsRef = React.createRef()
        this.stackRef = React.createRef()
        this.projectsRef = React.createRef()
        this.contactRef = React.createRef()

        this.directions = {
            "me": {
                rotation: new THREE.Vector3(0, -Math.PI / 2, 0),
                ref: this.skillsRef
            },
            "stack": {
                rotation: new THREE.Vector3(0, Math.PI / 2, 0),
                ref: this.stackRef
            },
            "projects": {
                rotation: new THREE.Vector3(-Math.PI / 2, 0, 0),
                ref: this.projectsRef
            },
            "landing": {
                rotation: new THREE.Vector3(0, 0, 0),
                ref: this.landingRef
            },
            "contact": {
                rotation: new THREE.Vector3(Math.PI / 2, 0, 0),
                ref: this.contactRef
            }
        }

        this.currentPage = 'landing'
        this.gotoLandingPage = this.changePage.bind(this, 'landing')
    }

    componentDidMount() {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.bg.current.appendChild(this.renderer.domElement);

        this.material = new THREE.LineBasicMaterial({ color: 'white' })
        this.lineGeom = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
        this.wireframe = new THREE.LineSegments(this.lineGeom, this.material);

        this.scene.add(this.wireframe);

        this.camera.position.z = -3;

        this.renderer.render(this.scene, this.camera)

        this.prevTimeStamp = null;

        Object.keys(this.directions).forEach(k => {
            let page = this.directions[k];
            let ref = page.ref
            ref.current.style.display = 'none'
        })

        this.landingRef.current.style.display='unset'
        //this.changePage('landing', 'landing')
    }

    animate(funcs, meta, options, timeStamp) {
        let notComplete = funcs;

        if (this.prevTimeStamp) {
            let elapsed = (timeStamp || 0) - (this.prevTimeStamp || 0)
            notComplete = funcs.reduce((p, f) => {
                if (!f(elapsed, meta)) p.push(f)
                return p;
            }, [])

            this.renderer.render(this.scene, this.camera)

            if (!notComplete.length) {
                this.prevTimeStamp = null;
                if (options && options.next) options.next();
                return;
            }
        }

        this.prevTimeStamp = timeStamp || 0;

        requestAnimationFrame((t) => {
            this.animate(notComplete, meta, options, t);
        })
    }

    animateProperty(delta, to, step, getValue, setValue) {
        if (!step)
            return true;

        let s = getValue();
        if ((step > 0 && s >= to) || (step < 0 && s <= to)) {
            return true;
        }


        let n = s + step * delta;
        //console.log(">", n, s, step, delta, s + step * delta, to)
        if (step < 0)
            n = Math.max(to, n);
        else
            n = Math.min(to, n);
        //console.log(n)
        setValue(n);

        return false;
    }

    animateScale(delta, to, step) {
        return this.animateProperty(delta, to, step,
            () => this.camera.position.z,
            (v) => this.camera.position.z = v)
    }

    animateRotation(delta, to, step) {
        return this.animateProperty(delta, to.y, step.y,
            () => this.wireframe.rotation.y,
            (v) => this.wireframe.rotation.y = v) &&

            this.animateProperty(delta, to.x, step.x,
                () => this.wireframe.rotation.x,
                (v) => this.wireframe.rotation.x = v) &&

            this.animateProperty(delta, to.z, step.z,
                () => this.wireframe.rotation.z,
                (v) => this.wireframe.rotation.z = v)
    }

    performAnim(rotation, fromPage, toPage) {

        let getMul = (to, from) => {
            if (to > from) return 1
            else if (to < from) return -1;
            else return 0;
        }

        let rotStep = new THREE.Vector3(
            getMul(rotation.x, this.wireframe.rotation.x),
            getMul(rotation.y, this.wireframe.rotation.y),
            getMul(rotation.z, this.wireframe.rotation.z)
        )

        rotStep = rotStep.multiplyScalar(0.01);

        let from = this.directions[fromPage]
        let to = this.directions[toPage]

        to.ref.current.style.translate = 'none';
        from.ref.current.style.translate= 'none';

        let fifthStage = () => {
            from.ref.current.style.display = 'none';
            to.ref.current.style.display = 'block';
            to.ref.current.style.translate = 'none';
            from.ref.current.style.translate= 'none';

            to.ref.current.style.position = 'static';
            from.ref.current.style.position = 'static';
        }

        let fourthStage = () => {
            this.animate([


            ],
                { currentZ: 0.5, currentZStep: 0.002, ref: to.ref },
                { next: () => fifthStage() })
        }


        let secondStage = () => {
            let toStyle = to.ref.current.style;
            let fromStyle = from.ref.current.style;

            toStyle.scale = '0.3 0.3';
            //to.ref.current.style.translate = '100% 0 '
            fromStyle.position = 'absolute';
            fromStyle.top = toStyle.top = 0; 
            toStyle.translate = '100%';
            fromStyle.display = toStyle.display = 'block';


            this.animate([
                (delta, meta) => {
                    let r = this.animateProperty(delta, -100, -0.4,
                            () => meta.translateX,
                            (v) => {
                                meta.translateX = v;
                                //console.log(from.ref.current.style.translate, `translateX(${v}%)`)

                                from.ref.current.style.left = `${v}%`;
                                to.ref.current.style.translate = `${v + 100 }%`
                            });
                    return r;   
                }
            ],
                { translateX: 0 },
                { next: () => thirdStage() })
        }

        let thirdStage = () => {
            this.animate([
                (delta, meta) => {
                    let t = this.animateScale(delta, -3, meta.scaleStep)
                    meta.scaleStep *= 1.2;
                    return t;
                },

                (delta, meta) => {
                    //console.log('hola', delta, this.wireframe.rotation)
                    return this.animateRotation(delta,
                        rotation,
                        rotStep)
                },

                (delta, meta) => {
                    let { ref } = meta;

                    let r = this.animateProperty(delta, 1, meta.currentZStep,
                        () => meta.currentZ,
                        (v) => {
                            meta.currentZ = v;
                            ref.current.style.scale = `${v} ${v}`;
                        })

                    meta.currentZStep *= 1.2;

                    return r;
                }

            ], { scaleStep: -0.001, currentZ: 0.5, currentZStep: 0.002, ref: to.ref}, {
                next: () => fifthStage()
            })
        }

        this.animate([
            (delta, meta) => {
                let r = this.animateScale(delta, 2, meta.scaleStep)
                meta.scaleStep /= 1.4;
                return r;
            },
            (delta, meta) => {
                let { ref } = meta

                let r = this.animateProperty(delta, 0.3, meta.currentZStep,
                    () => meta.currentZ,
                    (v) => {
                        meta.currentZ = v;
                        ref.current.style.scale = `${v} ${v}`;
                    }
                )

                meta.currentZStep *= 1.2;

                return r;
            }
        ],
            {
                scaleStep: 0.1,
                ref: from.ref,
                currentZ: 1,
                currentZStep: -0.002
            },
            {
                next: () => secondStage()
            })
    }

    changePage(pageId) {
        console.log('fired')
        let to = this.directions[pageId]
        //console.log(rotation)

        Object.keys(this.directions).forEach(k => {
            let page = this.directions[k];
            let ref = page.ref
            //ref.current.style.display = 'none'
        })

        //to.ref.current.style.display = 'block';

        this.performAnim(to.rotation, this.currentPage, pageId)
        this.currentPage = pageId
    }


    render() {
        return (
            <div className={styles.contentPanel}>
                <MouseFollower />
                <div
                    ref={this.bg}
                    style={{
                        position: 'absolute',
                        //zIndex: '20',
                        top: '0', left: '0', right: '0', bottom: '0'
                    }}
                >

                </div>
                <div style={{
                    minHeight: '100vh',
                }}>
                    <div id="bio" ref={this.landingRef} className={styles.pageHolder}>
                        {/*<TopBanner goto={((page) => this.changePage(page.id)).bind(this)} />*/}
                        <Landing goto={((page) => this.changePage(page.id)).bind(this)}/>
                    </div>

                    <div id="skills" ref={this.skillsRef} className={styles.pageHolder}>
                        <BackButton onClick={this.gotoLandingPage} />
                        <Me gotoPage={this.changePage.bind(this)}/>
                    </div>
                    <div id="stack" ref={this.stackRef} className={styles.pageHolder}>
                        <BackButton onClick={this.gotoLandingPage} direction='right' />
                        <Stack />
                    </div>
                    <div id="showcase" ref={this.projectsRef} className={styles.pageHolder}>
                        <BackButton onClick={this.gotoLandingPage} direction='up' />
                        <Projects />
                    </div>
                    <div id="contact" ref={this.contactRef} className={styles.contact}>
                        <BackButton onClick={this.gotoLandingPage} direction='down' />
                        <Contact />
                    </div>
                </div>
            </div>
        )
    }
}

function BackButton({ onClick, direction = 'left' }) {
    const style = {}
    if (direction == 'left') {
        style.justifyContent = 'left'
    } else if (direction == 'right') {
        style.justifyContent = 'right'
    } else if (direction == 'up') {
        style.justifyContent = 'center'
    }

    return (
        <div
            onClick={() => onClick()}
            style={{
                position: 'absolute',
                top: '2rem',
                left: '0', right: '0',
                padding: '0 1cm',
                display: 'flex',
                zIndex: '20',
                ...style
            }}
        >
            <Arrow width='2rem' height='2rem' color='#eee' direction={direction} />
        </div>
    )
}


function Arrow({ width, height, color = 'black', direction = 'left' }) {
    var deg = 0;
    if (direction == 'right')
        deg = 180;
    else if (direction == 'up')
        deg = 90;
    else if (direction == 'down')
        deg = -90;

    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" display='block' width={width} height={height} style={{ rotate: deg + 'deg' }}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12L10 6M4 12L10 18M4 12H14.5M20 12H17.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    )
}


function MouseFollower() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const elRef = useRef()

    useEffect(() => {
        document.onmousemove = (event) => {
            var eventDoc, doc, body;

            event = event || window.event; // IE-ism

            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                    (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                    (doc && doc.scrollTop || body && body.scrollTop || 0) -
                    (doc && doc.clientTop || body && body.clientTop || 0);
            }

            setPosition({ x: event.pageX, y: event.pageY })
        }
    }, [])

    useEffect(() => {
        // Generate the particles
        let e = document.createElement('div');
        e.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'
        e.style.width = '1rem';
        e.style.height = '1rem';
        e.style.backgroundColor = 'white';
        e.style.transform = 'rotateZ(-45deg)';
        e.style.mixBlendMode = 'color-burn';

        elRef.current.appendChild(e);
    }, [])




    let createParticle = () => {

    }

    return (
        <div
            ref={elRef}
            className={styles.cursor}
            style={{
                position: 'absolute',
                top: position.y,
                left: position.x,

                color: 'white',

                zIndex: -1,
            }}>
        </div>
    )
}