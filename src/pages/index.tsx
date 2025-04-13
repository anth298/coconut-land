import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import { useState, useRef } from 'react'
import Image from 'next/image'

const craftVillages = [
  {
    id: 'coconut-candy',
    name: 'Làng nghề kẹo dừa',
    description: 'Làng nghề kẹo dừa là một trong những làng nghề truyền thống nổi tiếng của Bến Tre. Kẹo dừa được làm từ nguyên liệu chính là nước cốt dừa, đường, mạch nha và một số phụ liệu khác, có vị ngọt, béo, thơm mùi dừa và dẻo.',
    image: '/images/keo-dua.jpg',
    products: ['Kẹo dừa truyền thống', 'Kẹo dừa sầu riêng', 'Kẹo dừa dứa', 'Kẹo dừa cacao'],
    location: 'Huyện Châu Thành, Bến Tre'
  },
  {
    id: 'coconut-shell-craft',
    name: 'Làng nghề chế tác gáo dừa',
    description: 'Làng nghề chế tác gáo dừa sử dụng vỏ quả dừa khô để chế tác thành các sản phẩm thủ công mỹ nghệ đẹp mắt, tinh xảo như chén, đĩa, muỗng, đồ trang trí, v.v.',
    image: '/images/thu-cong-my-nghe.jpg',
    products: ['Tô chén gáo dừa', 'Đồ thủ công mỹ nghệ từ gáo dừa', 'Đồ lưu niệm từ gáo dừa'],
    location: 'Huyện Giồng Trôm, Bến Tre'
  },
  {
    id: 'coconut-weaving',
    name: 'Làng nghề đan lát từ lá dừa',
    description: 'Làng nghề đan lát từ lá dừa sử dụng lá dừa khô để đan thành các sản phẩm như nón, giỏ, túi xách, chiếu, v.v.',
    image: '/images/dan-lat.jpg',
    products: ['Nón lá dừa', 'Giỏ đan từ lá dừa', 'Túi xách từ lá dừa', 'Chiếu từ lá dừa'],
    location: 'Huyện Mỏ Cày Nam, Bến Tre'
  },
  {
    id: 'coconut-oil',
    name: 'Làng nghề dầu dừa',
    description: 'Làng nghề dầu dừa sử dụng cơm dừa khô để ép lấy dầu, sản xuất ra các sản phẩm dầu dừa nguyên chất được sử dụng trong nấu ăn, làm đẹp và chăm sóc sức khỏe.',
    image: '/images/dau-dua.jpg',
    products: ['Dầu dừa nguyên chất', 'Dầu dừa thảo dược', 'Mỹ phẩm từ dầu dừa'],
    location: 'Huyện Giồng Trôm, Bến Tre'
  },
  {
    id: 'coconut-charcoal',
    name: 'Làng nghề than thiêu kết',
    description: 'Làng nghề than thiêu kết sử dụng vỏ quả dừa khô để sản xuất ra than hoạt tính, than nướng BBQ, than thơm, v.v.',
    image: '/images/than-theu-ket.jpg',
    products: ['Than hoạt tính từ vỏ dừa', 'Than nướng BBQ', 'Than thơm'],
    location: 'Huyện Mỏ Cày Bắc, Bến Tre'
  },
  {
    id: 'rice-paper',
    name: 'Làng nghề bánh tráng',
    description: 'Làng nghề bánh tráng truyền thống sản xuất các loại bánh tráng với công thức đặc biệt của địa phương.',
    image: '/images/banh-trang.jpg',
    products: ['Bánh tráng truyền thống', 'Bánh tráng dừa', 'Bánh tráng mè'],
    location: 'Huyện Châu Thành, Bến Tre'
  },
]

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Redesigned to match Black Tomato image */}
      <section className="relative h-screen overflow-hidden">
        {/* Main Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(/images/ben-tre-banner.jpg)',
            filter: 'brightness(0.85) contrast(1.15) saturate(1.0)',
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/40"></div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber-500/5"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-amber-500/5"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        ></motion.div>

        {/* Main Content with INTRODUCING text */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="max-w-4xl"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm md:text-base uppercase tracking-[0.4em] mb-5 font-light text-amber-300/90"
            >
              CHÀO MỪNG ĐẾN VỚI
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.9 }}
              className="text-4xl md:text-7xl font-extralight tracking-wider mb-8 text-white"
            >
              <span className="block mb-1">Sông Nước</span>
              <span className="inline-block">
                <span className="text-amber-200/90">Miền</span> Tây
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="h-px bg-gradient-to-r from-transparent via-amber-400/80 to-transparent mx-auto mb-10"
            ></motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="mt-10 border border-amber-500/30 px-8 py-4 text-sm font-light tracking-[0.3em] text-amber-100 hover:bg-amber-900/20 transition-all overflow-hidden group relative"
            >
              <span className="relative z-10">DU LỊCH NÀO</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-amber-900/0 via-amber-700/30 to-amber-900/0"
                initial={{ x: '-100%', opacity: 0 }}
                whileHover={{ x: '100%', opacity: 1 }}
                transition={{ duration: 1 }}
              ></motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Text at Bottom */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-amber-200/70 text-xs tracking-[0.3em] font-light flex flex-col items-center"
          >
            <span>CUỘN</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-12 w-[1px] bg-amber-500/30 mt-3"
            />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section - Styled to match Black Tomato */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-amber-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-amber-900/10 to-transparent"></div>
        
        <motion.div 
          className="absolute top-40 right-40 w-48 h-48 rounded-full bg-amber-500/5"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h2 
              className="text-3xl font-light mb-6 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                Bạn có từng biết đến Bến Tre?
              </span>
            </motion.h2>
            
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent mx-auto mb-10"></div>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed mb-10 font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Bến Tre là vùng đất của dừa, nơi sông nước hữu tình và những làng nghề truyền thống tạo nên một điểm đến đầy mê hoặc. Hãy để chúng tôi đưa bạn khám phá những trải nghiệm độc đáo và xa xỉ tại mảnh đất miền Tây này.
            </motion.p>
            
            <motion.div
              className="group/btn inline-block overflow-hidden relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="border border-amber-500/30 px-8 py-3 text-sm font-light tracking-[0.2em] text-amber-200 relative z-10"
              >
                <span className="relative z-10">COI THÊM MIẾNG...?</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-900/0 via-amber-700/30 to-amber-900/0"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 1 }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Testimonials - Styled like Black Tomato */}
          <div className="mb-20">
            <div className="overflow-hidden relative">
              <motion.div 
                className="flex"
                animate={{ x: [0, '-100%'] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 25, 
                  ease: "linear",
                  repeatType: "loop" 
                }}
              >
                {/* First set of testimonials */}
                <div className="flex flex-none gap-12 items-center">
                  <div className="border-t border-amber-500/20 pt-8 text-center w-96 px-4">
                    <p className="text-gray-300 italic text-sm font-light leading-relaxed">
                      "Những làng nghề dừa tại Bến Tre thực sự là trải nghiệm văn hóa không thể bỏ qua. Mỗi làng nghề là một câu chuyện riêng về sự kết hợp giữa thiên nhiên và bàn tay con người."
                    </p>
                    <p className="mt-4 text-amber-400/80 text-xs">— Traveller Magazine</p>
                  </div>
                  <div className="border-t border-amber-500/20 pt-8 text-center w-96 px-4">
                    <p className="text-gray-300 italic text-sm font-light leading-relaxed">
                      "Coconut Land giúp bạn tận hưởng những khoảnh khắc đáng nhớ giữa thiên nhiên miền Tây. Từ những con kênh nhỏ đến những rừng dừa bạt ngàn, mỗi góc nhìn đều là bức tranh hoàn mỹ."
                    </p>
                    <p className="mt-4 text-amber-400/80 text-xs">— Khách du lịch, Hà Nội</p>
                  </div>
                  <div className="border-t border-amber-500/20 pt-8 text-center w-96 px-4">
                    <p className="text-gray-300 italic text-sm font-light leading-relaxed">
                      "Họ quan tâm đến từng chi tiết nhỏ để tạo nên trải nghiệm hoàn hảo cho khách hàng. Từ bữa ăn đến phương tiện di chuyển, mọi thứ đều được sắp xếp một cách chuyên nghiệp."
                    </p>
                    <p className="mt-4 text-amber-400/80 text-xs">— Gia đình anh Tuấn, TP.HCM</p>
                  </div>
                </div>
                
                {/* Duplicate of testimonials for seamless loop */}
                <div className="flex flex-none gap-12 items-center">
                  <div className="border-t border-amber-500/20 pt-8 text-center w-96 px-4">
                    <p className="text-gray-300 italic text-sm font-light leading-relaxed">
                      "Những làng nghề dừa tại Bến Tre thực sự là trải nghiệm văn hóa không thể bỏ qua. Mỗi làng nghề là một câu chuyện riêng về sự kết hợp giữa thiên nhiên và bàn tay con người."
                    </p>
                    <p className="mt-4 text-amber-400/80 text-xs">— Traveller Magazine</p>
                  </div>
                  <div className="border-t border-amber-500/20 pt-8 text-center w-96 px-4">
                    <p className="text-gray-300 italic text-sm font-light leading-relaxed">
                      "Coconut Land giúp bạn tận hưởng những khoảnh khắc đáng nhớ giữa thiên nhiên miền Tây. Từ những con kênh nhỏ đến những rừng dừa bạt ngàn, mỗi góc nhìn đều là bức tranh hoàn mỹ."
                    </p>
                    <p className="mt-4 text-amber-400/80 text-xs">— Khách du lịch, Hà Nội</p>
                  </div>
                  <div className="border-t border-amber-500/20 pt-8 text-center w-96 px-4">
                    <p className="text-gray-300 italic text-sm font-light leading-relaxed">
                      "Họ quan tâm đến từng chi tiết nhỏ để tạo nên trải nghiệm hoàn hảo cho khách hàng. Từ bữa ăn đến phương tiện di chuyển, mọi thứ đều được sắp xếp một cách chuyên nghiệp."
                    </p>
                    <p className="mt-4 text-amber-400/80 text-xs">— Gia đình anh Tuấn, TP.HCM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Start Your Journey Section */}
          <div className="mt-32">
            <motion.h3 
              className="text-2xl font-light mb-16 tracking-wide text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                Bắt đầu chuyến hành trình
              </span>
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
              {craftVillages.slice(0, 6).map((village, index) => (
                <motion.div 
                  key={village.id} 
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-40 overflow-hidden mb-3 relative">
                    <Image
                      src={village.image}
                      alt={village.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ filter: 'contrast(1.1) brightness(0.9)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-amber-300 text-xs tracking-wider">Khám phá</span>
                    </div>
                  </div>
                  <p className="text-center text-amber-300/90 font-light text-sm tracking-wide">{village.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Trips Section */}
      <section className="py-24 bg-black text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-900/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 left-10 w-16 h-16 rounded-full bg-amber-500/10"
          animate={{ y: [0, 15, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 5 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-amber-500/10"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 7 }}
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <motion.h2 
              className="inline-block text-3xl font-light mb-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                Trải Nghiệm
              </span>
            </motion.h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4"></div>
            <p className="text-amber-300/70 italic text-sm font-light tracking-wider">
              _Những trải nghiệm đáng nhớ để thúc đẩy tâm trí_
            </p>
          </div>

          <div className="grid grid-cols-12 gap-y-36">
            {craftVillages.slice(0, 6).map((village, index) => (
              <motion.div
                key={village.id}
                className={`group relative ${index % 2 === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-8 md:col-start-5'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
              >
                {/* Village number */}
                <div className="absolute -top-16 -left-2 text-8xl font-thin text-amber-500/10 select-none">
                  0{index + 1}
                </div>
                
                {/* Main content */}
                <div className="grid grid-cols-12 items-center">
                  {/* Image section - alternate sides */}
                  <div className={`col-span-12 md:col-span-6 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative overflow-hidden" style={{ paddingBottom: '120%' }}>
                      <Image
                        src={village.image}
                        alt={village.name}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        style={{ 
                          filter: 'contrast(1.1) saturate(1.1)',
                          objectPosition: 'center' 
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-amber-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ opacity: 0.4 }}
                      ></motion.div>
                      
                      {/* Price tag */}
                      <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-3 text-xs">
                        <span className="block text-amber-300 font-light">Chỉ từ</span>
                        <span className="block text-white text-lg font-light tracking-wide">1.000.000₫</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Text content - alternate sides */}
                  <div className={`col-span-12 md:col-span-6 ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'}`}>
                    <div className="pt-8 md:pt-0">
                      <div className="mb-6">
                        <div className="text-amber-400 text-xs tracking-widest font-light uppercase mb-2">
                          2 đêm · Bến Tre · {village.location}
                        </div>
                        <h3 className="text-2xl font-light mb-4 tracking-wide text-white">
                          {village.name}
                        </h3>
                        <div className="w-12 h-px bg-amber-500/30 mb-4"></div>
                        <p className="text-gray-300 text-sm mb-6 font-light leading-relaxed">
                          {village.description}
                        </p>
                      </div>
                      
                      {/* Products list */}
                      <div className="mb-8">
                        <h4 className="text-amber-300/80 text-xs uppercase tracking-wider mb-3">Sản phẩm đặc trưng</h4>
                        <ul className="space-y-2">
                          {village.products.map((product, pIndex) => (
                            <li key={pIndex} className="text-gray-400 text-sm flex items-center">
                              <span className="w-1 h-1 bg-amber-400 rounded-full mr-2"></span>
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* CTA button */}
                      <div className="group/btn inline-block">
                        <motion.button 
                          className="border border-amber-500/30 px-4 py-2 text-sm font-light text-amber-400 hover:bg-amber-900/20 transition-colors duration-300 relative pr-8 group-hover/btn:pl-6"
                          whileHover={{ x: 5 }}
                        >
                          Khám phá
                          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 group-hover/btn:translate-x-1 transition-transform">
                            →
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center mt-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden group/main">
              <motion.button 
                className="border border-amber-500/50 px-10 py-4 text-sm font-light tracking-widest text-amber-200 bg-black/80 relative z-10 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10">KHÁM PHÁ TẤT CẢ</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-900/0 via-amber-700/30 to-amber-900/0"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 1 }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote/Testimonial Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1193475705/photo/pattern-of-leaves-wall-texture-background.jpg?s=612x612&w=0&k=20&c=qGx3ZIJrY3VJ-vs7RiwwgXu3ImxF1lU7aaocT1EtJXY=')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-900/10 to-transparent"></div>
        
        <motion.div 
          className="absolute bottom-20 right-40 w-32 h-32 rounded-full bg-amber-500/5"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        ></motion.div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="text-8xl text-amber-500/10 font-serif absolute top-0 left-0 transform -translate-y-1/2">"</span>
            <p className="text-xl md:text-2xl font-light italic text-amber-100/90 leading-relaxed px-12">
              Trekking across the coconut groves, navigating through water canals, I was rewarded with memories that will last a lifetime
            </p>
            <span className="text-8xl text-amber-500/10 font-serif absolute bottom-0 right-0 transform translate-y-1/3">"</span>
          </motion.div>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent mx-auto mb-4"></div>
            <p className="text-amber-400/80 font-light text-sm tracking-wider">
              _Khách du lịch, Bến Tre_
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Styled to match Black Tomato */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-900/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-amber-900/5 to-transparent"></div>
        
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-amber-500/5"
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 6 }}
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light mb-8 tracking-wide">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                  Chúng tôi là ai?
                </span>
                <br />
                <span className="text-white/80">và tại sao chúng tôi làm điều này</span>
              </h2>
              
              <div className="w-16 h-px bg-amber-500/30 mb-8"></div>
              
              <p className="text-gray-300 leading-relaxed mb-10 font-light">
                Từ năm 2023, Coconut Land luôn nỗ lực tạo ra những chuyến đi đáng nhớ, tùy chỉnh riêng cho từng khách hàng. Chúng tôi hiểu rằng mỗi người đều có mong muốn trải nghiệm khác nhau tại Bến Tre, và đó là lý do chúng tôi tồn tại.
              </p>
              
              <div className="group/btn inline-block">
                <motion.button 
                  className="font-light tracking-wider text-amber-300 hover:text-amber-200 relative pr-8 group-hover/btn:pl-2 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  COI TÀI LIỆU
                  <span className="absolute right-0 top-1/2 transform -translate-y-1/2 group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
              style={{ paddingBottom: '80%' }}
            >
              <div className="absolute inset-0">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="https://media.mia.vn/uploads/blog-du-lich/ben-tre-mua-nuoc-noi-1637568996.jpg"
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                    style={{ filter: 'contrast(1.1) brightness(0.9)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 bg-amber-500/80 rounded-full flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-amber-300 text-xs tracking-wider mb-2">COCONUT LAND PRESENTS</p>
                    <p className="text-white font-light">Hành trình khám phá xứ dừa</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h3 
            className="text-3xl font-light mb-10 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
              Bạn đã sẵn sàng bắt đầu chuyến hành trình của riêng bạn chứ?
            </span>
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="relative overflow-hidden group/main inline-block">
              <motion.button 
                className="border border-amber-500/50 px-12 py-4 text-sm font-light tracking-widest text-amber-200 bg-black/80 relative z-10 overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10">TRIỂN CHIÊU!!!</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-900/0 via-amber-700/30 to-amber-900/0"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 1 }}
                  transition={{ duration: 0.8 }}
                ></motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
} 