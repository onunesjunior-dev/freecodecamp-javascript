// Observação: `shuffledFragments` é a fixture de teste (array corrompido com
// 'holes'/undefined) fornecida externamente pela suíte de testes do laboratório,
// não incluída no caderno de estudo.
function compactFragments(fragments) {
  const result = [];
  let removedCount = 0;
  for (let i = 0; i < fragments.length; i++) {
    if (fragments[i] !== undefined) {
      result.push(fragments[i]);
    } else {
      removedCount++;
    }
  }
  if (removedCount > 0) {
    console.log(`[COMPACTED] Removed ${removedCount} undefined elements`);
  }
  return result;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(fragments) {
  const result = [...fragments];
  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;
    while (j >= 0 && result[j].id > current.id) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = current;
  }
  return result;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(fragments) {
  const result = [];
  for (let i = 0; i < fragments.length; i++) {
    const current = fragments[i];
    if (result.length === 0 || result[result.length - 1].id !== current.id) {
      result.push(current);
    } else {
      console.log(`[DEDUPED] Duplicate fragment with id ${current.id}`);
    }
  }
  return result;
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(fragments) {
  if (fragments.length === 0) return [];
  const result = [];
  for (let i = 0; i < fragments.length; i++) {
    const current = fragments[i];
    if (i > 0) {
      const prevId = fragments[i - 1].id;
      for (let missingId = prevId + 1; missingId < current.id; missingId++) {
        result.push({ id: missingId, text: "[...]" });
        console.log(`[FILLED] Added missing fragment with id ${missingId}`);
      }
    }
    result.push(current);
  }
  return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(fragments) {
  const texts = [];
  for (let i = 0; i < fragments.length; i++) {
    texts.push(fragments[i].text);
  }
  return texts.join("\n");
}

console.log(assembleStory(filledFragments));
