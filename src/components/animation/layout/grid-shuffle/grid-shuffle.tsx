import styles from './grid-shuffle.module.css';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

import { Card } from '@/components/ui/card/card';

export const GridShuffle = () => {
    const [order, setOrder] = useState(initialOrder);

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
        return () => clearTimeout(timeout);
    }, [order]);

    return (
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
    );
};

const initialOrder = ['#ff0088', '#dd00ee', '#9911ff', '#21befd'];

function shuffle([...array]: string[]) {
    return array.sort(() => Math.random() - 0.5);
}
