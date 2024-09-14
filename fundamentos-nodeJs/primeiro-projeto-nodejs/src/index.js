const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    
    case random <= 0.33:
      result = "RETA";
      break;
    case random > 0.33 && random <= 0.66:
      result = "CURVA";
      break;

    default:
      result = "CONFRONTO";
      break;
  }

  return result;
}

async function logRollResult(
  characterName,
  block,
  diceResult,
  characterStatus
) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${characterStatus} = ${
      diceResult + characterStatus
    }`
  );
  let resul = characterStatus + diceResult;
  return resul;
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round < 6; round++) {
    console.log("============================================");
    console.log(`🏁 Rodada ${round}`);

    let block = await getRandomBlock();

    console.log(`Block: ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block == "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      let player1 = await logRollResult(
        character1.NOME,
        "VELOCIDADE",
        diceResult1,
        character1.VELOCIDADE
      );
      let player2 = await logRollResult(
        character2.NOME,
        "VELOCIDADE",
        diceResult2,
        character2.VELOCIDADE
      );
      if (player1 > player2) {
        character1.PONTOS++;
      } else if (player2 > player1) {
        character2.PONTOS++;
      }
    }

    if (block == "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      let player1 = await logRollResult(
        character1.NOME,
        "MOBILIDADE",
        diceResult1,
        character1.MANOBRABILIDADE
      );
      let player2 = await logRollResult(
        character2.NOME,
        "MOBILIDADE",
        diceResult2,
        character2.MANOBRABILIDADE
      );
      if (player1 > player2) {
        character1.PONTOS++;
      } else if (player2 > player1) {
        character2.PONTOS++;
      }
    }

    if (block == "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME} ⚔️`);

      await logRollResult(
        character1.NOME,
        "PODER",
        diceResult1,
        character1.PODER
      );
      await logRollResult(
        character2.NOME,
        "PODER",
        diceResult2,
        character2.MANOBRABILIDADE
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} ganhou o confronto! ${character2.NOME} perdeu 1 ponto.`
        );
        character2.PODER--;
      }
      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} ganhou o confronto! ${character1.NOME} perdeu 1 ponto.`
        );
        character1.PODER--;
      }

      console.log(
        powerResult1 == powerResult1
          ? "confronto empatado! Nenhum ponto foi perdido."
          : ""
      );
    }
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }
  }
}

async function declareWinner(character1, character2) {
  console.log("============================================");
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`${character1.NOME} vencue a corrida! Parabéns! 🏆`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`${character2.NOME} vencue a corrida! Parabéns! 🏆`);
  } else {
    console.log(`A corrida terminou em empate!`);
  }
}

(async function main() {
  console.log(
    `🏁 🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
