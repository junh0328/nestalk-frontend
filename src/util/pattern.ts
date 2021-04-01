/* 회원가입 관련 정규식 */
/* eslint-disable no-useless-escape */

// 모든 공백 체크 정규식
export const empJ = /\s/g;
// 아이디 정규식
export const idJ = /^[a-z0-9]{4,12}$/;
// 비밀번호 정규식
export const pwJ = /^[A-Za-z0-9]{4,12}$/;
// 이름 정규식
export const nameJ = /^[가-힣]{2,6}$/;
// 이메일 검사 정규식
export const mailJ = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// 휴대폰 번호 정규식
export const phoneJ = /^(010)[0-9]{7,8}$/;
// 생년월일 6자리 정규식
export const birthdayJ = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
