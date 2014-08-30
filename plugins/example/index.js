module.exports = function(name, deps) {
  console.log("Loaded example plugin");
  this.ngModule = 'MissionControlApp.Example';

  return this;
};