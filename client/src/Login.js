import React, {useRef, useState} from 'react'
import {
    Box,
    Button,
    Grommet,
    Form,
    FormField,
    TextInput,
  } from 'grommet';
  import { grommet } from 'grommet/themes';
  import { useAuth } from './AuthContext';
  import { Link, useHistory } from 'react-router-dom';


  // This example shows a way to perform validation across multiple fields.

  
export default function Login() {
    const [value, setValue] = React.useState({ email: 'example@abc.com', password: 'b' });
    const emailRef = useRef()
    const passwordRef = useRef()
    // const { signup } = useAuth()
    const [setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
          try {
            setLoading(true)
            history.push("/")
          } catch {
            // setError("Failed to create an account")
          }
        
          setLoading(false)
    }

    return (
      <Grommet full theme={grommet}>
          
        <Box fill align="center" justify="center">
        <h2 align="center" text="hehehe"> Log In </h2>
          <Box width="medium">
            <Form
              value={value}
              onChange={nextValue => setValue(nextValue)}
              onSubmit={handleSubmit}
            >
              <FormField label="Email" name="email" required>
                <TextInput name="Email" type="email" ref={emailRef} />
              </FormField>
  
              <FormField label="Password" name="password" required>
                <TextInput name="Password" type="password" ref={passwordRef}/>
              </FormField>
  
              <div className="w-100 text-center mt-2"> 
                Don't have an account? <Link to="/signup">Sign Up.</Link>
              </div>
  
              <Box justify="between" margin={{ top: 'medium' }} pad="large" align="center">
                <Button type="submit" label="Log In" primary onClick="/"/>
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet> 
     )

  
}

