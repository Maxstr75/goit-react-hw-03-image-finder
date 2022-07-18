import { ThreeDots } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <ThreeDots />
    </StyledLoader>
  );
};

export default Loader;
