import Team from './function';

   class Team {
    constructor() {   
   
    this.hero = [
      {name: 'Лучник', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25},
      {name: 'Мечник', health: 50, level: 1, type: 'Swordsman', attack: 40, defence: 10},
      {name: 'Безсмертный', health: 50, level: 1, type: 'Undead', attack: 10, defence: 40},
      {name: 'Маг', health: 50, level: 1, type: 'Magician', attack: 25, defence: 25}
    ]
  }
  
  [Symbol.iterator](){
    let hero = this.hero;    
    let current = 0;    
    return {next(){        
        if(current <= hero.length){
            let done = false;
                let value = hero[current];
            console.log(value);
            current++;
                return {
                done, value
            }} else{return {done: true}}
        }
    }
}
}  
  
const team = new Team;
let it = team[Symbol.iterator](); 

it.next(); 
it.next(); 
it.next(); 
it.next();
it.next();  







/* class Team {
    constructor() {   
   
    this.hero = [
      {name: 'Лучник', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25, damage: 20},
      {name: 'Мечник', health: 50, level: 1, type: 'Swordsman', attack: 40, defence: 10, damage: 25},
      {name: 'Безсмертный', health: 50, level: 1, type: 'Undead', attack: 10, defence: 40,  damage: 20},
      {name: 'Маг', health: 50, level: 1, type: 'Magician', attack: 25, defence: 25,  damage: 30}
    ]
  }
  
  [Symbol.iterator](){
    const compare = (persA, persB) => {
      let strongA = persA.health + persA.defence;
      let abilitiesA = persA.attack + persA.damage;
      let strongB = persB.health + persB.defence;
      let abilitiesB = persB.attack + persB.damage;
      if(strongA === strongB){return abilitiesB - abilitiesA}
      return strongA - strongB;
    }
    
    let hero = this.hero.sort(compare);    
    let current = 0;    
    return {next(){        
        if(current <= hero.length){
            let done = false;
                let value = hero[current];
            console.log(value);
            current++;
                return {
                done, value
            }} else{return {done: true}}
        }
    }}
  
  
  
  

}

  
  
const team = new Team;
let it = team[Symbol.iterator](); 

it.next(); 
it.next(); 
it.next(); 
it.next();
it.next();  */






/* class Team {
    constructor() {   
   
    this.hero = [
      {name: 'Лучник', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25, damage: 20},
      {name: 'Мечник', health: 50, level: 1, type: 'Swordsman', attack: 40, defence: 10, damage: 25},
      {name: 'Безсмертный', health: 50, level: 1, type: 'Undead', attack: 10, defence: 40,  damage: 20},
      {name: 'Маг', health: 50, level: 1, type: 'Magician', attack: 25, defence: 25,  damage: 30}
    ]
  }


   *gener(){
    const compare = (persA, persB) => {
      let abilitiesA = persA.attack + persA.damage;      
      let abilitiesB = persB.attack + persB.damage;
      return abilitiesB - abilitiesA;
    }    
    let hero = this.hero.sort(compare);    
    for (let i = 0; i<hero.length; i+=1){
      yield hero[i];
    }    
    } 
}
  
  
const team = new Team;
let gen = team.gener();
let pers = gen.next();
console.log(pers); 

pers = gen.next();
console.log(pers);

pers = gen.next();
console.log(pers);

pers = gen.next();
console.log(pers);

 */






