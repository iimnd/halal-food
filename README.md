
## 🚀 About Me
I'm a Tech Enthusiast


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![Instagram](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/iimnurdiansyah)


# CekHalal.Online

adalah project sederhana untuk membantu memberi informasi mengenai restoran-restoran halal di Indonesia. Latar belakang dibuatnya web ini adalah karena :

- Masih banyak restoran besar, banyak pelanggan muslim, namun belum bersertifikasi halal
- Mencari informasi sertifikasi di website halal MUI ternyata query sering tidak match dan kurang informatif
- Masih banyak masyarakat yang belum mengetahui terkait "titik kritis" makanan luar.


## Demo

http://CekHalal.online


## Run Locally

Clone the project

```bash
  git clone https://github.com/iimnd/halal-food.git
```

Go to the project directory

```bash
  cd my-project
```

Run backing services

```bash
   docker-compose -f backsing_service/postgres.yml up -d
```

Run Backend

```bash
  yarn && yarn develop
```

Run Frontend

```bash
  yarn && yarn dev
```

## Installation

App ini terdiri dari backend dan frontend serta postgresql sebagai database. Backend menggunakan strapi headless cms, frontend menggunakan nextjs.

Step 1, Run postgre: 
```bash
  docker-compose -f backsing_service/postgres.yml up -d
```

Step 2, Run strapi backend: 
```bash
  cd api
  pm2 start
```

Step 3, Run frontend: 
```bash
  cd client
  npm install 
  npm run build
  pm2 start
```

*Note :*
Usefull pm2 command 
```bash
  pm2 ls #see pm2 process list
  pm2 start / stop / restart / delete process_id #command for process id
  pm2 logs #see pm2 log
  pm2 monit #monitoring process
```
## Tech Stack

**Frontend:** Nextjs, TailwindCSS

**Backend:** Strapi Headless CMS

**Database:** PostgreSQL

**Process Management:** PM2

## Authors

- [IIM NUR DIANSYAH](https://www.github.com/iimnd)


## Contributing

Contributions are always welcome! butuh orang yang mau mengembangkan web ini agar lebih bermanfaat bagi banyak orang
