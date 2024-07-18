import React from "react";
import aboutUs from "../../public/aboutUs.jpeg";
import Image from "next/image";

const AboutUs = () => {
	return (
		<div className="min-h-screen text-blue px-12 my-12  w-full">
			<div className="flex lg:flex-row flex-col lg:space-x-4 gap-y-4 lg:gap-y-0  items-center lg:h-[600px]">
				<div className="lg:w-1/2 border border-beige h-full p-8 order-last lg:order-first">
					<h1 className="font-semibold text-lg lg:text-xl py-4">Ben Kimim!</h1>
					<div className="space-y-4 text-sm lg:text-base">
						<p>
							Merhaba, ismim Ayşegül. Gökçeada’ya gidip gelmelerimin sonunda
							pandemi sonrası Gökçeada ile olan bağım güçlendi ve yaklaşık 4
							senedir İstanbul’u terk edip yılın büyük bir bölümü Gökçeada’da
							yaşıyorum.
						</p>
						<p>
							Boğaziçi Üniversitesindeki lisans eğitimimin ardından, yine
							Boğaziçi Üniversitesinde Sürdürülebilir Turizm Yönetiminde tezli
							yüksek lisans yaptım. Tezimi Gökçeada’nın tarım turizmi
							aracılığıyla sürdürülebilir turizm kalkınması hakkında yazdım ve
							bu sürede saha araştırması yaparak, adanın dokusunu ve yerel
							halkını daha yakından tanıdım. Eş zamanlı olarak Eskişehir
							Osmangazi Üniversitesi’nde Turist Rehberliği yüksek lisansını
							bitirdim ve resmi olarak kokartlı turist rehberi olmaya hak
							kazandım.
						</p>
						<p>
							Gökçeada’da yaşayan bir turist rehberi olarak kişilere özel butik
							turlar düzenliyorum ve Gökçeada’nın güzelliklerini sizlerle
							paylaşmak için can atıyorum. Gökçeada’nın görünmeyen yüzlerini
							benimle keşfedin!
						</p>
					</div>
				</div>
				<div className="border border-beige h-full flex justify-center lg:w-1/2">
					<div className="flex items-center">
						<Image
							src={aboutUs}
							alt="gokceada turlari brand logo"
							className="opacity-90 "
							objectFit="contain"
							width={400}
							height={400}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
