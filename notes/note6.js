/** @format */

{/*prettier-ignore*/}
/*
@ Start using Redux in typescript:
++ 1 : npm i @reduxjs/toolkit react-redux
++ 2 : Create a store folder inside the src
++ 3 : Create a store file and use this syntax:
  const store = configureStore({
    reducer:{
      (custom name) : import the slicer file
    }
  })
 
++ 4 : Create a slice file and use this syntax:
 export const sliceName = createSlice({
    name : "Could be any name",
    initialState,
    reducers:{
      (methods that we wanna use like remove or add or whatever)
    }
  })
 
@ How to write the initialState and the type for them? type ItemsType ={ name : string; price : number;
  }
  ! Any key value that the items need (Its a state full of objects)
  type SliceState = {
    items : ItemsType[];
  };
  const initialState : SliceState = {
    items : [];
  }
 ! Now we can use the states
 
@ How to write the reducer methods: - Every reducer method will get an state and action parameter same as the reducer function
 
  - We should use another special type for the action parameter and thats "PayloadAction" type
 
  -In the action "PayloadAction" type we can use a <> and then if our payload contains a payload then write the properties there
 
  - We should use the mutable syntax for this type of reducers
 
 
@ How to use the redux store?: - We can wrap our application "App Component" into an Provider component that got imported from react/redux then it needs a store prop which the value of that is the store we create earlier
 
 
@ How to dispatch a function into an handler function inside the component: - For type safety we may create a hooks.ts file and above the store file create our own custom type and then pass in the store.dispatch to this type ++ Example: type AppDispatch = typeof store.dispatch
 
  - Now in the hooks.ts we create a function type and pass in the AppDispatch type to the return type of this funnction
++ Example:
 type DispatchFunction = () => AppDispatch;
 
  - Then we create a custom dispatch function and then pass in the "DispatchFunction" type to this variable
++ Example:
  import {useDispatch} from 'react-redux'
  export const useSliceNameDispatch : DispatchFunction = useDispatch
 
  @ How to write a type safe useSelector? ++ Step 1: - Inside the store file we export a custom type with a custom name (e.g. RootState) ++ Step 2 : - For the value of this custom type we write ReturnType<typeof store.getState> !HINT: In this way we will get the typeof states inside the reducer to then use it into the hooks.ts file
 
++ Step 3:
 - in the hooks.ts file then we create a custom varibale for custom useSelector and then set the type of it to TypedUseSelectorHook and then pass in our own custom type for the generic type of this variable and the value for this custom selector variable will be useSelector
++ Example:
  import {RootState} from './store';
  import {TypedUseSelectorHook} from 'react-redux'
  const customSelector :TypedUserSelectorHook<RootState> = useSelector;

 */