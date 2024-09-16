/** @format */

{/*prettier-ignore*/ }

/*
@ How to handle side effects in typescript?:
- We want to fetch data from a dummy api and then use it inside the application
++ Step 1:
@ - Create a custom get async function inside the helper file to fetch data:

export async function get(url:string){
  const response = await fetch(url);
  
  if(!response.ok){
    throw new Error("Failed to fetch data!");
  }

  const data = (response.json()) as unknown;
  return data;
}

++ Step 2 :
@ Main Component:
? For example the data is like this:
type RawDataPost ={
  tilte : string;
  id : number;
}
function MainComponent(){
  useEffect(function(){
    async function fetchPosts(){
      try{const data = (await get("The String to the dummy data")) as RawDataPost (This will be the shape of data);
    
      const extractedData : (The shape that we want to return the data)= data.map(rawPost => {
        ...
      })
    !  (Then store the data inside a state)
    }catch(error){
      if(error instanceOf Error){
        throw new Error(error.message);
      }
    }
  }
  },[])
}

++ Step 3:
- Create a "let" variable then use it conditionaly inside the application


*/