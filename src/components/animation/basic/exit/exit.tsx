import styles from './exit.module.css';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { Card } from '@/components/ui/card/card';
import { Toggle } from '@/components/animation/layout/toggle/toggle';

export const Exit = () => {
    const toggleSwitch = () => setIsOn(!isOn);
    const [isOn, setIsOn] = useState(false);

    return (
        <Card className={styles.card}>
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
    );
};
