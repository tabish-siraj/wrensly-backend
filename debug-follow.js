// Debug script to test follow functionality
const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function debugFollow() {
    try {
        console.log('Testing database connection...');

        // Test basic connection
        const userCount = await prisma.user.count();
        console.log(`Total users in database: ${userCount}`);

        // Test finding user by username
        const user = await prisma.user.findUnique({
            where: {
                username: 'tabish2'
            },
            include: {
                profile: true
            }
        });

        if (user) {
            console.log('Found user:', {
                id: user.id,
                username: user.username,
                email: user.email,
                profile: user.profile
            });

            // Test follow query
            const followers = await prisma.follow.findMany({
                where: {
                    followingId: user.id,
                    deletedAt: null,
                },
                include: {
                    follower: {
                        select: {
                            id: true,
                            username: true,
                            profile: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                    avatar: true,
                                },
                            },
                        },
                    },
                },
            });

            console.log(`Found ${followers.length} followers for ${user.username}`);

            const following = await prisma.follow.findMany({
                where: {
                    followerId: user.id,
                    deletedAt: null,
                },
                include: {
                    following: {
                        select: {
                            id: true,
                            username: true,
                            profile: {
                                select: {
                                    firstName: true,
                                    lastName: true,
                                    avatar: true,
                                },
                            },
                        },
                    },
                },
            });

            console.log(`Found ${following.length} following for ${user.username}`);

        } else {
            console.log('User "tabish2" not found');
        }

    } catch (error) {
        console.error('Debug error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

debugFollow();