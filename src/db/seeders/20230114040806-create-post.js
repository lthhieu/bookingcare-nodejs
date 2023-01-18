'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Posts', [
         {
            contentHtmlVi: `<h4>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h4>
      <ul>
         <li>Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh</li>
         <li>Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris)</li>
         <li>Bác sĩ nhận khám từ 16 tuổi trở lên</li>
      </ul>
      <h6>Quá trình đào tạo</h6>
      <ul>
         <li>Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học y dược thành phố Hồ Chí Minh</li>
         <li>Học chuyên khoa cấp I và chuyên khoa cấp II Chuyên ngành Tâm thần, Đại học Y khoa Huế</li>
         <li>Tốt nghiệp Tâm lý trị liệu, trường Tâm lý thực Hành Paris (Psychology practique de Paris)</li>
      </ul>
      <h6>Quá trình công tác</h6>
      <ul>
         <li>Nguyên Trưởng phòng Kế hoạch Nghiệp vụ, Trưởng phòng khám Tâm thần Quận 3, thành phố Hồ Chí Minh</li>
         <li>Nguyên Trưởng khoa lâm sàng Bệnh tâm thần thành phố Hồ Chí Minh</li>
         <li>Giám định viên tư pháp chuyên ngành Tâm thần giám định các trường hợp trọng án, các trường hợp có liên quan pháp lý do cảnh sát điều tra, tòa án các cấp trưng cầu.</li>
      </ul>
      <h6>Khám và điều trị</h6>
      <ul>
         <li>Các rối loạn giấc ngủ không thực tổn: mất ngủ, ngủ nhiều, ngủ ngày quá mức, rối loạn nhịp thức ngủ, hoảng sợ khi ngủ, ác mộng, ngủ rũ,...</li>
         <li>Các rối loạn lo âu: lo lắng, sợ hãi về tương lai, cảm giác cáu gắt, căng thẳng, vận động, bồn chồn, hồi hộp, vã mồ hôi tay chân, cồn cào,...</li>
         <li>Rối loạn trầm cảm: buồn chán, bi quan, mệt mỏi, giảm hoạt động,...</li>
         <li>Hưng cảm: vui vẻ quá mức, suồng sã, tăng hoạt động, đứng ngồi không yên,...</li>
         <li>Rối loạn hoang tưởng: hoang tưởng bị hại, bị theo dõi, liên hệ, bị tội,...</li>
         <li>Rối loạn ảo giác</li>
         <li>Các rối loạn liên quan đến stress</li>
         <li>Rối loạn khí sắc</li>
         <li>Rối loạn cảm xúc phân liệt</li>
         <li>Rối loạn đa nhân cách</li>
         <li>Các bệnh lý loạn thần do sử dụng chất (ma túy đá, cần sa, heroin..)...</li>
      </ul>`,
            contentHtmlEn: `<h4>Specialist II Doctor Tran Minh Khuyen</h4>
      <ul>
         <li>Former Head of Clinical Department, Psychiatry in Ho Chi Minh City</li>
         <li>Graduated in Psychotherapy, School of Psychology Practice de Paris</li>
         <li>Doctors who are 16 years old or older</li>
      </ul>
      <h6>Training process</h6>
      <ul>
         <li>Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City</li>
         <li>Specialized in Level I and Level II Specialization in Psychiatry, Hue University of Medicine</li>
         <li>Graduated in Psychotherapy from the School of Psychology practique de Paris</li>
      </ul>
      <h6>Working history</h6>
      <ul>
         <li>Former Head of Business Planning Department, Head of Psychiatric Clinic District 3, Ho Chi Minh City</li>
         <li>Former Head of Clinical Department of Psychiatry in Ho Chi Minh City</li>
         <li>Specialized Psychiatric judicial expert assesses serious cases, cases of legal relevance investigated by police, courts at all levels.</li>
      </ul>
      <h6>Examination and treatment</h6>
      <ul>
         <li>Nonreal sleep disorders: insomnia, hypersomnia, excessive daytime sleepiness, sleep-wake rhythm disturbances, sleep terrors, nightmares, narcolepsy,...</li>
         <li>Anxiety disorders: anxiety, fear of the future, feelings of irritability, tension, movement, restlessness, nervousness, sweating of hands and feet, restlessness,...</li >
         <li>Depressive disorder: boredom, pessimism, fatigue, decreased activity,...</li>
         <li>Manic: excessively cheerful, frivolous, hyperactive, restless,...</li>
         <li>Paranotic Disorder: Paranoia of being harmed, followed, contacted, accused,...</li>
         <li>Patients Disorder</li>
         <li>Stress related disorders</li>
         <li>Mood disorder</li>
         <li>Schizoaffective Disorder</li>
         <li>Multiple Personality Disorder</li>
         <li>Substance use psychosis (meth, marijuana, heroin..)...</li>
      </ul>`,
            descriptionVi: `Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris)
Bác sĩ nhận khám từ 16 tuổi trở lên`,
            descriptionEn: `Former Head of Clinical Department, Psychiatric Disease Ho Chi Minh City
Graduated in Psychotherapy, School of Practical Psychology of Paris (Psychology practique de Paris)
Doctors who are 16 years old or older`,
            contentMarkDownVi: `#### Bác sĩ Chuyên khoa II Trần Minh Khuyên

*   Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
*   Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris)
*   Bác sĩ nhận khám từ 16 tuổi trở lên

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ Đa khoa, Trường Đại học y dược thành phố Hồ Chí Minh
*   Học chuyên khoa cấp I và chuyên khoa cấp II Chuyên ngành Tâm thần, Đại học Y khoa Huế
*   Tốt nghiệp Tâm lý trị liệu, trường Tâm lý thực Hành Paris (Psychology practique de Paris)

###### Quá trình công tác

*   Nguyên Trưởng phòng Kế hoạch Nghiệp vụ, Trưởng phòng khám Tâm thần Quận 3, thành phố Hồ Chí Minh
*   Nguyên Trưởng khoa lâm sàng Bệnh tâm thần thành phố Hồ Chí Minh
*   Giám định viên tư pháp chuyên ngành Tâm thần giám định các trường hợp trọng án, các trường hợp có liên quan pháp lý do cảnh sát điều tra, tòa án các cấp trưng cầu.

###### Khám và điều trị

*   Các rối loạn giấc ngủ không thực tổn: mất ngủ, ngủ nhiều, ngủ ngày quá mức, rối loạn nhịp thức ngủ, hoảng sợ khi ngủ, ác mộng, ngủ rũ,...
*   Các rối loạn lo âu: lo lắng, sợ hãi về tương lai, cảm giác cáu gắt, căng thẳng, vận động, bồn chồn, hồi hộp, vã mồ hôi tay chân, cồn cào,...
*   Rối loạn trầm cảm: buồn chán, bi quan, mệt mỏi, giảm hoạt động,...
*   Hưng cảm: vui vẻ quá mức, suồng sã, tăng hoạt động, đứng ngồi không yên,...
*   Rối loạn hoang tưởng: hoang tưởng bị hại, bị theo dõi, liên hệ, bị tội,...
*   Rối loạn ảo giác
*   Các rối loạn liên quan đến stress
*   Rối loạn khí sắc
*   Rối loạn cảm xúc phân liệt
*   Rối loạn đa nhân cách
*   Các bệnh lý loạn thần do sử dụng chất (ma túy đá, cần sa, heroin..)...`,
            contentMarkDownEn: `#### Specialist II Doctor Tran Minh Khuyen

*   Former Head of Clinical Department, Psychiatry in Ho Chi Minh City
*   Graduated in Psychotherapy, School of Psychology Practice de Paris
*   Doctors who are 16 years old or older

###### Training process

*   Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City
*   Specialized in Level I and Level II Specialization in Psychiatry, Hue University of Medicine
*   Graduated in Psychotherapy from the School of Psychology practique de Paris

###### Working history

*   Former Head of Business Planning Department, Head of Psychiatric Clinic District 3, Ho Chi Minh City
*   Former Head of Clinical Department of Psychiatry in Ho Chi Minh City
*   Specialized Psychiatric judicial expert assesses serious cases, cases of legal relevance investigated by police, courts at all levels.

###### Examination and treatment

*   Nonreal sleep disorders: insomnia, hypersomnia, excessive daytime sleepiness, sleep-wake rhythm disturbances, sleep terrors, nightmares, narcolepsy,...
*   Anxiety disorders: anxiety, fear of the future, feelings of irritability, tension, movement, restlessness, nervousness, sweating of hands and feet, restlessness,...
*   Depressive disorder: boredom, pessimism, fatigue, decreased activity,...
*   Manic: excessively cheerful, frivolous, hyperactive, restless,...
*   Paranotic Disorder: Paranoia of being harmed, followed, contacted, accused,...
*   Patients Disorder
*   Stress related disorders
*   Mood disorder
*   Schizoaffective Disorder
*   Multiple Personality Disorder
*   Substance use psychosis (meth, marijuana, heroin..)...`,
            doctorId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Duy Hưng</h4>
      <ul>
         <li>Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu</li>
         <li>Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương</li>
         <li>Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương</li>
         <li>Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan</li>
         <li>Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu<br></li>
         <li>Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới</li>
         <li>Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội</li>
         <li>Trưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ</li>
         <li>Tốt nghiệp Đại học Y Hà Nội (1977)</li>
         <li>Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam</li>
      </ul>
      <h6>Phó Giáo sư khám và điều trị</h6>
      <p><strong>Các bệnh lý về chuyên sâu về da liễu người lớn và trẻ em</strong></p>
      <ul>
         <li>Trứng cá thông thường thanh thiếu niên, người lớn, trứng cá do thuốc, mỹ phẩm, do bôi corticord, các thể bệnh trứng cá nặng, trứng cá đỏ (rosacea)</li>
         <li>Điều trị da phục hồi da tổn hại do trứng cá, sẹo trứng cá</li>
         <li>Các bệnh lý da mặt: viêm da dị ứng, tổn hại da do sử dụng mỹ phẩm, do corticord, lão hóa da</li>
         <li>Nám da, tàn nhang, sạm da, các bệnh da tăng sắc tố sau viêm, sau trứng cá, do mỹ phẩm</li>
         <li>Viêm da cơ địa trẻ em và người lớn</li>
         <li>Viêm da dị ứng, viêm da tiếp xúc, viêm da dầu</li>
         <li>Tổ đỉa</li>
         <li>Mày đay</li>
         <li>Bạch biến</li>
         <li>Vảy nến</li>
         <li>Rụng tóc<br></li>
         <li>Các bệnh da do nhiễm khuẩn: Viêm nang lông, chốc, nhọt, viêm da mủ</li>
         <li>Zona, Thủy đậu, Herpes</li>
         <li>Ghẻ</li>
         <li>Các bênh da do nấm: Nấm nông da, nấm da đầu, nấm móng tay, móng chân, lang ben, nấm men niêm mạc</li>
         <li>Viêm mao mạch dị ứng</li>
         <li>các bệnh da: Có bọng nước, bệnh vẩy phấn hồng, á vẩy nến, liken phẳng, các bệnh da dị ứng thuốc</li>
         <li>U lành tính của da: Đồi mồi, u cổ tuyến mồ hôi, u mềm lây, u mềm treo, u tuyến bã</li>
         <li>Một số bệnh lông - tóc - móng</li>
         <li>Chăm sóc da (skincare)  cho viêm da mặt, trứng cá, liệu trình trị nám, lăn kim, huyết tương giàu tiểu cầu, trị sẹo trứng cá, laser, plasma trị u lành da, nám, đồi mồi</li>
         <li>Tiêm tái sinh nang tóc</li>
      </ul>
      <p><strong>Và các bệnh lý chuyên sâu khác về chuyên khoa Da liễu</strong></p>`,
            contentHtmlEn: `<h4>Associate Professor, Dr.Phil, Senior Doctor Nguyen Duy Hung</h4>
      <ul>
         <li>Associate Professor, Dr.Phil, Senior Doctor of Dermatology</li>
         <li>Doctor who used to work at the National Hospital of Dermatology</li>
         <li>Former Head of Directing Department at National Hospital of Dermatology</li>
         <li>Acquired Diploma in Dermatology at Dermatology Institute Bangkok - Thailand</li>
         <li>Doctors regularly participate in International Conferences and Conferences on Dermatology<br></li>
         <li>Member of Southeast Asia, Asia and the World Dermatology Society</li>
         <li>Lecturer of Dermatology at Hanoi Medical University</li>
         <li>Head of Dermatology Department, University of Business and Technology</li>
         <li>Graduated from Hanoi Medical University (1977)</li>
         <li>Former General Secretary of Vietnam Dermatology Association</li>
      </ul>
      <h6>Associate examination and treatment</h6>
      <p><strong>Specializing in adult and pediatric dermatology</strong></p>
      <ul>
         <li>Common acne in adolescents, adults, acne caused by drugs, cosmetics, topical corticosteroids, severe forms of acne, rosacea</li>
         <li>Skin treatment to restore damaged skin caused by acne, acne scars</li>
         <li>Facial skin diseases: atopic dermatitis, skin damage caused by using cosmetics, corticord, skin aging</li>
         <li>Skin pigmentation, freckles, tanning, post-inflammatory hyperpigmentation skin diseases, after acne, due to cosmetics</li>
         <li>Atopic dermatitis in children and adults</li>
         <li>Atopic dermatitis, contact dermatitis, seborrheic dermatitis</li>
         <li>The leech nest</li>
         <li>Urticaria</li>
         <li>Vitiligo</li>
         <li>Psoriasis</li>
         <li>Hair loss<br></li>
         <li>Infectious skin diseases: Folliculitis, impetigo, boils, pyoderma</li>
         <li>Zona, Chickenpox, Herpes</li>
         <li>Scabies</li>
         <li>Fungal skin diseases: Superficial fungus, scalp fungus, nail fungus, toenail fungus, ringworm, mucosal yeast</li>
         <li>Allergic vasculitis</li>
         <li>Skin diseases: bullous, rosacea, parapsoriasis, lichen planus, drug-allergic skin diseases</li>
         <li>Benign tumors of the skin: Age spots, sweat glands, molluscum contagiosum, mesenteric molluscum contagiosum</li>
         <li>Some diseases of hair - hair - nails</li>
         <li>Skincare (skincare)  for facial dermatitis, acne, melasma treatment, needle roller, platelet-rich plasma, acne scar treatment, laser, plasma treatment for skin tumors, melasma, age spots</li>
         <li>Injected to regenerate hair follicles</li>
      </ul>
      <p><strong>And other specialized diseases in Dermatology</strong></p>`,
            descriptionVi: `Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương
Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương
Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam`,
            descriptionEn: `Former Head of Directing Department at Central Dermatology Hospital
Doctor who used to work at the Central Hospital of Dermatology
Former General Secretary of Vietnam Dermatology Association`,
            contentMarkDownVi: `#### Phó Giáo sư, Tiến sĩ, Bác sĩ Cao cấp Nguyễn Duy Hưng

*   Phó giáo sư, Tiến sĩ, Bác sĩ cao cấp chuyên khoa Da liễu
*   Bác sĩ từng công tác tại Bệnh viện Da liễu Trung ương
*   Nguyên Trưởng phòng chỉ đạo tuyến tại Bệnh viện Da liễu Trung ương
*   Đạt chứng chỉ Diploma về Da liễu tại Viện da liễu Băng Cốc - Thái Lan
*   Bác sĩ thường xuyên tham gia các Hội thảo, Hội nghị Quốc tế về Da liễu  
      
*   Hội viên của Hội Da liễu Đông Nam Á, Châu Á và Thế giới
*   Giảng viên bộ môn Da liễu tại Đại Học Y Hà Nội
*   Trưởng Bộ môn Da liễu, Trường Đại học Kinh doanh và Công nghệ
*   Tốt nghiệp Đại học Y Hà Nội (1977)
*   Nguyên Tổng Thư ký Hiệp hội Da liễu Việt Nam

###### Phó Giáo sư khám và điều trị

**Các bệnh lý về chuyên sâu về da liễu người lớn và trẻ em**

*   Trứng cá thông thường thanh thiếu niên, người lớn, trứng cá do thuốc, mỹ phẩm, do bôi corticord, các thể bệnh trứng cá nặng, trứng cá đỏ (rosacea)
*   Điều trị da phục hồi da tổn hại do trứng cá, sẹo trứng cá
*   Các bệnh lý da mặt: viêm da dị ứng, tổn hại da do sử dụng mỹ phẩm, do corticord, lão hóa da
*   Nám da, tàn nhang, sạm da, các bệnh da tăng sắc tố sau viêm, sau trứng cá, do mỹ phẩm
*   Viêm da cơ địa trẻ em và người lớn
*   Viêm da dị ứng, viêm da tiếp xúc, viêm da dầu
*   Tổ đỉa
*   Mày đay
*   Bạch biến
*   Vảy nến
*   Rụng tóc  
      
*   Các bệnh da do nhiễm khuẩn: Viêm nang lông, chốc, nhọt, viêm da mủ
*   Zona, Thủy đậu, Herpes
*   Ghẻ
*   Các bênh da do nấm: Nấm nông da, nấm da đầu, nấm móng tay, móng chân, lang ben, nấm men niêm mạc
*   Viêm mao mạch dị ứng
*   các bệnh da: Có bọng nước, bệnh vẩy phấn hồng, á vẩy nến, liken phẳng, các bệnh da dị ứng thuốc
*   U lành tính của da: Đồi mồi, u cổ tuyến mồ hôi, u mềm lây, u mềm treo, u tuyến bã
*   Một số bệnh lông - tóc - móng
*   Chăm sóc da (skincare)  cho viêm da mặt, trứng cá, liệu trình trị nám, lăn kim, huyết tương giàu tiểu cầu, trị sẹo trứng cá, laser, plasma trị u lành da, nám, đồi mồi
*   Tiêm tái sinh nang tóc

**Và các bệnh lý chuyên sâu khác về chuyên khoa Da liễu**`,
            contentMarkDownEn: `#### Associate Professor, Dr.Phil, Senior Doctor Nguyen Duy Hung

*   Associate Professor, Dr.Phil, Senior Doctor of Dermatology
*   Doctor who used to work at the National Hospital of Dermatology
*   Former Head of Directing Department at National Hospital of Dermatology
*   Acquired Diploma in Dermatology at Dermatology Institute Bangkok - Thailand
*   Doctors regularly participate in International Conferences and Conferences on Dermatology  
      
*   Member of Southeast Asia, Asia and the World Dermatology Society
*   Lecturer of Dermatology at Hanoi Medical University
*   Head of Dermatology Department, University of Business and Technology
*   Graduated from Hanoi Medical University (1977)
*   Former General Secretary of Vietnam Dermatology Association

###### Associate examination and treatment

**Specializing in adult and pediatric dermatology**

*   Common acne in adolescents, adults, acne caused by drugs, cosmetics, topical corticosteroids, severe forms of acne, rosacea
*   Skin treatment to restore damaged skin caused by acne, acne scars
*   Facial skin diseases: atopic dermatitis, skin damage caused by using cosmetics, corticord, skin aging
*   Skin pigmentation, freckles, tanning, post-inflammatory hyperpigmentation skin diseases, after acne, due to cosmetics
*   Atopic dermatitis in children and adults
*   Atopic dermatitis, contact dermatitis, seborrheic dermatitis
*   The leech nest
*   Urticaria
*   Vitiligo
*   Psoriasis
*   Hair loss  
      
*   Infectious skin diseases: Folliculitis, impetigo, boils, pyoderma
*   Zona, Chickenpox, Herpes
*   Scabies
*   Fungal skin diseases: Superficial fungus, scalp fungus, nail fungus, toenail fungus, ringworm, mucosal yeast
*   Allergic vasculitis
*   Skin diseases: bullous, rosacea, parapsoriasis, lichen planus, drug-allergic skin diseases
*   Benign tumors of the skin: Age spots, sweat glands, molluscum contagiosum, mesenteric molluscum contagiosum
*   Some diseases of hair - hair - nails
*   Skincare (skincare) for facial dermatitis, acne, melasma treatment, needle roller, platelet-rich plasma, acne scar treatment, laser, plasma treatment for skin tumors, melasma, age spots
*   Injected to regenerate hair follicles

**And other specialized diseases in Dermatology**`,
            doctorId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h4>
      <ul>
         <li>Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng</li>
         <li>Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương</li>
         <li>Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương</li>
         <li>Bác sĩ Nội trú chuyên ngành Tai Mũi Họng</li>
         <li>Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng</li>
      </ul>
      <h6>Khám &amp; điều trị</h6>
      <ul>
         <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn</li>
         <li>Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em</li>
         <li>Nội soi Tai Mũi Họng</li>
         <li>Thực hiện các qui trình kỹ thuật Tai Mũi Họng</li>
      </ul>
      <p><strong>Các bệnh về tai</strong></p>
      <ul>
         <li>Ù tai, nghe kém, điếc đột ngột</li>
         <li>Chẩy mủ tai, viêm tai giữa cấp, mạn</li>
         <li>Vá màng nhĩ nội soi</li>
         <li>Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài</li>
      </ul>
      <p><strong>Các bệnh mũi xoang</strong></p>
      <ul>
         <li>Viêm mũi xoang dị ứng, viêm mũi vận mạch</li>
         <li>Viêm mũi ngạt tắc mũi mạn tính</li>
         <li>Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li>
         <li>Nấm mũi xoang</li>
         <li>Đau đầu mạn tính do mũi xoang…</li>
      </ul>
      <p><strong>Các bệnh về họng thanh quản</strong></p>
      <ul>
         <li>Ở trẻ em viêm VA, viêm mũi họng mạn tính</li>
         <li>Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)</li>
         <li>Viêm amiđan cấp, mạn</li>
         <li>Nạo V.A</li>
         <li>Cắt Amidan</li>
      </ul>`,
            contentHtmlEn: `<h4>Associate Professor, Dr.Phil, Doctor Nguyen Thi Hoai An</h4>
      <ul>
         <li>Associate Professor, Doctor of Otolaryngology</li>
         <li>Former Head of Children's Otolaryngology Department, National Hospital of Otolaryngology</li>
         <li>Over 25 years working at the National Hospital of Otolaryngology</li>
         <li>Resident of Otolaryngology</li>
         <li>Doctor who trained in the French Republic in Ear, Nose and Throat</li>
      </ul>
      <h4>Examine &amp; treatment</h4>
      <ul>
         <li>Specializing in examination and treatment of adult ENT diseases</li>
         <li>Specializing in examination and treatment of children's ENT diseases</li>
         <li>Endoscopy</li>
         <li>Perform ENT procedures</li>
      </ul>
      <p><strong>Ear diseases</strong></p>
      <ul>
         <li>Tinnitus, hearing loss, sudden deafness</li>
         <li>Purulent ear discharge, acute and chronic otitis media</li>
         <li>Endoscopic tympanic membrane patch</li>
         <li>Early detection and good treatment of otitis media, eardrum closed, no pus coming out</li>
      </ul>
      <p><strong>Nose and sinus diseases</strong></p>
      <ul>
         <li>Allergic Rhinitis, Vasomotor Rhinitis</li>
         <li>Chronic stuffy nose</li>
         <li>Long-term chronic polysinusitis, difficult to heal, nasal polyps</li>
         <li>Nose and sinus fungus</li>
         <li>Chronic sinus headache…</li>
      </ul>
      <p><strong>Diseases of the pharynx</strong></p>
      <ul>
         <li>In children with VA, chronic nasopharyngitis</li>
         <li>Complications of VA (such as otitis media, acute otitis media, croup laryngitis....)</li>
         <li>Acute and chronic tonsillitis</li>
         <li>Dream V.A</li>
         <li>Cut the tonsils</li>
      </ul>`,
            descriptionVi: `Nguyên Trưởng khoa Tai mũi họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
Trên 25 năm công tác tại Bệnh viện Tai mũi họng Trung ương
Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn và trẻ em`,
            descriptionEn: `Former Head of Children's Otolaryngology Department, National Hospital of Otolaryngology
Over 25 years of working at the Central Ear, Nose and Throat Hospital
Specializes in the examination and treatment of diseases of the ear, nose and throat in adults and children`,
            contentMarkDownVi: `#### Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An

*   Phó Giáo sư, Tiến sĩ chuyên ngành Tai Mũi Họng
*   Nguyên Trưởng khoa Tai Mũi Họng trẻ em, Bệnh viện Tai Mũi Họng Trung ương
*   Trên 25 năm công tác tại Bệnh viện Tai Mũi Họng Trung ương
*   Bác sĩ Nội trú chuyên ngành Tai Mũi Họng
*   Bác sĩ đã từng tu nghiệp Cộng hòa Pháp về Tai Mũi Họng

###### Khám & điều trị

*   Chuyên khám và điều trị các bệnh lý Tai Mũi Họng người lớn
*   Chuyên khám và điều trị các bệnh lý Tai Mũi Họng trẻ em
*   Nội soi Tai Mũi Họng
*   Thực hiện các qui trình kỹ thuật Tai Mũi Họng

**Các bệnh về tai**

*   Ù tai, nghe kém, điếc đột ngột
*   Chẩy mủ tai, viêm tai giữa cấp, mạn
*   Vá màng nhĩ nội soi
*   Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài

**Các bệnh mũi xoang**

*   Viêm mũi xoang dị ứng, viêm mũi vận mạch
*   Viêm mũi ngạt tắc mũi mạn tính
*   Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang
*   Nấm mũi xoang
*   Đau đầu mạn tính do mũi xoang…

**Các bệnh về họng thanh quản**

*   Ở trẻ em viêm VA, viêm mũi họng mạn tính
*   Các biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)
*   Viêm amiđan cấp, mạn
*   Nạo V.A
*   Cắt Amidan`,
            contentMarkDownEn: `#### Associate Professor, Dr.Phil, Doctor Nguyen Thi Hoai An

*   Associate Professor, Doctor of Otolaryngology
*   Former Head of Children's Otolaryngology Department, National Hospital of Otolaryngology
*   Over 25 years working at the National Hospital of Otolaryngology
*   Resident of Otolaryngology
*   Doctor who trained in the French Republic in Ear, Nose and Throat

#### Examine & treatment

*   Specializing in examination and treatment of adult ENT diseases
*   Specializing in examination and treatment of children's ENT diseases
*   Endoscopy
*   Perform ENT procedures

**Ear diseases**

*   Tinnitus, hearing loss, sudden deafness
*   Purulent ear discharge, acute and chronic otitis media
*   Endoscopic tympanic membrane patch
*   Early detection and good treatment of otitis media, eardrum closed, no pus coming out

**Nose and sinus diseases**

*   Allergic Rhinitis, Vasomotor Rhinitis
*   Chronic stuffy nose
*   Long-term chronic polysinusitis, difficult to heal, nasal polyps
*   Nose and sinus fungus
*   Chronic sinus headache…

**Diseases of the pharynx**

*   In children with VA, chronic nasopharyngitis
*   Complications of VA (such as otitis media, acute otitis media, croup laryngitis....)
*   Acute and chronic tonsillitis
*   Dream V.A
*   Cut the tonsils`,
            doctorId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Bác sĩ chuyên khoa I Võ Thị Thanh Vân</h4>
      <ul>
         <li>Hiện là Bác sĩ Da liễu tại Phòng khám Da liễu Sài Gòn</li>
         <li>Nhiều năm kinh nghiệm trong khám và điều trị các bệnh da liễu</li>
      </ul>
      <h6>Quá trình công tác</h6>
      <ul>
         <li>Bác sĩ điều trị tại Bệnh viện Da liễu TP.HCM (1988 - 2017)</li>
         <li>Bác sĩ nội trú tại Bệnh viện Saint Louis, La Rochelle, Pháp (1998)</li>
      </ul>
      <h6>Quá trình đào tạo</h6>
      <ul>
         <li>Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Da liễu, Đại học Y dược Huế (2007)</li>
         <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TP.HCM (1986)</li>
         <li>Chứng chỉ Sử dụng kỹ thuật Laser trong xử trí tổn thương mạch máu và sắc tố da, Đại học Y dược TP.HCM (2013)</li>
      </ul>
      <h6>Khám và điều trị</h6>
      <p><strong>Bác sĩ khám và điều trị:</strong></p>
      <ul>
         <li>Trị mụn</li>
         <li>Trị nám, tàn nhang</li>
         <li>Trị sẹo rỗ (lõm)</li>
         <li>Khám bệnh lý da liễu</li>
      </ul>`,
            contentHtmlEn: `<h4>Specialist I Doctor Vo Thi Thanh Van</h4>
      <ul>
         <li>Currently a Dermatologist at Saigon Dermatology Clinic</li>
         <li>Many years of experience in the examination and treatment of dermatological diseases</li>
      </ul>
      <h6>Working history</h6>
      <ul>
         <li>Doctor at Ho Chi Minh City Hospital of Dermatology (1988 - 2017)</li>
         <li>Resident at Hospital Saint Louis, La Rochelle, France (1998)</li>
      </ul>
      <h6>Training process</h6>
      <ul>
         <li>Graduated from Doctor of Specialist I in Dermatology, Hue University of Medicine and Pharmacy (2007)</li>
         <li>Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1986)</li>
         <li>Certificate Using Laser technology in the treatment of vascular lesions and skin pigmentation, University of Medicine and Pharmacy, HCMC (2013)</li>
      </ul>
      <h6>Examination and treatment</h6>
      <p><strong>Doctor examines and treats:</strong></p>
      <ul>
         <li>Treat acne</li>
         <li>Treat melasma, freckles</li>
         <li>Treatment of pitted (concave) scars</li>
         <li>Dermatology examination</li>
      </ul>`,
            descriptionVi: `Hiện là Bác sĩ Da liễu tại Phòng khám Da liễu Sài Gòn
Nhiều năm kinh nghiệm trong khám và điều trị các bệnh da liễu`,
            descriptionEn: `Currently a Dermatologist at Saigon Dermatology Clinic
Many years of experience in the examination and treatment of dermatological diseases`,
            contentMarkDownVi: `#### Bác sĩ chuyên khoa I Võ Thị Thanh Vân

*   Hiện là Bác sĩ Da liễu tại Phòng khám Da liễu Sài Gòn
*   Nhiều năm kinh nghiệm trong khám và điều trị các bệnh da liễu

###### Quá trình công tác

*   Bác sĩ điều trị tại Bệnh viện Da liễu TP.HCM (1988 - 2017)
*   Bác sĩ nội trú tại Bệnh viện Saint Louis, La Rochelle, Pháp (1998)

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Da liễu, Đại học Y dược Huế (2007)
*   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TP.HCM (1986)
*   Chứng chỉ Sử dụng kỹ thuật Laser trong xử trí tổn thương mạch máu và sắc tố da, Đại học Y dược TP.HCM (2013)

###### Khám và điều trị

**Bác sĩ khám và điều trị:**

*   Trị mụn
*   Trị nám, tàn nhang
*   Trị sẹo rỗ (lõm)
*   Khám bệnh lý da liễu`,
            contentMarkDownEn: `#### Specialist I Doctor Vo Thi Thanh Van

*   Currently a Dermatologist at Saigon Dermatology Clinic
*   Many years of experience in the examination and treatment of dermatological diseases

###### Working history

*   Doctor at Ho Chi Minh City Hospital of Dermatology (1988 - 2017)
*   Resident at Hospital Saint Louis, La Rochelle, France (1998)

###### Training process

*   Graduated from Doctor of Specialist I in Dermatology, Hue University of Medicine and Pharmacy (2007)
*   Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1986)
*   Certificate Using Laser technology in the treatment of vascular lesions and skin pigmentation, University of Medicine and Pharmacy, HCMC (2013)

###### Examination and treatment

**Doctor examines and treats:**

*   Treat acne
*   Treat melasma, freckles
*   Treatment of pitted (concave) scars
*   Dermatology examination`,
            doctorId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Giáo sư, Tiến sĩ, Bác sĩ Trần Ngọc Ân</h4>
      <ul>
         <li>Cố vấn chuyên môn chuyên khoa Cơ xương khớp, Bệnh Viện Đa khoa Hồng Phát</li>
         <li>Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp</li>
         <li>Chủ tịch Hội Thấp khớp học Việt Nam</li>
         <li>Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai</li>
         <li>Nguyên Giám đốc Bệnh viện E</li>
         <li>Nguyên giảng viên cao cấp Đại học Y Hà Nội</li>
         <li>Bác sĩ khám cho người bệnh từ 14 tuổi trở lên</li>
      </ul>
      <h6>Quá trình công tác</h6>
      <ul>
         <li>Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai</li>
         <li>Giáo sư đào tạo được trên 10 Tiến sĩ, trên 30 Bác sĩ Chuyên khoa cấp II, Thạc sĩ và Bác sĩ Nội trú về chuyên ngành thấp khớp</li>
         <li>Chỉ đạo chuyên môn tại Trung tâm Cơ xương khớp, Bệnh viện E (2004-2007)</li>
         <li>Giám đốc Bệnh viện E (1995-2004)</li>
         <li>Phó trưởng khoa – Bí thư chi bộ khoa Y trường Đại học Tây Nguyên (1984)</li>
      </ul>
      <h6>Quá trình đào tạo</h6>
      <ul>
         <li>Một trong các Phó Tiến sĩ đầu tiên bảo vệ luận án Tiến sĩ trong nước tại Trường Đại học Y với đề tài: “Viêm cột sống dính khớp” (1981)</li>
         <li>Tham quan, trao đổi tại Hung-ga-ri (1974)</li>
         <li>Tốt nghiệp bác sĩ trường Đại học Y Hà Nội (1960)</li>
      </ul>
      <h6>Giải thưởng</h6>
      <ul>
         <li>Huân chương Lao động hạng Hai (2007)</li>
         <li>Huân chương Lao động hạng Ba (2001)</li>
      </ul>
      <h6>Sách và các công trình nghiên cứu, báo cáo khoa học</h6>
      <ul>
         <li>Tác giả cuốn sách: Bệnh thấp khớp</li>
         <li>Tham gia biên soạn 3 cuốn sách: Bách khoa thư bệnh học, Bệnh học Nội khoa và Nội khoa cơ sở</li>
      </ul>
      <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
      <ul>
         <li>Chủ tịch Hội Thấp khớp học Việt Nam</li>
      </ul>
      <h6>Giáo sư Khám &amp; điều trị</h4>
      <p><strong>Giáo sư chuyên khám, điều trị các bệnh chuyên khoa Cơ xương khớp:</strong></p>
      <ul>
         <li>Viêm khớp dạng thấp</li>
         <li>Bệnh Gút cấp và mạn tính</li>
         <li>Viêm cột sống dính khớp</li>
         <li>Thoái hóa khớp, cột sống cổ, cột sống thắt lưng</li>
         <li>Đau thần kinh tọa, thoát vị đĩa đệm</li>
         <li>Viêm quanh khớp vai và các điểm bám gân khác</li>
         <li>Bệnh loãng xương</li>
         <li>Bệnh đau nhức xương khớp</li>
         <li>Lupus ban đỏ hệ thống</li>
         <li>Nội soi khớp gối, khớp vai</li>
      </ul>`,
            contentHtmlEn: `<h4>Professor, Dr.Phil, Doctor Tran Ngoc An</h4>
      <ul>
         <li>Professional Consultant of Musculoskeletal, Hong Phat General Hospital</li>
         <li>Leading professor with nearly 50 years of experience in treating musculoskeletal diseases</li>
         <li>Chairman of Vietnam Association of Rheumatology</li>
         <li>Former Head of Musculoskeletal Department, Bach Mai Hospital </li>
         <li>Former Director of E Hospital</li>
         <li>Former senior lecturer at Hanoi Medical University</li>
         <li>Doctor examines patients 14 years of age and older</li>
      </ul>
      <h6>Working history</h6>
      <ul>
         <li>Former Head of Musculoskeletal Department, Bach Mai Hospital</li>
         <li>Professor has trained over 10 PhDs, over 30 Level II Specialists, Masters and Resident Physicians in rheumatology</li>
         <li>Professional direction at Center for Musculoskeletal, E Hospital (2004-2007)</li>
         <li>Director of Hospital E (1995-2004)</li>
         <li>Deputy Dean – Secretary of the Medical Branch of Tay Nguyen University (1984)</li>
      </ul>
      <h6>Training process</h6>
      <ul>
         <li>One of the first deputy doctors to defend the doctoral thesis in the country at the Medical University with the topic: “Ankylosing spondylitis” (1981)</li>
         <li>Sightseeing and exchange in Hungary (1974)</li>
         <li>Graduated as a doctor from Hanoi Medical University (1960)</li>
      </ul>
      <h6>Awards</h6>
      <ul>
         <li>Second Class Labor Medal (2007)</li>
         <li>Third Class Labor Medal (2001)</li>
      </ul>
      <h6>Books and research works, scientific reports</h6>
      <ul>
         <li>Author of the book: Rheumatism</li>
         <li>Participated in compiling 3 books: Encyclopedia of Pathology, Medical Pathology and Basic Internal Medicine</li>
      </ul>
      <h6>Members of scientific associations and professional organizations</h6>
      <ul>
         <li>Chairman of Vietnam Association of Rheumatology</li>
      </ul>
      <h4>Professor Exam &amp; treatment</h4>
      <p><strong>Professor specializing in examination and treatment of musculoskeletal diseases:</strong></p>
      <ul>
         <li>Rheumatoid arthritis</li>
         <li>Acute and Chronic Gout</li>
         <li>Ankylosing spondylitis</li>
         <li>Osteoarthritis, cervical spine, lumbar spine</li>
         <li>Sciatica, herniated disc</li>
         <li>Inflammation around the shoulder joint and other tendon attachment sites</li>
         <li>Osteoporosis</li>
         <li>Skeletal pain</li>
         <li>Systemic lupus erythematosus</li>
         <li>Arthroscopy of knee and shoulder joints</li>
      </ul>`,
            descriptionVi: `Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai
Chủ tịch Hội Thấp khớp học Việt Nam
Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp
Bác sĩ khám cho người bệnh từ 14 tuổi trở lên`,
            descriptionEn: `Former Head of Musculoskeletal Department, Bach Mai Hospital
President of the Vietnam Association of Rheumatology
Leading professor with nearly 50 years of experience in treating musculoskeletal-related diseases
A doctor examines a patient 14 years of age and older`,
            contentMarkDownVi: `#### Giáo sư, Tiến sĩ, Bác sĩ Trần Ngọc Ân

*   Cố vấn chuyên môn chuyên khoa Cơ xương khớp, Bệnh Viện Đa khoa Hồng Phát
*   Giáo sư đầu ngành với gần 50 năm kinh nghiệm điều trị các bệnh lý liên quan đến Cơ xương khớp
*   Chủ tịch Hội Thấp khớp học Việt Nam
*   Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai
*   Nguyên Giám đốc Bệnh viện E
*   Nguyên giảng viên cao cấp Đại học Y Hà Nội
*   Bác sĩ khám cho người bệnh từ 14 tuổi trở lên

###### Quá trình công tác

*   Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện Bạch Mai
*   Giáo sư đào tạo được trên 10 Tiến sĩ, trên 30 Bác sĩ Chuyên khoa cấp II, Thạc sĩ và Bác sĩ Nội trú về chuyên ngành thấp khớp
*   Chỉ đạo chuyên môn tại Trung tâm Cơ xương khớp, Bệnh viện E (2004-2007)
*   Giám đốc Bệnh viện E (1995-2004)
*   Phó trưởng khoa – Bí thư chi bộ khoa Y trường Đại học Tây Nguyên (1984)

###### Quá trình đào tạo

*   Một trong các Phó Tiến sĩ đầu tiên bảo vệ luận án Tiến sĩ trong nước tại Trường Đại học Y với đề tài: “Viêm cột sống dính khớp” (1981)
*   Tham quan, trao đổi tại Hung-ga-ri (1974)
*   Tốt nghiệp bác sĩ trường Đại học Y Hà Nội (1960)

###### Giải thưởng

*   Huân chương Lao động hạng Hai (2007)
*   Huân chương Lao động hạng Ba (2001)

###### Sách và các công trình nghiên cứu, báo cáo khoa học

*   Tác giả cuốn sách: Bệnh thấp khớp
*   Tham gia biên soạn 3 cuốn sách: Bách khoa thư bệnh học, Bệnh học Nội khoa và Nội khoa cơ sở

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Chủ tịch Hội Thấp khớp học Việt Nam

###### Giáo sư Khám & điều trị

**Giáo sư chuyên khám, điều trị các bệnh chuyên khoa Cơ xương khớp:**

*   Viêm khớp dạng thấp
*   Bệnh Gút cấp và mạn tính
*   Viêm cột sống dính khớp
*   Thoái hóa khớp, cột sống cổ, cột sống thắt lưng
*   Đau thần kinh tọa, thoát vị đĩa đệm
*   Viêm quanh khớp vai và các điểm bám gân khác
*   Bệnh loãng xương
*   Bệnh đau nhức xương khớp
*   Lupus ban đỏ hệ thống
*   Nội soi khớp gối, khớp vai`,
            contentMarkDownEn: `#### Professor, Dr.Phil, Doctor Tran Ngoc An

*   Professional Consultant of Musculoskeletal, Hong Phat General Hospital
*   Leading professor with nearly 50 years of experience in treating musculoskeletal diseases
*   Chairman of Vietnam Association of Rheumatology
*   Former Head of Musculoskeletal Department, Bach Mai Hospital 
*   Former Director of E Hospital
*   Former senior lecturer at Hanoi Medical University
*   Doctor examines patients 14 years of age and older

###### Working history

*   Former Head of Musculoskeletal Department, Bach Mai Hospital
*   Professor has trained over 10 PhDs, over 30 Level II Specialists, Masters and Resident Physicians in rheumatology
*   Professional direction at Center for Musculoskeletal, E Hospital (2004-2007)
*   Director of Hospital E (1995-2004)
*   Deputy Dean – Secretary of the Medical Branch of Tay Nguyen University (1984)

###### Training process

*   One of the first deputy doctors to defend the doctoral thesis in the country at the Medical University with the topic: “Ankylosing spondylitis” (1981)
*   Sightseeing and exchange in Hungary (1974)
*   Graduated as a doctor from Hanoi Medical University (1960)

###### Awards

*   Second Class Labor Medal (2007)
*   Third Class Labor Medal (2001)

###### Books and research works, scientific reports

*   Author of the book: Rheumatism
*   Participated in compiling 3 books: Encyclopedia of Pathology, Medical Pathology and Basic Internal Medicine

###### Members of scientific associations and professional organizations

*   Chairman of Vietnam Association of Rheumatology

#### Professor Exam & treatment

**Professor specializing in examination and treatment of musculoskeletal diseases:**

*   Rheumatoid arthritis
*   Acute and Chronic Gout
*   Ankylosing spondylitis
*   Osteoarthritis, cervical spine, lumbar spine
*   Sciatica, herniated disc
*   Inflammation around the shoulder joint and other tendon attachment sites
*   Osteoporosis
*   Skeletal pain
*   Systemic lupus erythematosus
*   Arthroscopy of knee and shoulder joints`,
            doctorId: 7,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Bác sĩ chuyên khoa II Trần Thị Hoài Hương</h4>
      <ul>
         <li>Trưởng Khoa Dinh Dưỡng bệnh viện Da Liễu TP. HCM</li>
         <li>Bác sĩ Hương có hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý da liễu</li>
         <li>Bác sĩ nhận khám mọi độ tuổi</li>
      </ul>
      <h6>Quá trình công tác</h6>
      <ul>
         <li>Trưởng khoa Dinh Dưỡng, Bệnh viện Da Liễu TP.HCM</li>
         <li>Nguyên Phó trưởng khoa Lâm sàng 1, Bệnh viện Da Liễu TP.HCM</li>
         <li>Hiện là Bác sĩ Da liễu, Phòng khám Da liễu Táo Đỏ</li>
         <li>Bác sĩ chuyên khoa da liễu, thẩm mỹ da Bệnh Viện Da Liễu TP.HCM</li>
      </ul>
      <h6>Quá trình đào tạo</h6>
      <ul>
         <li>Tốt nghiệp Bác sĩ Chuyên khoa II, chuyên ngành Da liễu, Đại học Y dược TP.HCM</li>
         <li>Tốt nghiệp Bác sĩ Chuyên khoa I, chuyên ngành Da liễu, Đại học Y dược TP.HCM</li>
         <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TP.HCM</li>
         <li>Tham gia lớp Sơ bộ DInh dưỡng, Đại học Y khoa Phạm Ngọc Thạch</li>
      </ul>
      <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
      <ul>
         <li>Hội viên chi hội Da Liễu Hồ Chí Minh</li>
         <li>Hội viên Hội Da Liễu Việt Nam</li>
      </ul>
      <h6>Khám và điều trị</h6>
      <p><strong>Bác sĩ khám và điều trị:</strong></p>
      <ul>
         <li>Mụn trứng cá: mụn viêm, bọc, nang, mụn đầu trắng, đâu đen</li>
         <li>Nám, sạm da: nám, sạm da mặt</li>
         <li>Rụng tóc, da dầu: mụn trứng cá, sẹo lồi, sẹo thâm, sẹo mụn</li>
         <li>Mề đay: tóc gàu, vảy, rụng tóc từng phần, lan tỏa</li>
         <li>Viêm da cơ địa: mảng da đỏ, ngứa nhiều, từng cơn</li>
         <li>Viêm da dị ứng: mẩn đỏ da, ngứa, lan tỏa</li>
         <li>Thủy đậu: mụn nước, ngứa, kèm sốt nhẹ, mệt mỏi</li>
         <li>Zona: mang mụn nước, 1 bên người, đau nhức</li>
         <li>Da nhờn, lỗ chân lông to</li>
         <li>Vảy nến: mảng đổ da, tróc vảy, có thể toàn thân</li>
         <li>Ghẻ ngứa: ngứa về đêm, vùng nếp, kẽ ngón tay, ngón chân</li>
         <li>Rạn da: da đùi, da rạn teo, bụng, nếp bẹn, nách, lưng</li>
         <li>Lão hóa da: da đổi màu, nhão, xệ, nến nhăn, sần</li>
         <li>Da đồi mồi: đốm nâu</li>
         <li>Pemphigus: bóng nước thân mình, niêm mạc</li>
         <li>Lupus ban đỏ: hồng ban cánh bướm mặt, đau nhức mỏi cơ xương khớp</li>
         <li>Xơ cứng bì: da cứng, không đều màu</li>
         <li>Nấm da: da đỏ quằn quện, các vùng da, tóc, nếp da</li>
         <li>Viêm da tiếp xúc: da đỏ, rát, nhạy cảm, tiếp xúc kiến ba khoang</li>
         <li>Viêm da do nhiễm Corticoid, nhạy cảm: da đỏ, giãn mạch, mãng, nhạy cảm, nôi mụn</li>
         <li>Nấm móng</li>
      </ul>`,
            contentHtmlEn: `<h4>Specialist II Doctor Tran Thi Hoai Huong</h4>
      <ul>
         <li>Head of Nutrition Department, City Dermatology Hospital. HCM</li>
         <li>Dr. Huong has more than 20 years of experience in dermatology examination and treatment</li>
         <li>Doctors of all ages</li>
      </ul>
      <h6>Working history</h6>
      <ul>
         <li>Head of Nutrition Department, Ho Chi Minh City Hospital of Dermatology</li>
         <li>Former Deputy Head of Clinical Department 1, Ho Chi Minh City Hospital of Dermatology</li>
         <li>Currently a Dermatologist, Red Apple Dermatology Clinic</li>
         <li>Specialist in Dermatology, Dermatology, Dermatology Hospital of Ho Chi Minh City</li>
      </ul>
      <h6>Training process</h6>
      <ul>
         <li>Graduated from Doctor of Specialization II, majoring in Dermatology, University of Medicine and Pharmacy, Ho Chi Minh City</li>
         <li>Graduated from Doctor of Specialization I, majoring in Dermatology, University of Medicine and Pharmacy, Ho Chi Minh City</li>
         <li>Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City</li>
         <li>Join the Preliminary Nutrition class, Pham Ngoc Thach Medical University</li>
      </ul>
      <h6>Members of scientific associations and professional organizations</h6>
      <ul>
         <li>Member of Ho Chi Minh Dermatology Association</li>
         <li>Member of Vietnam Dermatology Association</li>
      </ul>
      <h6>Examination and treatment</h6>
      <p><strong>Doctor examines and treats:</strong></p>
      <ul>
         <li>Acne: inflammatory acne, cysts, cysts, whiteheads, blackheads</li>
         <li>Melasma, tan: melasma, facial tan</li>
         <li>Hair loss, oily skin: acne, keloid scars, dark scars, acne scars</li>
         <li>urticaria: dandruff, scaly, partial, diffuse alopecia</li>
         <li>Atopic dermatitis: red patches of skin, intense itching, intermittent </li>
         <li>Atopic dermatitis: skin rash, itching, diffuse</li>
         <li>Chickenpox: blisters, itching, low fever, fatigue</li>
         <li>Zona: blisters, 1 side, pain</li>
         <li>Oily skin, large pores</li>
         <li>Psoriasis: patches of skin, scaling, may be whole body</li>
         <li>Scabies itch: itching at night, folds, between fingers, toes</li>
         <li>Stretch skin: thigh skin, skin atrophy, abdomen, inguinal folds, armpits, back</li>
         <li>Skin aging: skin discoloration, flabby, sagging, wrinkled, lumpy skin</li>
         <li>Terrified skin: brown spots</li>
         <li>Pemphigus: bullae of trunk, mucous membranes</li>
         <li>Lupus erythematosus: facial erythema, musculoskeletal pain</li>
         <li>Scleroderma: hard, uneven skin</li>
         <li>Skin fungus: red, writhing skin, areas of skin, hair, skin folds</li>
         <li>Contact dermatitis: red, burning, sensitive skin, triple ant contact</li>
         <li>Inflammation of the skin caused by Corticosteroid infection, sensitive: red skin, vasodilatation, plaque, sensitive, acne-prone</li>
         <li>Toenail fungus</li>
      </ul>`,
            descriptionVi: `Trưởng Khoa Dinh Dưỡng bệnh viện Da Liễu TP.HCM
Nguyên Phó trưởng khoa Lâm sàng 1, Bệnh viện Da Liễu TPHCM
Bác sĩ Hương có hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý da liễu
Bác sĩ nhận khám mọi độ tuổi`,
            descriptionEn: `Head of Nutrition Department of Dermatology Hospital HCMC
Former Deputy Head of Clinical Department 1, Ho Chi Minh City Dermatology Hospital
Dr. Huong has more than 20 years of experience in dermatology examination and treatment
Doctors accept all ages`,
            contentMarkDownVi: `#### Bác sĩ chuyên khoa II Trần Thị Hoài Hương

*   Trưởng Khoa Dinh Dưỡng bệnh viện Da Liễu TP. HCM
*   Bác sĩ Hương có hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý da liễu
*   Bác sĩ nhận khám mọi độ tuổi

###### Quá trình công tác

*   Trưởng khoa Dinh Dưỡng, Bệnh viện Da Liễu TP.HCM
*   Nguyên Phó trưởng khoa Lâm sàng 1, Bệnh viện Da Liễu TP.HCM
*   Hiện là Bác sĩ Da liễu, Phòng khám Da liễu Táo Đỏ
*   Bác sĩ chuyên khoa da liễu, thẩm mỹ da Bệnh Viện Da Liễu TP.HCM

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ Chuyên khoa II, chuyên ngành Da liễu, Đại học Y dược TP.HCM
*   Tốt nghiệp Bác sĩ Chuyên khoa I, chuyên ngành Da liễu, Đại học Y dược TP.HCM
*   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược TP.HCM
*   Tham gia lớp Sơ bộ DInh dưỡng, Đại học Y khoa Phạm Ngọc Thạch

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Hội viên chi hội Da Liễu Hồ Chí Minh
*   Hội viên Hội Da Liễu Việt Nam

###### Khám và điều trị

**Bác sĩ khám và điều trị:**

*   Mụn trứng cá: mụn viêm, bọc, nang, mụn đầu trắng, đâu đen
*   Nám, sạm da: nám, sạm da mặt
*   Rụng tóc, da dầu: mụn trứng cá, sẹo lồi, sẹo thâm, sẹo mụn
*   Mề đay: tóc gàu, vảy, rụng tóc từng phần, lan tỏa
*   Viêm da cơ địa: mảng da đỏ, ngứa nhiều, từng cơn
*   Viêm da dị ứng: mẩn đỏ da, ngứa, lan tỏa
*   Thủy đậu: mụn nước, ngứa, kèm sốt nhẹ, mệt mỏi
*   Zona: mang mụn nước, 1 bên người, đau nhức
*   Da nhờn, lỗ chân lông to
*   Vảy nến: mảng đổ da, tróc vảy, có thể toàn thân
*   Ghẻ ngứa: ngứa về đêm, vùng nếp, kẽ ngón tay, ngón chân
*   Rạn da: da đùi, da rạn teo, bụng, nếp bẹn, nách, lưng
*   Lão hóa da: da đổi màu, nhão, xệ, nến nhăn, sần
*   Da đồi mồi: đốm nâu
*   Pemphigus: bóng nước thân mình, niêm mạc
*   Lupus ban đỏ: hồng ban cánh bướm mặt, đau nhức mỏi cơ xương khớp
*   Xơ cứng bì: da cứng, không đều màu
*   Nấm da: da đỏ quằn quện, các vùng da, tóc, nếp da
*   Viêm da tiếp xúc: da đỏ, rát, nhạy cảm, tiếp xúc kiến ba khoang
*   Viêm da do nhiễm Corticoid, nhạy cảm: da đỏ, giãn mạch, mãng, nhạy cảm, nôi mụn
*   Nấm móng`,
            contentMarkDownEn: `#### Specialist II Doctor Tran Thi Hoai Huong

*   Head of Nutrition Department, City Dermatology Hospital. HCM
*   Dr. Huong has more than 20 years of experience in dermatology examination and treatment
*   Doctors of all ages

###### Working history

*   Head of Nutrition Department, Ho Chi Minh City Hospital of Dermatology
*   Former Deputy Head of Clinical Department 1, Ho Chi Minh City Hospital of Dermatology
*   Currently a Dermatologist, Red Apple Dermatology Clinic
*   Specialist in Dermatology, Dermatology, Dermatology Hospital of Ho Chi Minh City

###### Training process

*   Graduated from Doctor of Specialization II, majoring in Dermatology, University of Medicine and Pharmacy, Ho Chi Minh City
*   Graduated from Doctor of Specialization I, majoring in Dermatology, University of Medicine and Pharmacy, Ho Chi Minh City
*   Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City
*   Join the Preliminary Nutrition class, Pham Ngoc Thach Medical University

###### Members of scientific associations and professional organizations

*   Member of Ho Chi Minh Dermatology Association
*   Member of Vietnam Dermatology Association

###### Examination and treatment

**Doctor examines and treats:**

*   Acne: inflammatory acne, cysts, cysts, whiteheads, blackheads
*   Melasma, tan: melasma, facial tan
*   Hair loss, oily skin: acne, keloid scars, dark scars, acne scars
*   urticaria: dandruff, scaly, partial, diffuse alopecia
*   Atopic dermatitis: red patches of skin, intense itching, intermittent
*   Atopic dermatitis: skin rash, itching, diffuse
*   Chickenpox: blisters, itching, low fever, fatigue
*   Zona: blisters, 1 side, pain
*   Oily skin, large pores
*   Psoriasis: patches of skin, scaling, may be whole body
*   Scabies itch: itching at night, folds, between fingers, toes
*   Stretch skin: thigh skin, skin atrophy, abdomen, inguinal folds, armpits, back
*   Skin aging: skin discoloration, flabby, sagging, wrinkled, lumpy skin
*   Terrified skin: brown spots
*   Pemphigus: bullae of trunk, mucous membranes
*   Lupus erythematosus: facial erythema, musculoskeletal pain
*   Scleroderma: hard, uneven skin
*   Skin fungus: red, writhing skin, areas of skin, hair, skin folds
*   Contact dermatitis: red, burning, sensitive skin, triple ant contact
*   Inflammation of the skin caused by Corticosteroid infection, sensitive: red skin, vasodilatation, plaque, sensitive, acne-prone
*   Toenail fungus`,
            doctorId: 8,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Bác sĩ Chuyên khoa I Phí Thị Tuyết Nga</h4>
      <ul>
         <li>Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý Sản phụ khoa</li>
         <li>Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Sản phụ khoa, Đại học Y Hà Nội</li>
      </ul>
      <h6>Khám và điều trị</h6>
      <p><strong>Bác sĩ khám và điều trị bệnh lý sản phụ khoa:</strong></p>
      <ul>
         <li>Chăm sóc sức khỏe tiền hôn nhân</li>
         <li>Chăm sóc thai kỳ: đau bụng, ra máu, động thai,...</li>
         <li>Viêm nhiễm đường sinh dục: nấm vi khuẩn, ngứa, tổn thương âm hộ,...</li>
         <li>Bệnh tình dục: sùi mào gà, lậu, giang mai, các bệnh xã hội khác,...</li>
         <li>Viêm lộ tuyến, polyp cổ tử cung</li>
         <li>Đặt vòng tránh thai, cấy que tránh thai, tiêm tránh thai</li>
         <li>Rong kinh, băng huyết</li>
         <li>Rối loạn nội tiết và kinh nguyệt</li>
         <li>Điều trị các biến chứng khi mang thai</li>
         <li>Tư vấn vô sinh hiếm muộn</li>
      </ul>
      <h6>Quá trình công tác</h6>
      <ul>
         <li>Hiện là Bác sĩ khám và điều trị, Phòng khám Sản phụ khoa Lotus Clinic</li>
         <li>Bác sĩ Sản phụ khoa, Bệnh viện Sản Nhi khu vực Thái Nguyên (1998 - 2011)</li>
         <li>Tham gia đào tạo giảng dạy lại kiến thức mới về Sức khỏe sinh sản và khống chế nhiễm khuẩn cho nhiều lớp, khóa các bác sĩ và nữ hộ sinh trong nước</li>
         <li>Bác sĩ được tổ chức Pathfinder International – Mỹ đào tạo và cấp giấy chứng nhận là giảng viên về chương trình Sức khỏe sinh sản trong nước (1999)</li>
      </ul>
      <h6>Quá trình đào tạo</h6>
      <ul>
         <li>Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Sản phụ khoa, Đại học Y Hà Nội (1998)</li>
         <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược Thái Nguyên (1992)</li>
      </ul>
      <h6>Chứng chỉ trong nước hoặc nước ngoài</h6>
      <ul>
         <li>Chứng chỉ Siêu âm tim thai nâng cao, Bệnh viện Đại học Y dược TP.HCM (2019)</li>
         <li>Chứng chỉ Chẩn đoán điều trị bệnh viêm nhiễm đường sinh dục, Bộ Y tế (2006)</li>
         <li>Chứng chỉ Siêu âm sản phụ khoa, Bệnh viện Phụ sản Trung ương (2000)</li>
      </ul>`,
            contentHtmlEn: `<h4>Specialist I Doctor Phi Thi Tuyet Nga</h4>
      <ul>
         <li>Over 30 years of experience in the examination and treatment of Obstetrics and Gynecology diseases</li>
         <li>Graduated from Doctor of Specialist I in Obstetrics and Gynecology, Hanoi Medical University</li>
      </ul>
      <h6>Examination and treatment</h6>
      <p><strong>Doctor examines and treats gynecological diseases:</strong></p>
      <ul>
         <li>Pre-marital health care</li>
         <li>Pregnancy care: abdominal pain, bleeding, fetal movement,...</li>
         <li>Genital tract infections: bacterial fungus, itching, vulvar lesions,...</li>
         <li>Sexual diseases: genital warts, gonorrhea, syphilis, other social diseases,...</li>
         <li>Inflammation of the cervix, polyps of the cervix</li>
         <li>IUD insertion, contraceptive implant, contraceptive injection</li>
         <li>Menorrhagia, bleeding</li>
         <li>Endocrine and menstrual disorders</li>
         <li>Treatment of complications during pregnancy</li>
         <li>Infertility consultation</li>
      </ul>
      <h6>Working history</h6>
      <ul>
         <li>Currently a Doctor of Examination and Treatment, Lotus Clinic of Obstetrics and Gynecology</li>
         <li>Obstetrician and Gynecologist, Thai Nguyen Regional Hospital for Obstetrics and Children (1998 - 2011)</li>
         <li>Participated in training to re-teach new knowledge on Reproductive Health and infection control for many classes, training domestic doctors and midwives</li>
         <li>The doctor was trained and certified by Pathfinder International - USA as a lecturer in the Domestic Reproductive Health program (1999)</li>
      </ul>
      <h6>Training process</h6>
      <ul>
         <li>Graduated from Doctor of Specialization I majoring in Obstetrics and Gynecology, Hanoi Medical University (1998)</li>
         <li>Graduated as a General Doctor, Thai Nguyen University of Medicine and Pharmacy (1992)</li>
      </ul>
      <h6>Domestic or foreign certificate</h6>
      <ul>
         <li>Certificate of Advanced Fetal Echocardiography, Ho Chi Minh City University of Medicine and Pharmacy Hospital (2019)</li>
         <li>Certificate of Diagnosis and Treatment of Genital Infections, Ministry of Health (2006)</li>
         <li>Certificate of Ultrasound in Obstetrics and Gynecology, National Hospital of Obstetrics and Gynecology (2000)</li>
      </ul>`,
            descriptionVi: `Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý Sản phụ khoa
Chứng nhận là giảng viên về chương trình Sức khỏe sinh sản trong nước do tổ chức Pathfinder International – Mỹ cấp
Tham gia giảng dạy kiến thức về Sức khỏe sinh sản và khống chế nhiễm khuẩn cho nhiều khóa các bác sĩ và nữ hộ sinh trong nước`,
            descriptionEn: `More than 30 years of experience in the examination and treatment of Obstetrics and Gynecology diseases
Certified as a lecturer on domestic reproductive health program granted by Pathfinder International - USA
Participating in teaching knowledge about Reproductive Health and infection control for many courses of doctors and midwives in the country`,
            contentMarkDownVi: `#### Bác sĩ Chuyên khoa I Phí Thị Tuyết Nga

*   Hơn 30 năm kinh nghiệm trong khám và điều trị bệnh lý Sản phụ khoa
*   Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Sản phụ khoa, Đại học Y Hà Nội

###### Khám và điều trị

**Bác sĩ khám và điều trị bệnh lý sản phụ khoa:**

*   Chăm sóc sức khỏe tiền hôn nhân
*   Chăm sóc thai kỳ: đau bụng, ra máu, động thai,...
*   Viêm nhiễm đường sinh dục: nấm vi khuẩn, ngứa, tổn thương âm hộ,...
*   Bệnh tình dục: sùi mào gà, lậu, giang mai, các bệnh xã hội khác,...
*   Viêm lộ tuyến, polyp cổ tử cung
*   Đặt vòng tránh thai, cấy que tránh thai, tiêm tránh thai
*   Rong kinh, băng huyết
*   Rối loạn nội tiết và kinh nguyệt
*   Điều trị các biến chứng khi mang thai
*   Tư vấn vô sinh hiếm muộn

###### Quá trình công tác

*   Hiện là Bác sĩ khám và điều trị, Phòng khám Sản phụ khoa Lotus Clinic
*   Bác sĩ Sản phụ khoa, Bệnh viện Sản Nhi khu vực Thái Nguyên (1998 - 2011)
*   Tham gia đào tạo giảng dạy lại kiến thức mới về Sức khỏe sinh sản và khống chế nhiễm khuẩn cho nhiều lớp, khóa các bác sĩ và nữ hộ sinh trong nước
*   Bác sĩ được tổ chức Pathfinder International – Mỹ đào tạo và cấp giấy chứng nhận là giảng viên về chương trình Sức khỏe sinh sản trong nước (1999)

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Sản phụ khoa, Đại học Y Hà Nội (1998)
*   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y dược Thái Nguyên (1992)

###### Chứng chỉ trong nước hoặc nước ngoài

*   Chứng chỉ Siêu âm tim thai nâng cao, Bệnh viện Đại học Y dược TP.HCM (2019)
*   Chứng chỉ Chẩn đoán điều trị bệnh viêm nhiễm đường sinh dục, Bộ Y tế (2006)
*   Chứng chỉ Siêu âm sản phụ khoa, Bệnh viện Phụ sản Trung ương (2000)`,
            contentMarkDownEn: `#### Specialist I Doctor Phi Thi Tuyet Nga

*   Over 30 years of experience in the examination and treatment of Obstetrics and Gynecology diseases
*   Graduated from Doctor of Specialist I in Obstetrics and Gynecology, Hanoi Medical University

###### Examination and treatment

**Doctor examines and treats gynecological diseases:**

*   Pre-marital health care
*   Pregnancy care: abdominal pain, bleeding, fetal movement,...
*   Genital tract infections: bacterial fungus, itching, vulvar lesions,...
*   Sexual diseases: genital warts, gonorrhea, syphilis, other social diseases,...
*   Inflammation of the cervix, polyps of the cervix
*   IUD insertion, contraceptive implant, contraceptive injection
*   Menorrhagia, bleeding
*   Endocrine and menstrual disorders
*   Treatment of complications during pregnancy
*   Infertility consultation

###### Working history

*   Currently a Doctor of Examination and Treatment, Lotus Clinic of Obstetrics and Gynecology
*   Obstetrician and Gynecologist, Thai Nguyen Regional Hospital for Obstetrics and Children (1998 - 2011)
*   Participated in training to re-teach new knowledge on Reproductive Health and infection control for many classes, training domestic doctors and midwives
*   The doctor was trained and certified by Pathfinder International - USA as a lecturer in the Domestic Reproductive Health program (1999)

###### Training process

*   Graduated from Doctor of Specialization I majoring in Obstetrics and Gynecology, Hanoi Medical University (1998)
*   Graduated as a General Doctor, Thai Nguyen University of Medicine and Pharmacy (1992)

###### Domestic or foreign certificate

*   Certificate of Advanced Fetal Echocardiography, Ho Chi Minh City University of Medicine and Pharmacy Hospital (2019)
*   Certificate of Diagnosis and Treatment of Genital Infections, Ministry of Health (2006)
*   Certificate of Ultrasound in Obstetrics and Gynecology, National Hospital of Obstetrics and Gynecology (2000)`,
            doctorId: 9,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thi Hùng</h4>
        <ul>
           <li>Hơn 40 năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Thần kinh</li>
           <li>Nguyên Giám đốc Bệnh viện Nguyễn Tri Phương</li>
           <li>Nguyên Trưởng khoa Thần kinh Bệnh viện Nguyễn Tri Phương</li>
           <li>Nhiều năm tu nghiệp và làm việc ở các trường đại học Y khoa danh tiếng ở Pháp, Mỹ, Singapore...</li>
           <li>Bác sĩ đầu tiên triển khai kỹ thuật tiêm Botulinum toxin cho các bệnh rối loạn vận động năm 1998 và chương trình phẫu thuật bệnh Parkinson (kích thích não sâu) năm 2012</li>
           <li>Bác sĩ đầu tiên ở Việt Nam phẫu thuật thành công bệnh Parkinson</li>
           <li>Bác sĩ nhận bệnh nhân từ 18 tuổi trở lên</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <p><strong>Bác sĩ khám và điều trị các bệnh lý:</strong></p>
        <ul>
           <li>Bệnh Parkinson</li>
           <li>Đau thần kinh</li>
           <li>Động kinh</li>
           <li>Và nhiều bệnh lý chuyên sâu khác khoa thần kinh</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Hiện là Cố vấn chuyên môn và Bác sĩ điều trị tại Trung tâm Y khoa Vạn Hạnh</li>
           <li>Giám đốc Y khoa Bệnh viện Quốc tế City (2019 - 2022)</li>
           <li>Nguyên Phó Giám đốc Y khoa kiêm Bác sĩ cấp cao chuyên khoa Thần kinh, Bệnh viện FV (2014 - 2019)</li>
           <li>Nguyên Giám đốc Bệnh viện Nguyễn Tri Phương (2007 - 2014)</li>
           <li>Nguyên Phó giám đốc Bệnh viện Nguyễn Tri Phương (2003 - 2006)</li>
           <li>Nguyên Trưởng khoa Thần kinh Bệnh viện Nguyễn Tri Phương (1987 - 2003)</li>
           <li>Từng là Bác sĩ cấp cao, khoa Săn sóc đặc biệt chuyên sâu và Thần kinh, Bệnh viện Nguyễn Tri Phương (1979 - 1987)</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Tu nghiệp Đại học Quốc gia Singapore (2007)</li>
           <li>Tu nghiệp tại Trung tâm Rối loạn vận động, Trung tâm Y khoa Beth Israel Deaconess, Harvard, Mỹ (2000)</li>
           <li>Nhận danh hiệu Phó giáo sư, Tiến sĩ chuyên khoa Thần kinh, Đại học Y dược TP.HCM (2000)</li>
           <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y dược TP.HCM (1979)</li>
        </ul>
        <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
        <ul>
           <li>Ủy viên Ban chấp hành Hội thần kinh học Asian</li>
           <li>Hội viên Hội thần kinh học Hoa Kỳ (AAN)</li>
           <li>Nguyên Phó Chủ tịch Hội Thần kinh TP.HCM</li>
           <li>Nguyên Tổng Bộ môn Thần kinh học Đại học Y Phạm Ngọc Thạch</li>
           <li>Chủ tịch Hội Đau TP.HCM và Phó Chủ tịch Hội Đau Việt Nam</li>
        </ul>`,
            contentHtmlEn: `<h4>Associate Professor, Dr.Phil, Doctor Nguyen Thi Hung</h4>
        <ul>
           <li>Over 40 years of experience in the examination and treatment of neurological diseases</li>
           <li>Former Director of Nguyen Tri Phuong Hospital</li>
           <li>Former Head of Neurology Department of Nguyen Tri Phuong Hospital</li>
           <li>Many years of training and working at prestigious medical universities in France, USA, Singapore...</li>
           <li>The first doctor to deploy Botulinum toxin injection for movement disorders in 1998 and the Parkinson's disease (deep brain stimulation) surgery program in 2012</li>
           <li>First doctor in Vietnam successfully operated on Parkinson's disease</li>
           <li>Doctor accepts patients 18 years of age or older</li>
        </ul>
        <h6>Examination and treatment</h6>
        <p><strong>Doctors examine and treat diseases:</strong></p>
        <ul>
           <li>Parkinson's disease</li>
           <li>Nerve pain</li>
           <li>Epilepsy</li>
           <li>And many other specialized diseases in neurology</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Currently Professional advisor and treating doctor at Van Hanh Medical Center</li>
           <li>Medical Director of City International Hospital (2019 - 2022)</li>
           <li>Former Deputy Medical Director cum Senior Doctor of Neurology, FV Hospital (2014 - 2019)</li>
           <li>Former Director of Nguyen Tri Phuong Hospital (2007 - 2014)</li>
           <li>Former Deputy Director of Nguyen Tri Phuong Hospital (2003 - 2006)</li>
           <li>Former Head of Neurology Department of Nguyen Tri Phuong Hospital (1987 - 2003)</li>
           <li>Formerly Senior Doctor, Department of Intensive Care and Neurology, Nguyen Tri Phuong Hospital (1979 - 1987)</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Training National University of Singapore (2007)</li>
           <li>Training at The Movement Disorders Center, Beth Israel Deaconess Medical Center, Harvard, USA (2000)</li>
           <li>Received the title of Associate Professor, Doctor of Neurology, University of Medicine and Pharmacy, Ho Chi Minh City (2000)</li>
           <li>Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1979)</li>
        </ul>
        <h6>Members of scientific associations and professional organizations</h6>
        <ul>
           <li>Member of the Executive Committee of the Asian Neurological Society</li>
           <li>Member of the American Society of Neurology (AAN)</li>
           <li>Former Vice President of Ho Chi Minh City Neurological Association</li>
           <li>Former General Department of Neurology Pham Ngoc Thach Medical University</li>
           <li>Chairman of Ho Chi Minh City Pain Association and Vice President of Vietnam Pain Association</li>
        </ul>`,
            descriptionVi: `Hơn 40 năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Thần kinh
Nguyên Giám đốc Bệnh viện Nguyễn Tri Phương
Nguyên Trưởng khoa Thần kinh Bệnh viện Nguyễn Tri Phương
Nhiều năm tu nghiệp và làm việc ở các trường đại học Y khoa danh tiếng ở Pháp, Mỹ, Singapore…
Bác sĩ nhận bệnh nhân từ 18 tuổi trở lên`,
            descriptionEn: `Over 40 years of experience in the examination and treatment of neurological diseases
Former Director of Nguyen Tri Phuong Hospital
Former Head of Neurology Department of Nguyen Tri Phuong Hospital
Many years of training and working at prestigious medical universities in France, USA, Singapore...
Doctors accept patients 18 years of age or older`,
            contentMarkDownVi: `#### Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thi Hùng

*   Hơn 40 năm kinh nghiệm trong khám và điều trị bệnh lý chuyên khoa Thần kinh
*   Nguyên Giám đốc Bệnh viện Nguyễn Tri Phương
*   Nguyên Trưởng khoa Thần kinh Bệnh viện Nguyễn Tri Phương
*   Nhiều năm tu nghiệp và làm việc ở các trường đại học Y khoa danh tiếng ở Pháp, Mỹ, Singapore...
*   Bác sĩ đầu tiên triển khai kỹ thuật tiêm Botulinum toxin cho các bệnh rối loạn vận động năm 1998 và chương trình phẫu thuật bệnh Parkinson (kích thích não sâu) năm 2012
*   Bác sĩ đầu tiên ở Việt Nam phẫu thuật thành công bệnh Parkinson
*   Bác sĩ nhận bệnh nhân từ 18 tuổi trở lên

###### Khám và điều trị

**Bác sĩ khám và điều trị các bệnh lý:**

*   Bệnh Parkinson
*   Đau thần kinh
*   Động kinh
*   Và nhiều bệnh lý chuyên sâu khác khoa thần kinh

###### Quá trình công tác

*   Hiện là Cố vấn chuyên môn và Bác sĩ điều trị tại Trung tâm Y khoa Vạn Hạnh
*   Giám đốc Y khoa Bệnh viện Quốc tế City (2019 - 2022)
*   Nguyên Phó Giám đốc Y khoa kiêm Bác sĩ cấp cao chuyên khoa Thần kinh, Bệnh viện FV (2014 - 2019)
*   Nguyên Giám đốc Bệnh viện Nguyễn Tri Phương (2007 - 2014)
*   Nguyên Phó giám đốc Bệnh viện Nguyễn Tri Phương (2003 - 2006)
*   Nguyên Trưởng khoa Thần kinh Bệnh viện Nguyễn Tri Phương (1987 - 2003)
*   Từng là Bác sĩ cấp cao, khoa Săn sóc đặc biệt chuyên sâu và Thần kinh, Bệnh viện Nguyễn Tri Phương (1979 - 1987)

###### Quá trình đào tạo

*   Tu nghiệp Đại học Quốc gia Singapore (2007)
*   Tu nghiệp tại Trung tâm Rối loạn vận động, Trung tâm Y khoa Beth Israel Deaconess, Harvard, Mỹ (2000)
*   Nhận danh hiệu Phó giáo sư, Tiến sĩ chuyên khoa Thần kinh, Đại học Y dược TP.HCM (2000)
*   Tốt nghiệp Bác sĩ đa khoa, Đại học Y dược TP.HCM (1979)

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Ủy viên Ban chấp hành Hội thần kinh học Asian
*   Hội viên Hội thần kinh học Hoa Kỳ (AAN)
*   Nguyên Phó Chủ tịch Hội Thần kinh TP.HCM
*   Nguyên Tổng Bộ môn Thần kinh học Đại học Y Phạm Ngọc Thạch
*   Chủ tịch Hội Đau TP.HCM và Phó Chủ tịch Hội Đau Việt Nam`,
            contentMarkDownEn: `#### Associate Professor, Dr.Phil, Doctor Nguyen Thi Hung

*   Over 40 years of experience in the examination and treatment of neurological diseases
*   Former Director of Nguyen Tri Phuong Hospital
*   Former Head of Neurology Department of Nguyen Tri Phuong Hospital
*   Many years of training and working at prestigious medical universities in France, USA, Singapore...
*   The first doctor to deploy Botulinum toxin injection for movement disorders in 1998 and the Parkinson's disease (deep brain stimulation) surgery program in 2012
*   First doctor in Vietnam successfully operated on Parkinson's disease
*   Doctor accepts patients 18 years of age or older

###### Examination and treatment

**Doctors examine and treat diseases:**

*   Parkinson's disease
*   Nerve pain
*   Epilepsy
*   And many other specialized diseases in neurology

###### Working history

*   Currently Professional advisor and treating doctor at Van Hanh Medical Center
*   Medical Director of City International Hospital (2019 - 2022)
*   Former Deputy Medical Director cum Senior Doctor of Neurology, FV Hospital (2014 - 2019)
*   Former Director of Nguyen Tri Phuong Hospital (2007 - 2014)
*   Former Deputy Director of Nguyen Tri Phuong Hospital (2003 - 2006)
*   Former Head of Neurology Department of Nguyen Tri Phuong Hospital (1987 - 2003)
*   Formerly Senior Doctor, Department of Intensive Care and Neurology, Nguyen Tri Phuong Hospital (1979 - 1987)

###### Training process

*   Training National University of Singapore (2007)
*   Training at The Movement Disorders Center, Beth Israel Deaconess Medical Center, Harvard, USA (2000)
*   Received the title of Associate Professor, Doctor of Neurology, University of Medicine and Pharmacy, Ho Chi Minh City (2000)
*   Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1979)

###### Members of scientific associations and professional organizations

*   Member of the Executive Committee of the Asian Neurological Society
*   Member of the American Society of Neurology (AAN)
*   Former Vice President of Ho Chi Minh City Neurological Association
*   Former General Department of Neurology Pham Ngoc Thach Medical University
*   Chairman of Ho Chi Minh City Pain Association and Vice President of Vietnam Pain Association`,
            doctorId: 10,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Bác sĩ Chuyên khoa II Lê Hồng Anh</h4>
        <ul>
           <li>Hơn 20 năm kinh nghiệm trong lĩnh vực Phổi và Lao</li>
           <li>Từng công tác nhiều năm tại Bệnh viện Phạm Ngọc Thạch</li>
           <li>Giám đốc chuyên môn tại Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn</li>
           <li>Bác sĩ nhận bệnh nhân từ 13 tuổi trở lên</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Giám đốc chuyên môn Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn (2016 - nay)</li>
           <li>Bác sĩ điều trị, Bệnh viện Phạm Ngọc Thạch (2001 - 2016)</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Tốt nghiệp Bác sĩ Chuyên khoa II chuyên ngành bệnh Phổi và Lao, Đại học Y dược TP.HCM (2014)</li>
           <li>Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành bệnh Phổi và Lao, Đại học Y dược TP.HCM (2007)</li>
           <li>Tốt nghiệp Bác sĩ Đa khoa Tổng quát, Đại học Y dược TP.HCM (1996)</li>
        </ul>
        <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
        <ul>
           <li>Hội Phổi Việt Nam</li>
           <li>Hội Hô Hấp TP.HCM</li>
           <li>Hội Hô Hấp Việt Nam</li>
           <li>Hội Hen - Dị ứng - Miễn dịch Lâm sàng TP.HCM</li>
        </ul>
        <h6>Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình…</h6>
        <ul>
           <li>HTV9</li>
           <li>HTV7</li>
           <li>Báo Thanh Niên</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <ul>
           <li>Lao</li>
           <li>Lao kháng thuốc</li>
           <li>Hen</li>
           <li>COPD</li>
           <li>Ung Thư</li>
           <li>Các bệnh Phổi nghề nghiệp</li>
           <li>Các bệnh hô hấp</li>
        </ul>`,
            contentHtmlEn: `<h4>Specialist II Le Hong Anh Doctor</h4>
        <ul>
           <li>Over 20 years of experience in the field of Lungs and Tuberculosis</li>
           <li>Worked for many years at Pham Ngoc Thach Hospital</li>
           <li>Specialist Director at Saigon International Lung Specialist Clinic</li>
           <li>Doctor accepts patients 13 years of age and older</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Special Director of Saigon International Lung Clinic (2016 - present)</li>
           <li>Therapist, Pham Ngoc Thach Hospital (2001 - 2016)</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Graduated from Doctor of Specialist II majoring in Lung and Tuberculosis, University of Medicine and Pharmacy, Ho Chi Minh City (2014)</li>
           <li>Graduated from Specialist Doctor I majoring in Lung and Tuberculosis, University of Medicine and Pharmacy, Ho Chi Minh City (2007)</li>
           <li>Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1996)</li>
        </ul>
        <h6>Members of scientific associations and professional organizations</h6>
        <ul>
           <li>Vietnam Lung Association</li>
           <li>Ho Chi Minh City Respiratory Society</li>
           <li>Vietnam Respiratory Society</li>
           <li>Ho Chi Minh City Association of Asthma - Allergy - Clinical Immunology</li>
        </ul>
        <h6>Participate in health topics on newspapers, television…</h6>
        <ul>
           <li>HTV9</li>
           <li>HTV7</li>
           <li>Thanh Nien Newspaper</li>
        </ul>
        <h6>Examination and treatment</h6>
        <ul>
           <li>Lao</li>
           <li>Drug-resistant TB</li>
           <li>Hen</li>
           <li>COPD</li>
           <li>Cancer</li>
           <li>Occupational Lung Diseases</li>
           <li>Respiratory diseases</li>
        </ul>`,
            descriptionVi: `Hơn 20 năm kinh nghiệm trong lĩnh vực Phổi và Lao
Từng công tác nhiều năm tại Bệnh viện Phạm Ngọc Thạch
Bác sĩ nhận bệnh nhân từ 13 tuổi trở lên`,
            descriptionEn: `More than 20 years of experience in the field of Lungs and Tuberculosis
Worked for many years at Pham Ngoc Thach Hospital
Doctors accept patients 13 years old and older`,
            contentMarkDownVi: `#### Bác sĩ Chuyên khoa II Lê Hồng Anh

*   Hơn 20 năm kinh nghiệm trong lĩnh vực Phổi và Lao
*   Từng công tác nhiều năm tại Bệnh viện Phạm Ngọc Thạch
*   Giám đốc chuyên môn tại Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn
*   Bác sĩ nhận bệnh nhân từ 13 tuổi trở lên

###### Quá trình công tác

*   Giám đốc chuyên môn Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn (2016 - nay)
*   Bác sĩ điều trị, Bệnh viện Phạm Ngọc Thạch (2001 - 2016)

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ Chuyên khoa II chuyên ngành bệnh Phổi và Lao, Đại học Y dược TP.HCM (2014)
*   Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành bệnh Phổi và Lao, Đại học Y dược TP.HCM (2007)
*   Tốt nghiệp Bác sĩ Đa khoa Tổng quát, Đại học Y dược TP.HCM (1996)

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Hội Phổi Việt Nam
*   Hội Hô Hấp TP.HCM
*   Hội Hô Hấp Việt Nam
*   Hội Hen - Dị ứng - Miễn dịch Lâm sàng TP.HCM

###### Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình…

*   HTV9
*   HTV7
*   Báo Thanh Niên

###### Khám và điều trị

*   Lao
*   Lao kháng thuốc
*   Hen
*   COPD
*   Ung Thư
*   Các bệnh Phổi nghề nghiệp
*   Các bệnh hô hấp`,
            contentMarkDownEn: `#### Specialist II Le Hong Anh Doctor

*   Over 20 years of experience in the field of Lungs and Tuberculosis
*   Worked for many years at Pham Ngoc Thach Hospital
*   Specialist Director at Saigon International Lung Specialist Clinic
*   Doctor accepts patients 13 years of age and older

###### Working history

*   Special Director of Saigon International Lung Clinic (2016 - present)
*   Therapist, Pham Ngoc Thach Hospital (2001 - 2016)

###### Training process

*   Graduated from Doctor of Specialist II majoring in Lung and Tuberculosis, University of Medicine and Pharmacy, Ho Chi Minh City (2014)
*   Graduated from Specialist Doctor I majoring in Lung and Tuberculosis, University of Medicine and Pharmacy, Ho Chi Minh City (2007)
*   Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1996)

###### Members of scientific associations and professional organizations

*   Vietnam Lung Association
*   Ho Chi Minh City Respiratory Society
*   Vietnam Respiratory Society
*   Ho Chi Minh City Association of Asthma - Allergy - Clinical Immunology

###### Participate in health topics on newspapers, television…

*   HTV9
*   HTV7
*   Thanh Nien Newspaper

###### Examination and treatment

*   Lao
*   Drug-resistant TB
*   Hen
*   COPD
*   Cancer
*   Occupational Lung Diseases
*   Respiratory diseases`,
            doctorId: 11,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Tiến sĩ, Bác sĩ Vũ Thái Hà</h4>
        <ul>
           <li>16 năm kinh nghiệm trong chuyên ngành da liễu và laser – phẫu thuật trong da liễu</li>
           <li>10 năm kinh nghiệm nâng cơ, trẻ hóa da mặt bằng chỉ</li>
           <li>15 năm kinh nghiệm trong điều trị laser và trị liệu ánh sáng cho các tăng sắc tố, trẻ hóa da, sẹo lõm, sẹo lồi.</li>
           <li>15 năm kinh nghiệm trong điều trị bệnh da liễu như trứng cá, rụng tóc, vảy nến, viêm da cơ địa....</li>
           <li>10 năm kinh nghiệm trong tạo hình khuôn mặt và trẻ hóa da bằng Filler, botox, 5 năm kinh nghiệm trong liệu pháp mesotherapy điều trị rám má và trẻ hóa da, thon gọn cơ thể</li>
           <li>16 năm giảng dạy trong chuyên ngành Da liễu</li>
           <li>Kinh nghiệm trong điều trị chống lão hóa bằng RF, HIFU</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Trưởng khoa Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương (2016 - nay)</li>
           <li>Phó trưởng khoa phụ trách Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương (4/2016 - 6/2016)</li>
           <li>Phó trưởng khoa Phẫu thuật tạo hình và Phục hồi chức năng - Bệnh viện Da liễu Trung ương (7/2015 - 4/2016)</li>
           <li>Phó trường khoa Laser phẫu thuật (D1) - Bệnh viện Da liễu Trung ương (5/2013 - 7/2015)</li>
           <li>Giáo vụ bộ môn Da liễu - Đại học Y Hà Nội (6/2012 - 4/2013)</li>
           <li>Bác sĩ Da liễu tại khoa Laser - phẫu thuật bệnh viện Da liễu Trung ương (từ 1/2013)</li>
           <li>Giảng viện bộ môn da liễu - Trường Đại học Y Hà Nội (từ 1/2013)</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Nghiên cứu sinh chuyên ngành Da liễu – Đại học Y Hà Nội (2010 - 2017)</li>
           <li>Thạc sĩ Da liễu – Đại học Y Hà Nội (1999 - 2005)</li>
           <li>Bác sĩ Chuyên khoa cấp I Da liễu – Đại học Y Hà Nội (1999 - 2003)</li>
           <li>Bs nội trú Da liễu – Đại học Y Hà Nội (1999 - 2003)</li>
           <li>Thực tập tại khoa Da liễu Bệnh viện Bichat – Claude Bernard - Paris – Pháp các bệnh da liễu, u lympho, bệnh về tóc, bệnh về móng (2009)</li>
           <li>Thực tập tại khoa Da liễu Bệnh viện Sant Louis – Paris – Pháp bệnh về tóc, u lympho, phương pháp giảng dạy bệnh da liễu (2011)</li>
        </ul>
        <h6>Chứng chỉ chuyên ngành khác</h6>
        <ul>
           <li>Chứng chỉ: Ứng dụng Laser và ánh sáng trong Da liễu do Bệnh Viện Da liễu Trung Ương cấp.</li>
           <li>Chứng nhận đào tạo Laser Revlite, Picosure tại Thái Lan do giáo sư Niwat Polnikorn cấp.</li>
           <li>Chứng nhận đào tạo về Botox - Filler cơ bản và nâng cao trong ngăn ngừa lão hóa khuôn mặt và tạo hình vùng mặt của Trường đại học Y Hà Nội, Trường đại học Y Mahidol Thái Lan, Bệnh viện Việt Đức và các hãng Restylen, Allergan, Pluryal, neuvia, teoxane…</li>
           <li>Chứng nhận đào tạo về căng chỉ Ultra V-lift được cấp bởi giáo sư Kwon Han Jin</li>
           <li>Chứng nhận đào tạo về chemical peel, chăm sóc da do Image Skincare cấp</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <ul>
           <li>Viêm da cơ địa: Tổn thương da khô, ban đỏ kèm theo hiện tượng ngứa</li>
           <li>Viêm da tiếp xúc: Tổn thương vùng bị tiếp xúc, dát đỏ, mụn nước , có thể loét , kèm ngứa</li>
           <li>Viêm da dầu: Các mảng dát màu đỏ hồng, có vảy da trắng mỏng nhờn dính kèm ngứa ở nếp gấp, rãnh mũi má</li>
           <li>Mày đay: Sẩn phù, ngứa, phù mạch, nguyên nhân chủ yếu do dị ứng</li>
           <li>Zona: Ban đỏ, đám mụn nước ,vết loét, cảm giác ngứa rát dọc theo dây thần kinh</li>
           <li>Thủy đậu: Sốt, mụn nước to dịch trong lan toàn thân , sau vỡ vảy tiết, sẹo</li>
           <li>Nấm da: Mảng nổi nhẹ, có hình vòng hoặc bầu dục, có màu đỏ hoặc nâu, tróc vảy và gây ngứa</li>
           <li>U mềm lây: Nốt sẩn nhỏ, lõm trung tâm, rải rác toàn thân, không ngứa, không đau</li>
           <li>Viêm hạch lan tỏa</li>
           <li>Bớt sắc tố: Nốt, mảng tăng sắc tố khu trú hoặc lan tỏa trên cơ thể, bề mặt phẳng, màu nâu, đen , xanh. Không đau , không ngứa rát.</li>
           <li>Nám da: Dát tăng sắc tố màu nâu, xanh đen đối xứng 2 bên mặt, bằng phẳng, bờ không đều, không teo da, không ngứa.</li>
           <li>Trứng cá: Mụn nhân trắng đen, mụn viêm , mụn nang, mụn bọc</li>
           <li>Sẹo lõm: Tổn thương lõm sâu xuống dưới bề mặt da, màu đậm hoặc cùng màu da, không đau. Sẹo đáy nhọn, sẹo đáy hộp, sẹo đáy tròn</li>
           <li>Sẹo lồi: Tổn thương nổi gồ trên bề mặt da, không đau, màu trùng màu da hoặc đậm hơn</li>
           <li>Lão hóa da: Da bị chảy xệ, trùng nhão không được săn chắc. Nhiều nếp nhăn vùng trán, đuôi mắt, rãnh mũi má</li>
           <li>Rụng tóc: Tóc rụng thành chỏm hoặc nhiều sợi , sợi tóc mỏng xơ dễ gãy</li>
        </ul>`,
            contentHtmlEn: `<h4>Dr.Phil, Doctor Vu Thai Ha</h4>
        <ul>
           <li>16 years of experience in dermatology and laser – surgery in dermatology</li>
           <li>10 years of experience in lifting and rejuvenating facial skin with thread</li>
           <li>15 years experience in laser treatment and light therapy for hyperpigmentation, skin rejuvenation, concave scars, keloid scars.</li>
           <li>15 years of experience in treating dermatological diseases such as acne, hair loss, psoriasis, atopic dermatitis....</li>
           <li>10 years of experience in facial shaping and skin rejuvenation with Filler, botox, 5 years of experience in mesotherapy for melasma treatment and skin rejuvenation, body slimming</li>
           <li>16 years of teaching in Dermatology</li>
           <li>Experience in anti-aging treatment with RF, HIFU</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Dean of Department of Research and Application of Stem Cell Technology - National Hospital of Dermatology (2016 - present)</li>
           <li>Deputy Head of Department in charge of Research and Application of Stem Cell Technology - National Hospital of Dermatology (April 2016 - June 2016)</li>
           <li>Deputy Head of Plastic Surgery and Rehabilitation Department - National Hospital of Dermatology (July 2015 - April 2016)</li>
           <li>Deputy Head of Surgical Laser Department (D1) - National Hospital of Dermatology (5/2013 - 7/2015)</li>
           <li>Dean of Dermatology - Hanoi Medical University (June 2012 - April 2013)</li>
           <li>Dermatologist at the Department of Laser - Surgery of the National Hospital of Dermatology (since 1/2013)</li>
           <li>Lecturer of Dermatology - Hanoi Medical University (since January 2013)</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Research student majoring in Dermatology – Hanoi Medical University (2010 - 2017)</li>
           <li>Master of Dermatology – Hanoi Medical University (1999 - 2005)</li>
           <li>Level I Specialist in Dermatology – Hanoi Medical University (1999 - 2003)</li>
           <li>Resident Doctor of Dermatology – Hanoi Medical University (1999 - 2003)</li>
           <li>Internship at the Dermatology Department of Bichat Hospital - Claude Bernard - Paris - France on dermatological diseases, lymphomas, hair diseases, nail diseases (2009)</li>
           <li>Internship at the Department of Dermatology at Sant Louis Hospital - Paris - France hair diseases, lymphomas, teaching methods of dermatology (2011)</li>
        </ul>
        <h6>Other specialized certificates</h6>
        <ul>
           <li>Certificate: Laser and Light Application in Dermatology issued by the National Hospital of Dermatology.</li>
           <li>Certificate of Laser Training Revlite, Picosure in Thailand by Professor Niwat Polnikorn.</li>
           <li>Certificate of training in basic and advanced Botox - Filler in preventing facial aging and facial contouring from Hanoi Medical University, Thailand Mahidol Medical University, Viet Duc Hospital and others Restylen, Allergan, Pluryal, neuvia, teoxane…</li>
           <li>Training certificate for Ultra V-lift thread tensioner issued by Professor Kwon Han Jin</li>
           <li>Certificate of training in chemical peel, skin care issued by Image Skincare</li>
        </ul>
        <h6>Examination and treatment</h6>
        <ul>
           <li>Atopic dermatitis: Dry, erythematous skin lesions accompanied by itching</li>
           <li>Contact Dermatitis: Contact lesions, erythema, vesicles, possibly ulceration, with itching</li>
           <li>Seborrheic Dermatitis: Red-pink, scaly patches of greasy white skin with itching in folds, nasolabial folds</li>
           <li>Urticaria: edema, itching, angioedema, mainly caused by allergies</li>
           <li>Zona: Erythema, vesicles, sores, burning sensation along the nerve</li>
           <li>Chickenpox: Fever, large fluid-filled blisters spread throughout the body, after broken scabs, scars</li>
           <li>Temple: Mild raised, ring or oval, red or brown, scaly and itchy patch</li>
           <li>Molluscum contagiosum: Small papule, central depression, scattered throughout the body, no itching, no pain</li>
           <li>Diffuse lymphadenitis</li>
           <li>Pigmentation: Nodules, localized or diffuse hyperpigmentation patches on the body, flat surface, brown, black, blue. No pain, no itching.</li>
           <li>Melasma: Melasma: Brown, greenish-black pigmented macules symmetrically on both sides of the face, flat, uneven edges, no atrophy, no itching.</li>
           <li>Acne: Black and white cystic acne, inflammatory acne, cystic acne, cystic acne</li>
           <li>Concave scars: Lesions deeply concave below the surface of the skin, dark in color or the same color of the skin, painless. Spiky bottom scars, box bottom scars, round bottom scars</li>
           <li>Kell: A raised lesion on the skin surface, painless, the same color or darker</li>
           <li>Aging skin: Skin sagging, laxity is not firm. Many wrinkles on forehead, eyes, nasolabial folds</li>
           <li>Hair Loss: Hair falls out in clumps or many strands, thin and fragile hairs </li>
        </ul>`,
            descriptionVi: `Trưởng khoa Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương`,
            descriptionEn: `Dean of the Department of Stem Cell Technology Research and Application - National Hospital of Dermatology`,
            contentMarkDownVi: `#### Tiến sĩ, Bác sĩ Vũ Thái Hà

*   16 năm kinh nghiệm trong chuyên ngành da liễu và laser – phẫu thuật trong da liễu
*   10 năm kinh nghiệm nâng cơ, trẻ hóa da mặt bằng chỉ
*   15 năm kinh nghiệm trong điều trị laser và trị liệu ánh sáng cho các tăng sắc tố, trẻ hóa da, sẹo lõm, sẹo lồi.
*   15 năm kinh nghiệm trong điều trị bệnh da liễu như trứng cá, rụng tóc, vảy nến, viêm da cơ địa....
*   10 năm kinh nghiệm trong tạo hình khuôn mặt và trẻ hóa da bằng Filler, botox, 5 năm kinh nghiệm trong liệu pháp mesotherapy điều trị rám má và trẻ hóa da, thon gọn cơ thể
*   16 năm giảng dạy trong chuyên ngành Da liễu
*   Kinh nghiệm trong điều trị chống lão hóa bằng RF, HIFU

###### Quá trình công tác

*   Trưởng khoa Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương (2016 - nay)
*   Phó trưởng khoa phụ trách Khoa nghiên cứu và ứng dụng công nghệ tế bào gốc - Bệnh viện Da liễu Trung ương (4/2016 - 6/2016)
*   Phó trưởng khoa Phẫu thuật tạo hình và Phục hồi chức năng - Bệnh viện Da liễu Trung ương (7/2015 - 4/2016)
*   Phó trường khoa Laser phẫu thuật (D1) - Bệnh viện Da liễu Trung ương (5/2013 - 7/2015)
*   Giáo vụ bộ môn Da liễu - Đại học Y Hà Nội (6/2012 - 4/2013)
*   Bác sĩ Da liễu tại khoa Laser - phẫu thuật bệnh viện Da liễu Trung ương (từ 1/2013)
*   Giảng viện bộ môn da liễu - Trường Đại học Y Hà Nội (từ 1/2013)

###### Quá trình đào tạo

*   Nghiên cứu sinh chuyên ngành Da liễu – Đại học Y Hà Nội (2010 - 2017)
*   Thạc sĩ Da liễu – Đại học Y Hà Nội (1999 - 2005)
*   Bác sĩ Chuyên khoa cấp I Da liễu – Đại học Y Hà Nội (1999 - 2003)
*   Bs nội trú Da liễu – Đại học Y Hà Nội (1999 - 2003)
*   Thực tập tại khoa Da liễu Bệnh viện Bichat – Claude Bernard - Paris – Pháp các bệnh da liễu, u lympho, bệnh về tóc, bệnh về móng (2009)
*   Thực tập tại khoa Da liễu Bệnh viện Sant Louis – Paris – Pháp bệnh về tóc, u lympho, phương pháp giảng dạy bệnh da liễu (2011)

###### Chứng chỉ chuyên ngành khác

*   Chứng chỉ: Ứng dụng Laser và ánh sáng trong Da liễu do Bệnh Viện Da liễu Trung Ương cấp.
*   Chứng nhận đào tạo Laser Revlite, Picosure tại Thái Lan do giáo sư Niwat Polnikorn cấp.
*   Chứng nhận đào tạo về Botox - Filler cơ bản và nâng cao trong ngăn ngừa lão hóa khuôn mặt và tạo hình vùng mặt của Trường đại học Y Hà Nội, Trường đại học Y Mahidol Thái Lan, Bệnh viện Việt Đức và các hãng Restylen, Allergan, Pluryal, neuvia, teoxane…
*   Chứng nhận đào tạo về căng chỉ Ultra V-lift được cấp bởi giáo sư Kwon Han Jin
*   Chứng nhận đào tạo về chemical peel, chăm sóc da do Image Skincare cấp

###### Khám và điều trị

*   Viêm da cơ địa: Tổn thương da khô, ban đỏ kèm theo hiện tượng ngứa
*   Viêm da tiếp xúc: Tổn thương vùng bị tiếp xúc, dát đỏ, mụn nước , có thể loét , kèm ngứa
*   Viêm da dầu: Các mảng dát màu đỏ hồng, có vảy da trắng mỏng nhờn dính kèm ngứa ở nếp gấp, rãnh mũi má
*   Mày đay: Sẩn phù, ngứa, phù mạch, nguyên nhân chủ yếu do dị ứng
*   Zona: Ban đỏ, đám mụn nước ,vết loét, cảm giác ngứa rát dọc theo dây thần kinh
*   Thủy đậu: Sốt, mụn nước to dịch trong lan toàn thân , sau vỡ vảy tiết, sẹo
*   Nấm da: Mảng nổi nhẹ, có hình vòng hoặc bầu dục, có màu đỏ hoặc nâu, tróc vảy và gây ngứa
*   U mềm lây: Nốt sẩn nhỏ, lõm trung tâm, rải rác toàn thân, không ngứa, không đau
*   Viêm hạch lan tỏa
*   Bớt sắc tố: Nốt, mảng tăng sắc tố khu trú hoặc lan tỏa trên cơ thể, bề mặt phẳng, màu nâu, đen , xanh. Không đau , không ngứa rát.
*   Nám da: Dát tăng sắc tố màu nâu, xanh đen đối xứng 2 bên mặt, bằng phẳng, bờ không đều, không teo da, không ngứa.
*   Trứng cá: Mụn nhân trắng đen, mụn viêm , mụn nang, mụn bọc
*   Sẹo lõm: Tổn thương lõm sâu xuống dưới bề mặt da, màu đậm hoặc cùng màu da, không đau. Sẹo đáy nhọn, sẹo đáy hộp, sẹo đáy tròn
*   Sẹo lồi: Tổn thương nổi gồ trên bề mặt da, không đau, màu trùng màu da hoặc đậm hơn
*   Lão hóa da: Da bị chảy xệ, trùng nhão không được săn chắc. Nhiều nếp nhăn vùng trán, đuôi mắt, rãnh mũi má
*   Rụng tóc: Tóc rụng thành chỏm hoặc nhiều sợi , sợi tóc mỏng xơ dễ gãy`,
            contentMarkDownEn: `#### Dr.Phil, Doctor Vu Thai Ha

*   16 years of experience in dermatology and laser – surgery in dermatology
*   10 years of experience in lifting and rejuvenating facial skin with thread
*   15 years experience in laser treatment and light therapy for hyperpigmentation, skin rejuvenation, concave scars, keloid scars.
*   15 years of experience in treating dermatological diseases such as acne, hair loss, psoriasis, atopic dermatitis....
*   10 years of experience in facial shaping and skin rejuvenation with Filler, botox, 5 years of experience in mesotherapy for melasma treatment and skin rejuvenation, body slimming
*   16 years of teaching in Dermatology
*   Experience in anti-aging treatment with RF, HIFU

###### Working history

*   Dean of Department of Research and Application of Stem Cell Technology - National Hospital of Dermatology (2016 - present)
*   Deputy Head of Department in charge of Research and Application of Stem Cell Technology - National Hospital of Dermatology (April 2016 - June 2016)
*   Deputy Head of Plastic Surgery and Rehabilitation Department - National Hospital of Dermatology (July 2015 - April 2016)
*   Deputy Head of Surgical Laser Department (D1) - National Hospital of Dermatology (5/2013 - 7/2015)
*   Dean of Dermatology - Hanoi Medical University (June 2012 - April 2013)
*   Dermatologist at the Department of Laser - Surgery of the National Hospital of Dermatology (since 1/2013)
*   Lecturer of Dermatology - Hanoi Medical University (since January 2013)

###### Training process

*   Research student majoring in Dermatology – Hanoi Medical University (2010 - 2017)
*   Master of Dermatology – Hanoi Medical University (1999 - 2005)
*   Level I Specialist in Dermatology – Hanoi Medical University (1999 - 2003)
*   Resident Doctor of Dermatology – Hanoi Medical University (1999 - 2003)
*   Internship at the Dermatology Department of Bichat Hospital - Claude Bernard - Paris - France on dermatological diseases, lymphomas, hair diseases, nail diseases (2009)
*   Internship at the Department of Dermatology at Sant Louis Hospital - Paris - France hair diseases, lymphomas, teaching methods of dermatology (2011)

###### Other specialized certificates

*   Certificate: Laser and Light Application in Dermatology issued by the National Hospital of Dermatology.
*   Certificate of Laser Training Revlite, Picosure in Thailand by Professor Niwat Polnikorn.
*   Certificate of training in basic and advanced Botox - Filler in preventing facial aging and facial contouring from Hanoi Medical University, Thailand Mahidol Medical University, Viet Duc Hospital and others Restylen, Allergan, Pluryal, neuvia, teoxane…
*   Training certificate for Ultra V-lift thread tensioner issued by Professor Kwon Han Jin
*   Certificate of training in chemical peel, skin care issued by Image Skincare

###### Examination and treatment

*   Atopic dermatitis: Dry, erythematous skin lesions accompanied by itching
*   Contact Dermatitis: Contact lesions, erythema, vesicles, possibly ulceration, with itching
*   Seborrheic Dermatitis: Red-pink, scaly patches of greasy white skin with itching in folds, nasolabial folds
*   Urticaria: edema, itching, angioedema, mainly caused by allergies
*   Zona: Erythema, vesicles, sores, burning sensation along the nerve
*   Chickenpox: Fever, large fluid-filled blisters spread throughout the body, after broken scabs, scars
*   Temple: Mild raised, ring or oval, red or brown, scaly and itchy patch
*   Molluscum contagiosum: Small papule, central depression, scattered throughout the body, no itching, no pain
*   Diffuse lymphadenitis
*   Pigmentation: Nodules, localized or diffuse hyperpigmentation patches on the body, flat surface, brown, black, blue. No pain, no itching.
*   Melasma: Melasma: Brown, greenish-black pigmented macules symmetrically on both sides of the face, flat, uneven edges, no atrophy, no itching.
*   Acne: Black and white cystic acne, inflammatory acne, cystic acne, cystic acne
*   Concave scars: Lesions deeply concave below the surface of the skin, dark in color or the same color of the skin, painless. Spiky bottom scars, box bottom scars, round bottom scars
*   Kell: A raised lesion on the skin surface, painless, the same color or darker
*   Aging skin: Skin sagging, laxity is not firm. Many wrinkles on forehead, eyes, nasolabial folds
*   Hair Loss: Hair falls out in clumps or many strands, thin and fragile hairs`,
            doctorId: 12,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Giáo sư, Tiến sĩ Đỗ Như Hơn</h4>
        <ul>
           <li>Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa Mắt</li>
           <li>Chuyên gia đầu ngành về Nhãn khoa</li>
           <li>Nguyên Giám đốc Bệnh viện Mắt Trung ương</li>
           <li>Danh hiệu Thầy thuốc Nhân dân</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Học hàm Giáo sư (2014)</li>
           <li>Học hàm Phó Giáo sư (2002)</li>
           <li>Tiến sĩ Y khoa, Đại học Y Hà Nội (1992 -1996)</li>
           <li>Thực tâp sinh tại Cộng hòa Pháp (1989 - 1990)</li>
           <li>Bác sĩ Nội trú Chuyên ngành Nhãn khoa, Đại học Y Hà Nội (1978 - 1980)</li>
           <li>Chuyên ngành Nhãn khoa, Đại học Y Hà Nội (1973 - 1978)</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Giám đốc Bệnh viện Mắt Trung ương (2007 - 2015)</li>
           <li>Phó khoa Chấn thương, Phó Viện trưởng Viện mắt (2000)</li>
           <li>Bác sĩ Bệnh viện Mắt Trung Ương (1980 - nay)</li>
        </ul>
        <h6>Sách và công trình nghiên cứu</h6>
        <ul>
           <li>Đề tài cấp nhà nước: "Ứng dụng kỹ thuật tiên tiến trong điều trị một số bệnh lý nhãn khoa"</li>
           <li>Đề tài cấp Bộ: "Nghiên cứu đào tạo chuyển giao phát triển kỹ thuật dịch kính võng mạc cho một số tỉnh thành phố.</li>
           <li>Xây dựng bộ giáo trình Nhãn khoa dành cho công tác đào tạo sau đại học: CKI, Nội trú, Cao học và bộ giáo trình Điều dưỡng Nhãn khoa dành cho công tác đào tạo Điều dưỡng chuyên khoa Mắt</li>
        </ul>
        <h6>Giải thưởng</h6>
        <ul>
           <li>Thầy thuốc Nhân dân</li>
        </ul>
        <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
        <ul>
           <li>Phó Chủ tịch Ủy ban Quốc gia Phòng chống mù lòa</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <p><strong>Dịch kính võng mạc</strong></p>
        <ul>
           <li>Bong võng mạc</li>
           <li>Thoái hóa võng mạc</li>
           <li>Thoái hóa dịch kính võng mạc</li>
           <li>Bệnh võng mạc đái tháo đường</li>
           <li>Bệnh thoái hóa hoàng điểm tuổi già</li>
           <li>Các bệnh võng mạc trong các bệnh lý toàn thân</li>
           <li>Viêm màng bồ đào</li>
           <li>Viêm nội nhãn</li>
           <li>Xuất huyết dịch kính</li>
        </ul>
        <p><strong>Chấn thương</strong></p>
        <ul>
           <li>Chấn thương mắt</li>
           <li>Chấn thương mi</li>
           <li>Chấn thương lệ đạo</li>
           <li>Dị vật kết giác mạc</li>
           <li>Dị vật nội nhãn</li>
        </ul>
        <p><strong>Các bệnh lí về mắt</strong></p>
        <ul>
           <li>Mắt hột</li>
           <li>Khám, điều trị bệnh thiên đầu thống (glocom)</li>
        </ul>
        <p><strong>Tật khúc xạ</strong></p>
        <ul>
           <li>Cận thị</li>
           <li>Nhược thị</li>
           <li>Viễn thị</li>
           <li>Lão thị</li>
           <li>Loạn thị</li>
        </ul>
        <p><strong>Các rối loạn về mắt</strong></p>
        <ul>
           <li>Hội chứng khô mắt</li>
           <li>Rối loạn ở hốc mắt</li>
           <li>Rối loạn tuyến lệ</li>
           <li>Tăng nhãn áp</li>
        </ul>
        <p><strong>Các bệnh lí khác về mắt</strong></p>
        <ul>
           <li>Quặm mi</li>
           <li>Sa mí mắt</li>
           <li>Viêm kết mạc</li>
           <li>Lác mắt</li>
           <li>Mộng thịt</li>
           <li>Song thị</li>
           <li>Viêm giác mạc</li>
           <li>Viêm mi mắt</li>
           <li>Bong võng mạc</li>
           <li>Rách võng mạc</li>
           <li>Đục thủy tinh thể</li>
        </ul>
        <p><strong>Thủ thuật </strong></p>
        <ul>
           <li>Lấy sạn vôi kết mạc</li>
           <li>Thông lệ đạo 1 mắt</li>
           <li>Tiêm cạnh nhãn cầu</li>
           <li>Khâu kết mạc</li>
           <li>Khâu vết thương da mi</li>
        </ul>`,
            contentHtmlEn: `<h4>Professor, Dr.Phil Do Nhu Than</h4>
        <ul>
           <li>Professor, Dr.Phil, Ophthalmologist</li>
           <li>Leading Specialist in Ophthalmology</li>
           <li>Former Director of Central Eye Hospital</li>
           <li>Title of People's Physician</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Professor (2014)</li>
           <li>Academic Associate Professor (2002)</li>
           <li>Doctor of Medicine, Hanoi Medical University (1992 -1996)</li>
           <li>Internship in the French Republic (1989 - 1990)</li>
           <li>Resident Doctor of Ophthalmology, Hanoi Medical University (1978 - 1980)</li>
           <li>Specialized in Ophthalmology, Hanoi Medical University (1973 - 1978)</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Director of Central Eye Hospital (2007 - 2015)</li>
           <li>Deputy Department of Trauma, Deputy Director of Eye Institute (2000)</li>
           <li>Doctor of National Eye Hospital (1980 - present)</li>
        </ul>
        <h6>Books and research</h6>
        <ul>
           <li>State-level project: "Application of advanced technology in the treatment of some ophthalmic diseases"</li>
           <li>Ministry-level project: "Research on training and transfer of retinal vitreous technology development for some provinces and cities.</li>
           <li>Development of Ophthalmology textbooks for postgraduate training: CKI, Residency, Postgraduate and Ophthalmology nursing textbooks for Ophthalmology Nursing training</li>
        </ul>
        <h6>Awards</h6>
        <ul>
           <li>People's Physician</li>
        </ul>
        <h6>Members of scientific associations and professional organizations</h6>
        <ul>
           <li>Vice Chairman of the National Committee for the Prevention of Blindness</li>
        </ul>
        <h6>Examination and treatment</h6>
        <p><strong>Vitreous retina</strong></p>
        <ul>
           <li>Retinal detachment</li>
           <li>Retina Degeneration</li>
           <li>Retinal vitreous degeneration</li>
           <li>diabetic retinopathy</li>
           <li>Old age macular degeneration</li>
           <li>Retinopathy in systemic diseases</li>
           <li>Uveitis</li>
           <li>Inflammation of the eye</li>
           <li>Vitreous hemorrhage</li>
        </ul>
        <p><strong>Injury</strong></p>
        <ul>
           <li>Eye trauma</li>
           <li>Injury to the eyelid</li>
           <li>Tear trauma</li>
           <li>Conjunctival foreign body</li>
           <li>Intraocular foreign body</li>
        </ul>
        <p><strong>Eye diseases</strong></p>
        <ul>
           <li>Trailed Eyes</li>
           <li>Examination and treatment of glaucoma</li>
        </ul>
        <p><strong>Refraction</strong></p>
        <ul>
           <li>Myopia</li>
           <li>Amblyopia</li>
           <li>Presbyopia</li>
           <li>Presbyopia</li>
           <li>Astigmatism</li>
        </ul>
        <p><strong>Eye disorders</strong></p>
        <ul>
           <li>Dry eye syndrome</li>
           <li>Orbital disorders</li>
           <li>Tear gland disorder</li>
           <li>Increased eye pressure</li>
        </ul>
        <p><strong>Other eye diseases</strong></p>
        <ul>
           <li>Eyes encrusted</li>
           <li>Falling eyelid</li>
           <li>Conjunctivitis</li>
           <li>crossed eyes</li>
           <li>Meat dream</li>
           <li>Dual vision</li>
           <li>keratitis</li>
           <li>Inflammation of the eyelid</li>
           <li>Retinal detachment</li>
           <li>Retinal tear</li>
           <li>cataract</li>
        </ul>
        <p><strong>Tricks</strong></p>
        <ul>
           <li>Remove conjunctival calcification</li>
           <li>One-eyed practice</li>
           <li>Intra-ocular injection</li>
           <li>Conjunctival suture</li>
           <li>Stitch the wound on your skin</li>
        </ul>`,
            descriptionVi: `Nguyên Giám đốc Bệnh viện Mắt Trung ương
Được phong tặng Danh hiệu Thầy thuốc Nhân dân`,
            descriptionEn: `Former Director of Central Eye Hospital
Awarded the title of People's Doctor`,
            contentMarkDownVi: `#### Giáo sư, Tiến sĩ Đỗ Như Hơn

*   Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa Mắt
*   Chuyên gia đầu ngành về Nhãn khoa
*   Nguyên Giám đốc Bệnh viện Mắt Trung ương
*   Danh hiệu Thầy thuốc Nhân dân

###### Quá trình đào tạo

*   Học hàm Giáo sư (2014)
*   Học hàm Phó Giáo sư (2002)
*   Tiến sĩ Y khoa, Đại học Y Hà Nội (1992 -1996)
*   Thực tâp sinh tại Cộng hòa Pháp (1989 - 1990)
*   Bác sĩ Nội trú Chuyên ngành Nhãn khoa, Đại học Y Hà Nội (1978 - 1980)
*   Chuyên ngành Nhãn khoa, Đại học Y Hà Nội (1973 - 1978)

###### Quá trình công tác

*   Giám đốc Bệnh viện Mắt Trung ương (2007 - 2015)
*   Phó khoa Chấn thương, Phó Viện trưởng Viện mắt (2000)
*   Bác sĩ Bệnh viện Mắt Trung Ương (1980 - nay)

###### Sách và công trình nghiên cứu

*   Đề tài cấp nhà nước: "Ứng dụng kỹ thuật tiên tiến trong điều trị một số bệnh lý nhãn khoa"
*   Đề tài cấp Bộ: "Nghiên cứu đào tạo chuyển giao phát triển kỹ thuật dịch kính võng mạc cho một số tỉnh thành phố.
*   Xây dựng bộ giáo trình Nhãn khoa dành cho công tác đào tạo sau đại học: CKI, Nội trú, Cao học và bộ giáo trình Điều dưỡng Nhãn khoa dành cho công tác đào tạo Điều dưỡng chuyên khoa Mắt

###### Giải thưởng

*   Thầy thuốc Nhân dân

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Phó Chủ tịch Ủy ban Quốc gia Phòng chống mù lòa

###### Khám và điều trị

**Dịch kính võng mạc**

*   Bong võng mạc
*   Thoái hóa võng mạc
*   Thoái hóa dịch kính võng mạc
*   Bệnh võng mạc đái tháo đường
*   Bệnh thoái hóa hoàng điểm tuổi già
*   Các bệnh võng mạc trong các bệnh lý toàn thân
*   Viêm màng bồ đào
*   Viêm nội nhãn
*   Xuất huyết dịch kính

**Chấn thương**

*   Chấn thương mắt
*   Chấn thương mi
*   Chấn thương lệ đạo
*   Dị vật kết giác mạc
*   Dị vật nội nhãn

**Các bệnh lí về mắt**

*   Mắt hột
*   Khám, điều trị bệnh thiên đầu thống (glocom)

**Tật khúc xạ**

*   Cận thị
*   Nhược thị
*   Viễn thị
*   Lão thị
*   Loạn thị

**Các rối loạn về mắt**

*   Hội chứng khô mắt
*   Rối loạn ở hốc mắt
*   Rối loạn tuyến lệ
*   Tăng nhãn áp

**Các bệnh lí khác về mắt**

*   Quặm mi
*   Sa mí mắt
*   Viêm kết mạc
*   Lác mắt
*   Mộng thịt
*   Song thị
*   Viêm giác mạc
*   Viêm mi mắt
*   Bong võng mạc
*   Rách võng mạc
*   Đục thủy tinh thể

**Thủ thuật**

*   Lấy sạn vôi kết mạc
*   Thông lệ đạo 1 mắt
*   Tiêm cạnh nhãn cầu
*   Khâu kết mạc
*   Khâu vết thương da mi`,
            contentMarkDownEn: `#### Professor, Dr.Phil Do Nhu Than

*   Professor, Dr.Phil, Ophthalmologist
*   Leading Specialist in Ophthalmology
*   Former Director of Central Eye Hospital
*   Title of People's Physician

###### Training process

*   Professor (2014)
*   Academic Associate Professor (2002)
*   Doctor of Medicine, Hanoi Medical University (1992 -1996)
*   Internship in the French Republic (1989 - 1990)
*   Resident Doctor of Ophthalmology, Hanoi Medical University (1978 - 1980)
*   Specialized in Ophthalmology, Hanoi Medical University (1973 - 1978)

###### Working history

*   Director of Central Eye Hospital (2007 - 2015)
*   Deputy Department of Trauma, Deputy Director of Eye Institute (2000)
*   Doctor of National Eye Hospital (1980 - present)

###### Books and research

*   State-level project: "Application of advanced technology in the treatment of some ophthalmic diseases"
*   Ministry-level project: "Research on training and transfer of retinal vitreous technology development for some provinces and cities.
*   Development of Ophthalmology textbooks for postgraduate training: CKI, Residency, Postgraduate and Ophthalmology nursing textbooks for Ophthalmology Nursing training

###### Awards

*   People's Physician

###### Members of scientific associations and professional organizations

*   Vice Chairman of the National Committee for the Prevention of Blindness

###### Examination and treatment

**Vitreous retina**

*   Retinal detachment
*   Retina Degeneration
*   Retinal vitreous degeneration
*   diabetic retinopathy
*   Old age macular degeneration
*   Retinopathy in systemic diseases
*   Uveitis
*   Inflammation of the eye
*   Vitreous hemorrhage

**Injury**

*   Eye trauma
*   Injury to the eyelid
*   Tear trauma
*   Conjunctival foreign body
*   Intraocular foreign body

**Eye diseases**

*   Trailed Eyes
*   Examination and treatment of glaucoma

**Refraction**

*   Myopia
*   Amblyopia
*   Presbyopia
*   Presbyopia
*   Astigmatism

**Eye disorders**

*   Dry eye syndrome
*   Orbital disorders
*   Tear gland disorder
*   Increased eye pressure

**Other eye diseases**

*   Eyes encrusted
*   Falling eyelid
*   Conjunctivitis
*   crossed eyes
*   Meat dream
*   Dual vision
*   keratitis
*   Inflammation of the eyelid
*   Retinal detachment
*   Retinal tear
*   cataract

**Tricks**

*   Remove conjunctival calcification
*   One-eyed practice
*   Intra-ocular injection
*   Conjunctival suture
*   Stitch the wound on your skin`,
            doctorId: 13,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Giáo sư, Tiến sĩ, Bác sĩ Hà Văn Quyết</h4>
        <ul>
           <li>Giáo sư, Tiến sỹ, Bác sĩ chuyên khoa Ngoại Tiêu hóa</li>
           <li>Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa</li>
           <li>Kinh nghiệm làm việc trên 35 năm trong lĩnh vực bệnh lý Tiêu hóa</li>
           <li>Chuyên ngành Ngoại – Phẫu thuật Nội soi Tiêu hóa, Ổ bụng &amp; các bệnh lý hậu môn, trực tràng.</li>
           <li>Bác sĩ Nội trú Bệnh viện Việt Đức </li>
           <li>Nguyên Chủ nhiệm Bộ môn Ngoại - Đại học Y Hà Nội </li>
           <li>Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội</li>
           <li>Nguyên Phó Giám đốc Bệnh viện Việt Đức.</li>
           <li>Bác sĩ khám cho người bệnh từ 3 tuổi trở lên</li>
        </ul>
         <h6>Quá trình Đào tạo </h6>
        <ul>
           <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội.</li>
           <li>Bác sĩ Nội trú tại các bệnh viện ở Paris, Cộng hòa Pháp</li>
           <li>Thực tập sinh khoa Tiêu hóa trường Đại học Tokai, Nhật Bản</li>
           <li>Tu nghiệp về chuyên khoa Tiêu hóa tại Mỹ, Singapore, Hàn Quốc </li>
        </ul>
        <h6>Sách và các công trình nghiên cứu, báo cáo khoa học</h6>
        <ul>
           <li>Chủ biên nhiều bộ sách giáo khoa về Ngoại khoa phẫu thuật tiêu hóa và chuyên sâu về tiêu hóa.</li>
           <li>Tham gia các đề tài nghiên cứu khoa học về ung thư dạ dày, đại trực tràng; các chủ đề về bệnh lý tụy; các loại phẫu thuật nội soi, nội soi can thiệp; bệnh lý về hậu môn trực tràng. </li>
        </ul>
        <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
        <ul>
           <li>Nguyên Tổng thư kí Hội Ngoại khoa Việt Nam </li>
           <li>Phó Chủ tịch Hội Khoa học về Hậu môn trực tràng </li>
        </ul>
        <h6>Tham gia các chuyên đề sức khỏe</h6>
        <ul>
           <li>Ban biên tập Tạp chí Y học thực hành</li>
           <li>Ban biên tập Tạp chí Ngoại khoa</li>
           <li>Ban biên tập Tạp chí Hậu môn Trực tràng</li>
        </ul>
        <h6>Giáo sư Khám, điều trị các bệnh</h6>
        <ul>
           <li>Giáo sư nhận khám, điều trị các bệnh lý khó về Tiêu hóa, hậu môn, trực tràng, gan mật</li>
           <li>Trực tiếp tiến hành Nội soi tiêu hóa, dạ dày, đại tràng</li>
           <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng</li>
           <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày</li>
           <li>Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa</li>
           <li>Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại</li>
        </ul>
        <p><strong>Khám và điều trị các bệnh lý dạ dày</strong></p>
        <ul>
           <li>Gắp dị vật đường tiêu hóa</li>
           <li>Đau dạ dày</li>
           <li>Chảy máu dạ dày </li>
           <li>Đau thượng vị </li>
           <li>Viêm dạ dày</li>
           <li>Loét dạ dày tá tràng</li>
           <li>Nhiễm Helicobacter pylori dạ dày (HP)</li>
           <li>Trào ngược dạ dày thực quản (Gerd)</li>
           <li>Tắc ruột </li>
           <li>Polyp dạ dày </li>
           <li>Chảy máu dạ dày </li>
           <li>Viêm dạ dày ruột Virus</li>
           <li>Viêm ruột thừa</li>
           <li>Polyp dạ dày</li>
           <li>Ung thư dạ dày</li>
           <li>Táo bón</li>
           <li>Khó nuốt</li>
           <li>Khó tiêu</li>
           <li>Ợ nóng, Ợ chua</li>
           <li>Táo bón</li>
        </ul>
        <p><strong>Bệnh lý đại tràng, trực tràng, hậu môn</strong></p>
        <ul>
           <li>Hội chứng ruột kích thích (viêm đại tràng co thắt)</li>
           <li>Viêm đại tràng</li>
           <li>Viêm đại tràng màng giả</li>
           <li>Viêm loét đại tràng</li>
           <li>Bệnh trĩ, trĩ chảy máu, rò hậu môn</li>
           <li>Rò hậu môn, ngứa hậu môn</li>
           <li>Nứt kẽ hậu môn, đại tiện ra máu, đại tiện khó</li>
           <li>Apxe hậu môn</li>
           <li>Đi ngoài ra máu </li>
        </ul>
        <p><strong>Khám và điều trị các bệnh lý về gan, mật </strong></p>
        <ul>
           <li>Viêm túi mật, sỏi mật </li>
           <li>Viêm tụy</li>
           <li>Viêm xơ đường mật</li>
           <li>Viêm xơ gan do rượu</li>
           <li>Xơ gan</li>
           <li>U gan</li>
        </ul>
        <p><strong>Nội soi tiêu hóa </strong></p>
        <ul>
           <li>Gắp dị vật đường tiêu hóa </li>
           <li>Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại</li>
           <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng</li>
           <li>Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa</li>
           <li>Khám, nội soi dạ dày </li>
           <li>Nội soi dạ dày (có gây mê)</li>
           <li>Nội soi đại tràng (có gây mê)</li>
           <li>Nội soi cắt polyp dạ dày</li>
           <li>Nội soi cắt polyp đại trực tràng  </li>
           <li>Phẫu thuật nội soi cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng</li>
           <li>Phẫu thuật nội soi trào ngược dạ dày thực quản </li>
        </ul>`,
            contentHtmlEn: `<h4>Professor, Dr.Phil, Doctor Ha Van Quyet</h4>
        <ul>
           <li>Professor, Dr.Phil, Specialist Doctor in Gastroenterology</li>
           <li>Leading expert in the field of digestive pathology</li>
           <li>Over 35 years working experience in the field of Digestive pathology</li>
           <li>Specialization in Surgery – Laparoscopic Gastrointestinal, Abdominal &amp; Anal and rectal pathologies.</li>
           <li>Resident Doctor of Viet Duc Hospital </li>
           <li>Former Head of Department of Surgery - Hanoi Medical University </li>
           <li>Former Director of Hanoi Medical University Hospital</li>
           <li>Former Deputy Director of Viet Duc Hospital.</li>
           <li>Doctor examines a patient 3 years and older</li>
        </ul>
         <h6>Training Process</h6>
        <ul>
           <li>Graduated as a General Doctor, Hanoi Medical University.</li>
           <li>Resident in hospitals in Paris, France</li>
           <li>Intern in the Department of Gastroenterology, Tokai University, Japan</li>
           <li>Training in Gastroenterology in USA, Singapore, Korea</li>
        </ul>
         <h6>Books and research works, scientific reports</h6>
        <ul>
           <li>Editor of many textbooks on Digestive Surgery and Digestive Surgery.</li>
           <li>Participating in scientific research projects on stomach and colorectal cancer; topics on pancreatic pathology; types of laparoscopic, endoscopic interventional surgery; anorectal pathology. </li>
        </ul>
         <h6>Members of scientific associations and professional organizations</h6>
        <ul>
           <li>Former General Secretary of the Vietnam Surgical Association </li>
           <li>Vice President of the Scientific Society of Rectal Science </li>
        </ul>
         <h6>Participate in health topics </h6>
        <ul>
           <li>Editing Board of Journal of Practical Medicine</li>
           <li>The Editorial Board of the Journal of Surgery</li>
           <li>The Editorial Board of Anal Rectal Journal</li>
        </ul>
        <h6>Professor, examining and treating diseases</h6>
        <ul>
           <li>Professor receives examination and treatment of difficult diseases of the digestive tract, anus, rectum, hepatobiliary system</li>
           <li>Directly performing Gastrointestinal, Gastric, Colonoscopy</li>
           <li>Exam, Colonoscopy, Colorectal Cancer Screening Test</li>
           <li>Examination, Endoscopy, Stomach Cancer Screening Test</li>
           <li>Examination, Endoscopy, Gastrointestinal cancer screening test</li>
           <li>Examination, Endoscopy, consultation and treatment of Anal diseases, Internal Hemorrhoids, External Hemorrhoids.</li>
        </ul>
        <p><strong>Examination and treatment of stomach diseases</strong></p>
        <ul>
           <li>Gastrointestinal foreign body removal</li>
           <li>Stomach ache</li>
           <li>Stomach bleeding </li>
           <li>Egastric pain </li>
           <li>Gastritis</li>
           <li>Stomach and duodenal ulcer</li>
           <li>Stomach Helicobacter pylori (HP) infection</li>
           <li>Gastroesophageal reflux disease (Gerd)</li>
           <li>Intestinal obstruction </li>
           <li>Stomach polyp </li>
           <li>Stomach bleeding </li>
           <li>Virus gastroenteritis</li>
           <li>Appendicitis</li>
           <li>Stomach polyp</li>
           <li>Stomach cancer</li>
           <li>Constipation</li>
           <li>Difficulty swallowing</li>
           <li>Indigestion</li>
           <li>Hot, sour</li>
           <li>Constipation</li>
        </ul>
        <p><strong>Diseases of colon, rectum, anus</strong></p>
        <ul>
           <li>Irritable bowel syndrome (spasmodic colitis)</li>
           <li>Inflammation of the colon</li>
           <li>Pseudomembranous colitis</li>
           <li>ulcerative colitis</li>
           <li>Hemorrhoids, bleeding hemorrhoids, anal fistula</li>
           <li>Anal fistula, anal itching</li>
           <li>Anal fissures, bloody stools, difficult defecation</li>
           <li>Anal abscess</li>
           <li>Blood in stools </li>
        </ul>
        <p><strong>Examination and treatment of liver and gallbladder diseases </strong></p>
        <ul>
           <li>Cholecystitis, gallstones </li>
           <li>Pancreatitis</li>
           <li>Sclerosing cholangitis</li>
           <li>Alcoholic cirrhosis</li>
           <li>Cirrhosis</li>
           <li>Hepatic tumor</li>
        </ul>
        <p><strong>Gastrointestinal Endoscopy </strong></p>
        <ul>
           <li>Gastrointestinal foreign body removal </li>
           <li>Examination, Endoscopy, consultation and treatment of Anal diseases, Internal Hemorrhoids, External Hemorrhoids</li>
           <li>Exam, Colonoscopy, Colorectal Cancer Screening Test</li>
           <li>Examination, Endoscopy, Gastrointestinal Cancer Screening Test</li>
           <li>Stomach examination and endoscopy </li>
           <li>Gastroscopy (with anesthesia)</li>
           <li>Endoscopy (with anesthesia)</li>
           <li>Laparoscopic gastric polyp removal</li>
           <li>Laparoscopic colorectal polyp removal  </li>
           <li>Laparoscopic surgery to cut tumors under the stomach lining - duodenum, colon</li>
           <li>Gastroesophageal reflux disease endoscopic surgery </li>
        </ul>`,
            descriptionVi: `Chuyên gia trên 35 năm kinh nghiệm trong lĩnh vực bệnh lý Tiêu hóa
Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa
Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội
Bác sĩ khám cho người bệnh từ 3 tuổi trở lên`,
            descriptionEn: `Specialist over 35 years of experience in the field of Digestive pathology
Leading expert in the field of Digestive diseases
Former Director of Hanoi Medical University Hospital
A doctor examines a patient 3 years and older`,
            contentMarkDownVi: `#### Giáo sư, Tiến sĩ, Bác sĩ Hà Văn Quyết

*   Giáo sư, Tiến sỹ, Bác sĩ chuyên khoa Ngoại Tiêu hóa
*   Chuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa
*   Kinh nghiệm làm việc trên 35 năm trong lĩnh vực bệnh lý Tiêu hóa
*   Chuyên ngành Ngoại – Phẫu thuật Nội soi Tiêu hóa, Ổ bụng & các bệnh lý hậu môn, trực tràng.
*   Bác sĩ Nội trú Bệnh viện Việt Đức
*   Nguyên Chủ nhiệm Bộ môn Ngoại - Đại học Y Hà Nội
*   Nguyên Giám đốc Bệnh viện Đại học Y Hà Nội
*   Nguyên Phó Giám đốc Bệnh viện Việt Đức.
*   Bác sĩ khám cho người bệnh từ 3 tuổi trở lên

###### Quá trình Đào tạo

*   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội.
*   Bác sĩ Nội trú tại các bệnh viện ở Paris, Cộng hòa Pháp
*   Thực tập sinh khoa Tiêu hóa trường Đại học Tokai, Nhật Bản
*   Tu nghiệp về chuyên khoa Tiêu hóa tại Mỹ, Singapore, Hàn Quốc

###### Sách và các công trình nghiên cứu, báo cáo khoa học

*   Chủ biên nhiều bộ sách giáo khoa về Ngoại khoa phẫu thuật tiêu hóa và chuyên sâu về tiêu hóa.
*   Tham gia các đề tài nghiên cứu khoa học về ung thư dạ dày, đại trực tràng; các chủ đề về bệnh lý tụy; các loại phẫu thuật nội soi, nội soi can thiệp; bệnh lý về hậu môn trực tràng.

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Nguyên Tổng thư kí Hội Ngoại khoa Việt Nam
*   Phó Chủ tịch Hội Khoa học về Hậu môn trực tràng

###### Tham gia các chuyên đề sức khỏe

*   Ban biên tập Tạp chí Y học thực hành
*   Ban biên tập Tạp chí Ngoại khoa
*   Ban biên tập Tạp chí Hậu môn Trực tràng

###### Giáo sư Khám, điều trị các bệnh

*   Giáo sư nhận khám, điều trị các bệnh lý khó về Tiêu hóa, hậu môn, trực tràng, gan mật
*   Trực tiếp tiến hành Nội soi tiêu hóa, dạ dày, đại tràng
*   Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng
*   Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày
*   Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa
*   Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại

**Khám và điều trị các bệnh lý dạ dày**

*   Gắp dị vật đường tiêu hóa
*   Đau dạ dày
*   Chảy máu dạ dày
*   Đau thượng vị
*   Viêm dạ dày
*   Loét dạ dày tá tràng
*   Nhiễm Helicobacter pylori dạ dày (HP)
*   Trào ngược dạ dày thực quản (Gerd)
*   Tắc ruột
*   Polyp dạ dày
*   Chảy máu dạ dày
*   Viêm dạ dày ruột Virus
*   Viêm ruột thừa
*   Polyp dạ dày
*   Ung thư dạ dày
*   Táo bón
*   Khó nuốt
*   Khó tiêu
*   Ợ nóng, Ợ chua
*   Táo bón

**Bệnh lý đại tràng, trực tràng, hậu môn**

*   Hội chứng ruột kích thích (viêm đại tràng co thắt)
*   Viêm đại tràng
*   Viêm đại tràng màng giả
*   Viêm loét đại tràng
*   Bệnh trĩ, trĩ chảy máu, rò hậu môn
*   Rò hậu môn, ngứa hậu môn
*   Nứt kẽ hậu môn, đại tiện ra máu, đại tiện khó
*   Apxe hậu môn
*   Đi ngoài ra máu

**Khám và điều trị các bệnh lý về gan, mật**

*   Viêm túi mật, sỏi mật
*   Viêm tụy
*   Viêm xơ đường mật
*   Viêm xơ gan do rượu
*   Xơ gan
*   U gan

**Nội soi tiêu hóa**

*   Gắp dị vật đường tiêu hóa
*   Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại
*   Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng
*   Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa
*   Khám, nội soi dạ dày
*   Nội soi dạ dày (có gây mê)
*   Nội soi đại tràng (có gây mê)
*   Nội soi cắt polyp dạ dày
*   Nội soi cắt polyp đại trực tràng
*   Phẫu thuật nội soi cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng
*   Phẫu thuật nội soi trào ngược dạ dày thực quản`,
            contentMarkDownEn: `#### Professor, Dr.Phil, Doctor Ha Van Quyet

*   Professor, Dr.Phil, Specialist Doctor in Gastroenterology
*   Leading expert in the field of digestive pathology
*   Over 35 years working experience in the field of Digestive pathology
*   Specialization in Surgery – Laparoscopic Gastrointestinal, Abdominal & Anal and rectal pathologies.
*   Resident Doctor of Viet Duc Hospital
*   Former Head of Department of Surgery - Hanoi Medical University
*   Former Director of Hanoi Medical University Hospital
*   Former Deputy Director of Viet Duc Hospital.
*   Doctor examines a patient 3 years and older

###### Training Process

*   Graduated as a General Doctor, Hanoi Medical University.
*   Resident in hospitals in Paris, France
*   Intern in the Department of Gastroenterology, Tokai University, Japan
*   Training in Gastroenterology in USA, Singapore, Korea

###### Books and research works, scientific reports

*   Editor of many textbooks on Digestive Surgery and Digestive Surgery.
*   Participating in scientific research projects on stomach and colorectal cancer; topics on pancreatic pathology; types of laparoscopic, endoscopic interventional surgery; anorectal pathology.

###### Members of scientific associations and professional organizations

*   Former General Secretary of the Vietnam Surgical Association
*   Vice President of the Scientific Society of Rectal Science

###### Participate in health topics

*   Editing Board of Journal of Practical Medicine
*   The Editorial Board of the Journal of Surgery
*   The Editorial Board of Anal Rectal Journal

###### Professor, examining and treating diseases

*   Professor receives examination and treatment of difficult diseases of the digestive tract, anus, rectum, hepatobiliary system
*   Directly performing Gastrointestinal, Gastric, Colonoscopy
*   Exam, Colonoscopy, Colorectal Cancer Screening Test
*   Examination, Endoscopy, Stomach Cancer Screening Test
*   Examination, Endoscopy, Gastrointestinal cancer screening test
*   Examination, Endoscopy, consultation and treatment of Anal diseases, Internal Hemorrhoids, External Hemorrhoids.

**Examination and treatment of stomach diseases**

*   Gastrointestinal foreign body removal
*   Stomach ache
*   Stomach bleeding
*   Egastric pain
*   Gastritis
*   Stomach and duodenal ulcer
*   Stomach Helicobacter pylori (HP) infection
*   Gastroesophageal reflux disease (Gerd)
*   Intestinal obstruction
*   Stomach polyp
*   Stomach bleeding
*   Virus gastroenteritis
*   Appendicitis
*   Stomach polyp
*   Stomach cancer
*   Constipation
*   Difficulty swallowing
*   Indigestion
*   Hot, sour
*   Constipation

**Diseases of colon, rectum, anus**

*   Irritable bowel syndrome (spasmodic colitis)
*   Inflammation of the colon
*   Pseudomembranous colitis
*   ulcerative colitis
*   Hemorrhoids, bleeding hemorrhoids, anal fistula
*   Anal fistula, anal itching
*   Anal fissures, bloody stools, difficult defecation
*   Anal abscess
*   Blood in stools

**Examination and treatment of liver and gallbladder diseases**

*   Cholecystitis, gallstones
*   Pancreatitis
*   Sclerosing cholangitis
*   Alcoholic cirrhosis
*   Cirrhosis
*   Hepatic tumor

**Gastrointestinal Endoscopy**

*   Gastrointestinal foreign body removal
*   Examination, Endoscopy, consultation and treatment of Anal diseases, Internal Hemorrhoids, External Hemorrhoids
*   Exam, Colonoscopy, Colorectal Cancer Screening Test
*   Examination, Endoscopy, Gastrointestinal Cancer Screening Test
*   Stomach examination and endoscopy
*   Gastroscopy (with anesthesia)
*   Endoscopy (with anesthesia)
*   Laparoscopic gastric polyp removal
*   Laparoscopic colorectal polyp removal
*   Laparoscopic surgery to cut tumors under the stomach lining - duodenum, colon
*   Gastroesophageal reflux disease endoscopic surgery`,
            doctorId: 14,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Ngô Văn Toàn</h4>
        <ul>
           <li>Nguyên Trưởng khoa Phẫu thuật chấn thương chỉnh hình, Bệnh viện Việt Đức</li>
           <li>Nguyên Viện phó Viện Chấn thương chỉnh hình, Bệnh viện Việt Đức</li>
           <li>Chuyên gia đầu ngành về chấn thương chỉnh hình tại Việt Nam</li>
           <li>Được nhận Danh hiệu Thầy thuốc Nhân dân</li>
           <li>Nguyên Tổng thư kí Hội Chấn thương chỉnh hình Việt Nam</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Viện phó Viện Chấn thương chỉnh hình, Bệnh viện Việt Đức (2010)</li>
           <li>Trưởng khoa Phẫu thuật Chấn thương chỉnh hình, Bệnh viện Việt Đức (1998)</li>
           <li>Phó khoa Chấn thương Chỉnh hình I, Bệnh viện Việt Đức (1996)</li>
           <li>Trưởng ban ngoại, Quân đoàn 34 - Quân khu Thủ Đô (1979 - 1982)</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Tốt nghiệp Tiến sĩ Y khoa, Học viện Quân y (2004)</li>
           <li>Tốt nghiệp Bác sĩ Chuyên khoa cấp II, Đại học Y Hà Nội (1993)</li>
           <li>Tốt nghiệp Bác sĩ Chuyên khoa I, Đại học Y Hà Nội (1990)</li>
           <li>Học Bác sĩ Nội trú về Chấn thương Chỉnh hình tại Cộng hòa Pháp (1988 - 1990)</li>
           <li>Tốt nghiệp Đại học Y Hà Nội năm 1979</li>
           <li>Được nhà nước phong tặng học Hàm Phó Giáo sư</li>
        </ul>
        <h6>Chứng chỉ trong nước hoặc nước ngoài</h6>
        <ul>
           <li>Chứng chỉ Nội soi, tạo hình khớp, Hoa Kỳ (2011, 2013)</li>
           <li>Chứng chỉ Nội soi và tạo hình khớp, Cộng hòa Pháp (2005)</li>
           <li>Chứng chỉ chuyên phẫu thuật bàn tay, Úc (1997)</li>
           <li>Chứng chỉ Phẫu thuật bàn tay, Cộng hòa Pháp (1995)</li>
        </ul>
        <h6>Sách và các công trình nghiên cứu, báo cáo khoa học</h6>
        <ul>
           <li>Viết sách: Chấn thương chỉnh hình</li>
           <li>Bài giảng chấn thương chỉnh hình</li>
           <li>Hơn 60 bài báo và công trình nghiên cứu khoa học</li>
           <li>Chủ nhiệm 2 công trình khoa học cấp Bộ</li>
           <li>Tham gia 1 công trình nghiên cứu khoa học cấp nhà nước</li>
        </ul>
        <h6>Tham gia các Hiệp hội</h6>
        <ul>
           <li>Chủ tịch Câu lạc bộ Sala (nơi hội tụ của những người mong muốn làm nhân đạo trong lĩnh vực y tế - sức khỏe cộng đồng phạm vi Chấn thương chỉnh hình)</li>
           <li>Hội Chấn thương chỉnh hình Việt Nam</li>
           <li>Hội Chấn thương chỉnh hình Châu Á - Thái Bình Dương</li>
           <li>Hội Phẫu thuật Cổ bàn chân Hoa Kỳ</li>
           <li>Hội Phẫu thuật bàn tay Pháp</li>
           <li>Hội Phẫu thuật bàn tay Úc</li>
        </ul>
        <h6>Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình</h6>
        <ul>
           <li>Truyền hình O2TV</li>
           <li>Tuổi vàng</li>
           <li>Bệnh lý xương khớp</li>
           <li>Cảnh báo tai nạn giao thông</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <p><strong>Các bệnh lý vùng tay - vai:</strong></p>
        <ul>
           <li>Đau khớp ngón tay</li>
           <li>Viêm khớp ngón tay</li>
           <li>Đau, sưng khuỷu tay</li>
           <li>Đau, sưng khớp vai</li>
           <li>Đau xương quai xanh</li>
           <li>Đau bả vai, đau cánh tay</li>
           <li>Sưng đau cổ tay, tràn dịch khớp ngón tay</li>
        </ul>
        <p><strong>Phẫu thuật, tái khám sau phẫu thuật:</strong></p>
        <ul>
           <li>Phẫu thuật khớp tay, khớp ngón tay</li>
           <li>Phẫu thuật tái tạo khớp vai</li>
           <li>Phẫu thuật bàn tay</li>
           <li>Nội soi vai, khuỷu</li>
           <li>Phẫu thuật chỉnh hình bàn tay</li>
           <li>Phẫu thuật chấn thương</li>
        </ul>
        <p><strong>Các chấn thương do thể thao </strong></p>`,
            contentHtmlEn: `<h4>Associate Professor, Dr.Phil, Doctor Ngo Van Toan</h4>
        <ul>
           <li>Former Head of Orthopedic Surgery Department, Viet Duc Hospital</li>
           <li>Former Vice President of Orthopedic Trauma Institute, Viet Duc Hospital</li>
           <li>Leading expert in orthopedic trauma in Vietnam</li>
           <li>Received the title of People's Doctor</li>
           <li>Former General Secretary of Vietnam Orthopedic Association</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Deputy Director of Orthopedic Trauma Institute, Viet Duc Hospital (2010)</li>
           <li>Head of Orthopedic Surgery Department, Viet Duc Hospital (1998)</li>
           <li>Deputy Department of Trauma and Orthopedics I, Viet Duc Hospital (1996)</li>
           <li>Head of Foreign Affairs Department, 34th Corps - Capital Military Region (1979 - 1982)</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Graduated with Doctor of Medicine, Military Medical Academy (2004)</li>
           <li>Graduated from Level II Specialist Doctor, Hanoi Medical University (1993)</li>
           <li>Graduated as Doctor of Specialization I, Hanoi Medical University (1990)</li>
           <li>Study as a Resident in Orthopedic Trauma in the French Republic (1988 - 1990)</li>
           <li>Graduated from Hanoi Medical University in 1979</li>
           <li>Awarded by the state to study as Associate Professor</li>
        </ul>
        <h6>Domestic or foreign certificate</h6>
        <ul>
           <li>Certificate of Endoscopy, Arthroscopy, USA (2011, 2013)</li>
           <li>Certificate of Endoscopy and Arthroscopy, French Republic (2005)</li>
           <li>Certificate in Hand Surgery, Australia (1997)</li>
           <li>Certificate of Hand Surgery, French Republic (1995)</li>
        </ul>
        <h6>Books and research works, scientific reports</h6>
        <ul>
           <li>Writing a book: Orthopedic Trauma</li>
           <li>Orthopedic trauma lecture</li>
           <li>More than 60 scientific articles and research works</li>
           <li>Chairman of 2 ministerial-level scientific works</li>
           <li>Participating in a state-level scientific research project</li>
        </ul>
        <h6>Join Associations</h6>
        <ul>
           <li>Chairman of Sala Club (a gathering place of people who aspire to do humanitarian work in the medical field - public health in the area of Orthopedic Trauma)</li>
           <li>Vietnam Orthopedic Trauma Association</li>
           <li>Asia Pacific Orthopedic Society</li>
           <li>American Society of Ankle Surgeons</li>
           <li>French Hand Surgery Society</li>
           <li>Australian Society of Hand Surgeons</li>
        </ul>
        <h6>Participating in health topics on newspapers and television</h6>
        <ul>
           <li>O2TV</li>
           <li>Golden Age</li>
           <li>Osteoarthritis</li>
           <li>Traffic accident warning</li>
        </ul>
        <h6>Examination and treatment</h6>
        <p><strong>Hand and shoulder diseases:</strong></p>
        <ul>
           <li>Knee pain</li>
           <li>Finger arthritis</li>
           <li>Pain, swelling of the elbow</li>
           <li>Pain, swelling of shoulder joint</li>
           <li>Clear collarbone pain</li>
           <li>Shoulder pain, arm pain</li>
           <li>Swelling and pain in the wrist, effusion of the finger joints</li>
        </ul>
        <p><strong>Surgery, follow-up after surgery:</strong></p>
        <ul>
           <li>Hand and finger joint surgery</li>
           <li>Shoulder Reconstructive Surgery</li>
           <li>Hand surgery</li>
           <li>Shoulder and elbow endoscopy</li>
           <li>Hand orthopedic surgery</li>
           <li>Trauma surgery</li>
        </ul>
        <p><strong>Sports Injuries </strong></p>`,
            descriptionVi: `Nguyên Trưởng khoa Phẫu thuật chấn thương chỉnh hình - Bệnh viện Việt Đức
Nguyên Viện phó Viện Chấn thương chỉnh hình - Bệnh viện Việt Đức
Chuyên gia đầu ngành về chấn thương chỉnh hình tại Việt Nam
Được nhận Danh hiệu Thầy thuốc nhân dân`,
            descriptionEn: `Former Head of Orthopedic Surgery Department - Viet Duc Hospital
Former Vice President of Orthopedic Trauma Institute - Viet Duc Hospital
Leading expert in orthopedic trauma in Vietnam
Received the title of People's Doctor`,
            contentMarkDownVi: `#### Phó Giáo sư, Tiến sĩ, Bác sĩ Ngô Văn Toàn

*   Nguyên Trưởng khoa Phẫu thuật chấn thương chỉnh hình, Bệnh viện Việt Đức
*   Nguyên Viện phó Viện Chấn thương chỉnh hình, Bệnh viện Việt Đức
*   Chuyên gia đầu ngành về chấn thương chỉnh hình tại Việt Nam
*   Được nhận Danh hiệu Thầy thuốc Nhân dân
*   Nguyên Tổng thư kí Hội Chấn thương chỉnh hình Việt Nam

###### Quá trình công tác

*   Viện phó Viện Chấn thương chỉnh hình, Bệnh viện Việt Đức (2010)
*   Trưởng khoa Phẫu thuật Chấn thương chỉnh hình, Bệnh viện Việt Đức (1998)
*   Phó khoa Chấn thương Chỉnh hình I, Bệnh viện Việt Đức (1996)
*   Trưởng ban ngoại, Quân đoàn 34 - Quân khu Thủ Đô (1979 - 1982)

###### Quá trình đào tạo

*   Tốt nghiệp Tiến sĩ Y khoa, Học viện Quân y (2004)
*   Tốt nghiệp Bác sĩ Chuyên khoa cấp II, Đại học Y Hà Nội (1993)
*   Tốt nghiệp Bác sĩ Chuyên khoa I, Đại học Y Hà Nội (1990)
*   Học Bác sĩ Nội trú về Chấn thương Chỉnh hình tại Cộng hòa Pháp (1988 - 1990)
*   Tốt nghiệp Đại học Y Hà Nội năm 1979
*   Được nhà nước phong tặng học Hàm Phó Giáo sư

###### Chứng chỉ trong nước hoặc nước ngoài

*   Chứng chỉ Nội soi, tạo hình khớp, Hoa Kỳ (2011, 2013)
*   Chứng chỉ Nội soi và tạo hình khớp, Cộng hòa Pháp (2005)
*   Chứng chỉ chuyên phẫu thuật bàn tay, Úc (1997)
*   Chứng chỉ Phẫu thuật bàn tay, Cộng hòa Pháp (1995)

###### Sách và các công trình nghiên cứu, báo cáo khoa học

*   Viết sách: Chấn thương chỉnh hình
*   Bài giảng chấn thương chỉnh hình
*   Hơn 60 bài báo và công trình nghiên cứu khoa học
*   Chủ nhiệm 2 công trình khoa học cấp Bộ
*   Tham gia 1 công trình nghiên cứu khoa học cấp nhà nước

###### Tham gia các Hiệp hội

*   Chủ tịch Câu lạc bộ Sala (nơi hội tụ của những người mong muốn làm nhân đạo trong lĩnh vực y tế - sức khỏe cộng đồng phạm vi Chấn thương chỉnh hình)
*   Hội Chấn thương chỉnh hình Việt Nam
*   Hội Chấn thương chỉnh hình Châu Á - Thái Bình Dương
*   Hội Phẫu thuật Cổ bàn chân Hoa Kỳ
*   Hội Phẫu thuật bàn tay Pháp
*   Hội Phẫu thuật bàn tay Úc

###### Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình

*   Truyền hình O2TV
*   Tuổi vàng
*   Bệnh lý xương khớp
*   Cảnh báo tai nạn giao thông

###### Khám và điều trị

**Các bệnh lý vùng tay - vai:**

*   Đau khớp ngón tay
*   Viêm khớp ngón tay
*   Đau, sưng khuỷu tay
*   Đau, sưng khớp vai
*   Đau xương quai xanh
*   Đau bả vai, đau cánh tay
*   Sưng đau cổ tay, tràn dịch khớp ngón tay

**Phẫu thuật, tái khám sau phẫu thuật:**

*   Phẫu thuật khớp tay, khớp ngón tay
*   Phẫu thuật tái tạo khớp vai
*   Phẫu thuật bàn tay
*   Nội soi vai, khuỷu
*   Phẫu thuật chỉnh hình bàn tay
*   Phẫu thuật chấn thương

**Các chấn thương do thể thao**`,
            contentMarkDownEn: `#### Associate Professor, Dr.Phil, Doctor Ngo Van Toan

*   Former Head of Orthopedic Surgery Department, Viet Duc Hospital
*   Former Vice President of Orthopedic Trauma Institute, Viet Duc Hospital
*   Leading expert in orthopedic trauma in Vietnam
*   Received the title of People's Doctor
*   Former General Secretary of Vietnam Orthopedic Association

###### Working history

*   Deputy Director of Orthopedic Trauma Institute, Viet Duc Hospital (2010)
*   Head of Orthopedic Surgery Department, Viet Duc Hospital (1998)
*   Deputy Department of Trauma and Orthopedics I, Viet Duc Hospital (1996)
*   Head of Foreign Affairs Department, 34th Corps - Capital Military Region (1979 - 1982)

###### Training process

*   Graduated with Doctor of Medicine, Military Medical Academy (2004)
*   Graduated from Level II Specialist Doctor, Hanoi Medical University (1993)
*   Graduated as Doctor of Specialization I, Hanoi Medical University (1990)
*   Study as a Resident in Orthopedic Trauma in the French Republic (1988 - 1990)
*   Graduated from Hanoi Medical University in 1979
*   Awarded by the state to study as Associate Professor

###### Domestic or foreign certificate

*   Certificate of Endoscopy, Arthroscopy, USA (2011, 2013)
*   Certificate of Endoscopy and Arthroscopy, French Republic (2005)
*   Certificate in Hand Surgery, Australia (1997)
*   Certificate of Hand Surgery, French Republic (1995)

###### Books and research works, scientific reports

*   Writing a book: Orthopedic Trauma
*   Orthopedic trauma lecture
*   More than 60 scientific articles and research works
*   Chairman of 2 ministerial-level scientific works
*   Participating in a state-level scientific research project

###### Join Associations

*   Chairman of Sala Club (a gathering place of people who aspire to do humanitarian work in the medical field - public health in the area of Orthopedic Trauma)
*   Vietnam Orthopedic Trauma Association
*   Asia Pacific Orthopedic Society
*   American Society of Ankle Surgeons
*   French Hand Surgery Society
*   Australian Society of Hand Surgeons

###### Participating in health topics on newspapers and television

*   O2TV
*   Golden Age
*   Osteoarthritis
*   Traffic accident warning

###### Examination and treatment

**Hand and shoulder diseases:**

*   Knee pain
*   Finger arthritis
*   Pain, swelling of the elbow
*   Pain, swelling of shoulder joint
*   Clear collarbone pain
*   Shoulder pain, arm pain
*   Swelling and pain in the wrist, effusion of the finger joints

**Surgery, follow-up after surgery:**

*   Hand and finger joint surgery
*   Shoulder Reconstructive Surgery
*   Hand surgery
*   Shoulder and elbow endoscopy
*   Hand orthopedic surgery
*   Trauma surgery

**Sports Injuries**`,
            doctorId: 15,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Tiến sĩ, Bác sĩ Nguyễn Thành Tuấn</h4>
        <ul>
           <li>Hơn 10 năm kinh nghiệm khám và điều trị Tai - Mũi - Họng</li>
           <li>Đang công tác tại Bệnh viện Tai - Mũi - Họng TP. Hồ Chí Minh</li>
           <li>Từng học tập và tu nghiệp tại Hoa Kì</li>
           <li>Bác sĩ khám mọi độ tuổi</li>
        </ul>
        <h6>Khám và điều trị </h6>
        <ul>
           <li>
              <p><strong>Các lĩnh vực điều trị chuyên sâu:</strong></p>
              <ul>
                 <li>Phẫu thuật nội soi mũi xoang</li>
                 <li>Phẫu thuật vi phẫu thanh quản</li>
                 <li>Phẫu thuật Đầu cổ</li>
                 <li>Thanh học</li>
              </ul>
           </li>
           <li>
           <p><strong>Khám và điều trị chuyên khoa Tai - Mũi - Họng:</strong></p>
              <ul>
                 <li>Viêm mũi họng cấp - mãn</li>
                 <li>Điều trị tình trạng ho lâu ngày nhưng không khỏi (ho mãn tính – hậu Covid)</li>
                 <li>Viêm xoang cấp tính</li>
                 <li>Viêm xoang mãn tính</li>
                 <li>Bệnh lý polyp mũi xoang</li>
                 <li>Phẫu thuật chỉnh vẹo vách ngăn</li>
                 <li>Điều trị khối u (lành và ác tính) ở vùng mũi xoang</li>
                 <li>Viêm amidan</li>
                 <li>Viêm họng cấp – mạn</li>
                 <li>Polyp dây thanh quản</li>
                 <li>Hạt ở dây thanh quản</li>
                 <li>Liệt dây thanh quản</li>
                 <li>U nhú ở thanh quản</li>
                 <li>Viêm thanh quản</li>
                 <li>Chữa trị chứng khó nuốt</li>
                 <li>Bệnh khô miệng</li>
                 <li>Bệnh viêm tuyến nước bọt</li>
                 <li>Bệnh viêm tai ngoài</li>
                 <li>Viêm tai giữa cấp tính</li>
                 <li>Viêm tai mãn tính</li>
                 <li>Viêm xương chủm</li>
                 <li>Viêm tai xương chũm</li>
              </ul>
           </li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Khoa Mũi Xoang, Bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (10/2020 - Nay)</li>
           <li>Khoa Phẫu thuật Đầu Cổ, Bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (11/2018 - 10/2020)</li>
           <li>Khoa Nhi –Tổng Hợp, Bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (09/2014 - 10/2018)</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Tiến sĩ chuyên ngành Tai Mũi Họng - Đại học Y Dược TP. Hồ Chí Minh (2017 - 2022)</li>
           <li>Tu nghiệp về chuyên ngành Tai Mũi Họng và Phẫu thuật đầu cổ - Bệnh viện Mayo Clinic, Arizona, Hoa Kỳ (06/2016 - 12/2016)</li>
           <li>Thạc sĩ chuyên ngành Tai Mũi Họng - Đại học Y Dược TP. Hồ Chí Minh (2012 - 2014)</li>
           <li>Bác sĩ đa khoa hệ chính quy - Đại học Y Phạm Ngọc Thạch (2005 - 2011)</li>
        </ul>
        <h6>Chứng chỉ trong nước hoặc nước ngoài</h6>
        <ul>
           <li>Chứng nhận Tu nghiệp về chuyên ngành Tai Mũi Họng và Phẫu thuật đầu cổ - Bệnh viện Mayo Clinic, Arizona, Hoa Kỳ (06/2016 - 12/2016)</li>
           <li>Chứng chỉ Nội Soi Tai Mũi Họng - Khoa Y – Đại Học Quốc Gia TP. Hồ Chí Minh (2017)</li>
           <li>Chứng chỉ Nghiệp vụ sư phạm - Đại Học Sư Phạm TP. Hồ Chí Minh (2016)</li>
           <li>Chứng chỉ Hành nghề chuyên ngành Tai Mũi Họng - Sở Y Tế TP. Hồ Chí Minh (2015)</li>
        </ul>
        <h6>Sách và các công trình nghiên cứu, báo cáo khoa học </h6>
        <ul>
           <li>Nguyen Thanh Tuan, Ngoc Tai Tran, Truc Dung Nguyen, Thi Hung Nguyen (2021),“Botulinum toxin treatment for adductor spasmodic dysphonia with EMG and endoscopic guidance”, Neurology Asia 2021, vol 26(4),715 – 719 (2021)</li>
           <li>Giáo trình Định hướng Tai mũi họng được đơn Khoa Y – Đại học quốc gia TP. Hồ Chí Minh (2020)</li>
           <li>Đánh giá cải thiện chất lượng giọng của bệnh nhân rối loạn phát âm co thắt thể khép điều trị bằng botulinum toxin A (2020)</li>
           <li>Khảo sát đặc điểm lâm sàng, cận lâm sàng và một số yếu tố liên quan trong chẩn đoán bệnh lý rối loạn phát âm co thắt thể khép (2020)</li>
           <li>Vai trò của sinh thiết tức thì trong phẫu thuật laser vi phẫu qua đường miệng trong điều trị ung thư thanh quản tầng thanh môn giai đoạn sớm tại bệnh viện Tai Mũi Họng Tp. Hồ Chí Minh (2020)</li>
           <li>Kết quả điều trị ung thư thanh quản tầng thanh môn giai đoạn sớm bằng vi phẫu laser CO2 tại bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (2020)</li>
           <li>Tuan Nguyen Thanh, Thuy Tran Phan Chung (2019),"Early Outcomes of Transoral Laser Microsurgery for T1-T2 Oropharyngeal Cancer", Asian Journal of Pharmaceutical Research and Health Care, tập 10 (4),104-108 (2019)</li>
           <li>Transoral laser microsurgery in early-stage laryngeal and oropharyngeal cancer/ The 18th ASEAN ORL-HNS Congress 2019 (2019)</li>
           <li>Kết quả bước đầu ứng dụng phẫu thuật laser vi phẫu qua đường miệng trong điều trị ung thư họng miệng giai đoạn sớm (2019)</li>
           <li>Rối loạn phát âm co thắt: đặc điểm lâm sàng và hiệu quả điều trị botulinum toxin a của 24 trường hợp (2019)</li>
           <li>Đánh giá cải thiện chất lượng sống của bệnh nhân rối loạn phát âm co thắt thể khép điều trị bằng abobotulinum toxin (2019)</li>
           <li>Kết quả bước đầu thực hiện kĩ thuật tiêm Botulinum toxin điều trị rối loạn phát âm co thắt thể khép (2018)</li>
           <li>Kết quả bước đầu điều trị ung thư thanh quản tầng thanh môn giai đoạn sớm bằng vi phẫu laser (2018)</li>
           <li>Transoral laser microsurgery for early glottic cancer/ The 4th international conference (2018) Innovations In Cancer Research And Regenerative Medicine (2017)</li>
           <li>Phẫu thuật laser qua đường miệng trong điều trị ung thư thanh quản tầng thanh môn giai đoạn sớm tại Bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (2017)</li>
           <li>Khảo sát các yếu tố nguy cơ ảnh hưởng đến tình trạng lão thính (2015)</li>
        </ul>
        <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
        <ul>
           <li>Hội viên Hội Tai Mũi Họng Việt Nam (2017 - Nay)</li>
           <li>Hội viên Hội Tai Mũi Họng TP. Hồ Chí Minh và các tỉnh phía Nam (2015 - Nay)</li>
        </ul>`,
            contentHtmlEn: `<h4>Dr.Phil, Doctor Nguyen Thanh Tuan</h4>
        <ul>
           <li>Over 10 years of experience in examination and treatment of Ear - Nose - Throat</li>
           <li>Working at City Ear, Nose and Throat Hospital. Ho Chi Minh</li>
           <li>Educated and practiced in the United States</li>
           <li>Doctors of all ages</li>
        </ul>
        <h6>Examination and treatment</h6>
        <ul>
           <li>
              <p><strong>Areas of intensive treatment:</strong></p>
              <ul>
                 <li>Arthroscopic sinus surgery </li>
                 <li>Laryngeal microsurgery </li>
                 <li>Head and Neck Surgery</li>
                 <li>Study bar</li>
              </ul>
           </li>
           <li>
              <p><strong>Special examination and treatment of Ear - Nose - Throat:</strong></p>
              <ul>
                 <li>Acute - chronic nasopharyngitis</li>
                 <li>Treatment of a long-term cough that does not go away (chronic cough – post-Covid)</li>
                 <li>Acute sinusitis</li>
                 <li>Chronic sinusitis</li>
                 <li>Nasal polyposis</li>
                 <li>Septal deformity surgery</li>
                 <li>Treatment of tumors (benign and malignant) in the nasal cavity</li>
                 <li>Tonsillitis</li>
                 <li>Acute - chronic pharyngitis</li>
                 <li>Vocal cord polyp</li>
                 <li>Particles in vocal cords</li>
                 <li>Paralysis of vocal cords</li>
                 <li>Laryngeal papilloma</li>
                 <li>Laryngitis</li>
                 <li>Treatment of dysphagia</li>
                 <li>Dry mouth disease</li>
                 <li>Inflammation of the salivary glands</li>
                 <li>Outer ear disease</li>
                 <li>Acute otitis media</li>
                 <li>Chronic ear infection</li>
                 <li>Osteoarthritis</li>
                 <li>Mastoid otitis</li>
              </ul>
           </li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Department of Nose Sinus, Ear, Nose Throat Hospital, City. Ho Chi Minh (October 2020 - Now)</li>
           <li>Head and Neck Surgery Department, City Otolaryngology Hospital. Ho Chi Minh (November 2018 - October 2020)</li>
           <li>Pediatrics – General Department, Ho Chi Minh City Otolaryngology Hospital. Ho Chi Minh (September 2014 - October 2018)</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Doctor of Otolaryngology - Ho Chi Minh City University of Medicine and Pharmacy. Ho Chi Minh (2017 - 2022)</li>
           <li>Training in Otorhinolaryngology and Head and Neck Surgery - Mayo Clinic, Arizona, USA (06/2016 - 12/2016)</li>
           <li>Master of Otolaryngology - Ho Chi Minh City University of Medicine and Pharmacy. Ho Chi Minh (2012 - 2014)</li>
           <li>Regular General Practitioner - Pham Ngoc Thach Medical University (2005 - 2011)</li>
        </ul>
        <h6>Domestic or foreign certificate</h6>
        <ul>
           <li>Training Certificate in Otorhinolaryngology and Head and Neck Surgery - Mayo Clinic, Arizona, USA (06/2016 - 12/2016)</li>
           <li>Certificate of Otolaryngology Endoscopy - Faculty of Medicine – National University of Ho Chi Minh City. Ho Chi Minh (2017)</li>
           <li>Certificate of Pedagogy - Teaching University of Ho Chi Minh City. Ho Chi Minh (2016)</li>
           <li>Certificate of Professional Practice in Ear, Nose and Throat - Department of Health of Ho Chi Minh City. Ho Chi Minh (2015)</li>
        </ul>
         <h6>Books and research works, scientific reports </h6>
        <ul>
           <li>Nguyen Thanh Tuan, Ngoc Tai Tran, Truc Dung Nguyen, Thi Hung Nguyen (2021),“Botulinum toxin treatment for adductor spasmodic dysphonia with EMG and endoscopic guidance”, Neurology Asia 2021, vol 26(4),715 – 719 (2021)</li>
           <li>The Otolaryngology Orientation Textbook is approved by the Faculty of Medicine - Vietnam National University, Ho Chi Minh City. Ho Chi Minh (2020)</li>
           <li>Evaluating the improvement of voice quality of patients with constrictive speech disorder treated with botulinum toxin A (2020)</li>
           <li>Study on clinical, subclinical characteristics and some related factors in the diagnosis of constrictive constrictive speech disorder (2020)</li>
           <li>The role of immediate biopsies in oral microsurgery laser surgery in the treatment of early stage laryngeal cancer at the Ho Chi Minh City Otolaryngology Hospital. Ho Chi Minh (2020)</li>
           <li>Results of early stage laryngeal cancer treatment with CO2 laser microsurgery at ENT Hospital in Ho Chi Minh City. Ho Chi Minh (2020)</li>
           <li>Tuan Nguyen Thanh, Thuy Tran Phan Chung (2019),"Early Outcomes of Transoral Laser Microsurgery for T1-T2 Oropharyngeal Cancer", Asian Journal of Pharmaceutical Research and Health Care, vol. 10 (4),104-108 (2019) )</li>
           <li>Transoral laser microsurgery in early-stage laryngeal and oropharyngeal cancer/ The 18th ASEAN ORL-HNS Congress 2019 (2019)</li>
           <li>Initial results of the application of oral microsurgery laser surgery in the treatment of early oropharyngeal cancer (2019)</li>
           <li>Spasmodic dysphonia: clinical characteristics and effectiveness of botulinum toxin a treatment in 24 cases (2019)</li>
           <li>Evaluating the improvement in quality of life of patients with avotomy dysphonia treated with abobotulinum toxin (2019)</li>
           <li>Initial results of Botulinum toxin injection technique for the treatment of spasmodic dysphonia (2018)</li>
           <li>Initial results of treatment of early stage laryngeal cancer with laser microsurgery (2018)</li>
           <li>Transoral laser microsurgery for early glottic cancer/ The 4th international conference (2018) Innovations In Cancer Research And Regenerative Medicine (2017)</li>
           <li>Oral laser surgery in the treatment of early stage laryngeal cancer at the Ho Chi Minh City Otolaryngology Hospital. Ho Chi Minh (2017)</li>
           <li>Survey on risk factors affecting senility (2015)</li>
        </ul>
        <h6>Members of scientific associations and professional organizations</h6>
        <ul>
           <li>Member of Vietnam Otolaryngology Association (2017 - Now)</li>
           <li>Member of Ho Chi Minh City Ear, Nose and Throat Association. Ho Chi Minh and Southern provinces (2015 - Now)</li>
        </ul>`,
            descriptionVi: `Hơn 10 năm kinh nghiệm khám và điều trị Tai - Mũi - Họng
Đang công tác tại Bệnh viện Tai - Mũi - Họng TP. Hồ Chí Minh
Từng học tập và tu nghiệp tại Hoa Kì`,
            descriptionEn: `More than 10 years of experience in examination and treatment of Ear - Nose - Throat
Working at Ear - Nose - Throat Hospital in Ho Chi Minh City. Ho Chi Minh
Studied and practiced in the United States`,
            contentMarkDownVi: `#### Tiến sĩ, Bác sĩ Nguyễn Thành Tuấn

*   Hơn 10 năm kinh nghiệm khám và điều trị Tai - Mũi - Họng
*   Đang công tác tại Bệnh viện Tai - Mũi - Họng TP. Hồ Chí Minh
*   Từng học tập và tu nghiệp tại Hoa Kì
*   Bác sĩ khám mọi độ tuổi

###### Khám và điều trị

*   **Các lĩnh vực điều trị chuyên sâu:**
      
      *   Phẫu thuật nội soi mũi xoang
      *   Phẫu thuật vi phẫu thanh quản
      *   Phẫu thuật Đầu cổ
      *   Thanh học
*   **Khám và điều trị chuyên khoa Tai - Mũi - Họng:**
      
      *   Viêm mũi họng cấp - mãn
      *   Điều trị tình trạng ho lâu ngày nhưng không khỏi (ho mãn tính – hậu Covid)
      *   Viêm xoang cấp tính
      *   Viêm xoang mãn tính
      *   Bệnh lý polyp mũi xoang
      *   Phẫu thuật chỉnh vẹo vách ngăn
      *   Điều trị khối u (lành và ác tính) ở vùng mũi xoang
      *   Viêm amidan
      *   Viêm họng cấp – mạn
      *   Polyp dây thanh quản
      *   Hạt ở dây thanh quản
      *   Liệt dây thanh quản
      *   U nhú ở thanh quản
      *   Viêm thanh quản
      *   Chữa trị chứng khó nuốt
      *   Bệnh khô miệng
      *   Bệnh viêm tuyến nước bọt
      *   Bệnh viêm tai ngoài
      *   Viêm tai giữa cấp tính
      *   Viêm tai mãn tính
      *   Viêm xương chủm
      *   Viêm tai xương chũm

###### Quá trình công tác

*   Khoa Mũi Xoang, Bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (10/2020 - Nay)
*   Khoa Phẫu thuật Đầu Cổ, Bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (11/2018 - 10/2020)
*   Khoa Nhi –Tổng Hợp, Bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (09/2014 - 10/2018)

###### Quá trình đào tạo

*   Tiến sĩ chuyên ngành Tai Mũi Họng - Đại học Y Dược TP. Hồ Chí Minh (2017 - 2022)
*   Tu nghiệp về chuyên ngành Tai Mũi Họng và Phẫu thuật đầu cổ - Bệnh viện Mayo Clinic, Arizona, Hoa Kỳ (06/2016 - 12/2016)
*   Thạc sĩ chuyên ngành Tai Mũi Họng - Đại học Y Dược TP. Hồ Chí Minh (2012 - 2014)
*   Bác sĩ đa khoa hệ chính quy - Đại học Y Phạm Ngọc Thạch (2005 - 2011)

###### Chứng chỉ trong nước hoặc nước ngoài

*   Chứng nhận Tu nghiệp về chuyên ngành Tai Mũi Họng và Phẫu thuật đầu cổ - Bệnh viện Mayo Clinic, Arizona, Hoa Kỳ (06/2016 - 12/2016)
*   Chứng chỉ Nội Soi Tai Mũi Họng - Khoa Y – Đại Học Quốc Gia TP. Hồ Chí Minh (2017)
*   Chứng chỉ Nghiệp vụ sư phạm - Đại Học Sư Phạm TP. Hồ Chí Minh (2016)
*   Chứng chỉ Hành nghề chuyên ngành Tai Mũi Họng - Sở Y Tế TP. Hồ Chí Minh (2015)

###### Sách và các công trình nghiên cứu, báo cáo khoa học

*   Nguyen Thanh Tuan, Ngoc Tai Tran, Truc Dung Nguyen, Thi Hung Nguyen (2021),“Botulinum toxin treatment for adductor spasmodic dysphonia with EMG and endoscopic guidance”, Neurology Asia 2021, vol 26(4),715 – 719 (2021)
*   Giáo trình Định hướng Tai mũi họng được đơn Khoa Y – Đại học quốc gia TP. Hồ Chí Minh (2020)
*   Đánh giá cải thiện chất lượng giọng của bệnh nhân rối loạn phát âm co thắt thể khép điều trị bằng botulinum toxin A (2020)
*   Khảo sát đặc điểm lâm sàng, cận lâm sàng và một số yếu tố liên quan trong chẩn đoán bệnh lý rối loạn phát âm co thắt thể khép (2020)
*   Vai trò của sinh thiết tức thì trong phẫu thuật laser vi phẫu qua đường miệng trong điều trị ung thư thanh quản tầng thanh môn giai đoạn sớm tại bệnh viện Tai Mũi Họng Tp. Hồ Chí Minh (2020)
*   Kết quả điều trị ung thư thanh quản tầng thanh môn giai đoạn sớm bằng vi phẫu laser CO2 tại bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (2020)
*   Tuan Nguyen Thanh, Thuy Tran Phan Chung (2019),"Early Outcomes of Transoral Laser Microsurgery for T1-T2 Oropharyngeal Cancer", Asian Journal of Pharmaceutical Research and Health Care, tập 10 (4),104-108 (2019)
*   Transoral laser microsurgery in early-stage laryngeal and oropharyngeal cancer/ The 18th ASEAN ORL-HNS Congress 2019 (2019)
*   Kết quả bước đầu ứng dụng phẫu thuật laser vi phẫu qua đường miệng trong điều trị ung thư họng miệng giai đoạn sớm (2019)
*   Rối loạn phát âm co thắt: đặc điểm lâm sàng và hiệu quả điều trị botulinum toxin a của 24 trường hợp (2019)
*   Đánh giá cải thiện chất lượng sống của bệnh nhân rối loạn phát âm co thắt thể khép điều trị bằng abobotulinum toxin (2019)
*   Kết quả bước đầu thực hiện kĩ thuật tiêm Botulinum toxin điều trị rối loạn phát âm co thắt thể khép (2018)
*   Kết quả bước đầu điều trị ung thư thanh quản tầng thanh môn giai đoạn sớm bằng vi phẫu laser (2018)
*   Transoral laser microsurgery for early glottic cancer/ The 4th international conference (2018) Innovations In Cancer Research And Regenerative Medicine (2017)
*   Phẫu thuật laser qua đường miệng trong điều trị ung thư thanh quản tầng thanh môn giai đoạn sớm tại Bệnh viện Tai Mũi Họng TP. Hồ Chí Minh (2017)
*   Khảo sát các yếu tố nguy cơ ảnh hưởng đến tình trạng lão thính (2015)

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Hội viên Hội Tai Mũi Họng Việt Nam (2017 - Nay)
*   Hội viên Hội Tai Mũi Họng TP. Hồ Chí Minh và các tỉnh phía Nam (2015 - Nay)`,
            contentMarkDownEn: `#### Dr.Phil, Doctor Nguyen Thanh Tuan

*   Over 10 years of experience in examination and treatment of Ear - Nose - Throat
*   Working at City Ear, Nose and Throat Hospital. Ho Chi Minh
*   Educated and practiced in the United States
*   Doctors of all ages

###### Examination and treatment

*   **Areas of intensive treatment:**
      
      *   Arthroscopic sinus surgery
      *   Laryngeal microsurgery
      *   Head and Neck Surgery
      *   Study bar
*   **Special examination and treatment of Ear - Nose - Throat:**
      
      *   Acute - chronic nasopharyngitis
      *   Treatment of a long-term cough that does not go away (chronic cough – post-Covid)
      *   Acute sinusitis
      *   Chronic sinusitis
      *   Nasal polyposis
      *   Septal deformity surgery
      *   Treatment of tumors (benign and malignant) in the nasal cavity
      *   Tonsillitis
      *   Acute - chronic pharyngitis
      *   Vocal cord polyp
      *   Particles in vocal cords
      *   Paralysis of vocal cords
      *   Laryngeal papilloma
      *   Laryngitis
      *   Treatment of dysphagia
      *   Dry mouth disease
      *   Inflammation of the salivary glands
      *   Outer ear disease
      *   Acute otitis media
      *   Chronic ear infection
      *   Osteoarthritis
      *   Mastoid otitis

###### Working history

*   Department of Nose Sinus, Ear, Nose Throat Hospital, City. Ho Chi Minh (October 2020 - Now)
*   Head and Neck Surgery Department, City Otolaryngology Hospital. Ho Chi Minh (November 2018 - October 2020)
*   Pediatrics – General Department, Ho Chi Minh City Otolaryngology Hospital. Ho Chi Minh (September 2014 - October 2018)

###### Training process

*   Doctor of Otolaryngology - Ho Chi Minh City University of Medicine and Pharmacy. Ho Chi Minh (2017 - 2022)
*   Training in Otorhinolaryngology and Head and Neck Surgery - Mayo Clinic, Arizona, USA (06/2016 - 12/2016)
*   Master of Otolaryngology - Ho Chi Minh City University of Medicine and Pharmacy. Ho Chi Minh (2012 - 2014)
*   Regular General Practitioner - Pham Ngoc Thach Medical University (2005 - 2011)

###### Domestic or foreign certificate

*   Training Certificate in Otorhinolaryngology and Head and Neck Surgery - Mayo Clinic, Arizona, USA (06/2016 - 12/2016)
*   Certificate of Otolaryngology Endoscopy - Faculty of Medicine – National University of Ho Chi Minh City. Ho Chi Minh (2017)
*   Certificate of Pedagogy - Teaching University of Ho Chi Minh City. Ho Chi Minh (2016)
*   Certificate of Professional Practice in Ear, Nose and Throat - Department of Health of Ho Chi Minh City. Ho Chi Minh (2015)

###### Books and research works, scientific reports

*   Nguyen Thanh Tuan, Ngoc Tai Tran, Truc Dung Nguyen, Thi Hung Nguyen (2021),“Botulinum toxin treatment for adductor spasmodic dysphonia with EMG and endoscopic guidance”, Neurology Asia 2021, vol 26(4),715 – 719 (2021)
*   The Otolaryngology Orientation Textbook is approved by the Faculty of Medicine - Vietnam National University, Ho Chi Minh City. Ho Chi Minh (2020)
*   Evaluating the improvement of voice quality of patients with constrictive speech disorder treated with botulinum toxin A (2020)
*   Study on clinical, subclinical characteristics and some related factors in the diagnosis of constrictive constrictive speech disorder (2020)
*   The role of immediate biopsies in oral microsurgery laser surgery in the treatment of early stage laryngeal cancer at the Ho Chi Minh City Otolaryngology Hospital. Ho Chi Minh (2020)
*   Results of early stage laryngeal cancer treatment with CO2 laser microsurgery at ENT Hospital in Ho Chi Minh City. Ho Chi Minh (2020)
*   Tuan Nguyen Thanh, Thuy Tran Phan Chung (2019),"Early Outcomes of Transoral Laser Microsurgery for T1-T2 Oropharyngeal Cancer", Asian Journal of Pharmaceutical Research and Health Care, vol. 10 (4),104-108 (2019) )
*   Transoral laser microsurgery in early-stage laryngeal and oropharyngeal cancer/ The 18th ASEAN ORL-HNS Congress 2019 (2019)
*   Initial results of the application of oral microsurgery laser surgery in the treatment of early oropharyngeal cancer (2019)
*   Spasmodic dysphonia: clinical characteristics and effectiveness of botulinum toxin a treatment in 24 cases (2019)
*   Evaluating the improvement in quality of life of patients with avotomy dysphonia treated with abobotulinum toxin (2019)
*   Initial results of Botulinum toxin injection technique for the treatment of spasmodic dysphonia (2018)
*   Initial results of treatment of early stage laryngeal cancer with laser microsurgery (2018)
*   Transoral laser microsurgery for early glottic cancer/ The 4th international conference (2018) Innovations In Cancer Research And Regenerative Medicine (2017)
*   Oral laser surgery in the treatment of early stage laryngeal cancer at the Ho Chi Minh City Otolaryngology Hospital. Ho Chi Minh (2017)
*   Survey on risk factors affecting senility (2015)

###### Members of scientific associations and professional organizations

*   Member of Vietnam Otolaryngology Association (2017 - Now)
*   Member of Ho Chi Minh City Ear, Nose and Throat Association. Ho Chi Minh and Southern provinces (2015 - Now)`,
            doctorId: 16,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Tiến sĩ, Bác sĩ Đào Đình Thi</h4>
        <ul>
           <li>Trưởng khoa Nội soi - Bệnh viện Tai Mũi Họng Trung Ương (2018 - nay)</li>
           <li>Giảng dạy tại Bộ môn Tai Mũi Họng, Khoa Y, trường Đại học Quốc Gia Hà Nội (2018 - nay)</li>
        </ul>
        <h6>Khám &amp; điều trị</h6>
        <ul>
           <li>Khám chuyên khoa Tai Mũi Họng</li>
           <li>Nội soi Tai Mũi Họng</li>
           <li>Chuyên khám và điều trị các bệnh về Tai Mũi Họng cả người lớn và trẻ em</li>
        </ul>
        <p><strong>Các bệnh về tai</strong></p>
        <ul>
           <li>Ù tai, nghe kém, điếc đột ngột</li>
           <li>Chẩy mủ tai, viêm tai giữa cấp, mạn</li>
           <li>Vá màng nhĩ nội soi</li>
           <li>Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài</li>
        </ul>
        <p><strong>Các bệnh mũi xoang</strong></p>
        <ul>
           <li>Viêm mũi xoang dị ứng, viêm mũi vận mạch</li>
           <li>Viêm mũi ngạt tắc mũi mạn tính</li>
           <li>Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang</li>
           <li>Nấm mũi xoang</li>
           <li>Đau đầu mạn tính do mũi xoang…</li>
        </ul>
        <p><strong>Các bệnh về họng thanh quản</strong></p>
        <ul>
           <li>Ở trẻ em viêm VA, viêm mũi họng mạn tính. Đặc biệt những biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….)  nạo VA</li>
           <li>Viêm amiđan  cấp, mạn</li>
        </ul>
        <p><strong>Khám nội soi Tai mũi họng</strong></p>
        <p>Bằng khám nội soi, bác sĩ có thể khám, quan sát sâu trong mũi, các khe mũi, hình ảnh rõ nét, trung thực, giúp cho chẩn đoán chính xác, phát hiện sớm các bệnh về tai mũi họng</p>`,
            contentHtmlEn: `<h4>Dr.Phil, Doctor Dao Dinh Thi</h4>
        <ul>
           <li>Head of Endoscopy Department - National Hospital of Otolaryngology (2018 - present)</li>
           <li>Teaching at Department of Otolaryngology, Faculty of Medicine, Hanoi National University (2018 - present)</li>
        </ul>
        <h6>Examination &amp; treatment</h6>
        <ul>
           <li>Ear, Nose and Throat Specialist Examination</li>
           <li>Endoscopy</li>
           <li>Specializing in examination and treatment of ENT diseases both adults and children</li>
        </ul>
        <p><strong>Ear diseases</strong></p>
        <ul>
           <li>Tinnitus, hearing loss, sudden deafness</li>
           <li>Purulent ear discharge, acute and chronic otitis media</li>
           <li>Endoscopic tympanic membrane patch</li>
           <li>Early detection and good treatment of otitis media, eardrum closed, no pus coming out</li>
        </ul>
        <p><strong>Nose and sinus diseases</strong></p>
        <ul>
           <li>Allergic Rhinitis, Vasomotor Rhinitis</li>
           <li>Chronic stuffy nose</li>
           <li>Long-term chronic polysinusitis, difficult to heal, nasal polyps</li>
           <li>Nose and sinus fungus</li>
           <li>Chronic sinus headache…</li>
        </ul>
        <p><strong>Diseases of the pharynx</strong></p>
        <ul>
           <li>In children with VA, chronic nasopharyngitis. Especially complications of VA (such as otitis media, acute otitis media, laryngotracheobronchitis, etc.)
           <li>Tonsillitis  acute, chronic</li>
        </ul>
        <p><strong>Endoscopy examination</strong></p>
        <p>By endoscopic examination, the doctor can examine and observe deeply in the nose, nasal passages, clear and honest images, helping to accurately diagnose and detect diseases of the ear, nose and throat. </p>`,
            descriptionVi: `Trưởng khoa Nội soi - Bệnh viện Tai Mũi Họng Trung Ương (2018 - nay)
Giảng dạy tại Bộ môn Tai Mũi Họng, Khoa Y, trường Đại học Quốc Gia Hà Nội (2018 - nay)`,
            descriptionEn: `Head of Endoscopy Department - National Hospital of Otolaryngology (2018 - present)
Lecturer at Department of Otolaryngology, Faculty of Medicine, Hanoi National University (2018 - present)`,
            contentMarkDownVi: `#### Tiến sĩ, Bác sĩ Đào Đình Thi

*   Trưởng khoa Nội soi - Bệnh viện Tai Mũi Họng Trung Ương (2018 - nay)
*   Giảng dạy tại Bộ môn Tai Mũi Họng, Khoa Y, trường Đại học Quốc Gia Hà Nội (2018 - nay)

###### Khám & điều trị

*   Khám chuyên khoa Tai Mũi Họng
*   Nội soi Tai Mũi Họng
*   Chuyên khám và điều trị các bệnh về Tai Mũi Họng cả người lớn và trẻ em

**Các bệnh về tai**

*   Ù tai, nghe kém, điếc đột ngột
*   Chẩy mủ tai, viêm tai giữa cấp, mạn
*   Vá màng nhĩ nội soi
*   Phát hiện sớm và điều trị tốt bệnh viêm tai giữa màng nhĩ đóng kín, không chẩy mủ ra ngoài

**Các bệnh mũi xoang**

*   Viêm mũi xoang dị ứng, viêm mũi vận mạch
*   Viêm mũi ngạt tắc mũi mạn tính
*   Viêm đa xoang mạn lâu ngày khó khỏi, polyp mũi xoang
*   Nấm mũi xoang
*   Đau đầu mạn tính do mũi xoang…

**Các bệnh về họng thanh quản**

*   Ở trẻ em viêm VA, viêm mũi họng mạn tính. Đặc biệt những biến chứng của viêm VA (như viêm tai thanh dịch, viêm tai giữa cấp, viêm thanh khí phế quản….) nạo VA
*   Viêm amiđan cấp, mạn

**Khám nội soi Tai mũi họng**

Bằng khám nội soi, bác sĩ có thể khám, quan sát sâu trong mũi, các khe mũi, hình ảnh rõ nét, trung thực, giúp cho chẩn đoán chính xác, phát hiện sớm các bệnh về tai mũi họng`,
            contentMarkDownEn: `#### Dr.Phil, Doctor Dao Dinh Thi

*   Head of Endoscopy Department - National Hospital of Otolaryngology (2018 - present)
*   Teaching at Department of Otolaryngology, Faculty of Medicine, Hanoi National University (2018 - present)

###### Examination & treatment

*   Ear, Nose and Throat Specialist Examination
*   Endoscopy
*   Specializing in examination and treatment of ENT diseases both adults and children

**Ear diseases**

*   Tinnitus, hearing loss, sudden deafness
*   Purulent ear discharge, acute and chronic otitis media
*   Endoscopic tympanic membrane patch
*   Early detection and good treatment of otitis media, eardrum closed, no pus coming out

**Nose and sinus diseases**

*   Allergic Rhinitis, Vasomotor Rhinitis
*   Chronic stuffy nose
*   Long-term chronic polysinusitis, difficult to heal, nasal polyps
*   Nose and sinus fungus
*   Chronic sinus headache…

**Diseases of the pharynx**

*   In children with VA, chronic nasopharyngitis. Especially complications of VA (such as otitis media, acute otitis media, laryngotracheobronchitis, etc.)
*   Tonsillitis acute, chronic

**Endoscopy examination**

By endoscopic examination, the doctor can examine and observe deeply in the nose, nasal passages, clear and honest images, helping to accurately diagnose and detect diseases of the ear, nose and throat.`,
            doctorId: 17,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Lê Thị Tuyết Lan</h4>
        <ul>
           <li>Nguyên Giám đốc Trung tâm Chăm sóc hô hấp – Bệnh viện Đại học Y dược TP.HCM</li>
           <li>Giám đốc Phòng Khám Bệnh Viện Đại Học Y Dược 1</li>
           <li>Đồng sáng lập Phòng khám Đa khoa CHAC</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <p><strong>Bác sĩ khám và điều trị chuyên sâu về các bệnh lý đường hô hấp như:</strong></p>
        <ul>
           <li>Hen suyễn, hen phế quản</li>
           <li>Bệnh phổi tắc nghẽn mạn tính (COPD)</li>
           <li>Thăm dò chứ năng hô hấp</li>
           <li>Viêm màng phổi (viêm phế mạc)</li>
           <li>Thuyên tắc phổi</li>
           <li>Các bệnh lý khác về hô hấp</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Bác sĩ khám và điều trị bệnh lý Hô hấp, Phòng khám Đa khoa CHAC (nay)</li>
           <li>Chuyên gia Hô hấp, Bệnh viện Đại học Y dược TP.HCM (2000 - nay)</li>
           <li>Giảng viên chính tại Khoa Y, Đại học Y Dược TP. HCM</li>
           <li>Giám đốc Phòng Khám Bệnh Viện Đại Học Y Dược 1</li>
           <li>Nguyên Trưởng Khoa Thăm dò chức năng – Bệnh viện ĐHYD TP.HCM</li>
           <li>Nguyên Giám đốc Trung tâm Chăm sóc hô hấp – Bệnh viện Đại học Y dược TP.HCM</li>
           <li>Ủy viên Ban Chấp hành Hội Hô hấp Việt Nam</li>
           <li>Chủ tịch Hội Hen - Dị ứng - Miễn dịch lâm sàng TP.HCM</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Học Nghiên cứu sinh tại Liên Xô cũ (1986 - 1990)</li>
           <li>Tốt nghiệp Tiến sĩ Y khoa (1990) </li>
           <li>Học Bác sĩ Đa khoa, Trường Đại học Y Dược TP.HCM (1972 - 1978)</li>
        </ul>
        <h6>Sách, các công trình nghiên cứu và báo cáo khoa học</h6>
        <p>Bác sĩ tham gia thực hiện nhiều nhiều công trình nghiên cứu khoa học, viết sách trong lĩnh vực hô hấp, dị ứng miễn dịch bằng tiếng Việt và tiếng Anh. Một số công trình tiêu biểu như: </p>
        <ul>
           <li>Hiệu quả mô hình quản lý điều trị ngoại trú cho bệnh nhân COPD theo GOLD tại Khoa Thăm dò chức năng, Bệnh viện Đại học Y Dược TP.HCM, đã nghiệm thu năm 2009</li>
           <li>Đáp ứng lâm sàng và chức năng hô hấp ở bệnh nhân được điều trị theo “Chiến lược toàn cầu về xử trí hen suyễn và bệnh phổi tắc nghẽn mạn tính” tại một số đơn vị y tế của TP.HCM, đã nghiệm thu năm 2009</li>
           <li>Sách: Hướng dẫn chẩn đoán và điều trị Hen (Bộ Y tế) - Nhà xuất bản Y học</li>
        </ul>
        <h6>Thành viên các Hội, Tổ chức chuyên môn</h6>
        <ul>
           <li>Chủ tịch Hội Hen - Dị ứng - Miễn dịch Lâm sàng TP.HCM</li>
           <li>Uỷ viên Ban chấp hành Hội Hô hấp TP.HCM</li>
           <li>Thành viên Liên minh toàn cầu Phòng chống các bệnh phổi mạn tính (GARD - WHO)</li>
           <li>Thành viên Sáng kiến Phổi toàn cầu (GLI)</li>
           <li>Thành viên 3 tổ chức viết các hướng dẫn về Hen, COPD và Viêm mũi dị ứng toàn cầu (GINA, GOLD, ARIA)</li>
        </ul>`,
            contentHtmlEn: `<h4>Associate Professor, Dr.Phil, Doctor Le Thi Tuyet Lan</h4>
        <ul>
           <li>Former Director of Respiratory Care Center - University of Medicine and Pharmacy Hospital of Ho Chi Minh City</li>
           <li>Director of Clinic of University of Medicine and Pharmacy Hospital 1</li>
           <li>Co-Founder of CHAC General Clinic</li>
        </ul>
        <h6>Examination and treatment</h6>
        <p><strong>Doctors specialize in examination and treatment of respiratory diseases such as:</strong></p>
        <ul>
           <li>Asthma, bronchial asthma</li>
           <li>Chronic Obstructive Pulmonary Disease (COPD)</li>
           <li>Respiratory function test</li>
           <li>Inflammation of the pleura (bronchitis)</li>
           <li>pulmonary embolism</li>
           <li>Other respiratory diseases</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>The doctor examines and treats respiratory diseases, CHAC General Clinic (now)</li>
           <li>Respiratory Specialist, University Hospital of Medicine and Pharmacy, Ho Chi Minh City (2000 - present)</li>
           <li>Main lecturer at Faculty of Medicine, University of Medicine and Pharmacy, Ho Chi Minh City. HCM</li>
           <li>Director of Clinic of University of Medicine and Pharmacy Hospital 1</li>
           <li>Former Head of Functional Exploration Department – Ho Chi Minh City Medical University Hospital</li>
           <li>Former Director of Respiratory Care Center - University of Medicine and Pharmacy Hospital of Ho Chi Minh City</li>
           <li>Member of the Executive Committee of the Vietnam Respiratory Association</li>
           <li>Chairman of Asthma - Allergy - Clinical Immunology Association of HCMC</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Studying PhD students in the former Soviet Union (1986 - 1990)</li>
           <li>Graduated with Doctor of Medicine (1990) </li>
           <li>Study as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1972 - 1978)</li>
        </ul>
        <h6>Books, research works and scientific reports</h6>
        <p>The doctor has participated in many scientific researches, written books in the field of respiratory, allergy and immunology in Vietnamese and English. Some typical projects such as: </p>
        <ul>
           <li>Effective model of outpatient management for COPD patients according to GOLD at the Functional Exploration Department, University of Medicine and Pharmacy Hospital, Ho Chi Minh City, approved in 2009</li>
           <li>Clinical response and respiratory function in patients treated according to the “Global Strategy for the Management of Asthma and Chronic Obstructive Pulmonary Disease” at a number of medical units in Ho Chi Minh City, has been acceptance in 2009</li>
           <li>Book: Guidelines for Diagnosis and Treatment of Asthma (Ministry of Health) - Medical Publishing House</li>
        </ul>
        <h6>Members of professional associations and organizations</h6>
        <ul>
           <li>Chairman of Asthma - Allergy - Clinical Immunology Association of HCMC</li>
           <li>Member of the Executive Committee of Ho Chi Minh City Respiratory Association</li>
           <li>Member of the Global Alliance for the Prevention of Chronic Lung Diseases (GARD - WHO)</li>
           <li>Member of the Global Lung Initiative (GLI)</li>
           <li>Member of 3 organizations writing guidelines on Asthma, COPD and Allergic Rhinitis (GINA, GOLD, ARIA)</li>
        </ul>`,
            descriptionVi: `Nguyên Giám đốc Trung tâm Chăm sóc hô hấp – Bệnh viện Đại học Y dược TP.HCM
Giám đốc Phòng Khám Bệnh Viện Đại Học Y Dược 1
Đồng sáng lập Phòng khám Đa khoa CHAC`,
            descriptionEn: `Former Director of Respiratory Care Center - University of Medicine and Pharmacy Hospital, Ho Chi Minh City
Director of the Medical University Hospital Clinic 1
Co-founder of CHAC . General Clinic`,
            contentMarkDownVi: `#### Phó Giáo sư, Tiến sĩ, Bác sĩ Lê Thị Tuyết Lan

*   Nguyên Giám đốc Trung tâm Chăm sóc hô hấp – Bệnh viện Đại học Y dược TP.HCM
*   Giám đốc Phòng Khám Bệnh Viện Đại Học Y Dược 1
*   Đồng sáng lập Phòng khám Đa khoa CHAC

###### Khám và điều trị

**Bác sĩ khám và điều trị chuyên sâu về các bệnh lý đường hô hấp như:**

*   Hen suyễn, hen phế quản
*   Bệnh phổi tắc nghẽn mạn tính (COPD)
*   Thăm dò chứ năng hô hấp
*   Viêm màng phổi (viêm phế mạc)
*   Thuyên tắc phổi
*   Các bệnh lý khác về hô hấp

###### Quá trình công tác

*   Bác sĩ khám và điều trị bệnh lý Hô hấp, Phòng khám Đa khoa CHAC (nay)
*   Chuyên gia Hô hấp, Bệnh viện Đại học Y dược TP.HCM (2000 - nay)
*   Giảng viên chính tại Khoa Y, Đại học Y Dược TP. HCM
*   Giám đốc Phòng Khám Bệnh Viện Đại Học Y Dược 1
*   Nguyên Trưởng Khoa Thăm dò chức năng – Bệnh viện ĐHYD TP.HCM
*   Nguyên Giám đốc Trung tâm Chăm sóc hô hấp – Bệnh viện Đại học Y dược TP.HCM
*   Ủy viên Ban Chấp hành Hội Hô hấp Việt Nam
*   Chủ tịch Hội Hen - Dị ứng - Miễn dịch lâm sàng TP.HCM

###### Quá trình đào tạo

*   Học Nghiên cứu sinh tại Liên Xô cũ (1986 - 1990)
*   Tốt nghiệp Tiến sĩ Y khoa (1990)
*   Học Bác sĩ Đa khoa, Trường Đại học Y Dược TP.HCM (1972 - 1978)

###### Sách, các công trình nghiên cứu và báo cáo khoa học

Bác sĩ tham gia thực hiện nhiều nhiều công trình nghiên cứu khoa học, viết sách trong lĩnh vực hô hấp, dị ứng miễn dịch bằng tiếng Việt và tiếng Anh. Một số công trình tiêu biểu như:

*   Hiệu quả mô hình quản lý điều trị ngoại trú cho bệnh nhân COPD theo GOLD tại Khoa Thăm dò chức năng, Bệnh viện Đại học Y Dược TP.HCM, đã nghiệm thu năm 2009
*   Đáp ứng lâm sàng và chức năng hô hấp ở bệnh nhân được điều trị theo “Chiến lược toàn cầu về xử trí hen suyễn và bệnh phổi tắc nghẽn mạn tính” tại một số đơn vị y tế của TP.HCM, đã nghiệm thu năm 2009
*   Sách: Hướng dẫn chẩn đoán và điều trị Hen (Bộ Y tế) - Nhà xuất bản Y học

###### Thành viên các Hội, Tổ chức chuyên môn

*   Chủ tịch Hội Hen - Dị ứng - Miễn dịch Lâm sàng TP.HCM
*   Uỷ viên Ban chấp hành Hội Hô hấp TP.HCM
*   Thành viên Liên minh toàn cầu Phòng chống các bệnh phổi mạn tính (GARD - WHO)
*   Thành viên Sáng kiến Phổi toàn cầu (GLI)
*   Thành viên 3 tổ chức viết các hướng dẫn về Hen, COPD và Viêm mũi dị ứng toàn cầu (GINA, GOLD, ARIA)`,
            contentMarkDownEn: `#### Associate Professor, Dr.Phil, Doctor Le Thi Tuyet Lan

*   Former Director of Respiratory Care Center - University of Medicine and Pharmacy Hospital of Ho Chi Minh City
*   Director of Clinic of University of Medicine and Pharmacy Hospital 1
*   Co-Founder of CHAC General Clinic

###### Examination and treatment

**Doctors specialize in examination and treatment of respiratory diseases such as:**

*   Asthma, bronchial asthma
*   Chronic Obstructive Pulmonary Disease (COPD)
*   Respiratory function test
*   Inflammation of the pleura (bronchitis)
*   pulmonary embolism
*   Other respiratory diseases

###### Working history

*   The doctor examines and treats respiratory diseases, CHAC General Clinic (now)
*   Respiratory Specialist, University Hospital of Medicine and Pharmacy, Ho Chi Minh City (2000 - present)
*   Main lecturer at Faculty of Medicine, University of Medicine and Pharmacy, Ho Chi Minh City. HCM
*   Director of Clinic of University of Medicine and Pharmacy Hospital 1
*   Former Head of Functional Exploration Department – Ho Chi Minh City Medical University Hospital
*   Former Director of Respiratory Care Center - University of Medicine and Pharmacy Hospital of Ho Chi Minh City
*   Member of the Executive Committee of the Vietnam Respiratory Association
*   Chairman of Asthma - Allergy - Clinical Immunology Association of HCMC

###### Training process

*   Studying PhD students in the former Soviet Union (1986 - 1990)
*   Graduated with Doctor of Medicine (1990)
*   Study as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1972 - 1978)

###### Books, research works and scientific reports

The doctor has participated in many scientific researches, written books in the field of respiratory, allergy and immunology in Vietnamese and English. Some typical projects such as:

*   Effective model of outpatient management for COPD patients according to GOLD at the Functional Exploration Department, University of Medicine and Pharmacy Hospital, Ho Chi Minh City, approved in 2009
*   Clinical response and respiratory function in patients treated according to the “Global Strategy for the Management of Asthma and Chronic Obstructive Pulmonary Disease” at a number of medical units in Ho Chi Minh City, has been acceptance in 2009
*   Book: Guidelines for Diagnosis and Treatment of Asthma (Ministry of Health) - Medical Publishing House

###### Members of professional associations and organizations

*   Chairman of Asthma - Allergy - Clinical Immunology Association of HCMC
*   Member of the Executive Committee of Ho Chi Minh City Respiratory Association
*   Member of the Global Alliance for the Prevention of Chronic Lung Diseases (GARD - WHO)
*   Member of the Global Lung Initiative (GLI)
*   Member of 3 organizations writing guidelines on Asthma, COPD and Allergic Rhinitis (GINA, GOLD, ARIA)`,
            doctorId: 18,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Bác sĩ Chuyên khoa I Nguyễn Bích Hà</h4>
        <ul>
           <li>Bác sĩ chuyên khoa Nội Thần kinh</li>
           <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý thần kinh</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Hiện là Bác sĩ điều trị Nội Thần kinh, Phòng khám Đa khoa Hưng Dũng (2016 - nay)</li>
           <li>Bác sĩ điều trị, khoa Nội Thần kinh, Bệnh viện Nhân dân 115 (2000 - 2016)</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Nội Thần kinh, Đại học Y dược TPHCM (2003)</li>
           <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y dược TPHCM (1995)</li>
           <li>Chứng chỉ điện cơ, Đại học Y khoa Phạm Ngọc Thạch (2015)</li>
           <li>Chứng chỉ điện não đồ, Bệnh viện Chợ Rẫy (2006)</li>
        </ul>
        <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
        <ul>
           <li>Hội Đột quỵ TPHCM </li>
           <li>Hội Điện cơ Việt Nam (VANEM)</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <p><strong>Bác sĩ khám và điều trị các mặt bệnh thần kinh:</strong></p>
        <ul>
           <li>Động kinh: co giật cơ thể, ngất …</li>
           <li>Tai biến mạch máu não: liệt nửa người, méo miệng, hôn mê …</li>
           <li>Đau đầu cấp, đau đầu mãn tính: đau đầu từng cơn, đau đầu theo mạch đập</li>
           <li>Chóng mặt, rối loạn tiền đình</li>
           <li>Parkinson và các dạng rối loạn vận động khác</li>
           <li>Mật ngủ, rối loạn giấc ngủ</li>
           <li>Rối oạn lo âu, stress</li>
           <li>Rối loạn hoảng loạn</li>
           <li>Loạn thần cấp, mãn</li>
           <li>Viêm não, màng não</li>
           <li>Viêm tủy</li>
           <li>Đau thần kinh tọa</li>
           <li>Thoát vị đĩa đệm </li>
        </ul>`,
            contentHtmlEn: `<h4>Specialist Doctor I Nguyen Bich Ha</h4>
        <ul>
           <li>Neuroendocrinologist</li>
           <li>Many years of experience in the examination and treatment of neurological diseases</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Currently a Doctor of Internal Medicine, Hung Dung General Clinic (2016 - present)</li>
           <li>Therapist, Department of Internal Medicine, 115 People's Hospital (2000 - 2016)</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Graduated from Doctor of Specialization I majoring in Neurology, University of Medicine and Pharmacy, Ho Chi Minh City (2003)</li>
           <li>Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1995)</li>
           <li>Certificate of Electromechanics, Pham Ngoc Thach Medical University (2015)</li>
           <li>Certificate of EEG, Cho Ray Hospital (2006)</li>
        </ul>
        <h6>Members of scientific associations and professional organizations</h6>
        <ul>
           <li>Ho Chi Minh City Stroke Association </li>
           <li>Vietnam Association of Electromechanics (VANEM)</li>
        </ul>
        <h6>Examination and treatment</h6>
        <p><strong>Doctor examines and treats neurological diseases:</strong></p>
        <ul>
           <li>epilepsy: body convulsions, fainting…</li>
           <li>Cerebral vascular accident: hemiplegia, mouth distortion, coma…</li>
           <li>Acute headache, chronic headache: cluster headache, pulsating headache</li>
           <li>Dizziness, vestibular disorders</li>
           <li>Parkinson and other movement disorders</li>
           <li>Sleep honey, sleep disorder</li>
           <li>Anxiety disorder</li>
           <li>Panic disorder</li>
           <li>Acute, chronic psychosis</li>
           <li>Inflammation of the brain, meninges</li>
           <li>Myelitis</li>
           <li>Sciatica</li>
           <li>Herniated disc </li>
        </ul>`,
            descriptionVi: `Bác sĩ chuyên khoa Nội Thần kinh
Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý thần kinh`,
            descriptionEn: `Neurosurgeon Specialist
Many years of experience in examination and treatment of neurological diseases`,
            contentMarkDownVi: `#### Bác sĩ Chuyên khoa I Nguyễn Bích Hà

*   Bác sĩ chuyên khoa Nội Thần kinh
*   Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý thần kinh

###### Quá trình công tác

*   Hiện là Bác sĩ điều trị Nội Thần kinh, Phòng khám Đa khoa Hưng Dũng (2016 - nay)
*   Bác sĩ điều trị, khoa Nội Thần kinh, Bệnh viện Nhân dân 115 (2000 - 2016)

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ chuyên khoa I chuyên ngành Nội Thần kinh, Đại học Y dược TPHCM (2003)
*   Tốt nghiệp Bác sĩ đa khoa, Đại học Y dược TPHCM (1995)
*   Chứng chỉ điện cơ, Đại học Y khoa Phạm Ngọc Thạch (2015)
*   Chứng chỉ điện não đồ, Bệnh viện Chợ Rẫy (2006)

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Hội Đột quỵ TPHCM
*   Hội Điện cơ Việt Nam (VANEM)

###### Khám và điều trị

**Bác sĩ khám và điều trị các mặt bệnh thần kinh:**

*   Động kinh: co giật cơ thể, ngất …
*   Tai biến mạch máu não: liệt nửa người, méo miệng, hôn mê …
*   Đau đầu cấp, đau đầu mãn tính: đau đầu từng cơn, đau đầu theo mạch đập
*   Chóng mặt, rối loạn tiền đình
*   Parkinson và các dạng rối loạn vận động khác
*   Mật ngủ, rối loạn giấc ngủ
*   Rối oạn lo âu, stress
*   Rối loạn hoảng loạn
*   Loạn thần cấp, mãn
*   Viêm não, màng não
*   Viêm tủy
*   Đau thần kinh tọa
*   Thoát vị đĩa đệm`,
            contentMarkDownEn: `#### Specialist Doctor I Nguyen Bich Ha

*   Neuroendocrinologist
*   Many years of experience in the examination and treatment of neurological diseases

###### Working history

*   Currently a Doctor of Internal Medicine, Hung Dung General Clinic (2016 - present)
*   Therapist, Department of Internal Medicine, 115 People's Hospital (2000 - 2016)

###### Training process

*   Graduated from Doctor of Specialization I majoring in Neurology, University of Medicine and Pharmacy, Ho Chi Minh City (2003)
*   Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (1995)
*   Certificate of Electromechanics, Pham Ngoc Thach Medical University (2015)
*   Certificate of EEG, Cho Ray Hospital (2006)

###### Members of scientific associations and professional organizations

*   Ho Chi Minh City Stroke Association
*   Vietnam Association of Electromechanics (VANEM)

###### Examination and treatment

**Doctor examines and treats neurological diseases:**

*   epilepsy: body convulsions, fainting…
*   Cerebral vascular accident: hemiplegia, mouth distortion, coma…
*   Acute headache, chronic headache: cluster headache, pulsating headache
*   Dizziness, vestibular disorders
*   Parkinson and other movement disorders
*   Sleep honey, sleep disorder
*   Anxiety disorder
*   Panic disorder
*   Acute, chronic psychosis
*   Inflammation of the brain, meninges
*   Myelitis
*   Sciatica
*   Herniated disc`,
            doctorId: 19,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Phó Giáo sư, Tiến sĩ Nguyễn Thanh Bình (C)</h4>
         <ul>
            <li>Hiện đang là Trưởng khoa Thần kinh và Bệnh Alzeimer, Bệnh viện Lão khoa Trung ương</li>
            <li>Giảng viên Bộ môn Thần kinh, Đại học Y Hà Nội</li>
         </ul>
         <h6>Quá trình công tác</h6>
         <ul>
            <li>Trưởng khoa Thần kinh và Bệnh Alzeimer, Bệnh viện Lão khoa Trung ương (2/2016 - nay)</li>
            <li>Giảng viên Bộ môn Thần kinh, Đại học Y Hà Nội (2002 - nay)</li>
            <li>Phó trưởng khoa Thần kinh, Bệnh viện Lão khoa Trung ương (4/2005 - 1/2016)</li>
            <li>Bác sĩ điều trị tại Khoa Thần kinh, Bệnh viện Lão khoa Trung ương 92006 - 2015)</li>
            <li>Bác sĩ điều trị Khoa Thần kinh, Bệnh viện Bạch Mai (2002 - 2006)</li>
         </ul>
         <h6>Quá trình đào tạo</h6>
         <ul>
            <li>Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội (1995)</li>
            <li>Tốt nghiệp Thạc sĩ Chuyên ngành Thần kinh, Đại học Y Hà Nội (2004)</li>
            <li>Tốt nghiệp Tiến sĩ Chuyên ngành Thần kinh, Đại học Y Hà Nội (2012)</li>
         </ul>
         <h6>Chứng chỉ trong nước hoặc nước ngoài</h6>
         <ul>
            <li>Chứng chỉ điện não đồ và động kinh, Malaysia (2007)</li>
         </ul>
         <h6>Sách và công trình nghiên cứu, báo cáo khoa học</h6>
         <ul>
            <li>Sách Hỏi đáp về các rối loạn giấc ngủ, Nhà xuất bản Y học (2009)</li>
            <li>Sách Một số cấp cứu thường gặp tại tuyến y tế cơ sở, Nhà xuất bản Y học (2016)</li>
            <li>Giáo trình Thần kinh học, Nhà xuất bản Y học (2016)</li>
            <li>Triệu chứng học Nội khoa, Tập 2, Nhà xuất bản Y học (2017)</li>
         </ul>
         <h6>Thành viên các Hội khoa học, Tổ chức chuyên môn</h6>
         <ul>
            <li>Hội Bệnh Parkinson và rối loạn vận động Việt Nam</li>
            <li>Hội Thần kinh tại Hà Nội</li>
            <li>Hội Thần kinh tại Việt Nam</li>
         </ul>
         <h6>Khám &amp; điều trị các bệnh</h6>
         <p><strong>Bác sĩ có chuyên môn sâu về các bệnh lý nội khoa thần kinh:</strong></p>
         <ul>
            <li>Đau đầu</li>
            <li>Hội chứng tiền đình</li>
            <li>Tai biến mạch máu não</li>
            <li>Mất ngủ, ngừng thở khi ngủ</li>
            <li>Ngừng thở khi ngủ do tắc nghẽn, ngủ ngáy</li>
            <li>Hội chứng chân không yên</li>
            <li>Động kinh</li>
            <li>Parkinson</li>
            <li>Sa sút trí tuệ</li>
            <li>Viêm đa rễ và dây thần kinh</li>
            <li>Nhược cơ</li>
            <li>Liệt dây Thần kinh số V, đau dây V</li>
            <li>Zona Thần kinh…</li>
         </ul>`,
            contentHtmlEn: `<h4>Associate Professor, Dr.Phil Nguyen Thanh Binh (C)</h4>
        <ul>
           <li>Currently Head of Neurology and Alzeimer Disease Department, Central Geriatric Hospital</li>
           <li>Lecturer of the Department of Neurology, Hanoi Medical University</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Head of Neurology and Alzeimer Disease Department, Central Geriatric Hospital (February 2016 - present)</li>
           <li>Lecturer of the Department of Neurology, Hanoi Medical University (2002 - present)</li>
           <li>Deputy Head of Department of Neurology, Central Geriatric Hospital (April 2005 - January 2016)</li>
           <li>Therapist at the Department of Neurology, Central Geriatric Hospital 92006 - 2015)</li>
           <li>Doctor of Neurology Department, Bach Mai Hospital (2002 - 2006)</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Graduated as a General Doctor, Hanoi Medical University (1995)</li>
           <li>Graduated with Master's degree in Neurology, Hanoi Medical University (2004)</li>
           <li>Graduated with PhD in Neurology, Hanoi Medical University (2012)</li>
        </ul>
        <h6>Domestic or foreign certificate</h6>
        <ul>
           <li>Certificate of EEG and Epilepsy, Malaysia (2007)</li>
        </ul>
        <h6>Books and research works, scientific reports</h6>
        <ul>
           <li>Sleep Disorder Q&A Book, Medical Publishing House (2009)</li>
           <li>Book Some common emergencies at primary health care, Medical Publishing House (2016)</li>
           <li>Textbook of Neurology, Medical Publishing House (2016)</li>
           <li>Symptomatology in Internal Medicine, Volume 2, Medical Publishing House (2017)</li>
        </ul>
        <h6>Member of Scientific Associations, Professional Organizations</h6>
        <ul>
           <li>Vietnam Association of Parkinson's Disease and Movement Disorders</li>
           <li>Neurological Association in Hanoi</li>
           <li>Society of Neurology in Vietnam</li>
        </ul>
        <h6>Examine &amp; treat diseases</h6>
        <p><strong>Doctor with deep expertise in neuroendocrine diseases:</strong></p>
        <ul>
           <li>Headache</li>
           <li>Vestibular Syndrome</li>
           <li>Cerebral vascular accident</li>
           <li>Insomnia, sleep apnea</li>
           <li>Sleep apnea due to obstruction, snoring</li>
           <li>Restless Legs Syndrome</li>
           <li>epilepsy</li>
           <li>Parkinson</li>
           <li>Dementia</li>
           <li>Inflammation of polyarthritis and neuritis</li>
           <li>Myasthenia gravis</li>
           <li>Valth nerve palsy, V nerve pain</li>
           <li>Zona Nervous…</li>
        </ul>`,
            descriptionVi: `Hiện đang là Trưởng khoa Thần kinh và Bệnh Alzeimer, Bệnh viện Lão khoa Trung ương
Giảng viên Bộ môn Thần kinh, Đại học Y Hà Nội
Hội viên Hội Thần Kinh tại Việt Nam`,
            descriptionEn: `Currently Head of Neurology and Alzeimer Disease Department, Central Geriatric Hospital
Lecturer in Neurology, Hanoi Medical University
Member of the Association of Neurology in Vietnam`,
            contentMarkDownVi: `#### Phó Giáo sư, Tiến sĩ Nguyễn Thanh Bình (C)

*   Hiện đang là Trưởng khoa Thần kinh và Bệnh Alzeimer, Bệnh viện Lão khoa Trung ương
*   Giảng viên Bộ môn Thần kinh, Đại học Y Hà Nội

###### Quá trình công tác

*   Trưởng khoa Thần kinh và Bệnh Alzeimer, Bệnh viện Lão khoa Trung ương (2/2016 - nay)
*   Giảng viên Bộ môn Thần kinh, Đại học Y Hà Nội (2002 - nay)
*   Phó trưởng khoa Thần kinh, Bệnh viện Lão khoa Trung ương (4/2005 - 1/2016)
*   Bác sĩ điều trị tại Khoa Thần kinh, Bệnh viện Lão khoa Trung ương 92006 - 2015)
*   Bác sĩ điều trị Khoa Thần kinh, Bệnh viện Bạch Mai (2002 - 2006)

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ Đa khoa, Đại học Y Hà Nội (1995)
*   Tốt nghiệp Thạc sĩ Chuyên ngành Thần kinh, Đại học Y Hà Nội (2004)
*   Tốt nghiệp Tiến sĩ Chuyên ngành Thần kinh, Đại học Y Hà Nội (2012)

###### Chứng chỉ trong nước hoặc nước ngoài

*   Chứng chỉ điện não đồ và động kinh, Malaysia (2007)

###### Sách và công trình nghiên cứu, báo cáo khoa học

*   Sách Hỏi đáp về các rối loạn giấc ngủ, Nhà xuất bản Y học (2009)
*   Sách Một số cấp cứu thường gặp tại tuyến y tế cơ sở, Nhà xuất bản Y học (2016)
*   Giáo trình Thần kinh học, Nhà xuất bản Y học (2016)
*   Triệu chứng học Nội khoa, Tập 2, Nhà xuất bản Y học (2017)

###### Thành viên các Hội khoa học, Tổ chức chuyên môn

*   Hội Bệnh Parkinson và rối loạn vận động Việt Nam
*   Hội Thần kinh tại Hà Nội
*   Hội Thần kinh tại Việt Nam

###### Khám & điều trị các bệnh

**Bác sĩ có chuyên môn sâu về các bệnh lý nội khoa thần kinh:**

*   Đau đầu
*   Hội chứng tiền đình
*   Tai biến mạch máu não
*   Mất ngủ, ngừng thở khi ngủ
*   Ngừng thở khi ngủ do tắc nghẽn, ngủ ngáy
*   Hội chứng chân không yên
*   Động kinh
*   Parkinson
*   Sa sút trí tuệ
*   Viêm đa rễ và dây thần kinh
*   Nhược cơ
*   Liệt dây Thần kinh số V, đau dây V
*   Zona Thần kinh…`,
            contentMarkDownEn: `#### Associate Professor, Dr.Phil Nguyen Thanh Binh (C)

*   Currently Head of Neurology and Alzeimer Disease Department, Central Geriatric Hospital
*   Lecturer of the Department of Neurology, Hanoi Medical University

###### Working history

*   Head of Neurology and Alzeimer Disease Department, Central Geriatric Hospital (February 2016 - present)
*   Lecturer of the Department of Neurology, Hanoi Medical University (2002 - present)
*   Deputy Head of Department of Neurology, Central Geriatric Hospital (April 2005 - January 2016)
*   Therapist at the Department of Neurology, Central Geriatric Hospital 92006 - 2015)
*   Doctor of Neurology Department, Bach Mai Hospital (2002 - 2006)

###### Training process

*   Graduated as a General Doctor, Hanoi Medical University (1995)
*   Graduated with Master's degree in Neurology, Hanoi Medical University (2004)
*   Graduated with PhD in Neurology, Hanoi Medical University (2012)

###### Domestic or foreign certificate

*   Certificate of EEG and Epilepsy, Malaysia (2007)

###### Books and research works, scientific reports

*   Sleep Disorder Q&A Book, Medical Publishing House (2009)
*   Book Some common emergencies at primary health care, Medical Publishing House (2016)
*   Textbook of Neurology, Medical Publishing House (2016)
*   Symptomatology in Internal Medicine, Volume 2, Medical Publishing House (2017)

###### Member of Scientific Associations, Professional Organizations

*   Vietnam Association of Parkinson's Disease and Movement Disorders
*   Neurological Association in Hanoi
*   Society of Neurology in Vietnam

###### Examine & treat diseases

**Doctor with deep expertise in neuroendocrine diseases:**

*   Headache
*   Vestibular Syndrome
*   Cerebral vascular accident
*   Insomnia, sleep apnea
*   Sleep apnea due to obstruction, snoring
*   Restless Legs Syndrome
*   epilepsy
*   Parkinson
*   Dementia
*   Inflammation of polyarthritis and neuritis
*   Myasthenia gravis
*   Valth nerve palsy, V nerve pain
*   Zona Nervous…`,
            doctorId: 20,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Vân Hồng</h4>
        <ul>
           <li>Phó trưởng khoa Tiêu hóa - Bệnh viện Bạch Mai</li>
           <li>Giảng bộ môn Tiêu hóa tại Trường Đại học Y Hà Nội</li>
           <li>Hiện tại bác sĩ có lịch khám tại Phòng khám Y Cao</li>
           <li>Bác sĩ khám cho người bệnh từ 10 tuổi trở lên</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Tốt nghiệp Bác sĩ Đa khoa Trường Đại học Y Hà Nội (1985)</li>
           <li>Tốt nghiệp bác sĩ nội trú bệnh viện Đại học Y Hà Nội (1988)</li>
           <li>Học FFI của trường Đại học Paris VI (1995 - 1996)</li>
           <li>Nghiên cứu sinh tại Đại  học Y Hà Nội (1995 - 2004)</li>
           <li>Tham dự khóa học nội soi ca thiệp tại Bệnh viện Cochin - Paris (2000)</li>
           <li>Tham dự khóa học siêu âm nội soi tại Bệnh viện Henri - Mondor Paris (2006)</li>
        </ul>
        <h6>Chứng chỉ trong nước hoặc nước ngoài</h6>
        <ul>
           <li>Chứng chỉ thăm dò chức năng tiêu hóa</li>
           <li>Chứng chỉ giảng viên nội soi tiêu hóa</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Hiện là Phó trưởng khoa Tiêu hóa Bệnh viện Bạch Mai và là một trong những chuyên gia Tiêu hóa hàng đầu của Việt Nam</li>
           <li>Hiện đang tham gia giảng dạy Bộ môn Tiêu hóa tại trường Đại học Y Hà Nội</li>
           <li>Hiện tại bác sĩ có lịch khám tại Phòng khám Y Cao</li>
           <li>Là diễn giả chuyên mục Sạch hay Bẩn của VTV; Vì một tương lai tươi sáng của JoyFM</li>
           <li>Thường xuyên tham gia và trao đổi kinh nghiệm tại các chương trình hội thảo trong nước và quốc tế. Gần đây nhất là Hội thảo tiêu hóa châu Á – Thái Bình Dương tháng 9-2017</li>
        </ul>
        <h6>Sách và các công trình nghiên cứu, báo cáo khoa học</h6>
        <ul>
           <li>30 bài báo khoa học đăng trên các tạp chí trong nước</li>
           <li>Xuất bản 05 sách tham khảo và sách bệnh học</li>
           <li>Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình</li>
           <li>Là diễn giả chuyên mục Sạch hay Bẩn của VTV và vì ngày tươi sáng kênh JoyFM …..</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <p><strong>Khám, điều trị các bệnh lý về Tiêu hóa</strong></p>
        <ul>
           <li>Nội soi Tiêu hóa</li>
           <li>Bệnh lý tiêu hóa, ổ bụng, các bệnh lý hậu môn, trực tràng</li>
           <li>Bệnh lý dạ dày, tá tràng, ruột non</li>
        </ul>
        <p><strong>Bệnh lý đại tràng, trực tràng</strong></p>
        <ul>
           <li>Bệnh trĩ, trĩ chảy máu, rò hậu môn</li>
           <li>Bệnh u gan</li>
           <li>Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng</li>
        </ul>
        <p><strong>Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày</strong></p>
        <ul>
           <li>Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa</li>
           <li>Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại</li>
           <li>Gắp dị vật đường tiêu hóa</li>
           <li>Các bệnh lý Tiêu hóa - gan mật</li>
           <li>Bệnh gan nhiễm mỡ</li>
           <li>Đau dạ dày</li>
           <li>Chảy máu dạ dày </li>
           <li>Đau thượng vị </li>
           <li>Viêm dạ dày</li>
           <li>Loét dạ dày tá tràng</li>
           <li>Nhiễm Helicobacter pylori dạ dày (HP)</li>
           <li>Trào ngược dạ dày thực quản (Gerd)</li>
           <li>Polyp dạ dày </li>
           <li>Viêm đại tràng</li>
           <li>Viêm đại tràng màng giả</li>
           <li>Viêm loét đại tràng</li>
           <li>Hội chứng ruột kích thích (viêm đại tràng co thắt)</li>
           <li>Khó nuốt</li>
           <li>Khó tiêu</li>
           <li>Ợ nóng, Ợ chua</li>
           <li>Táo bón</li>
           <li>Cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng</li>
        </ul>
        <p><strong>Khám và điều trị các bệnh lý về gan, mật</strong></p>
        <ul>
           <li>Viêm túi mật</li>
           <li>Viêm tụy</li>
           <li>Viêm xơ đường mật</li>
           <li>Viêm xơ gan do rượu</li>
           <li>Xơ gan</li>
           <li>Viêm tắc đường mật</li>
           <li>Khám, tư vấn, điều trị các bệnh viêm gan virus</li>
           <li>Viêm gan siêu vi B</li>
           <li>Ung thư gan</li>
           <li>Tầm soát viêm gan vi rút A, B, C</li>
        </ul>`,
            contentHtmlEn: `<h4>Associate Professor, Dr.Phil, Doctor Nguyen Thi Van Hong</h4>
        <ul>
           <li>Deputy Head of Gastroenterology Department - Bach Mai Hospital</li>
           <li>Teaching Gastroenterology at Hanoi Medical University</li>
           <li>Currently, the doctor has an appointment at Cao Medical Clinic</li>
           <li>Doctor examines patients 10 years and older</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Graduated as a General Doctor of Hanoi Medical University (1985)</li>
           <li>Graduated as a resident doctor at Hanoi Medical University (1988)</li>
           <li>Study FFI from University of Paris VI (1995 - 1996)</li>
           <li>Doctorate at University  Hanoi Medical School (1995 - 2004)</li>
           <li>Participated in interventional endoscopy course at Cochin Hospital - Paris (2000)</li>
           <li>Participated in endoscopic ultrasound course at Henri Hospital - Mondor Paris (2006)</li>
        </ul>
        <h6>Domestic or foreign certificate</h6>
        <ul>
           <li>Digestive Function Test Certificate</li>
           <li>Digestive Endoscopy Instructor Certificate</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Currently Deputy Head of Gastroenterology Department of Bach Mai Hospital and one of the leading gastroenterologists in Vietnam</li>
           <li>Currently teaching Gastroenterology at Hanoi Medical University</li>
           <li>Currently, the doctor has an appointment at Cao Medical Clinic</li>
           <li>As a speaker for VTV's Clean or Dirty column; For a bright future of JoyFM</li>
           <li>Regularly participate in and exchange experiences at national and international seminars. The most recent is the Asia-Pacific Gastroenterology Conference in September 2017</li>
        </ul>
        <h6>Books and research works, scientific reports</h6>
        <ul>
           <li>30 scientific articles published in domestic journals</li>
           <li>Published 05 reference books and pathology books</li>
           <li>Participating in health topics on newspapers and television</li>
           <li>As a speaker on VTV's Clean or Dirty column and for a bright day on JoyFM channel .....</li>
        </ul>
        <h6>Examination and treatment</h6>
        <p><strong>Examination and treatment of digestive diseases</strong></p>
        <ul>
           <li>Gastrointestinal Endoscopy</li>
           <li>Digestive, abdominal, and rectal diseases</li>
           <li>Diseases of stomach, duodenum, small intestine</li>
        </ul>
        <p><strong>Diseases of colon and rectum</strong></p>
        <ul>
           <li>Hemorrhoids, bleeding hemorrhoids, anal fistula</li>
           <li>Hepatic tumor</li>
           <li>Exam, Colonoscopy, Colorectal Cancer Screening Test</li>
        </ul>
        <p><strong>Examination, Endoscopy, Stomach Cancer Screening Test</strong></p>
        <ul>
           <li>Examination, Endoscopy, Gastrointestinal Cancer Screening Test</li>
           <li>Examination, Endoscopy, consultation and treatment of Anal diseases, Internal Hemorrhoids, External Hemorrhoids</li>
           <li>Gastrointestinal foreign body removal</li>
           <li>Digestive - hepatobiliary diseases</li>
           <li>Fat liver disease</li>
           <li>Stomach ache</li>
           <li>Stomach bleeding </li>
           <li>Egastric pain </li>
           <li>Gastritis</li>
           <li>Stomach and duodenal ulcer</li>
           <li>Stomach Helicobacter pylori (HP) infection</li>
           <li>Gastroesophageal reflux disease (Gerd)</li>
           <li>Stomach polyp </li>
           <li>Inflammation of the colon</li>
           <li>Pseudomembranous colitis</li>
           <li>Ulcerative colitis</li>
           <li>Irritable bowel syndrome (spasmodic colitis)</li>
           <li>Difficulty swallowing</li>
           <li>Indigestion</li>
           <li>Hot, sour</li>
           <li>Constipation</li>
           <li>Cut tumors under the stomach lining - duodenum, colon</li>
        </ul>
        <p><strong>Examination and treatment of liver and gallbladder diseases</strong></p>
        <ul>
           <li>Cholecystitis</li>
           <li>Pancreatitis</li>
           <li>Sclerosing cholangitis</li>
           <li>Alcoholic cirrhosis</li>
           <li>Cirrhosis</li>
           <li>Inflammation of the biliary tract</li>
           <li>Examination, consultation and treatment of viral hepatitis</li>
           <li>Hepatitis B</li>
           <li>Liver cancer</li>
           <li>Screen for hepatitis A, B, C</li>
        </ul>`,
            descriptionVi: `Phó trưởng khoa Tiêu hóa, Bệnh viện Bạch Mai
Hiện tại bác sĩ có lịch khám tại Phòng khám Y Cao
Bác sĩ khám cho người bệnh từ 10 tuổi trở lên`,
            descriptionEn: `Deputy Head of Gastroenterology Department, Bach Mai Hospital
Currently, the doctor has an appointment at Cao Medical Clinic
A doctor examines a patient 10 years and older`,
            contentMarkDownVi: `#### Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Vân Hồng

*   Phó trưởng khoa Tiêu hóa - Bệnh viện Bạch Mai
*   Giảng bộ môn Tiêu hóa tại Trường Đại học Y Hà Nội
*   Hiện tại bác sĩ có lịch khám tại Phòng khám Y Cao
*   Bác sĩ khám cho người bệnh từ 10 tuổi trở lên

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ Đa khoa Trường Đại học Y Hà Nội (1985)
*   Tốt nghiệp bác sĩ nội trú bệnh viện Đại học Y Hà Nội (1988)
*   Học FFI của trường Đại học Paris VI (1995 - 1996)
*   Nghiên cứu sinh tại Đại học Y Hà Nội (1995 - 2004)
*   Tham dự khóa học nội soi ca thiệp tại Bệnh viện Cochin - Paris (2000)
*   Tham dự khóa học siêu âm nội soi tại Bệnh viện Henri - Mondor Paris (2006)

###### Chứng chỉ trong nước hoặc nước ngoài

*   Chứng chỉ thăm dò chức năng tiêu hóa
*   Chứng chỉ giảng viên nội soi tiêu hóa

###### Quá trình công tác

*   Hiện là Phó trưởng khoa Tiêu hóa Bệnh viện Bạch Mai và là một trong những chuyên gia Tiêu hóa hàng đầu của Việt Nam
*   Hiện đang tham gia giảng dạy Bộ môn Tiêu hóa tại trường Đại học Y Hà Nội
*   Hiện tại bác sĩ có lịch khám tại Phòng khám Y Cao
*   Là diễn giả chuyên mục Sạch hay Bẩn của VTV; Vì một tương lai tươi sáng của JoyFM
*   Thường xuyên tham gia và trao đổi kinh nghiệm tại các chương trình hội thảo trong nước và quốc tế. Gần đây nhất là Hội thảo tiêu hóa châu Á – Thái Bình Dương tháng 9-2017

###### Sách và các công trình nghiên cứu, báo cáo khoa học

*   30 bài báo khoa học đăng trên các tạp chí trong nước
*   Xuất bản 05 sách tham khảo và sách bệnh học
*   Tham gia các chuyên đề sức khỏe trên báo chí, truyền hình
*   Là diễn giả chuyên mục Sạch hay Bẩn của VTV và vì ngày tươi sáng kênh JoyFM …..

###### Khám và điều trị

**Khám, điều trị các bệnh lý về Tiêu hóa**

*   Nội soi Tiêu hóa
*   Bệnh lý tiêu hóa, ổ bụng, các bệnh lý hậu môn, trực tràng
*   Bệnh lý dạ dày, tá tràng, ruột non

**Bệnh lý đại tràng, trực tràng**

*   Bệnh trĩ, trĩ chảy máu, rò hậu môn
*   Bệnh u gan
*   Khám, Nội soi, Xét nghiệm sàng lọc ung thư đại trực tràng

**Khám, Nội soi, Xét nghiệm sàng lọc ung thư dạ dày**

*   Khám, Nội soi, Xét nghiệm sàng lọc bệnh lý ung thư đường tiêu hóa
*   Khám, Nội soi, tư vấn điều trị bệnh lý Hậu môn, Bệnh Trĩ Nội, Trĩ Ngoại
*   Gắp dị vật đường tiêu hóa
*   Các bệnh lý Tiêu hóa - gan mật
*   Bệnh gan nhiễm mỡ
*   Đau dạ dày
*   Chảy máu dạ dày
*   Đau thượng vị
*   Viêm dạ dày
*   Loét dạ dày tá tràng
*   Nhiễm Helicobacter pylori dạ dày (HP)
*   Trào ngược dạ dày thực quản (Gerd)
*   Polyp dạ dày
*   Viêm đại tràng
*   Viêm đại tràng màng giả
*   Viêm loét đại tràng
*   Hội chứng ruột kích thích (viêm đại tràng co thắt)
*   Khó nuốt
*   Khó tiêu
*   Ợ nóng, Ợ chua
*   Táo bón
*   Cắt u dưới niêm mạc dạ dày – tá tràng, đại tràng

**Khám và điều trị các bệnh lý về gan, mật**

*   Viêm túi mật
*   Viêm tụy
*   Viêm xơ đường mật
*   Viêm xơ gan do rượu
*   Xơ gan
*   Viêm tắc đường mật
*   Khám, tư vấn, điều trị các bệnh viêm gan virus
*   Viêm gan siêu vi B
*   Ung thư gan
*   Tầm soát viêm gan vi rút A, B, C`,
            contentMarkDownEn: `#### Associate Professor, Dr.Phil, Doctor Nguyen Thi Van Hong

*   Deputy Head of Gastroenterology Department - Bach Mai Hospital
*   Teaching Gastroenterology at Hanoi Medical University
*   Currently, the doctor has an appointment at Cao Medical Clinic
*   Doctor examines patients 10 years and older

###### Training process

*   Graduated as a General Doctor of Hanoi Medical University (1985)
*   Graduated as a resident doctor at Hanoi Medical University (1988)
*   Study FFI from University of Paris VI (1995 - 1996)
*   Doctorate at University Hanoi Medical School (1995 - 2004)
*   Participated in interventional endoscopy course at Cochin Hospital - Paris (2000)
*   Participated in endoscopic ultrasound course at Henri Hospital - Mondor Paris (2006)

###### Domestic or foreign certificate

*   Digestive Function Test Certificate
*   Digestive Endoscopy Instructor Certificate

###### Working history

*   Currently Deputy Head of Gastroenterology Department of Bach Mai Hospital and one of the leading gastroenterologists in Vietnam
*   Currently teaching Gastroenterology at Hanoi Medical University
*   Currently, the doctor has an appointment at Cao Medical Clinic
*   As a speaker for VTV's Clean or Dirty column; For a bright future of JoyFM
*   Regularly participate in and exchange experiences at national and international seminars. The most recent is the Asia-Pacific Gastroenterology Conference in September 2017

###### Books and research works, scientific reports

*   30 scientific articles published in domestic journals
*   Published 05 reference books and pathology books
*   Participating in health topics on newspapers and television
*   As a speaker on VTV's Clean or Dirty column and for a bright day on JoyFM channel .....

###### Examination and treatment

**Examination and treatment of digestive diseases**

*   Gastrointestinal Endoscopy
*   Digestive, abdominal, and rectal diseases
*   Diseases of stomach, duodenum, small intestine

**Diseases of colon and rectum**

*   Hemorrhoids, bleeding hemorrhoids, anal fistula
*   Hepatic tumor
*   Exam, Colonoscopy, Colorectal Cancer Screening Test

**Examination, Endoscopy, Stomach Cancer Screening Test**

*   Examination, Endoscopy, Gastrointestinal Cancer Screening Test
*   Examination, Endoscopy, consultation and treatment of Anal diseases, Internal Hemorrhoids, External Hemorrhoids
*   Gastrointestinal foreign body removal
*   Digestive - hepatobiliary diseases
*   Fat liver disease
*   Stomach ache
*   Stomach bleeding
*   Egastric pain
*   Gastritis
*   Stomach and duodenal ulcer
*   Stomach Helicobacter pylori (HP) infection
*   Gastroesophageal reflux disease (Gerd)
*   Stomach polyp
*   Inflammation of the colon
*   Pseudomembranous colitis
*   Ulcerative colitis
*   Irritable bowel syndrome (spasmodic colitis)
*   Difficulty swallowing
*   Indigestion
*   Hot, sour
*   Constipation
*   Cut tumors under the stomach lining - duodenum, colon

**Examination and treatment of liver and gallbladder diseases**

*   Cholecystitis
*   Pancreatitis
*   Sclerosing cholangitis
*   Alcoholic cirrhosis
*   Cirrhosis
*   Inflammation of the biliary tract
*   Examination, consultation and treatment of viral hepatitis
*   Hepatitis B
*   Liver cancer
*   Screen for hepatitis A, B, C`,
            doctorId: 21,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Thạc sĩ, Bác sĩ Chuyên khoa II Dương Minh Trí</h4>
        <ul>
           <li>Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định</li>
           <li>Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Cơ xương khớp</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định (2010 - 2018)</li>
           <li>Bác sĩ khoa Hồi sức Nội, Bệnh viện Nhân dân Gia Định (2006 - 2009)</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Tốt nghiệp Bác sĩ chuyên khoa II, chuyên ngành Nội khoa, Đại học Y Hà Nội (2020)</li>
           <li>Tốt nghiệp Thạc sĩ chuyên ngành Nội Tổng quát, Đại học Y khoa Phạm Ngọc Thạch (2014)</li>
           <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y Dược TP.HCM (2006)</li>
           <li>Chứng chỉ Sơ bộ Cơ xương khớp, Bệnh viện Chợ Rẫy (2014)</li>
           <li>Tu nghiệp chuyên môn tại các nước Hà Lan, Úc, Bồ Đào Nha, Dubai,...</li>
        </ul>
        <h6>Sách và các công trình nghiên cứu, báo cáo khoa học</h6>
        <ul>
           <li>Tỷ lệ và đặc điểm của hội chứng chuyển hóa trên bệnh nhân gút, Tạp chí y học TP Hồ Chi Minh (2020)</li>
           <li>Đánh giá kết quả điều trị của Tocillizumab (Actemra) ở bệnh nhân viêm khớp dạng thấp, Tạp chí y học TP Hồ Chí Minh (2018)</li>
           <li>Tiến bộ liệu pháp sinh học trong bệnh khớp học, Tạp chí y học TP Hồ Chí Minh (2016)</li>
           <li>Tăng acid uric không triệu chứng, Tạp chí y học TP Hồ Chí Minh (2019)</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <p><strong>Bác sĩ khám và điều trị các mặt bệnh:</strong></p>
        <ul>
           <li>Viêm khớp, thoái hóa khớp: đau khớp, gai trong khớp,...</li>
           <li>Đau gót chân, gai gót chân</li>
           <li>Gai cột sống, thoái hóa cột sống: đau lưng cấp, mãn tính</li>
           <li>Hội chứng ống cổ tay, đau thần kinh tọa: tê tay, tê chân,...</li>
           <li>Viêm gân: ngón tay không co giãn được</li>
           <li>Viêm khớp dạng thấp</li>
           <li>Viêm cột sống dính khớp</li>
           <li>Lupus khớp</li>
           <li>Loãng xương</li>
           <li>Gout</li>
           <li>U hoạch dịch quanh khớp</li>
           <li>Dãn tĩnh mạch chân</li>
           <li>Viêm khớp vẩy nến</li>
        </ul>`,
            contentHtmlEn: `<h4>Master, Specialist Doctor II Duong Minh Tri</h4>
        <ul>
           <li>Deputy Head of Respiratory - Musculoskeletal Department, Gia Dinh People's Hospital</li>
           <li>Many years of experience in examination and treatment of musculoskeletal diseases</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Deputy Head of Respiratory - Musculoskeletal Department, Gia Dinh People's Hospital (2010 - 2018)</li>
           <li>Doctor of Internal Resuscitation Department, Gia Dinh People's Hospital (2006 - 2009)</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Graduated from Doctor of Specialization II, majoring in Internal Medicine, Hanoi Medical University (2020)</li>
           <li>Graduated with Master's degree in General Internal Medicine, Pham Ngoc Thach Medical University (2014)</li>
           <li>Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (2006)</li>
           <li>Preliminary Certificate of Musculoskeletal, Cho Ray Hospital (2014)</li>
           <li>Professional training in countries Netherlands, Australia, Portugal, Dubai,...</li>
        </ul>
        <h6>Books and research works, scientific reports</h6>
        <ul>
           <li>Prevalence and characteristics of metabolic syndrome in gout patients, Medical Journal of Ho Chi Minh City (2020)</li>
           <li>Evaluation of treatment results of Tocillizumab (Actemra) in rheumatoid arthritis patients, Ho Chi Minh City Medical Journal (2018)</li>
           <li>Advances of biological therapy in rheumatology, Ho Chi Minh City Medical Journal (2016)</li>
           <li>Asymptomatic elevation of uric acid, Medical Journal of Ho Chi Minh City (2019)</li>
        </ul>
        <h6>Examination and treatment</h6>
        <p><strong>Doctor examines and treats diseases:</strong></p>
        <ul>
           <li>Arthritis, osteoarthritis: joint pain, spikes in joints,...</li>
           <li>Heel pain, heel spur</li>
           <li>Spine spine, spinal degeneration: acute, chronic back pain</li>
           <li>Carpal tunnel syndrome, sciatica: numbness in hands, feet,...</li>
           <li>Tendonitis: finger is not flexible</li>
           <li>Rheumatoid arthritis</li>
           <li>Ankylosing spondylitis</li>
           <li>Lupus joint</li>
           <li>Osteoporosis</li>
           <li>Gout</li>
           <li>Perio-articular fluid planning</li>
           <li>Varicose veins of the legs</li>
           <li>Psoriatic arthritis</li>
        </ul>`,
            descriptionVi: `Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định
Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Cơ xương khớp
Bác sĩ nhận khám cho bệnh nhân từ 16 tuổi trở lên`,
            descriptionEn: `Deputy Head of Respiratory - Musculoskeletal Department, Gia Dinh People's Hospital
Many years of experience in examination and treatment of musculoskeletal diseases
Doctors receive examination for patients 16 years old and older`,
            contentMarkDownVi: `#### Thạc sĩ, Bác sĩ Chuyên khoa II Dương Minh Trí

*   Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định
*   Nhiều năm kinh nghiệm trong khám và điều trị bệnh lý về Nội Cơ xương khớp

###### Quá trình công tác

*   Phó Trưởng khoa Hô hấp - Cơ xương khớp, Bệnh viện Nhân dân Gia Định (2010 - 2018)
*   Bác sĩ khoa Hồi sức Nội, Bệnh viện Nhân dân Gia Định (2006 - 2009)

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ chuyên khoa II, chuyên ngành Nội khoa, Đại học Y Hà Nội (2020)
*   Tốt nghiệp Thạc sĩ chuyên ngành Nội Tổng quát, Đại học Y khoa Phạm Ngọc Thạch (2014)
*   Tốt nghiệp Bác sĩ đa khoa, Đại học Y Dược TP.HCM (2006)
*   Chứng chỉ Sơ bộ Cơ xương khớp, Bệnh viện Chợ Rẫy (2014)
*   Tu nghiệp chuyên môn tại các nước Hà Lan, Úc, Bồ Đào Nha, Dubai,...

###### Sách và các công trình nghiên cứu, báo cáo khoa học

*   Tỷ lệ và đặc điểm của hội chứng chuyển hóa trên bệnh nhân gút, Tạp chí y học TP Hồ Chi Minh (2020)
*   Đánh giá kết quả điều trị của Tocillizumab (Actemra) ở bệnh nhân viêm khớp dạng thấp, Tạp chí y học TP Hồ Chí Minh (2018)
*   Tiến bộ liệu pháp sinh học trong bệnh khớp học, Tạp chí y học TP Hồ Chí Minh (2016)
*   Tăng acid uric không triệu chứng, Tạp chí y học TP Hồ Chí Minh (2019)

###### Khám và điều trị

**Bác sĩ khám và điều trị các mặt bệnh:**

*   Viêm khớp, thoái hóa khớp: đau khớp, gai trong khớp,...
*   Đau gót chân, gai gót chân
*   Gai cột sống, thoái hóa cột sống: đau lưng cấp, mãn tính
*   Hội chứng ống cổ tay, đau thần kinh tọa: tê tay, tê chân,...
*   Viêm gân: ngón tay không co giãn được
*   Viêm khớp dạng thấp
*   Viêm cột sống dính khớp
*   Lupus khớp
*   Loãng xương
*   Gout
*   U hoạch dịch quanh khớp
*   Dãn tĩnh mạch chân
*   Viêm khớp vẩy nến`,
            contentMarkDownEn: `#### Master, Specialist Doctor II Duong Minh Tri

*   Deputy Head of Respiratory - Musculoskeletal Department, Gia Dinh People's Hospital
*   Many years of experience in examination and treatment of musculoskeletal diseases

###### Working history

*   Deputy Head of Respiratory - Musculoskeletal Department, Gia Dinh People's Hospital (2010 - 2018)
*   Doctor of Internal Resuscitation Department, Gia Dinh People's Hospital (2006 - 2009)

###### Training process

*   Graduated from Doctor of Specialization II, majoring in Internal Medicine, Hanoi Medical University (2020)
*   Graduated with Master's degree in General Internal Medicine, Pham Ngoc Thach Medical University (2014)
*   Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City (2006)
*   Preliminary Certificate of Musculoskeletal, Cho Ray Hospital (2014)
*   Professional training in countries Netherlands, Australia, Portugal, Dubai,...

###### Books and research works, scientific reports

*   Prevalence and characteristics of metabolic syndrome in gout patients, Medical Journal of Ho Chi Minh City (2020)
*   Evaluation of treatment results of Tocillizumab (Actemra) in rheumatoid arthritis patients, Ho Chi Minh City Medical Journal (2018)
*   Advances of biological therapy in rheumatology, Ho Chi Minh City Medical Journal (2016)
*   Asymptomatic elevation of uric acid, Medical Journal of Ho Chi Minh City (2019)

###### Examination and treatment

**Doctor examines and treats diseases:**

*   Arthritis, osteoarthritis: joint pain, spikes in joints,...
*   Heel pain, heel spur
*   Spine spine, spinal degeneration: acute, chronic back pain
*   Carpal tunnel syndrome, sciatica: numbness in hands, feet,...
*   Tendonitis: finger is not flexible
*   Rheumatoid arthritis
*   Ankylosing spondylitis
*   Lupus joint
*   Osteoporosis
*   Gout
*   Perio-articular fluid planning
*   Varicose veins of the legs
*   Psoriatic arthritis`,
            doctorId: 22,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Phó Giáo sư, Tiến sĩ Nguyễn Ngọc Tước</h4>
        <ul>
           <li>Chuyên gia đầu ngành về bệnh lý Nội - Tim mạch</li>
           <li>Danh hiệu Thầy thuốc Ưu tú</li>
           <li>Nguyên Phó Viện trưởng Viện Tim mạch Việt Nam - Bệnh viện Bạch Mai</li>
           <li>Nguyên Trưởng khoa C3 - Viện Tim Mạch Việt Nam - Bệnh viện Bạch Mai</li>
        </ul>
        <h6>Phó Giáo sư khám và điều trị</h6>
        <p><strong>Bệnh lý Tim Mạch</strong></p>
        <ul>
           <li>Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch</li>
           <li>Các bệnh lý Nội Tim mạch</li>
           <li>Bệnh van tim</li>
           <li>Bệnh cơ tim</li>
           <li>Rối loạn nhịp tim</li>
           <li>Khám bệnh mạch máu ngoại biên.</li>
           <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch.</li>
           <li>Tư vấn sử dụng thuốc chống đông máu.</li>
        </ul>
        <p><strong>Bệnh mạch vành</strong></p>
        <ul>
           <li>Bệnh mạch vành</li>
           <li>Bệnh hẹp mạch vành</li>
           <li>Thiểu năng mạch vành</li>
           <li>Xơ vữa động mạch</li>
           <li>Điều trị bệnh mạch vành</li>
        </ul>
        <p><strong>Các triệu chứng bệnh mạch vành:</strong></p>
        <ul>
           <li>Cơn đau thắt ngực là một trong các dấu hiệu hay gặp nhất.</li>
           <li>Đau giữa ngực, sau xương ức hay vùng trước tim.</li>
           <li>Đau có thể lan lên cổ, ra hàm, ra cánh tay, thường gặp nhất là lan ra bên trái, đôi khi đau ở vùng thượng vị.</li>
           <li>Cảm giác bó chặt, thắt nghẹt, đè ép.</li>
           <li>Đôi khi chỉ là cảm giác khó chịu trong ngực</li>
           <li>Có trường hợp lan ra sau lưng, vùng cột sống</li>
        </ul>
        <p><strong>Rối loạn mỡ máu</strong></p>
        <ul>
           <li>Bệnh mỡ máu cao</li>
           <li>Rối loạn mỡ máu</li>
           <li>Tư vấn, điều trị bệnh mỡ máu</li>
           <li>Rối loạn chuyển hóa</li>
           <li>Dinh dưỡng cho bệnh nhân rối loạn mỡ máu.</li>
        </ul>
        <p><strong>Huyết áp</strong></p>
        <ul>
           <li>Bệnh cao huyết áp</li>
           <li>Bệnh huyết áp thấp</li>
        </ul>
        <p><strong>Các trang thiết bị hỗ trợ thăm khám, chẩn đoán</strong></p>
        <ul>
           <li>Máy Siêu âm tim chuyên sâu</li>
           <li>Máy chụp X.Quang tim phổi</li>
           <li>Máy điện tâm đồ</li>
           <li>Xét nghiệm máu (Sinh hóa, Huyết học, Đông máu, Nước tiểu)</li>
        </ul>`,
            contentHtmlEn: `<h4>Associate Professor, Dr.Phil Nguyen Ngoc Tuoc</h4>
        <ul>
           <li>Leader in Cardiovascular Diseases</li>
           <li>Title of Distinguished Physician</li>
           <li>Former Deputy Director of Vietnam Heart Institute - Bach Mai Hospital</li>
           <li>Former Head of Department C3 - Vietnam Heart Institute - Bach Mai Hospital</li>
        </ul>
        <h6>Associate Professor exploration and treatment</h6>
        <p><strong>Cardiovascular Disease</strong></p>
        <ul>
           <li>Examination, consultation, treatment specializing in Cardiovascular diseases</li>
           <li>Internal Cardiovascular diseases</li>
           <li>Valvular disease</li>
           <li>Myocardial disease</li>
           <li>Arrhythmia</li>
           <li>Peripheral vascular examination.</li>
           <li>Advice, early detection and prevention of cardiovascular diseases.</li>
           <li>Advice on anticoagulant use.</li>
        </ul>
        <p><strong>Coronary artery disease</strong></p>
        <ul>
           <li>Coronary artery disease</li>
           <li>Coronary artery disease</li>
           <li>Coronary insufficiency</li>
           <li>Atherosclerosis</li>
           <li>Treatment of coronary artery disease</li>
        </ul>
        <p><strong>Coronary artery disease symptoms:</strong></p>
        <ul>
           <li>Angina pain is one of the most common symptoms.</li>
           <li>Pain in the center of the chest, behind the breastbone, or in front of the heart.</li>
           <li>Pain may radiate to the neck, jaw, or arm, most commonly on the left side, sometimes in the epigastrium.</li>
           <li>Feeling tight, suffocating, squeezing.</li>
           <li>Sometimes it's just an uncomfortable feeling in your chest</li>
           <li>There are cases that spread to the back and spine</li>
        </ul>
        <p><strong>Dyslipidemia</strong></p>
        <ul>
           <li>High cholesterol</li>
           <li>Dyslipidemia</li>
           <li>Consultation and treatment of hyperlipidemia</li>
           <li>Metabolic disorder</li>
           <li>Nutrition for patients with dyslipidemia.</li>
        </ul>
        <p><strong>Blood pressure</strong></p>
        <ul>
           <li>High blood pressure</li>
           <li>Low blood pressure</li>
        </ul>
        <p><strong>Equipment supporting examination and diagnosis</strong></p>
        <ul>
           <li>Intensive Echocardiogram</li>
           <li>Cardiopulmonary X-ray machine</li>
           <li>Electrocardiogram</li>
           <li>Blood Tests (Biochemistry, Hematology, Coagulation, Urine)</li>
        </ul>`,
            descriptionVi: `Nguyên Phó viện trưởng Viện Tim mạch Việt Nam
Chuyên gia đầu ngành về bệnh lý Nội tim mạch`,
            descriptionEn: `Former Deputy Director of Vietnam Heart Institute
Specialist in Cardiovascular Diseases`,
            contentMarkDownVi: `#### Phó Giáo sư, Tiến sĩ Nguyễn Ngọc Tước

*   Chuyên gia đầu ngành về bệnh lý Nội - Tim mạch
*   Danh hiệu Thầy thuốc Ưu tú
*   Nguyên Phó Viện trưởng Viện Tim mạch Việt Nam - Bệnh viện Bạch Mai
*   Nguyên Trưởng khoa C3 - Viện Tim Mạch Việt Nam - Bệnh viện Bạch Mai

###### Phó Giáo sư khám và điều trị

**Bệnh lý Tim Mạch**

*   Khám, tư vấn, điều trị chuyên sâu các bệnh về Tim mạch
*   Các bệnh lý Nội Tim mạch
*   Bệnh van tim
*   Bệnh cơ tim
*   Rối loạn nhịp tim
*   Khám bệnh mạch máu ngoại biên.
*   Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch.
*   Tư vấn sử dụng thuốc chống đông máu.

**Bệnh mạch vành**

*   Bệnh mạch vành
*   Bệnh hẹp mạch vành
*   Thiểu năng mạch vành
*   Xơ vữa động mạch
*   Điều trị bệnh mạch vành

**Các triệu chứng bệnh mạch vành:**

*   Cơn đau thắt ngực là một trong các dấu hiệu hay gặp nhất.
*   Đau giữa ngực, sau xương ức hay vùng trước tim.
*   Đau có thể lan lên cổ, ra hàm, ra cánh tay, thường gặp nhất là lan ra bên trái, đôi khi đau ở vùng thượng vị.
*   Cảm giác bó chặt, thắt nghẹt, đè ép.
*   Đôi khi chỉ là cảm giác khó chịu trong ngực
*   Có trường hợp lan ra sau lưng, vùng cột sống

**Rối loạn mỡ máu**

*   Bệnh mỡ máu cao
*   Rối loạn mỡ máu
*   Tư vấn, điều trị bệnh mỡ máu
*   Rối loạn chuyển hóa
*   Dinh dưỡng cho bệnh nhân rối loạn mỡ máu.

**Huyết áp**

*   Bệnh cao huyết áp
*   Bệnh huyết áp thấp

**Các trang thiết bị hỗ trợ thăm khám, chẩn đoán**

*   Máy Siêu âm tim chuyên sâu
*   Máy chụp X.Quang tim phổi
*   Máy điện tâm đồ
*   Xét nghiệm máu (Sinh hóa, Huyết học, Đông máu, Nước tiểu)`,
            contentMarkDownEn: `#### Associate Professor, Dr.Phil Nguyen Ngoc Tuoc

*   Leader in Cardiovascular Diseases
*   Title of Distinguished Physician
*   Former Deputy Director of Vietnam Heart Institute - Bach Mai Hospital
*   Former Head of Department C3 - Vietnam Heart Institute - Bach Mai Hospital

###### Associate Professor exploration and treatment

**Cardiovascular Disease**

*   Examination, consultation, treatment specializing in Cardiovascular diseases
*   Internal Cardiovascular diseases
*   Valvular disease
*   Myocardial disease
*   Arrhythmia
*   Peripheral vascular examination.
*   Advice, early detection and prevention of cardiovascular diseases.
*   Advice on anticoagulant use.

**Coronary artery disease**

*   Coronary artery disease
*   Coronary artery disease
*   Coronary insufficiency
*   Atherosclerosis
*   Treatment of coronary artery disease

**Coronary artery disease symptoms:**

*   Angina pain is one of the most common symptoms.
*   Pain in the center of the chest, behind the breastbone, or in front of the heart.
*   Pain may radiate to the neck, jaw, or arm, most commonly on the left side, sometimes in the epigastrium.
*   Feeling tight, suffocating, squeezing.
*   Sometimes it's just an uncomfortable feeling in your chest
*   There are cases that spread to the back and spine

**Dyslipidemia**

*   High cholesterol
*   Dyslipidemia
*   Consultation and treatment of hyperlipidemia
*   Metabolic disorder
*   Nutrition for patients with dyslipidemia.

**Blood pressure**

*   High blood pressure
*   Low blood pressure

**Equipment supporting examination and diagnosis**

*   Intensive Echocardiogram
*   Cardiopulmonary X-ray machine
*   Electrocardiogram
*   Blood Tests (Biochemistry, Hematology, Coagulation, Urine)`,
            doctorId: 23,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>PGS, TS, Giảng viên cao cấp Trần Hữu Bình</h4>
        <ul>
           <li>Danh hiệu Thầy thuốc Nhân dân</li>
           <li>Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh</li>
           <li>Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai</li>
           <li>Nguyên Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>PGS.TS.BS Khám bệnh tại Trung tâm Y khoa số 1, Bệnh viện Đại học Y Hà Nội</li>
           <li>Chủ trì Hội chẩn lâm sàng bệnh nhân Tâm thần tại Viện Sức khỏe Tâm thần, Bệnh viện Bạch Mai</li>
           <li>Đào tạo (giảng dạy, hướng dẫn, chấm luận án) Tiến sĩ, Thạc sĩ, Bác sĩ chuyên khoa II, Bác sĩ nội trú chuyên ngành Tâm thần, Y tế công cộng của Trường Đại học Y Hà Nội</li>
           <li>Viện trưởng Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (2008 – 2011)</li>
           <li>Trưởng khoa điều trị Nghiện chất Viện Sức khoẻ Tâm thần, Bệnh viện Bạch Mai (2010 – 2014)</li>
           <li>Trưởng khoa điều trị loạn thần Nam Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (1995 – 2008)</li>
           <li>Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội (1995 - 2014)</li>
           <li>Bác sĩ – cán bộ giảng dạy;Bộ môn Tâm thần Trường Đại học Y Hà Nội (1978 - 1994)</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Giảng viên cao cấp chuyên ngành Tâm thần, Bộ Giáo dục và đào tạo (2014)</li>
           <li>Phó Giáo sư chuyên ngành Tâm thần, Bộ Giáo dục và đào tạo (2007)</li>
           <li>Tiến sĩ chuyên ngành Tâm thần, Trường Đại học Y Hà Nội (2003)</li>
        </ul>
        <h6>Sách và các công trình nghiên cứu khoa học</h6>
        <ul>
           <li>Tham gia biên soạn chủ biên và đồng chủ biên 16 đầu sách là giáo trình giảng dạy, sách chuyên khảo chuyên ngành Tâm thần học và y học nói chung (2003 - 2018)</li>
           <li>Trên 50 công trình nghiên cứu khoa học đăng tải trong các tạp chí khoa học có uy tín (Tạp chí Nghiên cứu khoa học Đại học Y Hà Nội, tạp chí Tổng hội Y Dược học Việt Nam, tạp chí Y học thực hành Bộ Y tế, tạp chí Hội Tâm thần học Việt Nam). (1992 - 2020)</li>
           <li>Hướng dẫn bảo vệ thành công 31 luận án Tiến sĩ, luận văn Thạc sĩ, Bác sĩ chuyên khoa cấp 2, Bác sĩ nội trú Bệnh viện, Y tế công cộng Đại học Y Hà Nội (2003 - 2020)</li>
        </ul>
        <h6>Thành viên các hội khoa học, tổ chức chuyên môn</h6>
        <ul>
           <li>Ban chấp hành Hội Tâm thần học Việt Nam</li>
           <li>Phó Chủ tịch Hội đồng khoa học Viện Nghiên cứu Điều trị các bệnh hiểm nghèo</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <p><strong>Các rối loạn liên quan đến Stress và dạng cơ thể:</strong></p>
        <ul>
           <li>Đau dai dẳng các loại: Đau đầu, đau ngực, đau bụng, đau mọi vị trí không xác định trong cơ thể.</li>
           <li>Rối loạn thần kinh thực vật</li>
           <li>Rối loạn hệ thống tim mạch: Tim đập nhanh, hồi hộp đánh trống ngực, cảm giác đè nặng ngực, nghẹt thở, huyết áp dao động.</li>
           <li>Rối loạn dạ dày - ruột: đau bụng, đầy hơi, trào ngược dạ dày, trào ngược thực quản.</li>
           <li>Rối loạn hệ thống hô hấp: Tức ngực, khó thở, đoản hơi.</li>
           <li>Rối loạn hệ thống tiết niệu - sinh dục: Đái nhiều, đái nóng, đái dắt; giảm ham muốn tình dục, nam rối loạn cương, nữ rối loạn kinh nguyệt.</li>
        </ul>
        <p><strong>Rối loạn sự thích ứng:</strong></p>
        <ul>
           <li>Trầm cảm: Buồn chán, mất thích thú, mệt mỏi, vô lực, giảm tập trung chú ý, kém tự tin, nhìn tương lai ảm đạm và bi quan.</li>
           <li>Lo âu, rối loạn cảm xúc và hành vi,…</li>
           <li>Các rối loạn cảm xúc: Trầm cảm, hưng cảm, cảm xúc dao động, …</li>
           <li>Các rối loạn tâm ký nặng: Hoang tưởng, Ảo giác, rối loạn phân liệt,…</li>
           <li>Trẻ em: Tự kỷ, tăng động giảm chú ý, tíc, đái dầm, ỉa đùn, nói lắp, trầm cảm, rối loạn cảm xúc và hành vi, rối loạn vận động định hình.</li>
           <li>Người già: Trầm cảm, sa sút trí tuệ, lú lẫn, hoang tưởng, ảo giác.></li>
           <li>Các vấn đề tâm lý ở phụ nữ các giai đoạn: >Dậy thì, mang thai, sinh đẻ, mãn kinh,…</li>
           <li>Rối loạn ăn uống: >Chán ăn, ăn vô độ, béo phì.></li>
           <li>Rối loạn tình dục: Mất ham muốn, xuất tinh sớm, bất lực, lãnh cảm, đau khi giao hợp, rối loạn phân định giới tính,…</li>
           <li>Các vấn đề về nghiện: Nghiện rượu, ma tuý, Game Online, Internet, …</li>
        </ul>`,
            contentHtmlEn: `<h4>Professor, Dr.Phil, Senior Lecturer Tran Huu Binh</h4>
        <ul>
           <li>Title of People's Physician</li>
           <li>Top doctor specializing in Psychiatry</li>
           <li>Former Director of National Institute of Mental Health, Bach Mai Hospital</li>
           <li>Former Vice President of Psychiatry Department, Hanoi Medical University</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Associate Professor, Dr.Phil, Doctor Medical examination at Medical Center No. 1, Hanoi Medical University Hospital</li>
           <li>Chairman of Clinical Consultation for Psychiatric Patients at Mental Health Institute, Bach Mai Hospital</li>
           <li>Training (teaching, guiding, marking thesis) PhD, Master, Specialist II, Resident Doctor of Psychiatry, Public Health of Hanoi Medical University</li>
           <li>Director of Institute of Mental Health, Bach Mai Hospital (2008 – 2011)</li>
           <li>Head of Substance Treatment Department, Institute of Mental Health, Bach Mai Hospital (2010 - 2014)</li>
           <li>Head of Mental Health Department, Southern Institute of Mental Health, Bach Mai Hospital (1995 – 2008)</li>
           <li>Deputy Dean of Psychiatry Department, Hanoi Medical University (1995 - 2014)</li>
           <li>Doctor – teaching staff; Psychiatry Department of Hanoi Medical University (1978 - 1994)</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Senior Lecturer in Psychiatry, Ministry of Education and Training (2014)</li>
           <li>Associate Professor of Psychiatry, Ministry of Education and Training (2007)</li>
           <li>Doctor of Psychiatry, Hanoi Medical University (2003)</li>
        </ul>
        <h6>Books and scientific works</h6>
        <ul>
           <li>Participated in compiling, editing and co-editing 16 books, which are teaching textbooks and monographs specialized in Psychiatry and medicine in general (2003 - 2018)</li>
           <li>Over 50 scientific research works published in prestigious scientific journals (Scientific Research Journal of Hanoi Medical University, Journal of Vietnam General Association of Medicine and Pharmacy, Journal of Practical Medicine). Ministry of Health, Journal of the Vietnam Psychiatric Association). (1992 - 2020)</li>
           <li>Guide to successfully defend 31 Doctoral theses, Master theses, Level 2 Specialist Doctor, Hospital Resident Doctor, Public Health Hanoi Medical University (2003 - 2020)</li>
        </ul>
        <h6>Members of scientific associations and professional organizations</h6>
        <ul>
           <li>Executive Committee of the Vietnam Psychiatric Association</li>
           <li>Vice Chairman of the Scientific Council of the Research Institute for Treatment of Critical Illnesses</li>
        </ul>
        <h6>Examination and treatment</h6>
        <p><strong>Stress-related disorders and body type:</strong></p>
        <ul>
           <li>Persistent pain of all kinds: Headache, chest pain, abdominal pain, pain in any unspecified location in the body.</li>
           <li>Vegetative nervous disorder</li>
           <li>Disorders of the cardiovascular system: Tachycardia, palpitations, feeling of chest pressure, suffocation, blood pressure fluctuations.</li>
           <li>Gastrointestinal disorders: abdominal pain, flatulence, gastroesophageal reflux, esophageal reflux.</li>
           <li>Respiratory system disorders: Chest tightness, shortness of breath, shortness of breath.</li>
           <li>Urinary and genitourinary system disorders: frequent urination, hot urination, urinary incontinence; decreased sex drive, male erectile dysfunction, female menstrual disorder.</li>
        </ul>
        <p><strong>Adaptation disorder:</strong></p>
        <ul>
           <li>Depression: Boredom, loss of interest, fatigue, powerlessness, decreased attention span, low self-confidence, bleak and pessimistic future.</li>
           <li>Anxiety, emotional and behavioral disorders,…</li>
           <li>Emotional Disorders: Depression, mania, fluctuating emotions, …</li>
           <li>Severe psychometric disorders: Paranoia, hallucinations, schizophrenia,…</li>
           <li>Children: Autism, Attention Deficit Hyperactivity Disorder, Tickness, Bedwetting, Diarrhea, Stuttering, Depression, Emotional and Behavioral Disorders, Normative Movement Disorder.</li>
           <li>Old people: Depression, dementia, confusion, paranoia, hallucinations.></li>
           <li>Psychological problems in women at different stages: >puberty, pregnancy, childbirth, menopause,…</li>
           <li>Eating Disorders: >Anorexia, bulimia, obesity.></li>
           <li>Sexual disorders: Loss of desire, premature ejaculation, impotence, frigidity, pain during intercourse, gender identity disorder,…</li>
           <li>Addiction problems: Addiction to alcohol, drugs, Online games, Internet, …</li>
        </ul>`,
            descriptionVi: `Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh
Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai
Nguyên Phó Chủ nhiệm Bộ môn Tâm thần trường Đại học Y Hà Nội`,
            descriptionEn: `Doctor specializing in Psychiatry, Psychiatry
Former Director of the National Institute of Mental Health, Bach Mai Hospital
Former Vice Chairman of the Department of Psychiatry, Hanoi Medical University`,
            contentMarkDownVi: `#### PGS, TS, Giảng viên cao cấp Trần Hữu Bình

   *   Danh hiệu Thầy thuốc Nhân dân
   *   Bác sĩ đầu ngành chuyên khoa Tâm thần, tâm bệnh
   *   Nguyên Viện trưởng Viện Sức khoẻ Tâm thần quốc gia, Bệnh viện Bạch Mai
   *   Nguyên Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội
   
   ###### Quá trình công tác
   
   *   PGS.TS.BS Khám bệnh tại Trung tâm Y khoa số 1, Bệnh viện Đại học Y Hà Nội
   *   Chủ trì Hội chẩn lâm sàng bệnh nhân Tâm thần tại Viện Sức khỏe Tâm thần, Bệnh viện Bạch Mai
   *   Đào tạo (giảng dạy, hướng dẫn, chấm luận án) Tiến sĩ, Thạc sĩ, Bác sĩ chuyên khoa II, Bác sĩ nội trú chuyên ngành Tâm thần, Y tế công cộng của Trường Đại học Y Hà Nội
   *   Viện trưởng Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (2008 – 2011)
   *   Trưởng khoa điều trị Nghiện chất Viện Sức khoẻ Tâm thần, Bệnh viện Bạch Mai (2010 – 2014)
   *   Trưởng khoa điều trị loạn thần Nam Viện Sức khoẻ Tâm thần , Bệnh viện Bạch Mai (1995 – 2008)
   *   Phó Chủ nhiệm Bộ môn Tâm thần, Trường Đại học Y Hà Nội (1995 - 2014)
   *   Bác sĩ – cán bộ giảng dạy;Bộ môn Tâm thần Trường Đại học Y Hà Nội (1978 - 1994)
   
   ###### Quá trình đào tạo
   
   *   Giảng viên cao cấp chuyên ngành Tâm thần, Bộ Giáo dục và đào tạo (2014)
   *   Phó Giáo sư chuyên ngành Tâm thần, Bộ Giáo dục và đào tạo (2007)
   *   Tiến sĩ chuyên ngành Tâm thần, Trường Đại học Y Hà Nội (2003)
   
   ###### Sách và các công trình nghiên cứu khoa học
   
   *   Tham gia biên soạn chủ biên và đồng chủ biên 16 đầu sách là giáo trình giảng dạy, sách chuyên khảo chuyên ngành Tâm thần học và y học nói chung (2003 - 2018)
   *   Trên 50 công trình nghiên cứu khoa học đăng tải trong các tạp chí khoa học có uy tín (Tạp chí Nghiên cứu khoa học Đại học Y Hà Nội, tạp chí Tổng hội Y Dược học Việt Nam, tạp chí Y học thực hành Bộ Y tế, tạp chí Hội Tâm thần học Việt Nam). (1992 - 2020)
   *   Hướng dẫn bảo vệ thành công 31 luận án Tiến sĩ, luận văn Thạc sĩ, Bác sĩ chuyên khoa cấp 2, Bác sĩ nội trú Bệnh viện, Y tế công cộng Đại học Y Hà Nội (2003 - 2020)
   
   ###### Thành viên các hội khoa học, tổ chức chuyên môn
   
   *   Ban chấp hành Hội Tâm thần học Việt Nam
   *   Phó Chủ tịch Hội đồng khoa học Viện Nghiên cứu Điều trị các bệnh hiểm nghèo
   
   ###### Khám và điều trị
   
   **Các rối loạn liên quan đến Stress và dạng cơ thể:**
   
   *   Đau dai dẳng các loại: Đau đầu, đau ngực, đau bụng, đau mọi vị trí không xác định trong cơ thể.
   *   Rối loạn thần kinh thực vật
   *   Rối loạn hệ thống tim mạch: Tim đập nhanh, hồi hộp đánh trống ngực, cảm giác đè nặng ngực, nghẹt thở, huyết áp dao động.
   *   Rối loạn dạ dày - ruột: đau bụng, đầy hơi, trào ngược dạ dày, trào ngược thực quản.
   *   Rối loạn hệ thống hô hấp: Tức ngực, khó thở, đoản hơi.
   *   Rối loạn hệ thống tiết niệu - sinh dục: Đái nhiều, đái nóng, đái dắt; giảm ham muốn tình dục, nam rối loạn cương, nữ rối loạn kinh nguyệt.
   
   **Rối loạn sự thích ứng:**
   
   *   Trầm cảm: Buồn chán, mất thích thú, mệt mỏi, vô lực, giảm tập trung chú ý, kém tự tin, nhìn tương lai ảm đạm và bi quan.
   *   Lo âu, rối loạn cảm xúc và hành vi,…
   *   Các rối loạn cảm xúc: Trầm cảm, hưng cảm, cảm xúc dao động, …
   *   Các rối loạn tâm ký nặng: Hoang tưởng, Ảo giác, rối loạn phân liệt,…
   *   Trẻ em: Tự kỷ, tăng động giảm chú ý, tíc, đái dầm, ỉa đùn, nói lắp, trầm cảm, rối loạn cảm xúc và hành vi, rối loạn vận động định hình.
   *   Người già: Trầm cảm, sa sút trí tuệ, lú lẫn, hoang tưởng, ảo giác.>
   *   Các vấn đề tâm lý ở phụ nữ các giai đoạn: >Dậy thì, mang thai, sinh đẻ, mãn kinh,…
   *   Rối loạn ăn uống: >Chán ăn, ăn vô độ, béo phì.>
   *   Rối loạn tình dục: Mất ham muốn, xuất tinh sớm, bất lực, lãnh cảm, đau khi giao hợp, rối loạn phân định giới tính,…
   *   Các vấn đề về nghiện: Nghiện rượu, ma tuý, Game Online, Internet, …`,
            contentMarkDownEn: `#### Professor, Dr.Phil, Senior Lecturer Tran Huu Binh

*   Title of People's Physician
*   Top doctor specializing in Psychiatry
*   Former Director of National Institute of Mental Health, Bach Mai Hospital
*   Former Vice President of Psychiatry Department, Hanoi Medical University

###### Working history

*   Associate Professor, Dr.Phil, Doctor Medical examination at Medical Center No. 1, Hanoi Medical University Hospital
*   Chairman of Clinical Consultation for Psychiatric Patients at Mental Health Institute, Bach Mai Hospital
*   Training (teaching, guiding, marking thesis) PhD, Master, Specialist II, Resident Doctor of Psychiatry, Public Health of Hanoi Medical University
*   Director of Institute of Mental Health, Bach Mai Hospital (2008 – 2011)
*   Head of Substance Treatment Department, Institute of Mental Health, Bach Mai Hospital (2010 - 2014)
*   Head of Mental Health Department, Southern Institute of Mental Health, Bach Mai Hospital (1995 – 2008)
*   Deputy Dean of Psychiatry Department, Hanoi Medical University (1995 - 2014)
*   Doctor – teaching staff; Psychiatry Department of Hanoi Medical University (1978 - 1994)

###### Training process

*   Senior Lecturer in Psychiatry, Ministry of Education and Training (2014)
*   Associate Professor of Psychiatry, Ministry of Education and Training (2007)
*   Doctor of Psychiatry, Hanoi Medical University (2003)

###### Books and scientific works

*   Participated in compiling, editing and co-editing 16 books, which are teaching textbooks and monographs specialized in Psychiatry and medicine in general (2003 - 2018)
*   Over 50 scientific research works published in prestigious scientific journals (Scientific Research Journal of Hanoi Medical University, Journal of Vietnam General Association of Medicine and Pharmacy, Journal of Practical Medicine). Ministry of Health, Journal of the Vietnam Psychiatric Association). (1992 - 2020)
*   Guide to successfully defend 31 Doctoral theses, Master theses, Level 2 Specialist Doctor, Hospital Resident Doctor, Public Health Hanoi Medical University (2003 - 2020)

###### Members of scientific associations and professional organizations

*   Executive Committee of the Vietnam Psychiatric Association
*   Vice Chairman of the Scientific Council of the Research Institute for Treatment of Critical Illnesses

###### Examination and treatment

**Stress-related disorders and body type:**

*   Persistent pain of all kinds: Headache, chest pain, abdominal pain, pain in any unspecified location in the body.
*   Vegetative nervous disorder
*   Disorders of the cardiovascular system: Tachycardia, palpitations, feeling of chest pressure, suffocation, blood pressure fluctuations.
*   Gastrointestinal disorders: abdominal pain, flatulence, gastroesophageal reflux, esophageal reflux.
*   Respiratory system disorders: Chest tightness, shortness of breath, shortness of breath.
*   Urinary and genitourinary system disorders: frequent urination, hot urination, urinary incontinence; decreased sex drive, male erectile dysfunction, female menstrual disorder.

**Adaptation disorder:**

*   Depression: Boredom, loss of interest, fatigue, powerlessness, decreased attention span, low self-confidence, bleak and pessimistic future.
*   Anxiety, emotional and behavioral disorders,…
*   Emotional Disorders: Depression, mania, fluctuating emotions, …
*   Severe psychometric disorders: Paranoia, hallucinations, schizophrenia,…
*   Children: Autism, Attention Deficit Hyperactivity Disorder, Tickness, Bedwetting, Diarrhea, Stuttering, Depression, Emotional and Behavioral Disorders, Normative Movement Disorder.
*   Old people: Depression, dementia, confusion, paranoia, hallucinations.>
*   Psychological problems in women at different stages: >puberty, pregnancy, childbirth, menopause,…
*   Eating Disorders: >Anorexia, bulimia, obesity.>
*   Sexual disorders: Loss of desire, premature ejaculation, impotence, frigidity, pain during intercourse, gender identity disorder,…
*   Addiction problems: Addiction to alcohol, drugs, Online games, Internet, …`,
            doctorId: 24,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Bác sĩ Chuyên khoa II Nguyễn Ngọc Phấn</h4>
        <ul>
           <li>Nguyên bác sĩ Tai Mũi Họng Bệnh viện Đa khoa Hồng Ngọc</li>
           <li>Nguyên Phó trưởng khoa Tai Mũi Họng, Bệnh viện Giao thông vận tải Trung ương</li>
           <li>Hiện đang công tác tại Bệnh viện Đại học Y Hà Nội</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Tốt nghiệp chuyên khoa I Tai Mũi Họng, Đại học Y Hà Nội (1987)</li>
           <li>Tốt nghiệp chuyên khoa II Tai Mũi Họng, Đại học Y Hà Nội (2008)</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Hiện đang công tác tại Bệnh viện Đại học Y Hà Nội</li>
           <li>Bác sĩ Phụ trách khoa Tai Mũi Họng, Bệnh viện Giao thông vận tải Trung ương.</li>
           <li>Nguyên Phó trưởng khoa Tai Mũi Họng, Bệnh viện Giao thông vận tải Trung ương.</li>
           <li>Bác sĩ Chuyên khoa Tai Mũi Họng, Bệnh viện Đa khoa Hồng Ngọc.</li>
           <li>Bác sĩ Chuyên khoa Tai Mũi Họng, Bệnh viện Ung Bướu Hưng Việt.</li>
        </ul>
        <h6>Sách về tai mũi họng </h6>
        <ul>
           <li>Kỹ thuật mổ tai kiểu Valhassel cải tiến (2006-2008)</li>
           <li>Viêm tai giữa (2010)</li>
           <li>Viêm VA (2011)</li>
           <li>Viêm mũi xoang (2012)</li>
           <li>Trả lời triệu chứng bệnh tai mũi họng (2018)</li>
        </ul>
        <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
        <ul>
           <li>Hội viên hội TMH Hà Nội</li>
           <li>Hội viên hội TMH Miền Nam</li>
           <li>Hội viên hội TMH Việt Nam</li>
        </ul>
        <h6>Tham gia các chuyên đề sức khỏe</h6>
        <ul>
           <li>Sức khỏe người cao tuổi</li>
           <li>Tư vấn sức khỏe 24h</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <ul>
           <li>Viêm mũi xoang: Ngạt mũi, chảy mũi, đờm họng,…</li>
           <li>Viêm mũi xoang dị ứng: Hắt hơi , ngạt mũi, chảy mũi…</li>
           <li>Viêm mũi xoang trẻ em: Ngạt mũi, chảy mũi, ho…</li>
           <li>Viêm VA: Chảy mũi, ngạt mũi, ho…</li>
           <li>Viêm amidan: Hay viêm họng, ho…</li>
           <li>Thủng màng nhĩ ( vá nhĩ nội soi): Ù tai, nghe kém</li>
           <li>Viêm tai giữa tổn thương xương con ( thay thế) xương con: Ù tai, nghe kém nặng xốp xơ tai ( phẫu thuật ),Ù tai nghe kém</li>
           <li>Giảm áp dây TK VII, nối dây VII Liệt mặt….</li>
           <li>Viêm tai giữa ứ dịch, xẹp nhĩ: Nghe kém, ù tai</li>
           <li>U vòm</li>
           <li>U hốc mũi</li>
           <li>Hạt xơ dây thanh, u nang dây thanh, polyp dây thanh, ung thư dây thanh Khan tiếng, nói mệt, soi có bệnh tích</li>
           <li>Ung thư vùng tai mũi họng</li>
           <li>Viêm họng mạn tính Ngứa họng, ho…</li>
           <li>HC trào ngược dạ dày thực quản</li>
           <li>Ngủ ngáy</li>
           <li>Chảy máu mũi</li>
           <li>Điếc đột ngột: Ù tai nghe kém đột ngột trong vòng vài ba ngày</li>
           <li>Viêm mũi sơ sinh Ngạt mũi, chảy mũi</li>
           <li>Dị vật mũi, họng, thanh quản, thực quản</li>
           <li>Nấm ống tai, viêm da khô ống tai, ráy tai</li>
           <li>Viêm loét lưỡi, ung thư lưỡi</li>
        </ul>`,
            contentHtmlEn: `<h4>Specialist II Doctor Nguyen Ngoc Phan</h4>
        <ul>
           <li>Former ENT doctor at Hong Ngoc General Hospital</li>
           <li>Former Deputy Head of Department of Otolaryngology, Central Hospital for Transport</li>
           <li>Currently working at Hanoi Medical University Hospital</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Graduated in I Ear, Nose and Throat major, Hanoi Medical University (1987)</li>
           <li>Graduated in Otorhinolaryngology II, Hanoi Medical University (2008)</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Currently working at Hanoi Medical University Hospital</li>
           <li>Doctor in charge of Department of Otolaryngology, Hospital Transportation Central.</li>
           <li>Former Deputy Head of Department of Otolaryngology, National Hospital of Transport.</li>
           <li>Ear, Nose and Throat Specialist, Hong Ngoc General Hospital.</li>
           <li>Ear, Nose and Throat Specialist, Hung Viet Oncology Hospital.</li>
        </ul>
        <h6>Books about ENT </h6>
        <ul>
           <li>Advanced Valhassel Ear Surgery (2006-2008)</li>
           <li>Otitis media (2010)</li>
           <li>Vaginitis (2011)</li>
           <li>Inflammation of the nose and sinuses (2012)</li>
           <li>Answer symptoms of ENT disease (2018)</li>
        </ul>
        <h6>Members of scientific associations and professional organizations</h6>
        <ul>
           <li>Member of Hanoi Trade Union Association</li>
           <li>Member of Southern Trade Association</li>
           <li>Member of Vietnam Trade Union Association</li>
        </ul>
        <h6>Participate in health topics</h6>
        <ul>
           <li>Health of the elderly</li>
           <li>24 hour health consultation</li>
        </ul>
        <h6>Examination and treatment</h6>
        <ul>
           <li>Inflammation of the nose and sinuses: stuffy nose, runny nose, phlegm in the throat,…</li>
           <li>Allergic Rhinitis: Sneezing, stuffy nose, runny nose…</li>
           <li>Children's sinusitis: stuffy nose, runny nose, cough...</li>
           <li>Vaginitis: Runny nose, stuffy nose, cough…</li>
           <li>Tonsillitis: Or sore throat, cough…</li>
           <li>Perforated tympanic membrane (endoscopic tympanic patch): Tinnitus, hearing loss</li>
           <li>Otitis media with damage to the fibula (replacement) of the ossicles: Tinnitus, severe hearing loss, otosclerosis (surgery), Ù hearing loss</li>
           <li>Depressurize 7th nerve wire, connect VII face paralysis….</li>
           <li>Otitis media with fluid retention, atrial collapse: Hearing loss, tinnitus</li>
           <li>Domestic tumor</li>
           <li>Nasal cavity tumor</li>
           <li>Vocal cord nodules, vocal cord cysts, vocal cord polyps, vocal cord cancer.
           <li>Ear, nose and throat cancer</li>
           <li>Chronic sore throat Sore throat, cough…</li>
           <li>Gastroesophageal reflux disease</li>
           <li>Snoring</li>
           <li>Nosebleed</li>
           <li>Sudden deafness: sudden loss of hearing within a few days</li>
           <li>Newborn rhinitis: stuffy nose, runny nose</li>
           <li>Foreign body in nose, throat, larynx, esophagus</li>
           <li>Auricular fungus, ear canal dry dermatitis, earwax</li>
           <li>Lung ulcer, tongue cancer</li>
        </ul>`,
            descriptionVi: `Nguyên bác sĩ Tai Mũi Họng Bệnh viện Đa khoa Hồng Ngọc
Hiện đang công tác tại Bệnh viện Đại học Y Hà Nội`,
            descriptionEn: `Former Ear, Nose Throat Doctor at Hong Ngoc General Hospital
Currently working at Hanoi Medical University Hospital`,
            contentMarkDownVi: `#### Bác sĩ Chuyên khoa II Nguyễn Ngọc Phấn

*   Nguyên bác sĩ Tai Mũi Họng Bệnh viện Đa khoa Hồng Ngọc
*   Nguyên Phó trưởng khoa Tai Mũi Họng, Bệnh viện Giao thông vận tải Trung ương
*   Hiện đang công tác tại Bệnh viện Đại học Y Hà Nội

###### Quá trình đào tạo

*   Tốt nghiệp chuyên khoa I Tai Mũi Họng, Đại học Y Hà Nội (1987)
*   Tốt nghiệp chuyên khoa II Tai Mũi Họng, Đại học Y Hà Nội (2008)

###### Quá trình công tác

*   Hiện đang công tác tại Bệnh viện Đại học Y Hà Nội
*   Bác sĩ Phụ trách khoa Tai Mũi Họng, Bệnh viện Giao thông vận tải Trung ương.
*   Nguyên Phó trưởng khoa Tai Mũi Họng, Bệnh viện Giao thông vận tải Trung ương.
*   Bác sĩ Chuyên khoa Tai Mũi Họng, Bệnh viện Đa khoa Hồng Ngọc.
*   Bác sĩ Chuyên khoa Tai Mũi Họng, Bệnh viện Ung Bướu Hưng Việt.

###### Sách về tai mũi họng

*   Kỹ thuật mổ tai kiểu Valhassel cải tiến (2006-2008)
*   Viêm tai giữa (2010)
*   Viêm VA (2011)
*   Viêm mũi xoang (2012)
*   Trả lời triệu chứng bệnh tai mũi họng (2018)

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Hội viên hội TMH Hà Nội
*   Hội viên hội TMH Miền Nam
*   Hội viên hội TMH Việt Nam

###### Tham gia các chuyên đề sức khỏe

*   Sức khỏe người cao tuổi
*   Tư vấn sức khỏe 24h

###### Khám và điều trị

*   Viêm mũi xoang: Ngạt mũi, chảy mũi, đờm họng,…
*   Viêm mũi xoang dị ứng: Hắt hơi , ngạt mũi, chảy mũi…
*   Viêm mũi xoang trẻ em: Ngạt mũi, chảy mũi, ho…
*   Viêm VA: Chảy mũi, ngạt mũi, ho…
*   Viêm amidan: Hay viêm họng, ho…
*   Thủng màng nhĩ ( vá nhĩ nội soi): Ù tai, nghe kém
*   Viêm tai giữa tổn thương xương con ( thay thế) xương con: Ù tai, nghe kém nặng xốp xơ tai ( phẫu thuật ),Ù tai nghe kém
*   Giảm áp dây TK VII, nối dây VII Liệt mặt….
*   Viêm tai giữa ứ dịch, xẹp nhĩ: Nghe kém, ù tai
*   U vòm
*   U hốc mũi
*   Hạt xơ dây thanh, u nang dây thanh, polyp dây thanh, ung thư dây thanh Khan tiếng, nói mệt, soi có bệnh tích
*   Ung thư vùng tai mũi họng
*   Viêm họng mạn tính Ngứa họng, ho…
*   HC trào ngược dạ dày thực quản
*   Ngủ ngáy
*   Chảy máu mũi
*   Điếc đột ngột: Ù tai nghe kém đột ngột trong vòng vài ba ngày
*   Viêm mũi sơ sinh Ngạt mũi, chảy mũi
*   Dị vật mũi, họng, thanh quản, thực quản
*   Nấm ống tai, viêm da khô ống tai, ráy tai
*   Viêm loét lưỡi, ung thư lưỡi`,
            contentMarkDownEn: `#### Specialist II Doctor Nguyen Ngoc Phan

*   Former ENT doctor at Hong Ngoc General Hospital
*   Former Deputy Head of Department of Otolaryngology, Central Hospital for Transport
*   Currently working at Hanoi Medical University Hospital

###### Training process

*   Graduated in I Ear, Nose and Throat major, Hanoi Medical University (1987)
*   Graduated in Otorhinolaryngology II, Hanoi Medical University (2008)

###### Working history

*   Currently working at Hanoi Medical University Hospital
*   Doctor in charge of Department of Otolaryngology, Hospital Transportation Central.
*   Former Deputy Head of Department of Otolaryngology, National Hospital of Transport.
*   Ear, Nose and Throat Specialist, Hong Ngoc General Hospital.
*   Ear, Nose and Throat Specialist, Hung Viet Oncology Hospital.

###### Books about ENT

*   Advanced Valhassel Ear Surgery (2006-2008)
*   Otitis media (2010)
*   Vaginitis (2011)
*   Inflammation of the nose and sinuses (2012)
*   Answer symptoms of ENT disease (2018)

###### Members of scientific associations and professional organizations

*   Member of Hanoi Trade Union Association
*   Member of Southern Trade Association
*   Member of Vietnam Trade Union Association

###### Participate in health topics

*   Health of the elderly
*   24 hour health consultation

###### Examination and treatment

*   Inflammation of the nose and sinuses: stuffy nose, runny nose, phlegm in the throat,…
*   Allergic Rhinitis: Sneezing, stuffy nose, runny nose…
*   Children's sinusitis: stuffy nose, runny nose, cough...
*   Vaginitis: Runny nose, stuffy nose, cough…
*   Tonsillitis: Or sore throat, cough…
*   Perforated tympanic membrane (endoscopic tympanic patch): Tinnitus, hearing loss
*   Otitis media with damage to the fibula (replacement) of the ossicles: Tinnitus, severe hearing loss, otosclerosis (surgery), Ù hearing loss
*   Depressurize 7th nerve wire, connect VII face paralysis….
*   Otitis media with fluid retention, atrial collapse: Hearing loss, tinnitus
*   Domestic tumor
*   Nasal cavity tumor
*   Vocal cord nodules, vocal cord cysts, vocal cord polyps, vocal cord cancer.
*   Ear, nose and throat cancer
*   Chronic sore throat Sore throat, cough…
*   Gastroesophageal reflux disease
*   Snoring
*   Nosebleed
*   Sudden deafness: sudden loss of hearing within a few days
*   Newborn rhinitis: stuffy nose, runny nose
*   Foreign body in nose, throat, larynx, esophagus
*   Auricular fungus, ear canal dry dermatitis, earwax
*   Lung ulcer, tongue cancer`,
            doctorId: 25,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Tiến sĩ, Bác sĩ Nguyễn Văn Doanh</h4>
         <ul>
            <li>Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Thu Cúc</li>
            <li>Nguyên chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị Việt Xô</li>
            <li>Bác sĩ có 40 năm kinh nghiệm làm việc chuyên khoa Nội Thần kinh</li>
            <li>Bác sĩ khám cho người bệnh từ 16 tuổi trở lên</li>
         </ul>
         <h6>Khám và điều trị</h6>
         <ul>
            <li>Các bệnh đau đầu: Chứng đau nửa đầu, đau đầu căn nguyên mạch máu, đau đầu mạn tính hàng ngày,..</li>
            <li>Bệnh đau vai gáy do thoái hóa cột sống cổ, thoát vị đĩa đệm cột sống cổ, …</li>
            <li>Đau thắt lưng hông do thoái hóa, thoát vị, đau do viêm khớp cùng chậu…</li>
            <li>Rối loạn tiền đình</li>
            <li>Điều trị chóng mặt do thiếu máu não</li>
            <li>Tư vấn và điều trị các bệnh lý rối loạn về giấc ngủ: mất ngủ cấp tính hoặc mạn tính</li>
            <li>Liệt dây 7 ngoại vi: Viêm các dây thần kinh sọ não và các dây thần kinh ngoại vi khác như hội chứng ống cổ tay, đau vai khuỷu tay do chơi thể thao</li>
            <li>Liệt nửa người do nhồi máu não</li>
            <li>Các bệnh lý về sa sút trí tuệ: Suy giảm nhận thức nhẹ, suy giảm trí nhớ, sa sút trí tuệ nguyên nhân mạch máu (sa sút trí tuệ sau đột quỵ),Alzheimer</li>
            <li>Bệnh rối loạn vận động như bệnh Parkinson</li>
         </ul>`,
            contentHtmlEn: `<h4>Dr.Phil, Doctor Nguyen Van Doanh</h4>
        <ul>
           <li>Head of Medical Examination Department, Thu Cuc International General Hospital</li>
           <li>Former Head of Neurology Department, Viet Xo Friendship Hospital</li>
           <li>Doctor with 40 years of experience in Internal Medicine</li>
           <li>Doctor examines a patient aged 16 years and over</li>
        </ul>
        <h6>Examination and treatment</h6>
        <ul>
           <li>Headache diseases: Migraine, vascular headache, chronic daily headache,..</li>
           <li>Shoulder pain due to cervical spondylosis, cervical disc herniation, …</li>
           <li>Lower back pain due to degeneration, hernia, pain due to sacroiliitis…</li>
           <li>Vestibular disorders</li>
           <li>Treatment of dizziness caused by cerebral ischemia</li>
           <li>Consultation and treatment of sleep disorders: acute or chronic insomnia</li>
           <li>Paralysis of the 7th cranial nerve: Inflammation of the cranial nerves and other peripheral nerves such as carpal tunnel syndrome, shoulder and elbow pain due to sports</li>
           <li>Hemiplegia due to cerebral infarction</li>
           <li>Dementia diseases: Mild cognitive impairment, memory impairment, vascular dementia (post-stroke dementia), Alzheimer's</li>
           <li>Mobility disorders such as Parkinson's disease</li>
        </ul>`,
            descriptionVi: `Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Thu Cúc
Nguyên chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị Việt Xô
Bác sĩ có 40 năm kinh nghiệm làm việc chuyên khoa Nội Thần kinh
Bác sĩ khám cho người bệnh từ 16 tuổi trở lên`,
            descriptionEn: `Head of Medical Examination Department, Thu Cuc International General Hospital
Former head of the neurology department, Viet Xo Friendship Hospital
Doctor with 40 years of experience working in Neurology
A doctor examines a patient 16 years and older`,
            contentMarkDownVi: `#### Tiến sĩ, Bác sĩ Nguyễn Văn Doanh

*   Trưởng khoa Khám bệnh, Bệnh viện Đa khoa Quốc tế Thu Cúc
*   Nguyên chủ nhiệm khoa thần kinh, Bệnh viện Hữu Nghị Việt Xô
*   Bác sĩ có 40 năm kinh nghiệm làm việc chuyên khoa Nội Thần kinh
*   Bác sĩ khám cho người bệnh từ 16 tuổi trở lên

###### Khám và điều trị

*   Các bệnh đau đầu: Chứng đau nửa đầu, đau đầu căn nguyên mạch máu, đau đầu mạn tính hàng ngày,..
*   Bệnh đau vai gáy do thoái hóa cột sống cổ, thoát vị đĩa đệm cột sống cổ, …
*   Đau thắt lưng hông do thoái hóa, thoát vị, đau do viêm khớp cùng chậu…
*   Rối loạn tiền đình
*   Điều trị chóng mặt do thiếu máu não
*   Tư vấn và điều trị các bệnh lý rối loạn về giấc ngủ: mất ngủ cấp tính hoặc mạn tính
*   Liệt dây 7 ngoại vi: Viêm các dây thần kinh sọ não và các dây thần kinh ngoại vi khác như hội chứng ống cổ tay, đau vai khuỷu tay do chơi thể thao
*   Liệt nửa người do nhồi máu não
*   Các bệnh lý về sa sút trí tuệ: Suy giảm nhận thức nhẹ, suy giảm trí nhớ, sa sút trí tuệ nguyên nhân mạch máu (sa sút trí tuệ sau đột quỵ),Alzheimer
*   Bệnh rối loạn vận động như bệnh Parkinson`,
            contentMarkDownEn: `#### Dr.Phil, Doctor Nguyen Van Doanh

*   Head of Medical Examination Department, Thu Cuc International General Hospital
*   Former Head of Neurology Department, Viet Xo Friendship Hospital
*   Doctor with 40 years of experience in Internal Medicine
*   Doctor examines a patient aged 16 years and over

###### Examination and treatment

*   Headache diseases: Migraine, vascular headache, chronic daily headache,..
*   Shoulder pain due to cervical spondylosis, cervical disc herniation, …
*   Lower back pain due to degeneration, hernia, pain due to sacroiliitis…
*   Vestibular disorders
*   Treatment of dizziness caused by cerebral ischemia
*   Consultation and treatment of sleep disorders: acute or chronic insomnia
*   Paralysis of the 7th cranial nerve: Inflammation of the cranial nerves and other peripheral nerves such as carpal tunnel syndrome, shoulder and elbow pain due to sports
*   Hemiplegia due to cerebral infarction
*   Dementia diseases: Mild cognitive impairment, memory impairment, vascular dementia (post-stroke dementia), Alzheimer's
*   Mobility disorders such as Parkinson's disease`,
            doctorId: 26,
            createdAt: new Date(),
            updatedAt: new Date()
         }, {
            contentHtmlVi: `<h4>Tiến sĩ Bác sĩ Bùi Thị Phương Nga</h4>
        <ul>
           <li>Công tác tại Bệnh viện Từ Dũ</li>
           <li>Hơn 30 năm kinh nghiệm trong lĩnh vực Sản phụ khoa</li>
        </ul>
        <h6>Quá trình công tác</h6>
        <ul>
           <li>Bác sĩ Cao cấp Bệnh viện Từ Dũ</li>
           <li>Giảng viên cao cấp kiêm Phó Trưởng Bộ môn Sản Phụ khoa, Đại học Y khoa Phạm Ngọc Thạch</li>
        </ul>
        <h6>Quá trình đào tạo</h6>
        <ul>
           <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y dược TP.HCM</li>
           <li>Tu nghiệp trong và ngoài nước: Bệnh viện Từ Dũ, Đại học Bourgogne (Pháp),Đại học Auvergne de Clermont Ferrand I, Đại học UCL, Bruxelles (Bỉ)</li>
        </ul>
        <h6>Thành viên các Hội khoa học, tổ chức chuyên môn</h6>
        <ul>
           <li>Hội Sản Phụ khoa TP.HCM (HOGA)</li>
           <li>Hội Nội tiết Sinh sản &amp; Vô sinh TP.HCM (HOSREM)</li>
        </ul>
        <h6>Khám và điều trị</h6>
        <ul>
           <li>Khám thai và theo dõi thai kỳ</li>
           <li>Chẩn đoán trước sinh và quản lý thai</li>
           <li>Khám, điều trị các rối loạn tiền mãn kinh, mãn kinh</li>
           <li>Siêu âm canh trứng, sản phụ khoa đường bụng và âm đạo</li>
           <li>Sàng lọc, chẩn đoán trước sinh, các bệnh lý di truyền</li>
           <li>Hỗ trợ sinh sản</li>
           <li>Khám và điều trị các bệnh lý phụ khoa</li>
           <li>Viêm nhiễm phụ khoa</li>
           <li>Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên</li>
           <li>Khám và tư vấn sức khỏe tiền hôn nhân</li>
           <li>Ung thư phụ khoa </li>
           <li>U nang buồng trứng</li>
           <li>Viêm cổ tử cung </li>
           <li>U xơ tử cung </li>
           <li>Viêm lộ tuyến cổ tử cung</li>
        </ul>`,
            contentHtmlEn: `<h4>Dr.Phil, Doctor Bui Thi Phuong Nga</h4>
        <ul>
           <li>Works at Tu Du Hospital</li>
           <li>Over 30 years of experience in the field of Obstetrics and Gynecology</li>
        </ul>
        <h6>Working history</h6>
        <ul>
           <li>Senior Doctor of Tu Du Hospital</li>
           <li>Senior Lecturer cum Vice Head of Obstetrics and Gynecology Department, Pham Ngoc Thach Medical University</li>
        </ul>
        <h6>Training process</h6>
        <ul>
           <li>Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City</li>
           <li>Training at home and abroad: Tu Du Hospital, University of Bourgogne (France), Auvergne de Clermont Ferrand I University, UCL University, Brussels (Belgium)</li>
        </ul>
        <h6>Members of scientific associations and professional organizations</h6>
        <ul>
           <li>Ho Chi Minh City Association of Obstetrics and Gynecology (HOGA)</li>
           <li>Reproductive Endocrine Society &amp; Infertility HCMC (HOSREM)</li>
        </ul>
        <h6>Examination and treatment</h6>
        <ul>
           <li>Pregnancy check-ups and pregnancy monitoring</li>
           <li>Pregnancy diagnosis and pregnancy management</li>
           <li>Examination and treatment of perimenopausal and menopausal disorders</li>
           <li>Ultrasound of eggs, obstetrics and gynecology of abdomen and vagina</li>
           <li>Screening, prenatal diagnosis, genetic diseases</li>
           <li>Assisted Reproductive</li>
           <li>Examination and treatment of gynecological diseases</li>
           <li>Gynecological infections</li>
           <li>Adolescent reproductive health counseling and care</li>
           <li>Pre-marital health examination and counseling</li>
           <li>Gynecological Cancer </li>
           <li>Ovarian cyst</li>
           <li>cervicitis </li>
           <li>Uterine Fibroids </li>
           <li>Inflammation of the cervix</li>
        </ul>`,
            descriptionVi: `Công tác tại Bệnh viện Từ Dũ
Hơn 30 năm kinh nghiệm trong lĩnh vực Sản phụ khoa`,
            descriptionEn: `Working at Tu Du Hospital
Over 30 years of experience in the field of Obstetrics and Gynecology`,
            contentMarkDownVi: `#### Tiến sĩ Bác sĩ Bùi Thị Phương Nga

*   Công tác tại Bệnh viện Từ Dũ
*   Hơn 30 năm kinh nghiệm trong lĩnh vực Sản phụ khoa

###### Quá trình công tác

*   Bác sĩ Cao cấp Bệnh viện Từ Dũ
*   Giảng viên cao cấp kiêm Phó Trưởng Bộ môn Sản Phụ khoa, Đại học Y khoa Phạm Ngọc Thạch

###### Quá trình đào tạo

*   Tốt nghiệp Bác sĩ đa khoa, Đại học Y dược TP.HCM
*   Tu nghiệp trong và ngoài nước: Bệnh viện Từ Dũ, Đại học Bourgogne (Pháp),Đại học Auvergne de Clermont Ferrand I, Đại học UCL, Bruxelles (Bỉ)

###### Thành viên các Hội khoa học, tổ chức chuyên môn

*   Hội Sản Phụ khoa TP.HCM (HOGA)
*   Hội Nội tiết Sinh sản & Vô sinh TP.HCM (HOSREM)

###### Khám và điều trị

*   Khám thai và theo dõi thai kỳ
*   Chẩn đoán trước sinh và quản lý thai
*   Khám, điều trị các rối loạn tiền mãn kinh, mãn kinh
*   Siêu âm canh trứng, sản phụ khoa đường bụng và âm đạo
*   Sàng lọc, chẩn đoán trước sinh, các bệnh lý di truyền
*   Hỗ trợ sinh sản
*   Khám và điều trị các bệnh lý phụ khoa
*   Viêm nhiễm phụ khoa
*   Tư vấn, chăm sóc sức khỏe sinh sản vị thành niên
*   Khám và tư vấn sức khỏe tiền hôn nhân
*   Ung thư phụ khoa
*   U nang buồng trứng
*   Viêm cổ tử cung
*   U xơ tử cung
*   Viêm lộ tuyến cổ tử cung`,
            contentMarkDownEn: `#### Dr.Phil, Doctor Bui Thi Phuong Nga

*   Works at Tu Du Hospital
*   Over 30 years of experience in the field of Obstetrics and Gynecology

###### Working history

*   Senior Doctor of Tu Du Hospital
*   Senior Lecturer cum Vice Head of Obstetrics and Gynecology Department, Pham Ngoc Thach Medical University

###### Training process

*   Graduated as a General Doctor, University of Medicine and Pharmacy, Ho Chi Minh City
*   Training at home and abroad: Tu Du Hospital, University of Bourgogne (France), Auvergne de Clermont Ferrand I University, UCL University, Brussels (Belgium)

###### Members of scientific associations and professional organizations

*   Ho Chi Minh City Association of Obstetrics and Gynecology (HOGA)
*   Reproductive Endocrine Society & Infertility HCMC (HOSREM)

###### Examination and treatment

*   Pregnancy check-ups and pregnancy monitoring
*   Pregnancy diagnosis and pregnancy management
*   Examination and treatment of perimenopausal and menopausal disorders
*   Ultrasound of eggs, obstetrics and gynecology of abdomen and vagina
*   Screening, prenatal diagnosis, genetic diseases
*   Assisted Reproductive
*   Examination and treatment of gynecological diseases
*   Gynecological infections
*   Adolescent reproductive health counseling and care
*   Pre-marital health examination and counseling
*   Gynecological Cancer
*   Ovarian cyst
*   cervicitis
*   Uterine Fibroids
*   Inflammation of the cervix`,
            doctorId: 27,
            createdAt: new Date(),
            updatedAt: new Date()
         }]);
   },

   async down(queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Posts', null, {});
   }
};
