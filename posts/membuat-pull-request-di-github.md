---
title: Membuat Pull Request di Github
date: 2020-09-12
tags: ['Hacktoberfest', 'Git', 'Github']
canonical_url: false
description: "Di konten kali ini, aku mau menjelaskan bagaimana cara membuat Pull Request di Github, jika kalian belum tau apa itu Pull Request (PR), yuk simak selengkapnya..."
author: Satya Wikananda
cover_image: ./images/cover-pr.jpg
username_github: satyawikananda
---
Dipostingan sebelumnya tentang apa itu Hacktober ([klik disini](https://grammer-blog.vercel.app/posts/hacktoberfest-2020/)), aku sudah janji kalau aku akan menjelaskan bagaimana cara membuat Pull request di github. Aku membuat konten ini untuk membantu teman-teman berpartisipasi dalam dunia open source khususnya projek-projek yang open source di Github, dan ini juga menjadi syarat untuk menyelesaikan event Hacktoberfest di bulan oktober ini, tanpa basa basi lagi, simak pembahasannya dibawah ini.

# Apa itu Pull Request? 🤔
Pull request adalah sebuah metode di git yang bertujuan untuk melakukan permintaan penggabungan kode yang dimana sebelumnya ada dua jenis *commit* yang berbeda di beda *branch* menjadi satu setelah disetujui oleh si pemilik repository. Untuk melakukan PR di Github, dipastikan kamu harus memiliki akun github terlebih dahulu. Jika sudah mari ke penjelasan selanjutnya

# Langkah-langkah membuat Pull Request 🏃‍♂️🏃‍♀️
Oke tanpa basa basi lagi, langsung saja ke langkah-langkahnya

> Untuk akun github ini, saya menggunakan akun github kedua saya 

1. **Fork repositori yang kalian ingin pull request**

Pertama, kalian harus klik tombol fork di repositori yang kalian ingin pull request. Untuk kasus ini, saya sudah memilih repositori dari akun pertama saya [ini](https://github.com/satyawikananda/satyawikananda)

![fork-repositori](./images/pr-1.jpg)

Setelah itu, tunggu beberapa saat sampai selesai.

![proses-fork-repositori](./images/pr-2.jpg)

2. **Clone repositori**

Langkah kedua, jika proses forking repositorinya sudah selesai, clone repositori tersebut dengan langkah yang pertama, klik tombol **code**, lalu salin pranala yang ada dibagian https tersebut.

![copy-link](./images/pr-3.jpg)

Setelah pranala tersebut sudah disalin, buka terminal atau command prompt favorit kalian (dalam tutorial ini, saya menggunakan git bash) di folder manapun, bebas kalian sendiri yang menentukan, setelah itu jalankan perintah git clone dibawah ini

```
git clone [pranala https yang sudah disalin sebelumnya]
```
> pada saat menjalankan perintah itu, kurung kotak tersebut tidak diisi

![clone-pr](./images/pr-4.jpg)

Jika sudah selesai clone repositori tersebut, buka projek repositori tersebut yang sudah di clone sebelumnya