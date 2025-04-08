import styles from './accoridion.module.css';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

export const Accordion = ({ items }: { items: AccordionItem[] }) => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenId(prevId => (prevId === id ? null : id));
    };

    const contentVariants = {
        open: {
            height: 'auto',
            opacity: 1,
            y: 0,
            scaleY: 1,
            transition: {
                opacity: { duration: 0.2, delay: 0.1 },
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
            },
        },
        closed: {
            height: 0,
            opacity: 0,
            y: -20,
            scaleY: 0.95,
            transition: {
                opacity: { duration: 0.2, delay: 0.1 },
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };
    return (
        <div className={styles.accordion}>
            {items.map(item => (
                <div key={item.id} className={styles.item}>
                    <motion.div className={styles.header} onClick={() => toggleItem(item.id)}>
                        <h3>{item.title}</h3>
                        <motion.div
                            className={styles.icon}
                            animate={{ rotate: openId === item.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            ▼
                        </motion.div>
                    </motion.div>

                    <AnimatePresence>
                        {openId === item.id && (
                            <motion.div
                                className={styles.content}
                                variants={contentVariants}
                                initial='closed'
                                animate='open'
                                exit='closed'
                                style={{
                                    originY: 0,
                                    overflow: 'hidden',
                                }}
                            >
                                <p>{item.content}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};
