import styled from 'styled-components';

export const GroundWrapper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: auto;
`;

export const ObjOuterWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const ObjLeftWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: baseline;
`;

export const ObjRightWrapper = styled.div`
  display: flex;
  margin-right: 30px;
  align-items: baseline;
`;

export const DrainBlockHigh = styled.div`
  width: 50px;
  height: 48px;
  margin-right: 10px;
  background-image: url('../../../img/drain.png');
`;

export const DrainBlockLow = styled.div`
  width: 50px;
  height: 40px;
  margin-right: 10px;
  background-image: url('../../../img/drain.png');
`;

export const KupaBlock = styled.div`
  width: 90px;
  height: 100px;
  margin: 0 10px;
  background-image: url('../../../img/kupa.gif');
  background-size: 90px 100px;
`;

export const GreenPlantBlock = styled.div`
  width: 50px;
  height: 70px;
  background-image: url('../../../img/greenplant.gif');
  background-size: 50px 70px;
`;

export const MarioBlock = styled.div`
  @keyframes jump {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, -15px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  width: 40px;
  height: 60px;
  margin: 0 10px;
  background-image: url('../../../img/mario.gif');
  background-size: 40px 60px;
  animation: jump 1s linear infinite alternate;
`;

export const RedPlantBlock = styled.div`
  width: 40px;
  height: 60px;
  margin-right: 10px;
  background-image: url('../../../img/redplant.gif');
  background-size: 40px 60px;
`;

export const GrassBlock = styled.div`
  width: 100%;
  height: 32px;
  background-image: url('../../../img/grass.png');
`;

export const GroundBlock = styled.div`
  width: 100%;
  height: 32px;
  background-image: url('../../../img/ground.png');
`;
