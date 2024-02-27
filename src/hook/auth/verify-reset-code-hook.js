import React, { useEffect, useState } from 'react';
import { verifyResetCode } from '../../Redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import UseNotification from '../useNotification';
import {  useNavigate } from 'react-router-dom';

const VerifyResetCodeHook = () => {

    const dispatch = useDispatch()
    const theme = useTheme()
    const navigate = useNavigate()
    const [resetCode, setResetCode] = useState();
    const [loading, setLoading] = useState(false);
    const [check, setCheck] = useState(false);
    const [open, setOpen] = useState(false);

    const changeResetCode = (e) => {
        e.persist()
        setResetCode(e.target.value)
    }


    const handleClose = () => {
        setOpen(false);
    };

    const code = useSelector(state => state.auth.verifyResetCode)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!navigator.onLine) {
            UseNotification("you're Offline", "error");
            return;
        }
        setLoading(true)
        await dispatch(verifyResetCode({
            resetCode
        }))
        setLoading(false)
        setCheck(true);

    }
    useEffect(() => {
        if (!loading) {
            setOpen(false);
            if (code && check) {
                if (code.data) {
                    if (code.data.status === "success") {
                        setLoading(false);
                        UseNotification("now you can reset your password", "success");
                        setResetCode("")
                        setTimeout(() => {
                            navigate("/reset-password")
                        }, 2000);
                    } 
                }else {
                    setLoading(false);
                    UseNotification("Reset code invalid or expired", "error")
                }

            }
        } else {
            setOpen(true);
        }
        setCheck(false);
    }, [loading]);


    return [changeResetCode, resetCode, open, handleClose, handleSubmit, theme]
}

export default VerifyResetCodeHook;
