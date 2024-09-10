// JavaScript Program to Format Numbers as Currency Strings

const fmrt = new Intl.NumberFormat('en-US',{
    style :'currency',
    currency : 'USD'
});

console.log(fmrt.format(2500));