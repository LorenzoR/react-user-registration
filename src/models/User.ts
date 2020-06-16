class User {
  public email: string;
  
  public name: string;
  
  public password: string;

  public constructor(userParams: { email: string; name: string; password: string }) {
    this.name = userParams.name;
    this.email = userParams.email;
    this.password = userParams.password;
  }
}

export default User;