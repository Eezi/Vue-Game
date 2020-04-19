new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        playerStrike: Math.round(Math.random() * 11),
        monsterStrike: Math.round(Math.random() * 10),
        gameIsRunning: false
    },
    methods: {

        startGame: function() {
            this.gameIsRunning = true;
        },
        attack: function() {
           
           this.monsterHealth = this.monsterHealth - this.playerStrike;
           this.playerHealth = this.playerHealth - this.monsterStrike;
           if(this.playerHealth < 1) {
               alert('YOU LOSE!');
           } 
           else if(this.monsterHealth < 1) {
            alert('YOU WIN!!');
           }
           
         
        }
    }
});

