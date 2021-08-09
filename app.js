//git hub class init
const gitHub=new Github;
const ui=new UI;

const searchUser=document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e)=>{
  const userText=e.target.value;
//get input text
  if(userText!==''){
    gitHub.getUser(userText)
    .then(data =>{
      if(data.profile.message==='Not Found'){
        //show alert
      }else{
         //show profile
         ui.showProfile(data.profile);
      }
    })
  }
  else{
     ui.clearProfile();
  }

})