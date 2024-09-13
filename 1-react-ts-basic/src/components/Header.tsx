import React, { type ReactNode, type FC } from 'react'


type HeaderProps = {
    children: ReactNode;
    image: {
        src: string;
        alt: string;
    };
}

const Header: FC<HeaderProps> = (props) => {
    const { image, children } = props;

    return (
        <header>
            <img src={image.src} alt={image.alt} />
            {children}
        </header>
    )
}

export default Header
