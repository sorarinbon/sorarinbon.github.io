document.addEventListener('DOMContentLoaded', function() {
  const gameContainer = document.getElementById('game-container');
  let score = document.getElementById('score');
  let points = 0;

  gameContainer.addEventListener('click', function() {
    points++; // 得点を増やす
    score.textContent = points; // スコア表示を更新する
  });
});
