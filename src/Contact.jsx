import React, { useState } from "react";

const Contact = () => {
    const [data, setdata] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Phone: '',
        Message: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setdata((preval) => {
            return {
                ...preval,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`USER INFORMATION ::
        User Firstname is : ${data.Firstname}.
        User Lastname is : ${data.Lastname}.
        User Email is : ${data.Email}.
        User Phone no is : ${data.Phone}.
        User massage is : ${data.Message}.`);
    };
    return (
        <>

            <div className="background-contact">
                <form onSubmit={formSubmit}>

                    <div className="contact">
                        <div className="box1">
                            <label>FIRSTNAME:</label><br />
                            <input type="text" name="Firstname" value={data.Firstname} placeholder="Enter the Firstname" onChange={InputEvent} required/><br />
                            <label>LASTNAME:</label><br />
                            <input type="text" name="Lastname" value={data.Lastname} placeholder="Lastname" onChange={InputEvent} required /><br />
                            <label>EMAIL:</label><br />
                            <input type="email" name="Email" value={data.Email} placeholder="Email" onChange={InputEvent} required /><br />
                            <label>PHONE NO:</label><br />
                            <input type="number" name="Phone" value={data.Phone} placeholder="Phone no" onChange={InputEvent} required /><br />
                            <label>MESSAGE:</label><br />
                            <textarea name="Message" value={data.Message} placeholder="Message" onChange={InputEvent} required /><br />
                            <label>Checkbox</label>
                            <input className="checkbox" className="circle1" type="checkbox" name="" required />
                            <button type="submit" className="btn7">submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;
