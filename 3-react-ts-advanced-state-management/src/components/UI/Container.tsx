import React, { type ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
// https://www.youtube.com/watch?v=hwijdIR-sEM&list=PLLVxJY4d92HJ7atIT158HvAgu174dFOGX&index=38


// accept a genric type that we don;t know exactly component, but we know it in component type
type ContainerProps<T extends ElementType> = {
    as?: T,
    children: ReactNode,
} & ComponentPropsWithoutRef<T>;


export default function Container<C extends ElementType>({ as, children, ...props }: ContainerProps<C>) {
    const Component = as || 'div';

    return <Component {...props}>{children}</Component>
}

