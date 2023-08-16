import { useState } from 'react';
import './Signup.css';
import Show from '../Show Users/Show';
function Signup () {
    var [users,setUsers] = useState([]);
    var [user,setUser] = useState({});
    var [dis,setDis] = useState('block');
    var [hide,setHide] = useState('Show Users');
    var [warning1,setWarnig1] = useState('');
    var [warning2,setWarnig2] = useState('');
    var [warning3,setWarnig3] = useState('');
    function visible(){
        if (dis==='block'){
            setDis(dis='none');
            setHide(hide='Show Users');
        }
        else {
            setDis (dis='block');
            setHide(hide='Hide Users');
        }
    }
    function addEmail(event) {
        user.useremail = event.target.value;
        if (user.useremail.length < 7){
            setWarnig1(warning1='Email must be greater than 6 char');
        }
        else {
            setWarnig1(warning1='');
        }
        setUser({...user});
    }
    function addpassword(event) {
        user.password = event.target.value;
        if (user.password.length < 3){
            setWarnig2(warning2='password must be greater than 2 char');
        }
        else {
            setWarnig2(warning2='');
        }
        setUser({...user});
    }
    function addusername(event) {
        user.username = event.target.value;
        if (user.username.length < 10){
            setWarnig3(warning3='password must be greater than 9 char');
        }
        else {
            setWarnig3(warning3='');
        }
        setUser({...user});
    }
    function addUser(){
        setUser({...user});
        users.push(user);
        setUsers([...users]);
        console.log(users);
    }
    
    return(
        <div id="signup">
            <div id='email'>
                <label htmlFor='email'>Email: </label>
                <input onChange={addEmail} type="email" name="email" placeholder='Enter your email address'required/>
                <label style={{color:'red' ,position:'absolute',left:'712px'}} id='warning1'>{warning1}</label>
            </div>
            <div id='password'>
                <label htmlFor='password'>Password: </label>
                <input onChange={addpassword}  type="password" name="password" placeholder='Enter your password'/>
                <label style={{color:'red' ,position:'absolute',left:'712px'}} id='warning2'>{warning2}</label>
            </div>
            <div id='username'>
                <label htmlFor='username'>Username: </label>
                <input onChange={addusername}  type="text" name="username" placeholder='Enter valid username'required/>
                <label style={{color:'red' ,position:'absolute',left:'712px'}} id='warning3'>{warning3}</label>
            </div>
            <button id='register' onClick={addUser}>
                Register
            </button>
            <button id='showusers'onClick={visible}>
                {hide}
            </button>
            <Show item={users} display={dis}></Show>
        </div>
    )
}
export default Signup;
