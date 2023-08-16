import './Form.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
function Form() {
    let schema = Yup.object().shape({
        useremail: Yup.string().min(10,"must be greater than 10 characters")
        .required("it is required"),
        userpassword: Yup.string().max(10,"should not exceed 10 characters"),
    })
    var myForm = useFormik({
        initialValues:{
            useremail:'',
            username:'',
            userpassword:''
        },
        validationSchema:schema,
        onSubmit:function(values){
            console.log(values);
        }
    });
    console.log(schema);
    return(
        <div id='form'>
            <form onSubmit={myForm.handleSubmit}>
            <div id='username'>
                <label>Enter the username:</label>
                <input onChange={myForm.handleChange} name='username' type='text' placeholder='Enter the Username'/>
            </div>
            <div id='useremail'>
                <label>Enter the email:</label>
                <input onChange={myForm.handleChange} name='useremail' type='email' placeholder='Enter the email'/>
            </div>
            <div id='userpassword'>
                <label>Enter the password:</label>
                <input onChange={myForm.handleChange} name='userpassword' type='password' placeholder='Enter the password'/>
            </div>
            <button  type='submit'>Register</button>
            </form>
        </div>
    )
}
export default Form;