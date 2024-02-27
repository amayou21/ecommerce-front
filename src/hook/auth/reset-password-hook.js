import React, { useEffect, useState } from 'react';
import { resetPassword } from '../../Redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import UseNotification from '../useNotification';
import { useNavigate } from 'react-router-dom';

const ResetPasswordHook = () => {

    const dispatch = useDispatch()
    const theme = useTheme()
    const navigate = useNavigate()
    const [newPassword, setNewPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const email = localStorage.getItem("email")

    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(false);
    const [open, setOpen] = useState(false);

    const changeNewPassword = (e) => {
        e.persist()
        setNewPassword(e.target.value)
    }

    const changePasswordConfirm = (e) => {
        e.persist()
        setPasswordConfirm(e.target.value)
    }


    const handleClose = () => {
        setOpen(false);
    };

    const resetPass = useSelector(state => state.auth.resetPassword)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }
        setLoading(true)

        await dispatch(resetPassword({
            email,
            newPassword,
            passwordConfirm
        }))
        setLoading(false)
        setCheck(true);

    }
    useEffect(() => {
        if (!loading) {
            setOpen(false);
            if (resetPass && check) {
                if (resetPass.data) {
                    if (resetPass.data.token) {
                        setLoading(false);
                        UseNotification("password reset successfuly!", "success")
                        setNewPassword("")
                        setPasswordConfirm("")
                        localStorage.removeItem("token")
                        localStorage.removeItem("user")
                        localStorage.removeItem("email")

                        setTimeout(() => {
                            navigate("/login")
                        }, 2000);
                    } else {
                        if (resetPass.data.status === "error") {
                            setLoading(false);
                            localStorage.removeItem("token")
                            localStorage.removeItem("user")
                            localStorage.removeItem("email")
                            UseNotification(resetPass.data.message, "error")
                        }
                        if (resetPass.data.errors) {
                            UseNotification(resetPass.data.errors[0].msg, "error")
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


    return [changeNewPassword, changePasswordConfirm, newPassword, passwordConfirm, open, handleClose, handleSubmit, theme]
}


export default ResetPasswordHook;
