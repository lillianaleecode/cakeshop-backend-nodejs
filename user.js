class UserName {
    async register(firstName, middleNames, lastName) {
      const { fName, mNames, lName } = this.separateNames(
        firstName,
        middleNames,
        lastName
      );
      
      return 1; //id 1 example
    }
  

    separateNames(firstName, middleNameStr, lastName) {
      let [separatedFirstName, ...mNames] = firstName.trim().split(' ');
      if (middleNameStr) {
        mNames = mNames.concat(middleNameStr.split(' '));
      }
  
      // remove nulls
      const separatedMiddleNames = mNames.filter((n) => n);
      
      const separatedMiddleName = separatedMiddleNames.length
        ? separatedMiddleNames.join(' ')
        : null;
      const separatedLastName = lastName.trim();
  
      return {
        fName: separatedFirstName,
        mNames: separatedMiddleName,
        lName: separatedLastName,
      };
    }
  }
  
  module.exports = new UserName();