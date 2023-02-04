import React, { useEffect } from 'react';
import i18n from '../../locales/i18n';
import { useDispatch, useSelector } from "react-redux";
import { langReducer } from "../../redux-toolkit/reducer/langReducer";

export default function CheckedFound() {

    const langVal                     = useSelector((state) => state.langCars.langCars);
    const dispatch                    = useDispatch();

    const fetchData = () => {
        
        if (langVal) {
            if(langVal !== 'ar' || langVal === null){
                dispatch(langReducer(langVal));
                i18n.changeLanguage(langVal);
                document.documentElement.dir = 'ltr';
            }else{
                dispatch(langReducer(langVal));
                i18n.changeLanguage(langVal);
                document.documentElement.dir = 'rtl';
            }
        }else{
            dispatch(langReducer('ar'));
            i18n.changeLanguage('ar');
            document.documentElement.dir = 'rtl';
        } 
    }
    
    useEffect(() => { fetchData(); }, []);

}