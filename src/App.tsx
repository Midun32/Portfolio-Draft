import { Stack, Form, Button, Alert, Nav, Navbar, Container, NavDropdown, Offcanvas, Row, Col, Card, Carousel, ProgressBar } from "react-bootstrap"
import { useState, useEffect, useRef } from 'react'
import './App.css';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
	// const [name, setName] = useState(null);
	// const [nameFieldText, setNameFieldText] = useState("");

	// if (name == null) return <div style={{ padding: "15px" }}>
		
 //    <h1 className="text-center text-light bg-primary">Enter your Name</h1>
	// 	<h5>Please set a name!</h5>
	// 	<Stack direction="horizontal" gap={2}>
	// 		<Form.Control value={nameFieldText} onChange={e => setNameFieldText(e.target.value)} required placeholder="Name" type="text"></Form.Control>
	// 		<Button variant="outline-primary" onClick={e => setName(nameFieldText)}>Set</Button>
	// 	</Stack>
	// </div>;

	return <div style={{ backgroundColor: "#7af5ed" }}>
    {['sm'].map((expand) => (
			<Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3" className="sticky-top">
				<Container fluid>
					<Navbar.Brand href="#"><img src="src/images/AA.png" style={{height: "30px"}}></img></Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								Offcanvas
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#about">About</Nav.Link>
								<NavDropdown
									title="Work"
									id={`offcanvasNavbarDropdown-expand-${expand}`}
								>
									<NavDropdown.Item href="#oop">OOP</NavDropdown.Item>
									<NavDropdown.Item href="#animation">
										Animation
									</NavDropdown.Item>
{/* 									<NavDropdown.Divider /> */}
									<NavDropdown.Item href="#gaming">
										Gaming
									</NavDropdown.Item>
                  <NavDropdown.Item href="#internship">
										Internship
									</NavDropdown.Item>
								</NavDropdown>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/ademidun-adesola-29738821a/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8BDXQTBxrVKkjmdQqX7BQJg6Sy0gEqhGMQrIkNJKTw&usqp=CAU&ec=48665701" style={{height:"30px"}}/></Nav.Link>
                <Nav.Link href="https://github.com/Midun32"><img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" style={{height:"32px"}}/></Nav.Link>
{/*                 <button className="toggleB">Light/Dark</button> */}
                <button className="toggleB" onClick={toggleMode}>
                  {isDarkMode ? "Light" : "Dark"}
                </button>
                
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
     
		))}
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
{/*       <button className="toggleB" onClick={toggleMode}>
        {isDarkMode ? "Light" : "Dark"}
      </button> */}
{/*       <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1> */}
{/*       <p>This is some sample text.</p> */}


    <Carousel id="home">
      <Carousel.Item>
        <img
          className="d-block"
          src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/04/05231252/Computer-Science-vs-Software-Engineering-.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Some of the progamming languages I work with</h3>
          <p>My goal is to create my own programming language.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="src/images/schb.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Blender Project</h3>
          <p>This is the layout of Lincoln University.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="src/images/hackathon.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>My teammates and I</h3>
          <p>Hackathon at Dallas, Texas sponsored by American Airlines andn Black Enterprise.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="src/images/certificate.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "darkblue" }}>Certification</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div id="about">
      <div id="text-container" className="imag" >
{/*         <Row>
          <Col sm={4}> */}
            <h1 className="me">My name is <b>Ademidun Adesola</b></h1>
            <p>I am from the class of 2024 at Lincoln University of Pennsylvania</p>
        <p>Computer Science major and Business Administration minor</p>
            <p>I want to be a Quality Assurance Engineer</p>
            <p>My interests include Debugging, Testing, Documenting<br/>(I have experience in the test process for IOS devices.)</p>
            <p>I like painting, cooking, organizing, and trying new things</p>
       
{/*           </Col>
          <Col sm={2} className="text-center">
            <img className="minep" src="my-pic.JPG"></img>
          </Col>
        </Row> */}
      </div>
      <div style={{ fontFamily:"monospace", padding:"10px"}}>
       <p style={{fontSize:"22px"}}>Here are a few languages and technologies I've worked with:</p>
         <Row>
      <Col>
        <ul>
          <li>Java <ProgressBar now={50} label="50%" /></li>
          <li>C++ <ProgressBar now={70} label="70%" /></li>
          <li>HTML/CSS <ProgressBar now={75} label="75%" /></li>
          <li>C# <ProgressBar now={40} label="40%" /></li>
          <li>React <ProgressBar now={35} label="35%" /></li>
          <li>SQlite <ProgressBar now={50} label="50%" /></li>
        </ul>
      </Col>
      <Col>
        <ul>
          <li>Selenium <ProgressBar now={50} label="50%" /></li>
          <li>Jira <ProgressBar now={55} label="55%" /></li>
          <li>Cucumber <ProgressBar now={40} label="40%" /></li>
          <li>Blender <ProgressBar now={67} label="67%" /></li>
          <li>Unity <ProgressBar now={54} label="54%" /></li>
        </ul>
      </Col>
    </Row>
        </div>
    </div>
    <br /><br /><br />
  <Container className="my-5" id="work">
        <Row className="my-5">
          <Col>
            <h2>Projects</h2>
          </Col>
        </Row>
        <Row>
          <h3 id="oop">OOP Usage</h3>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="src/images/Capture.PNG" />
              <Card.Body>
                <Card.Title>2D Project</Card.Title>
                <Card.Text>
                  Objects moving from screen to screen. Click the button to follow the story.
                </Card.Text>
                <Button variant="primary" href="https://replit.com/@Midun/2DFinalProject">See More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="src/images/ex2.png" style={{  height: "220px" }} />
              <Card.Body>
                <Card.Title>Usage</Card.Title>
                <Card.Text>
                  Working with default constructor and parametalized constructor.
                </Card.Text>
                <Button variant="primary" href="https://replit.com/@CSC254-SP-2022/Example-23-Midun">Check it out</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="src/images/ex3.png" style={{  height: "220px" }}/>
              <Card.Body>
                <Card.Title>Scheduling Algorithm</Card.Title>
                <Card.Text>
                  Implementation of SRTF scheduling algorithm
                </Card.Text>
                <Button variant="primary" href="https://replit.com/@CSC355-FA-2022/Assignment5-Midun">See More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  </Container> 
    <Container className="my-5">
      <h3 id="animation">Animation</h3>
        <Row>
          <Col md={4}>
            <Card>
              <video src="src/images/chickenDance.mp4" autoPlay loop style={{height:"200px", width:"350px"}}></video>
{/*               <Card.Img variant="top" src="https://via.placeholder.com/350x200" /> */}
              <Card.Body>
                <Card.Title>Dance, Dance</Card.Title>
                <Card.Text>
                  My readyPlayerMe character dancing the chicken dance with Maximo.
                </Card.Text>
{/*                 <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <video src="src/images/blender.mp4" autoPlay loop style={{height:"200px", width:"350px"}}></video>
{/*               <Card.Img variant="top" src="https://via.placeholder.com/350x200" /> */}
              <Card.Body>
                <Card.Title>Blender work</Card.Title>
                <Card.Text>
                  Animation of a man walking from the fromt door to his car.
                </Card.Text>
{/*                 <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="src/images/dickey.png" style={{height:"200px"}} />
              <Card.Body>
                <Card.Title>Blender Model</Card.Title>
                <Card.Text>
                  Remodel of John Miller Dickey Hall using bricks and elements in Blender.
                </Card.Text>
{/*                 <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
    <Container className="my-5">
      <h3 id="gaming">Gaming</h3>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="src/images/firstgame.png" style={{height:"200px"}}/>
              <Card.Body>
                <Card.Title>Board Game</Card.Title>
                <Card.Text>
                  The first ever game I made. AYSTAS, similar to snake and ladder.
                </Card.Text>
{/*                 <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <video src="src/images/Pong-game.mp4" autoPlay loop muted style={{height:"200px", width:"350px"}}></video>
{/*               <Card.Img variant="top" src="src/images/secondgame.png" style={{height:"170px"}}/> */}
              <Card.Body>
                <Card.Title>Ping Pong</Card.Title>
                <Card.Text>
                  The iconic Ping Pong. Decided to make the first game.
                </Card.Text>
{/*                 <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
{/*           <Col md={4}>
            <Card>
              <Card.Img variant="top" src="src/images/dickey.png" style={{height:"200px"}} />
              <Card.Body>
                <Card.Title>Blender Model</Card.Title>
                <Card.Text>
                  Remodel of John Miller Dickey Hall using bricks and elements in Blender.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
    </Container>
    <Container className="my-5">
      <h3 id="internship">Internship and External opportunities</h3>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://sm.pcmag.com/pcmag_me/review/a/amazon-mus/amazon-music-unlimited_su3g.jpg" />
              <Card.Body>
                <Card.Title>Quality Assurance Engineer Intern</Card.Title>
                <Card.Text>
                  Worked on AMP, a radio-based app with the testing team.
                </Card.Text>
{/*                 <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="data:image/png;base64,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" style={{height:"200px"}}/>
              <Card.Body>
                <Card.Title>Hackathon</Card.Title>
                <Card.Text>
                  Hosted by American Airlines x Black Enterprise
                </Card.Text>
{/*                 <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
{/*           <Col md={4}>
            <Card>
              <Card.Img variant="top" src="src/images/dickey.png" style={{height:"200px"}} />
              <Card.Body>
                <Card.Title>Blender Model</Card.Title>
                <Card.Text>
                  Remodel of John Miller Dickey Hall using bricks and elements in Blender.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
    </Container>
  <br/><br/>
      <div>
        <h2 style={{textAlign:"center"}}>Cesium Story</h2>
        <center><iframe title="Journey and Why?" width="1024" height="576" src="https://ion.cesium.com/stories/viewer/?id=f0e2c0a7-a569-4613-a1cd-cbe77c85b1c7" frameborder="0" allow="fullscreen" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" className="w-100" autoPlay loop></iframe></center>
      </div>
    
  <br /><br />
    <div id="resume" style={{ padding: "10px" }}>
       <h3><u>My Resume</u></h3>
      <p>Click the link below to download my resume in PDF:</p>
      <button style={{backgroundColor:"lightcyan", color:"navy"}}><a href="Ademidun Adesola Resume.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
        Download PDF
      </a></button>
    </div>
    
    <br /><br /><br />
    <h2 style={{padding:"10px"}}>Contact</h2>
          <Form id="contact" style={{ padding: "10px" }}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
<Form.Group controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter message" />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
		<hr />
  </div>
{/* 		{[
			'primary',
			'secondary',
			'success',
			'danger',
			'warning',
			'info',
			'light',
			'dark',
		].map((variant) => (
			<Alert key={variant} variant={variant}>
				This is a {variant} alert—check it out!
			</Alert>
		))}
		<hr /> */}
{/* 		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
		<br />
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>

		<br />
		<Navbar bg="light" variant="light">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar> */}
{/* 		{[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
			<Navbar key={expand} bg="light" expand={expand} className="mb-3">
				<Container fluid>
					<Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								Offcanvas
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action2">Link</Nav.Link>
								<NavDropdown
									title="Dropdown"
									id={`offcanvasNavbarDropdown-expand-${expand}`}
								>
									<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action4">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className="d-flex">
								<Form.Control
									type="search"
									placeholder="Search"
									className="me-2"
									aria-label="Search"
								/>
								<Button variant="outline-success">Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		))} */}
		{/*<hr />
		<Button variant="outline-primary">Primary</Button>{' '}
		<Button variant="outline-secondary">Secondary</Button>{' '}
		<Button variant="outline-success">Success</Button>{' '}
		<Button variant="outline-warning">Warning</Button>{' '}
		<Button variant="outline-danger">Danger</Button>{' '}
		<Button variant="outline-info">Info</Button>{' '}
		<Button variant="outline-light">Light</Button>{' '}
		<Button variant="outline-dark">Dark</Button>{' '}
		<Button variant="primary">Primary</Button>{' '}
		<Button variant="secondary">Secondary</Button>{' '}
		<Button variant="success">Success</Button>{' '}
		<Button variant="warning">Warning</Button>{' '}
		<Button variant="danger">Danger</Button>{' '}
		<Button variant="info">Info</Button>{' '}
		<Button variant="light">Light</Button>{' '}
		<Button variant="dark">Dark</Button> <Button variant="link">Link</Button>*/}
	</div>
}