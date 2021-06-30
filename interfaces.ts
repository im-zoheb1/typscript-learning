// CREATES A NEW TYPE, DESCRIBING THE PROPERTY NAMES AND VALUE TYPES OF AN OBJECT

/* const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
 */

// //////////////////////////////////
// the declaration above in function is very long so that's why we use interfaces

interface Reportable {
  summary(): string; // returning a string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

// WE CAN INCLUDE ANY TYPE OF VALUE IN INTERFACES (INCLUDING FUNCTIONS)
