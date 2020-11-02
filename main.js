//to do tom
//send DM to users
//read messages,photos,add to csv file
// current minutes


const { workers } = require('cluster');
const Discord = require('discord.js');
const { EOF } = require('dns');
const client = new Discord.Client();
const prefix = '-';
var os = require('os');
var fs = require('fs');
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);

let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

let hours = date_ob.getHours();
let year = date_ob.getFullYear();


var Workers = new Array();
var TempNames = new Array();
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

const readline = require('readline');
const { time } = require('console');
const path = './'+'STATUS REPORT - '+year + "-" + month + "-" + date+'.csv';
const path2 = './'+'ERROR REPORT - '+year + "-" + month + "-" + date+'.csv';

//0. Name of artist:
//1. Name of object
//2. Time (since started the work)
//3.poly count
//4. Check for double


try
 {
  if (fs.existsSync(path)) {
    //file exists
    console.log('File exists for day.');    
  }
  else
  {
    fs.writeFile('STATUS REPORT - '+year + "-" + month + "-" + date+'.csv', 'Name of Artist,Name of object,Time (since started the work),Poly Count,Check for Double,Image Received', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      }); 
  }
} 
catch(err) {
  console.error(err)
}


client.on("guildCreate", guild => {
    guild.owner.send('Hello everybody, I am happy i am now apart of the server. I am in my beta phase so dont bully me :-( . To find my commands type in -help for a list of commands. My developer is moulding and shaping me at the moment. I will be there motivating your guys to finish your task');
 });

client.once('ready', () => {
console.log('Developer ADGSTUDIOS 2020')
console.log('GayaSimulations Bot is online!')

});

console.log('Looking for Messages');

client.on('guildMemberAdd', member => {
    member.guild.defaultChannel.send(`Welcome to the server, ${member}!`);
    console.log(`${member.user.username} has joined`);
});

 
function Strike1()
{
  for(var v = 0; v < max4;v++)
  {

  
    file.on('line', (name) => { 
      var n = name.indexOf(",");
      if (name.slice(0,n) === Workers[v])
      {
       
      }
      else
      {
        message.channel.send('Warning for '+Workers[v-1]); 
        message.channel.send('10 Minutes left until disciplinary action...'); 
      }
     
     
   }); 
  

 setInterval(Strike2,600);
}

}
function Strike2()
{

  for(var v = 0; v < max4;v++)
  {

  
    file.on('line', (name) => { 
      var n = name.indexOf(",");
      if (name.slice(0,n) === Workers[v])
      {
       
      }
      else
      {
          fs.appendFile('ERROR REPORT - '+year + "-" + month + "-" + date+'.csv',os.EOL+Workers[v-1]+','+ hours + ":" + minutes + ":" + seconds, function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
      }
      console.log('disciplinary action will be taken place for Worker : '+Workers[v-1]);
      message.channel.send('Disciplinary action will be taken place for Worker : '+Workers[v-1]);
   }); 
     
   
  }  

}
function SendWarning() {
  var max4 = Object.keys(Workers).length;  
  var isFound = false;
  const file = readline.createInterface({ 
    input: fs.createReadStream(path), 
    output: process.stdout, 
    terminal: false    
}); 
message.channel.send('Time is up.');
message.channel.send('Timer resetted to 2 hours.');
message.channel.send('Start making new objects now.');
message.channel.send('Hi everybody send @Status.');
for(var v = 0; v < max4;v++)
  {

  
    file.on('line', (name) => 
    { 
      var n = name.indexOf(",");
      if (name.slice(0,n) === Workers[v])
      {
       
      }
      else
      {
        message.channel.send('Warning for '+Workers[v-1]+' for outstanding submition.'); 
         
      }
     
     
   }); 
setInterval(Strike1,1200);
try 
{
  if (fs.existsSync(path2))
  {
    //file exists
    console.log('File exists for day.');    
  }
  else
  {
    fs.writeFile('ERROR REPORT - '+year + "-" + month + "-" + date+'.csv', 'Name of Artist,Time Warning Issued', function (err)
     {
        if (err) throw err;
        console.log('File is created successfully.');
      }); 
  }
} 
catch(err) {
  console.error(err);
}

}
}



client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLocaleLowerCase();

var isCorrect = false;


if(command === 'start')
{
  message.channel.send('Hi all @Status');  
  message.channel.send(`Artists on duty today: `+Workers);
  message.channel.send(`2 Hours till Deadline : `+Workers);
  setInterval(SendWarning, 7200000);
  isCorrect = true;
}


if(command === 'help')
{
    message.channel.send('Commands '+ os.EOL +'-dev : developer name' + os.EOL + '-status : Used for submiting Data; e.g of usage -status Name of Object (Time Since Started Work) Number of Poly Count Check for double' + os.EOL+ '-workers : Users with deadlines'+os.EOL+ '-add : Add Users to JobCard (e.g -add ADGSENPAI#2314)'+os.EOL+'-show : Shows all artists for today');
    isCorrect = true;
}

var res = command.slice(0,3);

if(command === 'add'){
    var name = `${args}`;
    const Role = message.guild.roles.cache.find(role => role.name == "Status");
        const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
        TempNames = `${Members}`.split(",");

        var max = TempNames.length; 
        var isFound = false;
        var max4 = Workers.length; 


        
      
        
        for(var i = 0; i < max;i++)
        {
            if (name === TempNames[i])
            {
            var WorkerNotFound = true;
              for(var h = 0; h < max4;h++)
              {
                if (name === Workers[h])
                {               
                  WorkerNotFound = false;
                }
              }

              if (WorkerNotFound === true)
              {
                console.log(`Added `+name+` to JobCard`) 
                Workers.push(name);
                var max2 = Workers.keys(TempNames).length;  
                console.log(Workers);
                 message.channel.send(`Added `+name+` to JobCard`);
              }
              if (WorkerNotFound === false)
              {            
                 message.channel.send(`User is already in JobCard`);
              }
           
           



           
             var isFound = true;
            }
          
         
        }    
        
      

        if (isFound === false)
        {
         message.channel.send(`User: `+name+` does not fall under this category`);
        }

isCorrect = true;
}


if(command === 'workers'){
     
   
        const Role = message.guild.roles.cache.find(role => role.name == "Status");
        const Members = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == Role)).map(member => member.user.tag);
        message.channel.send(`Users with ${Role.name}: ${Members}`);
    isCorrect = true;
}

if(command === 'show')
{
     
   
message.channel.send(`Artists on duty today: `+Workers);
isCorrect = true;
}

if(command === 'status')
{
     
    
    //'Name of Artist,Name of object,Time (since started the work),Poly Count,Check for Double,Image Received'
   
    var Artist = message.author.username;
    var Object = args[0];
    var Time = args[1];
    var PolyCount = args[2];
    var CheckDouble = args[3];
    var ImageRecieved = '--';
 console.log(Object);

console.log(Time);
console.log(PolyCount);
console.log(CheckDouble);
 
 
 var isValid = false;
    if (Object === undefined || Time === undefined|| PolyCount === undefined || CheckDouble === undefined)
    {  
     
    }
    else 
    {
      isValid = true;
    }
    
   
  if (isValid === false)
  {
    message.channel.send('invalid syntax usage of command is e.g -status Name of Object (Time Since Started Work) Number of Poly Count Check for double');
  }
  else
  {
    fs.appendFile('STATUS REPORT - '+year + "-" + month + "-" + date+'.csv',os.EOL+message.author.tag+','+Object+','+Time+','+PolyCount+','+CheckDouble+','+ImageRecieved, function (err) {
      if (err) throw err;
      console.log('Saved!');
      message.channel.send('Status added for '+message.author.tag+ ' with values');
      message.channel.send('Object: '+Object);
      message.channel.send('Time since started work: '+Time);
      message.channel.send('PolyCount: '+PolyCount);
      message.channel.send('CheckDouble: '+CheckDouble);
      message.channel.send('Waiting for your object image...: ');
    });
  }
    
    isCorrect = true;
}

if(command === 'hi' || command === 'hello'){
    message.channel.send('Hello @'+message.author.username+' :-)');
    isCorrect = true;
}



if(command === 'dev'){
    message.channel.send('Developer is Ashlin Darius Govindasamy - ADGSTUDIOS 2020 :-)');
    isCorrect = true;
}

if(command === 'message'){

  isCorrect = true;
}


if(isCorrect === false)
{
    message.channel.send('Invalid Command maybe try -help for a list of more commands :-)');
}

});



client.on("message", message => 
{
    if (message. attachments. size > 0) 
    {
      var Attachment = (message.attachments).array();
      var count = Attachment.length;
 
        message.channel.send('Recieved Object from '+message.author.tag); 
        message.channel.send('Recording in Spreadsheet...'); 



        fs.appendFile('STATUS REPORT - '+year + "-" + month + "-" + date+'.csv',os.EOL+message.author.tag+',--,--,--,--,'+Attachment[count-1].url, function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
    }
});

client.login('NzYwODA1NjIxMzU5NzA2MTIy.X3RZcw.4-whc2qLg-cHowkgnIh0BwdO2Y8');