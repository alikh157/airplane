import React, {useEffect, useState} from 'react';
import searchBar from './searchBar.css'
import economy from './images/cheap.png';
import globe from './images/globe.png';
import business from './images/business.png'
import internal from './images/internal.png';
import air3 from './images/air3.jpg';
import * as api from "../../api";
import Radio from '@mui/material/Radio';
import {useNavigate} from 'react-router-dom';
import {DatePicker, RangeDatePicker} from "jalali-react-datepicker"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import moment from "moment";
import AdapterJalaali from '@date-io/jalaali';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {defaultDatePickerTheme, defaultRangeTheme} from "../../datePickerTheme"

const SearchBar = () => {
    const [selectedValue, setSelectedValue] = useState([]);
    const [value, setValue] = useState(new Date());
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        src: "",
        dst: "",
        isOneWay: "true",
        startDate: "",
        endDate: "",
    })

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const SearchSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        api.tripSearch({
            data: {
                ...formData,
                startDate: formData.startDate.format("YYYY/MM/DD"),
                endDate: formData.endDate.format("YYYY/MM/DD")
            },
            onError: (err) => {
                console.log(err.message);
            }, onSuccess: (msg) => {
                navigate('/');
                console.log(msg);
            }
        })

    }
    useEffect(() => {
        console.log(formData)
    }, [formData])

    function dateChange(dateData) {
        console.log(dateData)
        if (formData.isOneWay === "true") {
            const {
                value
            } = dateData
            setFormData({...formData, startDate: value})
        } else {
            const {
                start, end
            } = dateData
            setFormData({...formData, startDate: start, endDate: end})
        }
        // console.log(start.format("YYYY-MM-DD"));
        // console.log(end.format("YYYY-MM-DD"));
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
                            {/*<FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>*/}
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
                <div className="category">
                    <img src={business} alt="business"/>
                    <p>پرواز بیزینس</p>
                </div>
                <div className="category">
                    <img src={economy} alt="economy"/>
                    <p>پرواز اقتصادی</p>
                </div>
                <div className="category">
                    <img src={internal} alt="internal"/>
                    <p>پرواز داخلی</p>
                </div>
                <div className="category">
                    <img src={globe} alt="international"/>
                    <p>پرواز خارجی</p>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
