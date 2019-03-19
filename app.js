var one = new Vue({
    el:'#vue-app',
    data: {
        x: 0,
        y: 0,
        name: 'Chidinma',
        nickname: 'Baby Girl',
        age: 24,
        website: 'https://chidinmacodes.com',
        websiteTag: '<a href="https://chidinmacodes.com">ChidinmaCodes</a>',
        middleName: '',
        houseNumber: '',
        a: 0,
        b: 0,
        available: true,
        nearby: true,
        error: false,
        success: false,
        characters: ['Chidinma', 'Kalu', 'Tobi', 'Precious', 'Victoria'],
        ninjas: [
            { name: 'Chidinma', age: 24 },
            { name: 'Tobi', age: 26 },
            { name: 'Victoria', age: 27 }
        ],
        health: 100,
        ended: false,
    },
    methods: {
        punch: function() {
            this.health -= 10;
            if(this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        },
        gameEnd: function() {

        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        greet: function(time) {
            return "Good " + time + " " + this.nickname + "!"
        },
        add: function(inc) {
            this.age += inc
        },
        subtract: function(inc) {
            this.age -= inc
        },
        clickyAlert: function() {
            alert('You called?');
        },
        logName: function() {
            console.log('You entered your name');
        },
        logNumber: function() {
            console.log('You entered your house number');
        },
        toggleNearby: function() {
            this.nearby = !this.nearby;
        },
    },
    computed: {
        addToA: function() {
        console.log('something0');
        return this.a + this.age;
        },
        addToB: function() {
            console.log('something1');
            return this.b + this.age;
        },
        compClasses: function() {
            return {
                nearby: this.nearby,
            };
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue App Two'
    },
    methods: {},
    computed: {
        greet: function() {
            return 'Hello from the other side!';
        },
    }
})