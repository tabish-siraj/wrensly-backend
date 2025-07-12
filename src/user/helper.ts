import { UserResponseInterface } from "./schema";

export function omitEmptyFields(obj: any) {
    Object.keys(obj).forEach((key) => {
        if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
            delete obj[key];
        }
    });
    return obj;
}

export function toUserResponse(user: any, followerCount: number, followingCount: number): UserResponseInterface {
    return {
        id: user.id,
        username: user.username || "",
        email: user.email,
        firstName: user.Profile?.firstName || "",
        lastName: user.Profile?.lastName || "",
        dateOfBirth: user.Profile?.dateOfBirth?.toString() || "",
        gender: user.Profile?.gender || "",
        bio: user.Profile?.bio || "",
        avatar: user.Profile?.avatar || "",
        city: user.Profile?.city || "",
        state: user.Profile?.state || "",
        country: user.Profile?.country || "",
        phone: user.Profile?.phone || "",
        website: user.Profile?.website || "",
        followersCount: followerCount,
        followingCount: followingCount,
        createdAt: user.createdAt.toString() || "",
        updatedAt: user.updatedAt.toString() || "",
    };
}