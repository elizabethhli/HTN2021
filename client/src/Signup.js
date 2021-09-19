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

  
export default function Signup() {
    const [value, setValue] = React.useState({ email: 'example@abc.com', password: 'b', passwordConfirm: 'b' });
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    // const { signup } = useAuth()
    const [setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            // setError("")
            setLoading(true)
            history.push("/profile")
            // await signup(emailRef.current.value, passwordRef.current.value)
          } catch {
            // setError("Failed to create an account")
          }
        
          setLoading(false)
    }

    return (
      <Grommet full theme={grommet}>
        <Box fill align="center" justify="center">
            <h2 align="center" text="hehehe"> Sign Up </h2>
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

              <FormField label="Confirm Password" name="passwordConfirm" required>
                <TextInput name="PasswordConfirm" type="password" ref={passwordConfirmRef}/>
              </FormField>
  
              <div className="w-100 text-center mt-2"> 
                Already have an account? <Link to="/login">Log In.</Link>
              </div>
  
              <Box justify="between" margin={{ top: 'medium' }} pad="large" align="center">
                <Link to = "/dashboard"> 
                  <Button type="submit" label="Sign Up" primary disabled={loading}/>
                </Link>
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet> 
     )

  
}

