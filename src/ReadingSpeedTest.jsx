import { useEffect, useState } from "react";

const readingTestBank = {
  "3-sinif": [
    {
      "id": "3-sinif-gizemli-bahce-ve-gumus-anahtar",
      "title": "Gizemli Bahçe ve Gümüş Anahtar",
      "text": "Emre, o sabah erkenden uyandı. Bahçedeki yaşlı çınar ağacının altında oyun oynamayı çok seviyordu. En sevdiği oyuncağı olan büyüteci yanına aldı. Çimenlerin arasında küçük karıncaları izlemeye başladı. Tam o sırada, toprağın altında parlayan bir şey gördü. Merakla toprağı kazdı. Bir süre sonra küçük bir anahtar buldu. Bu anahtar acaba nereyi açıyordu?\n\nHemen bahçenin en köşesindeki eski tahta kapıya koştu. Bu kapı yıllardır kapalı duruyordu. Anahtarı kilide soktu ve yavaşça çevirdi. \"Tık\" diye bir ses geldi. Kapı gıcırdayarak açıldı. İçerisi rengarenk çiçeklerle doluydu. Daha önce hiç görmediği mavi güller ve kocaman kelebekler vardı. Bahçenin ortasında ise minik bir çeşme duruyordu.\n\nÇeşmeden akan suyun sesi müzik gibiydi. Emre, buranın bir masal bahçesi olduğunu anladı. Çiçeklerin kokusu tüm bahçeyi sarmıştı. Cebinden bir not defteri çıkardı ve gördüğü her şeyi tek tek yazdı. Artık onun hiç kimsenin bilmediği gizli bir dünyası vardı. Bu güzel sırrı sadece en yakın arkadaşı ile paylaşacaktı.",
      "questions": [
        {
          "question": "Emre sabah uyanınca ilk olarak ne yaptı?",
          "options": [
            "Okula gitti",
            "Bahçeye çıktı",
            "Kitap okudu"
          ],
          "correctIndex": 1
        },
        {
          "question": "Emre toprağın altında ne buldu?",
          "options": [
            "Gümüş bir anahtar",
            "Küçük bir taş",
            "Altın bir yüzük"
          ],
          "correctIndex": 0
        },
        {
          "question": "Emre bulduğu anahtarla neyi açtı?",
          "options": [
            "Sandığı",
            "Çekmeceyi",
            "Eski tahta kapıyı"
          ],
          "correctIndex": 2
        },
        {
          "question": "Kapının arkasındaki bahçede ne vardı?",
          "options": [
            "Mavi güller ve kelebekler",
            "Büyük bir ev",
            "Oyuncaklar"
          ],
          "correctIndex": 0
        },
        {
          "question": "Emre gördüklerini nereye yazdı?",
          "options": [
            "Kitabına",
            "Duvara",
            "Defterine -----------------------------------------------------------------------------------------------------------------"
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "3-sinif-bulutlara-komsu-olan-cocuk",
      "title": "Bulutlara Komşu Olan Çocuk",
      "text": "Deniz, her akşam balkona çıkarak gökyüzünü izlemeyi çok severdi. Bulutların her biri ona farklı bir şekli anımsatırdı. Kimi zaman kocaman bir pamuk şekerine, kimi zaman da koşuşturan kuzulara bakıyormuş gibi hissederdi. Bir akşam, en parlak bulutun üzerinde minik bir ışığın yandığını fark etti. Sanki birisi ona yukarıdan el sallıyordu. Deniz, hemen odasına gidip büyük fenerini aldı ve ışığı buluta doğru tutup kapatmaya başladı. Bu onun gizli haberleşme yöntemiydi.\n\nErtesi sabah uyandığında başucunda bembeyaz ve yumuşacık bir tüy buldu. Bu tüy, sıradan bir kuşa ait olamazdı. Penceresini açtığında rüzgârın çok tatlı bir koku getirdiğini fark etti. O gün okulda hep o bulutu ve üzerindeki ışığı düşündü. Öğretmeni tahtaya resim yapmalarını istediğinde, Deniz hiç düşünmeden gökyüzünde yüzen bir ev çizdi. Evin damı bulutlardan, pencereleri ise yıldızlardandı.\n\nAkşam eve döndüğünde yine balkona koştu. Bu sefer bulutlar ona daha yakın görünüyordu. Deniz, hayallerinin peşinden gitmenin ne kadar eğlenceli olduğunu o gün bir kez daha anladı. Artık her gece yeni bir hikâye yazmak için gökyüzünün kapılarını aralıyordu. Onun için her bulut, içinde yeni bir macera saklayan gizemli bir adaydı.",
      "questions": [
        {
          "question": "Deniz akşamları balkona çıktığında en çok neyi yapmaktan keyif alırdı?",
          "options": [
            "Kitap okumaktan",
            "Gökyüzünü izlemekten",
            "Meyve yemekten"
          ],
          "correctIndex": 1
        },
        {
          "question": "Deniz, bulutun üzerindeki gizemli ışıkla haberleşmek için ne kullandı?",
          "options": [
            "Renkli bir fener",
            "Aynalı bir gözlük",
            "Kırmızı bir düdük"
          ],
          "correctIndex": 0
        },
        {
          "question": "Deniz uyandığında başucunda bulduğu bembeyaz tüy için ne düşündü?",
          "options": [
            "Yastığından koptuğunu",
            "Bahçedeki tavuğa ait olduğunu",
            "Sıradan bir kuşa ait olmadığını"
          ],
          "correctIndex": 2
        },
        {
          "question": "Öğretmeni resim yapmalarını isteyince Deniz kâğıda ne çizdi?",
          "options": [
            "Büyük bir yarış arabası",
            "Gökyüzünde yüzen bir ev",
            "Denizin altındaki balıklar"
          ],
          "correctIndex": 1
        },
        {
          "question": "Deniz için her bir bulut aslında neyi temsil ediyordu?",
          "options": [
            "Yağmurun yağacağını",
            "Uyunması gereken saati",
            "İçinde macera olan bir adayı"
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "3-sinif-kirmizi-kanatli-dostum",
      "title": "Kırmızı Kanatlı Dostum",
      "text": "Ali, o sabah pencerelerinden süzülen ılık bahar güneşiyle keyifle uyandı. Kuşların neşeli şarkıları adeta ona dışarıyı fısıldıyordu. Kahvaltısını hızla bitirip dedesinin geçen hafta hediye ettiği kıpkırmızı uçurtmasını kaptığı gibi bahçeye koştu. Bu uçurtma, Ali için sadece bir oyuncak değil; gökyüzünde süzülen kırmızı kanatlı bir dost gibiydi.\n\nHafiften esen rüzgârı arkasına alan Ali, ipi yavaşça gevşetti ve koşmaya başladı. Çok geçmeden uçurtma, masmavi gökyüzünde bir gelincik gibi dans etmeye başladı. Ancak rüzgâr bir anda hırçınlaştı ve uçurtmayı gökyüzünün derinliklerine doğru sertçe çekti. Ali ipi sıkıca kavrasa da \"çıt\" diye bir ses duyuldu. İp kopmuş, kırmızı dostu özgürlüğe kanat açmıştı. Ali’nin yüreği ağzına geldi; nefes nefese uçurtmanın peşinden koştu. Biraz ilerideki ihtiyar bir ağacın dallarına takılan uçurtmasını görünce derin bir nefes aldı. Onu incitmeden dalların arasından kurtardı. Eve dönerken, sevdiği şeyleri korumak için daha dikkatli olması gerektiğini anlamıştı.",
      "questions": [
        {
          "question": "Ali, sabah uyandığında dışarıdan gelen hangi sesi duyuyordu?",
          "options": [
            "Rüzgârın uğultusunu",
            "Kuşların şarkılarını",
            "Dedesinin sesini"
          ],
          "correctIndex": 1
        },
        {
          "question": "Metinde Ali'nin uçurtması neye benzetilmiştir?",
          "options": [
            "Mavi bir kuşa",
            "Parlayan bir yıldıza",
            "Kırmızı bir gelinciğe"
          ],
          "correctIndex": 2
        },
        {
          "question": "Ali'nin uçurtmasının ipi neden kopmuştur?",
          "options": [
            "Rüzgâr hırçınlaştığı için",
            "İp çok eski olduğu için",
            "Ali ipi bilerek bıraktığı için"
          ],
          "correctIndex": 0
        },
        {
          "question": "Uçurtma, gökyüzünde kaybolduktan sonra nerede bulunmuştur?",
          "options": [
            "Uzak bir evin çatısında",
            "İhtiyar bir ağacın dallarında",
            "Komşunun bahçesinde"
          ],
          "correctIndex": 1
        },
        {
          "question": "Ali, bu maceranın sonunda nasıl bir ders çıkarmıştır?",
          "options": [
            "Artık asla uçurtma uçurmamalıdır.",
            "Sadece rüzgârsız günlerde dışarı çıkmalıdır.",
            "Sevdiği şeyleri korumak için daha dikkatli olmalıdır."
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "3-sinif-kucuk-cam-agacinin-dilegi",
      "title": "Küçük Çam Ağacının Dileği",
      "text": "Yüksek dağların eteklerinde, diğer ağaçlardan biraz daha kısa olan küçük bir çam ağacı yaşardı. Bu küçük ağaç, kış gelince dallarının karla kaplanmasını çok seviyordu. Ancak bir derdi vardı; sonbaharda bütün arkadaşları yapraklarını döküp uykuya dalarken, o yemyeşil kalıyordu. Kendisini bazen yalnız hissediyordu. Bir gün ormana küçük bir tavşan ailesi geldi. Soğuktan korunmak için bir yuva arıyorlardı.\n\nKüçük çam ağacı, dallarını iyice yere doğru sarkıttı ve onlara sıcacık bir yuva hazırladı. Tavşanlar bu duruma çok sevindi. Kış boyunca çam ağacının dalları altında güvenle uyudular. Ağaç artık neden kışın yeşil kaldığını anlamıştı. O, ormandaki minik dostlarının koruyucusu olmuştu. Bahar geldiğinde diğer ağaçlar uyandı ve küçük çamı tebrik ettiler.\n\nÇünkü o, en zor mevsimde bile pes etmemiş ve doğaya yardım etmişti. Artık boyunun kısa olması onun için hiç önemli değildi. Kalbinin büyüklüğü ve yardımseverliği sayesinde ormanın en sevilen ağacı haline gelmişti. Her rüzgâr estiğinde dallarını neşeyle sallıyor ve ormana huzur veriyordu. Bu mutluluk, onun köklerini toprağa daha sıkı bağlamasını sağladı.",
      "questions": [
        {
          "question": "Küçük çam ağacı, kış mevsimi gelince en çok neyi seviyordu?",
          "options": [
            "Rüzgârın sesini dinlemeyi",
            "Dallarının karla kaplanmasını",
            "Meyvelerinin büyümesini"
          ],
          "correctIndex": 1
        },
        {
          "question": "Ormana gelen tavşan ailesi neden kendilerine bir yuva arıyordu?",
          "options": [
            "Soğuktan korunmak için",
            "Oyun oynamak için",
            "Yemek saklamak için"
          ],
          "correctIndex": 0
        },
        {
          "question": "Küçük çam ağacı, tavşanlara yuva yapmak için ne yaptı?",
          "options": [
            "Meyvelerini yere döktü",
            "Dallarını aşağıya sarkıttı",
            "Yapraklarını sarıya boyadı"
          ],
          "correctIndex": 1
        },
        {
          "question": "Bahar mevsimi geldiğinde ormandaki diğer ağaçlar ne yaptı?",
          "options": [
            "Küçük çamı tebrik ettiler",
            "Uzaklara göç ettiler",
            "Dallarıyla güneşi kapattılar"
          ],
          "correctIndex": 0
        },
        {
          "question": "Metnin sonuna göre, küçük çam ağacı neden ormanın en sevileni oldu?",
          "options": [
            "En uzun ağaç olduğu için",
            "Çok hızlı büyüdüğü için",
            "Yardımsever olduğu için"
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "3-sinif-muzedeki-konusan-tablo",
      "title": "Müzedeki Konuşan Tablo",
      "text": "Pelin, sınıf arkadaşlarıyla birlikte şehirdeki büyük resim müzesini ziyaret ediyordu. Duvarlarda kocaman ve renkli tablolar asılıydı. Her tablo farklı bir hikâye anlatıyor gibiydi. Pelin, koridorun sonunda duran küçük ve eski bir tablonun önünde durdu. Bu tabloda sadece yeşil bir orman ve gölün kenarında oturan beyaz bir kedi vardı. Pelin tabloya dikkatle bakarken, kedinin gözlerinin hareket ettiğini sandı. Bir an için kedinin ona gülümsediğini hissetti.\n\nHemen yanındaki arkadaşı Mert’i çağırdı ama Mert hiçbir şey fark etmedi. Pelin tabloya biraz daha yaklaştı. O sırada kulağına çok kısık bir ses geldi. Sanki biri \"Doğayı korursan, masallar hiç bitmez\" diyordu. Pelin bu sesin tablodaki beyaz kediden geldiğine emindi. Müzeden ayrılırken aklında hala o sihirli cümle vardı. Eve gidince hemen boya kalemlerini çıkardı ve kendi masal dünyasını kâğıda dökmeye başladı.\n\nO günden sonra Pelin, sadece bakmanın değil, görmenin ne kadar önemli olduğunu anladı. Çizdiği her resme minik bir sır gizledi. Belki bir gün başkaları da onun resimlerindeki gizli mesajları keşfederdi. Sanatın sadece boyalardan ibaret olmadığını, içinde kocaman bir ruh taşıdığını artık çok iyi biliyordu.",
      "questions": [
        {
          "question": "Pelin müzede hangi tablonun önünde durdu?",
          "options": [
            "Büyük ve altın çerçeveli bir tablonun",
            "Yeşil ormanlı ve beyaz kedili bir tablonun",
            "Sadece renkli çiçeklerin olduğu bir tablonun"
          ],
          "correctIndex": 1
        },
        {
          "question": "Pelin tablodaki kedinin ne yaptığını sandı?",
          "options": [
            "Miyavladığını",
            "Tablodan dışarı atladığını",
            "Gözlerinin hareket ettiğini ve gülümsediğini"
          ],
          "correctIndex": 2
        },
        {
          "question": "Tablodaki kedi Pelin’in kulağına ne fısıldadı?",
          "options": [
            "\"Resim yapmayı asla bırakma.\"",
            "\"Doğayı korursan, masallar hiç bitmez.\"",
            "\"Müzeyi gezmek çok eğlenceli.\""
          ],
          "correctIndex": 1
        },
        {
          "question": "Pelin müze ziyaretinden sonra eve gidince ne yaptı?",
          "options": [
            "Arkadaşlarını oyun oynamaya çağırdı.",
            "Hemen uykuya daldı.",
            "Kendi masal dünyasını çizmeye başladı."
          ],
          "correctIndex": 2
        },
        {
          "question": "Pelin bu olaydan sonra neyin önemli olduğunu anladı?",
          "options": [
            "Müzelere erken gitmenin",
            "Sadece bakmanın değil, görmenin",
            "Boya kalemlerini paylaşmanın"
          ],
          "correctIndex": 1
        }
      ]
    }
  ],
  "4-sinif": [
    {
      "id": "4-sinif-yesil-ada",
      "title": "Yeşil Ada",
      "text": "Arda o akşam çalışma masasına oturduğunda, penceresinden dışarıdaki gri binalara ve egzoz dumanı çıkaran arabalara baktı. Öğretmeni \"Gelecekte Bir Gün\" konulu bir ödev vermişti. Gözlerini kapatıp derin bir nefes aldı. Keşke dedi, her yer yemyeşil olsaydı! İşte \"Yeşil Ada\" hayali tam o an kalbinde kocaman bir çiçek gibi açtı.\n\nYeşil Ada’da sabahlar korna sesleriyle değil, binaların çatısındaki elma bahçelerinde şakıyan kuş sesleriyle başlıyordu. Bu şehirde devasa beton yığınları yerine, gökyüzüne uzanan dikey ormanlar vardı. İnsanlar işlerine güneş ışığıyla şarj olan ve rayların üzerinde adeta bir bulut gibi sessizce süzülen trenlerle gidiyordu. Kimse çevreyi kirletmiyor, her evin balkonu minik birer domates tarlasına benziyordu. Arda hayalinde sokaklarda dolaşırken, rüzgârın gücünü elektriğe çeviren dev papatya tasarımlı panelleri gördü. Bu şehir hem çok akıllı hem de doğaya aşıktı.\n\nŞehrin merkezinde ise kristal camdan yapılmış, çatısı ağaçlarla kaplı kocaman bir kütüphane yükseliyordu. Çocuklar burada dijital kitaplarını okurken, bir yandan da sincapların oyunlarını izleyebiliyordu. Arda yazısını bitirip noktasını koyduğunda gülümsedi. Belki bugün Yeşil Ada sadece bir kâğıt üzerindeydi ama doğayı seven çocukların ellerinde bir gün gerçek bir yuvaya dönüşebilirdi. Ertesi gün sınıfta arkadaşları onu alkışlarken, hepsi geleceği yeşertmek için birbirine söz verdi.",
      "questions": [
        {
          "question": "Arda, \"Yeşil Ada\" hayalini kurarken pencereden dışarı baktığında ne görmüştür?",
          "options": [
            "Büyük bir kütüphane ve parklar",
            "Gri binalar ve egzoz dumanları",
            "Gökyüzünde süzülen sessiz trenler",
            "Çatılarında meyve bahçesi olan evler"
          ],
          "correctIndex": 1
        },
        {
          "question": "Hikâyeye göre Yeşil Ada’da ulaşım hangi yöntemle sağlanmaktadır?",
          "options": [
            "Havada uçan büyük ve gürültülü jetlerle",
            "Kömürle çalışan ve duman çıkaran eski trenlerle",
            "Güneş enerjisiyle şarj olan sessiz trenlerle",
            "Her mahallenin kendine özel elektrikli bisikletleriyle"
          ],
          "correctIndex": 2
        },
        {
          "question": "Yeşil Ada’daki binaların çatısında ne gibi bir farklılık vardır?",
          "options": [
            "Güneşten korunmak için dev şemsiyeler bulunmaktadır.",
            "Kuşların şarkı söylediği elma bahçeleri vardır.",
            "Çocukların oyun oynaması için büyük havuzlar bulunur.",
            "Sadece televizyon antenleri ve rüzgâr panelleri vardır."
          ],
          "correctIndex": 1
        },
        {
          "question": "Şehrin merkezindeki kütüphanenin özelliği aşağıdakilerden hangisidir?",
          "options": [
            "Kristal camdan yapılması ve çatısının ağaçlarla kaplı olması",
            "Şehrin en eski ve en karanlık binası olması",
            "Sadece öğretmenlerin girmesine izin verilen bir yer olması",
            "İçinde sadece kâğıttan yapılmış eski kitapların bulunması"
          ],
          "correctIndex": 0
        },
        {
          "question": "Arda’nın bu yazıyı bitirdikten sonra vardığı sonuç nedir?",
          "options": [
            "Gelecekte yaşamanın çok korkutucu olduğu",
            "Ödevini bitirdiği için artık oyun oynayabileceği",
            "Doğayı koruyarak bu hayali gerçeğe dönüştürebilecekleri",
            "Yazdığı kompozisyonun sınıfta birinci seçileceği"
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "4-sinif-kucuk-ressamin-gizli-fircasi",
      "title": "Küçük Ressamın Gizli Fırçası",
      "text": "Okulun çok amaçlı salonunda büyük bir resim sergisi hazırlığı vardı. 4-A sınıfından Kerem, günlerdir üzerinde çalıştığı \"Deniz Altı Dünyası\" resmini tamamlamak için masasına oturdu. Ancak bir sorun vardı; en önemli rengi olan deniz mavisi boyası bitmişti! Kerem üzüntüyle etrafına bakındı. Eğer denizi boyayamazsa, çizdiği rengarenk balıklar sanki havada asılı kalacak gibiydi.\n\nO sırada yan masada çalışan Zeynep, Kerem’in moralinin bozulduğunu fark etti. Zeynep’in elinde kocaman, yepyeni bir tüp mavi boya vardı. Hiç düşünmeden boyasını Kerem’e uzattı ve \"Al bakalım Kerem, benim resmimde gökyüzü bitti, bu mavilik senin denizine çok yakışacak,\" dedi. Kerem’in gözleri parladı. Arkadaşının bu nazik hareketi ona sadece bir boya değil, büyük bir çalışma sevinci de vermişti.\n\nBirlikte boyamaya devam ettiler. Kerem denizini, Zeynep ise bahçesindeki çiçekleri bitirdi. Sergi günü geldiğinde, öğretmenleri panonun önünde durup gülümsedi. \"Çocuklar,\" dedi, \"bu resimlerdeki renkler çok güzel ama asıl parlayan şey, birbirinize yardım ederken yüzünüzde oluşan o gülümseme.\" Kerem o gün şunu anlattı: Bir resmi güzelleştiren sadece boyalar değil, paylaşılan dostluklardı. Artık her fırça darbesinde, arkadaşlığın o sihirli gücünü hatırlıyordu.",
      "questions": [
        {
          "question": "Kerem resmini tamamlarken nasıl bir sorunla karşılaşmıştır?",
          "options": [
            "Resim kağıdını evde unuttuğu için boyayamamıştır.",
            "En sevdiği fırçası resim yaparken kırılmıştır.",
            "Denizi boyamak için gerekli olan mavi boyası bitmiştir.",
            "Resmindeki balıkları istediği gibi çizememiştir."
          ],
          "correctIndex": 2
        },
        {
          "question": "Zeynep, Kerem’in üzüldüğünü görünce nasıl bir davranış sergilemiştir?",
          "options": [
            "Kendi resmini bitirmek için acele etmiştir.",
            "Elindeki mavi boyayı Kerem ile paylaşmıştır.",
            "Kerem’e yeni bir boya alması için para vermiştir.",
            "Öğretmenden Kerem için yardım istemiştir."
          ],
          "correctIndex": 1
        },
        {
          "question": "Öğretmen sergi gününde resimlerdeki hangi detayın daha önemli olduğunu vurgulamıştır?",
          "options": [
            "Resimlerde kullanılan boyaların çok pahalı olmasını.",
            "Balıkların ve çiçeklerin çok gerçekçi görünmesini.",
            "Resimlerin çok büyük panolara asılmış olmasını.",
            "Öğrencilerin yardımlaşırken hissettikleri mutluluğu."
          ],
          "correctIndex": 3
        },
        {
          "question": "Hikâyeye göre Kerem, sergi bittikten sonra neyi fark etmiştir?",
          "options": [
            "Resim yapmanın çok yorucu bir iş olduğunu.",
            "İyi bir resim için sadece çok boya gerektiğini.",
            "Paylaşılan dostluğun resimleri daha da güzelleştirdiğini.",
            "Bir sonraki sergiye daha büyük bir kâğıt getirmesi gerektiğini."
          ],
          "correctIndex": 2
        },
        {
          "question": "Bu metnin ana fikri aşağıdakilerden hangisidir?",
          "options": [
            "Resim yapmak için her zaman çok fazla renge ihtiyaç vardır.",
            "Yardımlaşmak ve paylaşmak işleri kolaylaştırır ve güzelleştirir.",
            "Sadece okulda yapılan sergilerde başarılı olunabilir.",
            "Resim yapmak için mutlaka bir öğretmenden yardım almalıyız."
          ],
          "correctIndex": 1
        }
      ]
    },
    {
      "id": "4-sinif-bahcedeki-gizemli-izler",
      "title": "Bahçedeki Gizemli İzler",
      "text": "Perşembe günü sabah erkenden okula gelmiştik. Hava biraz serindi ama bahçede oynamak için engel değildi. Bizim sınıfın çocukları her zamanki gibi kaleye geçme kavgası yaparken, Mert aniden durdu. \"Hey, şuraya bakın!\" diye bağırdı. Kantinin hemen arkasındaki yumuşak toprakta çok tuhaf izler vardı. Hepimiz oyunun ortasında Mert'in yanına koştuk.\n\nİzler ne kediye benziyordu ne de köpeğe. Biraz büyüktü ve parmak araları sanki ince bir deriyle birleşmiş gibi duruyordu. Arda hemen cebinden büyüteç gibi kullandığı eski bir gözlük camını çıkardı. İzleri dikkatle inceleyip, \"Bence bu kesinlikle dev bir kaplumbağanın ayak izi,\" dedi ciddiyetle. Hepimiz kahkahalarla gülmeye başladık. Okulun bahçesinde dev bir kaplumbağanın ne işi olabilirdi ki?\n\nO sırada nöbetçi öğretmenimiz Selin Hanım yanımıza geldi. Meraklı kalabalığı görünce eğilip yerdeki izlere baktı ve gülümsedi. \"Çocuklar, boşuna heyecanlanmayın. Bunlar akşam yağan yağmurda çamur olan toprağa basan bir ördeğin izleri,\" dedi. Meğer komşu bahçedeki ördek gece bizim okula misafirliğe gelmiş. Mert biraz bozuldu ama sonra hepimiz bu komik maceraya çok güldük. Bazen en büyük gizemlerin cevabı aslında çok basit olabiliyordu. O gün derse girmeden önce bahçede her yerde o ördeği aradık ama misafirimiz çoktan gitmişti.",
      "questions": [
        {
          "question": "Hikayedeki olaylar hangi gün ve ne zaman yaşanmaktadır?",
          "options": [
            "Pazartesi günü okul çıkışında",
            "Perşembe günü sabah saatlerinde",
            "Salı günü öğle yemeği arasında",
            "Cumartesi günü kurs vaktinde"
          ],
          "correctIndex": 1
        },
        {
          "question": "Mert’in bahçede bulduğu ve arkadaşlarını heyecanlandıran şey nedir?",
          "options": [
            "Kantinin arkasında bulduğu eski bir para",
            "Ağaçtan düşmüş yaralı bir kuş",
            "Yumuşak toprağın üzerindeki tuhaf izler",
            "Okulun duvarına çizilmiş gizemli resimler"
          ],
          "correctIndex": 2
        },
        {
          "question": "Arda, izlerin kime ait olduğuyla ilgili nasıl bir tahminde bulunmuştur?",
          "options": [
            "Komşunun küçük köpeğine ait olduğunu söylemiştir.",
            "Dev bir kaplumbağanın ayak izi olduğunu iddia etmiştir.",
            "Ormandan kaçan bir tavşanın izi olduğunu düşünmüştür.",
            "Okulun kedisi Pamuk’un izleri olduğunu sanmıştır."
          ],
          "correctIndex": 1
        },
        {
          "question": "Selin Öğretmen, izlerin gerçek sahibinin kim olduğunu açıklamıştır?",
          "options": [
            "Yağmurda ıslanan ve bahçeye giren bir ördek",
            "Sabah bahçeyi sulayan okul görevlisi",
            "Çamurda oyun oynayan birinci sınıf öğrencileri",
            "Bahçeye yeni dikilen çiçeklerin gölgeleri"
          ],
          "correctIndex": 0
        },
        {
          "question": "Hikâyenin sonunda çocuklar ne hissetmiş ve ne yapmışlardır?",
          "options": [
            "Korkmuşlar ve hemen sınıflarına kaçmışlardır.",
            "Kaplumbağa bulamadıkları için Arda'ya küsmüşlerdir.",
            "Duruma gülmüşler ve bahçede ördeği aramışlardır.",
            "Selin Öğretmen'e inanmayıp araştırmaya devam etmişlerdir."
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "4-sinif-gokyuzundeki-dev-peynir",
      "title": "Gökyüzündeki Dev Peynir",
      "text": "Salı akşamı bizim sitenin bahçesinde tam bir hareketlilik vardı. Elif, babasının hediye ettiği teleskobu bahçenin tam ortasına kurmuştu. Bizim sınıftaki herkes sırayla gökyüzüne bakmak için kuyruğa girmişti. O gece gökyüzünde ışıl ışıl parlayan, dev bir portakalı andıran dolunay vardı.\n\nSıra Mert’e geldiğinde teleskoptan içeri uzun uzun baktı. Birden, \"Hey, çocuklar inanmayacaksınız ama Ay’ın üzerinde gerçekten delikler var!\" diye bağırdı. Arda hemen atıldı: \"Tabii ki olacak Mert, orası dev bir peynir kalıbı gibi değil mi zaten?\" Hepimiz bu şakaya kahkahalarla güldük. Elif, bir bilim insanı edasıyla araya girdi ve o deliklerin aslında gök taşlarının çarpmasıyla oluşan kraterler olduğunu anlattı.\n\nO sırada yanımıza gelen Fen Bilimleri öğretmenimiz Hakan Bey, teleskobu biraz daha netleştirdi. Bize Ay’ın yüzeyindeki karanlık bölgelerin aslında eski lav ovaları olduğunu söyledi. O gece sadece gökyüzüne bakmadık, sanki Ay’ın üzerinde küçük bir yürüyüşe çıktık. Eve dönerken hepimiz boynumuz tutulana kadar gökyüzünü izlemeye devam ettik. Belki bir peynir değildi ama Ay, o gece bizim için dünyanın en heyecan verici yeriydi.",
      "questions": [
        {
          "question": "Çocukların bahçede toplanmasının asıl sebebi nedir?",
          "options": [
            "Mahalleler arası bir futbol maçı yapmak",
            "Elif'in teleskobuyla gökyüzünü incelemek",
            "Bahçede kamp kurup ateş yakmak",
            "Fen Bilimleri ödevi için deney yapmak"
          ],
          "correctIndex": 1
        },
        {
          "question": "Mert, teleskopla Ay'a baktığında ne fark etmiştir?",
          "options": [
            "Ay'ın üzerinde yürüyen astronotları",
            "Ay'ın aslında kare şeklinde olduğunu",
            "Ay'ın yüzeyindeki büyük delikleri",
            "Gökyüzünde hızla kayan bir yıldızı"
          ],
          "correctIndex": 2
        },
        {
          "question": "Elif, Ay'daki deliklerin gerçekte ne olduğunu açıklamıştır?",
          "options": [
            "Dev peynir kalıbındaki hava boşlukları",
            "Gök taşlarının çarpmasıyla oluşan kraterler",
            "Uzaylıların açtığı derin tüneller",
            "Eski zamanlardan kalma sönmüş yanardağlar"
          ],
          "correctIndex": 1
        },
        {
          "question": "Hakan Öğretmen, Ay'daki karanlık bölgeler hakkında ne demiştir?",
          "options": [
            "O bölgelerin çok derin denizler olduğunu",
            "Ay'ın gölgesinin oraya düştüğünü",
            "Eski lav ovaları olduklarını",
            "Bulutların Ay'ın önünü kapattığını"
          ],
          "correctIndex": 2
        },
        {
          "question": "Hikâyenin sonunda çocukların eve dönerken hissettiği duygu nedir?",
          "options": [
            "Uykuları geldiği için duydukları huzursuzluk",
            "Ay'ın peynir olmadığını öğrendikleri için hayal kırıklığı",
            "Gökyüzüne karşı duydukları büyük bir merak ve heyecan",
            "Ödevlerini bitiremedikleri için hissettikleri endişe"
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "4-sinif-robotik-yarismanin-gizli-kahramani",
      "title": "Robotik Yarışmanın Gizli Kahramanı",
      "text": "Okulun spor salonu hiç bu kadar kalabalık olmamıştı. Her yerden sesler geliyor, küçük robotlar pistte birbirleriyle yarışıyordu. Bizim 4-A sınıfının robotu \"Şimşek\", son turda birden yavaşladı. Selin ve Can telaşla robotun yanına çömeldi. Şimşek’in tekerleğine küçük bir kâğıt parçası sıkışmıştı.\n\n\"Eyvah, zamanımız bitiyor!\" dedi Can. O sırada rakip takım olan 4-B'den Kerem yanlarına yaklaştı. Kerem’in elinde ince bir cımbız vardı. \"İsterseniz şununla hemen çıkarabiliriz,\" diyerek cımbızı uzattı. Selin şaşırmıştı; çünkü Keremler aslında bizim rakibimizdi. Selin hızlıca kâğıdı çıkardı ve Şimşek tekrar vızıldayarak hareket etmeye başladı. Yarışın sonunda kupayı Keremlerin takımı kazandı ama herkes Selin ve Kerem'in el sıkışmasını alkışlıyordu.\n\nOkul müdürümüz ödül töreninde çok güzel bir konuşma yaptı. \"Bugün burada sadece robotlar yarışmadı,\" dedi. \"Aynı zamanda arkadaşlık ve centilmenlik kazandı.\" Kerem kupayı havaya kaldırırken Selin’e göz kırptı. Şimşek yarışı kazanamamıştı ama biz o gün bir kupadan çok daha değerli bir şey kazanmıştık. Yarışma bitip herkes dağıldığında, robotların pillerinden çok bizim dostluğumuzun enerjisi konuşuluyordu.",
      "questions": [
        {
          "question": "Okulun spor salonundaki hareketliliğin sebebi nedir?",
          "options": [
            "Okullar arası basketbol turnuvası yapılması",
            "Robotların yarıştığı teknoloji etkinliği",
            "Yıl sonu için düzenlenen kermes hazırlığı",
            "Okulun yeni müzik grubunun konseri"
          ],
          "correctIndex": 1
        },
        {
          "question": "4-A sınıfının robotu \"Şimşek\" neden aniden yavaşlamıştır?",
          "options": [
            "Pilinin bitmesi nedeniyle gücü tükenmiştir.",
            "Pistin dışına çıkıp duvara çarpmıştır.",
            "Tekerleğine küçük bir kâğıt parçası sıkışmıştır.",
            "Uzaktan kumandası bozulup komut almamıştır."
          ],
          "correctIndex": 2
        },
        {
          "question": "Kerem'in rakip takıma yardım etmesi nasıl bir davranıştır?",
          "options": [
            "Yarışı kaybetmek istediğini gösterir.",
            "Kendi robotunu bozmaya çalıştığını gösterir.",
            "Centilmen ve yardımsever olduğunu gösterir.",
            "Kuralları ihlal edip diskalifiye olduğunu gösterir."
          ],
          "correctIndex": 2
        },
        {
          "question": "Okul müdürü ödül töreninde asıl neyin kazandığını vurgulamıştır?",
          "options": [
            "En hızlı giden robotun ve teknolojinin",
            "En büyük kupayı alan okulun başarısının",
            "Arkadaşlığın ve centilmenliğin öneminin",
            "Gelecekte robotların her işi yapacağının"
          ],
          "correctIndex": 0
        },
        {
          "question": "Hikâyenin sonunda Selin ve arkadaşlarının asıl kazancı nedir?",
          "options": [
            "Yarışmada birincilik kupasını almaları",
            "Robotlarını daha hızlı tamir etmeyi öğrenmeleri",
            "Kupadan daha değerli olan gerçek bir dostluk",
            "Gelecek yılki yarışma için aldıkları yeni piller"
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "4-sinif-gokyuzundeki-muhtesem-sergi-auroralar",
      "title": "Gökyüzündeki Muhteşem Sergi: Auroralar",
      "text": "Çevremize baktığımızda dünyamızın ne kadar eşsiz bir düzen içinde olduğunu görebiliriz. Kış boyunca kupkuru görünen ağaçların bahar gelince rengarenk çiçeklerle uyanması, dev şelalelerin yorulmadan akması ve ormanların tertemiz bir hava sunması bu harika düzenin birer parçasıdır. Ancak yeryüzünde öyle bir olay var ki, onu izleyenler hayranlığını gizleyemiyor: Kutup Işıkları!\n\nÖzellikle Aralık ve mart ayları arasında gökyüzünü süsleyen bu ışıklar, Şubat ayında adeta görsel bir şölene dönüşüyor. Gökyüzünde yeşil, pembe ve mavi renklerin birbirine karışarak ağır ağır hareket ettiğini düşünün. Bilim insanları bu göz kamaştırıcı ışıklara \"Aurora\" adını vermişler. Aslında bu kelime Latincede \"şafak\" anlamına geliyor. Bu ismi ilk kez 1600'lü yıllarda yaşamış olan matematikçi Pierre Gassendi kullanmış.\n\nPeki, bu renkli gökyüzü sergisini her yerden görebilir miyiz? Ne yazık ki hayır. Bu muhteşem manzarayı izlemek için kutup bölgelerine gitmek gerekiyor. Eğer Kuzey Kutbu’ndaysanız bu ışıklara \"Aurora Borealis\", Güney Kutbu’ndaysanız \"Aurora Australis\" deniliyor. Bizler ise onları daha çok \"Kuzey Işıkları\" olarak tanıyoruz. Gökyüzündeki bu harika renk oyunlarını bir gün yerinde görmek, unutulmaz bir deneyim olurdu.",
      "questions": [
        {
          "question": "Metne göre kışın kuruyan ağaçların baharda çiçek açması neyin bir örneğidir?",
          "options": [
            "Dünyadaki kirliliğin arttığının",
            "Doğadaki mükemmel ve eşsiz düzenin",
            "Ağaçların susuz kaldığının",
            "Mevsimlerin artık değişmediğinin"
          ],
          "correctIndex": 1
        },
        {
          "question": "\"Aurora\" isminin Latince anlamı aşağıdakilerden hangisidir?",
          "options": [
            "Gece ışığı",
            "Şafak vakti",
            "Yıldız kümesi",
            "Renkli kuş"
          ],
          "correctIndex": 1
        },
        {
          "question": "Gökyüzündeki bu ışıklı gösteri hangi ayda en yoğun şekilde izlenebilir?",
          "options": [
            "Ağustos",
            "Ekim",
            "Şubat",
            "Haziran"
          ],
          "correctIndex": 2
        },
        {
          "question": "Güney Kutbu'nda görülen ışıklara verilen özel isim nedir?",
          "options": [
            "Aurora Borealis",
            "Aurora Australis",
            "Kuzey Feneri",
            "Gökkuşağı Kuşağı"
          ],
          "correctIndex": 1
        },
        {
          "question": "Pierre Gassendi hangi alanda çalışmalar yapmış bir bilim insanıdır?",
          "options": [
            "Müzik",
            "Tıp",
            "Matematik",
            "Resim"
          ],
          "correctIndex": 2
        }
      ]
    }
  ],
  "5-6-sinif": [
    {
      "id": "orta-marstaki-tozlu-bilmece",
      "title": "Mars’taki Tozlu Bilmece",
      "text": "2045 yılının serin bir Ekim sabahında, Mars yüzeyindeki \"Kızıl Vadi\" istasyonunda büyük bir heyecan yaşanıyordu. Genç astronot adayı Selin, istasyonun dev camlarından dışarıdaki uçsuz bucaksız kızıl toz bulutlarını izliyordu. O gün, Mars yüzeyinden toplanan özel kaya örneklerinin analiz sonuçları açıklanacaktı. Selin ve ekibi, bu örneklerin içinde milyarlarca yıl öncesine ait bir su izi bulmayı umuyordu. Ancak sabah yapılan ilk incelemede, örneklerin bulunduğu bölmede beklenmedik bir durumla karşılaşıldı.\n\nKaya örneklerinin üzerinde, doğal yollarla oluşması imkânsız görünen, birbirine paralel çok ince çizgiler vardı. Ekip lideri Dr. Aras, \"Bu çizgiler rüzgâr aşınmasına benzemiyor, sanki birisi bu kayaları bilinçli bir şekilde işaretlemiş gibi,\" dediğinde odadaki herkes birbirine baktı. Selin, bu gizemi çözmek için numuneleri yüksek çözünürlüklü mikroskop altında incelemeye karar verdi. Saatler süren titiz çalışmanın sonunda Selin, çizgilerin aslında kristalleşmiş buz parçacıkları olduğunu fark etti. Mars’ın sert rüzgarları, kaya çatlaklarına dolan buzu adeta bir sanatçı gibi yontarak bu geometrik şekilleri oluşturmuştu.\n\nBu keşif, Mars’ta sanıldığı gibi \"yeşil adamlar\" olduğunu kanıtlamıyordu ama çok daha değerli bir şeyi müjdeliyordu: Mars’ın derinliklerinde hala donmuş halde su kaynakları vardı. Selin, o an bir bilim insanı için en büyük ödülün, karmaşık görünen bir sorunun altındaki sade gerçeği bulmak olduğunu anladı. Akşam raporunu yazarken günlüğüne şu notu düştü: \"Evren, meraklı zihinlere her zaman bir ipucu bırakır; önemli olan o ipucunu takip edecek sabra sahip olmaktır.\"",
      "questions": [
        {
          "question": "Metne göre \"Kızıl Vadi\" istasyonundaki ekibin asıl araştırma amacı nedir?",
          "options": [
            "Mars yüzeyinde tarım yapılabilecek alanlar bulmak",
            "Mars’ta yaşayan canlı türlerini fotoğraflamak",
            "Kaya örneklerinde geçmişe dair su izlerini araştırmak",
            "Kızıl gezegendeki toz fırtınalarının yönünü değiştirmek"
          ],
          "correctIndex": 2
        },
        {
          "question": "Dr. Aras'ın kaya örnekleri üzerindeki çizgileri gördüğünde verdiği ilk tepki aşağıdakilerden hangisidir?",
          "options": [
            "Çizgilerin şiddetli rüzgarlar nedeniyle oluştuğunu hemen anlamıştır.",
            "Çizgilerin bilinçli bir müdahale sonucu oluşmuş olabileceğini düşünmüştür.",
            "Deneyin başarısız olduğunu düşünerek numuneleri çöpe atmıştır.",
            "Bu çizgilerin Mars’taki volkanik patlamalarla oluştuğunu söylemiştir."
          ],
          "correctIndex": 1
        },
        {
          "question": "Selin'in yaptığı mikroskobik inceleme sonucunda ortaya çıkan gerçek nedir?",
          "options": [
            "Çizgilerin, Marslı canlılar tarafından kazınmış bir harita olduğu",
            "Kaya örneklerinin aslında Dünya'dan yanlışlıkla getirildiği",
            "Çizgilerin, rüzgârın buz parçacıklarını yontmasıyla oluşan doğal şekiller olduğu",
            "Kayaların içinde çok değerli elmas madenlerinin bulunduğu"
          ],
          "correctIndex": 2
        },
        {
          "question": "Bu keşfin bilim dünyası için taşıdığı en büyük önem aşağıdakilerden hangisidir?",
          "options": [
            "Mars'ta hayat olduğu kesin olarak kanıtlanmıştır.",
            "Gezegenin derinliklerinde hala su kaynakları olduğuna dair güçlü bir kanıt sunmasıdır.",
            "Selin'in dünyanın en ünlü astronotu seçilmesini sağlamasıdır.",
            "Mars yüzeyindeki tüm toz bulutlarının yok olacağını göstermesidir."
          ],
          "correctIndex": 1
        },
        {
          "question": "Metnin sonundaki \"Evren, meraklı zihinlere her zaman bir ipucu bırakır\" sözüyle anlatılmak istenen nedir?",
          "options": [
            "Bilimsel gerçeklerin her zaman çok kolay ve hızlıca bulunduğu",
            "Merak eden ve pes etmeyen insanların doğadaki gizemleri çözebileceği",
            "Evrenin aslında çözülemeyecek kadar karmaşık bir yer olduğu",
            "Uzay araştırmalarının sadece çok zeki insanlar için uygun olduğu"
          ],
          "correctIndex": 1
        }
      ]
    },
    {
      "id": "orta-topragin-altindaki-sakli-sehir",
      "title": "Toprağın Altındaki Saklı Şehir",
      "text": "Güneş, Şanlıurfa’nın sarı sıcak tepeleri üzerine veda etmeye hazırlanırken, Arkeolog Mert Bey elindeki ince fırçayla toprağı adeta bir nakkaş titizliğiyle kazıyordu. Yanında staj yapan üniversite öğrencisi Selim, heyecanla sordu: \"Hocam, binlerce yıl öncesinden kalan bu taşlar bize gerçekten ne anlatabilir ki?\" Mert Bey durdu, alnındaki teri sildi ve uzaklara, Göbeklitepe’nin devasa dikili taşlarına bakarak gülümsedi. \"Evlat,\" dedi, \"bu taşlar sadece dilsiz birer kaya parçası değil; onlar insanlığın ilk cümlesidir.\"\n\nSelim, toprağın içinden yavaşça gün yüzüne çıkan aslan ve turna kabartmalarını gördüğünde büyülenmiş gibiydi. O güne kadar tarih kitaplarında insanların yerleşik hayata tarımla geçtiğini okumuştu. Ancak burası, o bildiği tüm kuralları altüst ediyordu. Mert Bey, Selim’in şaşkınlığını görünce anlatmaya devam etti: \"Bak Selim, burada insanlar henüz buğday ekmeyi bile bilmiyorken, devasa tapınaklar inşa edip bir araya gelmişler. Yani bizi bir arada tutan şey sadece karın doyurmak değil, ortak bir inanç ve merak duygusuydu.\"\n\nO akşam kamp ateşinin başında otururken Selim, Anadolu’nun sadece bir toprak parçası değil, katman katman dizilmiş bir hatıra defteri olduğunu anladı. Her kazılan çukur, geçmişten gelen bir mektubu açmak gibiydi. Mert Bey, Selim’in günlüğüne şu notu düşmesini istedi: \"Tarih, sadece geçmişte ne olduğunu bilmek değil; bugün kim olduğumuzu anlamaktır.\" Selim, ertesi sabah işine daha büyük bir aşkla sarıldı. Çünkü artık biliyordu ki, bastığı her adımın altında binlerce yıllık bir selam gizliydi.",
      "questions": [
        {
          "question": "Metinde geçen \"bu taşlar insanlığın ilk cümlesidir\" ifadesiyle Mert Bey asıl neyi vurgulamak istemiştir?",
          "options": [
            "Taşların üzerine yazı yazmanın çok zor bir sanat olduğunu",
            "Göbeklitepe’deki buluntuların insanlık tarihinin başlangıcına dair önemli bilgiler taşıdığını",
            "Eskiden insanların sadece taşları kullanarak iletişim kurduğunu",
            "Arkeolojik kazıların sadece taş binaları bulmak için yapıldığını"
          ],
          "correctIndex": 1
        },
        {
          "question": "Selim’in Göbeklitepe’deki bulgular karşısında şaşırmasının temel sebebi aşağıdakilerden hangisidir?",
          "options": [
            "Kazı alanında çok fazla vahşi hayvan figürüne rastlanması",
            "Bölgenin ikliminin beklediğinden çok daha sıcak olması",
            "Tarih kitaplarında okuduğu \"önce tarım, sonra yerleşik hayat\" bilgisinin burada değişmesi",
            "Mert Bey’in kazı çalışmalarını çok yavaş ilerletmesi"
          ],
          "correctIndex": 2
        },
        {
          "question": "Mert Bey’e göre, insanları binlerce yıl önce bir araya getiren asıl güç nedir?",
          "options": [
            "Tarım yaparak daha fazla yiyecek elde etme isteği",
            "Savaşlardan korunmak için kale inşa etme ihtiyacı",
            "Ortak inançlar ve merak duygusu etrafında toplanma isteği",
            "Ticaret yaparak zenginleşme düşüncesi"
          ],
          "correctIndex": 2
        },
        {
          "question": "Metnin ana fikri aşağıdakilerden hangisidir?",
          "options": [
            "Arkeolojik kazılar çok sabır ve dikkat gerektiren zorlu bir iştir.",
            "Şanlıurfa, iklimi nedeniyle tarih boyunca birçok medeniyete ev sahipliği yapmıştır.",
            "Tarihsel mirasımızı anlamak, bugünkü kimliğimizi ve insanlığın yolculuğunu kavramamızı sağlar.",
            "Eski insanlar hayvan figürlerini taşlara işleyerek avcılık yeteneklerini geliştirmişlerdir."
          ],
          "correctIndex": 2
        },
        {
          "question": "Metnin anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
          "options": [
            "Kişileştirme ve benzetme gibi söz sanatlarından yararlanılmıştır.",
            "Bir olay örgüsü içerisinde bilgilendirici unsurlara yer verilmiştir.",
            "Karşılıklı konuşma (diyalog) tekniği kullanılarak anlatım zenginleştirilmiştir.",
            "Tamamen nesnel veriler kullanılarak bilimsel bir rapor diliyle yazılmıştır."
          ],
          "correctIndex": 3
        }
      ]
    },
    {
      "id": "orta-dunyanin-baris-abisi",
      "title": "Dünyanın \"Barış\" Abisi",
      "text": "İstanbul’un soğuk bir Ocak gününde, 1943 yılında dünyaya gözlerini açtığında, ailesi ona çok anlamlı bir isim verdi: Mehmet Barış. O yıllarda dünya büyük bir savaşın içindeydi ve ailesi onun isminin, tüm dünyaya huzur getirmesini dilemişti. Küçük Barış, daha o günlerde isminin ağırlığını omuzlarında taşıyacağını kanıtlarcasına müziğe sevdalandı. Ancak onun müziği sadece notalardan değil; sevgiden, dürüstlükten ve nezaketten oluşacaktı.\n\nMüzik kariyerine Galatasaray Lisesi sıralarında başlayan Barış Manço, sadece bir şarkıcı değil; aynı zamanda bir kültür elçisiydi. Uzun saçları, parmaklarını dolduran ilginç yüzükleri ve peleriniyle sahneye çıktığında herkes şaşırıyordu. O, Anadolu’nun derin türkülerini modern tınılarla birleştirerek \"Barış Rock\" tarzını oluşturmuştu. Ancak onu çocukların kalbinde ölümsüz kılan asıl şey, \"7’den 77’ye\" programı oldu. Dünyanın en uzak köşelerine gidiyor, oradaki çocuklarla sohbet ediyor ve bize kocaman bir dünya ailesi olduğumuzu hatırlatıyordu.\n\nBarış Manço, hayatı boyunca 150’den fazla beste yaptı ve birçok ödül kazandı. Ama onun en büyük koleksiyonu, çocukların ona duyduğu sevgiydi. Domates, biber, patlıcanı bile bir şarkıya dönüştürecek kadar yaratıcıydı. 1999 yılında aramızdan ayrıldığında geride sadece plaklar değil; \"adam olacak çocuklara\" verilmiş binlerce öğüt bıraktı. Bugün hala onun şarkılarıyla büyüyoruz çünkü Barış Abi, bize dürüst bir insan olmanın her türlü şöhretten daha önemli olduğunu öğretti.",
      "questions": [
        {
          "question": "Metinde Barış Manço’nun isminin veriliş hikâyesiyle ilgili hangi bilgiye yer verilmiştir?",
          "options": [
            "Müziğe olan yeteneğinin daha bebekken fark edilmesine",
            "Dünyadaki savaş ortamında ailesinin barışa duyduğu özleme",
            "Aile büyüklerinden birinin vasiyeti üzerine bu ismin seçilmesine",
            "Okul hayatında çok başarılı olacağı düşünüldüğü için verilmesine"
          ],
          "correctIndex": 1
        },
        {
          "question": "Barış Manço’nun müzik tarzıyla ilgili aşağıdakilerden hangisi söylenebilir?",
          "options": [
            "Sadece batı müziği enstrümanlarını kullanarak şarkılar yapmıştır.",
            "Klasik Türk müziğini olduğu gibi koruyarak modernliğe karşı çıkmıştır.",
            "Anadolu’nun yerel kültürünü modern müzik anlayışıyla harmanlamıştır.",
            "Şarkılarını sadece yabancı dillerde besteleyerek dünyaya açılmıştır."
          ],
          "correctIndex": 2
        },
        {
          "question": "Metne göre Barış Manço’yu çocuklar için \"ölümsüz\" kılan asıl çalışma hangisidir?",
          "options": [
            "Galatasaray Lisesi’nde müzik grubunu kurması",
            "Parmaklarındaki ilginç yüzükleri ve uzun saçları",
            "\"7’den 77’ye\" programıyla çocuklara ve farklı kültürlere dokunması",
            "Kazandığı uluslararası ödüller ve şöhreti"
          ],
          "correctIndex": 2
        },
        {
          "question": "Barış Manço’nun hayat felsefesiyle ilgili metinden çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?",
          "options": [
            "İyi bir sanatçı olabilmek için mutlaka yurt dışına gidilmelidir.",
            "Şöhret sahibi olmak, topluma karşı olan sorumlulukları azaltır.",
            "İnsanları birleştiren asıl bağ, dürüstlük, sevgi ve kültürel paylaşımdır.",
            "Yaratıcılık, sadece karmaşık ve zor konularda şarkı yapmaktır."
          ],
          "correctIndex": 2
        },
        {
          "question": "Bir biyografi metni olarak değerlendirildiğinde, bu yazının dili için ne söylenebilir?",
          "options": [
            "Sadece sayısal verilerin paylaşıldığı, soğuk bir rapor dili kullanılmıştır.",
            "Hayali olaylara dayanan, masalsı bir anlatım tercih edilmiştir.",
            "Öyküleyici ve betimleyici unsurlarla zenginleştirilmiş, samimi bir anlatım vardır.",
            "Kahramanın sadece olumsuz özelliklerinin anlatıldığı bir eleştiri yazısıdır."
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "orta-menzili-dunya-olan-yildiz-arda-guler",
      "title": "Menzili Dünya Olan Yıldız: Arda Güler",
      "text": "Türk futbolunun son yıllarda yetiştirdiği en parlak cevher olan Arda Güler'in hikâyesi, 2005 yılında Ankara’nın disiplinli futbol okulu olan Gençlerbirliği’nde filizlendi. Henüz dokuz yaşındayken yeşil sahada sergilediği zekâ, onun sadece bir futbolcu değil, sahada bir satranç ustası olacağının ilk işaretiydi. 2019 yılında Fenerbahçe’nin kapısından içeri girdiğinde, Kadıköy’ün çimlerinde yeni bir devrin başladığını herkes biliyordu.\n\nFenerbahçe formasıyla çıktığı 51 resmi maçta imza attığı 9 gol ve 12 asist, rakamların çok ötesinde bir anlam taşıyordu; çünkü Arda topu ayağına her aldığında tribünlerdeki binlerce kişiyi aynı heyecanla ayağa kaldırıyordu. Bu büyüleyici performans, onu 2023 Temmuz'unda 20 milyon Euro gibi rekor bir bedelle dünya devi Real Madrid’e taşıdı. İspanya'da yaşadığı sakatlıkları sabırla aşan Arda, Real Madrid formasıyla ligde süre aldığı ilk 330 dakikaya tam 6 gol sığdırarak, İspanyol basınının \"verimlilik makinesi\" yakıştırmasını sonuna kadar hak etti.\n\nAncak Arda’nın adını futbol tarihinin tozlu raflarından çıkarıp altın harflerle manşetlere taşıyan asıl an, Elche maçında yaşandı. Orta saha çizgisinin bile gerisinden kalecinin kaleden uzaklaştığını fark eden genç yıldız, kaleye tam 68 metre mesafeden mucizevi bir vuruş yaptı. Topun ağlarla buluştuğu o an, La Liga tarihinin en uzak mesafeli gollerinden biri olarak kayıtlara geçti. Arda’nın bu vuruşu sadece bir gol değil; Ankara’nın altyapı sahalarından dünyanın zirvesine uzanan özgüvenin matematiksel bir kanıtıydı.",
      "questions": [
        {
          "question": "Metinde Arda Güler’in futbol eğitiminin temellerini attığı kulüp hangisidir?",
          "options": [
            "Fenerbahçe",
            "Real Madrid",
            "Gençlerbirliği",
            "Elche"
          ],
          "correctIndex": 2
        },
        {
          "question": "Arda Güler’in Fenerbahçe’deki başarısını özetleyen sayısal veriler aşağıdakilerden hangisidir?",
          "options": [
            "40 maçta 10 gol ve 5 asist",
            "51 resmi maçta 9 gol ve 12 asist",
            "30 maçta 15 gol ve 20 asist",
            "60 maçta 5 gol ve 2 asist"
          ],
          "correctIndex": 1
        },
        {
          "question": "Arda Güler'in Real Madrid tarihindeki istatistiksel verimliliği nasıl açıklanmıştır?",
          "options": [
            "Takımın tüm maçlarında 90 dakika oynamasıyla",
            "İlk 330 dakikalık sürede 6 gol atarak müthiş bir başarı yakalamasıyla",
            "İspanya Kral Kupası'nda en çok asist yapan oyuncu olmasıyla",
            "Takımın en yaşlı oyuncusu olarak tarihe geçmesiyle"
          ],
          "correctIndex": 1
        },
        {
          "question": "Arda Güler’in Elche maçında attığı golün dünya çapında ses getirmesinin asıl sebebi nedir?",
          "options": [
            "Maçın son dakikasında atılan bir penaltı golü olması",
            "Yaklaşık 68 metrelik mesafesiyle La Liga tarihine geçen bir vuruş olması",
            "Kalecinin hatası sonucu topun kendi kalesine gitmesi",
            "Arda'nın Madrid formasıyla attığı ilk kafa golü olması"
          ],
          "correctIndex": 1
        }
      ]
    },
    {
      "id": "orta-gunesin-pesindeki-cicek-gunebakan",
      "title": "Güneşin Peşindeki Çiçek: Günebakan",
      "text": "Tarlalarda yan yana dizilmiş, sapsarı başlarıyla dev bir orduyu andıran ayçiçeklerini görmüşsünüzdür. Onların halk arasındaki bir diğer adı da çok sevimlidir: Günebakan. Bu ismi almalarının sebebi, gökyüzündeki güneşe adeta bir pusula gibi âşık olmalarıdır. Sabah güneş doğduğunda yüzlerini doğuya çevirirler ve gün boyunca güneş nereye giderse, başlarını ağır ağır o yöne döndürürler.\n\nPeki, bu dev çiçekler neden boyunlarını hiç yorulmadan döndürürler? Bilim insanları bunun sebebinin bitkinin büyüme hormonu olduğunu söylüyor. Günebakanlar, güneş ışığını daha fazla alarak daha hızlı büyümek ve gövdelerini güçlendirmek isterler. Bir ayçiçeği tarlasında binlerce çiçek bulunur ve sabah saatlerinde hepsinin aynı yöne bakması harika bir görüntü oluşturur. Ancak ilginç bir bilgi daha var: Ayçiçekleri sadece gençken güneşi takip ederler. Yaşlandıkça ve ağırlaştıkça artık boyunlarını döndürmeyi bırakıp hep doğuya bakarak sabit kalırlar.\n\nBir ayçiçeğinin ortasında 1000 ile 2000 arasında çekirdek (tohum) bulunabilir. Bu çekirdekler hem kuşlar için harika bir besin hem de bizler için sağlıklı bir yağ kaynağıdır. Günebakanlar, bize sadece güzellik sunmakla kalmaz; her sabah umutla yeni bir güne uyanmanın ve ışığın peşinden gitmenin en güzel örneğini gösterirler.",
      "questions": [
        {
          "question": "Ayçiçeğine halk arasında \"Günebakan\" isminin verilmesinin sebebi nedir?",
          "options": [
            "Çekirdeklerinin çok lezzetli olması",
            "Gün boyunca yüzünü güneşe doğru çevirmesi",
            "Sadece güneşli havalarda çiçek açması",
            "Boyunun diğer çiçeklerden daha uzun olması"
          ],
          "correctIndex": 1
        },
        {
          "question": "Metne göre ayçiçeklerinin güneşi takip etme amacı aşağıdakilerden hangisidir?",
          "options": [
            "Akşam olduğunda uyumak için yer aramak",
            "Daha fazla güneş ışığı alarak güçlenmek ve büyümek",
            "Tarladaki diğer çiçeklerle yarışmak",
            "Kuşların kendilerini fark etmesini engellemek"
          ],
          "correctIndex": 1
        },
        {
          "question": "Ayçiçeklerinin güneşi takip etme özelliğiyle ilgili hangi şaşırtıcı bilgiye yer verilmiştir?",
          "options": [
            "Sadece geceleri hareket ettikleri",
            "Sadece gençken güneşi takip edip, yaşlanınca sabit kaldıkları",
            "Yağmurlu havalarda yapraklarını tamamen kapattıkları",
            "Güneşi takip ederken çok yüksek ses çıkardıkları"
          ],
          "correctIndex": 1
        },
        {
          "question": "Bir ayçiçeğinin orta kısmında yaklaşık kaç adet çekirdek (tohum) bulunabilir?",
          "options": [
            "En fazla 100 adet",
            "500 ile 600 arası",
            "1000 ile 2000 arası",
            "Tam olarak 5000 adet"
          ],
          "correctIndex": 2
        }
      ]
    }
  ],
  "7-8-sinif": [
    {
      "id": "orta-marstaki-tozlu-bilmece",
      "title": "Mars’taki Tozlu Bilmece",
      "text": "2045 yılının serin bir Ekim sabahında, Mars yüzeyindeki \"Kızıl Vadi\" istasyonunda büyük bir heyecan yaşanıyordu. Genç astronot adayı Selin, istasyonun dev camlarından dışarıdaki uçsuz bucaksız kızıl toz bulutlarını izliyordu. O gün, Mars yüzeyinden toplanan özel kaya örneklerinin analiz sonuçları açıklanacaktı. Selin ve ekibi, bu örneklerin içinde milyarlarca yıl öncesine ait bir su izi bulmayı umuyordu. Ancak sabah yapılan ilk incelemede, örneklerin bulunduğu bölmede beklenmedik bir durumla karşılaşıldı.\n\nKaya örneklerinin üzerinde, doğal yollarla oluşması imkânsız görünen, birbirine paralel çok ince çizgiler vardı. Ekip lideri Dr. Aras, \"Bu çizgiler rüzgâr aşınmasına benzemiyor, sanki birisi bu kayaları bilinçli bir şekilde işaretlemiş gibi,\" dediğinde odadaki herkes birbirine baktı. Selin, bu gizemi çözmek için numuneleri yüksek çözünürlüklü mikroskop altında incelemeye karar verdi. Saatler süren titiz çalışmanın sonunda Selin, çizgilerin aslında kristalleşmiş buz parçacıkları olduğunu fark etti. Mars’ın sert rüzgarları, kaya çatlaklarına dolan buzu adeta bir sanatçı gibi yontarak bu geometrik şekilleri oluşturmuştu.\n\nBu keşif, Mars’ta sanıldığı gibi \"yeşil adamlar\" olduğunu kanıtlamıyordu ama çok daha değerli bir şeyi müjdeliyordu: Mars’ın derinliklerinde hala donmuş halde su kaynakları vardı. Selin, o an bir bilim insanı için en büyük ödülün, karmaşık görünen bir sorunun altındaki sade gerçeği bulmak olduğunu anladı. Akşam raporunu yazarken günlüğüne şu notu düştü: \"Evren, meraklı zihinlere her zaman bir ipucu bırakır; önemli olan o ipucunu takip edecek sabra sahip olmaktır.\"",
      "questions": [
        {
          "question": "Metne göre \"Kızıl Vadi\" istasyonundaki ekibin asıl araştırma amacı nedir?",
          "options": [
            "Mars yüzeyinde tarım yapılabilecek alanlar bulmak",
            "Mars’ta yaşayan canlı türlerini fotoğraflamak",
            "Kaya örneklerinde geçmişe dair su izlerini araştırmak",
            "Kızıl gezegendeki toz fırtınalarının yönünü değiştirmek"
          ],
          "correctIndex": 2
        },
        {
          "question": "Dr. Aras'ın kaya örnekleri üzerindeki çizgileri gördüğünde verdiği ilk tepki aşağıdakilerden hangisidir?",
          "options": [
            "Çizgilerin şiddetli rüzgarlar nedeniyle oluştuğunu hemen anlamıştır.",
            "Çizgilerin bilinçli bir müdahale sonucu oluşmuş olabileceğini düşünmüştür.",
            "Deneyin başarısız olduğunu düşünerek numuneleri çöpe atmıştır.",
            "Bu çizgilerin Mars’taki volkanik patlamalarla oluştuğunu söylemiştir."
          ],
          "correctIndex": 1
        },
        {
          "question": "Selin'in yaptığı mikroskobik inceleme sonucunda ortaya çıkan gerçek nedir?",
          "options": [
            "Çizgilerin, Marslı canlılar tarafından kazınmış bir harita olduğu",
            "Kaya örneklerinin aslında Dünya'dan yanlışlıkla getirildiği",
            "Çizgilerin, rüzgârın buz parçacıklarını yontmasıyla oluşan doğal şekiller olduğu",
            "Kayaların içinde çok değerli elmas madenlerinin bulunduğu"
          ],
          "correctIndex": 2
        },
        {
          "question": "Bu keşfin bilim dünyası için taşıdığı en büyük önem aşağıdakilerden hangisidir?",
          "options": [
            "Mars'ta hayat olduğu kesin olarak kanıtlanmıştır.",
            "Gezegenin derinliklerinde hala su kaynakları olduğuna dair güçlü bir kanıt sunmasıdır.",
            "Selin'in dünyanın en ünlü astronotu seçilmesini sağlamasıdır.",
            "Mars yüzeyindeki tüm toz bulutlarının yok olacağını göstermesidir."
          ],
          "correctIndex": 1
        },
        {
          "question": "Metnin sonundaki \"Evren, meraklı zihinlere her zaman bir ipucu bırakır\" sözüyle anlatılmak istenen nedir?",
          "options": [
            "Bilimsel gerçeklerin her zaman çok kolay ve hızlıca bulunduğu",
            "Merak eden ve pes etmeyen insanların doğadaki gizemleri çözebileceği",
            "Evrenin aslında çözülemeyecek kadar karmaşık bir yer olduğu",
            "Uzay araştırmalarının sadece çok zeki insanlar için uygun olduğu"
          ],
          "correctIndex": 1
        }
      ]
    },
    {
      "id": "orta-topragin-altindaki-sakli-sehir",
      "title": "Toprağın Altındaki Saklı Şehir",
      "text": "Güneş, Şanlıurfa’nın sarı sıcak tepeleri üzerine veda etmeye hazırlanırken, Arkeolog Mert Bey elindeki ince fırçayla toprağı adeta bir nakkaş titizliğiyle kazıyordu. Yanında staj yapan üniversite öğrencisi Selim, heyecanla sordu: \"Hocam, binlerce yıl öncesinden kalan bu taşlar bize gerçekten ne anlatabilir ki?\" Mert Bey durdu, alnındaki teri sildi ve uzaklara, Göbeklitepe’nin devasa dikili taşlarına bakarak gülümsedi. \"Evlat,\" dedi, \"bu taşlar sadece dilsiz birer kaya parçası değil; onlar insanlığın ilk cümlesidir.\"\n\nSelim, toprağın içinden yavaşça gün yüzüne çıkan aslan ve turna kabartmalarını gördüğünde büyülenmiş gibiydi. O güne kadar tarih kitaplarında insanların yerleşik hayata tarımla geçtiğini okumuştu. Ancak burası, o bildiği tüm kuralları altüst ediyordu. Mert Bey, Selim’in şaşkınlığını görünce anlatmaya devam etti: \"Bak Selim, burada insanlar henüz buğday ekmeyi bile bilmiyorken, devasa tapınaklar inşa edip bir araya gelmişler. Yani bizi bir arada tutan şey sadece karın doyurmak değil, ortak bir inanç ve merak duygusuydu.\"\n\nO akşam kamp ateşinin başında otururken Selim, Anadolu’nun sadece bir toprak parçası değil, katman katman dizilmiş bir hatıra defteri olduğunu anladı. Her kazılan çukur, geçmişten gelen bir mektubu açmak gibiydi. Mert Bey, Selim’in günlüğüne şu notu düşmesini istedi: \"Tarih, sadece geçmişte ne olduğunu bilmek değil; bugün kim olduğumuzu anlamaktır.\" Selim, ertesi sabah işine daha büyük bir aşkla sarıldı. Çünkü artık biliyordu ki, bastığı her adımın altında binlerce yıllık bir selam gizliydi.",
      "questions": [
        {
          "question": "Metinde geçen \"bu taşlar insanlığın ilk cümlesidir\" ifadesiyle Mert Bey asıl neyi vurgulamak istemiştir?",
          "options": [
            "Taşların üzerine yazı yazmanın çok zor bir sanat olduğunu",
            "Göbeklitepe’deki buluntuların insanlık tarihinin başlangıcına dair önemli bilgiler taşıdığını",
            "Eskiden insanların sadece taşları kullanarak iletişim kurduğunu",
            "Arkeolojik kazıların sadece taş binaları bulmak için yapıldığını"
          ],
          "correctIndex": 1
        },
        {
          "question": "Selim’in Göbeklitepe’deki bulgular karşısında şaşırmasının temel sebebi aşağıdakilerden hangisidir?",
          "options": [
            "Kazı alanında çok fazla vahşi hayvan figürüne rastlanması",
            "Bölgenin ikliminin beklediğinden çok daha sıcak olması",
            "Tarih kitaplarında okuduğu \"önce tarım, sonra yerleşik hayat\" bilgisinin burada değişmesi",
            "Mert Bey’in kazı çalışmalarını çok yavaş ilerletmesi"
          ],
          "correctIndex": 2
        },
        {
          "question": "Mert Bey’e göre, insanları binlerce yıl önce bir araya getiren asıl güç nedir?",
          "options": [
            "Tarım yaparak daha fazla yiyecek elde etme isteği",
            "Savaşlardan korunmak için kale inşa etme ihtiyacı",
            "Ortak inançlar ve merak duygusu etrafında toplanma isteği",
            "Ticaret yaparak zenginleşme düşüncesi"
          ],
          "correctIndex": 2
        },
        {
          "question": "Metnin ana fikri aşağıdakilerden hangisidir?",
          "options": [
            "Arkeolojik kazılar çok sabır ve dikkat gerektiren zorlu bir iştir.",
            "Şanlıurfa, iklimi nedeniyle tarih boyunca birçok medeniyete ev sahipliği yapmıştır.",
            "Tarihsel mirasımızı anlamak, bugünkü kimliğimizi ve insanlığın yolculuğunu kavramamızı sağlar.",
            "Eski insanlar hayvan figürlerini taşlara işleyerek avcılık yeteneklerini geliştirmişlerdir."
          ],
          "correctIndex": 2
        },
        {
          "question": "Metnin anlatımıyla ilgili aşağıdakilerden hangisi söylenemez?",
          "options": [
            "Kişileştirme ve benzetme gibi söz sanatlarından yararlanılmıştır.",
            "Bir olay örgüsü içerisinde bilgilendirici unsurlara yer verilmiştir.",
            "Karşılıklı konuşma (diyalog) tekniği kullanılarak anlatım zenginleştirilmiştir.",
            "Tamamen nesnel veriler kullanılarak bilimsel bir rapor diliyle yazılmıştır."
          ],
          "correctIndex": 3
        }
      ]
    },
    {
      "id": "orta-dunyanin-baris-abisi",
      "title": "Dünyanın \"Barış\" Abisi",
      "text": "İstanbul’un soğuk bir Ocak gününde, 1943 yılında dünyaya gözlerini açtığında, ailesi ona çok anlamlı bir isim verdi: Mehmet Barış. O yıllarda dünya büyük bir savaşın içindeydi ve ailesi onun isminin, tüm dünyaya huzur getirmesini dilemişti. Küçük Barış, daha o günlerde isminin ağırlığını omuzlarında taşıyacağını kanıtlarcasına müziğe sevdalandı. Ancak onun müziği sadece notalardan değil; sevgiden, dürüstlükten ve nezaketten oluşacaktı.\n\nMüzik kariyerine Galatasaray Lisesi sıralarında başlayan Barış Manço, sadece bir şarkıcı değil; aynı zamanda bir kültür elçisiydi. Uzun saçları, parmaklarını dolduran ilginç yüzükleri ve peleriniyle sahneye çıktığında herkes şaşırıyordu. O, Anadolu’nun derin türkülerini modern tınılarla birleştirerek \"Barış Rock\" tarzını oluşturmuştu. Ancak onu çocukların kalbinde ölümsüz kılan asıl şey, \"7’den 77’ye\" programı oldu. Dünyanın en uzak köşelerine gidiyor, oradaki çocuklarla sohbet ediyor ve bize kocaman bir dünya ailesi olduğumuzu hatırlatıyordu.\n\nBarış Manço, hayatı boyunca 150’den fazla beste yaptı ve birçok ödül kazandı. Ama onun en büyük koleksiyonu, çocukların ona duyduğu sevgiydi. Domates, biber, patlıcanı bile bir şarkıya dönüştürecek kadar yaratıcıydı. 1999 yılında aramızdan ayrıldığında geride sadece plaklar değil; \"adam olacak çocuklara\" verilmiş binlerce öğüt bıraktı. Bugün hala onun şarkılarıyla büyüyoruz çünkü Barış Abi, bize dürüst bir insan olmanın her türlü şöhretten daha önemli olduğunu öğretti.",
      "questions": [
        {
          "question": "Metinde Barış Manço’nun isminin veriliş hikâyesiyle ilgili hangi bilgiye yer verilmiştir?",
          "options": [
            "Müziğe olan yeteneğinin daha bebekken fark edilmesine",
            "Dünyadaki savaş ortamında ailesinin barışa duyduğu özleme",
            "Aile büyüklerinden birinin vasiyeti üzerine bu ismin seçilmesine",
            "Okul hayatında çok başarılı olacağı düşünüldüğü için verilmesine"
          ],
          "correctIndex": 1
        },
        {
          "question": "Barış Manço’nun müzik tarzıyla ilgili aşağıdakilerden hangisi söylenebilir?",
          "options": [
            "Sadece batı müziği enstrümanlarını kullanarak şarkılar yapmıştır.",
            "Klasik Türk müziğini olduğu gibi koruyarak modernliğe karşı çıkmıştır.",
            "Anadolu’nun yerel kültürünü modern müzik anlayışıyla harmanlamıştır.",
            "Şarkılarını sadece yabancı dillerde besteleyerek dünyaya açılmıştır."
          ],
          "correctIndex": 2
        },
        {
          "question": "Metne göre Barış Manço’yu çocuklar için \"ölümsüz\" kılan asıl çalışma hangisidir?",
          "options": [
            "Galatasaray Lisesi’nde müzik grubunu kurması",
            "Parmaklarındaki ilginç yüzükleri ve uzun saçları",
            "\"7’den 77’ye\" programıyla çocuklara ve farklı kültürlere dokunması",
            "Kazandığı uluslararası ödüller ve şöhreti"
          ],
          "correctIndex": 2
        },
        {
          "question": "Barış Manço’nun hayat felsefesiyle ilgili metinden çıkarılabilecek en kapsamlı yargı aşağıdakilerden hangisidir?",
          "options": [
            "İyi bir sanatçı olabilmek için mutlaka yurt dışına gidilmelidir.",
            "Şöhret sahibi olmak, topluma karşı olan sorumlulukları azaltır.",
            "İnsanları birleştiren asıl bağ, dürüstlük, sevgi ve kültürel paylaşımdır.",
            "Yaratıcılık, sadece karmaşık ve zor konularda şarkı yapmaktır."
          ],
          "correctIndex": 2
        },
        {
          "question": "Bir biyografi metni olarak değerlendirildiğinde, bu yazının dili için ne söylenebilir?",
          "options": [
            "Sadece sayısal verilerin paylaşıldığı, soğuk bir rapor dili kullanılmıştır.",
            "Hayali olaylara dayanan, masalsı bir anlatım tercih edilmiştir.",
            "Öyküleyici ve betimleyici unsurlarla zenginleştirilmiş, samimi bir anlatım vardır.",
            "Kahramanın sadece olumsuz özelliklerinin anlatıldığı bir eleştiri yazısıdır."
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "orta-menzili-dunya-olan-yildiz-arda-guler",
      "title": "Menzili Dünya Olan Yıldız: Arda Güler",
      "text": "Türk futbolunun son yıllarda yetiştirdiği en parlak cevher olan Arda Güler'in hikâyesi, 2005 yılında Ankara’nın disiplinli futbol okulu olan Gençlerbirliği’nde filizlendi. Henüz dokuz yaşındayken yeşil sahada sergilediği zekâ, onun sadece bir futbolcu değil, sahada bir satranç ustası olacağının ilk işaretiydi. 2019 yılında Fenerbahçe’nin kapısından içeri girdiğinde, Kadıköy’ün çimlerinde yeni bir devrin başladığını herkes biliyordu.\n\nFenerbahçe formasıyla çıktığı 51 resmi maçta imza attığı 9 gol ve 12 asist, rakamların çok ötesinde bir anlam taşıyordu; çünkü Arda topu ayağına her aldığında tribünlerdeki binlerce kişiyi aynı heyecanla ayağa kaldırıyordu. Bu büyüleyici performans, onu 2023 Temmuz'unda 20 milyon Euro gibi rekor bir bedelle dünya devi Real Madrid’e taşıdı. İspanya'da yaşadığı sakatlıkları sabırla aşan Arda, Real Madrid formasıyla ligde süre aldığı ilk 330 dakikaya tam 6 gol sığdırarak, İspanyol basınının \"verimlilik makinesi\" yakıştırmasını sonuna kadar hak etti.\n\nAncak Arda’nın adını futbol tarihinin tozlu raflarından çıkarıp altın harflerle manşetlere taşıyan asıl an, Elche maçında yaşandı. Orta saha çizgisinin bile gerisinden kalecinin kaleden uzaklaştığını fark eden genç yıldız, kaleye tam 68 metre mesafeden mucizevi bir vuruş yaptı. Topun ağlarla buluştuğu o an, La Liga tarihinin en uzak mesafeli gollerinden biri olarak kayıtlara geçti. Arda’nın bu vuruşu sadece bir gol değil; Ankara’nın altyapı sahalarından dünyanın zirvesine uzanan özgüvenin matematiksel bir kanıtıydı.",
      "questions": [
        {
          "question": "Metinde Arda Güler’in futbol eğitiminin temellerini attığı kulüp hangisidir?",
          "options": [
            "Fenerbahçe",
            "Real Madrid",
            "Gençlerbirliği",
            "Elche"
          ],
          "correctIndex": 2
        },
        {
          "question": "Arda Güler’in Fenerbahçe’deki başarısını özetleyen sayısal veriler aşağıdakilerden hangisidir?",
          "options": [
            "40 maçta 10 gol ve 5 asist",
            "51 resmi maçta 9 gol ve 12 asist",
            "30 maçta 15 gol ve 20 asist",
            "60 maçta 5 gol ve 2 asist"
          ],
          "correctIndex": 1
        },
        {
          "question": "Arda Güler'in Real Madrid tarihindeki istatistiksel verimliliği nasıl açıklanmıştır?",
          "options": [
            "Takımın tüm maçlarında 90 dakika oynamasıyla",
            "İlk 330 dakikalık sürede 6 gol atarak müthiş bir başarı yakalamasıyla",
            "İspanya Kral Kupası'nda en çok asist yapan oyuncu olmasıyla",
            "Takımın en yaşlı oyuncusu olarak tarihe geçmesiyle"
          ],
          "correctIndex": 1
        },
        {
          "question": "Arda Güler’in Elche maçında attığı golün dünya çapında ses getirmesinin asıl sebebi nedir?",
          "options": [
            "Maçın son dakikasında atılan bir penaltı golü olması",
            "Yaklaşık 68 metrelik mesafesiyle La Liga tarihine geçen bir vuruş olması",
            "Kalecinin hatası sonucu topun kendi kalesine gitmesi",
            "Arda'nın Madrid formasıyla attığı ilk kafa golü olması"
          ],
          "correctIndex": 1
        }
      ]
    },
    {
      "id": "orta-gunesin-pesindeki-cicek-gunebakan",
      "title": "Güneşin Peşindeki Çiçek: Günebakan",
      "text": "Tarlalarda yan yana dizilmiş, sapsarı başlarıyla dev bir orduyu andıran ayçiçeklerini görmüşsünüzdür. Onların halk arasındaki bir diğer adı da çok sevimlidir: Günebakan. Bu ismi almalarının sebebi, gökyüzündeki güneşe adeta bir pusula gibi âşık olmalarıdır. Sabah güneş doğduğunda yüzlerini doğuya çevirirler ve gün boyunca güneş nereye giderse, başlarını ağır ağır o yöne döndürürler.\n\nPeki, bu dev çiçekler neden boyunlarını hiç yorulmadan döndürürler? Bilim insanları bunun sebebinin bitkinin büyüme hormonu olduğunu söylüyor. Günebakanlar, güneş ışığını daha fazla alarak daha hızlı büyümek ve gövdelerini güçlendirmek isterler. Bir ayçiçeği tarlasında binlerce çiçek bulunur ve sabah saatlerinde hepsinin aynı yöne bakması harika bir görüntü oluşturur. Ancak ilginç bir bilgi daha var: Ayçiçekleri sadece gençken güneşi takip ederler. Yaşlandıkça ve ağırlaştıkça artık boyunlarını döndürmeyi bırakıp hep doğuya bakarak sabit kalırlar.\n\nBir ayçiçeğinin ortasında 1000 ile 2000 arasında çekirdek (tohum) bulunabilir. Bu çekirdekler hem kuşlar için harika bir besin hem de bizler için sağlıklı bir yağ kaynağıdır. Günebakanlar, bize sadece güzellik sunmakla kalmaz; her sabah umutla yeni bir güne uyanmanın ve ışığın peşinden gitmenin en güzel örneğini gösterirler.",
      "questions": [
        {
          "question": "Ayçiçeğine halk arasında \"Günebakan\" isminin verilmesinin sebebi nedir?",
          "options": [
            "Çekirdeklerinin çok lezzetli olması",
            "Gün boyunca yüzünü güneşe doğru çevirmesi",
            "Sadece güneşli havalarda çiçek açması",
            "Boyunun diğer çiçeklerden daha uzun olması"
          ],
          "correctIndex": 1
        },
        {
          "question": "Metne göre ayçiçeklerinin güneşi takip etme amacı aşağıdakilerden hangisidir?",
          "options": [
            "Akşam olduğunda uyumak için yer aramak",
            "Daha fazla güneş ışığı alarak güçlenmek ve büyümek",
            "Tarladaki diğer çiçeklerle yarışmak",
            "Kuşların kendilerini fark etmesini engellemek"
          ],
          "correctIndex": 1
        },
        {
          "question": "Ayçiçeklerinin güneşi takip etme özelliğiyle ilgili hangi şaşırtıcı bilgiye yer verilmiştir?",
          "options": [
            "Sadece geceleri hareket ettikleri",
            "Sadece gençken güneşi takip edip, yaşlanınca sabit kaldıkları",
            "Yağmurlu havalarda yapraklarını tamamen kapattıkları",
            "Güneşi takip ederken çok yüksek ses çıkardıkları"
          ],
          "correctIndex": 1
        },
        {
          "question": "Bir ayçiçeğinin orta kısmında yaklaşık kaç adet çekirdek (tohum) bulunabilir?",
          "options": [
            "En fazla 100 adet",
            "500 ile 600 arası",
            "1000 ile 2000 arası",
            "Tam olarak 5000 adet"
          ],
          "correctIndex": 2
        }
      ]
    }
  ],
  "lise": [
    {
      "id": "lise-zihnin-isik-hizi-nitelikli-hizli-okuma",
      "title": "Zihnin Işık Hızı: Nitelikli Hızlı Okuma",
      "text": "Geleneksel okuma alışkanlıklarımız, çoğunlukla ilkokul yıllarında kelimeleri tek tek seslendirmeyle başlar. Ancak lise ve üniversite seviyesine gelindiğinde, bu hantal yöntem devasa bilgi yığınları karşısında bir engel haline gelir. Birçok öğrenci, hızlı okuduğunda anlam kaybı yaşayacağını düşünerek yavaşlamayı tercih eder. Oysa bilimsel araştırmalar bunun tam tersini kanıtlıyor: Zihin, yavaş okuma sırasında kelimeler arasındaki boşluklarda odaklanma sorunu yaşar ve dikkatini dağıtacak başka düşüncelere kapılır. Tıpkı saatte 20 kilometre hızla giden bir sürücünün etrafı izleyip dikkatinin dağılması, ama 120 kilometre hızla giden bir sürücünün yola pürdikkat odaklanması gibi; hızlı okumak da zihni tam bir konsantrasyon moduna sokar.\n\nHızlı okuma, sadece sayfaları hızla çevirmek değil, göz kaslarının görme alanını genişleterek kelimeleri tek tek değil, bloklar halinde algılama sanatıdır. İnsan gözü, eğitimle bir bakışta 3 hatta 4 kelimeyi birden \"fotoğraflayabilir\". Zihin ise bu verileri işleme kapasitesine fazlasıyla sahiptir. Hız arttıkça beyin, gereksiz ayrıntıları ayıklayıp ana fikre odaklanma konusunda daha çevik hale gelir. Bu süreçte \"iç seslendirme\" dediğimiz, kelimeleri zihnimizde fısıldama alışkanlığını terk etmek, okuma hızını doğrudan ikiye, hatta üçe katlar.\n\nDijital çağın bilgi bombardımanı altında, saniyede binlerce verinin üretildiği bir dünyada yavaş kalmak, bilginin gerisinde kalmaktır. Hızlı okuma becerisi kazanmış bir lise öğrencisi, sadece sınav sorularını daha hızlı bitirmekle kalmaz; aynı zamanda kısa sürede daha fazla kaynak tarayarak rakiplerinin önüne geçer. Unutulmamalıdır ki; bilgi güçtür ancak o bilgiye en kısa sürede ulaşan ve onu en hızlı işleyen, o gücü yöneten asıl kişidir. Zihin, sınırları zorlandıkça genişleyen bir kapasiteye sahiptir ve hızlı okuma, bu kapasiteyi kullanmanın en modern anahtarıdır.",
      "questions": [
        {
          "question": "Metinde kullanılan \"sürücü\" benzetmesiyle hızlı okuma arasındaki hangi ilişki vurgulanmıştır?",
          "options": [
            "Hızlı okumanın trafik kazaları gibi tehlikeli sonuçlar doğurabileceği",
            "Hız arttıkça zihnin odağının ve konsantrasyonunun daha da keskinleştiği",
            "Yavaş okumanın daha güvenli bir anlama yöntemi olduğu",
            "Herkesin hızlı okuma becerisine sahip olamayacağı"
          ],
          "correctIndex": 1
        },
        {
          "question": "Metne göre \"iç seslendirme\" alışkanlığını bırakmak okuma sürecini nasıl etkiler?",
          "options": [
            "Okunan metnin daha kolay unutulmasına neden olur.",
            "Kelime haznesinin gelişmesini engeller.",
            "Okuma hızının iki veya üç katına çıkmasını sağlar.",
            "Metindeki ana fikrin bulunmasını zorlaştırır."
          ],
          "correctIndex": 2
        },
        {
          "question": "\"Gözün kelimeleri fotoğraflaması\" ifadesiyle anlatılmak istenen teknik aşağıdakilerden hangisidir?",
          "options": [
            "Kelimelerin tek tek hecelenerek okunması",
            "Kelimelerin resimlerine bakarak tahmin yürütülmesi",
            "Görme alanını genişleterek kelime gruplarını bloklar halinde algılamak",
            "Sadece metindeki başlıkları ve koyu yazılan yerleri okumak"
          ],
          "correctIndex": 2
        },
        {
          "question": "Yazara göre hızlı okumanın öğrenciye sağladığı en büyük avantaj nedir?",
          "options": [
            "Kitap masraflarını azaltması",
            "Daha az ders çalışarak başarılı olmayı sağlaması",
            "Bilgiye hızla ulaşıp onu işleyerek akademik ve sosyal rekabette öne geçirmesi",
            "Sadece edebiyat derslerinde yüksek not almasını sağlaması"
          ],
          "correctIndex": 2
        }
      ]
    },
    {
      "id": "lise-nobele-uzanan-sabir-aziz-sancar",
      "title": "Nobel’e Uzanan Sabır: Aziz Sancar",
      "text": "1946 yılında Mardin’in Savur ilçesinde, sekiz çocuklu bir ailenin yedinci çocuğu olarak dünyaya gelen Aziz Sancar’ın hikâyesi, imkânsızlıkların azim karşısında nasıl eridiğinin en somut kanıtıdır. Eğitim hayatına Mardin’in kısıtlı imkânlarıyla başlayan Sancar, futbol tutkusu ile akademik başarı arasında bir köprü kurmuş, ancak sonunda \"bilim\" sahasında ter dökmeyi seçmiştir. İstanbul Üniversitesi Tıp Fakültesi’ni birincilikle bitirmesinin ardından, içindeki araştırma tutkusu onu Amerika Birleşik Devletleri’ne kadar sürüklemiştir. Ancak onun için asıl maraton, laboratuvarın sessiz ışıkları altında onlarca yıl sürecek olan sabır yolculuğudur.\n\nAziz Sancar’ı 2015 yılında Nobel Kimya Ödülü’ne taşıyan süreç, hücrelerin hasar gören DNA’ları nasıl onardığını ve genetik bilgisini nasıl koruduğunu haritalandırmasıyla zirveye ulaşmıştır. Bu keşif, kanser tedavilerinden biyolojik saatimizin işleyişine kadar tıp dünyasında devrim niteliğinde veriler sunmuştur. Sancar, başarısını sadece üstün zekâsına değil, günde 12 ile 18 saat arasında değişen disiplinli çalışma temposuna bağlamıştır. Ona göre bilim, bir zekâ oyunundan ziyade bir \"emek ve sabır\" meselesidir. Kendisini \"Ben bir Türk milliyetçisiyim ve bu ödülü ülkem adına aldım\" diyerek tanımlayan Sancar, Nobel madalyasını Anıtkabir’e bağışlayarak başarısını Cumhuriyetin kazanımlarıyla taçlandırmıştır.\n\nBugün Aziz Sancar ismi, sadece laboratuvarda elde edilen bir başarıyı değil, bir insanın sınırlarını ne kadar zorlayabileceğini simgeliyor. Hızlı okuma ve bilgiyi hızlı işleme becerisi kazanan genç beyinler için Sancar’ın hayatı, \"bilgiye giden yolda zamanı en verimli şekilde kullanmanın\" bir rehberidir. O, sadece DNA’nın onarımını keşfetmekle kalmamış; aynı zamanda bir neslin özgüvenini de onarmıştır. Sancar’ın Nobel kürsüsünden tüm dünyaya haykırdığı o sessiz gerçek şudur: \"Çoğu insan zekâya inanır, ben inanmıyorum; bizi birbirimizden ayıran emektir.\"",
      "questions": [
        {
          "question": "Metne göre Aziz Sancar’ın Nobel Kimya Ödülü’nü almasını sağlayan bilimsel çalışmanın ana konusu nedir?",
          "options": [
            "Yeni bir kanser ilacı keşfetmesi",
            "Hücrelerin hasar gören DNA’ları nasıl onardığını haritalandırması",
            "Futbolun insan vücudu üzerindeki biyolojik etkilerini kanıtlaması",
            "Mardin’deki endemik bitkilerin kimyasal yapısını incelemesi"
          ],
          "correctIndex": 1
        },
        {
          "question": "Aziz Sancar’ın başarı anlayışıyla ilgili metinden çıkarılabilecek en temel yargı hangisidir?",
          "options": [
            "Başarı, sadece doğuştan gelen üstün bir zekânın ürünüdür.",
            "Laboratuvar ortamı olmadan gerçek bir bilimsel başarı elde edilemez.",
            "Başarının asıl anahtarı, disiplinli çalışma ve büyük bir emektir.",
            "Yurtdışına gitmeyen bir bilim insanı Nobel kazanamaz."
          ],
          "correctIndex": 2
        },
        {
          "question": "Aziz Sancar’ın Nobel madalyasını Anıtkabir’e bağışlaması, onun hangi özelliğini ön plana çıkarmaktadır?",
          "options": [
            "Tarihsel eserlere olan merakını",
            "Başarısını bireysel bir kazanç olarak görmeyip milli bir gururla taçlandırmasını",
            "Bilimsel çalışmalarını artık Türkiye’de sürdüreceğini",
            "Madalyanın güvenliğinden endişe etmesini"
          ],
          "correctIndex": 1
        },
        {
          "question": "Metinde yer alan \"DNA onarımı\" ve \"çalışma saatleri\" gibi verilerin lise düzeyindeki bir okuyucuya mesajı nedir?",
          "options": [
            "Bilimle uğraşmak için mutlaka Amerika’da yaşamak gerektiği",
            "Başarıya giden yolda teknik bilginin yanında azmin ve zaman yönetiminin önemi",
            "DNA yapısının her insan için aynı olduğu",
            "Nobel ödülünün sadece tıp doktorlarına verildiği"
          ],
          "correctIndex": 1
        }
      ]
    },
    {
      "id": "lise-tarihin-sifir-noktasi-gobeklitepenin-gizemi",
      "title": "Tarihin Sıfır Noktası: Göbeklitepe’nin Gizemi",
      "text": "İnsanlık tarihine dair bildiğimiz tüm ezberleri bozan, arkeoloji dünyasının en sarsıcı keşfi kabul edilen Göbeklitepe; Şanlıurfa’nın yaklaşık 15 kilometre kuzeydoğusunda, Mezopotamya’nın bereketli topraklarına yukarıdan bakan bir tepede yer almaktadır. 1994 yılında Alman arkeolog Klaus Schmidt tarafından başlatılan kazılar, günümüzden yaklaşık 12.000 yıl öncesine, yani Neolitik Çağ’ın şafağına uzanan bir gerçeği gün yüzüne çıkarmıştır. Bu keşfin en çarpıcı yanı, henüz yerleşik hayata geçmemiş, tarımı keşfetmemiş \"avcı-toplayıcı\" toplulukların; ağırlığı 20 tonu, boyu ise 6 metreyi bulan devasa \"T\" biçimli sütunları nasıl bir mühendislik zekasıyla inşa ettiğidir.\n\nGöbeklitepe, klasik tarih kitaplarındaki \"önce tarım yapıldı, sonra yerleşik hayata geçildi ve tapınaklar inşa edildi\" şeklindeki doğrusal ilerleme teorisini yerle bir etmiştir. Buradaki buluntular, insanın aslında \"ortak bir inanç\" ve \"ritüel\" etrafında toplanmak için bir araya geldiğini, yani inancın tarımdan daha önce doğduğunu kanıtlamaktadır. Sütunların üzerinde yer alan aslan, yılan, turna ve akrep gibi kabartmalar; o dönem insanının sadece hayatta kalma mücadelesi vermediğini, aynı zamanda sembolik bir dil ve gelişmiş bir estetik algıya sahip olduğunu göstermektedir. Stonehenge’den 7.000, Mısır Piramitleri’nden ise yaklaşık 7.500 yıl daha eski olan bu yapılar topluluğu, insanlık hafızasının kayıp sayfalarını yeniden yazmaktadır.\n\nBugün Göbeklitepe, hızlı okuma becerisiyle geniş metin bloklarını tarayan bir lise öğrencisi için sadece bir tarih sorusu değil; karmaşık verileri analiz etme fırsatı sunan bir bilgi okyanusudur. Arkeolojik terminolojinin, sayısal verilerin ve soyut tahlillerin iç içe geçtiği bu metin, zihnin odaklanma kapasitesini ölçmek için tasarlanmıştır. Göbeklitepe’nin sütunları arasında yankılanan o sessiz soru, modern insanın hıza dayalı yaşamında hâlâ güncelliğini korumaktadır: Binlerce yıl önce bu devasa taşları dikmek için gereken kolektif irade, bugün bilgi dağlarını aşmak için gereken azimden farksız mıdır?",
      "questions": [
        {
          "question": "Metinde Göbeklitepe’nin tarih kitaplarındaki \"geleneksel teorileri\" yer yerle bir etmesinin asıl sebebi nasıl açıklanmıştır?",
          "options": [
            "Piramitlerden daha gösterişli mimari yapılara sahip olmasıyla",
            "İnsanların tarıma geçmeden önce kolektif bir inanç ve tapınma ihtiyacıyla bir araya geldiğini göstermesiyle",
            "Şanlıurfa il sınırları içerisinde çok geniş bir alana yayılmasıyla",
            "Kazı çalışmalarının bir Türk arkeolog tarafından değil, yabancı bir uzman tarafından başlatılmasıyla"
          ],
          "correctIndex": 1
        },
        {
          "question": "Sütunlar üzerindeki hayvan kabartmaları (aslan, akrep, turna vb.) o dönem insanı hakkında bize neyi kanıtlamaktadır?",
          "options": [
            "Sadece vahşi hayvanlardan korunmak için mağaralarda yaşadıklarını",
            "Tarımsal faaliyetlerde hayvan gücünden yararlandıklarını",
            "Gelişmiş bir estetik algıya, sembolik bir dile ve sanatsal bir yeteneğe sahip olduklarını",
            "Hayvanları evcilleştirmek için tapınaklarda ayinler düzenlediklerini"
          ],
          "correctIndex": 2
        },
        {
          "question": "Göbeklitepe’nin Stonehenge ve Mısır Piramitleri ile kıyaslandığında ortaya çıkan en önemli sonuç nedir?",
          "options": [
            "Mimaride kullanılan taşların diğer yapılardan daha hafif olması",
            "Diğer tüm anıtsal yapılardan binlerce yıl daha eski olan, bilinen en eski inanç merkezi olması",
            "Diğer medeniyetlerin Göbeklitepe’den etkilenerek mimariyi öğrenmiş olması",
            "Kazıların hala devam etmesi nedeniyle tam bir tarihlendirme yapılamaması"
          ],
          "correctIndex": 1
        },
        {
          "question": "000 yıl vb.) okuyucuya hangi mesajı vermeyi amaçlamaktadır?",
          "options": [
            "Şanlıurfa'nın turizm potansiyelinin ne kadar yüksek olduğunu",
            "Arkeolojik kazıların ne kadar pahalı bir süreç olduğunu",
            "Avcı-toplayıcı insanların imkânsız gibi görünen mühendislik başarılarını somutlaştırmayı",
            "Gelecekte daha büyük yapıların bulunabileceği ihtimalini"
          ],
          "correctIndex": 0
        }
      ]
    },
    {
      "id": "lise-bir-strateji-dehasinin-dogusu-anafartalar-ve-conkbayiri",
      "title": "Bir Strateji Dehasının Doğuşu: Anafartalar ve Conkbayırı",
      "text": "1915 yılının Ağustos ayı, Çanakkale Cephesi'nde sadece bir fiziksel direnişin değil, aynı zamanda askeri bir dehanın dünya tarihine geçtiği bir dönüm noktasıdır. İtilaf Devletleri, Gelibolu Yarımadası'ndaki tıkanıklığı aşmak amacıyla Suvla Koyu'na yeni bir çıkarma yaparak Türk savunmasını arkadan kuşatmayı hedeflemiştir. Bu kritik eşikte, 9-10 Ağustos tarihlerinde gerçekleşen Anafartalar ve Conkbayırı muharebeleri, sadece bir cephe savunması değil; bir milletin kaderinin tayin edildiği anlardır. Henüz genç bir Kurmay Albay olan Mustafa Kemal'in, müttefik ordularının sayıca üstünlüğüne rağmen araziyi bir satranç tahtası gibi okuması, tarihin akışını değiştirmiştir.\n\nMustafa Kemal’in \"Size taarruzu değil, ölmeyi emrediyorum\" sözüyle simgeleşen o sarsılmaz irade, Conkbayırı’ndaki süngü hücumuyla somut bir zafere dönüşmüştür. Türk askeri, mermisi tükendiğinde dahi sadece süngüsüyle dünyanın en modern ordularına karşı bir set oluşturmuştur. Bu muharebeler sırasında Mustafa Kemal'in saati, göğsüne isabet eden bir şarapnel parçasını durdurarak bir mucizeye kapı aralamış; ancak asıl mucize, onun \"İnisiyatif kullanma\" becerisinde saklıdır. Emir beklemek yerine durumun vahametini kavrayıp anlık kararlarla yedek kuvvetleri en doğru noktaya sevk etmesi, askeri literatürde bugün bile \"hız ve stratejinin zaferi\" olarak okutulmaktadır.\n\nBugün hızlı okuma egzersizleri yapan bir lise öğrencisi için bu metin, sadece tarihî bir kronoloji değil; yüksek yoğunluklu bir odaklanma testidir. Cümle aralarındaki askeri terimler, tarihsel tarihler ve coğrafi betimlemeler, zihnin bilgiyi \"taramadan ziyade işleme\" kapasitesini ölçer. Çanakkale'de kazanılan zafer, bir saniyenin ve doğru kararın ne kadar büyük farklar yarattığını göstermiştir. Tıpkı o gün cephede kazanılan zaman gibi, bugün bir öğrencinin bir paragrafı saniyeler içinde doğru analiz etmesi de akademik mücadelesindeki en büyük savunma hattıdır.",
      "questions": [
        {
          "question": "Metne göre müttefik ordularının Suvla Koyu’na çıkarma yapmalarındaki asıl amaç nedir?",
          "options": [
            "Türk ordusuna lojistik destek sağlamak",
            "İstanbul’u deniz yoluyla doğrudan bombalamak",
            "Cephedeki tıkanıklığı aşarak Türk savunmasını arkadan kuşatmak",
            "Barış görüşmelerini başlatmak için güvenli bir bölge oluşturmak"
          ],
          "correctIndex": 2
        },
        {
          "question": "Mustafa Kemal’in Anafartalar ve Conkbayırı’ndaki başarısı askeri açıdan hangi kavramla ilişkilendirilmiştir?",
          "options": [
            "Geleneksel savaş yöntemlerini harfiyen uygulamasıyla",
            "Sadece şans faktörü ve saatinin hayatını kurtarmasıyla",
            "Araziyi doğru analiz etme, inisiyatif kullanma ve anlık stratejik kararlar alma becerisiyle",
            "Savaşın bitmesini bekleyerek savunmada kalmasıyla"
          ],
          "correctIndex": 2
        },
        {
          "question": "Metinde geçen \"süngü hücumu\" ifadesi, Türk ordusunun o anki hangi durumu hakkında bilgi vermektedir?",
          "options": [
            "Mühimmatın tükendiği zor şartlarda dahi büyük bir iradeyle mücadele edildiğini",
            "Türk ordusunun dünyanın en modern silahlarına sahip olduğunu",
            "Savaşın çok kısa bir sürede sona erdiğini",
            "Sadece gece baskınları yapıldığını"
          ],
          "correctIndex": 0
        },
        {
          "question": "Yazara göre bu metni hızlı okuma egzersizlerinde kullanmanın öğrencilere sağladığı asıl fayda nedir?",
          "options": [
            "Savaş tarihindeki tüm tarihleri ezberlemek",
            "Uzun cümleler ve teknik terimler arasında dikkati sürdürerek \"bilgiyi işleme\" becerisini geliştirmek",
            "Sadece Mustafa Kemal'in hayatını öğrenmek",
            "Edebiyat dersindeki şiir analizlerine hazırlık yapmak"
          ],
          "correctIndex": 1
        }
      ]
    }
  ]
};

const readingLevelAverages = {
  "3-sinif": { label: "3. Sınıf Ortalaması", speed: "70 - 100", comprehension: "%60 - %80" },
  "4-sinif": { label: "4. Sınıf Ortalaması", speed: "100 - 120", comprehension: "%60 - %80" },
  "5-6-sinif": { label: "5-6. Sınıf Ortalaması", speed: "120 - 150", comprehension: "%80" },
  "7-8-sinif": { label: "7-8. Sınıf Ortalaması", speed: "150 - 180", comprehension: "%80" },
  lise: { label: "Lise Ortalaması", speed: "180 - 250+", comprehension: "%80" },
};

function getWordCount(text = "") {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function getRandomReadingText(level, subLevel) {
  const key = level === "ilkokul" || level === "ortaokul" ? subLevel : level;
  const pool = readingTestBank[key] || [];
  return pool[Math.floor(Math.random() * pool.length)];
}

function getReadingLevelLabel(level, subLevel) {
  if (level === "ilkokul") return subLevel === "3-sinif" ? "İlkokul / 3. Sınıf" : "İlkokul / 4. Sınıf";
  if (level === "ortaokul") return subLevel === "5-6-sinif" ? "Ortaokul / 5-6. Sınıf" : "Ortaokul / 7-8. Sınıf";
  if (level === "lise") return "Lise";
  return "";
}

function getSelectedAverage(level, subLevel) {
  const key = level === "lise" ? "lise" : subLevel;
  return readingLevelAverages[key];
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
  const [readingFontSize, setReadingFontSize] = useState(18);

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
  const selectedWordCount = selectedText ? getWordCount(selectedText.text) : 0;
  const speed = selectedWordCount && readingSeconds ? Math.round(selectedWordCount / (readingSeconds / 60)) : 0;
  const resultComment = getResultComment(speed, comprehension);
  const activeQuestion = selectedText?.questions?.[questionIndex];
  const selectedAverage = getSelectedAverage(level, subLevel);
  const canContinueFromLevel = level === "lise" || ((level === "ilkokul" || level === "ortaokul") && subLevel);


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
    setReadingWarning("");
    setShowPhoneNumber(false);
    setReadingFontSize(18);
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

            {(level === "ilkokul" || level === "ortaokul") && (
              <div className="reading-sublevel-box">
                <strong>{level === "ilkokul" ? "İlkokul için sınıf seçin" : "Ortaokul için sınıf seçin"}</strong>
                <div>
                  {level === "ilkokul" ? (
                    <>
                      <button type="button" className={subLevel === "3-sinif" ? "selected" : ""} onClick={() => setSubLevel("3-sinif")}>3. Sınıf</button>
                      <button type="button" className={subLevel === "4-sinif" ? "selected" : ""} onClick={() => setSubLevel("4-sinif")}>4. Sınıf</button>
                    </>
                  ) : (
                    <>
                      <button type="button" className={subLevel === "5-6-sinif" ? "selected" : ""} onClick={() => setSubLevel("5-6-sinif")}>5-6. Sınıf</button>
                      <button type="button" className={subLevel === "7-8-sinif" ? "selected" : ""} onClick={() => setSubLevel("7-8-sinif")}>7-8. Sınıf</button>
                    </>
                  )}
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
              <div><strong>{selectedWordCount}</strong><span>Kelime</span></div>
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
            <div className="reading-test-kicker">Süre ölçülüyor • {selectedWordCount} kelime</div>
            <div className="reading-title-row">
              <h2>{selectedText.title}</h2>
              <div className="reading-font-controls" aria-label="Yazı puntosu">
                <button type="button" onClick={() => setReadingFontSize((prev) => Math.max(14, prev - 2))}>−</button>
                <span>{readingFontSize}px</span>
                <button type="button" onClick={() => setReadingFontSize((prev) => Math.min(28, prev + 2))}>+</button>
              </div>
            </div>
            <article className="reading-text-box" style={{ "--reading-font-size": `${readingFontSize}px` }}>
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

            {selectedAverage && (
              <div className="reading-average-box">
                <h3>Okuma ve Anlama Ortalamaları</h3>
                <div className="reading-average-grid">
                  <div>
                    <span>{selectedAverage.label}</span>
                    <strong>{selectedAverage.speed}</strong>
                    <small>Kelime / Dakika</small>
                  </div>
                  <div>
                    <span>Beklenen Anlama</span>
                    <strong>{selectedAverage.comprehension}</strong>
                    <small>Ortalama seviye</small>
                  </div>
                </div>
              </div>
            )}

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
