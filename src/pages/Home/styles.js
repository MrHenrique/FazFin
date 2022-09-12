import styled from "styled-components/native";

export const AreaCont = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Container = styled.SafeAreaView`
  background-color: #006773;
  flex: 1;
`;
export const Title = styled.Text`
  padding-top: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  padding-left: 14px;
  padding-right: 14px;
  text-align: center;
`;
export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  margin-top: 50px;
`;
export const Texto = styled.Text`
  padding-top: 135px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  text-align: center;
  color: #ffffff;
`;
export const ImgBg = styled.ImageBackground`
  flex: 1;
  object-fit: cover;
  width: 100%;
`;
export const BotaoPress = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #0F6D00;
  width: 270px;
  height: 50px;
  margin-top: 40px;
  margin-bottom: -20px;
`;
export const TituloBotao = styled.Text`
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: white;
`;
