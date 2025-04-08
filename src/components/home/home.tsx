'use client';

import styles from './home.module.css';

import { Card } from '@/components/ui/card/card';
import { TapAndHover } from '@/components/animation/gestures/tap-and-hover';
import { Exit } from '@/components/animation/basic/exit/exit';
import { PathDrawing } from '@/components/animation/basic/path-drawing/path-drawing';
import { GridShuffle } from '@/components/animation/layout/grid-shuffle/grid-shuffle';
import { Cube } from '@/components/animation/animation-frame/cube/cube';
import { Dropdown } from '@/components/animation/layout/dropdown/dropdown';

export const Home = () => {
    const options = [
        '🚀 Wake up to reality!',
        '❌ Nothing ever goes as planned',
        '🌏 in this accursed world.',
    ];

    return (
        <div className={styles.home}>
            <TapAndHover />
            <Exit />
            <PathDrawing />
            <GridShuffle />

            <div className={styles.space}>
                <Cube />
            </div>

            {/*{Array.from({ length: 4 }).map((_, i) => (*/}
            {/*    <Card*/}
            {/*        key={i}*/}
            {/*        initial={{ opacity: 0, scale: 0 }}*/}
            {/*        whileInView={{ opacity: 1, scale: 1 }}*/}
            {/*        transition={{ type: 'spring', duration: 0.4 }}*/}
            {/*        viewport={{ once: true }}*/}
            {/*    />*/}
            {/*))}*/}

            <Dropdown options={options} onSelect={(option: string) => console.log(option)} />
        </div>
    );
};
