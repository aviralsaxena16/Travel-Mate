import React,{useState} from 'react'; 
import "booking.css";
impoprt {Form, FormGroup, ListGroup, ListGroupItem, Button} from "reactstrap";
import { useNavigate } from "react-router-dom";
const Booking = ({ tour, avgRating }) =>{
        cont [credintials,setCredentials]=useState({
            UserId: '01',
            userEmail: 'example@email.com',
            fullName:'',
            phone:'',
            guestSize:1,
            bookAt:''
        })
        const{price, reviews}=tour
        const navigate=useNavigate()
        const handleChange=e=>{
            setCredentials(prev=>({... prev, [e.target.id]:e.target.value}))
        };
        const serviceFee=10
        const totalAmount=Number(price)*Number(credentials.guestSize) + Number(serviceFee)
        const handleClick=e=>{
            e.preventDefault();
            navigate('/thank you');
        }
    return<div className='booking'>
            <div className='.booking__ d-flex align-items-center justify-content-between'>
                <h3>${price} <span>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center gap-1'>
                    <i class ="ri-star-s-fill"></i> 
                    {avgRating==0? null : avgRating} ({reviews?.length})         
                </span>            
            </div >
            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type='text' placeholder='Full Name' id='fullname' required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <input type='number' placeholder='Phone' id='phone' required onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input type='date' placeholder='' id='bookAt' required onChange={handleChange}/>
                        <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange}/>
                    </FormGroup>
                </Form>
            </div>
            {/* ====== booking ====== */}
            {/* ====== booking ====== */}
            <div className='booking__bottom'>
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5>{price} <i className='ri-close-line'></i> 1 person</h5>
                        <span> ${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Service Charge</h5>
                        <span> ${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Total <i className='ri-close-line'></i> 1 person</h5>
                        <span> ${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn primary__btn w-100 mt-4" onClic={handleClick}>Book Now</Button>
            </div>
        </div>
};
export default Booking;
