/** @format */

{/* prettier-ignore */ }

/*
@ How to create context in typescript?:
++ Example :

import { createContext } from "react";
type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};
const TimersContext = createContext<TimersContextValue | null>(null);

!HINT: In this piece of code we create a Timer type for the data in the state of the timers and a type for the states that exists in the context and a type for the methods that lives inside the context then we set a initial value for the context so we dont get an error

@ How to create the provider of the context in typesafe way/
++ Example:
type TimersContextProviderProps = {
  children: ReactNode;
};
function TimersContextProvider({ children }: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
export default TimersContextProvider;

@ How to use the context api?;
- Create our own custom hook and then use it whenever we need

function useTimersContext(){
  const context = useContext(TimersContext);
  if(context ===null) throw new Error("TimersContext is null - that should not be the case!");
  return context;
}
export (TimersContextProvider,useTimersContext);

!HINT: Now we can use the context whenever we need it insisde an component

@ How to write the useReducer hook?:
++ Step 1 :
- Basically a useReducer function will get used like this : const [state,dispatch] = useReducer(reducer,initialState);
@ state : This part of the useReducer will hold the current value for the state
@ dispatch : This is a function which with a use of it we can do something to that state
@ reducer : This a reducer function which with a use of it we can say when the dispatch is from which type do which commands
@ initialState : This variable will hold the initial values of the states

? - Now in typescript as same like last times will use the useReducer function like this:
const [states,dispatch] = useReducer(reducer,initialState);

++ Step 2:
- Now we create each part like this:
@ initialState:
? --------- Each Timer Object ---------------
type Timer = {
  name : string;
  duration : number;
}
? --------- Each Timer State ---------------
type TimersState = {
  isRunning : boolean;
  timers : Timer[];
}
? -------- Initial States -----------
const initialState : TimersState = {
  isRunning : true,
  timers : [],
}

@ reducer:
? ---------- Creating the Type Of Action (write each different string that we want to use in type) ------------------
type ActionOne = {
  ...
}
type ActionTwo ={
  ...
}
type ActionThree = {
  ...,
  payload: ....
}
type Action = ActionOne | ActionTwo | ActionThree;

? ---------- Creating reducer function ----------
!HINT: state in the parameters must have access to the previouse states so the type of that must be of the state types and the action is returning an object so the type of that must be an custom object type and the return type of the function is of the states type because it must return an new state values

function reducer(state : TimersState,action : Action):TimersState{
  switch(action.type){
    case "ADD_TIMER":
     return {
      ...state,
      timers : [
        ...state.timers,
        {
          name : action.payload.name;
          duration : action.payload.duration;
        }
      ]
      }
      case "START_TIMERS":
        retunr {
          ...state,
          isRunning : true
        }
      case "STOP_TIMERS":
        return {
          ...state,
          isRunning : false
        }
        default : 
        return state;
  }
}

++ Step 3:
- Now we want to use this reducer:
@ Types needed for context:
type MyContextProviderProps = {
  children : ReactNode;
}
type Timer ={
  name : string;
  duration : string;
}
type TimerState = {
  isRunning : boolean;
  timers : Timer[]
}
type TimerContextValue = TimerState & {
  addTimer(timerData : Timer) => void;
  startTimer() => void;
  stopTimer() => void
};
type AddTimer = {
  type : "ADD_TIMER",
  payload : Timer
}
type StartTimers = {
  type : "START_TIMERS"
}
type StopTimers = {
  type : "STOP_TIMERS"
}
type Action = AddTimer | StartTimers | StopTimers;
@# THEN WE WRITE THE REDUCER FUNCTION
@ Context itself:
const ContextApi = createContext<TimerContextValue | null>(null);

function MyContextProvider({children}:MyContextProviderProps){
  const [timersState,dispatch] = useReducer(reducer,initialState);
  ? ---- Value that we want to send through context provider -----
  const contextValue : TimersContextValue = {
    timers : timersState.timers,
    isRunning : timersState.isRunning,
    addTimer(timerData) => {
      dispatch({type : "ADD_TIMER",payload : timeData})
    },
    startTimer()=>{
      dispatch({type:"START_TIMERS"})
    },
    stopTimer(){
      dispatch({type : "STOP_TIMERS"})
    }
  } 

  return <ContextApi.Provider value={contextValue}>
  {children}
  </ContextApi.Provider>
}

function useTimer(){
  const context = useContext(ContextApi);
  if(context === null) throw new Error("Something went wrong");
  
  return context;
}
export {useTimer,MyContextProvider};
@# THEN WHENEVER WE NEED THE VALUES TO THIS CONTEXT WE JUST CALL "useTimer" AND USE THEM

*/