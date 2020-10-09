import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime.js';

import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react';
import {unmountComponentAtNode} from 'react-dom';

import {AddMovieModal} from './AddMovieModal';


const mockProps = {
  dispatchAddMovie: jest.fn(),
  onCloseClick: jest.fn(),
};

describe('AddMovieModal component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('section');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('being closed on cross click', async () => {
    const {getByRole} = render(
        <AddMovieModal {
          ...mockProps
        } />, {container});

    await userEvent.click(getByRole('close'));
    expect(mockProps.onCloseClick).toHaveBeenCalledTimes(1);
  });

  describe('form', () => {
    it('does not allow to submit with invalid form', async () => {
        const {getByText} = render(
            <AddMovieModal {
                ...mockProps
            } />,
        {container});

    await userEvent.click(getByText('Save'));
    expect(mockProps.dispatchAddMovie).not.toHaveBeenCalled();
    expect(mockProps.onCloseClick).not.toHaveBeenCalled();
  });

  it('submits the form with entered data', async () => {
    const {getByText, getByRole, getByLabelText} = render(<AddMovieModal {
      ...mockProps
      } />, {container});

    await userEvent.type(getByLabelText('Title'), 'My new movie');
    await userEvent.type(getByLabelText('Overview'), 'My new overview');
    await userEvent.type(getByLabelText('Release date'), '2019-10-10');
    await userEvent.type(
        getByLabelText('Movie Image URL'), 'https://www.inter.it');
    await userEvent.type(getByLabelText('Genres'), 'Drama, Action');
    await userEvent.type(getByLabelText('Duration'), '190');

    fireEvent.submit(getByRole('Movie'));
    await waitFor(() => {
      expect(mockProps.dispatchAddMovie).toHaveBeenCalledWith({
        title: 'My new movie',
        overview: 'My new overview',
        releaseDate: '2019-10-10',
        posterPath: 'https://www.inter.it',
        genres: ['Drama', 'Action'],
        runtime: 190,
      });

      expect(mockProps.onCloseClick).toHaveBeenCalled();
    });
  });
});
});