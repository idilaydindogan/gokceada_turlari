import React from "react";
import personalCard from "../../public/personal_card.jpg";
import Image from "next/image";

const AboutUs = () => {
	return (
		<div className="min-h-screen text-blue px-12 mt-12">
			<div className=" w-full flex justify-center mt-4">
				<Image
					src={personalCard}
					alt="gokceada turlari brand logo"
					className="opacity-90"
					sizes="100vw"
					objectFit="contain"
				/>
			</div>
			<h1 className="font-semibold text-lg lg:text-xl py-12">Biz Kimiz!</h1>
			<div className="space-y-4 text-sm lg:text-base">
				<p>
					Merhaba, ismim Ayşegül. Gökçeada’ya gidip gelmelerimin sonunda pandemi
					sonrası Gökçeada ile olan bağım güçlendi ve yaklaşık 4 senedir
					İstanbul’u terk edip yılın büyük bir bölümü Gökçeada’da yaşıyorum.
				</p>
				<p>
					Boğaziçi Üniversitesindeki lisans eğitimimin ardından, yine Boğaziçi
					Üniversitesinde Sürdürülebilir Turizm Yönetiminde tezli yüksek lisans
					yaptım. Tezimi Gökçeada’nın tarım turizmi aracılığıyla sürdürülebilir
					turizm kalkınması hakkında yazdım ve bu sürede saha araştırması
					yaparak, adanın dokusunu ve yerel halkını daha yakından tanıdım. Eş
					zamanlı olarak Eskişehir Osmangazi Üniversitesi’nde Turist Rehberliği
					yüksek lisansını bitirdim ve resmi olarak kokartlı turist rehberi
					olmaya hak kazandım.
				</p>
				<p>
					Gökçeada’da yaşayan bir turist rehberi olarak kişilere özel butik
					turlar düzenliyorum ve Gökçeada’nın güzelliklerini sizlerle paylaşmak
					için can atıyorum. Gökçeada’nın görünmeyen yüzlerini benimle keşfedin!
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
