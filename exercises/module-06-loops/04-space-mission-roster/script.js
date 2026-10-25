// Space Mission Roster - Solução Consolidada (32 Passos)
const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID found");
      return;
    }
  }
  crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Buzz", role: "Pilot", isEVAEligible: false, priority: 2 },
  { id: 3, name: "Sally", role: "Mission Specialist", isEVAEligible: true, priority: 5 },
  { id: 4, name: "Mae", role: "Mission Specialist", isEVAEligible: true, priority: 4 },
  { id: 5, name: "Chris", role: "Flight Engineer", isEVAEligible: false, priority: 1 },
  { id: 6, name: "Peggy", role: "Payload Specialist", isEVAEligible: true, priority: 3 },
  { id: 7, name: "Yuri", role: "Cosmonaut", isEVAEligible: true, priority: 5 },
  { id: 8, name: "Valentina", role: "Cosmonaut", isEVAEligible: false, priority: 2 },
  { id: 9, name: "Neil", role: "Commander", isEVAEligible: true, priority: 4 },
  { id: 10, name: "Sunita", role: "Flight Engineer", isEVAEligible: true, priority: 3 }
];

for (const astronaut of remainingCrew) {
  addCrewMember(squad, astronaut);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
  if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
    console.log("Index out of bounds");
    return;
  }
  const updatedCrew = crew.slice();
  const [removed] = updatedCrew.splice(fromIndex, 1);
  updatedCrew.splice(toIndex, 0, removed);
  return updatedCrew;
}

const updatedSquad = swapCrewMembers(squad, 2, 5);

function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

function getEVAReadyCrew(crew) {
  const eligible = [];
  for (const member of crew) {
    if (member.isEVAEligible) {
      eligible.push(member);
    }
  }
  sortByPriorityDescending(eligible);
  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);

function chunkCrew(crew, size) {
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }
  const chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }
  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);

function printCrewSummary(crew) {
  const sorted = crew.slice();
  sortByPriorityDescending(sorted);
  for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i].name);
  }
}

printCrewSummary(updatedSquad);
