import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import goalsImg from './assets/goals.png'
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    // logic handle array
    setGoals(preGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      };
      return [...preGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((preGoals) => {
      return preGoals.filter(goal => goal.id !== id);
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      {/* list of course goal */}
      <CourseGoalList
        goals={goals}
        onDelete={handleDeleteGoal}
      />
    </main>
  )
}

export default App
