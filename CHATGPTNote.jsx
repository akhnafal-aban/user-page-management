// Penjelasan Pertanyaan
// Mengapa terdapat tambahan const 'const [users, setUsers] = useState([]);?

// Baris ini digunakan untuk membuat state users dengan hook useState. users akan menyimpan data pengguna yang didapatkan dari API. setUsers adalah fungsi untuk mengupdate nilai users. State ini dimulai sebagai array kosong ([]).

// Mengapa count dimasukkan ke dalam useEffect(() => { getData().then((data) => setUsers(data)); }, [count]);?

// count dimasukkan dalam array dependensi pada useEffect untuk memastikan bahwa setiap kali nilai count berubah, efek samping (yaitu, memanggil getData dan mengupdate users) dijalankan kembali. Ini memungkinkan untuk meng-update data pengguna ketika terjadi perubahan halaman.

// Apa artinya e pada const handleSubmit = (e) => {?

// e adalah singkatan dari event. Ini adalah objek event yang dikirimkan oleh browser ketika event seperti submit terjadi. Pada handleSubmit, e digunakan untuk mencegah perilaku default dari event submit form (e.preventDefault()).

// Mengapa terdapat panggilan getData pada getData().then((data) => setUsers(data));?

// Panggilan getData dilakukan untuk mengambil data pengguna dari API. then((data) => setUsers(data)) digunakan untuk mengupdate state users dengan data yang diambil dari API, sehingga komponen bisa menampilkan data terbaru.

// Mengapa di set sebagai "" pada kode setName(""); setEmail(""); setGender(""); setStatus("");?

// Setelah berhasil menambahkan pengguna baru, input form direset menjadi nilai kosong (""). Ini dilakukan untuk membersihkan form setelah pengiriman, siap untuk input baru.

// Baca kode berikut postData(name, email, gender, status).then(() => { getData().then((data) => setUsers(data)); menjadi kalimat yang mengartikan alur kode tersebut

// Berikut adalah alur kode tersebut dalam bentuk kalimat:

// Ketika form di-submit, fungsi postData dipanggil dengan parameter name, email, gender, dan status.
// Fungsi postData melakukan pengiriman data ke API.
// Setelah pengiriman data berhasil (then(() => { ... }), fungsi getData dipanggil kembali untuk mengambil data pengguna terbaru dari API.
// Data pengguna terbaru yang diterima dari API kemudian digunakan untuk mengupdate state users (setUsers(data)).