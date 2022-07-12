import axios from "axios";
import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {

    const [translated, setTranslated] = useState('');

    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
            .then((res) => {
                setTranslated(res.data.translations[0].translatedText)
            })

    }, [language, text])

    console.log(translated);
    return (
        <div>
            <h1 className="ui header"> {translated} </h1>
        </div>
    )
}

export default Convert;