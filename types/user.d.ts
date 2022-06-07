type CategoryType = { id: number; name: sring };

export interface User {
  id: number;
  nickname: string;
  description: string;
  profileImage: string;
  backgroundImage: string;
  categories: CategoryType[];
  postCount: number;
  scrapCount: number;
  followerCount: number;
  followingCount: number;
  isFollowed: boolean;
}

export interface UserEditForm {
  nickname?: string;
  description?: string;
  profileImage?: string;
  backgroundImage?: string;
  categories?: string;
}
