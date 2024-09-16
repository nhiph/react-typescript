import Input from "./components/Input"
import Button from "./components/Button"
import Container from "./components/Container"
import InputWithRef from "./components/InputWithRef"
import { useRef } from "react"
import Form from "./components/Form"
import FormWithRef, { type FormWithRefHanle } from "./components/FormWithRef"

function App() {
  const inputWithRef = useRef<HTMLInputElement>(null);
  const formWithRefOutside = useRef<FormWithRefHanle>(null);

  const handleSave = (data: unknown) => {
    const extracedData = data as {};
    console.log('extracedData', extracedData);
    formWithRefOutside.current?.clear();
  };

  return (
    <main>
      {/* <Input id='name' label='Your name' type='text'/>
      <Input id='age' label='Your age' type='number' /> */}
      <p>
        <Button>A button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>
      <p>
        {/* <Button el='button'>A button</Button> */}
      </p>
      <p>
        {/* <Button el='anchor' href="https://google.com">A link</Button> */}
      </p>
      <Container as={Button}>Click me</Container>
      <InputWithRef label='Test with forwardRef' id='testRef' ref={inputWithRef} />

      {/* form without ref */}
      <Form onSave={handleSave}>
        <Input id='name' label='Your name' type='text' />
        <Input id='age' label='Your age' type='number' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>



      {/* form with ref */}
      {/* formWithRefOutside is refering to returned object in child useImperativeHandle */}
      <FormWithRef onSave={handleSave} ref={formWithRefOutside}>
        <Input id='name1' label='Your name 1' type='text' />
        <Input id='age1' label='Your age 1' type='number' />
        <p>
          <Button>Save 1</Button>
        </p>
      </FormWithRef>

    </main>
  )
}

export default App
