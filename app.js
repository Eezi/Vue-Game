new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        playerStrike: [],
        monsterStrike: [],
        gameIsRunning: false,
       
    },
    methods: {

        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.playerStrike = [];
            this.monsterStrike = [];
           
        },
        attack: function() {
           var playerStrike = Math.round(Math.random() * 11);
           this.playerStrike.push(playerStrike);
           var monsterStrike = Math.round(Math.random() * 11) +1;
           this.monsterStrike.push(monsterStrike);
           this.monsterHealth = this.monsterHealth - playerStrike;
           this.playerHealth = this.playerHealth - monsterStrike;
           console.log(this.playerStrike)
           if(this.playerHealth < 1) {
               alert('YOU LOSE!');
               this.gameIsRunning = false;
           } 
           else if(this.monsterHealth < 1) {
            alert('YOU WIN!!');
            this.gameIsRunning = false;
           }
        },
        giveUp: function() {
            this.gameIsRunning = false;
            this.playerStrike = [];
            this.monsterStrike = [];
            
           
        },

        specialAttack: function() {
            var playerStrike = Math.round(Math.random() * 15) + 5;
            this.playerStrike.push(playerStrike);
            var monsterStrike = Math.round(Math.random() * 11) +1;
            this.monsterStrike.push(monsterStrike);
            this.monsterHealth = this.monsterHealth - playerStrike;
            this.playerHealth = this.playerHealth - monsterStrike;
            if(this.playerHealth < 1) {
                alert('YOU LOSE!');
                this.gameIsRunning = false;
            } 
            else if(this.monsterHealth < 1) {
             alert('YOU WIN!!');
             this.gameIsRunning = false;
            }
        },

        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
                var monsterStrike = Math.round(Math.random() * 11) +1;
                this.monsterStrike.push(monsterStrike);
                this.playerHealth = this.playerHealth - monsterStrike;
            } else {
                this.playerHealth = 100;
                var monsterStrike = Math.round(Math.random() * 11) +1;
                this.monsterStrike.push(monsterStrike);
                this.playerHealth = this.playerHealth - monsterStrike;
            }
                
            
            }
        
    }
});

