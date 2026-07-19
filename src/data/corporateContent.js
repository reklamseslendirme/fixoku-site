export const CORPORATE_HUB_PATH = "/hakkimizda";

const collectionLabel = "Kurumsal";

export const corporateHub = {
  kind: "hub",
  schemaType: "AboutPage",
  slug: "hakkimizda",
  path: CORPORATE_HUB_PATH,
  navLabel: collectionLabel,
  icon: "message",
  eyebrow: "Fixoku Kurumsal",
  heading: "Fixoku Hakkında: Eğitim Yaklaşımı, Misyon ve Vizyon",
  seoTitle: "Fixoku Hakkında: Eğitim Yaklaşımı ve Kurumsal Yapı | Fixoku",
  metaDescription:
    "Fixoku'nun hızlı okuma, anlama, dikkat ve odaklanmayı birlikte ele alan eğitim yaklaşımını; misyonunu, vizyonunu ve çalışma modelini inceleyin.",
  readingTime: "5 dakika",
  summary:
    "Fixoku; hızlı okuma, okuduğunu anlama, dikkat ve odaklanma çalışmalarını kitap, dijital araçlar ve eğitmen rehberliğiyle birlikte ele alan bir eğitim yaklaşımıdır.",
  sections: [
    {
      id: "fixoku-kimdir",
      title: "Fixoku nasıl bir eğitim yaklaşımı sunar?",
      paragraphs: [
        "Fixoku, okuma temposunu tek başına bir hedef olarak görmek yerine anlama, dikkat ve metin türüne uygun okuma davranışıyla birlikte değerlendiren bir eğitim yaklaşımı sunar.",
        "Öğrencilerden yetişkin okurlara kadar farklı grupların kullandığı metinler ve çalışma amaçları aynı değildir. Bu nedenle içerik, çalışma sırası ve uygulama biçimi okurun düzeyi ile ihtiyacına göre planlanmalıdır.",
      ],
    },
    {
      id: "egitim-modeli",
      title: "Kitap, dijital çalışma ve eğitmen rehberliği",
      paragraphs: [
        "Fixoku Eğitim Sistemi; basılı materyalleri, dijital egzersizleri, okuma ve anlama ölçümlerini ve eğitmen rehberliğini aynı çalışma planı içinde bir araya getirir.",
        "Bu araçların amacı okurun farklı becerilerdeki çalışmalarını görünür kılmak ve uygun tekrarların planlanmasını desteklemektir. Tek bir ölçüm sonucu, öğrencinin bütün öğrenme kapasitesi hakkında hüküm vermez.",
      ],
    },
    {
      id: "misyonumuz",
      title: "Misyonumuz",
      paragraphs: [
        "Fixoku'nun misyonu; bireylerin okuma ve anlama becerilerini geliştirmeye, dikkatlerini daha bilinçli yönetmelerine ve düzenli çalışma alışkanlığı oluşturmalarına yardımcı olan eğitim araçları hazırlamaktır.",
        "Eğitim yaklaşımı, her öğrenci için aynı sonucu vaat etmek yerine seviyeye uygun görevler ve sürdürülebilir uygulamalar oluşturmayı amaçlar.",
      ],
    },
    {
      id: "vizyonumuz",
      title: "Vizyonumuz",
      paragraphs: [
        "Fixoku, eğitim ile teknolojiyi anlaşılır ve uygulanabilir bir çalışma düzeninde buluşturan; okuma, anlama ve dikkat alanlarında kendini sürekli geliştiren bir eğitim sistemi oluşturmayı hedefler.",
        "Bu vizyonun odağında farklı yaş gruplarının ihtiyaçlarını gözetmek, gelişimi birden fazla göstergeyle takip etmek ve öğrenme sürecini okur için daha bilinçli hâle getirmek bulunur.",
      ],
    },
    {
      id: "kurumsal-calisma-alanlari",
      title: "Kurumsal çalışma alanları",
      paragraphs: [
        "Fixoku yaklaşımı bireysel eğitimlerin yanında okullar ve eğitim kurumlarıyla yürütülebilecek programlar ile eğitmen hazırlık süreçlerini de kapsar. Kurumun öğrenci profili, mevcut eğitim düzeni ve uygulama hedefi ön görüşmede birlikte değerlendirilir.",
        "Programın kapsamı, materyalleri ve uygulama sorumlulukları güncel koşullara göre açık biçimde belirlenmelidir. Ticari şartlar veya sonuç beklentileri doğrulanmadan genel bir vaat olarak sunulmaz.",
      ],
    },
  ],
  cardsHeading: "Kurumsal çalışma alanlarını inceleyin",
  cardsIntro:
    "Kurum uygulaması, eğitmen hazırlığı ve sık sorulan sorular için hazırlanan içeriklerden ihtiyacınıza uygun olanı seçebilirsiniz.",
  cta: {
    title: "Fixoku çalışma yaklaşımı hakkında bilgi alın",
    text: "Kurumunuzun veya eğitim hedefinizin kapsamını paylaşarak güncel uygulama seçeneklerini değerlendirebilirsiniz.",
    primary: { label: "Fixoku ile İletişime Geçin", to: "/iletisim" },
    secondary: { label: "Fixoku Eğitimini İnceleyin", to: "/fixoku-egitimi" },
  },
};

export const corporateArticles = [
  {
    kind: "article",
    slug: "okullar-icin",
    path: "/okullar-icin",
    collectionPath: CORPORATE_HUB_PATH,
    collectionLabel,
    shortTitle: "Kurumunuzda Eğitim Verin",
    navLabel: "Kurumunuzda Eğitim Verin",
    icon: "school",
    eyebrow: "Okullar ve Eğitim Kurumları",
    heading: "Kurumunuzda Fixoku Eğitimi Nasıl Uygulanır?",
    seoTitle: "Kurumlar İçin Fixoku Eğitimi ve Uygulama Modeli | Fixoku",
    metaDescription:
      "Fixoku eğitiminin okullarda ve eğitim kurumlarında nasıl planlanabileceğini, eğitmen hazırlığını, sınıf düzenini ve takip yaklaşımını inceleyin.",
    readingTime: "7 dakika",
    audience: "Öğrencileri için okuma, anlama ve dikkat çalışmaları planlamak isteyen okullar ve eğitim kurumları",
    cardLabel: "Kurumsal uygulamayı incele →",
    summary:
      "Kurumlarda Fixoku uygulaması; öğrenci profili, kurumun eğitim düzeni, eğitmen hazırlığı, materyal kullanımı ve takip yaklaşımının önceden birlikte planlanmasına dayanır.",
    sections: [
      {
        id: "kurumsal-uygulama",
        title: "Kurumlarda Fixoku uygulaması ne anlama gelir?",
        paragraphs: [
          "Kurumsal uygulama, tek bir hazır programın bütün okullara aynı biçimde aktarılması değildir. Kurumun öğrenci grupları, ders programı, eğitmen yapısı ve çalışma hedefi ön görüşmede değerlendirilir.",
          "Bu değerlendirme sonucunda kullanılacak materyaller, çalışma sırası, ölçüm yaklaşımı ve kurum ile eğitmenlerin sorumlulukları açık bir plan içinde ele alınabilir.",
        ],
      },
      {
        id: "on-gorusme",
        title: "Ön görüşmede hangi bilgiler değerlendirilir?",
        paragraphs: [
          "Öğrencilerin yaş ve sınıf düzeyleri, mevcut okuma çalışmaları, sınıf sayısı, kurumun ayırabileceği çalışma zamanı ve eğitmenlerin görevleri planlama açısından önemlidir.",
          "Amaç kuruma hazır bir sonuç vaadi sunmak değil, uygulanabilir bir çalışma çerçevesi oluşturmak ve hangi başlıkların güncel koşullarda desteklenebileceğini belirlemektir.",
        ],
      },
      {
        id: "uygulama-modelleri",
        title: "Uygulama modeli nasıl belirlenir?",
        paragraphs: [
          "Kurumun kendi eğitmenlerinin hazırlık sürecine katılması veya uygun eğitmen desteğinin değerlendirilmesi gibi seçenekler ön görüşmede ele alınabilir. Seçeneğin güncel olarak sunulup sunulmadığı ve uygulama koşulları iletişim sürecinde doğrulanmalıdır.",
          "Hangi model seçilirse seçilsin, öğrenciyle çalışacak kişinin eğitim içeriğini, materyalleri ve ölçüm sonuçlarının sınırlarını doğru anlaması gerekir.",
        ],
      },
      {
        id: "egitmen-hazirligi",
        title: "Kurum eğitmenleri nasıl hazırlanır?",
        paragraphs: [
          "Eğitmen hazırlığında hızlı okuma ve anlama yaklaşımı, dikkat çalışmaları, kitap ve dijital egzersizlerin kullanımı, ölçüm uygulaması ve sınıf içi yönlendirme başlıkları ele alınabilir.",
          "Eğitmenin görevi yalnızca süre tutmak değildir. Metin düzeyini seçmek, anlama sonucunu izlemek, gerektiğinde tempoyu düzenlemek ve öğrencinin çalışmaya katılımını desteklemek de sürecin parçalarıdır.",
        ],
      },
      {
        id: "sinif-planlama",
        title: "Sınıf grupları nasıl planlanır?",
        paragraphs: [
          "Öğrenciler yalnızca tek bir okuma sonucu üzerinden sınıflandırılmamalıdır. Yaş, sınıf düzeyi, metin deneyimi ve anlama sonucu birlikte değerlendirilmelidir.",
          "Aralarında belirgin düzey farkı bulunan öğrencileri aynı çalışma grubuna yerleştirmek, metin ve görev güçlüğünü yönetmeyi zorlaştırabilir. Gruplar mümkün olduğunca yakın öğrenme ihtiyaçlarına göre oluşturulmalıdır.",
        ],
      },
      {
        id: "takip-ve-sinirlar",
        title: "Takip sonuçları ve güncel koşullar nasıl ele alınır?",
        paragraphs: [
          "Okuma temposu, anlama ve tamamlanan çalışmalar kurumun eğitim planını gözden geçirmesine yardımcı olabilir. Bu veriler öğrenci hakkında kesin bir başarı tahmini veya klinik değerlendirme oluşturmaz.",
          "Program süresi, materyal erişimi, eğitmen desteği ve ticari koşullar zaman içinde değişebilir. Bu ayrıntılar yalnızca güncel kurum görüşmesiyle doğrulandıktan sonra kullanılmalıdır.",
        ],
      },
    ],
    related: [
      "/egitmen-ol",
      "/fixoku-egitimi/egitim-sureci",
      "/iletisim",
    ],
    cta: {
      title: "Kurumunuz için uygulanabilir çalışma modelini değerlendirin",
      text: "Öğrenci gruplarınızı ve mevcut eğitim düzeninizi paylaşarak güncel kurumsal uygulama seçenekleri hakkında bilgi alabilirsiniz.",
      primary: { label: "Kurumsal Bilgi Alın", to: "/iletisim" },
      secondary: { label: "Kurumsal Merkeze Dönün", to: CORPORATE_HUB_PATH },
    },
  },
  {
    kind: "article",
    slug: "egitmen-ol",
    path: "/egitmen-ol",
    collectionPath: CORPORATE_HUB_PATH,
    collectionLabel,
    shortTitle: "Hızlı Okuma Eğitmeni Ol",
    navLabel: "Hızlı Okuma Eğitmeni Ol",
    icon: "trainer",
    eyebrow: "Eğitmen Hazırlığı",
    heading: "Hızlı Okuma Eğitmeni Olmak",
    seoTitle: "Hızlı Okuma Eğitmeni Olmak ve Eğitim Süreci | Fixoku",
    metaDescription:
      "Fixoku hızlı okuma eğitmenliğinin hedef kitlesini, eğitim yaklaşımını, kullanılacak materyalleri ve kurum içindeki uygulama sorumluluklarını inceleyin.",
    readingTime: "6 dakika",
    audience: "Okuma ve anlama çalışmaları alanında eğitim vermeyi değerlendiren öğretmenler ve eğitimciler",
    cardLabel: "Eğitmenlik yaklaşımını incele →",
    summary:
      "Hızlı okuma eğitmenliği, yalnızca okuma süresini ölçmekten ibaret değildir; metin düzeyini, anlama kontrolünü, çalışma temposunu ve öğrenci yönlendirmesini birlikte ele almayı gerektirir.",
    sections: [
      {
        id: "egitmenin-rolu",
        title: "Hızlı okuma eğitmeninin rolü nedir?",
        paragraphs: [
          "Eğitmen, öğrencinin okuma davranışını tek bir hız sonucu üzerinden değerlendirmek yerine tempo, doğruluk, anlama ve çalışma düzenini birlikte izler.",
          "Metin ve görev güçlüğünü öğrencinin düzeyine göre seçmek, uygulama sırasında gerekli açıklamaları yapmak ve sonuçları dengeli biçimde yorumlamak temel sorumluluklar arasındadır.",
        ],
      },
      {
        id: "kimler-degerlendirebilir",
        title: "Kimler eğitmenlik sürecini değerlendirebilir?",
        paragraphs: [
          "Türkçe, edebiyat, sınıf öğretmenliği ve rehberlik gibi alanlarda çalışan eğitimciler sahip oldukları deneyimi okuma ve anlama çalışmalarıyla ilişkilendirebilir. Farklı alanlardaki eğitimcilerin uygunluğu ise eğitim geçmişi ve uygulama hedefi dikkate alınarak değerlendirilmelidir.",
          "Bir branşa sahip olmak tek başına yeterli olmadığı gibi belirli bir branştan gelmemek de otomatik olarak uygun olmadığı anlamına gelmez. Asıl gereksinim, kullanılacak eğitim yaklaşımını ve öğrenci güvenliğini doğru biçimde kavramaktır.",
        ],
      },
      {
        id: "hazirlik-icerigi",
        title: "Eğitmen hazırlığında hangi başlıklar ele alınır?",
        paragraphs: [
          "Hazırlık sürecinde hızlı okuma ve anlama yaklaşımı, dikkat çalışmaları, materyal kullanımı, metin seçimi, ölçüm uygulaması ve sınıf içi yönlendirme gibi başlıklar incelenebilir.",
          "Eğitmen ayrıca hız ile anlama arasındaki dengeyi, farklı yaş gruplarının gereksinimlerini ve sonuçların hangi sınırlar içinde yorumlanabileceğini bilmelidir.",
        ],
      },
      {
        id: "kitap-ve-dijital-araclar",
        title: "Kitap ve dijital araçlar nasıl kullanılır?",
        paragraphs: [
          "Basılı ve dijital materyaller birbirinden kopuk görevler olarak değil, aynı çalışma hedefini farklı yollarla destekleyen araçlar olarak kullanılabilir.",
          "Eğitmenin materyalleri hangi sırayla ve hangi güçlük düzeyinde kullanacağını bilmesi önemlidir. Dijital sonuçlar otomatik bir öğrenci değerlendirmesi olarak değil, eğitmenin gözlemi ve anlama sonuçlarıyla birlikte ele alınmalıdır.",
        ],
      },
      {
        id: "uygulama-sorumlulugu",
        title: "Eğitim verirken hangi sorumluluklar önemlidir?",
        paragraphs: [
          "Öğrenciye gerçekçi olmayan hız veya sınav sonucu beklentileri verilmemeli; çalışma sonuçları başka öğrencilerle karşılaştırma aracı hâline getirilmemelidir.",
          "Eğitmen, öğrencinin zorlandığı durumlarda çalışma temposunu düzenlemeli ve eğitimsel desteğin uzman değerlendirmesinin yerine geçmediğini bilmelidir.",
        ],
      },
      {
        id: "guncel-kosullar",
        title: "Katılım ve uygulama koşulları nasıl öğrenilir?",
        paragraphs: [
          "Eğitmen hazırlığının güncel kapsamı, uygulama biçimi ve kurum içindeki sorumlulukları iletişim sürecinde doğrulanmalıdır. Kaynaklarda yer alan gelir, kariyer veya ekonomik sonuç söylemleri eğitim içeriğinin bir parçası olarak değerlendirilmez.",
          "Eğitmenlik sürecine ilişkin karar; kişinin eğitim deneyimi, çalışma hedefi ve programın güncel koşulları birlikte incelenerek verilmelidir.",
        ],
      },
    ],
    related: [
      "/okullar-icin",
      "/fixoku-egitimi/egitim-sureci",
      "/iletisim",
    ],
    cta: {
      title: "Eğitmen hazırlık sürecinin güncel kapsamını öğrenin",
      text: "Eğitim deneyiminizi ve çalışma hedefinizi paylaşarak güncel uygulama koşulları hakkında bilgi alabilirsiniz.",
      primary: { label: "Eğitmenlik Hakkında Bilgi Alın", to: "/iletisim" },
      secondary: { label: "Kurumsal Merkeze Dönün", to: CORPORATE_HUB_PATH },
    },
  },
  {
    kind: "article",
    slug: "sss",
    path: "/sss",
    collectionPath: CORPORATE_HUB_PATH,
    collectionLabel,
    shortTitle: "Sık Sorulan Sorular",
    navLabel: "Sık Sorulan Sorular",
    icon: "question",
    eyebrow: "Kurumsal Bilgilendirme",
    heading: "Fixoku Hakkında Sık Sorulan Sorular",
    seoTitle: "Fixoku Hakkında Sık Sorulan Sorular ve Yanıtlar | Fixoku",
    metaDescription:
      "Fixoku eğitim modelinin kurumlarda uygulanması, eğitmen hazırlığı, sınıf planlaması, kitap, yazılım ve ölçüm süreciyle ilgili yanıtları inceleyin.",
    readingTime: "7 dakika",
    audience: "Fixoku eğitim yaklaşımı ve kurumsal uygulama hakkında temel bilgi arayan öğrenciler, veliler, eğitimciler ve kurumlar",
    cardLabel: "Soruları ve yanıtları incele →",
    summary:
      "Bu sayfa, Fixoku eğitim yaklaşımı, kurumsal uygulama, eğitmen hazırlığı, sınıf planlaması ve materyal kullanımı hakkında sık karşılaşılan soruları ölçülü yanıtlarla açıklar.",
    sections: [
      {
        id: "fixoku-nedir",
        title: "Fixoku tam olarak nedir?",
        paragraphs: [
          "Fixoku; hızlı okuma, okuduğunu anlama, dikkat ve odaklanma çalışmalarını kitap, dijital egzersizler ve eğitmen rehberliğiyle birlikte ele alan bir eğitim yaklaşımıdır.",
          "Amaç yalnızca okuma süresini kısaltmak değildir. Okurun metin türüne göre temposunu ayarlaması, ana düşünceyi izlemesi ve anlama sonucunu kontrol etmesi de çalışma planının parçasıdır.",
        ],
      },
      {
        id: "kurumlarda-uygulama",
        title: "Fixoku kurumlarda nasıl uygulanabilir?",
        paragraphs: [
          "Kurum uygulaması öğrenci profili, sınıf yapısı, kurumun ders programı ve eğitmenlerin görevleri değerlendirilerek planlanabilir.",
          "Kurumun kendi eğitmenlerinin hazırlanması veya uygun eğitmen desteğinin değerlendirilmesi gibi seçeneklerin güncel olarak sunulup sunulmadığı ön görüşmede netleştirilmelidir.",
        ],
      },
      {
        id: "egitmen-hazirligi",
        title: "Eğitmenlerin hazırlık sürecine katılması gerekir mi?",
        paragraphs: [
          "Fixoku materyal ve yaklaşımını uygulayacak eğitmenin içerik, ölçüm ve öğrenci yönlendirme ilkelerini öğrenmesi gerekir. Başka bir eğitmenden alınan kısa aktarım, yapılandırılmış hazırlık sürecinin yerine geçmez.",
          "Güncel katılım ve uygulama koşulları doğrudan Fixoku ile görüşülerek doğrulanmalıdır.",
        ],
      },
      {
        id: "sinif-planlamasi",
        title: "Öğrenci grupları nasıl oluşturulur?",
        paragraphs: [
          "Öğrencilerin yaş, sınıf düzeyi, metin deneyimi ve anlama sonuçları birlikte değerlendirilmelidir. Tek bir okuma ölçümü bütün sınıf planını belirlemek için yeterli değildir.",
          "Belirgin yaş ve düzey farklarının bulunduğu gruplarda ortak metin ve görev güçlüğünü ayarlamak zorlaşabilir. Yakın öğrenme ihtiyaçlarına sahip öğrencileri birlikte çalıştırmak daha uygulanabilir bir başlangıç sunar.",
        ],
      },
      {
        id: "materyaller",
        title: "Kitap ve dijital çalışmalar nasıl kullanılır?",
        paragraphs: [
          "Kitap ve dijital egzersizler farklı görevleri destekleyebilir. Hangi materyalin kim tarafından, ne kadar süreyle ve hangi sırayla kullanılacağı programın güncel kapsamına göre belirlenir.",
          "Materyal erişimi veya satın alma koşulları zaman içinde değişebileceği için kaynaklarda geçen ticari ayrıntılar güncel bilgi olarak kabul edilmemelidir.",
        ],
      },
      {
        id: "sure-ve-sonuc",
        title: "Eğitim süresi ve sonuçlar nasıl değerlendirilir?",
        paragraphs: [
          "Eğitim süresi kurumun ders düzenine, öğrencinin başlangıç düzeyine ve çalışma sıklığına göre değişebilir. Tek bir sabit süre bütün gruplar için geçerli kabul edilmemelidir.",
          "Okuma temposu veya dikkat sonucu için önceden belirlenmiş bir artış sözü verilmez. Sonuçlar öğrencinin başlangıç düzeyine, katılımına, anlama performansına ve çalışma koşullarına göre değişir.",
        ],
      },
      {
        id: "egitsel-sinirlar",
        title: "Eğitimsel çalışma hangi sınırlar içinde değerlendirilir?",
        paragraphs: [
          "Fixoku çalışmaları eğitim amaçlıdır; klinik değerlendirme veya özel eğitim desteğinin yerine geçmez. Süreğen okuma ya da dikkat güçlüğü öğrencinin günlük yaşamını belirgin biçimde etkiliyorsa uygun uzman desteği değerlendirilmelidir.",
          "Ölçüm sonuçları bir sağlık değerlendirmesi veya öğrencinin kapasitesi hakkında kesin hüküm olarak kullanılmaz.",
        ],
      },
    ],
    related: [
      "/fixoku-egitimi",
      "/egitimler",
      "/iletisim",
    ],
    cta: {
      title: "Yanıtını bulamadığınız konular için bilgi alın",
      text: "Programın güncel kapsamı, materyalleri veya kurumsal uygulaması hakkında doğrudan bilgi alabilirsiniz.",
      primary: { label: "Fixoku ile İletişime Geçin", to: "/iletisim" },
      secondary: { label: "Kurumsal Merkeze Dönün", to: CORPORATE_HUB_PATH },
    },
  },
];

export const corporatePages = [corporateHub, ...corporateArticles];

export const corporateContentByPath = Object.fromEntries(
  corporatePages.map((page) => [page.path, page]),
);
