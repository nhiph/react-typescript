import React, { ComponentPropsWithoutRef } from 'react'

// use union type and combine with a built-in props


type ButtonProps = {
    // el: 'button';
} & ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type AnchorProps = {
    // el: 'anchor';
} & ComponentPropsWithoutRef<'a'> & {
    href?: string;
};


function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props;
}

const Button = (props: ButtonProps | AnchorProps) => {
    // typescript try to prevent to access the properties that don't exist => can not use props.href to condition

    // but can use 'href' in props is OK
    if (isAnchorProps(props)) {
        return <a className='button' {...props}></a>
    }
    
    return <button className='button' {...props}></button>
}

export default Button
