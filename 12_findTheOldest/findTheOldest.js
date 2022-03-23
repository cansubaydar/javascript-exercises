const findTheOldest = function(people) {
    const oldest = people.sort((a,b) => {
        const currentYear = new Date().getFullYear();
        const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;

        return ageA > ageB ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
