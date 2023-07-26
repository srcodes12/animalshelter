import fiestaImg from '../assets/img/fiestaImg.png';
import rescueImg from '../assets/img/rescueImg.png';
import runImg from '../assets/img/runImg.png';
import adoptionImg from '../assets/img/adoptionImg.png';

export const PROMOTIONS = [
    {
        id: 0,
        name: 'Furry Friends Fiesta',
        image: fiestaImg,
        featured: true,
        description:
            'Join us for a 5-day event celebrating our furry friends! Enjoy fun activities, learn about our rescue work, and maybe even meet your new best friend.'
    },
    {
        id: 1,
        name: 'Into The Wild Rescue Operations',
        image: rescueImg,
        featured: false,
        description:
            'Take a 5-day deep dive into our rescue operations. Experience the fieldwork, meet the heroes, and learn how you can help.'
    },
    {
        id: 2,
        name: 'Fundraising Fun Run',
        image: runImg,
        featured: false,
        description: `Join our annual Fun Run! All proceeds go directly to supporting our rescue and rehabilitation efforts.`
    },
    {
        id: 3,
        name: 'Adoption Event and Fair',
        image: adoptionImg,
        featured: false,
        description:
            'Come to our adoption fair at the heart of the city. Get to know our adorable rescues who are looking for their forever homes!'
    }
];