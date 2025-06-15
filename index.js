import {HDate, DailyLearning} from '@hebcal/core';
import '@hebcal/learning';

const dt = new Date();
const hd = new HDate(dt);
const ev = DailyLearning.lookup('dafYomi', hd);
console.log(dt.toLocaleDateString(), hd.toString(), ev.render('en'));