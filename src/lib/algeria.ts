/**
 * Algeria — 58 wilayas (official numbering) with major communes.
 * Commune lists are representative placeholders, expandable later
 * from the admin dashboard.
 */

export type Commune = { nameAr: string; nameEn: string };

export type Wilaya = {
  code: string;
  nameAr: string;
  nameEn: string;
  communes: Commune[];
};

export const WILAYAS: Wilaya[] = [
  { code: "01", nameAr: "أدرار", nameEn: "Adrar", communes: [
    { nameAr: "أدرار", nameEn: "Adrar" }, { nameAr: "رقطة", nameEn: "Reggane" }, { nameAr: "تيميمون", nameEn: "Timimoun" }, { nameAr: "تيت", nameEn: "Tit" }, { nameAr: "تامست", nameEn: "Tamentest" } ] },
  { code: "02", nameAr: "الشلف", nameEn: "Chlef", communes: [
    { nameAr: "الشلف", nameEn: "Chlef" }, { nameAr: "تنس", nameEn: "Ténès" }, { nameAr: "أولاد فارس", nameEn: "Ouled Fares" }, { nameAr: "بوقادير", nameEn: "Boukadir" }, { nameAr: "تاجنة", nameEn: "Tadjna" } ] },
  { code: "03", nameAr: "الأغواط", nameEn: "Laghouat", communes: [
    { nameAr: "الأغواط", nameEn: "Laghouat" }, { nameAr: "آفلو", nameEn: "Aflou" }, { nameAr: "قصر الحيران", nameEn: "Ksar El Hirane" }, { nameAr: "سيدي مخلوف", nameEn: "Sidi Makhlouf" }, { nameAr: "تاجموت", nameEn: "Tadjmout" } ] },
  { code: "04", nameAr: "أم البواقي", nameEn: "Oum El Bouaghi", communes: [
    { nameAr: "أم البواقي", nameEn: "Oum El Bouaghi" }, { nameAr: "عين البيضاء", nameEn: "Aïn Beïda" }, { nameAr: "عين فكرون", nameEn: "Aïn Fakroun" }, { nameAr: "سيقوس", nameEn: "Sigus" }, { nameAr: "مسكيانة", nameEn: "Meskiana" } ] },
  { code: "05", nameAr: "باتنة", nameEn: "Batna", communes: [
    { nameAr: "باتنة", nameEn: "Batna" }, { nameAr: "بريكة", nameEn: "Barika" }, { nameAr: "آريس", nameEn: "Arris" }, { nameAr: "مروانة", nameEn: "Merouana" }, { nameAr: "تازولت", nameEn: "Tazoult" }, { nameAr: "نقاوس", nameEn: "N'Gaous" } ] },
  { code: "06", nameAr: "بجاية", nameEn: "Béjaïa", communes: [
    { nameAr: "بجاية", nameEn: "Béjaïa" }, { nameAr: "أقبو", nameEn: "Akbou" }, { nameAr: "خراطة", nameEn: "Kherrata" }, { nameAr: "صدوق", nameEn: "Seddouk" }, { nameAr: "تيشي", nameEn: "Tichy" }, { nameAr: "أميزور", nameEn: "Amizour" } ] },
  { code: "07", nameAr: "بسكرة", nameEn: "Biskra", communes: [
    { nameAr: "بسكرة", nameEn: "Biskra" }, { nameAr: "أولاد جلال", nameEn: "Ouled Djellal" }, { nameAr: "طولقة", nameEn: "Tolga" }, { nameAr: "سيدي عقبة", nameEn: "Sidi Okba" }, { nameAr: "زريبة الوادي", nameEn: "Zeribet El Oued" } ] },
  { code: "08", nameAr: "بشار", nameEn: "Béchar", communes: [
    { nameAr: "بشار", nameEn: "Béchar" }, { nameAr: "بني ونيف", nameEn: "Beni Ounif" }, { nameAr: "القنادسة", nameEn: "Kenadsa" }, { nameAr: "تاغيت", nameEn: "Taghit" }, { nameAr: "أبيض جيش", nameEn: "El Ouata" } ] },
  { code: "09", nameAr: "البليدة", nameEn: "Blida", communes: [
    { nameAr: "البليدة", nameEn: "Blida" }, { nameAr: "بوفاريك", nameEn: "Boufarik" }, { nameAr: "وادي العلاية", nameEn: "Oued El Alleug" }, { nameAr: "موزاية", nameEn: "Mouzaia" }, { nameAr: "بوعرفة", nameEn: "Bouarfa" }, { nameAr: "الأربعاء", nameEn: "Larbaa" } ] },
  { code: "10", nameAr: "البويرة", nameEn: "Bouira", communes: [
    { nameAr: "البويرة", nameEn: "Bouira" }, { nameAr: "سور الغزلان", nameEn: "Sour El Ghozlane" }, { nameAr: "لخضارية", nameEn: "Lakhdaria" }, { nameAr: "عين بسام", nameEn: "Aïn Bessem" }, { nameAr: "بشلول", nameEn: "Bchloul" } ] },
  { code: "11", nameAr: "تمنراست", nameEn: "Tamanrasset", communes: [
    { nameAr: "تمنراست", nameEn: "Tamanrasset" }, { nameAr: "عين صالح", nameEn: "In Salah" }, { nameAr: "عين قزام", nameEn: "In Guezzam" }, { nameAr: "إديلس", nameEn: "Idles" }, { nameAr: "تاظروك", nameEn: "Tazrouk" } ] },
  { code: "12", nameAr: "تبسة", nameEn: "Tébessa", communes: [
    { nameAr: "تبسة", nameEn: "Tébessa" }, { nameAr: "الونزة", nameEn: "El Aouinet" }, { nameAr: "بئر العاتر", nameEn: "Bir El Ater" }, { nameAr: "الشريعة", nameEn: "Cheria" }, { nameAr: "العقلة", nameEn: "El Kouif" } ] },
  { code: "13", nameAr: "تلمسان", nameEn: "Tlemcen", communes: [
    { nameAr: "تلمسان", nameEn: "Tlemcen" }, { nameAr: "ندرومة", nameEn: "Nedroma" }, { nameAr: "الغزوات", nameEn: "Ghazaouet" }, { nameAr: "مغنية", nameEn: "Maghnia" }, { nameAr: "الرمشي", nameEn: "Remchi" }, { nameAr: "السواحلية", nameEn: "Sebbaa" } ] },
  { code: "14", nameAr: "تيارت", nameEn: "Tiaret", communes: [
    { nameAr: "تيارت", nameEn: "Tiaret" }, { nameAr: "السوقر", nameEn: "Sougueur" }, { nameAr: "فرندة", nameEn: "Frenda" }, { nameAr: "مهدية", nameEn: "Mahdia" }, { nameAr: "عين الذهب", nameEn: "Ain Deheb" } ] },
  { code: "15", nameAr: "تيزي وزو", nameEn: "Tizi Ouzou", communes: [
    { nameAr: "تيزي وزو", nameEn: "Tizi Ouzou" }, { nameAr: "عزفون", nameEn: "Azefoun" }, { nameAr: "ذراع الميزان", nameEn: "Draa El Mizan" }, { nameAr: "بوغني", nameEn: "Boghni" }, { nameAr: "ماكودة", nameEn: "Makouda" }, { nameAr: "أزازقة", nameEn: "Azazga" } ] },
  { code: "16", nameAr: "الجزائر", nameEn: "Alger", communes: [
    { nameAr: "الجزائر الوسطى", nameEn: "Alger Centre" }, { nameAr: "باب الوادي", nameEn: "Bab El Oued" }, { nameAr: "حسين داي", nameEn: "Hussein Dey" }, { nameAr: "المرادية", nameEn: "El Mouradia" }, { nameAr: "بئر مراد رايس", nameEn: "Bir Mourad Rais" }, { nameAr: "بوزريعة", nameEn: "Bouzareah" }, { nameAr: "الحراش", nameEn: "El Harrach" }, { nameAr: "دار البيضاء", nameEn: "Dar El Beida" }, { nameAr: "بئر خادم", nameEn: "Bir Khadem" }, { nameAr: "الجزار", nameEn: "El Djazaïr" } ] },
  { code: "17", nameAr: "الجلفة", nameEn: "Djelfa", communes: [
    { nameAr: "الجلفة", nameEn: "Djelfa" }, { nameAr: "عين وسارة", nameEn: "Aïn Oussera" }, { nameAr: "حاسي بحبح", nameEn: "Hassi Bahbah" }, { nameAr: "مسعد", nameEn: "Messaad" }, { nameAr: "الإدريسية", nameEn: "El Idrissia" } ] },
  { code: "18", nameAr: "جيجل", nameEn: "Jijel", communes: [
    { nameAr: "جيجل", nameEn: "Jijel" }, { nameAr: "الطاهير", nameEn: "El Taher" }, { nameAr: "الشحنة", nameEn: "Chekfa" }, { nameAr: "الميلية", nameEn: "Milia" }, { nameAr: "سيدي عبد العزيز", nameEn: "Sidi Abdelaziz" } ] },
  { code: "19", nameAr: "سطيف", nameEn: "Sétif", communes: [
    { nameAr: "سطيف", nameEn: "Sétif" }, { nameAr: "العلمة", nameEn: "El Eulma" }, { nameAr: "عين ولمان", nameEn: "Aïn Oulmene" }, { nameAr: "بوقاعة", nameEn: "Bougaâ" }, { nameAr: "جميلة", nameEn: "Djémila" }, { nameAr: "عين أرنات", nameEn: "Aïn Arnat" } ] },
  { code: "20", nameAr: "سعيدة", nameEn: "Saïda", communes: [
    { nameAr: "سعيدة", nameEn: "Saïda" }, { nameAr: "عين الحجر", nameEn: "Aïn El Hadjar" }, { nameAr: "سيدي بوبكر", nameEn: "Sidi Boubekeur" }, { nameAr: "الدببة", nameEn: "El Hobba" }, { nameAr: "اليول", nameEn: "Youb" } ] },
  { code: "21", nameAr: "سكيكدة", nameEn: "Skikda", communes: [
    { nameAr: "سكيكدة", nameEn: "Skikda" }, { nameAr: "عزابة", nameEn: "Azzaba" }, { nameAr: "القل", nameEn: "Collo" }, { nameAr: "الحروش", nameEn: "El Harrouch" }, { nameAr: "تمالوس", nameEn: "Tamalous" } ] },
  { code: "22", nameAr: "سيدي بلعباس", nameEn: "Sidi Bel Abbès", communes: [
    { nameAr: "سيدي بلعباس", nameEn: "Sidi Bel Abbès" }, { nameAr: "تلاغ", nameEn: "Telagh" }, { nameAr: "مرحوم", nameEn: "Merine" }, { nameAr: "بدرابين", nameEn: "Badrebine" }, { nameAr: "صفيزف", nameEn: "Sfisef" } ] },
  { code: "23", nameAr: "عنابة", nameEn: "Annaba", communes: [
    { nameAr: "عنابة", nameEn: "Annaba" }, { nameAr: "الحجار", nameEn: "El Hadjar" }, { nameAr: "البوني", nameEn: "Bouni" }, { nameAr: "سيدي عمار", nameEn: "Sidi Amar" }, { nameAr: "سرايدي", nameEn: "Seraïdi" } ] },
  { code: "24", nameAr: "قالمة", nameEn: "Guelma", communes: [
    { nameAr: "قالمة", nameEn: "Guelma" }, { nameAr: "وادي الزناتي", nameEn: "Oued Zenati" }, { nameAr: "بومهرة أحمد", nameEn: "Boumahra Ahmed" }, { nameAr: "هيليوبوليس", nameEn: "Héliopolis" }, { nameAr: "حمام دباغ", nameEn: "Hammam Debagh" } ] },
  { code: "25", nameAr: "قسنطينة", nameEn: "Constantine", communes: [
    { nameAr: "قسنطينة", nameEn: "Constantine" }, { nameAr: "الخروب", nameEn: "El Khroub" }, { nameAr: "حامة بوزيان", nameEn: "Hamma Bouziane" }, { nameAr: "ديدوش مراد", nameEn: "Didouche Mourad" }, { nameAr: "زيغود يوسف", nameEn: "Zighoud Youcef" } ] },
  { code: "26", nameAr: "المدية", nameEn: "Médéa", communes: [
    { nameAr: "المدية", nameEn: "Médéa" }, { nameAr: "برج الكهف", nameEn: "Berrouaghia" }, { nameAr: "قصر البخاري", nameEn: "Ksar El Boukhari" }, { nameAr: "العمارية", nameEn: "El Omaria" }, { nameAr: "وزرة", nameEn: "Ouizer" } ] },
  { code: "27", nameAr: "مستغانم", nameEn: "Mostaganem", communes: [
    { nameAr: "مستغانم", nameEn: "Mostaganem" }, { nameAr: "عين تادلس", nameEn: "Aïn Tedles" }, { nameAr: "سيدي علي", nameEn: "Sidi Ali" }, { nameAr: "بوقيراط", nameEn: "Bouguirat" }, { nameAr: "حاسي ماماش", nameEn: "Hassi Mameche" } ] },
  { code: "28", nameAr: "المسيلة", nameEn: "M'Sila", communes: [
    { nameAr: "المسيلة", nameEn: "M'Sila" }, { nameAr: "بوسعادة", nameEn: "Bou Saâda" }, { nameAr: "سيدي عيسى", nameEn: "Sidi Aïssa" }, { nameAr: "مقرة", nameEn: "Magra" }, { nameAr: "حمام الضلعة", nameEn: "Hammam Dhalaa" } ] },
  { code: "29", nameAr: "معسكر", nameEn: "Mascara", communes: [
    { nameAr: "معسكر", nameEn: "Mascara" }, { nameAr: "غريس", nameEn: "Ghriss" }, { nameAr: "تيغنيف", nameEn: "Tighennif" }, { nameAr: "وهران", nameEn: "El Hachem" }, { nameAr: "سيق", nameEn: "Sig" } ] },
  { code: "30", nameAr: "ورقلة", nameEn: "Ouargla", communes: [
    { nameAr: "ورقلة", nameEn: "Ouargla" }, { nameAr: "تقرت", nameEn: "Touggourt" }, { nameAr: "حاسي مسعود", nameEn: "Hassi Messaoud" }, { nameAr: "النزلة", nameEn: "N'Goussa" }, { nameAr: "عين البيضاء", nameEn: "Rouissat" } ] },
  { code: "31", nameAr: "وهران", nameEn: "Oran", communes: [
    { nameAr: "وهران", nameEn: "Oran" }, { nameAr: "بئر الجير", nameEn: "Bir El Djir" }, { nameAr: "السانية", nameEn: "Es Senia" }, { nameAr: "عين التركي", nameEn: "Aïn El Turk" }, { nameAr: "أرزيو", nameEn: "Arzew" }, { nameAr: "بطيوة", nameEn: "Bethioua" } ] },
  { code: "32", nameAr: "البيض", nameEn: "El Bayadh", communes: [
    { nameAr: "البيض", nameEn: "El Bayadh" }, { nameAr: "الأبيض سيدي الشيخ", nameEn: "Bougtoub" }, { nameAr: "بريزينة", nameEn: "Brezina" }, { nameAr: "بوقطب", nameEn: "El Abiodh Sidi Cheikh" }, { nameAr: "كرارة", nameEn: "Kerrara" } ] },
  { code: "33", nameAr: "إليزي", nameEn: "Illizi", communes: [
    { nameAr: "إليزي", nameEn: "Illizi" }, { nameAr: "جانت", nameEn: "Djanet" }, { nameAr: "برج عمر إدريس", nameEn: "Bordj Omar Driss" }, { nameAr: "إن أمناس", nameEn: "In Amenas" } ] },
  { code: "34", nameAr: "برج بوعريريج", nameEn: "Bordj Bou Arréridj", communes: [
    { nameAr: "برج بوعريريج", nameEn: "Bordj Bou Arréridj" }, { nameAr: "رأس الوادي", nameEn: "Ras El Oued" }, { nameAr: "مجانة", nameEn: "Mansoura" }, { nameAr: "الحمادية", nameEn: "El Hamadia" }, { nameAr: "بئر قاصد علي", nameEn: "Bir Kasd Ali" } ] },
  { code: "35", nameAr: "بومرداس", nameEn: "Boumerdès", communes: [
    { nameAr: "بومرداس", nameEn: "Boumerdès" }, { nameAr: "بودواو", nameEn: "Boudouaou" }, { nameAr: "الناصرية", nameEn: "Bordj Menaiel" }, { nameAr: "خميس الخشنة", nameEn: "Khemis El Khechna" }, { nameAr: "أولاد موسى", nameEn: "Ouled Moussa" } ] },
  { code: "36", nameAr: "الطارف", nameEn: "El Tarf", communes: [
    { nameAr: "الطارف", nameEn: "El Tarf" }, { nameAr: "القالة", nameEn: "El Kala" }, { nameAr: "بن مهيدي", nameEn: "Ben M'Hidi" }, { nameAr: "بوحجار", nameEn: "Bouhadjar" }, { nameAr: "الذرعان", nameEn: "Drean" } ] },
  { code: "37", nameAr: "تندوف", nameEn: "Tindouf", communes: [
    { nameAr: "تندوف", nameEn: "Tindouf" }, { nameAr: "أم العسل", nameEn: "Oum El Assel" } ] },
  { code: "38", nameAr: "تيسمسيلت", nameEn: "Tissemsilt", communes: [
    { nameAr: "تيسمسيلت", nameEn: "Tissemsilt" }, { nameAr: "ثنية الحد", nameEn: "Theniet El Had" }, { nameAr: "بوقايد", nameEn: "Bordj Bou Naama" }, { nameAr: "لرجام", nameEn: "Lardjem" }, { nameAr: "بني شعيب", nameEn: "Bordi Chaabat" } ] },
  { code: "39", nameAr: "الوادي", nameEn: "El Oued", communes: [
    { nameAr: "الوادي", nameEn: "El Oued" }, { nameAr: "المغير", nameEn: "El M'Ghair" }, { nameAr: "قمار", nameEn: "Guemar" }, { nameAr: "البياضة", nameEn: "Robbah" }, { nameAr: "النخلة", nameEn: "Debila" } ] },
  { code: "40", nameAr: "خنشلة", nameEn: "Khenchela", communes: [
    { nameAr: "خنشلة", nameEn: "Khenchela" }, { nameAr: "بابار", nameEn: "Babar" }, { nameAr: "شليا", nameEn: "Chechar" }, { nameAr: "كايس", nameEn: "Kais" }, { nameAr: "تاوزيانت", nameEn: "Taouzianat" } ] },
  { code: "41", nameAr: "سوق أهراس", nameEn: "Souk Ahras", communes: [
    { nameAr: "سوق أهراس", nameEn: "Souk Ahras" }, { nameAr: "مداوروش", nameEn: "M'Daourouch" }, { nameAr: "تاورة", nameEn: "Taoura" }, { nameAr: "الحدادة", nameEn: "Heddada" }, { nameAr: "أم العظائم", nameEn: "Oum El Adhaim" } ] },
  { code: "42", nameAr: "تيبازة", nameEn: "Tipaza", communes: [
    { nameAr: "تيبازة", nameEn: "Tipaza" }, { nameAr: "حجوط", nameEn: "Hadjout" }, { nameAr: "الخميست", nameEn: "Khemisti" }, { nameAr: "شرشال", nameEn: "Cherchell" }, { nameAr: "دوار", nameEn: "Douaouda" } ] },
  { code: "43", nameAr: "ميلة", nameEn: "Mila", communes: [
    { nameAr: "ميلة", nameEn: "Mila" }, { nameAr: "فرجيوة", nameEn: "Ferdjioua" }, { nameAr: "شلغوم العيد", nameEn: "Chelghoum Laïd" }, { nameAr: "وادي العثمانية", nameEn: "Oued Athmenia" }, { nameAr: "تاجنانت", nameEn: "Tadjenanet" } ] },
  { code: "44", nameAr: "عين الدفلى", nameEn: "Aïn Defla", communes: [
    { nameAr: "عين الدفلى", nameEn: "Aïn Defla" }, { nameAr: "خميس مليانة", nameEn: "Khemis Miliana" }, { nameAr: "العامرة", nameEn: "El Amra" }, { nameAr: "بوراشد", nameEn: "Bourached" }, { nameAr: "العطاف", nameEn: "El Attaf" } ] },
  { code: "45", nameAr: "النعامة", nameEn: "Naâma", communes: [
    { nameAr: "النعامة", nameEn: "Naâma" }, { nameAr: "المشرية", nameEn: "Mecheria" }, { nameAr: "عين الصفراء", nameEn: "Aïn Sefra" }, { nameAr: "صفيصيفة", nameEn: "Sfissifa" }, { nameAr: "تيوت", nameEn: "Tiout" } ] },
  { code: "46", nameAr: "عين تموشنت", nameEn: "Aïn Témouchent", communes: [
    { nameAr: "عين تموشنت", nameEn: "Aïn Témouchent" }, { nameAr: "الحمام", nameEn: "El Hammam" }, { nameAr: "وادي الصباح", nameEn: "Oued Sabah" }, { nameAr: "الإمام رفيعة", nameEn: "Ain Kihal" }, { nameAr: "تامزورة", nameEn: "Tamzoura" } ] },
  { code: "47", nameAr: "غرداية", nameEn: "Ghardaïa", communes: [
    { nameAr: "غرداية", nameEn: "Ghardaïa" }, { nameAr: "المنيعة", nameEn: "El Meniaa" }, { nameAr: "متليلي", nameEn: "Metlili" }, { nameAr: "بريان", nameEn: "Berriane" }, { nameAr: "ضاية بن ضحوة", nameEn: "Daya Ben Dahoua" } ] },
  { code: "48", nameAr: "غليزان", nameEn: "Relizane", communes: [
    { nameAr: "غليزان", nameEn: "Relizane" }, { nameAr: "مازونة", nameEn: "Mazouna" }, { nameAr: "عمي موسى", nameEn: "Ammi Moussa" }, { nameAr: "وادي رهيو", nameEn: "Oued Rhiou" }, { nameAr: "بئر الدباغ", nameEn: "Belaa" } ] },
  { code: "49", nameAr: "المغير", nameEn: "El M'Ghair", communes: [
    { nameAr: "المغير", nameEn: "El M'Ghair" }, { nameAr: "أم الطيور", nameEn: "Oum Touyour" }, { nameAr: "سيدي خليل", nameEn: "Sidi Khelifa" }, { nameAr: "ستيل", nameEn: "Still" }, { nameAr: "تنديلة", nameEn: "Tendla" } ] },
  { code: "50", nameAr: "المنيعة", nameEn: "El Meniaa", communes: [
    { nameAr: "المنيعة", nameEn: "El Meniaa" }, { nameAr: "حاسي القارة", nameEn: "Hassi Gara" }, { nameAr: "حاسي الفحل", nameEn: "Hassi El Fhal" } ] },
  { code: "51", nameAr: "أولاد جلال", nameEn: "Ouled Djellal", communes: [
    { nameAr: "أولاد جلال", nameEn: "Ouled Djellal" }, { nameAr: "سيدي خالد", nameEn: "Sidi Khaled" }, { nameAr: "الدوسن", nameEn: "Doucen" }, { nameAr: "الشعيبة", nameEn: "Chaiba" } ] },
  { code: "52", nameAr: "برج باجي مختار", nameEn: "Bordj Baji Mokhtar", communes: [
    { nameAr: "برج باجي مختار", nameEn: "Bordj Baji Mokhtar" }, { nameAr: "تيمياوين", nameEn: "Timiaouine" } ] },
  { code: "53", nameAr: "بني عبس", nameEn: "Béni Abbès", communes: [
    { nameAr: "بني عبس", nameEn: "Béni Abbès" }, { nameAr: "تابلبالة", nameEn: "Tabelbala" }, { nameAr: "إقلي", nameEn: "Igli" }, { nameAr: "تاوجورت", nameEn: "Touggourt" } ] },
  { code: "54", nameAr: "تيميمون", nameEn: "Timimoun", communes: [
    { nameAr: "تيميمون", nameEn: "Timimoun" }, { nameAr: "أوقروت", nameEn: "Ouled Said" }, { nameAr: "شروين", nameEn: "Charouine" }, { nameAr: "تينركوك", nameEn: "Tinerkouk" }, { nameAr: "أولاد سعيد", nameEn: "Aougrout" } ] },
  { code: "55", nameAr: "تقرت", nameEn: "Touggourt", communes: [
    { nameAr: "تقرت", nameEn: "Touggourt" }, { nameAr: "المقارعة", nameEn: "Megarine" }, { nameAr: "الطيبات", nameEn: "Tebesbest" }, { nameAr: "العقلة المالحة", nameEn: "El Hadjira" }, { nameAr: "زعطوط", nameEn: "Zaouia El Abidia" } ] },
  { code: "56", nameAr: "جانت", nameEn: "Djanet", communes: [
    { nameAr: "جانت", nameEn: "Djanet" }, { nameAr: "برج الحواس", nameEn: "Bordj El Haouas" } ] },
  { code: "57", nameAr: "عين صالح", nameEn: "In Salah", communes: [
    { nameAr: "عين صالح", nameEn: "In Salah" }, { nameAr: "فقارة الزوى", nameEn: "Foggaret Ezzoua" }, { nameAr: "إقلي", nameEn: "In Ghar" } ] },
  { code: "58", nameAr: "عين قزام", nameEn: "In Guezzam", communes: [
    { nameAr: "عين قزام", nameEn: "In Guezzam" }, { nameAr: "تين زواتين", nameEn: "Tin Zaouatine" } ] },
];
