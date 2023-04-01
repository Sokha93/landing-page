import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import useLanguage from '../../../context/multipleLanguages/hook';

export const CustomSelect = () => {

    const {t, setLanguage, language} = useLanguage();
    const langs = [
        'hello',
        'bye'
    ];
    const [isActive, setIsActive] = useState(false);
    const clickOutSide = useRef()
    // const [selected, setSelected] = useState(language)
    const handleOnClick = (e) => {
        setIsActive(!isActive)
        setLanguage(e.target.value)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)

        return () => {
            document.addEventListener('mousedown', handleClick)
        }
    })
    
    const handleClick = e => {
        if(clickOutSide.current?.contains(e.target)){
            return
        }
        setIsActive(false)
    }
    
    return(
        <div className='custom-select-block'>
            <div className="select-wrapper">
                <div
                    ref={clickOutSide}
                    className='selected'
                    onClick={() => setIsActive(!isActive)}
                >
                    {/* {selected} */}
                    {langs}
                </div>

                {isActive && (
                    <div className='option'>
                        {langs.map((item, index) => (
                            <div
                                key={index}
                                className='options'
                                onClick={() =>{
                                    console.log(item)
                                    setIsActive(false)
                                }}    
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};