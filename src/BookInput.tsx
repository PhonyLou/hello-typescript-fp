import React, { useState } from 'react';

const BookInput = () => {
    const [value, setValue] = useState('');
    const [alert, setAlert] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^A-Za-z0-9]/g, '');
        if (sanitizedValue.length > 30) {
            setAlert('Book name is too long.');
            setValue(sanitizedValue.slice(0, 30));
        } else if (sanitizedValue.length === 0) {
            setAlert('Book name is required.');
            setValue('');
        } else {
            setAlert('');
            setValue(sanitizedValue);
        }
    };

    return (
        <div>
            <label htmlFor="book-input">Enter a book name:</label>
            <br />
            <input id="book-input" type="text" value={value} onChange={handleChange} />
            {alert && <div role="alert">{alert}</div>}
        </div>
    );
};

export default BookInput;
