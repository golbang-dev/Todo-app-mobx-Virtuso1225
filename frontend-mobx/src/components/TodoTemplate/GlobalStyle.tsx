import { createGlobalStyle } from 'styled-components';
import CascadiaCode from '../../fonts/CascadiaCode.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: CascadiaCode;
    src: url(${CascadiaCode});
}
`;

export default GlobalStyle;
