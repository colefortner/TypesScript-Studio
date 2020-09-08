"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        // returns sum of all items using each item's massKg property
        var totesMass = 0;
        for (var i = 0; i < items.length; i++) {
            totesMass += items[i].massKg;
        }
        return totesMass;
    };
    Rocket.prototype.currentMassKg = function () {
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        // Uses this.canAdd() to see if another item can be added 
        // If true, adds cargo to this.cargoItems and returns true
        // If false, returns false 
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // Uses this.canAdd() to see if another astronaut can be added
        // if true, adds astronaut to this.astronauts and returns true 
        // if false returns false 
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
