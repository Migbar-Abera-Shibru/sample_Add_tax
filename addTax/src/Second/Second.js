import React from 'react'
import './Second.css';
import { Formik, Field, Form } from 'formik';

const Second = () => {
  return (
    <div>

<Formik
      initialValues={{
        toggle: false,
        checked: [],
        
      }}
     
    >

      
        <Form>
        <div className='theWhole' >
            <label>
              <Field className="thecheck" type="checkbox" name="checked" value="One" />
               Bracelets
            </label>
            </div>
          <div className='thethree' >
            <div className='thefirst' >
            <label>
              <Field type="checkbox" name="checked" value="One" />
              Jasinthe Bracelet
            </label>
            </div  >
            <div className='thesecond'>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Jasinthe  Bracelet
            </label>
            </div>
            <div  className='thethird'>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Inspire Bracelet
            </label>
            </div>
          </div>

          <div>
          <div className='theWhole' >
            <label>
              <Field className="thecheck" type="checkbox" name="checked" value="all" />
               
            </label>
            </div>
          <div className='thethree' >
            <div className='thefirst' >
            <label>
              <Field type="checkbox" name="checked" value="Four" />
              Recurring Item
            </label>
            </div  >
            <div className='thesecond'>
            <label>
              <Field type="checkbox" name="checked" value="Five" />
              Recurring Item with questons
            </label>
            </div>
            <div  className='thethird'>
            <label>
              <Field type="checkbox" name="checked" value="Six" />
              Zero amount item with questions
            </label>
            </div>
            <div  className='thethird'>
            <label>
              <Field type="checkbox" name="checked" value="Seven" />
              Normal item with questions
            </label>
            </div>
            <div  className='thethird'>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              normal item
            </label>
            </div>
          </div>
          </div>

          {/* <button type="submit">Submit</button> */}
        </Form>


      
    
        </Formik>

</div>
  )
}

export default Second