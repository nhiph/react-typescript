import React, { ReactNode } from 'react'
import CourseGoal from './CourseGoal'
// use alias to avoid the same name with comp
import { type CourseGoal as CGoal } from '../App';
import InfoBox from './InfoBox';

interface CourseGoalListProps {
    goals: CGoal[];
    onDelete: (id: number) => void;
}

const CourseGoalList: React.FC<CourseGoalListProps> = (props) => {
    const { goals, onDelete } = props;

    if (goals.length === 0) {
        return <InfoBox
            mode='hint'
            >You have no course goal! Start now!</InfoBox>
    }
    
    let warningBox: ReactNode;

    if (goals.length >=4) {
        warningBox = <InfoBox mode='warning' severity="medium">
            You have so many goals. Don't put too much on you</InfoBox>
 
    }
    return (
        <>
            {}
            <ul>{goals.map((goal) =>
                <li key={goal.id}>
                    <CourseGoal
                        id={goal.id}
                        title={goal.title}
                        description={goal.description}
                        onDelete={onDelete}
                    >
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            )}</ul>
        </>

    )
}

export default CourseGoalList
