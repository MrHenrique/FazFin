import styled from "styled-components/native";
export const Container = styled.SafeAreaView`
  background-color: #006773;
  flex: 1;
`;
export const Title = styled.Text`
  padding-top: 40px;
  padding-bottom: 8px;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
  padding-left: 14px;
  padding-right: 14px;
  text-align: center;
`;
export const Texto = styled.Text`
  padding-top: 40px;  
  font-weight: bold;
  font-size: 18px;
  display: flex;
  text-align: center;
  color: #ffffff;
`;
export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  margin-bottom: 20px;
  margin-top:50px;
`;
export const BotaoPress = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #0F6D00;
  width: 270px;
  height: 50px;
  margin-bottom: 25px;
  margin-top: 75px;
  margin-bottom: -55px;
`;
export const TituloBotao = styled.Text`
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: white;
`;
export const AreaCont = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ImgBg = styled.ImageBackground`
  flex: 1;
  object-fit: cover;
  width: 100%;
`;
export const CampoTexto = styled.TextInput`
  background-color: white;
  color:black;
  width:300px;
  height:40px;
  text-align: center;
  border-radius: 10px;
`;
