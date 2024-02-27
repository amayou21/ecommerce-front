import React, { useEffect, useState } from 'react';
import { forgetPassword } from '../../Redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import UseNotification from '../useNotification';
import { useNavigate } from 'react-router-dom';

const ForgetPasswordHook = () => {

    const dispatch = useDispatch()
    const theme = useTheme()
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(false);
    const [open, setOpen] = useState(false);

    const changeEmail = (e) => {
        e.persist()
        setEmail(e.target.value)
    }


    const handleClose = () => {
        setOpen(false);
    };

    const pass = useSelector(state => state.auth.forgetPassword)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }
        setLoading(true)
        await dispatch(forgetPassword({
            email
        }))
        setLoading(false)
        setCheck(true);

    }
    useEffect(() => {
        if (!loading) {
            setOpen(false);
            if (pass && check) {
                if (pass.data) {
                    if (pass.data.status === "success") {
                        setLoading(false);
                        UseNotification(pass.data.msg, "success");
                        setEmail("")
                        localStorage.setItem("email", email)
                        setTimeout(() => {
                            navigate("/verify-code")
                        }, 2000);
                    } else {
                        setLoading(false);
                        if (pass.data.status === "error") {
                            UseNotification(pass.data.message, "error")
                            return
                        }
                        if (pass.data.errors) {
                            UseNotification(pass.data.errors[0].msg, "error")
                            return
                        }
                    }
                }

            }
        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loading]);


    return [changeEmail, email, open, handleClose, loading, handleSubmit, theme]
}

export default ForgetPasswordHook;
