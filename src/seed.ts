import {PrismaClient} from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const newsData = [
    {
        title: 'Google revoluciona la experiencia de búsqueda',
        description:
            'Google anuncia una gran renovación de su motor de búsqueda, con el objetivo de mejorar la experiencia del usuario.',
        date: new Date('2024-05-15'),
    },
    {
        title: 'Anuncios de Amazon en CES 2024',
        description:
            'Amazon revela nuevas asociaciones y tecnologías en CES 2024, incluyendo IA en vehículos con BMW.',
        date: new Date('2024-05-15'),
    },
    {
        title: 'Lanzamiento de herramienta de música generada por IA',
        description:
            'Una nueva herramienta de IA que crea música para videos sin necesidad de indicaciones textuales ha sido lanzada por una startup.',
        date: new Date('2024-05-15'),
    },
    {
        title: 'Actualizaciones del Google I/O 2024',
        description:
            'Google presenta el Gemini 1.5 Pro y otros avances en Google I/O 2024.',
        date: new Date('2024-05-15'),
    },
    {
        title: 'Pods autoequilibrados en Alemania',
        description:
            'Alemania explora el uso de pods de transporte autoequilibrados en vías ferroviarias abandonadas.',
        date: new Date('2024-05-15'),
    },
];

const userData = [
    {
        username: 'testuser1',
        password: bcrypt.hashSync('password1', 10),
    },
    {
        username: 'testuser2',
        password: bcrypt.hashSync('password2', 10),
    },
];

const load = async () => {
    try {
        for (const news of newsData) {
            await prisma.news.create({data: news});
        }

        for (const user of userData) {
            await prisma.user.create({data: user});
        }

        console.log('Data loaded successfully');
    } catch (error) {
        console.error('Error loading data', error);
    } finally {
        await prisma.$disconnect();
    }
};

load();
