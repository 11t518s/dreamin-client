import BaseAPI from './base.api';

import type { UserRegisterInfoType } from 'recoil/auth';
import { User, UserEditForm } from 'types/user';
import type { CustomAxiosRequestConfig } from './type';
import { PostOauthBody, PostOauthResponse } from './type/users.types';
import { TeamTypes } from 'types/team';
import { PostType } from 'types/post';

class UsersAPI extends BaseAPI {
  //https://apibora.shop/api/users/
  getTeamList(config: CustomAxiosRequestConfig) {
    return this.get<TeamTypes[]>(`/teams`, config);
  }
  checkUserName(params: unknown) {
    return this.get('/check_nickname', { params });
  }

  checkUsers(params: unknown) {
    return this.get<User>(`/${params}`);
  }

  getUserInfo(params: User['id']) {
    return this.get<User>(`${params}`);
  }

  getUserPosts(params: unknown) {
    return this.get<PostType[]>(`${params}/posts`);
  }

  registerUser(body: UserRegisterInfoType) {
    return this.post(`/id`, body);
  }

  editUser(params: unknown, body: UserEditForm, config: CustomAxiosRequestConfig) {
    return this.put(`/${params}`, body, config);
  }

  followingUser(params: unknown, config: CustomAxiosRequestConfig) {
    return this.post(`/${params}/follow`, {}, config);
  }

  scrapUserPosts(params: unknown, config: CustomAxiosRequestConfig) {
    return this.post(`/${params}/scraps`, {}, config);
  }

  kakaoOauth(body: PostOauthBody, config?: CustomAxiosRequestConfig) {
    return this.post<PostOauthBody, PostOauthResponse>('kakao', body, { ...config });
  }

  googleOauth(body: PostOauthBody, config?: CustomAxiosRequestConfig) {
    return this.post<PostOauthBody, PostOauthResponse>('google', body, { ...config });
  }
}

export default new UsersAPI('users');
