import React, { useEffect, useState } from 'react';
import UseNotification from '../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../Redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const SignupHook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState();

    const changeName = (e) => {
        e.persist()
        setName(e.target.value)
    }
    const changeLName = (e) => {
        e.persist()
        setLName(e.target.value)
    }
    const changeEmail = (e) => {
        e.persist()
        setEmail(e.target.value)
    }
    const changePhone = (e) => {
        e.persist()
        setPhone(e.target.value);
    }
    const changePassword = (e) => {
        e.persist()
        setPassword(e.target.value);
    }
    const changeConfirmPassword = (e) => {
        e.persist()
        setConfirmPassword(e.target.value);
    }





    const handleClose = () => {
        setOpen(false);
    };

    const user = useSelector(state => state.auth.SignUp)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }
        setLoading(true)
        await dispatch(signUp({
            name, email, password, passwordConfirm: confirmPassword, phone, lName

        }))
        setLoading(false)
        setCheck(true);
    }

    useEffect(() => {
        if (!loading) {
            setOpen(false);
            if (user && check) {
                if (user.data) {
                    if (user.data.token) {
                        setLoading(false);
                        UseNotification("Your account created successfuly!", "success");
                        setLName("")
                        setName("")
                        setPassword("")
                        setConfirmPassword("")
                        setEmail("")
                        setPhone("")
                        localStorage.setItem("token", user.data.token)
                        setTimeout(() => {
                            navigate("/login")
                        }, 2000);
                    } else {
                        setLoading(false);
                        UseNotification(user.data.errors[0].msg, "error");

                    }
                }

            }
        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loading]);



    return [lName, email, phone, password, confirmPassword, loading, handleSubmit, open, handleClose, name, changeName, changeEmail, changePassword, changeConfirmPassword, changePhone, changeLName, setLoading]
}

export default SignupHook;
