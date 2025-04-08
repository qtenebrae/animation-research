import styles from './gestures.module.css';

import { motion } from 'motion/react';

import { Card } from '@/components/ui/card/card';

export const TapAndHover = () => {
    return (
        <Card>
            <motion.div
                className={styles.box}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95, rotate: 5 }}
            >
                tap
            </motion.div>
        </Card>
    );
};
