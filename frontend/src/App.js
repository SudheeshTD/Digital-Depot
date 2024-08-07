import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () =>{
  return (
    <>
      <Header/>
      <main className="py-3"> {/* Main content area with padding on the y-axis */}
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
      <Footer/>
      
    </>
    
  )
}

export default App;