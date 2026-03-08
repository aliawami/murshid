import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MainPage from './MainPage';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import apiClient from '../../../services/api-client';

// Mock the API client
vi.mock('../../../services/api-client', () => ({
  default: {
    get: vi.fn()
  },
  CanceledError: class CanceledError extends Error {}
}));

describe('MainPage', () => {
  const renderComponent = () => render(
    <ChakraProvider value={defaultSystem}>
      <MainPage />
    </ChakraProvider>
  );

  it('renders correctly', () => {
    renderComponent();
    expect(screen.getByText(/مرشد/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('ادخل جذر الكلمة للبحث عنها في القرآن الكريم')).toBeInTheDocument();
  });

  it('shows an error message when API call fails', async () => {
    (apiClient.get as any).mockRejectedValueOnce(new Error('Network Error'));
    renderComponent();

    const input = screen.getByPlaceholderText('ادخل جذر الكلمة للبحث عنها في القرآن الكريم');
    fireEvent.change(input, { target: { value: 'test' } });
    
    // Simulate form submit, wait it is a form?
    // The closest way might be fireEvent.submit(input) or fireEvent.keyDown(input, { key: 'Enter' })
    fireEvent.submit(input);

    await waitFor(() => {
      expect(screen.getByText('حدث خطأ أثناء البحث، يرجى المحاولة مرة أخرى.')).toBeInTheDocument();
    });
  });
});
