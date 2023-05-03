## Stack

`javaScript`, `express`, `mysql`, `prisma`, `aws`

<br>

<br>

<br>

# 서버 폴더구조

```
📦src
 ┣ 📂controllers
 ┃ ┗ 📜index.js
 ┣ 📂middleware
 ┃ ┣ 📜index.js
 ┃ ┣ 📜jwtAuth.js
 ┃ ┗ 📜pagination.js
 ┣ 📂models
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜login.dto.js
 ┃ ┃ ┃ ┗ 📜register.dto.js
 ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜swagger.js
 ┃ ┣ 📂posts
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂comment
 ┃ ┃ ┃ ┃ ┣ 📜comment.dto.js
 ┃ ┃ ┃ ┃ ┣ 📜create-child-comment.dto.js
 ┃ ┃ ┃ ┃ ┣ 📜create-comment.dto.js
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜update-comment.dto.js
 ┃ ┃ ┃ ┣ 📂tag
 ┃ ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┃ ┗ 📜tag.dto.js
 ┃ ┃ ┃ ┣ 📜create-post.dto.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜post.dto.js
 ┃ ┃ ┃ ┣ 📜posts.dto.js
 ┃ ┃ ┃ ┗ 📜update-post.dto.js
 ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜swagger.js
 ┃ ┣ 📂users
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📜create-user.dto.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┣ 📜update-user.dto.js
 ┃ ┃ ┃ ┗ 📜users.dto.js
 ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜swagger.js
 ┃ ┗ 📜index.js
 ┣ 📂swagger
 ┃ ┣ 📜defaultSwagger.js
 ┃ ┗ 📜index.js
 ┣ 📂utils
 ┃ ┣ 📜index.js
 ┃ ┗ 📜paging.js
 ┣ 📜database.js
 ┣ 📜index.js
 ┗ 📜server-register.js
```
