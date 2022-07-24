import { Container } from "./components/layout/Container"
import { Content } from "./components/layout/Content"
import { Navbar } from "./components/layout/Navbar"

export const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Content />
      </Container>
      <canvas id="canvas" style={{ display: 'none' }} />
    </>
  )
}