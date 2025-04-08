import styles from './cube.module.css';

import { useRef } from 'react';
import { motion, useAnimationFrame } from 'motion/react';
import cn from 'classnames';

export const Cube = () => {
    const cubeRef = useRef<HTMLDivElement>(null);

    useAnimationFrame(t => {
        if (!cubeRef.current) return;

        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50 + 50;

        cubeRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

    return (
        <motion.div className={styles.cube} ref={cubeRef}>
            <div className={cn(styles.side, styles.front)} />
            <div className={cn(styles.side, styles.left)} />
            <div className={cn(styles.side, styles.right)} />
            <div className={cn(styles.side, styles.top)} />
            <div className={cn(styles.side, styles.bottom)} />
            <div className={cn(styles.side, styles.back)} />
        </motion.div>
    );
};
