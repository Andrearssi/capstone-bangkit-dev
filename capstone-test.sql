-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: 34.101.205.217
-- Generation Time: 06 Jun 2023 pada 03.56
-- Versi Server: 8.0.26-google
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `capstone-test`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `articles`
--

CREATE TABLE `articles` (
  `id` int NOT NULL,
  `judul` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `articles`
--

INSERT INTO `articles` (`id`, `judul`, `author`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 'Mengungkap Kunci Kejayaan Masyarakat: Pentingnya Kualitas Beras dalam Kehidupan Sehari-hari', 'Febriyanti Paramudita', 'Pada era modern ini, banyak perubahan yang terjadi dalam kehidupan sehari-hari manusia. Salah satu kebutuhan dasar yang tetap konsisten adalah makanan. Makanan yang bergizi dan sehat adalah kunci untuk menjaga kesehatan dan kualitas hidup yang baik. Dalam konteks ini, beras sebagai sumber makanan pokok sebagian besar penduduk dunia memainkan peran yang sangat penting. Pentingnya kualitas beras dalam kehidupan sehari-hari tidak boleh diabaikan. Artikel ini akan mengungkap betapa vitalnya kualitas beras dan mengapa kita perlu memprioritaskan kualitas dalam setiap butirnya.\r\n\r\n1. Kesehatan dan Nutrisi\r\n\r\nKualitas beras berhubungan langsung dengan kesehatan kita. Beras yang berkualitas tinggi mengandung kandungan gizi yang lebih baik, seperti serat, vitamin, mineral, dan antioksidan. Makan beras yang berkualitas membantu menjaga sistem pencernaan yang sehat, mengurangi risiko penyakit jantung, dan meningkatkan daya tahan tubuh. Kualitas beras yang baik juga dapat membantu mengatasi masalah kekurangan gizi yang umum terjadi di berbagai negara.\r\n\r\n2. Rasa dan Kepuasan\r\n\r\nSiapa yang tidak ingin menikmati makanan yang enak dan lezat? Kualitas beras yang baik memberikan rasa yang lebih kaya dan tekstur yang lebih baik pada setiap suapan. Beras yang berkualitas tinggi memiliki cita rasa yang unik dan menggugah selera. Dengan menggunakan beras berkualitas, kita dapat menghadirkan hidangan yang lezat dan memuaskan setiap kali kita memasak.\r\n\r\n3. Dampak Lingkungan\r\n\r\nMemilih beras berkualitas tinggi juga memiliki dampak positif pada lingkungan. Proses produksi beras yang berkualitas tinggi sering melibatkan penggunaan teknik pertanian yang berkelanjutan dan ramah lingkungan. Praktik pertanian seperti pengendalian hama yang bijaksana, penggunaan pupuk organik, dan pengelolaan air yang efisien dapat membantu melindungi sumber daya alam dan meminimalkan dampak negatif terhadap lingkungan.\r\n\r\n4. Dukungan pada Petani Lokal\r\n\r\nDengan memilih beras berkualitas tinggi, kita memberikan dukungan langsung kepada petani lokal. Petani yang berusaha untuk menghasilkan beras berkualitas tinggi membutuhkan penghargaan dan apresiasi atas usaha mereka. Dengan membeli beras lokal yang berkualitas, kita turut berperan dalam memajukan ekonomi lokal dan memastikan kelangsungan mata pencaharian petani.\r\n\r\n5. Prestise Kuliner\r\n\r\nBeras berkualitas tinggi sering kali dikaitkan dengan prestise kuliner. Banyak masakan tradisional atau khusus dari berbagai negara mengharuskan penggunaan beras berkualitas tinggi untuk mencapai cita rasa yang autentik. Dengan memahami dan menghargai pentingnya kualitas beras, kita bisa menghargai warisan kuliner kita dan mempertahankan keaslian masakan tradisional.\r\n\r\nDalam kehidupan sehari-hari, penting bagi kita untuk memahami betapa krusialnya kualitas beras. Dalam aspek kesehatan, nutrisi, rasa, lingkungan, dan dukungan pada petani lokal, kualitas beras memiliki peranan vital. Dengan memilih beras berkualitas tinggi, kita dapat menjaga kesehatan dan memberikan kontribusi positif bagi lingkungan dan masyarakat sekitar. Mari bersama-sama menghargai dan memprioritaskan kualitas beras dalam setiap pilihan makanan kita.\r\n', '2023-06-02 14:16:46', '2023-06-02 14:16:46'),
(2, 'Konsumsi Beras di Indonesia: Tinggi dan Terus Meningkat', 'Fayza Aurelia Syah Putri', 'Beras adalah makanan pokok yang penting bagi sebagian besar masyarakat Indonesia. Konsumsi beras per kapita Indonesia dihitung sebesar 97,6 kilogram pada tahun 2017, jauh lebih tinggi daripada rata-rata konsumsi tahunan jagung dan kentang sebagai pengganti karbohidrat yang masing-masing tercatat hanya sebesar 2 kilogram (Arifin et al., 2018) dan 2,6 kilogram per kapita (Badan Ketahanan Pangan, 2017). Jumlah ini setara dengan konsumsi beras tahunan sekitar 29,13 juta ton pada tahun 2017 menurut Badan Pusat Statistik (BPS) (BPS, 2018).\r\n\r\nKonsumsi beras per kapita Indonesia lebih tinggi daripada negara-negara tetangga yang juga menjadikan beras sebagai makanan pokok, seperti Malaysia (87,9 kilogram per kapita) dan Brunei Darussalam (75,1 kilogram per kapita) (Kementerian Sumber Daya Primer dan Pariwisata, 2017). Angka ini sedikit lebih rendah dibandingkan Thailand yang mencapai 103,5 kilogram per kapita (Khazanah Research Institute, 2019).\r\nMeskipun ada kecenderungan untuk beralih dari konsumsi beras ke gandum, konsumsi beras di Indonesia kemungkinan besar akan meningkat seiring dengan pertumbuhan populasi negara ini dan kenaikan tingkat pendapatan secara umum. Dari 270 juta orang pada tahun 2020, populasi diproyeksikan meningkat hampir 12 juta orang selama lima tahun ke depan dan mencapai 319 juta orang pada tahun 2045 (BPS, 2018). Populasi masa depan ini juga akan memiliki daya beli yang lebih kuat. Tiga puluh persen dari populasi Indonesia pada tahun 2020 (85 juta orang) adalah bagian dari kelompok masyarakat berpenghasilan menengah. Jumlah ini diperkirakan akan meningkat dua kali lipat pada tahun 2045 menjadi 70% dari populasi atau hampir 223 juta orang (Badan Perencanaan Pembangunan Nasional [Bappenas], 2019).\r\n\r\nPeningkatan jumlah penduduk yang diiringi dengan peningkatan pendapatan berarti peningkatan permintaan pangan, khususnya beras sebagai makanan pokok. Arifin dkk. (2018) memperkirakan bahwa konsumsi beras nasional akan meningkat 1,5% per tahun menjadi 99,08 kilogram per kapita pada tahun 2025 dan selanjutnya secara bertahap meningkat 2% menjadi 99,55 kilogram per kapita pada tahun 2045, sehingga total konsumsi beras tahunan diperkirakan mencapai 31,7 juta ton pada tahun 2045.\r\n\r\nNamun, berlawanan dengan permintaan yang terus meningkat, produksi beras Indonesia justru menurun. Menurut data dari Departemen Pertanian Amerika Serikat, produksi beras giling Indonesia telah menurun dari 38,31 juta ton pada tahun 2008 menjadi 33,5 juta ton pada tahun 2019.1 Berdasarkan estimasi dengan menggunakan metode Kerangka Sampel Area (KSA) yang dilakukan oleh Badan Pusat Statistik (BPS) pada tahun 2018 dan 2019, total produksi beras nasional (Gabah Kering Giling/GKG) pada tahun 2019 mencapai 54,6 juta ton, turun dari 59,2 juta ton pada tahun 2018 (BPS, 2020). Di masa depan, penurunan ini dapat diperburuk oleh ketidakpastian perubahan iklim, konversi lahan dari agraris ke industri, atau penggunaan lainnya. Badan Pusat Statistik (2020a) memperkirakan bahwa terdapat penurunan yang nyata pada total luas lahan pertanian padi sebanyak 700.000 hektar (penurunan 6,15%) pada tahun 2019 dibandingkan dengan tahun sebelumnya.\r\n\r\nKombinasi dari peningkatan permintaan beras dan penurunan produksi beras kemungkinan besar akan menyebabkan ketidakseimbangan antara penawaran dan permintaan beras. Simatupang dan Timmer (2008) berargumen bahwa kesenjangan yang melebar antara penawaran dan permintaan beras di Indonesia terutama disebabkan oleh melambatnya pertumbuhan produksi beras. Argumen ini masih relevan mengingat penurunan produksi beras pada tahun 2018 dan 2019. Sementara itu, impor beras masih sangat dibatasi, dan hampir tidak memungkinkan Indonesia untuk memenuhi kebutuhan domestiknya melalui produksi luar negeri.\r\n\r\nBadan Pusat Statistik (2020) melaporkan dalam basis data CEIC2 bahwa harga eceran rata-rata beras kualitas menengah, jenis beras yang paling banyak dikonsumsi di Indonesia, selaras dengan musim panen. Harga beras umumnya lebih rendah selama musim panen, yaitu dari sekitar bulan Februari hingga April, dan secara bertahap meningkat menjelang akhir tahun dan awal tahun berikutnya karena berkurangnya pasokan. Oleh karena itu, Pemerintah Indonesia telah memberlakukan kebijakan harga pembelian minimum untuk petani dan kebijakan harga eceran maksimum untuk konsumen sebagai upaya untuk mengendalikan harga (Hermanto, 2017). Kebijakan Harga Pembelian Pemerintah (HPP) untuk Gabah3 (Gabah Kering Panen/GKP) dan Gabah Kering Giling4 (GKG) diperkenalkan melalui Instruksi Presiden No. 09/2002 (BKP, 2013). Peraturan ini melarang para pembeli untuk membeli beras dari petani di bawah harga yang ditetapkan. Harga pembelian beras bertujuan untuk melindungi para petani domestik, terutama ketika pasokan melimpah selama musim panen. Harga yang ditetapkan telah disesuaikan dari tahun ke tahun dalam peraturan-peraturan berikutnya.\r\n\r\nSementara itu, harga eceran beras maksimum untuk beras giling5 (Harga Eceran Tertinggi/HET) ditetapkan dalam Peraturan Menteri Perdagangan (Permendag) No. 27 Tahun 2017 untuk menghindari lonjakan harga beras yang tidak terduga (Aryani, Thirtawati, & Sufri, 2019). Peraturan tersebut kemudian diperbaharui dalam Permendag No. 57/2017 untuk merefleksikan keragaman pasar beras di Indonesia dengan memasukkan berbagai jenis beras, kualitas, dan perbedaan harga antar daerah (Hermanto, 2017a).\r\n\r\nPerusahaan logistik milik negara, Bulog, mengelola stok beras nasional dengan membeli GKP, GKG, dan beras giling dari para petani dengan harga yang telah diatur. Selain itu, di sisi ritel, ketika Bulog mendeteksi harga di atas Harga Eceran Tertinggi (HET), Bulog melakukan Operasi Pasar dengan memasok lebih banyak beras dari gudang-gudangnya sendiri. Bulog juga mencoba untuk memaksa para pengecer beras untuk menjual beras mereka sesuai dengan HET. Bulog bekerja sama dengan Satgas Pangan Polri untuk melacak para pengecer beras yang menjual di atas harga eceran tertinggi yang ditetapkan pemerintah. Hal ini bukanlah tugas yang mudah mengingat banyaknya jumlah pengecer beras dan pasar tradisional di Indonesia (Fatimah, Arifin, & Tey, 2019). Berdasarkan Permendag, pengecer yang menjual di atas HET akan menerima peringatan yang dapat berujung pada pencabutan izin usaha dan penghentian operasi.\r\n\r\nPada akhirnya, penetapan harga minimum GKP dan GKG untuk petani terbukti tidak diperlukan karena harga pasar di tingkat petani tetap selalu lebih tinggi daripada harga yang ditetapkan pemerintah. Para petani lebih memilih untuk menjual beras kepada pembeli swasta yang bersedia membayar lebih tinggi dari harga yang ditetapkan. Akibatnya, total pengadaan beras Bulog dari petani juga menurun dari 2,96 juta ton gabah pada tahun 2016 menjadi 1,48 juta ton pada tahun 2018 karena Bulog tidak dapat bersaing karena adanya pembatasan anggaran (Bulog, 2020c). Sementara itu, harga beras di pasar ritel Indonesia secara konsisten berada jauh di atas harga eceran harga eceran tertinggi yang ditetapkan pemerintah. Meskipun harga maksimum beras kualitas medium ditetapkan sekitar Rp9.450-10.250 per kilogram dalam Permendag No. 57 Tahun 2017, rata-rata harga beras domestik antara Januari 2018 hingga Maret 2020 mencapai Rp14.076 per kilogram.\r\n\r\nTingginya harga beras konsumen secara tidak proporsional memengaruhi rumah tangga Indonesia berpendapatan rendah yang membelanjakan 25% dari pendapatan mereka untuk membeli beras (Bank Dunia, 2015). Para petani juga menanggung beban tersebut. Harga pembelian mungkin lebih tinggi daripada harga minimum yang ditetapkan oleh pemerintah, tetapi petani tidak mendapatkan keuntungan dari harga eceran yang tinggi dan pendapatan dari usaha tani beras tetap terlalu rendah bagi petani untuk keluar dari kemiskinan. Hampir dua pertiga dari seluruh petani subsisten atau rumah tangga miskin yang memproduksi beras mereka sendiri adalah konsumen netto dan mengonsumsi lebih banyak makanan daripada yang mereka produksi. Oleh karena itu, mereka termasuk di antara mereka yang menderita akibat harga beras yang tinggi (SMERU, 2015; Bank Dunia, 2015). Sebuah studi yang dilakukan oleh Ilman dan Wibisono (2019) menemukan bahwa pengeluaran yang tinggi untuk beras sebagai makanan pokok utama membuat masyarakat miskin tidak dapat mengonsumsi makanan kaya protein, seperti ayam atau telur, yang berpotensi menyebabkan malnutrisi dan masalah kesehatan.\r\n\r\nIndonesia memenuhi sebagian besar kebutuhan berasnya di dalam negeri, tetapi masih mengimpor beras untuk melengkapi produksi dalam negeri. Pada tahun 2019, Indonesia memproduksi 33,5 juta ton beras giling dan mengimpor 444.508 ton beras, yang berarti hampir semua beras Indonesia diproduksi di dalam negeri (BPS, 2018). Oleh karena itu, rantai pasok dalam negeri menjadi sangat penting untuk memastikan pasokan beras yang stabil, terjangkau, dan mudah diakses. Akan tetapi, inefisiensi dalam sistem distribusi beras dalam negeri dianggap sebagai salah satu alasan utama mengapa harga beras konsumen di Indonesia cukup tinggi. Beras melewati empat hingga enam pelaku dan mengakumulasi biaya transaksi di setiap tahap proses distribusi sebelum sampai ke tangan konsumen (Respatiadi & Nabila, 2017; Firdaus, 2018; Silalahi et al., 2019). Kondisi geografis Indonesia yang spesifik sebagai negara kepulauan yang luas, ditambah dengan infrastruktur yang belum memadai, berkontribusi pada kompleksitas rantai pasok beras ini.\r\n\r\nEXECUTIVE SUMMARY\r\n\r\nKonsumsi beras nasional di Indonesia merupakan salah satu yang tertinggi di dunia, mencapai 29,13 juta ton pada tahun 2017. Diperkirakan akan meningkat menjadi 31,7 juta ton pada tahun 2045 seiring dengan peningkatan populasi. Sebaliknya, Indonesia telah mengalami penurunan produksi beras dalam beberapa tahun terakhir. Kombinasi antara peningkatan permintaan dan penurunan produksi kemungkinan besar akan menyebabkan ketidakseimbangan yang semakin melebar antara penawaran dan permintaan beras.\r\n\r\nMeskipun Indonesia masih mengimpor beras, negara ini memenuhi sebagian besar kebutuhan berasnya di dalam negeri. Oleh karena itu, rantai pasokan dalam negeri menjadi sangat penting untuk memastikan pasokan beras yang stabil, terjangkau, dan mudah diakses. Namun, saluran distribusi bervariasi di setiap provinsi di seluruh Indonesia. Dari petani ke konsumen, rantai distribusi dapat mencakup tengkulak, penggiling, pedagang grosir, dan pengecer, masing-masing dengan fungsi uniknya sendiri. Mengatur jumlah perantara yang terlibat dalam rantai distribusi dan pengolahan beras yang diproduksi di dalam negeri tidak diinginkan karena para perantara ini diperlukan untuk menghubungkan petani dengan konsumen.\r\n\r\nBulog seharusnya membantu memastikan ketahanan pangan dengan terlibat dalam rantai pasokan domestik. Namun, mereka menghadapi tantangan tersendiri baik di tingkat hulu maupun hilir. Bulog berkewajiban untuk menjaga stok beras nasional dan mendistribusikannya untuk bantuan langsung. Namun, karena program Bantuan Pangan Non-Tunai (BPNT) yang baru sebagian besar bergantung pada pemasok swasta, distribusi stok beras pemerintah menjadi terganggu. Selain itu, kualitas stok beras yang buruk di gudang-gudang Bulog tidak dapat bersaing dengan stok beras dari pemasok swasta.\r\n\r\nDalam kondisi seperti ini, peran Bulog perlu dipertimbangkan kembali. Sektor swasta seharusnya memainkan peran yang lebih besar di pasar beras domestik dan Bulog seharusnya hanya berpartisipasi dalam distribusi beras selama situasi darurat. Peraturan Presiden No. 48 Tahun 2016 Pasal 8 perlu direvisi agar Bulog dapat fokus untuk melindungi konsumen melalui program-program bantuan bencana.\r\n \r\nSebagai solusi praktis jangka pendek untuk menurunkan harga beras dan meningkatkan efektivitas Bulog, monopoli Bulog dalam mengimpor beras berkualitas menengah harus dihapuskan. Perusahaan-perusahaan swasta seharusnya dapat mengakses sistem perizinan otomatis dan mengimpor beras berkualitas menengah ke Indonesia.\r\n\r\nSource : www.cips-indonesia.org', '2023-06-02 15:12:03', '2023-06-02 15:12:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `article_images`
--

CREATE TABLE `article_images` (
  `id` int NOT NULL,
  `imagePath` varchar(255) NOT NULL,
  `articleId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `article_images`
--

INSERT INTO `article_images` (`id`, `imagePath`, `articleId`, `createdAt`, `updatedAt`) VALUES
(1, 'https://storage.googleapis.com/capstone-test2/articles/1/c6a4521e-ffff-4921-9091-3618c0c5fbac.jpg', 1, '2023-06-02 14:16:48', '2023-06-02 14:16:48'),
(2, 'https://storage.googleapis.com/capstone-test2/articles/2/c83f563a-0f0c-415f-aafb-e726b740e386.jpg', 2, '2023-06-02 15:12:04', '2023-06-02 15:12:04'),
(3, 'https://storage.googleapis.com/capstone-test2/articles/2/c2c44322-07f2-4a77-ae41-ae734af2bee1.jpg', 2, '2023-06-02 15:12:04', '2023-06-02 15:12:04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `prices`
--

CREATE TABLE `prices` (
  `id` int NOT NULL,
  `harga` int NOT NULL,
  `provinsi` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `prices`
--

INSERT INTO `prices` (`id`, `harga`, `provinsi`, `createdAt`, `updatedAt`) VALUES
(1, 9700, 'Nusa Tenggara Barat', '2023-06-02 13:57:39', '2023-06-02 13:57:39'),
(2, 11150, 'Sulawesi Tengah', '2023-06-02 13:58:37', '2023-06-02 13:58:37'),
(3, 11250, 'DKI Jakarta', '2023-06-02 13:58:50', '2023-06-02 13:58:50'),
(4, 11250, 'Sulawesi Selatan', '2023-06-02 13:59:27', '2023-06-02 13:59:27'),
(5, 11300, 'Jawa Tengah', '2023-06-02 13:59:41', '2023-06-02 13:59:41'),
(6, 11350, 'Aceh', '2023-06-02 13:59:54', '2023-06-02 13:59:54'),
(7, 11450, 'Sumatera Selatan', '2023-06-02 14:00:29', '2023-06-02 14:00:29'),
(8, 11550, 'Jawa Barat', '2023-06-02 14:00:43', '2023-06-02 14:00:43'),
(9, 11650, 'Kepulauan Riau', '2023-06-02 14:01:00', '2023-06-02 14:01:00'),
(10, 11700, 'Jawa Timur', '2023-06-02 14:01:26', '2023-06-02 14:01:26'),
(11, 11750, 'Sulawesi Barat', '2023-06-02 14:01:38', '2023-06-02 14:01:38'),
(12, 11850, 'DI Yogyakarta', '2023-06-02 14:02:07', '2023-06-02 14:02:07'),
(13, 11950, 'Sumatera Utara', '2023-06-02 14:02:22', '2023-06-02 14:02:22'),
(14, 12150, 'Jambi', '2023-06-02 14:02:34', '2023-06-02 14:02:34'),
(15, 12200, 'Gorontalo', '2023-06-02 14:02:50', '2023-06-02 14:02:50'),
(16, 12300, 'Lampung', '2023-06-02 14:03:02', '2023-06-02 14:03:02'),
(17, 12450, 'Sulawesi Utara', '2023-06-02 14:03:17', '2023-06-02 14:03:17'),
(18, 12500, 'Bali', '2023-06-02 14:03:51', '2023-06-02 14:03:51'),
(19, 12500, 'Nusa Tenggara Timur', '2023-06-02 14:04:02', '2023-06-02 14:04:02'),
(20, 12500, 'Sulawesi Tenggara', '2023-06-02 14:04:15', '2023-06-02 14:04:15'),
(21, 12600, 'Papua', '2023-06-02 14:04:23', '2023-06-02 14:04:23'),
(22, 12650, 'Maluku Utara', '2023-06-02 14:04:39', '2023-06-02 14:04:39'),
(23, 12950, 'Bengkulu', '2023-06-02 14:04:48', '2023-06-02 14:04:48'),
(24, 12950, 'Kalimantan Timur', '2023-06-02 14:04:57', '2023-06-02 14:04:57'),
(25, 12950, 'Riau', '2023-06-02 14:05:56', '2023-06-02 14:05:56'),
(26, 13000, 'Banten', '2023-06-02 14:06:06', '2023-06-02 14:06:06'),
(27, 13250, 'Kepulauan Bangka Belitung', '2023-06-02 14:06:21', '2023-06-02 14:06:21'),
(28, 13300, 'Kalimantan Utara', '2023-06-02 14:06:38', '2023-06-02 14:06:38'),
(29, 13400, 'Maluku', '2023-06-02 14:06:46', '2023-06-02 14:06:46'),
(30, 13900, 'Papua Barat', '2023-06-02 14:06:55', '2023-06-02 14:06:55'),
(31, 14500, 'Sumatera Barat', '2023-06-02 14:07:16', '2023-06-02 14:07:16'),
(32, 14800, 'Kalimantan Barat', '2023-06-02 14:07:26', '2023-06-02 14:07:26'),
(33, 16250, 'Kalimantan Tengah', '2023-06-02 14:07:37', '2023-06-02 14:07:37'),
(34, 16300, 'Kalimantan Selatan', '2023-06-02 14:07:47', '2023-06-02 14:07:47');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tengkulaks`
--

CREATE TABLE `tengkulaks` (
  `id` int NOT NULL,
  `nama` varchar(255) NOT NULL,
  `alamat` text NOT NULL,
  `no` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'andrea', 'andrea@gmail.com', '$2b$10$cF8C/B.MoC4687ro5QMsp.lc3hpfGDISrb5foKpBSh2KzEwXBDINu', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJhbmRyZWEiLCJlbWFpbCI6ImFuZHJlYUBnbWFpbC5jb20iLCJpYXQiOjE2ODU5ODUxMjYsImV4cCI6MTY4NjA3MTUyNn0.KKoP3_eK0QAlA6G5tOo5CPtFEG0Pxv3sJS_y7w6tppQ', '2023-06-04 05:41:36', '2023-06-05 17:12:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article_images`
--
ALTER TABLE `article_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `articleId` (`articleId`);

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tengkulaks`
--
ALTER TABLE `tengkulaks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `article_images`
--
ALTER TABLE `article_images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `tengkulaks`
--
ALTER TABLE `tengkulaks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `article_images`
--
ALTER TABLE `article_images`
  ADD CONSTRAINT `article_images_ibfk_1` FOREIGN KEY (`articleId`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
