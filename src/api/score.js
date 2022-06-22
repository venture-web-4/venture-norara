import { loadDb } from './firebase';

// type : 0~3
// order : null or "desc"
async function getScores(gametype = null, order = 'desc') {
  let db = loadDb();
  let scores = [];
  if (gametype == null) {
    let querySnapshot = await db.collection('scores').get();
    querySnapshot.forEach(doc => {
      scores.push(doc.data());
    });
  } else {
    if (order == 'desc') {
      let querySnapshot = await db
        .collection('scores')
        .where('gametype', '==', gametype)
        .orderBy('score', 'desc')
        .limit(10)
        .get();
      querySnapshot.forEach(doc => {
        scores.push(doc.data());
      });
    } else {
      let querySnapshot = await db
        .collection('scores')
        .where('gametype', '==', gametype)
        .orderBy('score', 'asc')
        .limit(10)
        .get();
      querySnapshot.forEach(doc => {
        scores.push(doc.data());
      });
    }
  }
  return scores;
}

async function postScore(gametype, score, username, email) {
  let db = loadDb();
  if (
    typeof gametype != 'number' &&
    typeof username != 'string' &&
    typeof score != 'number'
  ) {
    return false;
  }
  if (gametype < 0 || gametype > 3 || !username || score < 0) {
    return false;
  }
  let docRef = db.collection('scores').doc();
  let doc = {
    gametype: gametype,
    score: score,
    username: username,
    email: email,
  };
  await docRef.set(doc);
  return true;
}

export { getScores, postScore };
