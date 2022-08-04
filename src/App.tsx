import { useEffect } from "react"
import { Container } from "./components/layout/Container"
import { Content } from "./components/layout/Content"
import { Navbar } from "./components/layout/Navbar"
import { initializeApp } from "firebase/app";

export const App = () => {
  useEffect(() => {
    initializeApp({
      apiKey: "AIzaSyAF0NQG_JKmIjnHRzsDYxuWMjhyuF0RBeY",
      authDomain: "spissekcji.firebaseapp.com",
      databaseURL: "https://spissekcji.firebaseio.com",
      projectId: "spissekcji",
      storageBucket: "spissekcji.appspot.com",
      messagingSenderId: "752464608547",
      appId: "1:752464608547:web:7786ca37c8ae1dd0",
      measurementId: "G-KW6E4QE9X5"
    })
  }, [])

  return (
    <>
      <Container>
        <Navbar />
        <Content />
      </Container>
      <canvas id="canvas" style={{ display: 'none' }} width="1088" height="1088" />
    </>
  )
}