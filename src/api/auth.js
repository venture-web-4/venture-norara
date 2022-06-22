import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';

export async function executeLogin() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    let res = await signInWithPopup(auth, provider);
    //console.log(res); // @debug
    let displayName = res.user.displayName; // @debug
    return displayName;
  } catch (err) {
    //console.log(err); // @debug
    return false;
  }
}

export async function executeLogout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
}

export const changeDisplayName = displayName => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: displayName,
  })
    .then(() => {
      // console.log('profile updated'); // @debug
    })
    .catch(error => {});
};
