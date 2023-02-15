import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import BookInput from '../BookInput';

describe('BookInput', () => {
    it('should allow users to type in valid book names', () => {
        render(<BookInput />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Harry Potter and the Philosopher\'s Stone' } });
        expect(input.value).toBe('Harry Potter and the Philosopher\'s Stone');
    });

    it('should raise an alert if the input length is greater than 30', () => {
        render(<BookInput />);
        const input = screen.getByRole('textbox');
        const invalidValue = 'The Hitchhiker\'s Guide to the Galaxy, the Restaurant at the End of the Universe, and the Life, the Universe and Everything';
        fireEvent.change(input, { target: { value: invalidValue } });
        const alert = screen.getByRole('alert');
        expect(alert.textContent).toMatch(/book name is too long/i);
        expect(input.value).toBe(invalidValue.slice(0, 30));
    });

    it('should raise an alert if the input length is 0', () => {
        render(<BookInput />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: '' } });
        const alert = screen.getByRole('alert');
        expect(alert.textContent).toMatch(/book name is required/i);
    });

    it('should only allow input characters A-Z, a-z, and 0-9', () => {
        render(<BookInput />);
        const input = screen.getByRole('textbox');
        const invalidValue = 'The Hitchhiker\'s Guide to the Galaxy!';
        fireEvent.change(input, { target: { value: invalidValue } });
        expect(input.value).toBe('The Hitchhikers Guide to the Galaxy');
    });
});
