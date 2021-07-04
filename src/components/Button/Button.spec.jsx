import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('<Button />', () => {
    // it('should render the button with the text "oi"', () => {
    //     render(<Button text="oi"/>);
        
    //     const button = screen.getByRole('button', {name: /oi/i});
    //     expect(button).toBeInTheDocument();        
    // });

    it('should call function on button click', () => {
        const fn = jest.fn();

        render(<Button text="oi" onClick={fn} />);

        const button = screen.getByRole('button', {name: /oi/i});
        
        userEvent.click(button);
        // fireEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1);
        


             
    });

    

});