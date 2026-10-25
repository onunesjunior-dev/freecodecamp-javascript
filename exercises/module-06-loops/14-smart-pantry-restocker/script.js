// Observação: `rawData` e `pantry` são fixtures de teste fornecidas externamente
// pela suíte de testes do laboratório, não incluídas no caderno de estudo.
function parseShipment(rawData) {
  const result = [];
  const seenSkus = [];
  for (let i = 0; i < rawData.length; i++) {
    const parts = rawData[i].split("|");
    const sku = parts[0];
    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    const zone = parts[4] && parts[4].trim() !== "" ? parts[4].trim() : "general";

    if (!seenSkus.includes(sku)) {
      seenSkus.push(sku);
      result.push({ sku, name, qty, expires, zone });
    }
  }
  return result;
}

function planRestock(pantry, shipment) {
  const actions = [];
  for (let i = 0; i < shipment.length; i++) {
    const item = shipment[i];
    let type = "";
    if (item.qty <= 0) {
      type = "discard";
    } else {
      let existsInPantry = false;
      for (let j = 0; j < pantry.length; j++) {
        if (pantry[j].sku === item.sku) {
          existsInPantry = true;
          break;
        }
      }
      if (existsInPantry) {
        type = "restock";
      } else {
        type = "donate";
      }
    }
    actions.push({ type, item });
  }
  return actions;
}

function groupByZone(actions) {
  const grouped = {};
  for (let i = 0; i < actions.length; i++) {
    const zone = actions[i].item.zone;
    if (!grouped[zone]) {
      grouped[zone] = [];
    }
    grouped[zone].push(actions[i]);
  }
  return grouped;
}

function clonePantry(pantry) {
  const clone = [];
  for (let i = 0; i < pantry.length; i++) {
    clone.push({ ...pantry[i] });
  }
  return clone;
}

const shipment = parseShipment(rawData);
const actions = planRestock(pantry, shipment);
const groupedActions = groupByZone(actions);
console.log(groupedActions);
