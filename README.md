Super Emak
==========
Ada 2 versi untuk front-end Super Emak:
1. Landing Page
2. CMS


### Jenis Website
##### Landing Page
   Landing Page adalah halaman depan dari Website Super Emak yang berisi penjelasan tentang aplikasi Super Emak
   Link Demo :
   [Landing Page Super Emak](http://superemak.herokuapp.com "Landing Page Super Emak")
##### CMS
   CMS Super Emak adalah halaman yang digunakan admin untuk mengelola konten aplikasi Super Emak yang diantaranya :
   - [x] Mengelola user ibu / pencari pekerjaan
   - [x] Mengelola user supplier / pencari pekerjaan
   - [ ] Mengelola data pekerjaan (yang di-input oleh supplier)
   

   Link Demo :
   [CMS Super Emak](http://super-emak.herokuapp.com "CMS Super Emak")
   * Username : adminbison
   * Password : adminbison


### Versi Pengembangan
Untuk versi pengembangan CMS Super Emak ada 2 versi:
1. Develop
2. Production


##### Develop
   Develop adalah versi pengembangan CMS Super Emak yang menjalankan semua file yang sedang dikembangkan di dalam aplikasi ini, berikut untuk menjalankan versi Develop:
   1. Install dependencies dari CMS Super Emak : `npm install` / `yarn` / `yarn install`


      *Catatan: Hanya jalankan langkah nomor 2 jika terdapat kesalahan saat me-run gulp dev karena gulp-cli akan otomatis terinstall saat proses npm install*
   2. Install Gulp CLI untuk menjalankan proses developing : `npm install -g gulp-cli` / `yarn global add gulp-cli`


      *Catatan: Skip langkah nomor 2 jika gulp-cli sudah terinstall*
   3. Buka terminal, jalankan proses development aplikasi : `gulp dev`
   4. Buka tab terminal baru / terminal baru dan jalankan aplikasi : `npm run dev` / `yarn run dev`
   5. Tab browser CMS Super Emak akan muncul pada localhost port 4200 `localhost:4200`
   

##### Production
   Production adalah versi rilis atau keluaran dari CMS Super Emak yang dimana file-file untuk menjalankan aplikasi ini di *build* dan dijadikan satu untuk memperkecil ukurannya, berikut untuk menjalankan versi Production:
   1. Install dependencies dari CMS Super Emak : `npm install` / `yarn` / `yarn install`


      *Catatan: Hanya jalankan langkah nomor 2 dan 3 jika terdapat kesalahan saat me-run gulp dev karena gulp-cli akan otomatis terinstall serta folder build akan otomatis dijalankan saat proses npm install*
   2. Install Gulp CLI untuk menjalankan proses developing : `npm install -g gulp-cli` / `yarn global add gulp-cli`


      *Catatan: Skip langkah nomor 2 jika gulp-cli sudah terinstall*
   3. Buka terminal, jalankan proses development aplikasi : `gulp build`


      *Catatan: Skip langkah nomor 3 jika gulp build sudah otomatis berjalan di saat proses npm install dan folder dist sudah digenerate*
   4. Buka terminal dan jalankan aplikasi : `npm start` / `yarn start`
   5. Tab browser CMS Super Emak akan muncul pada localhost port 4200 `localhost:4200`

*Catatan: Masih terdapat keterbatasan pada fitur-fitur CMS*