import { Link } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

import {
  Wrapper,
  NavigatorWrapper,
  AuthWrapper,
  LandingWrapper,
  CategoryWrapper,
  SigninWrapper,
  SignupWrapper,
} from './Gnb.styled';

import {
  ToastWrapper,
  ModalText,
  InputText,
  ConfirmButton,
  CancleButton,
} from './ToastModal/ToastModal.styled';

import { executeLogin, executeLogout, changeDisplayName } from '../../api/auth';

export default function Gnb() {
  const auth = getAuth();
  const [userName, setUserName] = useState(auth.currentUser?.displayName);
  const [isLoggedIn, setIsLoggedIn] = useState(!!auth.currentUser);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSetDisplayName = () => {
    let username = document.getElementById('username').value;
    if (username) {
      changeDisplayName(username);
      setUserName(auth.currentUser.displayName);
    }
    setShowModal(false);
  };

  const handleLogin = () => {
    (async () => {
      let res = await executeLogin();
      if (res !== false) {
        console.log('login success');
        setIsLoggedIn(true);
        setUserName(res);
      } else {
        console.log('login failed');
        setIsLoggedIn(false);
        setUserName('');
      }
    })();
  };

  const handleLogout = () => {
    executeLogout();
    setIsLoggedIn(false);
    setUserName('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (auth.currentUser) {
        setIsLoggedIn(true);
        setUserName(auth.currentUser.displayName);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <NavigatorWrapper>
        <Link to='/'>
          <LandingWrapper>NORARA</LandingWrapper>
        </Link>
        <Link to='/category'>
          <CategoryWrapper>게임 선택하기</CategoryWrapper>
        </Link>
      </NavigatorWrapper>

      <AuthWrapper>
        {/* 회원가입, 로그인, 로그아웃 구현 */}
        {userName ? (
          <SignupWrapper onClick={toggleModal}>{userName}</SignupWrapper>
        ) : (
          <></>
        )}
        {isLoggedIn ? (
          <SigninWrapper onClick={handleLogout}>로그아웃</SigninWrapper>
        ) : (
          <SigninWrapper onClick={handleLogin}>로그인</SigninWrapper>
        )}
      </AuthWrapper>
      {showModal && (
        <ToastWrapper>
          <ModalText>닉네임을 변경하세요</ModalText>
          <InputText type='text' id='username' />
          <ConfirmButton onClick={handleSetDisplayName}>확인</ConfirmButton>
          <CancleButton onClick={toggleModal}>x</CancleButton>
        </ToastWrapper>
      )}
    </Wrapper>
  );
}
