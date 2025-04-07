import styles from './container.module.css';

import React, { PropsWithChildren } from 'react';
import cn from 'classnames';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const Container = ({ children, className, ...props }: ContainerProps) => {
    return (
        <div className={cn(styles.container, className)} {...props}>
            {children}
        </div>
    );
};
