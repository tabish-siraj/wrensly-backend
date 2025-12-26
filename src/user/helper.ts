import { UserResponseInterface } from './schema';

export function omitEmptyFields(obj: any) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
      delete obj[key];
    }
  });
  return obj;
}

export function toUserResponse(user: any): any {
  return {
    id: user.id || '',
    username: user.username || '',
    email: user.email || '',
    is_email_verified: user.isEmailVerified || false,
    first_name: user.profile?.firstName || '',
    last_name: user.profile?.lastName || '',
    date_of_birth: user.profile?.dateOfBirth?.toString() || '',
    gender: user.profile?.gender || '',
    bio: user.profile?.bio || '',
    avatar: user.profile?.avatar || '',
    city: user.profile?.city || '',
    state: user.profile?.state || '',
    country: user.profile?.country || '',
    phone: user.profile?.phone || '',
    website: user.profile?.website || '',
    followers_count: user._count?.followers || 0,
    following_count: user._count?.following || 0,
    created_at: user.createdAt.toString() || '',
    updated_at: user.updatedAt.toString() || '',
  };
}
