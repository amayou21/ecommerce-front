import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UseNotification from '../useNotification';
import { login } from '../../Redux/actions/authAction';
import { useTheme } from '@emotion/react';

const LoginHook = () => {

    const theme = useTheme();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const user = useSelector(state => state.auth.login)

    const changeEmail = (e) => {
        e.persist()
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        e.persist()
        setPassword(e.target.value);
    }
    const handleSbmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }
        setLoading(true)
        await dispatch(login({
            email, password
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
                        UseNotification("login successfuly!", "success");
                        setPassword("")
                        setEmail("")
                        localStorage.setItem("token", user.data.token)
                        setTimeout(() => {
                            window.location.pathname = "/"
                        }, 2000);
                    } else {
                        setLoading(false);
                        if (user.data.errors) {
                            UseNotification(user.data.errors[0].msg, "error")
                        }
                        if (user.data.message) {

                            UseNotification(user.data.message, "error");
                        }

                    }
                }

            }
        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loading]);
    return [handleSbmit, email, password, changeEmail, changePassword, loading, handleClose, open, navigate, theme]
}

export default LoginHook;
