# react-news-app
 
Proje Konusu : 
Bir derneğin web sitesindeki Haberler ve Duyuruların dinamik olarak girişinin yapılacağı ekranlar ve web sitesinde bunların yayınlanması.

Çalışma Şekli:
Admin Panelden yapılacak ekleme, güncelleme ve silme işlemleri server tarafından veritabanına kaydedilmekte ve web servisler aracılığı ile client'a
iletilmektedir. Ayrıca Admin panelde yapılan duyuru ekleme işlemi web socket aracılığıyla anlık olarak web sitesi üzerinde gösterilmektedir.

Kullanım:
Proje dizininde npm run server ve npm run client komutlarının çalıştırılması yeterlidir.
Proje localhost üzerinde çalışmaktadır.
localhost:8080/ üzerinden Dernek Anasayfasına,
localhost:8080/admin üzerinden Admin Panel'e ulaşabilirsiniz.

Kullanılan Teknolojiler:
 Backend:
 JavaScript, NodeJS, ExpressJS, Socket.io
 
 Database: MongoDB Atlas
 ODM: Mongoose
 
 Frontend:
 ReactJS, Hooks, Context
