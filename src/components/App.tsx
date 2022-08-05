import * as React from "react"
import {ChakraProvider, Container, extendTheme, Theme, useToast,} from "@chakra-ui/react"
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import AuthForm from "./login-register/AuthForm";
import MainPage from "./main/MainPage";
import ModalSpinner from "./ui/ModalSpinner";
import AlertToast from "./ui/AlertToast";
import AuthService from "../service/AuthService";
import {observer} from "mobx-react-lite";
import {action} from "mobx";


// Global Theme
const myTheme = extendTheme({
  styles: {
    global: (props: { colorMode: string; }) => ({
      'html, body': {
        backgroundColor: props.colorMode === 'dark' ? '#383838' : 'bisque',
      },
    })
  },
  config: {
    initialColorMode: 'dark'
  }
})

const App = observer(() => {

  const {user} = useContext(Context)
  const [isAuth, setState] = useState(false)
  const toast = useToast()

  const checkAuth = () => {
    AuthService.checkSession().then(action(results => {

      if (!results.ok) {
        setState(true)
        AlertToast('Not valid Sessions', 'Please login / Register', 'info', toast)
        return
      }

      setState(true)
      user.isAccess = true
      user.setUser({
        email: results.data.email,
        password: results.data.password,
        name: 'test name'
      })

    }))
  }

  useEffect(() => checkAuth(), [])

  return (
    <ChakraProvider theme={myTheme}>
      <Container minW={'400px'} maxW={'1300px'}>
        {
          !isAuth ? <ModalSpinner/>
            : user.isAccess ? <MainPage/> : <AuthForm/>
        }
      </Container>
    </ChakraProvider>
  );
});

export default App;