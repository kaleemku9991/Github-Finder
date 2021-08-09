class Github{
  constructor(){
    this.client_id='951d2b3534efe16d03b9'
    this.client_secret=' 315648add8ee03ca21bdc6f96bec4d02e4ecde9f'
  }
  async getUser(user){
    const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret${this.client_secret}`);

    const profile=await profileResponse.json();


    return{
      profile
    }

  }
}