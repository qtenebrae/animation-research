import styles from './card.module.css';

import { motion, MotionProps } from 'motion/react';
import React from 'react';
import cn from 'classnames';

type CardProps = React.HTMLProps<HTMLDivElement> & MotionProps;

export const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <motion.div className={cn(styles.card, className)} {...props}>
            {children}
        </motion.div>
    );
};
