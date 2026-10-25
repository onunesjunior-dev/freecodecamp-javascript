function runSequence(config, cycles) {
  if (!config.phases || config.phases.length === 0) {
    console.log("No phases found");
    return;
  }
  if (config.fault) {
    console.log("Faulted phase!");
    return;
  }
  for (let c = 0; c < cycles; c++) {
    for (const phase of config.phases) {
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const timeline = [];
  if (!config.phases || config.phases.length === 0) {
    return timeline;
  }
  let accumulated = 0;
  for (let c = 0; c < cycles; c++) {
    for (const phase of config.phases) {
      accumulated += phase.duration;
      timeline.push(accumulated);
    }
  }
  return timeline;
}
