# ✨ lisohh's blog

- [마크다운 사용법](https://gist.github.com/ihoneymon/652be052a0727ad59601)

## Quick Start Guide

0. 로컬에서 실행하기
1. 개인 정보 업데이트하기 - `siteMetadata.js` (사이트 관련 정보)
2. 개인 정보 업데이트하기 - `authors/default.md` (작성자 정보)
3. 프로젝트 내용 수정하기 - `projectsData.js` 
4. 블로그 글 작성하기
5. Vercel에서 배포하기

---
## 로컬에서 실행하기

```bash
# Repository 복제하기
$ git clone https://github.com/GoRyangJu/blog.git

# Repository로 이동하기
$ cd blog

# Dependencies 설치하기
$ npm install

# 실행하기
$ npm run dev
```

이제 로컬에서 블로그가 실행되는 것을 보실 수 있는 데요. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어보시면 확인하실 수 있습니다.

---
## `siteMetadata.js` 업데이트 하기 - data 폴더에 존재

```js
/* 예시) */

const siteMetadata = {
  title: 'GO Lee Blog',
  author: 'GO Lee',
  headerTitle: 'GO.',
  description: '지식과 생각을 정리합니다.',
  language: 'ko-KR',
  siteUrl: 'https://www.golee.tech',
  siteRepo: 'https://github.com/goleedev/blogo',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/social-banner.png',
  email: 'golee.dev@gmail.com',
  github: 'https://github.com/goleedev',
  linkedin: 'https://www.linkedin.com/in/goleedev',
  locale: 'ko-KR',
  analytics: {
    googleAnalyticsId: 'G-3FV4PPZMLG',
  },
  comment: {
    provider: 'utterances',
    utterancesConfig: {
      repo: 'goleedev/blog-comment',
      issueTerm: 'title',
      label: 'Comment 💬',
      theme: 'github-light',
      darkTheme: 'github-dark',
    },
  },
}
```

상기 예시처럼 본인의 정보를 `siteMetadata.js`에 추가해주시면 됩니다. 

`comment`는 따로 public repository를 생성하여 추가해주시면 됩니다 :)

---
## `authors/default.md` 업데이트하기 - data/authors 폴더에 존재

```md
/* 예시) */

---
name: GO Lee
avatar: /static/images/avatar.png
occupation: Jr.Frontend Developer
company: UoL
email: golee.dev@gmail.com
linkedin: https://www.linkedin.com/goleedev
github: https://github.com/goleedev
---

📝 정돈된 다큐멘테이션을 지향하고 🥰 새로운 기술과 트렌드를 익히는 것을 좋아하는 🧑🏻‍💻 프론트엔드 개발자입니다.

팀 내에서는 🏃🏻‍♂️ 능동적으로 프로젝트를 수행하고 다양한 기술과 협업 능력을 쌓아가는 것을 🛣️ 지향점으로 삼고 있으며, 사용자에게는 가장 합리적인 디자인과 서비스를 🤲 제공하는 개발자가 되는 것을 목표로 노력하고 있습니다.

```
---
## `projectsData.js` 수정하기

이 부분은 추후에 프로젝트를 제작한 후에 추가해주시면 됩니다.

---
## 블로그 글 작성하기

```mdx
// 예제

---
title: '🎉 WECLOME! 블로그를 만드신 걸 홥영합니다!'
thumbSrc: '/static/images/welcome.webp'
date: '2022-02-21'
tags: ['FE']
draft: false
summary: '블로그 작성법을 설명합니다.'
images: ['/static/images/welcome.webp']
---

# 📌 목차

![Welcome](/static/images/welcome.webp)

- **💁🏻 블로그 작성법**

---

# 💁🏻 블로그 작성법

블로그 작성법이 들어갑니다.
블로그 내용은 ![마크다운 사용법](https://gist.github.com/ihoneymon/652be052a0727ad59601)을 참조해서 작성해주세요.

```

---
## Vercel에서 배포하기

[Vercel](https://vercel.com/login)에 Github 아이디로 가입하고, repository를 선택하고 배포해줍니다.

---
## Licence

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/LICENSE)
