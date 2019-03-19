new Vue({
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
        available: false,
        nearby: false,
    },
    methods: {
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
    }
});