import React, { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from 'react'

export type FormWithRefHanle = {
    clear: () => void;
}

type FormWithRefProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

const FormWithRef = forwardRef<FormWithRefHanle, FormWithRefProps>(({onSave, children, ...otherProps}: FormWithRefProps, ref) => {
    // ref param is represent for useImperativeHandle, it's pass from parent, so type of forwardRef is FormWithRefHanle for the first

    const formWithRef = useRef<HTMLFormElement>(null);

    // any methods should be able to be called any outside of compoent
    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('CLEARING');
                formWithRef.current?.reset();
            }
        };  
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData)
        console.log('data', data);
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={formWithRef}>
            {children}
        </form>
    )
});

export default FormWithRef
