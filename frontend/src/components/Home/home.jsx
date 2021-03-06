import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import { Button, Card } from 'react-bootstrap';
import './home.css'

const Home = () => {


    const imagUrls = [{url:"https://cdn.utaustinbootcamps.com/wp-content/uploads/sites/119/2020/12/tes_gen_blog_code7-1-800x412.jpg"}, 
    {url:"https://www.ilxgroup.com/blog/wp-content/uploads/2020/01/How-to-become-a-computer-programmer-200127.jpg.pagespeed.ce.1W-dgCk90x.jpg"},
    {url:"https://cdn.dubootcamp.com/wp-content/uploads/sites/66/2020/05/shutterstock_753780223-850x412.jpg"},
    {url:"https://www.mindinventory.com/blog/wp-content/uploads/2019/06/reactjs-benefits.jpg"},
    {url:"data:image/png;base64,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"},
    {url:"https://g.foolcdn.com/art/companylogos/square/mdb.png"},
    {url:"https://eduauraapublic.s3.ap-south-1.amazonaws.com/webassets/images/blogs/how-to-become-a-programmer-in-india.jpg"},
    {url:"https://c.tadst.com/gfx/750w/international-programmer-day.jpg"}
]

  return (
    <>
    <Header />

    <div className="row">
        {imagUrls.map((imageUrlDatas) =>
        <div className="col-md-3" >
          <div className='card'>
          <Card >
            <Card.Img variant="top" src={imageUrlDatas.url} />
            <Card.Body>
              <Card.Title>Sample card</Card.Title>
              <Button className='btn btn-success'  >ADD</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
        )}
    </div>    

    <Footer />
    </>
  )
}

export default Home