import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
   ${reset}
   @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;600;700;800&family=Poppins:wght@400;500;800&display=swap');

   a{
      text-decoration:none;
      color:inherit;
   }
   body{
      font-family:'Catamaran', sans-serif;
   }
`;

export default GlobalStyle;