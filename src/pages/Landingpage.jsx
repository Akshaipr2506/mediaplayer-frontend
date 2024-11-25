import React from 'react'
import {Row,Container,Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center align-items-center mt-5'>
          <Col md={6} sm={12}>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ratione dicta ipsum dolores eveniet doloribus provident, tempora a, eligendi non temporibus iure? Consequuntur, porro? Repudiandae error nesciunt ducimus recusandae iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam, inventore molestiae neque voluptate rerum aspernatur minus voluptatibus officia blanditiis eos nihil sunt, dolorem placeat veniam voluptatem, illo beatae nisi?</p>
            <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
          </Col>
          <Col md={6} sm={12} className='d-flex justify-content-center'>
            <img src="https://cdn.dribbble.com/users/195170/screenshots/4057749/blu-music-logo-4_800x600.gif" alt="no image" style={{width:'500px',height:'300px'}} />
          </Col>
        </Row>
      </Container>

      <div className='container-fluid'>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h4 className='text-center'>Features</h4>
            <div className="row mt-3">
              <div className="col-md-4">
              <Card style={{ width: '100%' }} className='p-3 mt-3'>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" className='w-100' height={'300px'} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
              </div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3 mt-3'>
                  <Card.Img variant="top" src="https://media.tenor.com/jEPm7jX_1y8AAAAM/colorful-waves.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3 mt-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/34/54/95/345495abbe2497b0b0d077aaf9be0e41.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </div>
            </div>
            
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>


      <div className='container-fluid mt-3'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className='row border mt-4 rounded-3 ' style={{width:'100%'}}>
              <div className="col-md-6 py-5 px-5">
                <h4 className='text-warning'>Simple Fast and Powerful</h4>
                <p className='mb-3'><span style={{fontSize:'25px'}}>Play Everything</span>:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere labore, corporis nihil vel est, quasi sed nesciunt aspernatur saepe ullam nisi impedit repudiandae laborum molestias autem nostrum aliquid quis. Dolores.</p>

                <p className='mb-3'><span style={{fontSize:'25px'}}>Play Everything</span>:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere labore, corporis nihil vel est, quasi sed nesciunt aspernatur saepe ullam nisi impedit repudiandae laborum molestias autem nostrum aliquid quis. Dolores.</p>

                <p><span style={{fontSize:'25px'}}>Play Everything</span>:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere labore, corporis nihil vel est, quasi sed nesciunt aspernatur saepe ullam nisi impedit repudiandae laborum molestias autem nostrum aliquid quis. Dolores.</p>
              </div>
              <div className="col-md-6">
                <div className='px-3 py-5' style={{height:'100%'}}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/roz9sXFkTuE?si=iIl0XAD1oI9ptX9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Landingpage