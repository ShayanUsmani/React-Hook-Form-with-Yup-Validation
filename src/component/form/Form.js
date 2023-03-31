import React, {useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


export default function Form() {

    const [successMessage, setSuccessMessage] = useState(false)

    const schema = yup.object().shape({
        name: yup.string().required("This field is required."),
        email: yup.string().email("Enter valid email").required("This field is required."),
        phone_number: yup.string().required("This field is required."),
        date_of_birth: yup.date().required("This field is required.").typeError("Enter valid date YYYY-MM-DD")
      });


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        
        console.log(data);
        setSuccessMessage(true)
        reset();
    }


    return (
        <div class="main-block">
            <h1>Registration Form</h1>
            <div></div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <hr />
                <input type="text" name="name" id="name" placeholder="Name"   {...register("name")} />
                <p style={{color: 'red', marginTop:"2px"}}>{errors.name?.message}</p>
                <input type="text" name="email" id="name" placeholder="Email"   {...register("email")}/>
                <p style={{color: 'red', marginTop:"2px"}}>{errors.email?.message}</p>
                <input type="text" name="phone_number" id="name" placeholder="Phone Number"   {...register("phone_number")}/>
                <p style={{color: 'red', marginTop:"2px"}}>{errors.phone_number?.message}</p>
                <input type="text" name="date_of_birth" id="name" placeholder="Date of Birth"   {...register("date_of_birth")}/>
                <p style={{color: 'red', marginTop:"2px"}}>{errors.date_of_birth?.message}</p>
                <hr />
                <div class="btn-block">
                    <p>By clicking, you agree on our <a href="#">Privacy Policy</a>.</p>
                    <button type="submit" >Submit</button>
                </div>

                <div >
                   {successMessage && <p style={{color: 'green', marginTop:"2px"}}>Thanks for Submission</p>}
                </div>
            </form>
        </div>
    )
}
