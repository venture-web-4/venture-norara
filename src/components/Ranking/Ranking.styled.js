import styled from 'styled-components';
import '../../styles/landing.scss';
import '../../styles/font.scss';

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const GameTitle = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  height: 40px;
`;

export const RankingEachGame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.32);
  width: 190px;
  min-height: 324.5px;
  border-radius: 10px;
  padding: 10px 0px 10px 15px;
`;

export const Rankers = styled.div`
  line-height: 30px;
  font-size: 15px;
  color: #898989;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-child {
    color: #ffcf40;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  }
  &:nth-child(2) {
    color: #c0c0c0;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  }
  &:nth-child(3) {
    color: #cc9553;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
  }
`;

export const Score = styled.span`
  margin-left: 3px;
  font-size: 15px;
`;

export const Loading = styled.div`
  color: #424242;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 100%;
  height: 100%;
`;

export const LoadingImg = styled.div`
  background-image: url('../../../img/loading.gif');
  width: 65px;
  height: 50px;
  background-size: 65px 50px;
  margin-right: 15px;
`;
