import styles from './dropdown.module.css';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Card } from '@/components/ui/card/card';

interface DropdownProps {
    options: string[];
    onSelect: (option: string) => void;
}

export const Dropdown = ({ options, onSelect }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            scaleY: 1,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
            },
        },
        closed: {
            opacity: 0,
            y: -10,
            scaleY: 0,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    const iconVariants = {
        open: { rotate: 180, stroke: 'var(--blue)' },
        closed: { rotate: 0 },
    };

    return (
        <Card className={styles.card}>
            <div className={styles.container} ref={dropdownRef}>
                <motion.button
                    className={styles.button}
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.97 }}
                >
                    <span className={styles.selected}>{selectedOption || '👀 Выбрать'}</span>
                    <motion.svg
                        variants={iconVariants}
                        animate={isOpen ? 'open' : 'closed'}
                        width='20'
                        height='20'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='var(--pink)'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                        />
                    </motion.svg>
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            className={styles.menu}
                            initial='closed'
                            animate='open'
                            exit='closed'
                            variants={menuVariants}
                            style={{ originY: 0 }}
                        >
                            {options.map(option => (
                                <motion.li
                                    key={option}
                                    className={styles.item}
                                    onClick={() => handleSelect(option)}
                                    whileHover={{ scale: 1.05, fontWeight: 600 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {option}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </Card>
    );
};
