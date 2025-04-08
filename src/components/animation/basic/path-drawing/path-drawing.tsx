import styles from './path-drawing.module.css';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { Card } from '@/components/ui/card/card';
import { Toggle } from '@/components/animation/layout/toggle/toggle';

export const PathDrawing = () => {
    const toggleSwitch = () => setIsOn(!isOn);
    const [isOn, setIsOn] = useState(false);

    return (
        <Card className={styles.card}>
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
