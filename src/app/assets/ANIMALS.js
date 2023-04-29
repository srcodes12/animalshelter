import max from '../assets/img/Max.jpg';
import rascalPuppy from '../assets/img/RascalPuppy.jpg';
import starbBurstCat from '../assets/img/StarburstCat.jpg';
import tabbyCatJoe from '../assets/img/TabbyCatJoe.jpg';

export const ANIMALS = [
    {
        id: 0,
        name: 'Max',
        image: max,
        age: 2,
        featured: false,
        description:
            'Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.'
    },
    {
        id: 1,
        name: 'RascalPuppy ',
        image: rascalPuppy,
        age: 2,
        featured: false,
        description:
            'Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.'
    },
    {
        id: 2,
        name: 'StarburstCat',
        image: starbBurstCat,
        age: 1,
        featured: false,
        description:
            'Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.'
    },
    {
        id: 3,
        name: 'TabbyCatJoe',
        image: tabbyCatJoe,
        age: 3,
        featured: true,
        description:
            "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
    }
];
