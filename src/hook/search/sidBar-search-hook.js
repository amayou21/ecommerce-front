import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllBrand } from "../../Redux/actions/brandAction"
import { AllCategory } from "../../Redux/actions/categoryAction"
const SidBarSearchHook = () => {
    const dispatch = useDispatch()

    const [catChecked, setCatChecked] = useState([]);
    const [braChecked, setbrandChecked] = useState([]);
    useEffect(() => {
        const get = async () => {
            await dispatch(AllCategory(5))
            await dispatch(AllBrand(5))
        }
        get()
    }, []);

    const cat = useSelector(state => state.allCategory.category)
    const bra = useSelector(state => state.allBrand.brand)

    let category = []
    let brand = []
    try {
        if (cat) {
            if (cat.data) {
                category = cat.data.documents
            }
        }
    } catch (error) { }

    try {
        if (bra) {
            if (bra.data) {
                brand = bra.data.documents
            }
        }
    } catch (error) { }

    const categoryChecked = (e) => {
        let val = e.target.value
        if (val === "0") {
            setCatChecked([])
        } else if (e.target.checked === true) {
            setCatChecked([...catChecked, val])
        } else if (e.target.checked === false) {
            const newBra = catChecked.filter(e => e !== val)
            setCatChecked(newBra)
        }
    }


    console.log(catChecked);
    const brandChecked = (e) => {
        let val = e.target.value
        if (val === "0") {
            setbrandChecked([])
        } else if (e.target.checked === true) {
            setbrandChecked([...braChecked, val])
        } else if (e.target.checked === false) {
            const newBra = braChecked.filter(e => e !== val)
            setbrandChecked(newBra)
        }
    }

    return [category, brand, brandChecked, categoryChecked]
}


export default SidBarSearchHook;
