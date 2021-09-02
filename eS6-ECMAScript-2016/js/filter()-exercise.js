// Exercise 1----------------------------------------------------------
// const channels = [
//     { name: 'HBO', premium: true },
//     { name: 'LIFE', premium: false },
//     { name: 'Max', premium: true },
//     { name: 'Cooking channel', premium: false },
//     { name: 'WOBI', premium: false }
// ];


// const premiumChannel = channels.filter(function (channel) {
//     return channel.premium === true;
// });

// console.log(premiumChannel);

// Exercise 2----------------------------------------------------------
const channels = [
    { name: 'HBO', premium: true },
    { name: 'LIFE', premium: false },
    { name: 'Max', premium: true },
    { name: 'Cooking channel', premium: false },
    { name: 'WOBI', premium: false }
];

const user = {
    name: 'Francis',
    premium: true,
    premiumChannels: function () {
        const $this = this;
        // GET THE PERMIUM CHANNELS IS "PREMIUM" IS true
        return channels.filter(function (channel) {
            return channel.premium && $this.premium;
        });

    },
    channels: function () {
        // GET THE NON_PREMIUM CHANNELS
        return channels.filter(function (channel) {
            return channel.premium === false;
        });

    }
}

// console.log(user.channels());
console.log(user.premiumChannels());
// bring HBO and MAX