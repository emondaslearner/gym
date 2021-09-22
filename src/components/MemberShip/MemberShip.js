import React, { useState, useEffect } from "react";
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import './MemberShip.css'
import Payment from "../Payment/Payment";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {
  Link
} from "react-router-dom";


const MemberShip = () => {
    const [dateError,setDateError] = useState(' ');
    const [status,setStatus] = useState(1);
    useEffect(() => {
        const address = window.location.pathname.split('/').pop()
        const display = document.querySelector('.addressAndInformation').style.display;
        if (status == 1) {
            document.querySelector('.active ul').childNodes[0].classList.add('activeList');
        }else if(status == 2){
            document.querySelector('.active ul').childNodes[1].classList.add('activeList');
        }else{
            document.querySelector('.active ul').childNodes[2].classList.add('activeList');
        }
    }, [status])

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
       if(dateError == ''){
            document.querySelector('.addressAndInformation').style.display = 'none';
            document.querySelector('.payment').style.display = 'block';
            setStatus(2);
       }else{
        setDateError('Birth year must be less then 2005')
       }
    }
    const date = (e) => {
        const date = e.target.value;
        const dateInArray = date.split("-")
        if(dateInArray[0] > 2005){
            setDateError('Birth year must be less then 2005')
        }else{
            setDateError('')
        }
    }
    const success = () => {
        document.querySelector('.payment').style.display = 'none';
        document.querySelector('.success').style.display = 'block';
    }
    return (
        <>
            <div className="gymHeader">
                <Menu></Menu>
                <div className="layer">
                </div>
                <div className="background">
                </div>
                <div className="classesHeader">
                    <h1 className="text-center">YOUR GYM MEMBERSHIP</h1>
                </div>
            </div>
            <div className="memberShip">
                <div className="active">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                <form className="addressAndInformation row" action="">
                    <div>
                        <label htmlFor="postCode">First Name:</label>
                        <input id="postCode" type="text" {...register("firstName", { required: true })} />
                        <p className="error">{errors.firstName?.type === 'required' && "First name is required"}</p>
                    </div>
                    <div>
                        <label htmlFor="postCode">Last Name:</label>
                        <input id="postCode" type="text" {...register("lastName", { required: true })} />
                        <p className="error">{errors.lastName?.type === 'required' && "Last name is required"}</p>
                    </div>
                    <div>
                        <label htmlFor="postCode">Email:</label>
                        <input id="postCode" type="text" {...register("email", { required: true })} />
                        <p className="error">{errors.email?.type === 'required' && "Email is required"}</p>
                    </div>
                    <div>
                        <label htmlFor="postCode">Mobile Number:</label>
                        <input id="postCode" type="text" {...register("number", { required: true })} />
                        <p className="error">{errors.number?.type === 'required' && "First name is required"}</p>
                    </div>
                    <div className="date">
                        <label htmlFor="">Date of Birth</label>
                        <Stack className="select" component="form" noValidate spacing={3}>
                            <TextField
                                onChange={date}
                                id="date"
                                type="date"
                                defaultValue="2021-05-24"
                                sx={{ width: 100 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Stack>
                        <p className="error">{dateError != '' && dateError}</p>
                    </div>
                    <div className="gender">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="" id=""  {...register("gender")} >
                            <option value="">Male</option>
                            <option value="">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="postCode">Address line 1:</label>
                        <input id="postCode" type="text" {...register("address", { required: true })} />
                        <p className="error">{errors.address?.type === 'required' && "Address is required"}</p>
                    </div>
                    <div>
                        <label htmlFor="postCode">Country/Region:</label>
                        <input id="postCode" type="text" {...register("country", { required: true })} />
                        <p className="error">{errors.country?.type === 'required' && "Country is required"}</p>
                    </div>
                    <div>
                        <label htmlFor="postCode">City:</label>
                        <input id="postCode" type="text" {...register("city", { required: true })} />
                        <p className="error">{errors.city?.type === 'required' && "City is required"}</p>
                    </div>
                    <div>
                        <label htmlFor="postCode">Postcode:</label>
                        <input id="postCode" type="text" {...register("postCode", { required: true })} />
                        <p className="error">{errors.postCode?.type === 'required' && "Post code is required"}</p>
                    </div>
                    <a onClick={handleSubmit(onSubmit)} className="btn commonButton" href=""><span>NEXT</span></a>
                </form>
                <div className="payment">
                    <Payment setStatus={setStatus} success={success}></Payment>
                </div>
                <div className="success">
                    <h1>THANKS FOR JOIN US</h1>
                    <Link className="btn commonButton successButton" to="/"><span>GO BACK</span></Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MemberShip;