import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import '../Style-sheets/Form.css';

const Formproduct = ()=>{
    const [Sendform, ChallengeSendForm]= useState(false);

    

    return(
        
        <Formik className='FormikStile'
        initialValues={{
            name: '',
            description: '',
            price: '',
            amount: '',
            TypeOfSale: ''
        }}
        onSubmit={(values,{resetForm}) => {
            console.log('Formulario enviado');
            resetForm();
            ChallengeSendForm(true);
            setTimeout(()=>ChallengeSendForm(false), 5000);
            /*Conectar api*/ 
            
        }}

        validate={(values)=>{
            let errors = {};
            if(!values.name){
                errors.name = 'please insert a name'
            }
            if(!values.description){
                errors.description = 'please insert a description'
            }
            if(!values.amount){
                errors.amount = 'please insert a amount'
            }
            if(!values.price){
                errors.price = 'please insert a price'
            }
            
           
            
            return errors;
        }}
        >   
        {({errors}) => (
            <Form className='form'>
                <div className='col-md-3'>
                    <label htmlFor='name'>Name</label>
                    <Field  
                    className='form-control' 
                    type='text' 
                    id='name' 
                    name='name' 
                    placeholder='Insert name' />
                    <ErrorMessage name='name' component={()=><div className='errors'>{errors.name}</div>}/>
                </div>
                <div className='col-md-3'>
                    <label>Description</label>
                    <Field as='textarea'
                    placeholder='Insert description' 
                    className='form-control' 
                    type='text' 
                    name= 'description' 
                    />
                    <ErrorMessage name='description' component={()=><div className='errors'>{errors.description}</div>}/>
                </div>
                
                <div className='col-md-3'>
                    <label>Amount</label>
                    <Field 
                    placeholder='Insert the amount of product' 
                    className='form-control' 
                    type='numeric' 
                    name= 'amount' 
                    />
                    <ErrorMessage name='amount' component={()=><div className='errors'>{errors.amount}</div>}/>
                </div>
                <div className='Type-of-sale'>
                    <label> Type of sale </label>
                    <Field name='TypeOfSale' as= 'select'>
                        <option value=''></option>
                        <option value='Money'>Money</option>
                        <option value='Trade'>Trade</option>
                        <option value='Trade and Money'>Trade and Money</option>
                    </Field>
                    <ErrorMessage name='TypeOfSale' component={()=><div className='errors'>{errors.TypeOfSale}</div>}/>
                </div>
                <div className='col-md-3'>
                    <label>Price</label>
                    <Field 
                    placeholder='Insert price' 
                    className='form-control' 
                    type='numeric' 
                    name= 'price' 
                    
                    />
                    <ErrorMessage name='price' component={()=><div className='errors'>{errors.price}</div>}/>
                </div>
                
                <button type='submit'>Send</button>
                {Sendform && <p className='nice'> Form send successful</p>}
            </Form>

        )}
        
    </Formik>
    
    
    );
}

export default Formproduct;