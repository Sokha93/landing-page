import React, { useState } from 'react';
import'./styles.scss';
import useLanguage from '../../../context/multipleLanguages/hook'

const MainBlock = () => {

    const { t } = useLanguage()
    return (
        <>
            <div className='main-header'>
                <button className='main-button'>{t.show_more}</button>
            </div>
        </>
    )
};

export default MainBlock;