<<<<<<< HEAD
import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../data/tourData"; // Replace with correct path
import calculateAvgRating from "../utils/calculateAvgRating"; // Replace with correct path
import avatar from "../assets/avatar.png"; // Replace with correct path
import "../styles/tour-details.css";

const TourDetails = () => {
  const { id } = useParams(); // Destructure id from useParams
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);
  if (!tour) return <p>Tour not found</p>; // Handle invalid tour ID

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    // Add your review submission logic here
    console.log({ reviewText, rating: tourRating });
  };

  return (
=======
import React, {useRef,useEffect,useState,useContext} from 'react' 
import "tour-details.css"
import {Container,Row,Col,Form,ListGroup} from 'reactstrap'; 
import {useParams} from "react-router-dom"; 
import tourData from '';
import calculateAvgRating from "";
import avatar from "";
import Booking from "";
import Newsletter from "./../shared/Newsletter";
import {AuthContext} from './../context/AuthContext';
import {BASE_URL} from './../utils/config';
import useFetch from "./../hooks/useFetch";


const TourDetails =()=>{
const id=useParams();
const reviewMsgRef=useRef('')
const [tourRating,setTourRating]=useState(null)
const {data:tour} = useFetch(`${BASE_URL}`/tour/${id})
const {user} = useContext(AuthContext)
const tour = tourData.find(tour=>tour.id==id)
const {photo,title,desc,price,address,reviews,city,distance,maxGroupSize}=tour
const {totalRating, avgRating} = CalculateAvgRating(reviews)
const options = {day:"numeric",month:'long',year:"numeric"};
const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;
    
    try {
        if(!user||user==undefined||user==null){
            alert('Please sign in')
        }
        const reviewObj = {
            username:user?.username,
            reviewText
            rating:tourRating
        }
        const res = await fetch(`${BASE_URL}/review/${id}`,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            credentials:'include',
            body:JSON.stringify(reviewObj)
        })
        const result=await res.json()
        if(!res.ok) {
            return alert(result.message);
        }
        alert(result.message)
    } catch (err) {
        alert(err.message)
    }
};
useEffect(()=> {
    window.scrollTo(0,0);
}, [tour]);
return (
>>>>>>> b4994960c0d9a364e9430621766dfe9a3ca2c853
    <>
      <section>
        <Container>
<<<<<<< HEAD
          <Row>
            <Col lg="8">
              <div className="tour_content">
                <img src={photo} alt={title} />
=======
            {
                loading && <h4 className='text-center pt-5'>Loading..........</h4>
            }
            {
                loading && <h4 className='text-center pt-5'>{error}</h4>
            }
            {
                !loading && !error && <Row>
                <Col>
                    <div className='tour_content'>
                        <img src={photo} alt=""/>
>>>>>>> b4994960c0d9a364e9430621766dfe9a3ca2c853

                <div className="tour_info">
                  <h2>{title}</h2>

<<<<<<< HEAD
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i className="ri-star-s-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {avgRating > 0 ? avgRating : "Not Rated"}{" "}
                      {totalRating > 0 && <span>({reviews?.length})</span>}
                    </span>
                    <span>
                      <i className="ri-map-pin-user-fill"></i> {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i> {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i> ${price} / per person
                    </span>
                    <span>
                      <i className="ri-map-pin-time-line"></i> {distance} km
                    </span>
                    <span>
                      <i className="ri-group-line"></i> {maxGroupSize} people
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length || 0} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} onClick={() => setTourRating(star)}>
                          {star}
                          <i className="ri-star-s-fill"></i>
                        </span>
                      ))}
=======
                            <div className='d-flex align-items-center gap-5'>
                                <span className='tour__rating d-flex align-items-center gap-1'>
                                    <i class ="ri-star-s-fill" style={color:"var(--secondary-color)"}></i> 
                                    {avgRating==0? null : avgRating}
                                    {totalRating==0?(
                                        "Not rated"
                                    ) : (
                                        <span>({reviews?.length})</span>
                                    )}
                                </span>
                                <span>
                                    <i class="ri-map-pin-user-fill"></i> {address}
                                </span>
                                
                            </div>
                            <div className='tour__extra-details'>
                                <span> <i class="ri-map-pin-2-line"></i> {city}</span>
                                <span> <i class="ri-money-dollor-circle-line"></i> ${price} /per person</span>
                                <span> <i class="ri-map-pin-time-line"></i> {distance} k/m</span>
                                <span> <i class="ri-group-line"></i> {maxGroupSize} people</span>
                            </div>
                            <h5>Description</h5>
                            <p>{desc}</p>
                        </div>
                        <div className='tour__reviews mt-4'>
                            <h4>Reviews ({reviews?.length} reviews)</h4>
                            <Form onSubmit={submitHandler}>
                                <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                                    <span onClick={()=>setTourRating(1)}>
                                        1<i class="ri-star-s-fill"></i>
                                    </span>
                                    <span onClick={()=>setTourRating(2)}>
                                        2<i class="ri-star-s-fill"></i>
                                    </span>
                                    <span onClick={()=>setTourRating(3)}>
                                        3<i class="ri-star-s-fill"></i>
                                    </span>
                                    <span onClick={()=>setTourRating(4)}>
                                        4<i class="ri-star-s-fill"></i>
                                    </span>
                                    <span onClick={()=>setTourRating(5)}>
                                        5<i class="ri-star-s-fill"></i>
                                    </span>
                                </div>
                                <div className='review__input'>
                                    <input type='text' ref={reviewMsgRef} placeholder='share your thoughts' required/>
                                    <button className='bin primary__btn text-white' type='submit'>Submit</button>
                                </div>
                            </Form>
                            <ListGroup classname= "user__reviews"></ListGroup>
                                            reviews?.map(review=>(
                                                <div className='review__item'>
                                                    <img src={avatar} alt=""/>
                                                    <div className='w-100'>
                                                        <div className='d-flex align-items-center justify-content-between'>
                                                            <div>
                                                                <h5>{review.username}</h5>
                                                                <p>{new Date(review.createdAt).toLocaleDateString(
                                                                    "en-US",
                                                                    options
                                                                )}</p>
                                                            </div>
                                                            <span className='d-flex align-items-center'>
                                                                {review.rating}<i class="ri-star-s-fill"></i>
                                                            </span>
                                                        </div>
                                                        <h6>{review.reviewText}</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }                            
                            </ListGroup>
                        </div> 
>>>>>>> b4994960c0d9a364e9430621766dfe9a3ca2c853
                    </div>
                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button className="btn primary__btn text-white" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

<<<<<<< HEAD
                  <ListGroup className="user__reviews">
                    {reviews?.map((review, index) => (
                      <div className="review__item" key={index}>
                        <img src={avatar} alt="User avatar" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.date).toLocaleDateString("en-US", options)}</p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}
                              <i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.comment}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg="4">
              {/* Sidebar or additional content can go here */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
=======
                <Col lg='4'>
                      <Booking tour={tour} avgRating={avgRating}/>                  
                </Col>
            </Row>
            }
        </Container>
    </section>
    <Newsletter/>
    </>
    );

}
>>>>>>> b4994960c0d9a364e9430621766dfe9a3ca2c853
