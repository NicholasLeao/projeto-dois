import styled from "styled-components";

function CardMedio(props) {
  const { data } = props;
  const imgUrl = data.corpo.match(/!\[.*?\]\((.*?)\)/)[1];
  

  return (
    <S_div>
      <SCardImgDiv>
        <SImg src={imgUrl} alt="placeholder" />
        <STextDiv>
          <SH2>{data.titulo}</SH2>
          
        </STextDiv>
      </SCardImgDiv>
      
    </S_div>
  );
}

export default CardMedio;


// ========== STYLED COMPONENTS ==============================

const S_div = styled.div`
  width: 12rem;
  height: 15rem;
  /* border: 3px solid #ebba3e; */
  background-color: transparent;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
  margin-top: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const SCardImgDiv = styled.div`
  width: 100%;
  height: 80%;
 // border-bottom: 1px solid rgba(220, 220, 220, 0.4);
  margin-bottom: 30px;
  `

const SImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const STextDiv = styled.div`
  margin-top: 10px;
  background: linear-gradient(to top right, #29155c, #db1880);
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

const SH2 = styled.h2`
  font-size: 25px;
  text-align:center;
  
 
  
`;
const SHr = styled.hr`
  background-color: #ebba3e;
      height: 2px;
      width: 100px;
      border: none;
      //margin-left: 5px;
      
      
`
  


