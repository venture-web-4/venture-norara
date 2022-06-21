import { Link } from 'react-router-dom';
import {
    Button,
    GameDescription,
    GameDescriptionSubTitle,
    GameDescriptionTitle,
    GameDescriptionWrapper,
    GameHowtoWrapper,
    GameKeyDescription,
    GameKeyDescriptionWrapper,
    KeyboardImg,
    KeyboardWrapper,
    MinorDescription,
    MouseImg,
    MouseWrapper,
    MuskDescription,
    MuskDescriptionWrapper,
    MuskGameWrapper,
    MuskImg,
    MuskWrapper,
    OuterWrapper,
    SubTitle,
    Title,
    Wrapper,
} from './HowToAsteroids.styled';

export default function HowToAsteroids() {
    return (
        <OuterWrapper>
            <Wrapper>
                <Title>{'소행성을 부숴라!'}</Title>
                <SubTitle>{'- GAME DESCRIPTION -'} </SubTitle>
                <MuskGameWrapper>
                    <MuskWrapper>
                        <MuskImg />
                        <MuskDescriptionWrapper>
                            <MuskDescription>
                                {'나 일론 머스크... 화성 갈끄니까...!'}
                            </MuskDescription>
                            <MuskDescription>
                                {'근데 소행성 파편이 자꾸 날아와요...'}
                            </MuskDescription>
                            <MuskDescription>
                                {'우주선이 파괴될 거에요.. 무서워요...'}
                            </MuskDescription>
                        </MuskDescriptionWrapper>
                    </MuskWrapper>

                    <GameHowtoWrapper>
                        <GameDescriptionWrapper>
                            <GameDescriptionTitle>{'여러분!'}</GameDescriptionTitle>
                            <GameDescriptionSubTitle>
                                {'우리 머스크를 위해 소행성을 제거해주세요!'}
                            </GameDescriptionSubTitle>
                            <GameDescription>
                                {'(소곤소곤) 게다가 소행성 파편들은 큰 돈이 된답니다...!'}
                            </GameDescription>
                            <GameDescription>
                                {'(소곤소곤) 열심히 모으면 머스크보다 더 부자가 될 수도....!'}
                            </GameDescription>
                            <GameDescription>
                                {
                                    '(..👤👥웅성웅성...👤👥...정말..?..👥👤👥👤..소곤소곤...)'
                                }
                            </GameDescription>
                            <MinorDescription>
                                {'❗️ 파편화된 소행성을 먹어 점수를 획득해보세요.'}
                            </MinorDescription>
                            <GameKeyDescriptionWrapper>
                                <MouseWrapper>
                                    <MouseImg />
                                    <GameKeyDescription>
                                        {'우주선 이동: 검은 캔버스에서 마우스 좌클릭'}
                                    </GameKeyDescription>
                                </MouseWrapper>

                                <KeyboardWrapper>
                                    <KeyboardImg />
                                    <GameKeyDescription>{'미사일 공격: a 키'}</GameKeyDescription>
                                </KeyboardWrapper>
                            </GameKeyDescriptionWrapper>
                        </GameDescriptionWrapper>
                    </GameHowtoWrapper>
                </MuskGameWrapper>

                <Link to='/asteroids'>
                    <Button>게임 시작하기 (바로 시작하니 주의!)</Button>
                </Link>
            </Wrapper>
        </OuterWrapper>
    );
}