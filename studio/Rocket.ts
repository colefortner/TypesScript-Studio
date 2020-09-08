import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [];
    astronauts: Astronaut [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass(items: Payload[]): number {
        // returns sum of all items using each item's massKg property
        let totesMass: number = 0;
        for(let i = 0; i < items.length; i++){
            totesMass += items[i].massKg;
        }
        return totesMass;
    }

    currentMassKg(): number{
        // Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean{
        // Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        if((this.currentMassKg() + item.massKg) <= this.totalCapacityKg){
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean{
        // Uses this.canAdd() to see if another item can be added 
        // If true, adds cargo to this.cargoItems and returns true
        // If false, returns false 
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean{
        // Uses this.canAdd() to see if another astronaut can be added
        // if true, adds astronaut to this.astronauts and returns true 
        // if false returns false 
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}