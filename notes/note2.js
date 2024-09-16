/** @format */

{/* prettier-ignore */}

/*
@ Accepting props in React components:
++ 1 :
function MyComponent({name,id}: {
  name: string; 
  id:number
}) {
  return <h1>My Component</h1>
}

++ 2 :
type MyComponentProps = {
  name : string;
  id: number;
};
function MyComponent({name,id}:MyComponentProps){
  return <h1>My Component</h1>
}

++ 3 : 
interface MyComponentProps {
  name: string;
  id : number;
}
function MyComponent({name,id}:MyComponentProps){
  return <h1>My Component</h1>
}

@ How to accept children in the props (What is the type of a children prop?):
++ We can use a special type that can be used in React which is called "ReactNode"

interface MyComponentProps{
  name: string;
  id: number;
  children : ReactNode;
}
function MyComponent({name,id,children}:MyComponentProps){
  return <h1>My Component</h1>
}

! ReactNode will be imported from 'react'
++ So its better to write "type" keyword before the imported ReactNode:
import {type ReactNode} from 'react'

++ Another special React type this time using "type" keyword:
import {type PropsWithChildren} from 'react';
type MyComponentProps = PropsWithChildren<{
name:string;
id: number;
}>
function MyComponent({name,children}:PropsWithChildren) {
  return <h1>My Component</h1>
};

@ Accepting children props using arrow function components:
import {type FC, type PropsWithChildren} from 'react';
type MyComponentProps = PropsWithChildren<{
name:string;
id: number;
}>

const MyComponent : FC<MYComponentProps> = ({name,id,children}) => {
  return <h1>My Component</h1>
}

@ How to fix eslint in a typescript React project?:
++ - When we create a vite project just in the .eslint.cjs file in the rules just remove the commands written by the vite project starters and then replace this line of code :

  "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],

! HINT: In the documnet was two syntax but the recommanded one to use this rule was:
++ Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
 

@ How to use states in typescript react? :
- When in the default value of the states we have a complex value like null or [] or {} the type of the state will be set to <never>

++ So what can we do?
- Imagine we want to add a array full of custom type that we create earlier so we create the state like this:
type CourseGoal = {
  tite : string;
  description : string;
  id : number;
}
const [goals,setGoals] = useState<CourseGoal[]>([]);

function handleAddGoal(goal: string, summary: string){
  setGoals((prevGoals) => {
    const newGoal = CourseGoal = {
      id  : Math.random(),
      title : goal,
      description : summary,
    };
    return [...prevGoals,newGoal];
  });
}

! Now we have a state full of arrays which includes title and description and id properties

@ Similar types:
- When in two components we have a same type (same values and properties ) we can export one type and then use it in the another one (if we use "type" keyword)

++ Example:
@ First component
export type MainType = {
  title : string;
  name : string;
  id : number;
}
@ Second component:
import{type MainType as CustomName} from "First component"
type SecondaryType = {
  property : CustomName[];
}

@ How to set type for "event" in handleSubmits:
- When we want to have a handler function like handleSubmit we may pass a event parameter to it but we should add the type to that parameter which is a special type:
@ FormEvent
- This type is for events
@ How to use the event.currentTarget on a FormData inside the handler function?
- We can use the "HTMLFormElement" type that is a generic type inside the "FormEvent" type <>
++ Example:
function handleSubmit(event : FormEvent<HTMLFormElement>){
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  console.log(formData);
}

@ Using useRef hook in typescript:
- When we want to use the useRef as the previouse syntax we do this:
++ const ref = useRef();

-But this will set the default value of the useRef to undefined and in typescript we cant use the undefined value so we set "null" as the default value of the useRef:
++ const ref = useRef(null);

- Now we may use the useRef variable inside an function like this:

++ function handleSubmit(event){
++  event.preventDefault();
++  const enteredRef = ref.current.value;
++ }

- In this case we may get an error which says : ref.current is possibly 'null' 
? So whats the solution to this problem?
++ const enteredRef = ref.current!.value;
! In this way we tell the typescript that the ref.current will never be null so we must be sure about the ref to use this syntax

- Now we will get an error in the value part which says : Property 'value' does not exist on type 'never'
? So now what to do?
- We can use a generic type for the ref which is optional and use a special type for the refs value in the input's
++ const ref = useRef<HTMLInputElement>(null);
* Now everything's fine and we can use our ref
!HINT: At all cases the type of ref is HTMLInputElement

@ How to clear the form when we submit it?
- We can use this command for event:
++ event.currentTarget.reset();
*/