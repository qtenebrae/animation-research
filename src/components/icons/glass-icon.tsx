import { SVGProps } from 'react';

export const GlassIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            stroke='black'
            {...props}
        >
            <path
                d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M21 21L16.7 16.7'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
