function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function checkoutDevice(ledger, assetTag, borrower) {
  if (!ledger || !ledger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device ${assetTag} was not found.`
    };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger: ledger,
      message: `Device ${assetTag} is already checked out.`
    };
  }

  const updatedLedger = cloneDeep(ledger);
  updatedLedger[assetTag].status = "CheckedOut";
  updatedLedger[assetTag].borrower = {
    name: borrower.name,
    email: borrower.email
  };

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  if (!ledger || !ledger[assetTag]) {
    return {
      ledger: ledger,
      message: `Device ${assetTag} was not found.`
    };
  }

  const updatedLedger = cloneDeep(ledger);
  updatedLedger[assetTag].status = "CheckedIn";
  updatedLedger[assetTag].borrower = {
    name: "",
    email: ""
  };
  updatedLedger[assetTag].dueDate = "";

  return {
    ledger: updatedLedger,
    message: `Device ${assetTag} successfully checked in.`
  };
}

/**
 * Converte data "M/D/YYYY" ou "MM/DD/YYYY" para inteiro comparável YYYYMMDD
 * Sem utilizar o objeto Date nativo.
 */
function parseDateToNumber(dateStr) {
  if (!dateStr) return Infinity;
  const parts = dateStr.split('/');
  const month = parseInt(parts[0], 10);
  const day = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  return year * 10000 + month * 100 + day;
}

function listOverdueDevices(ledger, today) {
  const todayNum = parseDateToNumber(today);
  const overdueDevices = [];

  for (const key in ledger) {
    if (Object.prototype.hasOwnProperty.call(ledger, key)) {
      const device = ledger[key];
      if (device.status === "CheckedOut" && device.dueDate) {
        const dueNum = parseDateToNumber(device.dueDate);
        if (dueNum < todayNum) {
          overdueDevices.push(device);
        }
      }
    }
  }

  // Ordenação ascendente por dueDate
  overdueDevices.sort((a, b) => parseDateToNumber(a.dueDate) - parseDateToNumber(b.dueDate));

  return overdueDevices;
}
