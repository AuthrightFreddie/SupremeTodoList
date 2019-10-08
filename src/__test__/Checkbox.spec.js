import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox';
import { jsxEmptyExpression } from '@babel/types';

beforeEach(cleanup); // clean the DOM!

jest.mock('../firebaes', () => ({
    firebase: 
}))