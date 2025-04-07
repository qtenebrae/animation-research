'use client';

import styles from './home.module.css';

import { AnimatePresence, motion, useAnimationFrame } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

import { Card } from '@/components/ui/card/card';
import { Toggle } from '@/components/ui/toggle/toggle';
import cn from 'classnames';

export const Home = () => {
    const toggleSwitch = () => setIsOn(!isOn);
    const [isOn, setIsOn] = useState(false);

    const [order, setOrder] = useState(initialOrder);

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
        return () => clearTimeout(timeout);
    }, [order]);

    const cubeRef = useRef<HTMLDivElement>(null);

    useAnimationFrame(t => {
        if (!cubeRef.current) return;

        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50 + 50;

        cubeRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <div className={styles.home}>
            <Card>
                <motion.div
                    className={styles.box}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95, rotate: 5 }}
                >
                    tap
                </motion.div>
            </Card>

            <Card className={styles.toggleAnimation}>
                <Toggle isOn={isOn} toggleSwitch={toggleSwitch} />

                <AnimatePresence initial={false}>
                    {isOn ? (
                        <motion.div
                            className={styles.box}
                            initial={{ opacity: 0, scale: 0, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: 360 }}
                            exit={{ opacity: 0, scale: 0, rotate: 0 }}
                            transition={{ type: 'spring', duration: 0.8 }}
                        >
                            spin
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </Card>

            <Card className={styles.toggleAnimation}>
                <Toggle isOn={isOn} toggleSwitch={toggleSwitch} />

                <AnimatePresence initial={false}>
                    {isOn ? (
                        <motion.svg
                            width='160'
                            height='160'
                            viewBox='0 0 160 160'
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        >
                            <motion.circle
                                className='circle-path'
                                cx='80'
                                cy='80'
                                r='60'
                                style={{
                                    strokeWidth: 10,
                                    strokeLinecap: 'round',
                                    fill: 'transparent',
                                    stroke: 'var(--pink)',
                                }}
                                variants={draw}
                            />
                        </motion.svg>
                    ) : null}
                </AnimatePresence>
            </Card>

            <Card>
                <div className={styles.layout}>
                    {order.map(backgroundColor => (
                        <motion.div
                            key={backgroundColor}
                            layout
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                            className={styles.item}
                            style={{ backgroundColor }}
                        />
                    ))}
                </div>
            </Card>

            <div className={styles.space}>
                <motion.div className={styles.cube} ref={cubeRef}>
                    <div className={cn(styles.side, styles.front)} />
                    <div className={cn(styles.side, styles.left)} />
                    <div className={cn(styles.side, styles.right)} />
                    <div className={cn(styles.side, styles.top)} />
                    <div className={cn(styles.side, styles.bottom)} />
                    <div className={cn(styles.side, styles.back)} />
                </motion.div>
            </div>

            {Array.from({ length: 4 }).map((_, i) => (
                <Card
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', duration: 0.4 }}
                    viewport={{ once: true }}
                />
            ))}
        </div>
    );
};

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

const initialOrder = ['#ff0088', '#dd00ee', '#9911ff', '#0d63f8'];

function shuffle([...array]: string[]) {
    return array.sort(() => Math.random() - 0.5);
}
