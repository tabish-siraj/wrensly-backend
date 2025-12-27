// Simple debug test
const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function testUserLookup() {
    try {
        console.log('Testing user lookup...');

        // Find all users with similar usernames
        const users = await prisma.user.findMany({
            where: {
                username: {
                    contains: 'tabish',
                    mode: 'insensitive'
                }
            },
            select: {
                id: true,
                username: true,
                email: true,
                deletedAt: true
            }
        });

        console.log('Found users:', users);

        // Test exact lookup
        const exactUser = await prisma.user.findUnique({
            where: {
                username: 'tabish2'
            }
        });

        console.log('Exact lookup for "tabish2":', exactUser ? 'Found' : 'Not found');

        // Test lowercase lookup
        const lowerUser = await prisma.user.findUnique({
            where: {
                username: 'tabish2'.toLowerCase()
            }
        });

        console.log('Lowercase lookup for "tabish2":', lowerUser ? 'Found' : 'Not found');

    } catch (error) {
        console.error('Test error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

testUserLookup();