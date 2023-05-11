function bonusScore(initialScore) {
  let initialScoreNumber = Number(initialScore);
  let bonusScore = 0.0;

  if (initialScoreNumber <= 100) {
    bonusScore += 5;
  } else if (initialScoreNumber > 100 && initialScoreNumber < 1000) {
    bonusScore += initialScoreNumber * 0.2;
  } else if (initialScoreNumber > 1000) {
    bonusScore += initialScoreNumber * 0.1;
  }

  if (initialScoreNumber % 2 === 0) {
    bonusScore += 1;
  }

  if (initialScoreNumber % 10 === 5) {
    bonusScore += 2;
  }

  console.log(bonusScore);
  console.log(initialScoreNumber + bonusScore);
}

bonusScore("15875");
