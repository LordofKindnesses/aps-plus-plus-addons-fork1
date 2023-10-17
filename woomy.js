const { combineStats, makeAuto, makeCeption, makeHybrid } = require('../facilitators.js');const { base, gunCalcNames, statnames, basePolygonDamage, basePolygonHealth } = require('../constants.js');
const g = require('../gunvals.js');
g.lance = {
  reload: 3,
  recoil: 0,
  shudder: 0.1,
  health: 0.125,
  damage: 4.5,
  pen: 1.6,
  speed: 0.4,
  range: 0.05,
  spray: 180
}

module.exports = ({ Class }) => {
  // return

// POLYGONS
Class.woomyAlphaPentagon = {
  PARENT: ["alphaPentagon"],
  SHAPE: -5,
};
Class.alphaHexagon = {
  PARENT: ["food"],
  LABEL: "Alpha Hexagon",
  VALUE: 1e4,
  SHAPE: -6,
  SIZE: 54,
  COLOR: "#56E012",
  BODY: {
      DAMAGE: 2.5 * basePolygonDamage,
      DENSITY: 80,
      HEALTH: 600 * basePolygonHealth,
      RESIST: Math.pow(1.275, 3),
      SHIELD: 85 * basePolygonHealth,
      REGEN: 0.05,
      ACCELERATION: 0.0025
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
Class.alphaHeptagon = {
  PARENT: ["food"],
  LABEL: "Alpha Heptagon",
  VALUE: 15e3,
  SHAPE: -7,
  SIZE: 56,
  COLOR: "#750685",
  BODY: {
      DAMAGE: 3 * basePolygonDamage,
      DENSITY: 80,
      HEALTH: 600 * basePolygonHealth,
      RESIST: Math.pow(1.3, 3),
      SHIELD: 90 * basePolygonHealth,
      REGEN: 0.02,
      ACCELERATION: 0.0025
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
Class.alphaOctagon = {
  PARENT: ["food"],
  LABEL: "Alpha Octagon",
  VALUE: 2e4,
  SHAPE: -8,
  SIZE: 57,
  COLOR: "#F22424",
  BODY: {
      DAMAGE: 3.25 * basePolygonDamage,
      DENSITY: 85,
      HEALTH: 600 * basePolygonHealth,
      RESIST: Math.pow(1.325, 3),
      SHIELD: 95 * basePolygonHealth,
      REGEN: 0.01,
      ACCELERATION: 0.0025
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
Class.alphaNonagon = {
  PARENT: ["food"],
  LABEL: "Alpha Nonagon",
  VALUE: 25e3,
  SHAPE: -9,
  SIZE: 58,
  COLOR: "#65F0EC",
  BODY: {
      DAMAGE: 3.5 * basePolygonDamage,
      DENSITY: 90,
      HEALTH: 600 * basePolygonHealth,
      RESIST: Math.pow(1.35, 3),
      SHIELD: 100 * basePolygonHealth,
      REGEN: 0.01,
      ACCELERATION: 0.0025
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
Class.alphaDecagon = {
  PARENT: ["food"],
  LABEL: "Alpha Decagon",
  VALUE: 3e4,
  SHAPE: -10,
  SIZE: 59,
  COLOR: 6,
  BODY: {
      DAMAGE: 3.75 * basePolygonDamage,
      DENSITY: 95,
      HEALTH: 600 * basePolygonHealth,
      RESIST: Math.pow(1.375, 3),
      SHIELD: 101 * basePolygonHealth,
      REGEN: 0.01,
      ACCELERATION: 0.0025
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
Class.icosagon = {
  PARENT: ["food"],
  LABEL: "Icosagon",
  VALUE: 105e3,
  SHAPE: -20,
  SIZE: 120,
  COLOR: "#6A00FF",
  BODY: {
      DAMAGE: 4.5 * basePolygonDamage,
      DENSITY: 140,
      HEALTH: 670.5 * basePolygonHealth,
      RESIST: Math.pow(1.375, 3),
      SHIELD: 110 * basePolygonHealth,
      REGEN: 0.1,
      ACCELERATION: 0.0025
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};

// BASIC UPGRADES
  Class.autoBasic = makeAuto(Class.basic);
  Class.basebrid = makeHybrid(Class.basic, "Basebrid");

// AUTO-BASIC UPGRADES
  Class.autoTwin = makeAuto(Class.twin);
  Class.autoSniper = makeAuto(Class.sniper);
  Class.autoMachine = makeAuto(Class.machineGun, "Auto-Machine");
  Class.autoFlank = makeAuto(Class.flankGuard, "Auto-Flank");
  Class.chairman = makeAuto(Class.director, "Chairman");
  Class.scratcher = makeAuto(Class.pounder, "Scratcher");
  Class.autoBasebrid = makeAuto(Class.basebrid);
  Class.basiception = makeCeption(Class.basic, "Basiception");

// AUTO-TWIN UPGRADES
  Class.bentAuto = makeAuto(Class.tripleShot, "Bent Auto");

// AUTO-DOUBLE UPGRADES
  Class.autoTriple = makeAuto(Class.tripleTwin, "Auto-Triple");

// AUTO-FLANK UPGRADES
  Class.autoHexa = makeAuto(Class.hexaTank, "Auto-Hexa");
  Class.autoAuto3 = makeAuto(Class.auto3);

// AUTO-TRAPPER UPGRADES
  // yes ik the auto trapper defs don't exist yet i'm just sorting this here for now
  Class.autoTriTrapper = makeAuto(Class.triTrapper);
  Class.autoTrapGuard = makeAuto(Class.trapGuard);

// BASEBRID UPGRADES
  Class.twinbrid = makeHybrid(Class.twin, "Twinbrid");
  Class.snipebrid = makeHybrid(Class.sniper, "Snipebrid");
  Class.poundbrid = makeHybrid(Class.pounder, "Poundbrid");
  Class.trapbrid = makeHybrid(Class.trapper, "Trapbrid");

  Class.basic.UPGRADES_TIER_1.push("autoBasic", "basebrid");
  
      Class.autoBasic.UPGRADES_TIER_2 = ["autoTwin", "autoSniper", "autoMachine", "autoFlank", "chairman", "scratcher", "autoBasebrid", "basiception"];
          Class.autoTwin.UPGRADES_TIER_3 = ["bentAuto", "autoDouble", "autoCruiser", "autoGunner", "autoHexa"];
              Class.autoDouble.UPGRADES_TIER_4 = ["autoTriple"];
          Class.autoSniper.UPGRADES_TIER_3 = ["autoAssassin"];
          Class.autoMachine.UPGRADES_TIER_3 = ["autoGunner"];
          Class.autoFlank.UPGRADES_TIER_3 = ["autoTriAngle", "autoHexa", "autoTriTrapper", "autoAuto3", "autoTrapGuard"];
              Class.autoFlank.UPGRADES_TIER_4 = ["autoTriple"];
          Class.chairman.UPGRADES_TIER_3 = ["autoOverseer", "autoCruiser", "autoSpawner"];
          Class.scratcher.UPGRADES_TIER_3 = ["autoBuilder"];
  
      Class.basebrid.UPGRADES_TIER_2 = ["twinbrid", "snipebrid", "poundbrid", "trapbrid", "autoBasebrid"];
};
