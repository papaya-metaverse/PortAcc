import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const CLAIM_TYPES = {
  sid: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid',
};