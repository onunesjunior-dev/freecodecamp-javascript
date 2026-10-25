function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};

  // 1. containerId: número inteiro positivo (> 0)
  if (!('containerId' in manifest) || manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== 'number' ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // 2. destination: string não vazia após trim()
  if (!('destination' in manifest) || manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== 'string' ||
    manifest.destination.trim().length === 0
  ) {
    errors.destination = "Invalid";
  }

  // 3. weight: número positivo (> 0 e não-NaN)
  if (!('weight' in manifest) || manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== 'number' ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // 4. unit: "kg" ou "lb"
  if (!('unit' in manifest) || manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== 'kg' && manifest.unit !== 'lb') {
    errors.unit = "Invalid";
  }

  // 5. hazmat: booleano estrito (true / false)
  if (!('hazmat' in manifest) || manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== 'boolean') {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}
