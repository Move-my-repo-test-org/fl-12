const maxProbability = 100;
const minHealth = 0;
function Fighter({name, damage, strength, agility, hp}) {
    this.getName = function() {
        return name;
    };
    this.getDamage = function() {
        return damage;
    };
    this.getStrength = function() {
        return strength;
    };
    this.getAgility = function() {
        return agility;
    };
    this._hp = hp;
    this.getHealth = function() {
        return this._hp;
    };
    this.attack = function(defender) {
        let probability = Math.floor(Math.random() * maxProbability);
        if (probability <= maxProbability - (defender.getStrength() + defender.getAgility())) {
            defender.dealDamage(this.getDamage());
            console.log(this.getName() + ' makes ' + this.getDamage() + ' damage to ' + defender.getName());
        } else {
            console.log(this.getName() + ' attack missed');
        }
    };
    this.wins = 0;
    this.losses = 0;
    this.logCombatHistory = function() {
        console.log('Name: ' + this.getName() + ', Wins: ' + this.wins + ', Losses: ' + this.losses);
    };
    this.heal = function(points) {
        this._hp + points > hp ? this._hp = hp : this._hp += points;
        return this._hp;
    };
    this.dealDamage = function(points) {
        this._hp - points < minHealth ? this._hp = 0 : this._hp -= points;
        return this._hp;
    };
    this.addWin = function() {
        return ++this.wins;
    };
    this.addLoss = function() {
        return ++this.losses;
    };
}

function battle(...fighters) {
    
    if (fighters[0].getHealth() && fighters[1].getHealth() !== 0) {
        let i=0;
        for(i=0; fighters[i].getHealth()>0;) {
            fighters[i].attack(fighters[1-i]);
            i=1-i;
        }
        fighters[1-i].addWin();
        fighters[i].addLoss();
        console.log(fighters[1-i].getName() + ' has won!');    
        
    } else if (fighters[0].getHealth()===0) {
        console.log(fighters[0].getName() + ` is dead and can't fight.`);
    } else {
        console.log(fighters[1].getName() + ` is dead and can't fight.`);
    }   
}

const fighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});

const fighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90});

battle(fighter1, fighter2);
