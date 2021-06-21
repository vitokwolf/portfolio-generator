const profileDataArr = process.argv.slice(2, process.argv.length);
console.log(profileDataArr);

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};
printProfileData(profileDataArr);