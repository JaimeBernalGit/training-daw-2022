'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}
function iterateForEach(array) {
  array.forEach(element => {
      console.log(element)
  });
}
function mapIds() {
  let ids = pilots.map(pilot => pilot.id)
  console.log(ids)
  return ids
}
function rebels() {
  let rebeldes = pilots.filter(pilot => pilot.faction === "Rebels")
  console.log(rebeldes)
  return rebeldes
}
function totalFaction(faction) {
  let result = pilots.filter(pilot => pilot.faction === faction)
  console.log(result.length)
  return result.length
}
function avgYears(faction) {
  let result = pilots.filter(pilot => pilot.faction === faction)
  let reducEdad = result.reduce((accumulator, currentValue) => accumulator.years + currentValue.years)
  let media = reducEdad/result.length
  console.log(media)
  return media
}

// use console.log
iterateSimple(pilots)
iterateForEach(pilots)
try {
  assert.deepStrictEqual(mapIds(), [2,8,40,66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  assert.deepStrictEqual(totalFaction('Rebels'), 2)

  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}