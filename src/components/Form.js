import React, { useEffect, useState } from 'react';

function Form() {
    const [title, setTitle] = useState('Title');
    const [globalTitle, setGlobalTitle] = useState('GlobalTitle');

    // In function component we can't use componentDidMount
    // useEffect Hook can replace componentDidMount and componentDidUpdate

    useEffect(function updateTitle() {
        console.log('Formulaire rendu');
        document.title = globalTitle;
    },[globalTitle]);

    function onClickHandle(event) {
        event.preventDefault();
        setGlobalTitle('Mon formulaire - ' + title);
        console.log('Titre changé');
    };

    function handleChange(event) {
        const value = event.target.value;
        setTitle(value);
    }

    return (
        <>
            <h1>{globalTitle}</h1>
            <form>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}>
                </input>
                <button onClick={onClickHandle}> Send Title </button>
            </form>
        </>
    )
}

export default Form;