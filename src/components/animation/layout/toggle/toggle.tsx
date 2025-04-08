import styles from './toggle.module.css';

import { motion } from 'motion/react';
import cn from 'classnames';

interface ToggleProps {
    isOn: boolean;
    toggleSwitch: () => void;
}

export const Toggle = ({ isOn, toggleSwitch }: ToggleProps) => {
    return (
        <motion.button
            className={cn(styles.toggle, {
                [styles.toggleActive]: isOn,
            })}
            whileTap={{ scale: 0.97 }}
            onClick={toggleSwitch}
        >
            <motion.div
                className={cn(styles.handle, {
                    [styles.handleActive]: isOn,
                })}
                animate={{
                    backgroundColor: isOn ? 'var(--blue)' : 'var(--pink)',
                    boxShadow: isOn
                        ? '0 0 8px 4px rgba(var(--blue-rgb), 0.3)'
                        : '0 0 8px 4px rgba(var(--pink-rgb), 0.3)',
                }}
                layout
                transition={{
                    type: 'spring',
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </motion.button>
    );
};
