import { render} from '@testing-library/react';
import Box from './Box';

test('renders box without crashing', () => {
  render(<Box />);
});