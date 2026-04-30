import { useEffect, useState } from "react";

const readingTestBank = {
  "3-sinif": [
    {
      id: "3-sinif-gizemli-bahce",
      title: "Gizemli Bahçe ve Gümüş Anahtar",
      wordCount: 170,
      text: `Emre, o sabah erkenden uyandı. Bahçedeki yaşlı çınar ağacının altında oyun oynamayı çok seviyordu. En sevdiği oyuncağı olan büyüteci yanına aldı. Çimenlerin arasında küçük karıncaları izlemeye başladı. Tam o sırada, toprağın altında parlayan bir şey gördü. Merakla toprağı kazdı. Bir süre sonra küçük bir anahtar buldu. Bu anahtar acaba nereyi açıyordu?

Hemen bahçenin en köşesindeki eski tahta kapıya koştu. Bu kapı yıllardır kapalı duruyordu. Anahtarı kilide soktu ve yavaşça çevirdi. "Tık" diye bir ses geldi. Kapı gıcırdayarak açıldı. İçerisi rengarenk çiçeklerle doluydu. Daha önce hiç görmediği mavi güller ve kocaman kelebekler vardı. Bahçenin ortasında ise minik bir çeşme duruyordu.

Çeşmeden akan suyun sesi müzik gibiydi. Emre, buranın bir masal bahçesi olduğunu anladı. Çiçeklerin kokusu tüm bahçeyi sarmıştı. Cebinden bir not defteri çıkardı ve gördüğü her şeyi tek tek yazdı. Artık onun hiç kimsenin bilmediği gizli bir dünyası vardı.`,
      questions: [
        { question: "Emre sabah uyanınca ilk olarak ne yaptı?", options: ["Okula gitti", "Bahçeye çıktı", "Kitap okudu"], correctIndex: 1 },
        { question: "Emre toprağın altında ne buldu?", options: ["Gümüş bir anahtar", "Küçük bir taş", "Altın bir yüzük"], correctIndex: 0 },
        { question: "Emre bulduğu anahtarla neyi açtı?", options: ["Sandığı", "Çekmeceyi", "Eski tahta kapıyı"], correctIndex: 2 },
        { question: "Kapının arkasındaki bahçede ne vardı?", options: ["Mavi güller ve kelebekler", "Büyük bir ev", "Oyuncaklar"], correctIndex: 0 },
        { question: "Emre gördüklerini nereye yazdı?", options: ["Kitabına", "Duvara", "Defterine"], correctIndex: 2 },
      ],
    },
    {
      id: "3-sinif-bulutlara-komsu",
      title: "Bulutlara Komşu Olan Çocuk",
      wordCount: 172,
      text: `Deniz, her akşam balkona çıkarak gökyüzünü izlemeyi çok severdi. Bulutların her biri ona farklı bir şekli anımsatırdı. Kimi zaman kocaman bir pamuk şekerine, kimi zaman da koşuşturan kuzulara bakıyormuş gibi hissederdi. Bir akşam, en parlak bulutun üzerinde minik bir ışığın yandığını fark etti. Deniz, hemen odasına gidip büyük fenerini aldı ve ışığı buluta doğru tutup kapatmaya başladı.

Ertesi sabah uyandığında başucunda bembeyaz ve yumuşacık bir tüy buldu. Bu tüy, sıradan bir kuşa ait olamazdı. O gün okulda hep o bulutu ve üzerindeki ışığı düşündü. Öğretmeni resim yapmalarını istediğinde, Deniz hiç düşünmeden gökyüzünde yüzen bir ev çizdi.

Akşam eve döndüğünde yine balkona koştu. Bu sefer bulutlar ona daha yakın görünüyordu. Deniz, hayallerinin peşinden gitmenin ne kadar eğlenceli olduğunu o gün bir kez daha anladı.`,
      questions: [
        { question: "Deniz akşamları balkona çıktığında en çok neyi yapmaktan keyif alırdı?", options: ["Kitap okumaktan", "Gökyüzünü izlemekten", "Meyve yemekten"], correctIndex: 1 },
        { question: "Deniz gizemli ışıkla haberleşmek için ne kullandı?", options: ["Renkli bir fener", "Aynalı bir gözlük", "Kırmızı bir düdük"], correctIndex: 0 },
        { question: "Deniz başucunda bulduğu tüy için ne düşündü?", options: ["Yastığından koptuğunu", "Bahçedeki tavuğa ait olduğunu", "Sıradan bir kuşa ait olmadığını"], correctIndex: 2 },
        { question: "Öğretmeni resim isteyince Deniz ne çizdi?", options: ["Büyük bir yarış arabası", "Gökyüzünde yüzen bir ev", "Denizin altındaki balıklar"], correctIndex: 1 },
        { question: "Deniz için her bulut neyi temsil ediyordu?", options: ["Yağmurun yağacağını", "Uyunması gereken saati", "İçinde macera olan bir adayı"], correctIndex: 2 },
      ],
    },
  ],
  "4-sinif": [
    {
      id: "4-sinif-yesil-ada",
      title: "Yeşil Ada",
      wordCount: 210,
      text: `Arda o akşam çalışma masasına oturduğunda, penceresinden dışarıdaki gri binalara ve egzoz dumanı çıkaran arabalara baktı. Öğretmeni "Gelecekte Bir Gün" konulu bir ödev vermişti. Gözlerini kapatıp derin bir nefes aldı. Keşke dedi, her yer yemyeşil olsaydı!

Yeşil Ada’da sabahlar korna sesleriyle değil, binaların çatısındaki elma bahçelerinde şakıyan kuş sesleriyle başlıyordu. Bu şehirde devasa beton yığınları yerine, gökyüzüne uzanan dikey ormanlar vardı. İnsanlar işlerine güneş ışığıyla şarj olan ve rayların üzerinde sessizce süzülen trenlerle gidiyordu.

Şehrin merkezinde ise kristal camdan yapılmış, çatısı ağaçlarla kaplı kocaman bir kütüphane yükseliyordu. Arda yazısını bitirdiğinde gülümsedi. Belki bugün Yeşil Ada sadece bir kâğıt üzerindeydi ama doğayı seven çocukların ellerinde bir gün gerçek bir yuvaya dönüşebilirdi.`,
      questions: [
        { question: "Arda pencereden dışarı baktığında ne görmüştür?", options: ["Büyük bir kütüphane ve parklar", "Gri binalar ve egzoz dumanları", "Sessiz trenler", "Meyve bahçeli evler"], correctIndex: 1 },
        { question: "Yeşil Ada’da ulaşım nasıl sağlanmaktadır?", options: ["Gürültülü jetlerle", "Kömürlü trenlerle", "Güneş enerjili sessiz trenlerle", "Elektrikli bisikletlerle"], correctIndex: 2 },
        { question: "Binaların çatısında ne vardır?", options: ["Dev şemsiyeler", "Elma bahçeleri", "Büyük havuzlar", "Antenler"], correctIndex: 1 },
        { question: "Şehrin merkezindeki kütüphanenin özelliği nedir?", options: ["Kristal camdan ve çatısı ağaçlarla kaplı olması", "En eski bina olması", "Sadece öğretmenlere açık olması", "Sadece eski kitaplar olması"], correctIndex: 0 },
        { question: "Arda’nın vardığı sonuç nedir?", options: ["Gelecek korkutucudur", "Oyun oynayabilir", "Doğayı koruyarak hayal gerçeğe dönüşebilir", "Kompozisyonu birinci olacaktır"], correctIndex: 2 },
      ],
    },
    {
      id: "4-sinif-robotik",
      title: "Robotik Yarışmanın Gizli Kahramanı",
      wordCount: 203,
      text: `Okulun spor salonu hiç bu kadar kalabalık olmamıştı. Her yerden sesler geliyor, küçük robotlar pistte birbirleriyle yarışıyordu. Bizim 4-A sınıfının robotu "Şimşek", son turda birden yavaşladı. Şimşek’in tekerleğine küçük bir kâğıt parçası sıkışmıştı.

O sırada rakip takım olan 4-B'den Kerem yanlarına yaklaştı. Kerem’in elinde ince bir cımbız vardı. "İsterseniz şununla hemen çıkarabiliriz," diyerek cımbızı uzattı. Selin hızlıca kâğıdı çıkardı ve Şimşek tekrar hareket etmeye başladı.

Okul müdürümüz ödül töreninde "Bugün burada sadece robotlar yarışmadı, aynı zamanda arkadaşlık ve centilmenlik kazandı." dedi. Şimşek yarışı kazanamamıştı ama biz o gün bir kupadan çok daha değerli bir şey kazanmıştık.`,
      questions: [
        { question: "Spor salonundaki hareketliliğin sebebi nedir?", options: ["Basketbol turnuvası", "Robotların yarıştığı teknoloji etkinliği", "Kermes", "Konser"], correctIndex: 1 },
        { question: "Şimşek neden yavaşlamıştır?", options: ["Pili bitmiştir", "Duvara çarpmıştır", "Tekerleğine kâğıt sıkışmıştır", "Kumandası bozulmuştur"], correctIndex: 2 },
        { question: "Kerem’in yardımı nasıl bir davranıştır?", options: ["Yarışı kaybetmek istemesi", "Kendi robotunu bozması", "Centilmen ve yardımsever olması", "Kuralları ihlal etmesi"], correctIndex: 2 },
        { question: "Müdür asıl neyin kazandığını vurgulamıştır?", options: ["Teknolojinin", "Okul başarısının", "Arkadaşlık ve centilmenliğin", "Robotların"], correctIndex: 2 },
        { question: "Asıl kazanılan şey nedir?", options: ["Birincilik kupası", "Tamir becerisi", "Gerçek dostluk", "Yeni piller"], correctIndex: 2 },
      ],
    },
  ],
  ortaokul: [
    {
      id: "ortaokul-mars",
      title: "Mars’taki Tozlu Bilmece",
      wordCount: 272,
      text: `2045 yılının serin bir Ekim sabahında, Mars yüzeyindeki "Kızıl Vadi" istasyonunda büyük bir heyecan yaşanıyordu. Genç astronot adayı Selin, Mars yüzeyinden toplanan özel kaya örneklerinin analiz sonuçlarını bekliyordu. Ekip, bu örneklerin içinde milyarlarca yıl öncesine ait bir su izi bulmayı umuyordu.

Kaya örneklerinin üzerinde doğal yollarla oluşması imkânsız görünen, birbirine paralel çok ince çizgiler vardı. Ekip lideri Dr. Aras, çizgilerin bilinçli şekilde işaretlenmiş gibi göründüğünü söyledi. Selin, numuneleri yüksek çözünürlüklü mikroskop altında inceledi. Saatler süren çalışmanın sonunda çizgilerin aslında kristalleşmiş buz parçacıkları olduğunu fark etti.

Bu keşif, Mars’ın derinliklerinde hâlâ donmuş halde su kaynakları bulunduğuna dair güçlü bir ipucuydu. Selin, karmaşık görünen bir sorunun altındaki sade gerçeği bulmanın bilim insanı için en büyük ödül olduğunu anladı.`,
      questions: [
        { question: "Ekibin asıl araştırma amacı nedir?", options: ["Tarım alanı bulmak", "Canlıları fotoğraflamak", "Kaya örneklerinde su izi araştırmak", "Toz fırtınalarını değiştirmek"], correctIndex: 2 },
        { question: "Dr. Aras çizgiler için ilk olarak ne düşündü?", options: ["Rüzgâr aşınması", "Bilinçli müdahale olabilir", "Deney başarısız", "Volkanik patlama"], correctIndex: 1 },
        { question: "Mikroskobik inceleme sonucu gerçek nedir?", options: ["Canlı haritası", "Dünya’dan gelen kaya", "Buz parçacıklarının doğal şekilleri", "Elmas madeni"], correctIndex: 2 },
        { question: "Keşfin önemi nedir?", options: ["Hayat kesin kanıtlandı", "Su kaynaklarına güçlü kanıt", "Selin ünlü oldu", "Tozlar yok olacak"], correctIndex: 1 },
        { question: "Metnin ana düşüncesi nedir?", options: ["Gerçekler kolay bulunur", "Merak edenler gizemleri çözebilir", "Evren çözülemez", "Uzay sadece zekiler içindir"], correctIndex: 1 },
      ],
    },
    {
      id: "ortaokul-baris",
      title: "Dünyanın Barış Abisi",
      wordCount: 290,
      text: `İstanbul’un soğuk bir Ocak gününde, 1943 yılında dünyaya gözlerini açtığında, ailesi ona çok anlamlı bir isim verdi: Mehmet Barış. O yıllarda dünya büyük bir savaşın içindeydi ve ailesi onun isminin tüm dünyaya huzur getirmesini dilemişti. Küçük Barış, müziğe sevdalandı.

Müzik kariyerine Galatasaray Lisesi sıralarında başlayan Barış Manço, sadece bir şarkıcı değil; aynı zamanda bir kültür elçisiydi. Anadolu’nun derin türkülerini modern tınılarla birleştirdi. Onu çocukların kalbinde ölümsüz kılan asıl şey ise "7’den 77’ye" programı oldu.

Barış Manço, hayatı boyunca 150’den fazla beste yaptı ve birçok ödül kazandı. Ama onun en büyük koleksiyonu, çocukların ona duyduğu sevgiydi. Bugün hâlâ onun şarkılarıyla büyüyoruz çünkü Barış Abi, bize dürüst bir insan olmanın şöhretten daha önemli olduğunu öğretti.`,
      questions: [
        { question: "Barış Manço’nun isminin veriliş hikâyesi neyle ilgilidir?", options: ["Bebekken yetenekli olması", "Savaş ortamında barış özlemi", "Vasiyet", "Okul başarısı"], correctIndex: 1 },
        { question: "Müzik tarzıyla ilgili hangisi doğrudur?", options: ["Sadece batı müziği", "Modernliğe karşıdır", "Anadolu kültürünü modern müzikle harmanlamıştır", "Sadece yabancı dil"], correctIndex: 2 },
        { question: "Onu çocuklar için ölümsüz kılan çalışma nedir?", options: ["Lise grubu", "Yüzükleri", "7’den 77’ye programı", "Ödülleri"], correctIndex: 2 },
        { question: "Hayat felsefesi için en kapsamlı yargı hangisidir?", options: ["Yurt dışına gidilmeli", "Şöhret sorumluluğu azaltır", "Sevgi, dürüstlük ve kültürel paylaşım önemlidir", "Yaratıcılık zor konulardır"], correctIndex: 2 },
        { question: "Metnin dili için ne söylenebilir?", options: ["Soğuk rapor dili", "Masalsı anlatım", "Samimi ve betimleyici anlatım", "Olumsuz eleştiri"], correctIndex: 2 },
      ],
    },
  ],
  lise: [
    {
      id: "lise-hizli-okuma",
      title: "Zihnin Işık Hızı: Nitelikli Hızlı Okuma",
      wordCount: 324,
      text: `Geleneksel okuma alışkanlıklarımız, çoğunlukla ilkokul yıllarında kelimeleri tek tek seslendirmeyle başlar. Ancak lise ve üniversite seviyesine gelindiğinde, bu yöntem devasa bilgi yığınları karşısında bir engel haline gelir. Birçok öğrenci, hızlı okuduğunda anlam kaybı yaşayacağını düşünerek yavaşlamayı tercih eder.

Hızlı okuma, sadece sayfaları hızla çevirmek değil, göz kaslarının görme alanını genişleterek kelimeleri tek tek değil, bloklar halinde algılama sanatıdır. İnsan gözü, eğitimle bir bakışta 3 hatta 4 kelimeyi birden algılayabilir. Bu süreçte iç seslendirme alışkanlığını azaltmak, okuma hızını artırır.

Dijital çağın bilgi bombardımanı altında yavaş kalmak, bilginin gerisinde kalmaktır. Hızlı okuma becerisi kazanmış bir lise öğrencisi, sınav sorularını daha hızlı bitirmekle kalmaz; aynı zamanda kısa sürede daha fazla kaynak tarayarak rakiplerinin önüne geçer.`,
      questions: [
        { question: "Sürücü benzetmesiyle hangi ilişki vurgulanmıştır?", options: ["Hızlı okuma tehlikelidir", "Hız arttıkça odak keskinleşebilir", "Yavaş okuma daha güvenlidir", "Herkes hızlı okuyamaz"], correctIndex: 1 },
        { question: "İç seslendirmeyi azaltmak ne sağlar?", options: ["Unutmayı artırır", "Kelime haznesini engeller", "Okuma hızını artırır", "Ana fikri zorlaştırır"], correctIndex: 2 },
        { question: "Kelimeleri fotoğraflamak ne demektir?", options: ["Hecelenerek okumak", "Resme bakmak", "Kelime gruplarını bloklar halinde algılamak", "Sadece başlık okumak"], correctIndex: 2 },
        { question: "Yazara göre en büyük avantaj nedir?", options: ["Kitap masrafı azalır", "Az çalışmak yeter", "Bilgiyi hızlı işleyerek öne geçmek", "Sadece edebiyatta başarı"], correctIndex: 2 },
      ],
    },
    {
      id: "lise-gobeklitepe",
      title: "Tarihin Sıfır Noktası: Göbeklitepe’nin Gizemi",
      wordCount: 338,
      text: `İnsanlık tarihine dair bildiğimiz tüm ezberleri bozan Göbeklitepe; Şanlıurfa’nın yaklaşık 15 kilometre kuzeydoğusunda yer almaktadır. 1994 yılında başlatılan kazılar, günümüzden yaklaşık 12.000 yıl öncesine uzanan bir gerçeği gün yüzüne çıkarmıştır.

Göbeklitepe, klasik tarih kitaplarındaki "önce tarım yapıldı, sonra yerleşik hayata geçildi ve tapınaklar inşa edildi" teorisini sarsmıştır. Buradaki buluntular, insanın ortak bir inanç ve ritüel etrafında toplanmak için bir araya geldiğini göstermektedir. Sütunlardaki hayvan kabartmaları, sembolik dil ve estetik algıya işaret eder.

Stonehenge’den ve Mısır Piramitleri’nden binlerce yıl daha eski olan bu yapılar topluluğu, insanlık hafızasının kayıp sayfalarını yeniden yazmaktadır. Göbeklitepe sadece bir tarih bilgisi değil; sayısal verilerin, kavramların ve yorumların birlikte işlendiği yoğun bir anlama testidir.`,
      questions: [
        { question: "Göbeklitepe’nin geleneksel teorileri sarsmasının sebebi nedir?", options: ["Piramitlerden gösterişli olması", "Tarım öncesi ortak inançla bir araya gelmeyi göstermesi", "Şanlıurfa’da olması", "Yabancı uzman kazısı"], correctIndex: 1 },
        { question: "Hayvan kabartmaları neyi gösterir?", options: ["Mağara yaşamı", "Tarımsal hayvan gücü", "Sembolik dil ve estetik algı", "Evcilleştirme ayinleri"], correctIndex: 2 },
        { question: "Diğer yapılarla kıyaslandığında en önemli sonuç nedir?", options: ["Taşları hafiftir", "Çok daha eski inanç merkezidir", "Diğerleri buradan etkilenmiştir", "Tarihlendirme yoktur"], correctIndex: 1 },
        { question: "Sayısal veriler neyi somutlaştırır?", options: ["Turizm potansiyeli", "Kazı maliyeti", "Avcı-toplayıcıların mühendislik başarısı", "Daha büyük yapı ihtimali"], correctIndex: 2 },
      ],
    },
  ],
};

function getRandomReadingText(level, subLevel) {
  const key = level === "ilkokul" ? subLevel : level;
  const pool = readingTestBank[key] || [];
  return pool[Math.floor(Math.random() * pool.length)];
}

function getReadingLevelLabel(level, subLevel) {
  if (level === "ilkokul") return subLevel === "3-sinif" ? "İlkokul / 3. Sınıf" : "İlkokul / 4. Sınıf";
  if (level === "ortaokul") return "Ortaokul";
  if (level === "lise") return "Lise";
  return "";
}

function getResultComment(speed, comprehension) {
  if (speed >= 180 && comprehension >= 80) return { title: "Dengeli ve güçlü okuyucu", text: "Okuma hızı ve anlama oranı birlikte iyi görünüyor. Düzenli egzersizlerle seviye daha da güçlenebilir." };
  if (speed >= 180) return { title: "Hız iyi, anlama desteklenmeli", text: "Öğrenci hızlı okuyor; ancak metindeki ayrıntıları yakalama ve paragraf anlama becerisi güçlendirilebilir." };
  if (comprehension >= 80) return { title: "Anlama iyi, hız geliştirilebilir", text: "Öğrenci metni dikkatli anlıyor. Okuma akıcılığı ve göz egzersizleriyle hız tarafı geliştirilebilir." };
  return { title: "Gelişim planı önerilir", text: "Okuma hızı ve anlama oranı birlikte desteklenmeli. Uzman eğitmen değerlendirmesiyle daha doğru bir yol haritası hazırlanabilir." };
}

export default function ReadingSpeedTest({ isOpen, onClose }) {
  const [step, setStep] = useState("level");
  const [level, setLevel] = useState("");
  const [subLevel, setSubLevel] = useState("");
  const [selectedText, setSelectedText] = useState(null);
  const [startedAt, setStartedAt] = useState(null);
  const [readingSeconds, setReadingSeconds] = useState(0);
  const [answers, setAnswers] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [formData, setFormData] = useState({ parentName: "", phone: "", studentClass: "", city: "" });
  const [readingWarning, setReadingWarning] = useState("");
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  useEffect(() => {
    if (!isOpen || step !== "reading" || !startedAt) return undefined;
    const timer = setInterval(() => {
      setReadingSeconds(Math.max(1, Math.round((Date.now() - startedAt) / 1000)));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, step, startedAt]);

  if (!isOpen) return null;

  const totalQuestions = selectedText?.questions?.length || 0;
  const correctCount = selectedText ? selectedText.questions.reduce((total, item, index) => total + (answers[index] === item.correctIndex ? 1 : 0), 0) : 0;
  const comprehension = totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const speed = selectedText && readingSeconds ? Math.round(selectedText.wordCount / (readingSeconds / 60)) : 0;
  const resultComment = getResultComment(speed, comprehension);
  const activeQuestion = selectedText?.questions?.[questionIndex];
  const canContinueFromLevel = level === "ortaokul" || level === "lise" || (level === "ilkokul" && subLevel);


  const resetTest = () => {
    setStep("level");
    setLevel("");
    setSubLevel("");
    setSelectedText(null);
    setStartedAt(null);
    setReadingSeconds(0);
    setAnswers({});
    setQuestionIndex(0);
    setFormData({ parentName: "", phone: "", studentClass: "", city: "" });
  };

  const closeTest = () => {
    resetTest();
    onClose();
  };

  const goBack = () => {
    if (step === "info") setStep("level");
    if (step === "reading") {
      setStartedAt(null);
      setReadingSeconds(0);
      setStep("info");
    }
    if (step === "questions") {
      setQuestionIndex(0);
      setStep("reading");
    }
    if (step === "result") setStep("questions");
  };

  const prepareTest = () => {
    const picked = getRandomReadingText(level, subLevel);
    if (!picked) return;
    setSelectedText(picked);
    setAnswers({});
    setQuestionIndex(0);
    setReadingSeconds(0);
    setStartedAt(null);
    setStep("info");
  };

  const startReading = () => {
    setStartedAt(Date.now());
    setReadingSeconds(0);
    setStep("reading");
  };

  const finishReading = () => {
  const seconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

  if (seconds < 40) {
    setReadingWarning("Lütfen okumayı tamamlayın.");
    return;
  }

  setReadingWarning("");
  setReadingSeconds(seconds);
  setStep("questions");
};

  return (
    <div className="reading-test-overlay" role="dialog" aria-modal="true">
      <div className="reading-test-modal">
        <button className="reading-test-close" type="button" onClick={closeTest} aria-label="Testi kapat">×</button>

        <div className="reading-test-top">
          {step !== "level" && <button type="button" className="reading-test-back" onClick={goBack}>← Önceki</button>}
          <div className="reading-test-progress">
            {["level", "info", "reading", "questions", "result"].map((item, index) => (
              <span key={item} className={index <= ["level", "info", "reading", "questions", "result"].indexOf(step) ? "active" : ""} />
            ))}
          </div>
        </div>

        {step === "level" && (
          <div className="reading-test-screen">
            <div className="reading-test-kicker">Ücretsiz Okuma ve Anlama Testi</div>
            <h2>Öğrencinin seviyesini seçin</h2>
            <p>Seçime göre metin rastgele belirlenir. Okuma süresi ve anlama oranı birlikte ölçülür.</p>

            <div className="reading-level-grid">
              {[{ key: "ilkokul", label: "İlkokul", icon: "🎒" }, { key: "ortaokul", label: "Ortaokul", icon: "📚" }, { key: "lise", label: "Lise", icon: "🎓" }].map((item) => (
                <button key={item.key} type="button" className={`reading-level-card ${level === item.key ? "selected" : ""}`} onClick={() => { setLevel(item.key); setSubLevel(""); }}>
                  <span>{item.icon}</span>
                  <strong>{item.label}</strong>
                </button>
              ))}
            </div>

            {level === "ilkokul" && (
              <div className="reading-sublevel-box">
                <strong>İlkokul için sınıf seçin</strong>
                <div>
                  <button type="button" className={subLevel === "3-sinif" ? "selected" : ""} onClick={() => setSubLevel("3-sinif")}>3. Sınıf</button>
                  <button type="button" className={subLevel === "4-sinif" ? "selected" : ""} onClick={() => setSubLevel("4-sinif")}>4. Sınıf</button>
                </div>
              </div>
            )}

<button
  type="button"
  className="reading-primary-btn"
  disabled={!canContinueFromLevel}
  onClick={prepareTest}
>
  Devam Et
</button>
          </div>
        )}

        {step === "info" && selectedText && (
          <div className="reading-test-screen">
            <div className="reading-test-kicker">{getReadingLevelLabel(level, subLevel)}</div>
            <h2>Test hakkında bilgi</h2>
            <div className="reading-info-card">
              <div><strong>{selectedText.wordCount}</strong><span>Kelime</span></div>
              <div><strong>{selectedText.questions.length}</strong><span>Soru</span></div>
              <div><strong>Rastgele</strong><span>Metin</span></div>
            </div>
            <p>Hazır olduğunuzda testi başlatın. Metni kendi hızınızda okuyun. Okuma bitince “Okumayı Bitirdim” butonuna basın ve soruları cevaplayın.</p>

            <button
              type="button"
              className="reading-primary-btn"
              onClick={startReading}
            >
              Testi Başlat
            </button>
          </div>
        )}

        {step === "reading" && selectedText && (
          <div className="reading-test-screen reading-test-screen-wide">
            <div className="reading-test-kicker">Süre ölçülüyor • {selectedText.wordCount} kelime</div>
            <h2>{selectedText.title}</h2>
            <article className="reading-text-box">
              {selectedText.text.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </article>
            <div className="reading-finish-row">
  <button
    type="button"
    className="reading-primary-btn"
    onClick={finishReading}
  >
    Okumayı Bitirdim
  </button>

  {readingWarning && (
    <span className="reading-warning-text">
      {readingWarning}
    </span>
  )}
</div>
          </div>
        )}

        {step === "questions" && selectedText && activeQuestion && (
          <div className="reading-test-screen">
            <div className="reading-test-kicker">Anlama Soruları</div>
            <h2>Soru {questionIndex + 1} / {totalQuestions}</h2>

            <div className="reading-question-card">
              <h3>{activeQuestion.question}</h3>

              <div className="reading-options">
                {activeQuestion.options.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    className={answers[questionIndex] === index ? "selected" : ""}
                    onClick={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [questionIndex]: index,
                      }))
                    }
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="reading-question-actions">
              <button
                type="button"
                disabled={questionIndex === 0}
                onClick={() => setQuestionIndex((prev) => prev - 1)}
              >
                Önceki Soru
              </button>

              {questionIndex < totalQuestions - 1 ? (
                <button
                  type="button"
                  onClick={() => setQuestionIndex((prev) => prev + 1)}
                >
                  Sonraki Soru
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setStep("result")}
                >
                  Sonucu Gör
                </button>
              )}
            </div>
          </div>
        )}

        {step === "result" && selectedText && (
          <div className="reading-test-screen reading-result-screen">
            <div className="reading-test-kicker">Çocuğunuzun Okuma ve Anlama Analizi Hazır</div>
            <h2>{resultComment.title}</h2>
            <div className="reading-result-grid">
              <div><strong>{speed}</strong><span>Kelime / Dakika</span></div>
              <div><strong>%{comprehension}</strong><span>Anlama</span></div>
              <div><strong>{correctCount}/{totalQuestions}</strong><span>Doğru Cevap</span></div>
            </div>
            <p>{resultComment.text}</p>

            <div className="reading-lead-box">
              <h3>Sonucu uzman eğitmenle değerlendirin</h3>
              <div className="reading-form-grid">
                <input placeholder="Veli adı soyadı" value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} />
                <input placeholder="Telefon" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                <input placeholder="Öğrencinin sınıfı" value={formData.studentClass} onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })} />
                <input placeholder="Şehir" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
              </div>
              <div className="reading-cta-row">
  <a
  href={`https://wa.me/905334789253?text=${encodeURIComponent(
    `Merhaba FixOku, ben ${formData.parentName || "veli"}. ${
      formData.city ? `Size ${formData.city} şehrinden yazıyorum.` : ""
    } Çocuğum için yaptığımız okuma testi sonucunda ${speed} kelime/dakika ve %${comprehension} anlama sonucu elde ettik. Bu seviyeye göre nasıl bir gelişim planı önerirsiniz? Detaylı bilgi almak isterim.

*Velinin Adı Soyadı:* ${formData.parentName || "-"}
*Telefon:* ${formData.phone || "-"}
*Öğrencinin Sınıfı:* ${formData.studentClass || "-"}
*Bulunduğumuz Şehir:* ${formData.city || "-"}`
  )}`}
  target="_blank"
  rel="noreferrer"
>
  WhatsApp ile Bilgi Al
</a>

  {showPhoneNumber ? (
    <strong className="reading-phone-number">0 533 478 92 53</strong>
  ) : (
    <button
      type="button"
      className="reading-phone-btn"
      onClick={() => setShowPhoneNumber(true)}
    >
      Telefonla Bilgi Al
    </button>
  )}
</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
