import React, { useRef, type FormEvent } from 'react'


type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
};


const NewGoal = (props: NewGoalProps) => {
    const { onAddGoal } = props;

    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset(); //built-in method provided by formElement
        onAddGoal(enteredGoal, enteredSummary);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='goal'>Your goal</label><br />
                <input id='goal' type='text' ref={goal}></input>
            </p>
            <p>
                <label htmlFor='summary'>Short Summary</label><br />
                <input id='summary' type='text' ref={summary}></input>
            </p>
            <p>
                <button>Add goal</button>
            </p>
        </form>
    )
}

export default NewGoal
