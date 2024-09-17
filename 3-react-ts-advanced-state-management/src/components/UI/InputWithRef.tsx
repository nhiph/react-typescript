import React, { ComponentPropsWithoutRef, forwardRef, type FC } from 'react'

// because function component can not recieve ref as attr, we have to use forwardRef to wrap entire function component, it will recieve 2 parameters ref and props


type InputWithRefProps = {
    label: string;
    id: string; // for htmlFor of label and id of input
} & ComponentPropsWithoutRef<'input'>; // ComponentPropsWithoutRef is to define all default remaining props, so component can accept all props belongs to attribute of input element


// Input core is reused everywhere in source
// ...props: store all remaining properties of obj
// spread of properties as key & value into input
const InputWithRef = forwardRef<HTMLInputElement, InputWithRefProps>(({label, id, ...props}: InputWithRefProps, ref) => {

    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} ref={ref}/>
        </p>
    )
});

export default InputWithRef;
