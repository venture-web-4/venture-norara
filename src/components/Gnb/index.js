import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
// @debug
import { getScores, postScore } from '../../api/score';
import { clearItem, saveItem } from '../../utils/storage';

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
        saveItem('userName', auth.currentUser.displayName);
        saveItem('userEmail', auth.currentUser.email);
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
    window.location.href = '/';
    clearItem('userName');
    clearItem('userEmail');
  };

  // @debug
  async function handleGetScores() {
    let scores2 = await getScores(0);
    console.log(scores2);
  }

  async function handlePostScore() {
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    if (auth.currentUser) {
      let gametype = randomNum(0, 3);
      let score = randomNum(0, 200);
      let username = auth.currentUser.displayName;
      let email = auth.currentUser.email;
      await postScore(gametype, score, username, email);
    }
  }

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
        <LandingWrapper onClick={() => (window.location.href = '/')}>
          NORARA
        </LandingWrapper>
        <CategoryWrapper onClick={() => (window.location.href = '/category')}>
          게임 선택하기
        </CategoryWrapper>
      </NavigatorWrapper>

      <AuthWrapper>
        {/* @debug */}
        <SigninWrapper onClick={handlePostScore}>post테스트</SigninWrapper>
        <SigninWrapper onClick={handleGetScores}>get테스트</SigninWrapper>
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
