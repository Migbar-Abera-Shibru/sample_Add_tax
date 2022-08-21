import React from 'react'
import { useFormik } from 'formik';
import './First.css'
import Second from '../Second/Second'

const First = () => {
  const formik = useFormik({
    initialValues: {
    taxname: "",
    amount: "",
    search: ""
    },
    onSubmit: values => {
   // handle form submission
    },
   });
  return (
    <div className='yelaygnaw' >
      <h1 className="text1">Add Tax</h1>
      <form className="register-form" onSubmit={formik.handleSubmit}>
        
 <input
 className='firstinput'
 id="taxname"
 name="taxname"
 type="text"
 placeholder="Tax Name"
 value={formik.values.taxname}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 />
 

 <input
 className='secondinput'
 id="amount"
 name="amount"
 type="text"
 placeholder="amount                                           %"
 value={formik.values.amount}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 />
 

 <div className="radio" >
        <div className="radio1">
          <label>
            <input
              type="radio"
              value="first"
              
            />
            Apply to all items in collection
          </label>
        </div>
        <div className="radio2">
          <label>
            <input
              type="radio"
              value="Other"
        
              
            />
            Apply to specific items
          </label>
        </div>

        </div>
        <hr/> 

        <input
 className='firstinput'
 id="search"
 name="search"
 type="search"
 placeholder="Search items"
 value={formik.values.search}
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
 />
 {/* <input type="submit" value="Submit" /> */}
</form>
       
     
      <Second/>
    </div>
  )
}

export default First