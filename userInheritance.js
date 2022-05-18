class User{
  constructor(username, email, password){
      this.username = username; // initializing name of variable
      this.email = email;
      this.password = password;
  }

  static countUsers(){ //same no matter what.
    console.log('There are 50 users');
  }

  register(){
    console.log(this.username+' is now registered');
  }
}

let student = new User('student', 'student@gmail.com', '12345');
student.register(); //to use it.
User.countUsers();

class Member extends User{
  constructor(username, email, password, memberPackage){
    super(username, email, password); 
    this.package = memberPackage; //this is assigned as in class User doesnt have it.
  }

  getPackage(){
    console.log(this.username+' is subscribed to the '+this.package+' package');
  }
}

let vipstudent = new Member('vipstudent', 'vipstudent@gmail.com', '123', 'VIP');

//vipstudent.getPackage();
vipstudent.register();