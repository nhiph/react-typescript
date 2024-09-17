import React, { ComponentPropsWithoutRef, type FC } from 'react'

type InputProps = {
    label: string;
    id: string; // for htmlFor of label and id of input
} & ComponentPropsWithoutRef<'input'>; // ComponentPropsWithoutRef is to define all default remaining props, so component can accept all props belongs to attribute of input element


// Input core is reused everywhere in source
// ...props: store all remaining properties of obj
// spread of properties as key & value into input
const Input: FC<InputProps> = ({label, id, ...props}) => {

    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} />
        </p>
    )
}

export default Input
