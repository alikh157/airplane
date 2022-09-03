import React, {useContext, useEffect, useState} from 'react';
import './searchBar.css'
import economy from './images/cheap.png';
import globe from './images/globe.png';
import business from './images/business.png'
import internal from './images/internal.png';
import * as api from "../../api";
import Radio from '@mui/material/Radio';
import {useNavigate} from 'react-router-dom';
import {DatePicker, RangeDatePicker} from "jalali-react-datepicker"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import moment from "moment";
import AdapterJalaali from '@date-io/jalaali';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {defaultDatePickerTheme, defaultRangeTheme} from "../../datePickerTheme"
import {SearchResultContext} from "../../contexts/SearchResultContext";

const SearchBar = () => {
    const [selectedValue, setSelectedValue] = useState([]);
    const {searchResult, setSearchResult} = useContext(SearchResultContext);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        src: "",
        dst: "",
        isOneWay: "true",
        startDate: "",
        endDate: "",
        BusinessOrEconomy: '',
        InternalOrExternal: ''
    })

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const SearchSubmit = (e) => {
        e.preventDefault();
        api.tripSearch({
            data: {...formData},
            onError: (err) => {
                console.log(err.message);
            }, onSuccess: (res) => {
                setSearchResult(res)
                navigate('/');
            }
        })

    }
    useEffect(() => {
        console.log("formData", formData)
    }, [formData])

    function dateChange(dateData) {
        console.log(dateData)
        if (formData.isOneWay === "true") {
            const {
                value
            } = dateData
            setFormData({...formData, startDate: value.format("jYYYY/jMM/jDD", 'fa-IR')})
        } else {
            const {
                start, end
            } = dateData
            setFormData({
                ...formData,
                startDate: start.format("jYYYY/jMM/jDD", 'fa-IR'),
                endDate: end.format("jYYYY/jMM/jDD", 'fa-IR')
            })
        }
    }

    return (
        <div className="search">
            <h1>پرواز خود را پیدا کنید</h1>
            <form onSubmit={SearchSubmit} className={"search-form"}>
                <div className="search-inputs">
                    <input type="text" placeholder='&#x270e; شهر مبداء' onChange={(e) => {
                        setFormData({...formData, src: e.target.value})
                    }}/>
                    <input type="text" placeholder='&#x270e; شهر مقصد' onChange={(e) => {
                        setFormData({...formData, dst: e.target.value})
                    }}/>
                    <button className={"searchBTN"} type={"submit"}>جست و جو</button>
                </div>
                <div className={"all"}>
                    <div className={"radio"}>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={formData.isOneWay}
                                onChange={e => {
                                    setFormData({...formData, isOneWay: e.target.value})
                                }
                                }
                            >
                                <FormControlLabel value={"true"} control={<Radio/>} label="یک طرفه"/>
                                <FormControlLabel value={"false"} control={<Radio/>} label="دو طرفه"/>
                            </RadioGroup>
                        </FormControl>

                    </div>
                    <div className="date">
                        {
                            formData.isOneWay === "true" ?
                                <DatePicker onClickSubmitButton={dateChange} timePicker={false} label="در تاریخ"
                                            theme={defaultDatePickerTheme}/>
                                :
                                <RangeDatePicker onClickSubmitButton={dateChange} timePicker={false} toLabel="تا تاریخ"
                                                 fromLabel="از تاریخ" theme={defaultRangeTheme}/>
                        }
                    </div>
                </div>
            </form>
            <div className="category-list">
                <div className={formData.BusinessOrEconomy == 'Business' ? 'categoryActive' : 'category'}
                     onClick={e => {
                         formData.BusinessOrEconomy === 'Business' ?
                             setFormData({...formData, BusinessOrEconomy: ''}):setFormData({...formData, BusinessOrEconomy: 'Business'})
                     }}>
                    <img src={business} alt="business"/>
                    <p>پرواز بیزینس</p>
                </div>
                <div className={formData.BusinessOrEconomy == 'Economy' ? 'categoryActive' : 'category'} onClick={e => {
                    formData.BusinessOrEconomy === 'Economy' ?
                        setFormData({...formData, BusinessOrEconomy: ''}):setFormData({...formData, BusinessOrEconomy: 'Economy'})
                }}>
                    <img src={economy} alt="economy"/>
                    <p>پرواز اقتصادی</p>
                </div>
                <div className={formData.InternalOrExternal == 'Internal' ? 'categoryActive' : 'category'}
                     onClick={e => {
                         formData.InternalOrExternal === 'Internal' ?
                             setFormData({...formData, InternalOrExternal: ''}):setFormData({...formData, InternalOrExternal: 'Internal'})
                     }}>
                    <img src={internal} alt="internal"/>
                    <p>پرواز داخلی</p>
                </div>
                <div className={formData.InternalOrExternal == 'External' ? 'categoryActive' : 'category'}
                     onClick={e => {
                         formData.InternalOrExternal === 'External' ?
                         setFormData({...formData, InternalOrExternal: ''}):setFormData({...formData, InternalOrExternal: 'External'})
                     }}>
                    <img src={globe} alt="international"/>
                    <p>پرواز خارجی</p>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
