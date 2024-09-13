import React, { type ReactNode, type PropsWithChildren, type FC } from 'react'

// first way
interface CourseGoalProps {
    id: number;
    title: string;
    description: string;
    children: ReactNode;
    onDelete: (id: number) => void;
}

// second way
// type CourseGoalProps = PropsWithChildren<{title: string, description: string}>;
// const CourseGoal = (props: CourseGoalProps) => {


// third way
const CourseGoal: FC<CourseGoalProps> = (props) => {
    const { id, title, description, children, onDelete } = props;

    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}

export default CourseGoal
